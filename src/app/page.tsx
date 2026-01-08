import HeroSection from "@/components/home/HeroSection";
import OffersSection from "@/components/home/OffersSection";
import LoanCalculator from "@/components/home/LoanCalculator";
import TrustBar from "@/components/home/TrustBar";
import FeaturesSection from "@/components/home/FeaturesSection";
import CTASection from "@/components/home/CTASection";
import CardsSection from "@/components/home/CardsSection";


export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <OffersSection />
      <LoanCalculator />
      <CardsSection /> 
      <TrustBar />
      <FeaturesSection />
      <CTASection />
    </main>
  );
}
