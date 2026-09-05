import {
  FiBriefcase,
  FiAward,
  FiTruck,
  FiFileText,
} from "react-icons/fi";

const highlights = [
  {
    icon: FiBriefcase,
    title: "Custom Logo Printing",
    desc: "Laser engraving & gold foil",
  },
  {
    icon: FiAward,
    title: "Quantity-Based Pricing",
    desc: "Bulk corporate discounts available",
  },
  {
    icon: FiTruck,
    title: "Multi-Address Dispatch",
    desc: "Individual door-to-door shipping",
  },
  {
    icon: FiFileText,
    title: "Official GST Invoicing",
    desc: "B2B compliant tax invoices provided",
  },
];

export function CorporateHighlights() {
  return (
    <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {highlights.map(({ icon: Icon, title, desc }, idx) => (
        <div
          key={idx}
          className="flex items-start gap-4 rounded-xl border border-reef-gold/20 bg-white p-5 shadow-sm"
        >
          <div className="rounded-lg bg-reef-cream p-3 text-reef-burgundy">
            <Icon className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-reef-charcoal">{title}</h3>
            <p className="mt-1 text-xs text-reef-charcoal/70">{desc}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
