import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import HowWeWork from "@/components/site/HowWeWork";
import Credentials from "@/components/site/Credentials";
import Proof from "@/components/site/Proof";
import Comparison from "@/components/site/Comparison";
import Labs from "@/components/site/Labs";

import FAQ from "@/components/site/FAQ";
import ConsultationForm from "@/components/site/ConsultationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <Credentials />
        <Proof />
        <Comparison />
        <Labs />
        <Insights />
        <FAQ />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
