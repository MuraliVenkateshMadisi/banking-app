import Image from "next/image";
import Link from "next/link";

function CardItem({
  title,
  desc,
  img,
}: {
  title: string;
  desc: string;
  img: string;
}) {
  return (
    <div className="border rounded-2xl p-6 text-center hover:shadow-xl transition group bg-white">

      {/* CARD IMAGE */}
      <div className="relative w-full h-60 mb-4 overflow-hidden rounded-xl bg-slate-100">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover object-center group-hover:scale-105 transition duration-500"
        />
      </div>


      <h4 className="font-semibold text-lg mb-2">{title}</h4>
      <p className="text-slate-600 text-sm mb-4">{desc}</p>

      <Link
        href="/cards/apply"
        className="inline-block text-indigo-600 font-medium hover:underline"
      >
        Apply Now →
      </Link>
    </div>
  );
}

export default function CardsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Credit Card
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          <CardItem
            title="Platinum Card"
            desc="Higher limits and premium benefits."
            img="/images/cards/platinum.png"
          />

          <CardItem
            title="Travel Card"
            desc="Earn rewards on flights and hotels."
            img="/images/cards/travel.png"
          />

          <CardItem
            title="Shopping Card"
            desc="Best cashback on online shopping."
            img="/images/cards/shopping.png"
          />

        </div>
      </div>
    </section>
  );
}
