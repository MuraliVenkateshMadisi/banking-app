import Image from "next/image";

function Offer({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition group">
      
      {/* IMAGE */}
      <div className="relative w-full aspect-4/3 overflow-hidden">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h4 className="font-semibold text-lg mb-2">{title}</h4>
        <p className="text-slate-600 text-sm">{desc}</p>

        <button className="mt-4 text-indigo-600 font-semibold text-sm hover:underline">
          Learn More →
        </button>
      </div>
    </div>
  );
}

export default function OffersSection() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold mb-10 text-center">
          Exclusive Offers for You
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <Offer
            title="Home Loan @ 8.5%"
            desc="Lowest interest rates for your dream home."
            img="/images/offers/home-loan.png"
          />

          <Offer
            title="Zero Balance Account"
            desc="Open savings account with no minimum balance."
            img="/images/offers/zero-balance.png"
          />

          <Offer
            title="Credit Card Cashback"
            desc="Get 5% cashback on online spends."
            img="/images/offers/cashback.png"
          />

        </div>
      </div>
    </section>
  );
}
