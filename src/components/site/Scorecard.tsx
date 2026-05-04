import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight, CheckCircle2, Download, Lock } from "lucide-react";
import { toast } from "sonner";

const includes = [
  "12-question diagnostic across data, AI, governance, and team",
  "Benchmark scoring against 40+ mid-market peers we've assessed",
  "Prioritized 90-day roadmap based on your weakest dimensions",
  "Common pitfalls we see in companies your size — and how to dodge them",
];

const Scorecard = () => {
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Check your inbox — the scorecard is on its way.");
  };

  return (
    <section id="scorecard" className="relative overflow-hidden bg-background py-28 md:py-40">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,hsl(var(--cyan)/0.12),transparent_55%)]"
      />
      <div className="container-wide relative grid gap-16 md:grid-cols-12">
        <div className="md:col-span-6">
          <p className="eyebrow text-cyan">Free download</p>
          <h2 className="display-serif mt-6 text-5xl text-navy-ink text-balance md:text-6xl">
            The Mid-Market <em className="text-cyan not-italic">AI Readiness</em> Scorecard.
          </h2>
          <p className="mt-8 max-w-md text-base leading-relaxed text-muted-foreground">
            Most mid-market AI initiatives stall before they ship — usually for the same five reasons. This scorecard tells you in five minutes whether you're set up to succeed, and exactly where to focus first.
          </p>

          <ul className="mt-10 space-y-4">
            {includes.map((line) => (
              <li key={line} className="flex items-start gap-3 text-sm text-navy-deep">
                <CheckCircle2 className="mt-0.5 size-5 flex-shrink-0 text-cyan" />
                <span>{line}</span>
              </li>
            ))}
          </ul>

          <p className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="size-3.5" />
            We never share your email. One follow-up, then only if you want it.
          </p>
        </div>

        <div className="md:col-span-6">
          <div className="relative rounded-sm border border-border bg-card p-8 shadow-card md:p-10">
            <div className="absolute -top-3 left-8 rounded-sm bg-cyan px-3 py-1 font-mono text-[0.65rem] uppercase tracking-widest text-navy-ink">
              PDF · 14 pages
            </div>
            {submitted ? (
              <div className="flex min-h-[280px] flex-col items-center justify-center text-center">
                <CheckCircle2 className="size-12 text-cyan" />
                <h3 className="display-serif mt-6 text-3xl text-navy-ink">You're in.</h3>
                <p className="mt-3 max-w-sm text-sm text-muted-foreground">
                  We just sent the scorecard to your inbox. While you're here — want to walk through your results with Danny?
                </p>
                <Button asChild variant="hero" size="lg" className="mt-6">
                  <a href="#consultation">
                    Book a 30-min review <ArrowRight className="!size-4" />
                  </a>
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-5">
                <p className="display-serif text-3xl text-navy-ink">Get your copy.</p>
                <div className="grid gap-2">
                  <Label htmlFor="sc-name" className="eyebrow text-navy-deep">
                    First name
                  </Label>
                  <Input id="sc-name" required className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sc-email" className="eyebrow text-navy-deep">
                    Work email
                  </Label>
                  <Input id="sc-email" type="email" required className="h-11" />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="sc-company" className="eyebrow text-navy-deep">
                    Company
                  </Label>
                  <Input id="sc-company" required className="h-11" />
                </div>
                <Button type="submit" variant="hero" size="xl" className="mt-2">
                  <Download className="!size-5" /> Send me the scorecard
                </Button>
                <p className="text-center text-xs text-muted-foreground">
                  Joining 400+ mid-market operators already on the list.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Scorecard;
