export function ContactCTA() {
  return (
    <section className="section" id="contact">
      <div className="flex items-center gap-3 mb-6">
        <div className="accent-bar" />
        <h2 className="text-2xl font-serif text-reef-burgundy">
          Get Your Custom Gift Quote Today
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="card p-6 space-y-4">
          <form className="space-y-4" id="quote">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="text-sm text-reef-charcoal/80 space-y-2">
                Name
                <input
                  className="w-full glass px-3 py-2 text-sm text-reef-charcoal bg-transparent"
                  type="text"
                  placeholder="Your name"
                  required
                />
              </label>
              <label className="text-sm text-reef-charcoal/80 space-y-2">
                Mobile Number
                <input
                  className="w-full glass px-3 py-2 text-sm text-reef-charcoal bg-transparent"
                  type="tel"
                  placeholder="+91..."
                  required
                />
              </label>
            </div>
            <label className="text-sm text-reef-charcoal/80 space-y-2">
              Product Requirement
              <textarea
                className="w-full glass px-3 py-2 text-sm text-reef-charcoal bg-transparent h-24"
                placeholder="Dry fruits / chocolate boxes / hampers / quantity / delivery date"
                required
              />
            </label>
            <label className="text-sm text-reef-charcoal/80 space-y-2">
              Event Type
              <select className="w-full glass px-3 py-2 text-sm text-reef-charcoal bg-transparent">
                <option>Corporate</option>
                <option>Wedding</option>
                <option>Festival</option>
                <option>Personal</option>
              </select>
            </label>
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-reef-gold text-reef-charcoal px-5 py-3 rounded-full text-sm font-semibold shadow-lg shadow-reef-burgundy/15"
              >
                Submit Inquiry
              </button>
              <a
                href="https://wa.me/919999999999?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
                className="inline-flex items-center gap-2 border border-reef-gold/60 text-reef-burgundy px-5 py-3 rounded-full text-sm font-semibold hover:bg-reef-gold/10 transition"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp Instant Chat
              </a>
            </div>
          </form>
        </div>
        <div className="card p-6 space-y-4">
          <p className="text-lg font-serif text-reef-burgundy">
            Visit Reet Foods, Pune
          </p>
          <p className="text-sm text-reef-charcoal/80">
            Pune, Maharashtra, India
            <br />
            GST billing • Pan-India shipping partners
          </p>
          <div className="rounded-xl overflow-hidden border border-reef-gold/30">
            <iframe
              title="Reet Foods Pune"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.539697775597!2d73.8567!3d18.5204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c0656f1237fb%3A0xa0!2sPune!5e0!3m2!1sen!2sin!4v1611111111111!5m2!1sen!2sin"
              width="100%"
              height="260"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
            />
          </div>
          <p className="text-sm text-reef-charcoal/80">
            Call: +91 99999 99999 <br />
            Email: hello@reetfoods.in
          </p>
        </div>
      </div>
    </section>
  );
}
