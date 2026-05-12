import { Check, Minus, X } from "lucide-react";

type Cell = "yes" | "no" | "partial";

const rows: { label: string; inhouse: Cell; bigfour: Cell; drip: Cell; note?: string }[] = [
  { label: "Senior, hands-on operator (not a deck-builder)", inhouse: "partial", bigfour: "no", drip: "yes" },
  { label: "Time to first shipped value", inhouse: "no", bigfour: "no", drip: "yes" },
  { label: "Mid-market budget reality", inhouse: "no", bigfour: "no", drip: "yes" },
  { label: "Fortune 500 enterprise pedigree", inhouse: "partial", bigfour: "yes", drip: "yes" },
  { label: "Knowledge transfer to your team", inhouse: "yes", bigfour: "no", drip: "yes" },
  { label: "Skin in the game on outcomes", inhouse: "yes", bigfour: "no", drip: "yes" },
];

const Mark = ({ v }: { v: Cell }) => {
  if (v === "yes") return <Check className="mx-auto size-5 text-cyan" aria-label="Yes" />;
  if (v === "partial") return <Minus className="mx-auto size-5 text-muted-foreground" aria-label="Partial" />;
  return <X className="mx-auto size-5 text-muted-foreground/50" aria-label="No" />;
};

const Comparison = () => (
  <section className="bg-secondary py-28 md:py-40">
    <div className="container-wide">
      <div className="grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-cyan">Why Drip</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
            Three ways to fix this. <em className="text-cyan not-italic">One that actually fits.</em>
          </h2>
        </div>
        <p className="md:col-span-5 text-base leading-relaxed text-muted-foreground">
          A side-by-side honest look at the choices in front of you. We've sat on every side of this table.
        </p>
      </div>

      <div className="mt-16 overflow-x-auto rounded-sm border border-border bg-card shadow-card">
        <table className="w-full min-w-[640px] border-collapse text-left">
          <thead>
            <tr className="border-b border-border">
              <th className="p-6"></th>
              <th className="p-6 text-center">
                <p className="eyebrow text-muted-foreground">Option A</p>
                <p className="mt-2 text-base font-semibold text-navy-ink">Hire in-house</p>
                <p className="text-xs text-muted-foreground">$300K+/yr loaded</p>
              </th>
              <th className="p-6 text-center">
                <p className="eyebrow text-muted-foreground">Option B</p>
                <p className="mt-2 text-base font-semibold text-navy-ink">Big 4 / Tier-1</p>
                <p className="text-xs text-muted-foreground">$500K+ engagement</p>
              </th>
              <th className="bg-cyan-soft/40 p-6 text-center">
                <p className="eyebrow text-cyan">Option C</p>
                <p className="mt-2 text-base font-semibold text-navy-ink">Drip AI &amp; Data</p>
                <p className="text-xs text-muted-foreground">Project · fractional retainer</p>
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label} className="border-t border-border">
                <td className="p-6 text-sm text-navy-deep">{r.label}</td>
                <td className="p-6 text-center"><Mark v={r.inhouse} /></td>
                <td className="p-6 text-center"><Mark v={r.bigfour} /></td>
                <td className="bg-cyan-soft/30 p-6 text-center"><Mark v={r.drip} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </section>
);

export default Comparison;
