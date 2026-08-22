// ---------------------------------------------------------------------------
// Contact submission.
//
// The site is a static export on Cloudflare Pages — there is no server and no
// place to keep a secret, so the form posts straight to Web3Forms, which
// forwards it to the inbox registered against the access key.
//
// The access key is PUBLIC by design. Web3Forms keys are meant to sit in
// client code: a key only ever delivers to the address it was issued for, so
// the worst an abuser can do is send mail to us. That is why this is a
// NEXT_PUBLIC_ variable and why it being visible in the bundle is not a leak.
//
// Setup (one time):
//   1. https://web3forms.com  ->  enter sixstacksolutions@gmail.com
//   2. The key arrives by email.
//   3. Put it in .env.local as NEXT_PUBLIC_WEB3FORMS_KEY=...
//   4. Add the same variable in the Cloudflare Pages project settings, or the
//      deployed build will ship without it.
// ---------------------------------------------------------------------------

import { site } from "@/lib/site";

export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  projectType: string;
  budget: string;
  message: string;
};

export type SubmitResult = { ok: true } | { ok: false; error: string };

const ENDPOINT = "https://api.web3forms.com/submit";

export async function submitContact(payload: ContactPayload): Promise<SubmitResult> {
  if (!payload.name || !payload.email || !payload.message) {
    return { ok: false, error: "Please fill in your name, email and a short message." };
  }

  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

  // Fail loudly rather than pretending to succeed. The previous version of this
  // file resolved { ok: true } without sending anything, so the form thanked
  // people for enquiries that were silently discarded. A visible error is far
  // better than a lost lead.
  if (!accessKey) {
    console.error(
      "submitContact: NEXT_PUBLIC_WEB3FORMS_KEY is not set — the message was NOT sent."
    );
    return {
      ok: false,
      error: `Our form isn't configured yet. Please email us directly at ${site.email}.`,
    };
  }

  try {
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        access_key: accessKey,
        // Shows up as the email subject, so it is scannable in a full inbox.
        subject: `New enquiry from ${payload.name}${
          payload.company ? ` (${payload.company})` : ""
        }`,
        from_name: `${site.name} website`,
        // Lets you hit reply and land on the enquirer rather than Web3Forms.
        replyto: payload.email,
        // Field names are what appear as labels in the email body.
        Name: payload.name,
        Email: payload.email,
        Company: payload.company || "—",
        "Project type": payload.projectType || "—",
        Budget: payload.budget || "—",
        Message: payload.message,
      }),
    });

    const data = (await res.json().catch(() => null)) as { success?: boolean; message?: string } | null;

    if (!res.ok || !data?.success) {
      console.error("submitContact: Web3Forms rejected the submission", res.status, data);
      return {
        ok: false,
        error: `We couldn't send that. Please try again, or email us at ${site.email}.`,
      };
    }

    return { ok: true };
  } catch {
    // Offline, blocked by an extension, or the endpoint is down.
    return {
      ok: false,
      error: `We couldn't reach our server. Please check your connection, or email us at ${site.email}.`,
    };
  }
}
