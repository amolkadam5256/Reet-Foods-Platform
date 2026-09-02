"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle, FiSend, FiShield } from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";
import { generateWhatsAppUrl, isValidEmail, isValidMobileNumber, sendWhatsAppInquiry } from "@/lib/whatsapp";

const fieldClass =
  "w-full rounded-xl border border-reef-gold/20 bg-[#faf8f3] px-4 py-3.5 text-sm text-reef-charcoal outline-none transition focus:border-reef-gold focus:bg-white";

export function CorporateQuotationForm() {
  const year = getCampaignYear();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    quantity: "100 - 250 units",
    budget: "INR 700 - INR 1,000 per gift",
    giftingType: "Employee Gifting",
    location: "Pune",
    deliveryDate: "",
    message: "",
  });

  const inquiryData = {
    name: formData.name,
    company: formData.company,
    phone: formData.phone,
    email: formData.email,
    quantity: formData.quantity,
    budget: formData.budget,
    giftingType: formData.giftingType,
    occasion: `Corporate Diwali ${year}`,
    location: formData.location,
    deliveryDate: formData.deliveryDate,
    requirement: formData.message,
  };

  const whatsappUrl = generateWhatsAppUrl({
    type: "corporate",
    data: inquiryData,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (status === "error") setStatus("idle");
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.company.trim() || !formData.phone.trim() || !formData.email.trim()) {
      setStatus("error");
      return;
    }
    if (!isValidMobileNumber(formData.phone) || !isValidEmail(formData.email)) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      sendWhatsAppInquiry({
        type: "corporate",
        data: inquiryData,
        sourcePage: "/#corporate-quotation",
        formType: "corporate_quotation",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-white py-16 sm:py-24 border-t border-reef-gold/15" id="corporate-quotation">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-burgundy">
            Direct Procurement Channel
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl sm:text-4xl font-bold text-reef-charcoal">
            Get Your Corporate Diwali Quotation
          </h2>
          <p className="mt-3 text-sm text-reef-charcoal/75 leading-relaxed">
            Fill out the form below. Your details will open in WhatsApp for our corporate gifting managers, Shraddha and Harshad Kharate, to review and respond with suitable B2B options.
          </p>
        </div>

        <div className="rounded-3xl border border-reef-gold/25 bg-[#fbf7f1] p-6 sm:p-12 shadow-lg">
          {status === "success" ? (
            <div className="text-center py-10 space-y-5">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-[#25D366]">
                <FiCheckCircle className="h-10 w-10" />
              </div>
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl sm:text-3xl font-bold text-reef-charcoal">
                WhatsApp Inquiry Ready
              </h3>
              <p className="text-sm text-reef-charcoal/80 max-w-lg mx-auto leading-relaxed">
                Your Corporate Diwali gifting enquiry has been formatted for WhatsApp. If it did not open automatically, use the button below.
              </p>

              <div className="pt-4 border-t border-reef-gold/15 max-w-md mx-auto">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-8 py-3.5 text-sm font-bold text-white shadow-md transition hover:bg-[#1da851] w-full"
                >
                  <FaWhatsapp className="text-lg" /> Open WhatsApp Again
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Full Name <span className="text-reef-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Shraddha / Harshad"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Company Name <span className="text-reef-burgundy">*</span>
                  </label>
                  <input
                    type="text"
                    name="company"
                    required
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="e.g. Infosys, Wipro, Persistent..."
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Mobile / WhatsApp Number <span className="text-reef-burgundy">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 92251 30732"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Official Work Email <span className="text-reef-burgundy">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="name@company.com"
                    className={fieldClass}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Approx. Quantity <span className="text-reef-burgundy">*</span>
                  </label>
                  <select
                    name="quantity"
                    value={formData.quantity}
                    onChange={handleChange}
                    className={fieldClass}
                    required
                  >
                    <option value="25 - 50 units">25 - 50 hampers</option>
                    <option value="50 - 100 units">50 - 100 hampers</option>
                    <option value="100 - 250 units">100 - 250 hampers</option>
                    <option value="250 - 500 units">250 - 500 hampers</option>
                    <option value="500 - 1,000 units">500 - 1,000 hampers</option>
                    <option value="1,000+ units">1,000+ hampers (Large Volume)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Target Budget Per Gift <span className="text-reef-burgundy">*</span>
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className={fieldClass}
                    required
                  >
                    <option value="INR 400 - INR 600 per gift">INR 400 - INR 600 (Tier 1 Employee)</option>
                    <option value="INR 700 - INR 1,000 per gift">INR 700 - INR 1,000 (Tier 2 Standard)</option>
                    <option value="INR 1,200 - INR 1,500 per gift">INR 1,200 - INR 1,500 (Tier 3 Premium)</option>
                    <option value="INR 2,000 - INR 3,000+ per gift">INR 2,000 - INR 3,000+ (Tier 4 VIP Luxury)</option>
                    <option value="Flexible / Need Guidance">Flexible / Need Recommendations</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Gifting Type
                  </label>
                  <select
                    name="giftingType"
                    value={formData.giftingType}
                    onChange={handleChange}
                    className={fieldClass}
                  >
                    <option value="Employee Gifting">Employee Gifting (Staff / Teams)</option>
                    <option value="Client & Business Partner">Client & Business Partner Gifting</option>
                    <option value="VIP / Senior Leadership">VIP / CXO / Senior Management</option>
                    <option value="Vendor / Channel Partner">Vendor / Channel Partner Gifting</option>
                    <option value="Other Corporate Event">Other Festive Requirement</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                    Delivery Location (City / Area)
                  </label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Hinjewadi Phase 1, Pune or PAN India"
                    className={fieldClass}
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                  Target Delivery Date (Optional)
                </label>
                <input
                  type="date"
                  name="deliveryDate"
                  value={formData.deliveryDate}
                  onChange={handleChange}
                  className={fieldClass}
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-reef-charcoal mb-2">
                  Requirement Details / Customization Notes
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Specify preferences such as dry fruits only, custom logo box, greeting card text, or multi-location delivery."
                  className={fieldClass}
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-reef-gold/20">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-reef-gold px-10 py-4 text-sm font-bold uppercase tracking-wider text-[#1c1c1c] shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-reef-burgundy hover:text-white hover:shadow-xl disabled:opacity-50"
                >
                  <FiSend /> {status === "sending" ? "Opening WhatsApp..." : "Request Quote on WhatsApp"}
                </button>

                <div className="flex items-center gap-2 text-xs text-reef-charcoal/60">
                  <FiShield className="text-reef-gold h-4 w-4" />
                  <span>100% Privacy Protected - GST Invoicing Available</span>
                </div>
              </div>

              {status === "error" && (
                <div className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-xs text-red-600">
                  Please enter a valid name, company, mobile number, and email before opening WhatsApp.
                </div>
              )}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
