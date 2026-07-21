export const metadata = {
  title: "Privacy Policy | Reet Foods",
  description: "Privacy policy for Reet Foods website visitors and customers.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <div className="flex items-center gap-3">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-charcoal">Privacy Policy</h1>
      </div>
      <div className="glass p-6 space-y-4 text-sm text-reef-charcoal/80 leading-7">
        <p>
          Reet Foods collects basic contact details submitted through forms,
          email, WhatsApp or phone so we can respond to enquiries and fulfill
          orders.
        </p>
        <p>
          We use your information only for communication, order processing,
          delivery coordination and customer support. We do not sell personal
          data.
        </p>
        <p>
          If you have questions about data handling, please contact our team
          using the details on the Contact page.
        </p>
      </div>
    </div>
  );
}
