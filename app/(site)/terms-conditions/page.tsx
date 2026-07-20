export const metadata = {
  title: "Terms & Conditions | Reet Foods",
  description: "Terms and conditions for using the Reet Foods website and services.",
};

export default function TermsConditionsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-16 space-y-8">
      <div className="flex items-center gap-3">
        <div className="accent-bar" />
        <h1 className="text-3xl font-serif text-reef-cream">Terms & Conditions</h1>
      </div>
      <div className="glass p-6 space-y-4 text-sm text-reef-cream/80 leading-7">
        <p>
          By using this website, you agree that product information, pricing
          and availability may change without notice.
        </p>
        <p>
          Orders are confirmed only after final approval, payment terms and
          production timelines are agreed with our team.
        </p>
        <p>
          Reet Foods is not liable for delays caused by incorrect customer
          information, force majeure events or courier issues outside our
          control.
        </p>
      </div>
    </div>
  );
}
