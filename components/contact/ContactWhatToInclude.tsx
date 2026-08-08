const items = [
  "Product type and quantity",
  "Budget and gifting occasion",
  "Delivery city and deadline",
  "Branding or customization requests",
];

export function ContactWhatToInclude() {
  return (
    <div className="border border-reef-gold/15 bg-white p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-burgundy">
        What to include
      </p>
      <ul className="mt-4 space-y-3 text-sm leading-7 text-reef-charcoal/72">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
