"use client";

import React, { useState, FormEvent } from "react";
import { FiMail, FiCheck } from "react-icons/fi";
import { Button } from "./Buttons";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail("");
    }
  };

  return (
    <div className="rounded-2xl border border-reef-gold/30 bg-reef-cream/60 p-6 text-center sm:p-10">
      <div className="mx-auto max-w-lg">
        <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-reef-gold/20 text-reef-burgundy">
          <FiMail className="h-5 w-5" />
        </div>
        <h3 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-reef-charcoal">
          Receive Festival & Corporate Catalogs
        </h3>
        <p className="mt-2 text-xs leading-relaxed text-reef-charcoal/70">
          Subscribe for early access to seasonal curations, bulk discount slabs, and exclusive gifting catalogs in Pune.
        </p>

        {submitted ? (
          <div className="mt-6 flex items-center justify-center gap-2 rounded-full bg-emerald-100 py-3 text-xs font-semibold text-emerald-800">
            <FiCheck className="h-4 w-4 text-emerald-600" />
            <span>Thank you! You are now subscribed to Reet Foods updates.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-2 sm:flex-row">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your corporate or personal email"
              className="flex-1 rounded-full border border-reef-gold/40 bg-white px-4 py-3 text-xs text-reef-charcoal placeholder-reef-charcoal/40 shadow-sm focus:border-reef-burgundy focus:outline-none focus:ring-2 focus:ring-reef-gold/30"
            />
            <Button type="submit" variant="primary" size="sm">
              Subscribe
            </Button>
          </form>
        )}
      </div>
    </div>
  );
}
