import { business } from "@/data/business";

export function ContactDetails() {
  return (
    <div className="border border-reef-gold/15 bg-[#111111] p-6 text-white">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-reef-gold">
        Contact details
      </p>
      <div className="mt-4 space-y-3 text-sm text-white/72">
        <p className="text-white font-medium">
          Shraddha Kharate &amp; Harshad Kharate
        </p>
        <p className="flex flex-wrap items-center gap-2 font-medium text-white">
          <span>Phone / WhatsApp:</span>
          <a href="tel:+919225130732" className="transition hover:text-reef-gold">
            +91 9225130732
          </a>
        </p>
        <p className="flex flex-wrap items-center gap-2">
          <span>Email:</span>
          <a href="mailto:reetfoodspune@gmail.com" className="transition hover:text-reef-gold">
            reetfoodspune@gmail.com
          </a>
        </p>
        <div className="border-t border-white/10 pt-2 leading-relaxed">
          <strong className="mb-1 block text-white">Store &amp; Office Address:</strong>
          {business.officeAddress}
        </div>
        <div className="border-t border-white/10 pt-2 leading-relaxed">
          <strong className="mb-1 block text-white">Factory Address:</strong>
          {business.factoryAddress}
        </div>
        <p>FSSAI Registration No. {business.fssaiLicense}</p>
        <p>GSTIN: {business.gstNumber}</p>

      </div>
    </div>
  );
}
