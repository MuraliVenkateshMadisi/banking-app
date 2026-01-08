import Link from "next/link";

function CardItem({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div className="border rounded-xl p-6 text-center hover:shadow-lg transition">
      {/* Card Mock */}
      <div className="h-32 bg-gradient-to-br from-indigo-500 to-indigo-800 rounded-lg mb-4"></div>

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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">
          Choose Your Credit Card
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <CardItem
            title="Platinum Card"
            desc="Higher limits and premium benefits."
          />
          <CardItem
            title="Travel Card"
            desc="Earn rewards on flights and hotels."
          />
          <CardItem
            title="Shopping Card"
            desc="Best cashback on online shopping."
          />
        </div>
      </div>
    </section>
  );
}
