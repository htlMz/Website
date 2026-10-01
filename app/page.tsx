import Header from "@/components/Header";
import Hero from "@/components/Hero";
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
    <main className="min-h-screen bg-[#0b0713]">
      <Header />
      <Hero />
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
