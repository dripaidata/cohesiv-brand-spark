import iconAi from "@/assets/icon-ai-strategy.png";
import iconData from "@/assets/icon-data.png";
import iconAgentic from "@/assets/icon-agentic.png";

const services = [
  {
    icon: iconAi,
    eyebrow: "01 / Strategy",
    title: "AI Strategy",
    body: "Move beyond the hype. We identify high-ROI use cases and build an implementation roadmap grounded in your actual business goals.",
    points: ["AI readiness assessment", "Use case identification", "Technology selection", "Implementation roadmap"],
  },
  {
    icon: iconData,
    eyebrow: "02 / Foundation",
    title: "Data & Analytics",
    body: "The foundation for everything else. We untangle messy legacy stacks and build a single, compliant source of truth your team can trust.",
    points: ["Data warehouse design", "Analytics frameworks", "Dashboard & reporting layer", "Data governance"],
  },
  {
    icon: iconAgentic,
    eyebrow: "03 / Automation",
    title: "Agentic Workflows",
    body: "Automate the complex. We deploy intelligent agents that turn your static data into autonomous action.",
    points: ["Workflow automation", "Process optimization", "Agent orchestration", "Integration design"],
  },
];

const Services = () => (
  <section id="services" className="relative bg-background py-28 md:py-40">
    <div className="container-wide">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-cyan">What we do</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-7xl">
            We meet you <em className="text-cyan not-italic">where you are.</em>
          </h2>
        </div>
        <p className="text-lg text-muted-foreground md:col-span-5">
          Not every company needs the same thing. We scope every engagement around your actual situation — from a single dashboard to a full data platform.
        </p>
      </div>

      <div className="mt-20 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {services.map((s) => (
          <article key={s.title} className="group relative bg-card p-10 transition-colors hover:bg-cyan-soft/30">
            <img src={s.icon} alt="" loading="lazy" className="h-20 w-20 object-contain" />
            <p className="eyebrow mt-8 text-cyan">{s.eyebrow}</p>
            <h3 className="display-serif mt-3 text-4xl text-navy-ink">{s.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.body}</p>
            <ul className="mt-8 space-y-2.5 border-t border-border pt-6">
              {s.points.map((p) => (
                <li key={p} className="flex items-start gap-3 text-sm text-navy-deep">
                  <span className="mt-2 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan" />
                  {p}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
