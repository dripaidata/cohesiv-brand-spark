import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";
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
      <Seo
        title="Drip AI & Data — Decision Intelligence"
        description="Enterprise-grade data and AI leadership for mid-market companies in financial services, healthcare, and cybersecurity — at a fraction of in-house cost."
        path="/"
      />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <HowWeWork />
        <Credentials />
        <Proof />
        <Comparison />
        <Labs />
        
        <FAQ />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
