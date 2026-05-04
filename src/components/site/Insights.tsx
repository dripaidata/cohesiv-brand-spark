import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    tag: "AI Strategy",
    readTime: "6 min",
    title: "The mid-market AI gap nobody talks about",
    summary: "Why most mid-market AI pilots die in PowerPoint — and the three foundations that separate the ones that ship.",
  },
  {
    tag: "Data Foundations",
    readTime: "8 min",
    title: "Your warehouse is not your data strategy",
    summary: "How to tell whether you have a data platform or just a very expensive Snowflake bill.",
  },
  {
    tag: "Agentic Systems",
    readTime: "5 min",
    title: "What we learned shipping 11 agents into production",
    summary: "Notes from Drip Labs on orchestration patterns, failure modes, and the boring parts that decide whether agents actually work.",
  },
];

const Insights = () => (
  <section className="bg-background py-28 md:py-40">
    <div className="container-wide">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <div className="max-w-2xl">
          <p className="eyebrow text-cyan">Insights</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
            Sharper thinking, <em className="text-cyan not-italic">no fluff.</em>
          </h2>
        </div>
        <a
          href="https://www.linkedin.com/in/danny-ellowitz/recent-activity/all/"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-cyan"
        >
          Follow on LinkedIn
          <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
        {posts.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col bg-card p-8 transition-colors hover:bg-cyan-soft/30 md:p-10"
          >
            <div className="flex items-center justify-between">
              <span className="rounded-full border border-border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-navy-deep">
                {p.tag}
              </span>
              <span className="font-mono text-xs text-muted-foreground">{p.readTime}</span>
            </div>
            <h3 className="display-serif mt-8 text-3xl text-navy-ink md:text-4xl">{p.title}</h3>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-cyan">
              Coming soon
              <span className="h-px w-8 bg-cyan transition-all group-hover:w-12" />
            </span>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Insights;
