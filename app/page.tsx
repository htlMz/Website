import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NicheMarquee from "@/components/NicheMarquee";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Why from "@/components/Why";
import Whyitworks from "@/components/Whyitworks";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <NicheMarquee />
      <Services />
      <Process />
      <Why />
      <Whyitworks />
      <Portfolio />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
