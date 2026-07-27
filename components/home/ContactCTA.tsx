import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactCTA() {
  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="flex items-center gap-3 mb-8">
        <div>
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-reef-burgundy">
            Enquiry
          </p>
          <h2 id="contact-heading" className="text-3xl font-bold text-gray-900">
            Get your custom gift quote today
          </h2>
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-8">
            <p className="text-sm text-gray-600 mb-5">
              Keep it simple. Share your quantity, budget, timeline, and
              packaging requirement. We will respond with a workable quote.
            </p>
            <form className="space-y-5" id="quote">
              <div className="grid gap-5 md:grid-cols-2">
                <label className="text-sm font-medium text-gray-700 space-y-1.5">
                  <span className="block">Name</span>
                  <Input type="text" placeholder="Your name" required />
                </label>
                <label className="text-sm font-medium text-gray-700 space-y-1.5">
                  <span className="block">Mobile number</span>
                  <Input type="tel" placeholder="+91..." required />
                </label>
              </div>
              <label className="text-sm font-medium text-gray-700 space-y-1.5">
                <span className="block">Product requirement</span>
                <Textarea
                  placeholder="Dry fruits, chocolates, hampers, quantity, delivery date"
                  required
                />
              </label>
              <label className="text-sm font-medium text-gray-700 space-y-1.5">
                <span className="block">Event type</span>
                <select className="flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-burgundy focus-visible:border-reef-burgundy">
                  <option>Corporate</option>
                  <option>Wedding</option>
                  <option>Festival</option>
                  <option>Retail</option>
                </select>
              </label>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto">
                  Submit enquiry
                </Button>
                <a
                  href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="w-full gap-2"
                  >
                    WhatsApp instant chat
                  </Button>
                </a>
              </div>
            </form>
          </CardContent>
        </Card>
        <Card className="flex flex-col">
          <CardContent className="p-8 flex-1 flex flex-col gap-5">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Visit Reet Foods, Pune</h3>
              <p className="text-sm text-gray-600 mt-2 leading-relaxed font-medium">
                Shop No. F14, Ground Floor, Streets of Europe Mall, <br />
                Maan Road, near Infosys Circle, Hinjewadi Phase I, Pune, Maharashtra
                <br />
                <span className="text-xs text-gray-500 font-normal">GST billing &amp; pan-India shipping partners</span>
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 flex-1 min-h-[260px]">
              <iframe
                title="Reet Foods Pune"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5647!2d73.7385!3d18.5912!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc100000001%3A0x0!2sHinjawadi%2C%20Pune!5e0!3m2!1sen!2sin!4v1611111111111!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "260px" }}
                loading="lazy"
                allowFullScreen
              />
            </div>
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
              <p className="text-sm font-medium text-gray-900 leading-relaxed">
                <span className="text-gray-500">Call / WhatsApp:</span> +91 9890609611 / +91 8007518088 <br />
                <span className="text-gray-500">Email:</span> reetfoodspune@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
