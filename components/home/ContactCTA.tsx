"use client";

import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

export function ContactCTA() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: new FormData(event.currentTarget),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Submission failed");
      event.currentTarget.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="section" id="contact" aria-labelledby="contact-heading">
      <div className="mb-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-reef-burgundy">
          Enquiry
        </p>
        <h2 id="contact-heading" className="text-3xl font-bold text-gray-900">
          Get your custom gift quote today
        </h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent className="p-6">
            <p className="mb-5 text-sm text-gray-600">
              Share your quantity, budget, timeline, and packaging requirement.
              We will respond with a workable quote.
            </p>
            <form className="space-y-5" id="quote" onSubmit={handleSubmit}>
              <input type="hidden" name="access_key" value="396d5fbe-478d-410f-ba07-fc23570be37c" />
              <input type="hidden" name="subject" value="New homepage gifting enquiry" />
              <input type="hidden" name="from_name" value="Reet Foods Website" />
              <div className="grid gap-5 md:grid-cols-3">
                <label className="space-y-1.5 text-sm font-medium text-gray-700">
                  <span className="block">Name</span>
                  <Input name="name" type="text" placeholder="Your name" required />
                </label>
                <label className="space-y-1.5 text-sm font-medium text-gray-700">
                  <span className="block">Email</span>
                  <Input name="email" type="email" placeholder="you@example.com" required />
                </label>
                <label className="space-y-1.5 text-sm font-medium text-gray-700">
                  <span className="block">Mobile number</span>
                  <Input name="phone" type="tel" placeholder="+91..." required />
                </label>
              </div>
              <label className="space-y-1.5 text-sm font-medium text-gray-700">
                <span className="block">Product requirement</span>
                <Textarea
                  name="message"
                  placeholder="Dry fruits, hampers, quantity, delivery date"
                  required
                />
              </label>
              <label className="space-y-1.5 text-sm font-medium text-gray-700">
                <span className="block">Event type</span>
                <select
                  name="event_type"
                  className="flex h-10 w-full rounded-sm border border-gray-300 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm transition-colors focus-visible:border-reef-burgundy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-reef-burgundy"
                >
                  <option>Corporate</option>
                  <option>Wedding</option>
                  <option>Festival</option>
                  <option>Retail</option>
                </select>
              </label>
              <div className="flex flex-wrap gap-4 pt-2">
                <Button type="submit" size="lg" className="w-full sm:w-auto" disabled={status === "sending"}>
                  {status === "sending" ? "Sending..." : "Submit enquiry"}
                </Button>
                <a
                  href="https://wa.me/919890609611?text=Hi%20Reet%20Foods%2C%20I%20need%20a%20quote"
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button type="button" variant="outline" size="lg" className="w-full">
                    WhatsApp instant chat
                  </Button>
                </a>
              </div>
            </form>
          </CardContent>
        </Card>

        <Card className="flex flex-col">
          <CardContent className="flex flex-1 flex-col gap-5 p-6">
            <div>
              <h3 className="text-xl font-bold text-gray-900">Visit Reet Foods, Pune</h3>
              <p className="mt-2 text-sm font-medium leading-relaxed text-gray-600">
                Shop No. F14, Ground Floor, Streets of Europe Mall,
                <br />
                Maan Road, near Infosys Circle, Hinjewadi Phase I, Pune.
              </p>
            </div>
            <div className="min-h-[260px] flex-1 overflow-hidden rounded-sm border border-gray-200 bg-gray-50">
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
            <div className="rounded-sm border border-gray-100 bg-gray-50 p-4">
              <p className="text-sm font-medium leading-relaxed text-gray-900">
                <span className="text-gray-500">Call / WhatsApp:</span> +91 9890609611 / +91 8007518088
                <br />
                <span className="text-gray-500">Email:</span> reetfoodspune@gmail.com
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {status !== "idle" ? (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/45 px-4" role="dialog" aria-modal="true">
          <div className="w-full max-w-sm bg-white p-6 text-center shadow-2xl">
            <p className="text-lg font-semibold text-reef-charcoal">
              {status === "sending" ? "Sending your enquiry..." : status === "success" ? "Enquiry sent successfully" : "We could not send your enquiry"}
            </p>
            <p className="mt-2 text-sm text-reef-charcoal/70">
              {status === "sending" ? "Please wait a moment." : status === "success" ? "Thank you for reaching out. We'll get back to you soon." : "Please try again or contact us on WhatsApp."}
            </p>
            {status !== "sending" ? (
              <Button type="button" className="mt-5" onClick={() => setStatus("idle")}>
                Close
              </Button>
            ) : null}
          </div>
        </div>
      ) : null}
    </section>
  );
}
