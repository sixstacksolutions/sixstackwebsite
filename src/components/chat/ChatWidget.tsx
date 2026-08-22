"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquare, X, Send, Loader2 } from "lucide-react";
import { site } from "@/lib/site";

type Turn = { role: "user" | "assistant"; content: string };

/** Shown before the visitor types anything, to make the bot's scope obvious. */
const SUGGESTIONS = [
  "What services do you offer?",
  "How do you price a project?",
  "Can you take over an existing app?",
];

const GREETING =
  "Hi — I'm the Six Stack assistant. Ask me about our services, how we work, or what we can build for you.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [turns, setTurns] = useState<Turn[]>([]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  // Pin to the newest message whenever the transcript changes.
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [turns, busy]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  // Escape closes the panel — expected of anything that overlays the page.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  async function send(text: string) {
    const message = text.trim();
    if (!message || busy) return;

    // Optimistically render the visitor's turn, and build the payload from the
    // same value rather than from state — setTurns has not applied yet here.
    const next: Turn[] = [...turns, { role: "user", content: message }];
    setTurns(next);
    setInput("");
    setError(null);
    setBusy(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });

      const data = (await res.json().catch(() => null)) as
        | { reply?: string; error?: string }
        | null;

      if (!res.ok || !data?.reply) {
        setError(data?.error ?? "Something went wrong. Please try again.");
        return;
      }

      setTurns((prev) => [...prev, { role: "assistant", content: data.reply as string }]);
    } catch {
      setError("Couldn't reach the assistant. Check your connection and try again.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <>
      {/* Launcher. Bottom-right, above FloatingContact's mobile button, and
          clear of the WhatsApp button on the opposite corner. */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Close assistant" : "Ask the Six Stack assistant"}
        aria-expanded={open}
        className="group fixed bottom-24 right-5 z-40 inline-flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white shadow-[0_12px_34px_-10px_rgba(8,11,18,0.7)] transition-all duration-300 ease-premium hover:-translate-y-0.5 hover:bg-navy sm:bottom-24 sm:right-6 lg:bottom-6 lg:right-24"
      >
        {open ? <X className="h-6 w-6" /> : <MessageSquare className="h-6 w-6" />}
        {!open && (
          <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-brand-500 ring-2 ring-white" />
        )}
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Six Stack assistant"
          className="fixed bottom-40 right-5 z-40 flex h-[min(30rem,calc(100vh-13rem))] w-[min(24rem,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-white shadow-[0_30px_80px_-24px_rgba(8,11,18,0.45)] sm:right-6 lg:bottom-24 lg:right-24"
        >
          <header className="flex items-center justify-between border-b border-line bg-surface-50 px-4 py-3">
            <div>
              <p className="font-display text-sm font-bold text-ink">Six Stack assistant</p>
              <p className="text-[0.7rem] text-slate-muted">
                Answers about our services and process
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close assistant"
              className="rounded-lg p-1.5 text-slate-muted transition-colors hover:bg-white hover:text-ink"
            >
              <X className="h-4 w-4" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto px-4 py-4">
            <Bubble role="assistant">{GREETING}</Bubble>

            {turns.length === 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-line bg-white px-3 py-1.5 text-xs font-medium text-slate-body transition-colors hover:border-brand-200 hover:text-brand-600"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {turns.map((t, i) => (
              <Bubble key={i} role={t.role}>
                {t.content}
              </Bubble>
            ))}

            {busy && (
              <div className="flex items-center gap-2 text-xs text-slate-muted">
                <Loader2 className="h-3.5 w-3.5 animate-spin" />
                Thinking…
              </div>
            )}

            {error && (
              <p className="rounded-lg bg-red-50 px-3 py-2 text-xs text-red-700" role="alert">
                {error}{" "}
                <a href={`mailto:${site.email}`} className="font-semibold underline">
                  Email us instead
                </a>
              </p>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-line px-3 py-3"
          >
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question…"
              maxLength={2000}
              aria-label="Your question"
              className="min-w-0 flex-1 rounded-lg border border-line bg-surface-50 px-3 py-2 text-sm text-ink outline-none transition-colors placeholder:text-slate-muted focus:border-brand-300 focus:bg-white"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              aria-label="Send"
              className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-white transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}

function Bubble({ role, children }: { role: Turn["role"]; children: React.ReactNode }) {
  const isUser = role === "user";
  return (
    <div className={isUser ? "flex justify-end" : "flex justify-start"}>
      <div
        className={
          isUser
            ? "max-w-[85%] whitespace-pre-wrap rounded-2xl rounded-br-sm bg-brand-600 px-3.5 py-2.5 text-sm leading-relaxed text-white"
            : "max-w-[90%] whitespace-pre-wrap rounded-2xl rounded-bl-sm bg-surface-100 px-3.5 py-2.5 text-sm leading-relaxed text-ink"
        }
      >
        {children}
      </div>
    </div>
  );
}
