function Offer({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="border rounded-xl p-6 hover:shadow-md transition">
      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-slate-600">{desc}</p>
    </div>
  );
}

export default function OffersSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Exclusive Offers for You
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          <Offer title="Home Loan @ 8.5%" desc="Lowest interest rates for your dream home." />
          <Offer title="Zero Balance Account" desc="Open savings account with no minimum balance." />
          <Offer title="Credit Card Cashback" desc="Get 5% cashback on online spends." />
        </div>
      </div>
    </section>
  );
}
