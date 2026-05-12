import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Button } from "@/components/ui/button";

interface Props {
  backHref: string;
  backLabel: string;
  eyebrow: string;
  title: string;
  intro: string;
  icon: string;
  stats: [string, string][];
  meta: [string, string][];
  children: ReactNode;
  next?: { href: string; label: string };
}

const CaseStudyLayout = ({ backHref, backLabel, eyebrow, title, intro, icon, stats, meta, children, next }: Props) => (
  <div className="min-h-screen bg-background font-sans">
    <Navbar />
    <main>
      <section className="bg-navy-ink py-24 text-primary-foreground md:py-32">
        <div className="container-wide">
          <Link to={backHref} className="inline-flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-cyan">
            <ArrowLeft className="size-4" /> {backLabel}
          </Link>
          <div className="mt-12 grid gap-16 md:grid-cols-12">
            <div className="md:col-span-8">
              <p className="eyebrow text-cyan">{eyebrow}</p>
              <h1 className="display-serif mt-6 text-5xl text-balance md:text-7xl lg:text-8xl">{title}</h1>
              <p className="mt-8 max-w-2xl text-lg text-primary-foreground/75">{intro}</p>
            </div>
            <img src={icon} alt="" className="md:col-span-4 h-48 w-48 self-end justify-self-end object-contain" />
          </div>

          {stats.length > 0 && (
            <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-sm border border-white/10 bg-white/10 md:grid-cols-4">
              {stats.map(([n, l]) => (
                <div key={l} className="bg-navy-ink p-8">
                  <p className="display-serif text-5xl text-cyan md:text-6xl">{n}</p>
                  <p className="eyebrow mt-2 text-primary-foreground/60">{l}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-28 md:py-40">
        <div className="container-wide grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4">
            <p className="eyebrow text-cyan">Engagement</p>
            <dl className="mt-6 space-y-6 text-sm">
              {meta.map(([k, v]) => (
                <div key={k} className="border-t border-border pt-3">
                  <dt className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{k}</dt>
                  <dd className="mt-1 text-navy-ink">{v}</dd>
                </div>
              ))}
            </dl>
          </aside>

          <div className="md:col-span-8 space-y-12 text-base leading-relaxed text-navy-deep [&_h2]:display-serif [&_h2]:text-4xl [&_h2]:text-navy-ink [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:text-navy-ink [&_p]:mt-6 [&_ul]:mt-6 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:space-y-2 [&_li]:text-navy-deep">
            {children}
          </div>
        </div>
      </section>

      {next && (
        <section className="border-t border-border bg-card py-16">
          <div className="container-wide flex items-center justify-between gap-6">
            <p className="eyebrow text-cyan">Next</p>
            <Link to={next.href} className="group inline-flex items-center gap-3 text-right">
              <span className="display-serif text-2xl text-navy-ink md:text-3xl">{next.label}</span>
              <ArrowRight className="size-5 text-navy-deep transition-transform group-hover:translate-x-1 group-hover:text-cyan" />
            </Link>
          </div>
        </section>
      )}

      <section className="border-t border-border bg-gradient-fade py-24">
        <div className="container-wide flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <h2 className="display-serif text-4xl text-navy-ink md:text-5xl">Want one of these for your business?</h2>
          <Button asChild variant="hero" size="xl">
            <a href="/#consultation">Book a consultation <ArrowRight className="!size-5" /></a>
          </Button>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default CaseStudyLayout;
