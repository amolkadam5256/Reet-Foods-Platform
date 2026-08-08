type FAQ = { question: string; answer: string };

export function FAQList({ faqs }: { faqs: FAQ[] }) {
  return (
    <div className="mt-8 space-y-6">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="border-b border-reef-gold/15 pb-4 last:border-0 last:pb-0"
        >
          <h3 className="font-[family-name:var(--font-playfair)] text-lg font-bold text-reef-charcoal">
            {faq.question}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-reef-charcoal/70">
            {faq.answer}
          </p>
        </div>
      ))}
    </div>
  );
}
