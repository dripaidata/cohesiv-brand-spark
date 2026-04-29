import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { ArrowRight } from "lucide-react";

const services = ["AI Strategy", "Data & Analytics", "Agentic Workflows"];

const ConsultationForm = () => {
  const [selected, setSelected] = useState<string[]>([]);
  const toggle = (s: string) =>
    setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks — we'll be in touch within one business day.");
    (e.target as HTMLFormElement).reset();
    setSelected([]);
  };

  return (
    <section id="consultation" className="relative overflow-hidden bg-navy-ink py-28 text-primary-foreground md:py-40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,hsl(var(--cyan)/0.18),transparent_55%)]" />
      <div className="container-wide relative grid gap-16 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-cyan">Start the conversation</p>
          <h2 className="display-serif mt-6 text-5xl text-balance md:text-6xl">
            Let's figure out <em className="text-cyan not-italic">what's holding you back.</em>
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-primary-foreground/70">
            Every engagement starts with a free, honest conversation. No pitch deck, no pressure. Just a clear-eyed look at where your data and AI gaps are — and whether we're the right team to fix them.
          </p>
          <ul className="mt-10 space-y-4 text-sm text-primary-foreground/80">
            {[
              "30-minute working session",
              "Honest assessment of fit",
              "Concrete next steps either way",
            ].map((x) => (
              <li key={x} className="flex items-start gap-3">
                <span className="mt-1.5 inline-block h-1.5 w-1.5 rounded-full bg-cyan" />
                {x}
              </li>
            ))}
          </ul>
        </div>

        <form
          onSubmit={onSubmit}
          className="md:col-span-7 grid gap-6 rounded-sm border border-white/10 bg-white/[0.03] p-8 backdrop-blur md:p-10"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <Field id="firstName" label="First name" required />
            <Field id="lastName" label="Last name" required />
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            <Field id="email" type="email" label="Work email" required />
            <Field id="company" label="Company" required />
          </div>
          <Field id="title" label="Job title" />

          <div>
            <Label className="text-xs font-mono uppercase tracking-widest text-primary-foreground/60">
              Service of interest
            </Label>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((s) => {
                const active = selected.includes(s);
                return (
                  <button
                    type="button"
                    key={s}
                    onClick={() => toggle(s)}
                    className={`rounded-full border px-4 py-2 text-sm transition-all ${
                      active
                        ? "border-cyan bg-cyan text-navy-ink"
                        : "border-white/20 text-primary-foreground/80 hover:border-cyan/60"
                    }`}
                  >
                    {s}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="challenges" className="text-xs font-mono uppercase tracking-widest text-primary-foreground/60">
              Describe your challenges
            </Label>
            <Textarea
              id="challenges"
              rows={5}
              required
              className="border-white/15 bg-white/[0.04] text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-cyan"
              placeholder="What are you trying to figure out?"
            />
          </div>

          <div className="flex items-center gap-3 pt-2">
            <Checkbox id="nda" />
            <Label htmlFor="nda" className="text-sm font-normal text-primary-foreground/70">
              Mutual NDA before we talk
            </Label>
          </div>

          <Button type="submit" variant="hero" size="xl" className="w-full md:w-auto md:justify-self-start">
            Send message <ArrowRight className="!size-5" />
          </Button>
        </form>
      </div>
    </section>
  );
};

const Field = ({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) => (
  <div className="grid gap-2">
    <Label htmlFor={id} className="text-xs font-mono uppercase tracking-widest text-primary-foreground/60">
      {label} {required && <span className="text-cyan">*</span>}
    </Label>
    <Input
      id={id}
      type={type}
      required={required}
      className="h-11 border-white/15 bg-white/[0.04] text-primary-foreground placeholder:text-primary-foreground/40 focus-visible:ring-cyan"
    />
  </div>
);

export default ConsultationForm;
