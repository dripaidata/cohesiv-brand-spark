import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "Diagnose",
    days: "Week 1–2",
    body: "We meet your team where they are — auditing the stack, the data, the gaps, and the goals nobody's written down yet. You walk away with a written diagnosis whether or not we work together.",
  },
  {
    n: "02",
    title: "Design",
    days: "Week 3–4",
    body: "We translate the diagnosis into a sequenced roadmap with hard ROI math, build-vs-buy tradeoffs, and a clear target architecture. Your leadership team signs off before a line of code ships.",
  },
  {
    n: "03",
    title: "Deploy",
    days: "Week 5+",
    body: "Hands-on build, embedded with your team. We ship in two-week increments, transfer ownership as we go, and leave behind documentation a junior engineer can pick up tomorrow.",
  },
];

const HowWeWork = () => (
  <section className="bg-background py-28 md:py-40">
    <div className="container-wide">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-cyan">How we work</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
            A process built for mid-market <em className="text-cyan not-italic">speed and scrappiness.</em>
          </h2>
        </div>
        <p className="md:col-span-5 text-base leading-relaxed text-muted-foreground">
          No 80-page slide decks. No six-month discovery phases. Three phases, hard outputs at the end of each, and a clear off-ramp if it isn't working.
        </p>
      </div>

      <ol className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {steps.map((s, i) => (
          <Reveal key={s.n} delay={i * 120} as="li" className="bg-card p-10">
            <div className="flex items-baseline justify-between">
              <span className="display-serif text-6xl text-cyan">{s.n}</span>
              <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                {s.days}
              </span>
            </div>
            <h3 className="display-serif mt-8 text-4xl text-navy-ink">{s.title}</h3>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">{s.body}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  </section>
);

export default HowWeWork;
