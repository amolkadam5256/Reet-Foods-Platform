"use client";

import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiCheckCircle, FiSend } from "react-icons/fi";
import { getCampaignYear } from "@/lib/site";
import { generateWhatsAppUrl, sendWhatsAppInquiry } from "@/lib/whatsapp";

export function BulkOrderSection() {
  const year = getCampaignYear();
  const [qty, setQty] = useState("100 - 250 units");
  const [budget, setBudget] = useState("INR 700 - INR 1,000");
  const [location, setLocation] = useState("Pune (Hinjewadi / Magarpatta / Baner)");
  const [date, setDate] = useState("");
  const [contact, setContact] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const inquiryData = {
    quantity: qty,
    budget,
    location,
    deliveryDate: date,
    requirement: contact,
    occasion: `Corporate Diwali ${year}`,
  };

  const quickQuoteUrl = generateWhatsAppUrl({
    type: "bulk",
    data: inquiryData,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!qty.trim() || !budget.trim() || !location.trim() || !contact.trim()) {
      setStatus("error");
      return;
    }

    setStatus("sending");
    try {
      sendWhatsAppInquiry({
        type: "bulk",
        data: inquiryData,
        sourcePage: "/#bulk-orders",
        formType: "bulk_order",
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="bg-[#111111] py-16 sm:py-20 text-white relative overflow-hidden" id="bulk-orders">
      <div
        className="pointer-events-none absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 10% 20%, #d4af37 0%, transparent 40%), radial-gradient(circle at 90% 80%, #7a0019 0%, transparent 40%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-reef-gold">
            Corporate Bulk Desk
          </p>
          <h2 className="mt-2 font-[family-name:var(--font-playfair)] text-3xl sm:text-5xl font-bold text-white">
            Planning Corporate Diwali Gifts?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-white/75 leading-relaxed">
            Bulk corporate orders welcome. Quantity-based pricing available. Tell us your quantity, target budget, and delivery requirement.
          </p>
        </div>

        <div className="mx-auto max-w-4xl rounded-3xl border border-reef-gold/30 bg-[#1c1614] p-6 sm:p-10 shadow-2xl">
          {status === "success" ? (
            <div className="text-center py-8">
              <FiCheckCircle className="mx-auto h-16 w-16 text-[#25D366] mb-4" />
              <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-white">
                Bulk Quote Inquiry Ready
              </h3>
              <p className="mt-2 text-sm text-white/75 max-w-md mx-auto">
                Your bulk order details have been formatted for WhatsApp. If it did not open automatically, use the button below.
              </p>
              <div className="mt-6">
                <a
                  href={quickQuoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-bold text-white shadow hover:bg-[#1da851]"
                >
                  <FaWhatsapp className="text-base" /> Open WhatsApp Again
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-gold mb-2">
                    1. Approx Quantity
                  </label>
                  <select
                    name="bulk_quantity"
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none focus:border-reef-gold focus:bg-white/10"
                    required
                  >
                    <option value="25 - 50 units" className="bg-[#1c1614]">25 - 50 gifts</option>
                    <option value="50 - 100 units" className="bg-[#1c1614]">50 - 100 gifts</option>
                    <option value="100 - 250 units" className="bg-[#1c1614]">100 - 250 gifts</option>
                    <option value="250 - 500 units" className="bg-[#1c1614]">250 - 500 gifts</option>
                    <option value="500 - 1,000 units" className="bg-[#1c1614]">500 - 1,000 gifts</option>
                    <option value="1,000+ units" className="bg-[#1c1614]">1,000+ gifts (Bulk Order)</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-gold mb-2">
                    2. Budget Per Gift
                  </label>
                  <select
                    name="bulk_budget"
                    value={budget}
                    onChange={(e) => {
                      setBudget(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3.5 text-sm text-white outline-none focus:border-reef-gold focus:bg-white/10"
                    required
                  >
                    <option value="INR 400 - INR 600" className="bg-[#1c1614]">INR 400 - INR 600 (Tier 1)</option>
                    <option value="INR 700 - INR 1,000" className="bg-[#1c1614]">INR 700 - INR 1,000 (Tier 2)</option>
                    <option value="INR 1,200 - INR 1,500" className="bg-[#1c1614]">INR 1,200 - INR 1,500 (Tier 3)</option>
                    <option value="INR 2,000 - INR 3,000+" className="bg-[#1c1614]">INR 2,000 - INR 3,000+ (VIP Luxury)</option>
                    <option value="Custom / Need Guidance" className="bg-[#1c1614]">Custom / Need Guidance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-gold mb-2">
                    3. Delivery Location
                  </label>
                  <input
                    type="text"
                    name="bulk_location"
                    value={location}
                    onChange={(e) => {
                      setLocation(e.target.value);
                      if (status === "error") setStatus("idle");
                    }}
                    placeholder="e.g., Hinjewadi Phase 1, Pune / Multi-address"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-reef-gold focus:bg-white/10"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-reef-gold mb-2">
                    4. Required Delivery Date
                  </label>
                  <input
                    type="date"
                    name="bulk_required_date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-reef-gold focus:bg-white/10"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-reef-gold mb-2">
                  Your Name, Company & WhatsApp Number
                </label>
                <input
                  type="text"
                  name="bulk_contact_details"
                  value={contact}
                  onChange={(e) => {
                    setContact(e.target.value);
                    if (status === "error") setStatus("idle");
                  }}
                  placeholder="e.g. Rahul Sharma | Infosys Hinjewadi | +91 9876543210"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-white outline-none focus:border-reef-gold focus:bg-white/10"
                  required
                />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-reef-gold px-8 py-3.5 text-sm font-bold text-[#1c1c1c] shadow-lg transition-all duration-200 hover:bg-white hover:text-reef-charcoal hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-50"
                >
                  <FiSend /> {status === "sending" ? "Opening WhatsApp..." : "Request Bulk Quote on WhatsApp"}
                </button>

                <a
                  href={quickQuoteUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full border-2 border-[#25D366] bg-[#25D366]/20 px-6 py-3 text-xs font-bold text-[#25D366] shadow-sm transition-all duration-200 hover:bg-[#25D366] hover:text-white hover:-translate-y-0.5 hover:shadow-md"
                >
                  <FaWhatsapp className="text-base" /> Quick WhatsApp Quote
                </a>
              </div>

              {status === "error" ? (
                <div className="rounded-xl border border-red-300 bg-red-950/30 p-4 text-center text-xs text-red-100">
                  Please complete the quantity, budget, location, and contact details before opening WhatsApp.
                </div>
              ) : null}
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
