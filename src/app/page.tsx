import CustomJewelry from "@/components/CustomJewelry";
import ExploreMore from "@/components/ExploreMore";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TestimonialSection from "@/components/testimonial/TestimonialSection";
import WhyChooseMyJewel from "@/components/WhyChooseMyJewel";

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <CustomJewelry />
      <WhyChooseMyJewel />
      <ExploreMore />
      <TestimonialSection />
      <Footer/>
    </main>
  );
}
