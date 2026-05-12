import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroFlow from "@/assets/hero-flow.jpg";

const Hero = () => (
  <section className="relative overflow-hidden bg-navy-ink text-primary-foreground">
    <img
      src={heroFlow}
      alt=""
      aria-hidden="true"
      width={1920}
      height={1080}
      className="absolute inset-0 h-full w-full object-cover opacity-60"
    />
    <div className="absolute inset-0 bg-gradient-to-b from-navy-ink/40 via-navy-ink/70 to-navy-ink" />
    <div className="absolute inset-0 bg-gradient-to-r from-navy-ink via-navy-ink/70 to-transparent" />

    <div className="container-wide relative z-10 grid min-h-[88vh] items-center py-32 md:py-40">
      <div className="max-w-3xl animate-fade-up">
        <p className="eyebrow text-cyan">Drip AI &amp; Data — Decision Intelligence</p>
        <h1 className="display-serif mt-8 text-5xl text-balance text-primary-foreground md:text-7xl lg:text-[5.5rem]">
          Most mid-market companies scaled <em className="text-cyan not-italic">without</em> a real data foundation.
          <br />
          <span className="font-sans text-3xl font-medium tracking-tight md:text-4xl lg:text-5xl">
            We build the one they're missing.
          </span>
        </h1>
        <p className="mt-10 max-w-2xl text-lg leading-relaxed text-primary-foreground/75 md:text-xl">
          A decade of enterprise data and AI leadership — from Fidelity, Manulife, Rocket Software, and Kaspersky — now working for mid-market leaders in financial services, healthcare, and cybersecurity. At a fraction of the cost of building in-house.
        </p>
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Button asChild variant="hero" size="xl">
            <a href="#consultation">
              Book a free consultation <ArrowRight className="!size-5" />
            </a>
          </Button>
          <Button asChild variant="outlineLight" size="xl">
            <a href="/work">See our work</a>
          </Button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
