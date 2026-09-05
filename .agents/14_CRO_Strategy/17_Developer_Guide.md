# 17_Developer_Guide.md

# Developer CRO Implementation Guide — Reet Foods & Giftings

---

## Tech Stack

- **Framework:** Next.js (App Router / React)
- **Styling:** Vanilla CSS / Tailwind
- **Components:** Sticky Bottom Bar, Floating WhatsApp Widget, Corporate Quote Modal

---

## 1. Sticky Mobile Bottom Bar (`components/cro/StickyBottomBar.tsx`)

```tsx
"use client";

import React from "react";

export default function StickyBottomBar() {
  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "whatsapp_click",
        whatsapp_number: "+919225130732",
        click_location: "sticky_mobile_bottom_bar",
      });
    }
    const message = encodeURIComponent(
      "Hi Reet Foods, I am looking for Corporate Gifting in Hinjewadi Pune. Please share details.",
    );
    window.open(`https://wa.me/919225130732?text=${message}`, "_blank");
  };

  const handleCallClick = () => {
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "phone_call_click",
        phone_number: "+919225130732",
        click_location: "sticky_mobile_bottom_bar",
      });
    }
    window.location.href = "tel:+919225130732";
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 p-3 md:hidden shadow-lg flex gap-2">
      <button
        onClick={handleWhatsAppClick}
        className="flex-1 bg-[#25D366] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow"
      >
        <span>💬 WhatsApp Quote</span>
      </button>
      <button
        onClick={handleCallClick}
        className="flex-1 bg-[#2C5E3B] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 shadow"
      >
        <span>📞 Call Store</span>
      </button>
    </div>
  );
}
```

---

## 2. Corporate Quote Request Modal Component (`components/cro/QuoteModal.tsx`)

```tsx
"use client";

import React, { useState } from "react";

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  cityContext?: string;
}

export default function QuoteModal({
  isOpen,
  onClose,
  cityContext = "Hinjewadi Pune",
}: QuoteModalProps) {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    quantity: "100 - 500 units",
  });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "generate_lead",
        lead_type: "corporate_bulk_quote",
        city_location: cityContext,
        estimated_unit_quantity: formData.quantity,
        form_id: "corporate_quote_modal",
        user_data: {
          email: formData.email,
          phone: formData.phone,
        },
      });
    }
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl max-w-md w-full p-6 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black font-bold text-xl"
        >
          ✕
        </button>
        {!submitted ? (
          <>
            <h3 className="text-xl font-bold text-[#2C5E3B]">
              Request Corporate Bulk Quote
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Serving IT & Corporate clients in {cityContext}
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  required
                  autoFocus
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-[#2C5E3B]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Corporate Email *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-[#2C5E3B]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-[#2C5E3B]"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Estimated Quantity *
                </label>
                <select
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full border rounded-lg p-2.5 text-sm focus:ring-2 focus:ring-[#2C5E3B]"
                >
                  <option value="50 - 100 units">50 - 100 units</option>
                  <option value="100 - 500 units">100 - 500 units</option>
                  <option value="500 - 1000 units">500 - 1000 units</option>
                  <option value="1000+ units">1000+ units</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#D4AF37] hover:bg-[#b8952b] text-white font-bold py-3 rounded-lg text-sm shadow transition"
              >
                💼 SUBMIT QUOTE REQUEST
              </button>
            </form>
            <div className="mt-4 pt-3 border-t text-[11px] text-gray-500 text-center space-y-1">
              <p>📄 GST Invoice Provided | 🌿 FSSAI Licensed: 21525083009881</p>
              <p>
                📍 Hinjewadi Store: Streets of Europe Mall, Maan Road near
                Infosys Circle
              </p>
            </div>
          </>
        ) : (
          <div className="text-center py-6">
            <h4 className="text-2xl font-bold text-[#2C5E3B] mb-2">
              Quote Requested! 🎉
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Our Hinjewadi store team will contact you within 15 minutes.
            </p>
            <button
              onClick={onClose}
              className="bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg text-sm"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
```

---

_References: 03_UI_Optimization.md, 09_Form_Optimization.md, 18_QA_Checklist.md_
