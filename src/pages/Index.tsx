import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Services from "@/components/landing/Services";
import WhenNeeded from "@/components/landing/WhenNeeded";
import Problems from "@/components/landing/Problems";
import HowWeWork from "@/components/landing/HowWeWork";
import Advantages from "@/components/landing/Advantages";
import Pricing from "@/components/landing/Pricing";
import Clients from "@/components/landing/Clients";
import Reviews from "@/components/landing/Reviews";
import FAQ from "@/components/landing/FAQ";
import CTABlock from "@/components/landing/CTABlock";
import Footer from "@/components/landing/Footer";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <Hero />
    <Services />
    <WhenNeeded />
    <Problems />
    <HowWeWork />
    <Advantages />
    <Pricing />
    <Clients />
    <Reviews />
    <FAQ />
    <CTABlock />
    <Footer />
  </div>
);

export default Index;
