"use client";

import { useState } from "react";

const accessKey = "396d5fbe-478d-410f-ba07-fc23570be37c";

export function ContactEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input type="hidden" name="access_key" value={accessKey} />
        <input type="hidden" name="subject" value="New Reet Foods website enquiry" />
        <input type="hidden" name="from_name" value="Reet Foods Website" />
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-reef-charcoal/75">Full name<input name="name" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="text" placeholder="Your name" required /></label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">Company / Event<input name="company_or_event" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="text" placeholder="Company / Event" /></label>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-reef-charcoal/75">Email<input name="email" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="email" placeholder="you@example.com" required /></label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">Phone<input name="phone" className="w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" type="tel" placeholder="+91..." required /></label>
        </div>
        <label className="space-y-2 text-sm text-reef-charcoal/75">Requirement<textarea name="message" className="h-32 w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 outline-none" placeholder="Quantity, product, delivery date, customization..." required /></label>
        <button type="submit" disabled={status === "sending"} className="inline-flex items-center gap-2 bg-reef-gold px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70">{status === "sending" ? "Sending…" : "Send Inquiry"}</button>
      </form>

      {status !== "idle" ? <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/45 px-4" role="dialog" aria-modal="true"><div className="w-full max-w-sm bg-white p-6 text-center shadow-2xl"><p className="text-lg font-semibold text-reef-charcoal">{status === "sending" ? "Sending your enquiry…" : status === "success" ? "Enquiry sent successfully" : "We could not send your enquiry"}</p><p className="mt-2 text-sm leading-6 text-reef-charcoal/70">{status === "sending" ? "Please wait a moment." : status === "success" ? "Thank you for reaching out. We’ll review your enquiry and get back to you soon." : "Please try again or contact us on WhatsApp."}</p>{status !== "sending" ? <button type="button" onClick={() => setStatus("idle")} className="mt-5 bg-reef-gold px-4 py-2 text-sm font-semibold text-white">Close</button> : null}</div></div> : null}
    </>
  );
}
