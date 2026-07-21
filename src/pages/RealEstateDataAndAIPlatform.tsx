import CaseStudyLayout from "@/components/site/CaseStudyLayout";
import iconData from "@/assets/icon-data.png";

const phases = [
  {
    n: "01",
    title: "Automated data pipeline",
    when: "live in week one",
    body:
      "A nightly pipeline pulls 24 reports from their PMS's API into a cloud data warehouse: financials, rent roll, leasing activity, budgets, unit data. No scraping, no browser extensions, nothing that breaks when the vendor redesigns a page. Daily snapshots preserve history the PMS itself throws away, like market rent changes over time.",
  },
  {
    n: "02",
    title: "A governed metrics layer",
    when: "months one to two",
    body:
      "Raw system data is full of traps: sign conventions, duplicate rows, accounts that mean different things in different reports. We encoded the firm's business logic (NOI definitions, budget conventions, accrual corrections, occupancy math) into 25+ curated views, so every dashboard and every AI answer computes numbers exactly one way: theirs.",
  },
  {
    n: "03",
    title: "Executive dashboards",
    when: "iterating from week two",
    body:
      "Live dashboards for the CEO and CFO: portfolio overview, monthly and quarterly property performance, budget vs. actual with drill down to the account level, occupancy and leasing funnels, and rent performance against the original pro forma underwriting by unit type and renovation status, a view their PMS simply could not produce.",
  },
  {
    n: "04",
    title: "AI analysts on top",
    when: "months three to four",
    body:
      "Three conversational AI agents (financial performance, leasing & vacancy, and rent roll & pro forma) that answer plain English questions with real SQL against the governed metrics layer. Each shipped with guardrails and a QA suite of known answer questions, so they decline what the data can't support instead of improvising.",
  },
];

const beforeItems = [
  "Portfolio analysis assembled by hand from PMS exports and spreadsheets",
  "A screen scraping dashboard tool that broke whenever the PMS vendor shipped changes",
  "Historical market rents overwritten by the PMS, no way to see rent change history",
  "Pro forma performance, mark to markets, and distributions tracked in fragile manual workbooks",
  "Every executive question became an interruption to the CFO's day",
  "Weeks of manual work every month and quarter to close books and answer leadership questions",
];

const afterItems = [
  "Weeks of manual reporting and analysis now done in hours every month and quarter",
  "All 24 core reports land in one warehouse automatically, every night",
  "Official API integration, stable across vendor UI changes",
  "Daily snapshots preserve history the source system discards",
  "Dashboards and pro forma comparisons update themselves, distributions automation underway",
  "The CEO and team self serve answers, including from anywhere in the world",
];

const chat: { role: "q" | "a"; text: string }[] = [
  { role: "q", text: "How did renewals at [property] trend this quarter, how many, and what was the average increase?" },
  { role: "a", text: "12 renewals · +4.9% average increase. Correctly weighted across the quarter's months, formatted and sourced from the governed views." },
  { role: "q", text: "How are renovated units leasing up against pro forma?" },
  { role: "a", text: "6 renovated lease ups · +50.6% vs. pre renovation rents · +8.5% vs. pro forma. And where underlying data was incomplete, the agent flagged the estimate instead of stating it as fact." },
];

const RealEstateDataAndAIPlatform = () => (
  <CaseStudyLayout
    backHref="/case-studies"
    backLabel="All case studies"
    eyebrow="REAL ESTATE · DATA FOUNDATION · ANALYTICS · AI"
    title="Real Estate Data & AI Platform"
    intro="How a family-run real estate investor went from spreadsheet archaeology to a fully custom data and AI platform: data accuracy and automation, customized and always on analytics, and LLM analysts for financial reporting, leasing and vacancy, performance vs pro forma, and distributions. Weeks of manual work now done in hours, every month and quarter."
    icon={iconData}
    stats={[
      ["4 months", "kickoff to platform + AI agents in daily use"],
      ["24 reports", "pulled from their PMS automatically, every night"],
      ["516/516", "property months reconciled to the penny"],
      ["< $20/mo", "total cloud infra to run the platform"],
    ]}
    meta={[
      ["Sector", "Real estate"],
      ["Portfolio", "24 properties, ~1,350 units"],
      ["Region", "Northeast U.S."],
      ["Role", "Data foundation, analytics, AI implementation"],
      ["Stack", "Cloud data warehouse · Governed metrics layer · Dashboards · LLM agents"],
      ["Timeline", "4 months to full platform"],
    ]}
    seo={{
      path: "/case-studies/real-estate-data-and-ai-platform",
      title: "Case Study: Real Estate Data & AI Platform | Drip AI & Data",
      description:
        "How a family-run real estate investor replaced spreadsheets and a breaking dashboard tool with a custom data foundation, analytics, and LLM analysts, saving weeks of manual work every month and quarter.",
    }}
  >
    <p className="eyebrow text-cyan !mt-0">THE STARTING POINT</p>
    <h2>Good data, locked in the wrong places</h2>
    <p>
      The firm manages two dozen multifamily properties, about 1,350 units, with a lean back office. Their
      property management system ran day to day operations fine, but its reporting couldn't answer the
      questions that actually drive an investment business: How are in place rents trending against our
      pro forma? What did renovated units actually lease up at? How is each property performing against
      budget, this month and cumulatively?
    </p>
    <p>
      What they needed was a real estate data and AI platform from the ground up: a data foundation, an analytics
      layer, and LLM analysts that could handle financial reporting, leasing and vacancy, performance vs pro forma,
      and distributions. They had already tried to solve it. A contractor built them a custom dashboard tool that worked by
      screen scraping their PMS, and every time the vendor changed its login flow or page structure, the
      tool went dark. Off the shelf BI subscriptions covered some dashboards but none of the analysis
      that lived outside the PMS: pro forma comparisons, mark to markets, investor level performance. So
      those stayed where they'd always been, in spreadsheets, maintained by hand, by the CFO.
    </p>

    <figure className="not-prose my-10 border-l-4 border-cyan bg-cyan-soft/40 p-6 md:p-8">
      <p className="display-serif text-2xl leading-snug text-navy-ink md:text-3xl !mt-0">
        The tipping point wasn't a report. It was a working style: the CEO travels for weeks at a time
        and wanted full visibility into the portfolio without a daily stream of "hey, quick question…"
        messages that pulled the CFO off real work.
      </p>
    </figure>

    <p className="eyebrow text-cyan">THE BUILD</p>
    <h2>One pipeline, one source of truth, then intelligence on top</h2>
    <p>We built the platform in layers, each one usable on its own before the next went in.</p>

    <ol className="not-prose mt-10 grid gap-6 md:grid-cols-2">
      {phases.map((p) => (
        <li key={p.n} className="rounded-sm border border-border bg-card p-6 shadow-sm md:p-8">
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-2xl text-cyan">{p.n}</span>
            <h3 className="display-serif text-2xl text-navy-ink !mt-0">{p.title}</h3>
          </div>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground !mt-3">{p.when}</p>
          <p className="!mt-4 text-base leading-relaxed text-navy-deep">{p.body}</p>
        </li>
      ))}
    </ol>

    <p className="eyebrow text-cyan mt-16">IN PRACTICE</p>
    <h2>Questions that used to be a project are now a sentence</h2>

    <div className="not-prose mt-8 space-y-4">
      {chat.map((m, i) =>
        m.role === "q" ? (
          <div key={i} className="flex justify-start">
            <div className="max-w-[85%] rounded-sm border border-border bg-muted/60 px-5 py-4 italic text-muted-foreground">
              "{m.text}"
            </div>
          </div>
        ) : (
          <div key={i} className="flex justify-end">
            <div className="max-w-[85%] rounded-sm bg-cyan-soft px-5 py-4 text-navy-ink">
              {m.text}
            </div>
          </div>
        ),
      )}
    </div>
    <p className="!mt-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      Real interactions from the client's agents, anonymized. The CEO and leasing team query these
      directly, no analyst in the loop.
    </p>

    <p>
      Accuracy was treated as a feature, not an aspiration. When we rebuilt their operating expense
      figures with accrual corrections, we reconciled all 516 property months against their books, to
      the penny, before switching anything over. When the CFO's hand built tally said 20 for a
      property quarter, we didn't stop until the model said 20 for the same reasons he did. Along the
      way, the platform surfaced data quality issues in the source system the firm didn't know it had:
      mis tagged accounts, duplicated entries, placeholder dates, each documented and fixed or flagged.
    </p>

    <p className="!mt-6 text-base leading-relaxed text-navy-deep">
      The real payoff is time. Work that used to consume weeks of manual effort every month and quarter — pulling exports, reconciling accounts, building board reports, and answering ad hoc questions — now happens in hours. The CFO's team is no longer the bottleneck for every leadership question.
    </p>

    <p className="eyebrow text-cyan mt-16">BEFORE & AFTER</p>
    <h2>What changed for the people</h2>

    <div className="not-prose mt-8 grid gap-6 md:grid-cols-2">
      <div className="rounded-sm border border-border bg-card p-6 md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Before</p>
        <ul className="mt-4 space-y-3 text-navy-deep">
          {beforeItems.map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-2 h-1 w-3 flex-shrink-0 bg-muted-foreground/50" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-sm border border-border border-t-4 border-t-cyan bg-card p-6 shadow-md md:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-cyan">After</p>
        <ul className="mt-4 space-y-3 text-navy-ink">
          {afterItems.map((t) => (
            <li key={t} className="flex gap-3 text-sm leading-relaxed">
              <span className="mt-2 h-1 w-3 flex-shrink-0 bg-cyan" />
              <span>{t}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    <p className="mt-10">
      And because the platform was engineered, not just assembled, it runs lean: the entire system
      (pipeline, warehouse, dashboards, agents) operates on under $20 a month of cloud cost, with
      monitoring in place that has caught and self healed upstream failures without anyone noticing
      downstream.
    </p>

    <p className="!mt-16 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      Client details anonymized at the client's request.
    </p>
  </CaseStudyLayout>
);

export default RealEstateDataAndAIPlatform;
