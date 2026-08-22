/**
 * POST /api/chat — the chatbot's backend.
 *
 * This is a Cloudflare Pages Function, not part of the Next build. Anything in
 * /functions is deployed by Cloudflare alongside the static export and routed
 * by path, which is what lets a statically-exported site have a real endpoint.
 *
 * It exists because the API key cannot go in the browser. The site ships as
 * static files, so every line of its JavaScript is public — a key in the
 * frontend would be extracted and billed to us within days. The key lives as a
 * Cloudflare secret and only ever exists here, server-side.
 *
 * SETUP
 *   Cloudflare dashboard -> your Pages project -> Settings -> Environment
 *   variables -> add ANTHROPIC_API_KEY as a SECRET (not plaintext), for both
 *   Production and Preview. Get the key from console.anthropic.com.
 *
 *   Optional: CHAT_MODEL to override the model without a code change.
 */
import Anthropic from "@anthropic-ai/sdk";
import { SYSTEM_PROMPT } from "./knowledge";

interface Env {
  ANTHROPIC_API_KEY: string;
  CHAT_MODEL?: string;
}

/** Wire format shared with the browser widget. */
type Turn = { role: "user" | "assistant"; content: string };

const DEFAULT_MODEL = "claude-opus-5";

/** Answers are meant to be a few short paragraphs; this is a ceiling, not a target. */
const MAX_TOKENS = 2048;

/** Longest single message we will accept, in characters. */
const MAX_MESSAGE_CHARS = 2000;

/**
 * How many prior turns to keep. The system prompt is the expensive part of
 * every request and it is fixed, so trimming history saves less than it looks —
 * but an unbounded transcript is a way to run up a bill, so it is capped.
 */
const MAX_HISTORY_TURNS = 12;

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json", "Cache-Control": "no-store" },
  });

export const onRequestPost: PagesFunction<Env> = async (context) => {
  const { request, env } = context;

  if (!env.ANTHROPIC_API_KEY) {
    // Misconfiguration, not a user error — say so plainly in the log and give
    // the visitor a route to a human rather than a stack trace.
    console.error("chat: ANTHROPIC_API_KEY is not set on this deployment");
    return json(
      { error: "The assistant isn't configured yet. Please email sixstacksolutions@gmail.com." },
      503
    );
  }

  let body: { messages?: Turn[] };
  try {
    body = await request.json();
  } catch {
    return json({ error: "Invalid request." }, 400);
  }

  const incoming = Array.isArray(body.messages) ? body.messages : [];
  if (incoming.length === 0) {
    return json({ error: "No message provided." }, 400);
  }

  // Rebuild the turns rather than trusting the client's shape: this endpoint is
  // public, so the browser's payload is untrusted input, not a trusted struct.
  const messages = incoming
    .filter(
      (m): m is Turn =>
        !!m &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0
    )
    .slice(-MAX_HISTORY_TURNS)
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_MESSAGE_CHARS) }));

  if (messages.length === 0 || messages[messages.length - 1].role !== "user") {
    return json({ error: "No message provided." }, 400);
  }

  const client = new Anthropic({ apiKey: env.ANTHROPIC_API_KEY });

  try {
    const response = await client.messages.create({
      model: env.CHAT_MODEL || DEFAULT_MODEL,
      max_tokens: MAX_TOKENS,
      // The brief is identical on every request, so cache it — repeat sends of
      // the same prefix are billed at roughly a tenth of the input rate.
      system: [
        { type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } },
      ],
      // Low effort suits FAQ answers: quicker and cheaper, and this is not a
      // reasoning task. Thinking is deliberately left on — disabling it on this
      // model has known failure modes.
      output_config: { effort: "low" },
      messages,
    });

    if (response.stop_reason === "refusal") {
      return json({
        reply:
          "I'm not able to help with that one. If it's about Six Stack Solutions, email sixstacksolutions@gmail.com and a person will pick it up.",
      });
    }

    const reply = response.content
      .filter((b): b is Anthropic.TextBlock => b.type === "text")
      .map((b) => b.text)
      .join("\n")
      .trim();

    if (!reply) {
      return json({
        reply:
          "Sorry — I didn't manage a reply there. Try rephrasing, or email sixstacksolutions@gmail.com.",
      });
    }

    return json({ reply });
  } catch (error) {
    // Most specific first: a rate limit is worth its own message, an auth
    // failure is our problem and should never read as the visitor's fault.
    if (error instanceof Anthropic.RateLimitError) {
      return json(
        { error: "We're getting a lot of questions right now. Try again in a moment." },
        429
      );
    }
    if (error instanceof Anthropic.AuthenticationError) {
      console.error("chat: ANTHROPIC_API_KEY was rejected");
      return json(
        { error: "The assistant isn't available. Please email sixstacksolutions@gmail.com." },
        503
      );
    }
    console.error("chat: request failed", error);
    return json(
      { error: "Something went wrong. Please try again, or email sixstacksolutions@gmail.com." },
      502
    );
  }
};
