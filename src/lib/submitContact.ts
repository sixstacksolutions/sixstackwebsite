// ---------------------------------------------------------------------------
// Contact submission, single integration point.
// There is NO backend wired up yet. This function currently validates shape and
// resolves after a short delay so the UI can show real loading/success states.
// It does NOT send an email or persist anything.
//
// To connect a real backend later, replace the body of `submitContact` with a
// fetch to your API route / email service (e.g. Resend, Formspree, a Next.js
// route handler at /api/contact). The form UI does not need to change.
// ---------------------------------------------------------------------------

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

export async function submitContact(payload: ContactPayload): Promise<SubmitResult> {
  // Basic server-shape guard (the form also validates before calling this).
  if (!payload.name || !payload.email || !payload.message) {
    return { ok: false, error: "Missing required fields." };
  }

  // --- Placeholder: simulate a network round-trip. No email is sent. ---
  await new Promise((resolve) => setTimeout(resolve, 1100));

  // When a backend exists, do e.g.:
  // const res = await fetch("/api/contact", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(payload),
  // });
  // if (!res.ok) return { ok: false, error: "Something went wrong. Please try again." };

  return { ok: true };
}
