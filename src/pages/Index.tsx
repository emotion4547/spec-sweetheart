import { lazy, Suspense } from "react";
import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";

const Services = lazy(() => import("@/components/landing/Services"));
const WhenNeeded = lazy(() => import("@/components/landing/WhenNeeded"));
const Problems = lazy(() => import("@/components/landing/Problems"));
const HowWeWork = lazy(() => import("@/components/landing/HowWeWork"));
const Advantages = lazy(() => import("@/components/landing/Advantages"));
const Clients = lazy(() => import("@/components/landing/Clients"));
const Reviews = lazy(() => import("@/components/landing/Reviews"));
const Presentation = lazy(() => import("@/components/landing/Presentation"));
const FAQ = lazy(() => import("@/components/landing/FAQ"));
const CTABlock = lazy(() => import("@/components/landing/CTABlock"));
const Footer = lazy(() => import("@/components/landing/Footer"));

const Index = () => (
  <main className="min-h-screen">
    <Header />
    <Hero />
    <Suspense fallback={null}>
      <Services />
      <WhenNeeded />
      <Problems />
      <HowWeWork />
      <Advantages />
      <Clients />
      <Reviews />
      <Presentation />
      <FAQ />
      <CTABlock />
      <Footer />
    </Suspense>
  </main>
);

export default Index;
