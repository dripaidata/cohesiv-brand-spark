const credentials = [
  { role: "Head of Analytics & Journey Orchestration", company: "Rocket Software" },
  { role: "Director of Insights & Analytics for Personalization", company: "Fidelity Investments" },
  { role: "Global Director of MarTech & Analytics", company: "Manulife / John Hancock" },
  { role: "Global Digital Analytics", company: "Kaspersky Labs" },
];

const Credentials = () => (
  <section className="relative bg-navy-ink py-28 text-primary-foreground md:py-40">
    <div className="container-wide">
      <div className="grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-cyan">Track record</p>
          <h2 className="display-serif mt-6 text-5xl text-balance md:text-6xl">
            Over a decade of enterprise data leadership <em className="text-cyan not-italic">now working for you.</em>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-primary-foreground/70">
            The same caliber of leadership that ran analytics organizations at Fortune 500 enterprises — applied to the unique constraints, speed, and scrappiness of mid-market.
          </p>
        </div>
        <ol className="md:col-span-7 md:pl-10">
          {credentials.map((c, i) => (
            <li
              key={c.company}
              className="grid grid-cols-[auto_1fr] items-baseline gap-6 border-t border-white/10 py-8 first:border-t-0 first:pt-0"
            >
              <span className="font-mono text-sm text-cyan">0{i + 1}</span>
              <div>
                <p className="display-serif text-3xl text-primary-foreground md:text-4xl">{c.company}</p>
                <p className="mt-1 text-sm text-primary-foreground/60">{c.role}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  </section>
);

export default Credentials;
