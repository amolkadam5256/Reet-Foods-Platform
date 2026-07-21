export const metadata = {
  title: "Shipping Policy | Reet Foods",
  description: "Shipping information for Reet Foods orders and deliveries.",
};

export default function ShippingPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <div className="flex items-center gap-3">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-charcoal">Shipping Policy</h1>
      </div>
      <div className="glass p-6 space-y-4 text-sm text-reef-charcoal/80 leading-7">
        <p>
          We arrange shipping based on the destination, product type and order
          quantity. Bulk and customized orders may require additional packing
          and handling time.
        </p>
        <p>
          Our team will share estimated dispatch and delivery timelines during
          order confirmation.
        </p>
        <p>
          Please review your contact details carefully so we can ensure smooth
          delivery coordination.
        </p>
      </div>
    </div>
  );
}
