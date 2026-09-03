import { ArrowRight } from "lucide-react";
import iconData from "@/assets/icon-data.png";
import iconAi from "@/assets/icon-ai-strategy.png";
import iconProduct from "@/assets/icon-agentic.png";

const services = [
  {
    icon: iconData,
    eyebrow: "01 / Foundation",
    title: "Data & Analytics",
    body: "The foundation for everything else. We untangle messy legacy stacks and build a single, compliant source of truth your team can actually trust.",
    href: "/data-analytics",
  },
  {
    icon: iconAi,
    eyebrow: "02 / Intelligence",
    title: "AI Implementation",
    body: "Past the pilot stage. We pick the use cases with real ROI, build the agents and automations, and deploy them into the tools your team already uses.",
    href: "/ai-implementation",
  },
  {
    icon: iconProduct,
    eyebrow: "03 / Software",
    title: "Product Development",
    body: "Full stack, start to finish. We design, build, and ship working software, then hand over documentation a junior engineer can pick up tomorrow.",
    href: "/product-development",
  },
];

const Services = () => (
  <section id="services" className="relative bg-background py-28 md:py-40">
    <div className="container-wide">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-cyan">WHAT WE DO</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-7xl">
            Three capabilities. One accountable operator.
          </h2>
        </div>
        <p className="text-lg text-muted-foreground md:col-span-5">
          Most companies solve data, AI, and software with three separate firms, then spend a year making three roadmaps agree. We do all three in sequence, and one person owns the outcome.
        </p>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {services.map((s) => (
          <a
            key={s.title}
            href={s.href}
            className="group relative block bg-card p-10 transition-colors hover:bg-cyan-soft/30"
          >
            <img src={s.icon} alt="" loading="lazy" className="h-20 w-20 object-contain" />
            <p className="eyebrow mt-8 text-cyan">{s.eyebrow}</p>
            <h3 className="display-serif mt-3 text-4xl text-navy-ink">{s.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan">
              Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
