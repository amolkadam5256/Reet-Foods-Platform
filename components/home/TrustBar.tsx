export function TrustBar() {
  return (
    <div className="overflow-hidden border-y border-reef-gold/15 bg-white py-3" aria-hidden="true">
      <div className="reef-marquee flex items-center gap-0 whitespace-nowrap">
        {[
          "✦ FSSAI Licensed (Lic: 21525083009881)",
          "✦ Corporate Diwali Gifting 2026",
          "✦ Customized Hampers From ₹400",
          "✦ Company Logo & Branding",
          "✦ Bulk Corporate Orders Welcome",
          "✦ 100% GST Invoicing",
          "✦ PAN India Delivery",
          "✦ Prompt Quotation Support",
          // Duplicate for seamless loop
          "✦ FSSAI Licensed (Lic: 21525083009881)",
          "✦ Corporate Diwali Gifting 2026",
          "✦ Customized Hampers From ₹400",
          "✦ Company Logo & Branding",
          "✦ Bulk Corporate Orders Welcome",
          "✦ 100% GST Invoicing",
          "✦ PAN India Delivery",
          "✦ Prompt Quotation Support",
        ].map((text, i) => (
          <span
            key={i}
            className="mx-7 text-[11px] font-semibold uppercase tracking-[0.2em] text-reef-charcoal/65"
          >
            {text}
          </span>
        ))}
      </div>
    </div>
  );
}
