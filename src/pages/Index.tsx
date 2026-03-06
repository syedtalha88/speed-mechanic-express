import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import RatingsMarquee from "@/components/RatingsMarquee";
import ServicesSection from "@/components/ServicesSection";
import LocationsSection from "@/components/LocationsSection";
import HowItWorks from "@/components/HowItWorks";
import TrustSection from "@/components/TrustSection";
import WhyDifferent from "@/components/WhyDifferent";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import StatsStrip from "@/components/StatsStrip";
import FAQSection from "@/components/FAQSection";

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />
      <RatingsMarquee />
      <ServicesSection />
      <LocationsSection />
      <HowItWorks />
      <TrustSection />
      <WhyDifferent />
      <PricingSection />
      <TestimonialsSection />
      <StatsStrip />
      <FAQSection />
    </main>
    <Footer />
  </>
);

export default Index;
