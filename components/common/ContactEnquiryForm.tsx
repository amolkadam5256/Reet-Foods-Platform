"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { isValidEmail, isValidMobileNumber, sendWhatsAppInquiry } from "@/lib/whatsapp";

const fieldClass =
  "w-full border border-reef-gold/15 bg-[#faf8f3] px-4 py-3 text-sm outline-none transition focus:border-reef-gold focus:bg-white";

export function ContactEnquiryForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company_or_event: "",
    email: "",
    phone: "",
    enquiry_type: "Corporate gifting",
    quantity: "100",
    delivery_date: "",
    budget_range: "Need guidance",
    branding_needed: "Yes, logo branding required",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!formData.name.trim()) {
      alert("Please enter your name.");
      return;
    }
    if (!formData.phone.trim()) {
      alert("Please enter your phone/WhatsApp number.");
      return;
    }
    if (!isValidMobileNumber(formData.phone)) {
      alert("Please enter a valid mobile or WhatsApp number.");
      return;
    }
    if (!formData.email.trim()) {
      alert("Please enter your email.");
      return;
    }
    if (!isValidEmail(formData.email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (!formData.message.trim()) {
      alert("Please enter your requirement.");
      return;
    }

    setStatus("sending");

    const inquiryType = formData.enquiry_type.toLowerCase().includes("corporate")
      ? "corporate"
      : "generic";

    try {
      sendWhatsAppInquiry({
        type: inquiryType,
        data: {
          name: formData.name,
          company: formData.company_or_event,
          email: formData.email,
          phone: formData.phone,
          giftingType: formData.enquiry_type,
          quantity: formData.quantity,
          deliveryDate: formData.delivery_date,
          budget: formData.budget_range,
          brandingNeeded: formData.branding_needed,
          requirement: formData.message,
        },
        sourcePage: "/contact",
        formType: "contact_enquiry",
      });
      setStatus("success");
    } catch {
      setStatus("error");
      alert("We could not open WhatsApp. Please try again.");
    }
  }

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Full name <span className="text-reef-burgundy">*</span>
            <input
              name="name"
              className={fieldClass}
              type="text"
              placeholder="Your name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Company / Event
            <input
              name="company_or_event"
              className={fieldClass}
              type="text"
              placeholder="Company / Event name"
              value={formData.company_or_event}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Email <span className="text-reef-burgundy">*</span>
            <input
              name="email"
              className={fieldClass}
              type="email"
              placeholder="you@example.com"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Phone / WhatsApp <span className="text-reef-burgundy">*</span>
            <input
              name="phone"
              className={fieldClass}
              type="tel"
              placeholder="+91..."
              required
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Enquiry type
            <select
              name="enquiry_type"
              className={fieldClass}
              value={formData.enquiry_type}
              onChange={handleChange}
            >
              <option value="Corporate gifting">Corporate gifting</option>
              <option value="Wedding return gifts">Wedding return gifts</option>
              <option value="Festival hampers">Festival hampers</option>
              <option value="Retail / wholesale">Retail / wholesale</option>
              <option value="Sample request">Sample request</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Quantity
            <input
              name="quantity"
              className={fieldClass}
              type="number"
              min="1"
              placeholder="100"
              value={formData.quantity}
              onChange={handleChange}
            />
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Delivery date
            <input
              name="delivery_date"
              className={fieldClass}
              type="date"
              value={formData.delivery_date}
              onChange={handleChange}
            />
          </label>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Budget range
            <select
              name="budget_range"
              className={fieldClass}
              value={formData.budget_range}
              onChange={handleChange}
            >
              <option value="Need guidance">Need guidance</option>
              <option value="Under INR 500 per gift">Under INR 500 per gift</option>
              <option value="INR 500 - INR 1,000 per gift">INR 500 - INR 1,000 per gift</option>
              <option value="INR 1,000 - INR 2,500 per gift">INR 1,000 - INR 2,500 per gift</option>
              <option value="Above INR 2,500 per gift">Above INR 2,500 per gift</option>
            </select>
          </label>
          <label className="space-y-2 text-sm text-reef-charcoal/75">
            Branding needed?
            <select
              name="branding_needed"
              className={fieldClass}
              value={formData.branding_needed}
              onChange={handleChange}
            >
              <option value="Yes, logo branding required">Yes, logo branding required</option>
              <option value="No branding required">No branding required</option>
              <option value="Need packaging suggestions">Need packaging suggestions</option>
            </select>
          </label>
        </div>

        <label className="space-y-2 text-sm text-reef-charcoal/75">
          Requirement <span className="text-reef-burgundy">*</span>
          <textarea
            name="message"
            className={`${fieldClass} h-32`}
            placeholder="Product preferences, city, packaging style, dietary notes, delivery addresses..."
            required
            value={formData.message}
            onChange={handleChange}
          />
        </label>

        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-4 text-sm font-bold text-white shadow-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1da851] hover:shadow-lg disabled:cursor-wait disabled:opacity-70 w-full sm:w-auto"
        >
          <FaWhatsapp className="text-lg" />
          <span>{status === "sending" ? "Connecting to WhatsApp..." : "Send Inquiry on WhatsApp"}</span>
        </button>
      </form>

      {status === "success" && (
        <div
          className="fixed inset-0 z-[110] flex items-center justify-center bg-black/45 px-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 text-center shadow-2xl">
            <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-[#25D366]">
              <FaWhatsapp className="h-6 w-6" />
            </div>
            <p className="text-lg font-bold text-reef-charcoal">
              Connecting to WhatsApp
            </p>
            <p className="mt-2 text-xs leading-5 text-reef-charcoal/70">
              Your inquiry details have been formatted and WhatsApp has been opened. If it didn&apos;t open automatically, please click below.
            </p>
            <div className="mt-5 space-y-2">
              <button
                type="button"
                onClick={() => {
                  sendWhatsAppInquiry({
                    type: "corporate",
                    data: {
                      name: formData.name,
                      company: formData.company_or_event,
                      email: formData.email,
                      phone: formData.phone,
                      giftingType: formData.enquiry_type,
                      quantity: formData.quantity,
                      deliveryDate: formData.delivery_date,
                      budget: formData.budget_range,
                      brandingNeeded: formData.branding_needed,
                      requirement: formData.message,
                    },
                  });
                }}
                className="w-full rounded-full bg-[#25D366] py-3 text-xs font-bold text-white shadow transition hover:bg-[#1da851]"
              >
                Open WhatsApp Again
              </button>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="w-full rounded-full border border-reef-gold/30 py-2.5 text-xs font-semibold text-reef-charcoal hover:bg-reef-cream"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
