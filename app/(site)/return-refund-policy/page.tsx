export const metadata = {
  title: "Return & Refund Policy | Reet Foods",
  description: "Return and refund policy for Reet Foods products and orders.",
};

export default function ReturnRefundPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <div className="flex items-center gap-3">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-charcoal">Return & Refund Policy</h1>
      </div>
      <div className="glass p-6 space-y-4 text-sm text-reef-charcoal/80 leading-7">
        <p>
          Because many of our products are edible and customized, returns may
          not be applicable once production or dispatch begins.
        </p>
        <p>
          If you receive an incorrect or damaged order, contact us promptly with
          photos and order details so we can review the issue.
        </p>
        <p>
          Approved refunds or replacements are handled case by case depending on
          product condition and order status.
        </p>
      </div>
    </div>
  );
}
