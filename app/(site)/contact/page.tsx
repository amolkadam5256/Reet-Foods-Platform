export const metadata = {
  title: "Contact Reet Foods | Get Best Quote",
  description:
    "Contact Reet Foods, Pune for premium dry fruits, chocolate gift boxes, juices and corporate hampers. Get the best quote within 24 hours.",
};

export default function ContactPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-10">
      <div className="flex items-center gap-3">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-cream">Contact & Quotes</h1>
      </div>
      <p className="text-sm text-reef-cream/80">
        Share your requirement and we will respond within one business day with options, pricing and delivery
        timelines.
      </p>

      <div className="glass p-6 space-y-6" id="quote">
        <form className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-reef-cream/80 space-y-2">
              Full name
              <input
                className="w-full glass px-3 py-2 text-sm text-reef-cream bg-transparent"
                type="text"
                placeholder="Your name"
                required
              />
            </label>
            <label className="text-sm text-reef-cream/80 space-y-2">
              Company
              <input
                className="w-full glass px-3 py-2 text-sm text-reef-cream bg-transparent"
                type="text"
                placeholder="Company / Event"
              />
            </label>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="text-sm text-reef-cream/80 space-y-2">
              Email
              <input
                className="w-full glass px-3 py-2 text-sm text-reef-cream bg-transparent"
                type="email"
                placeholder="you@example.com"
                required
              />
            </label>
            <label className="text-sm text-reef-cream/80 space-y-2">
              Phone
              <input
                className="w-full glass px-3 py-2 text-sm text-reef-cream bg-transparent"
                type="tel"
                placeholder="+91..."
                required
              />
            </label>
          </div>
          <label className="text-sm text-reef-cream/80 space-y-2">
            Requirement
            <textarea
              className="w-full glass px-3 py-2 text-sm text-reef-cream bg-transparent h-28"
              placeholder="Quantity, product, delivery date, customization..."
              required
            />
          </label>
          <button
            type="submit"
            className="inline-flex items-center gap-2 bg-reef-gold text-reef-ink px-5 py-3 rounded-full text-sm font-semibold shadow-lg shadow-reef-red/40"
          >
            Send Inquiry
          </button>
        </form>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="card p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-reef-gold mb-2">Call</p>
          <p className="text-sm text-reef-cream/80">+91 99999 99999</p>
        </div>
        <div className="card p-5">
          <p className="text-xs uppercase tracking-[0.2em] text-reef-gold mb-2">Email</p>
          <p className="text-sm text-reef-cream/80">hello@reetfoods.in</p>
        </div>
        <a
          className="card p-5 hover:border-reef-gold/60 transition"
          href="https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
          target="_blank"
          rel="noreferrer"
        >
          <p className="text-xs uppercase tracking-[0.2em] text-reef-gold mb-2">WhatsApp</p>
          <p className="text-sm text-reef-cream/80">Tap to chat</p>
        </a>
      </div>
    </div>
  );
}
