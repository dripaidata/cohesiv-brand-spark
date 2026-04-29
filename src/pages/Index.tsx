import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import Credentials from "@/components/site/Credentials";
import Proof from "@/components/site/Proof";
import Labs from "@/components/site/Labs";
import ConsultationForm from "@/components/site/ConsultationForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Credentials />
        <Proof />
        <Labs />
        <ConsultationForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
