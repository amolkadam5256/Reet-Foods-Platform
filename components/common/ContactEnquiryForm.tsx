"use client";

import { useState } from "react";

const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;
const fieldClass =
  "w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 text-sm outline-none focus:border-reef-gold";

export function ContactEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!accessKey) {
      setStatus("error");
      return;
    }
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
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Full name
            <input name="name" className={fieldClass} type="text" placeholder="Your name" required />
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Company / Event
            <input name="company_or_event" className={fieldClass} type="text" placeholder="Company / Event" />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Email
            <input name="email" className={fieldClass} type="email" placeholder="you@example.com" required />
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Phone
            <input name="phone" className={fieldClass} type="tel" placeholder="+91..." required />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Enquiry type
            <select name="enquiry_type" className={fieldClass}>
              <option>Corporate gifting</option>
              <option>Wedding return gifts</option>
              <option>Festival hampers</option>
              <option>Retail / wholesale</option>
              <option>Sample request</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Quantity
            <input name="quantity" className={fieldClass} type="number" min="1" placeholder="100" />
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Delivery date
            <input name="delivery_date" className={fieldClass} type="date" />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Budget range
            <select name="budget_range" className={fieldClass}>
              <option>Need guidance</option>
              <option>Under INR 500 per gift</option>
              <option>INR 500 - INR 1,000 per gift</option>
              <option>INR 1,000 - INR 2,500 per gift</option>
              <option>Above INR 2,500 per gift</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Branding needed?
            <select name="branding_needed" className={fieldClass}>
              <option>Yes, logo branding required</option>
              <option>No branding required</option>
              <option>Need packaging suggestions</option>
            </select>
          </label>
        </div>

        <label className="space-y-2 text-sm text-reef-charcoal/75">
          Requirement
          <textarea
            name="message"
            className={`${fieldClass} h-32`}
            placeholder="Product, city, packaging style, dietary preferences, delivery addresses..."
            required
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center gap-2 bg-reef-gold px-5 py-3 text-sm font-semibold text-white transition hover:brightness-95 disabled:cursor-wait disabled:opacity-70"
        >
          {status === "sending" ? "Sending..." : "Send Inquiry"}
        </button>
      </form>

      {status !== "idle" ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/45 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-sm bg-white p-6 text-center shadow-2xl">
            <p className="text-lg font-semibold text-reef-charcoal">
              {status === "sending" ? "Sending your enquiry..." : status === "success" ? "Enquiry sent successfully" : "We could not send your enquiry"}
            </p>
            <p className="mt-2 text-sm leading-6 text-reef-charcoal/70">
              {status === "sending" ? "Please wait a moment." : status === "success" ? "Thank you for reaching out. We'll review your enquiry and get back to you soon." : "Please try again or contact us on WhatsApp."}
            </p>
            {status !== "sending" ? (
              <button type="button" onClick={() => setStatus("idle")} className="mt-5 bg-reef-gold px-4 py-2 text-sm font-semibold text-white">
                Close
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </>
  );
}
