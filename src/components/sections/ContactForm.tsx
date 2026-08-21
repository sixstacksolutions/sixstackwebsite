"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2, AlertCircle, ArrowRight } from "lucide-react";
import { submitContact, type ContactPayload } from "@/lib/submitContact";

const projectTypes = [
  "Web Development",
  "Mobile App",
  "AI / Machine Learning",
  "Cloud & DevOps",
  "UI/UX Design",
  "Automation",
  "Consulting",
  "Other",
];

const budgets = [
  "Under $5k",
  "$5k to $15k",
  "$15k to $50k",
  "$50k+",
  "Not sure yet",
];

type Errors = Partial<Record<keyof ContactPayload, string>>;

const empty: ContactPayload = {
  name: "",
  email: "",
  company: "",
  projectType: "",
  budget: "",
  message: "",
};

function validate(values: ContactPayload): Errors {
  const e: Errors = {};
  if (!values.name.trim()) e.name = "Please enter your name.";
  if (!values.email.trim()) e.email = "Please enter your email.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email))
    e.email = "Please enter a valid email address.";
  if (!values.projectType) e.projectType = "Select a project type.";
  if (!values.message.trim()) e.message = "Tell us a little about your project.";
  else if (values.message.trim().length < 12)
    e.message = "A little more detail helps us respond well.";
  return e;
}

const fieldBase =
  "w-full rounded-xl border bg-white px-4 py-3 text-sm text-ink placeholder:text-slate-muted/70 transition-colors focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-100";

export function ContactForm() {
  const [values, setValues] = useState<ContactPayload>(empty);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formError, setFormError] = useState<string>("");

  const set = (key: keyof ContactPayload) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) return;

    setStatus("loading");
    setFormError("");
    const result = await submitContact(values);
    if (result.ok) {
      setStatus("success");
      setValues(empty);
    } else {
      setStatus("error");
      setFormError(result.error);
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-line bg-white p-10 text-center shadow-soft"
      >
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-500/10 text-brand-600">
          <Check className="h-7 w-7" />
        </div>
        <h3 className="mt-5 text-xl font-bold text-ink">Thanks, we&apos;ve got it.</h3>
        <p className="mt-2 max-w-sm text-sm text-slate-body">
          Your message is ready to send. We&apos;ll review the details and get back to you
          shortly. (This demo form doesn&apos;t email yet, connect a backend to go live.)
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 text-sm font-semibold text-brand-600 hover:text-brand-700"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Name" error={errors.name} htmlFor="name" required>
          <input id="name" name="name" value={values.name} onChange={set("name")}
            placeholder="Your name" className={inputClass(errors.name)} autoComplete="name" />
        </Field>
        <Field label="Email" error={errors.email} htmlFor="email" required>
          <input id="email" name="email" type="email" value={values.email} onChange={set("email")}
            placeholder="you@company.com" className={inputClass(errors.email)} autoComplete="email" />
        </Field>
        <Field label="Company" error={errors.company} htmlFor="company">
          <input id="company" name="company" value={values.company} onChange={set("company")}
            placeholder="Company (optional)" className={inputClass()} autoComplete="organization" />
        </Field>
        <Field label="Project type" error={errors.projectType} htmlFor="projectType" required>
          <select id="projectType" name="projectType" value={values.projectType} onChange={set("projectType")}
            className={inputClass(errors.projectType)}>
            <option value="">Select…</option>
            {projectTypes.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </Field>
        <Field label="Budget range" error={errors.budget} htmlFor="budget" className="sm:col-span-2">
          <select id="budget" name="budget" value={values.budget} onChange={set("budget")}
            className={inputClass()}>
            <option value="">Select…</option>
            {budgets.map((b) => <option key={b} value={b}>{b}</option>)}
          </select>
        </Field>
        <Field label="Message" error={errors.message} htmlFor="message" required className="sm:col-span-2">
          <textarea id="message" name="message" value={values.message} onChange={set("message")}
            rows={5} placeholder="What are you building? Timeline, goals, anything useful."
            className={inputClass(errors.message)} />
        </Field>
      </div>

      <AnimatePresence>
        {status === "error" && (
          <motion.p
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mt-4 flex items-center gap-2 text-sm text-red-600"
          >
            <AlertCircle className="h-4 w-4" />
            {formError || "Something went wrong. Please try again."}
          </motion.p>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={status === "loading"}
        className="group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-brand-600 px-6 py-4 text-base font-semibold text-white shadow-[0_12px_34px_-14px_rgba(22,119,255,0.7)] transition-all duration-300 ease-premium hover:bg-brand-700 disabled:opacity-70 sm:w-auto"
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" /> Sending…
          </>
        ) : (
          <>
            Let&apos;s Build Something
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
          </>
        )}
      </button>
      <p className="mt-3 text-xs text-slate-muted">
        We usually reply within one business day.
      </p>
    </form>
  );
}

function inputClass(error?: string) {
  return `${fieldBase} ${error ? "border-red-300 focus:border-red-400 focus:ring-red-100" : "border-line"}`;
}

function Field({
  label,
  htmlFor,
  error,
  required,
  className,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div className={className}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-ink">
        {label} {required && <span className="text-brand-500">*</span>}
      </label>
      {children}
      {error && <p className="mt-1.5 text-xs text-red-600">{error}</p>}
    </div>
  );
}
