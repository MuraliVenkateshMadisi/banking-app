import CardsSection from "@/components/home/CardsSection";
import FeaturesSection from "@/components/home/FeaturesSection";
import OffersSection from "@/components/home/OffersSection";

export default function PersonalPage() {
  return (
    <main className="py-16">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h1 className="text-4xl font-bold mb-4">Personal Banking</h1>
        <p className="text-slate-600 max-w-2xl">
          Accounts, cards, loans and investments designed for your everyday
          financial needs.
        </p>
      </div>

      <OffersSection />
      <CardsSection />
      <FeaturesSection />
    </main>
  );
}
