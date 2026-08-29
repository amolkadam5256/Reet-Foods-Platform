export function TrustBar() {
  return (
    <div className="overflow-hidden border-y border-reef-gold/15 bg-white py-3" aria-hidden="true">
      <div className="reef-marquee flex items-center gap-0 whitespace-nowrap">
        {[
          "✦ FSSAI Certified Facility",
          "✦ Nitrogen-Sealed Freshness",
          "✦ PAN India Cold-Chain Delivery",
          "✦ Bulk Orders from 25 Units",
          "✦ Custom Branding & Logo Printing",
          "✦ 24-Hour Quote Response",
          "✦ ISO Quality Standards",
          "✦ 500 Gifts/Day Capacity",
          "✦ Wedding & Festive Hampers",
          "✦ Temperature-Controlled Logistics",
          // Duplicate for seamless loop
          "✦ FSSAI Certified Facility",
          "✦ Nitrogen-Sealed Freshness",
          "✦ PAN India Cold-Chain Delivery",
          "✦ Bulk Orders from 25 Units",
          "✦ Custom Branding & Logo Printing",
          "✦ 24-Hour Quote Response",
          "✦ ISO Quality Standards",
          "✦ 500 Gifts/Day Capacity",
          "✦ Wedding & Festive Hampers",
          "✦ Temperature-Controlled Logistics",
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
