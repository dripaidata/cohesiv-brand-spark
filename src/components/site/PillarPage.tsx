import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import ServicePageShell from "./ServicePageShell";
import ConsultationForm from "./ConsultationForm";
import Reveal from "./Reveal";

export interface PillarCaseStudy {
  href: string;
  project: string;
  stat: string;
  label: string;
  summary: string;
  icon: string;
  external?: boolean;
}

export interface PillarOffer {
  id: string;
  number: string;
  tag: string;
  name: string;
  price?: string;
  detail: string;
  summary: string;
  icon: string;
}

export interface PillarPageProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  problemEyebrow?: string;
  problemHeading: ReactNode;
  problemBody: string[];
  buildHeading: ReactNode;
  buildItems: string[];
  deliveryHeading: ReactNode;
  deliveryBody: string;
  proofHeading: ReactNode;
  proofIntro?: string;
  caseStudies: PillarCaseStudy[];
  offersHeading: ReactNode;
  offers: PillarOffer[];
  extraSection?: ReactNode;
}

const PillarPage = ({
  eyebrow,
  title,
  intro,
  seoTitle,
  seoDescription,
  path,
  problemEyebrow = "The problem",
  problemHeading,
  problemBody,
  buildHeading,
  buildItems,
  deliveryHeading,
  deliveryBody,
  proofHeading,
  proofIntro,
  caseStudies,
  offersHeading,
  offers,
  extraSection,
}: PillarPageProps) => (
  <ServicePageShell
    eyebrow={eyebrow}
    title={title}
    intro={intro}
    seoTitle={seoTitle}
    seoDescription={seoDescription}
    path={path}
  >
    <section className="bg-background py-24 md:py-32">
      <div className="container-wide grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="eyebrow text-cyan">{problemEyebrow}</p>
          <h2 className="display-serif mt-6 text-4xl text-navy-ink text-balance md:text-5xl">{problemHeading}</h2>
        </div>
        <div className="md:col-span-7 space-y-6">
          {problemBody.map((p) => (
            <p key={p} className="text-lg leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-secondary py-24 md:py-32">
      <div className="container-wide">
        <p className="eyebrow text-cyan">What we build</p>
        <h2 className="display-serif mt-6 max-w-3xl text-4xl text-navy-ink text-balance md:text-5xl">{buildHeading}</h2>
        <ul className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2">
          {buildItems.map((item) => (
            <li key={item} className="flex items-start gap-4 bg-card p-8">
              <Check className="mt-1 size-5 flex-shrink-0 text-cyan" />
              <span className="text-base leading-relaxed text-navy-ink">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>

    {extraSection}

    <section className="bg-navy-ink py-24 text-primary-foreground md:py-32">
      <div className="container-wide grid items-end gap-10 md:grid-cols-12">
        <div className="md:col-span-7">
          <p className="eyebrow text-cyan">Delivery</p>
          <h2 className="display-serif mt-6 text-4xl text-balance md:text-5xl">{deliveryHeading}</h2>
        </div>
        <div className="md:col-span-5">
          <p className="text-base leading-relaxed text-primary-foreground/70">{deliveryBody}</p>
          <Link
            to="/offers"
            className="group mt-6 inline-flex items-center gap-2 text-sm font-medium text-cyan"
          >
            See how engagements are scoped
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>

    <section className="bg-background py-24 md:py-32">
      <div className="container-wide">
        <p className="eyebrow text-cyan">Proof</p>
        <h2 className="display-serif mt-6 max-w-3xl text-4xl text-navy-ink text-balance md:text-5xl">{proofHeading}</h2>
        {proofIntro && (
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground">{proofIntro}</p>
        )}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.project} delay={i * 120}>
              <Link
                to={c.href}
                className="group flex h-full flex-col rounded-sm border border-border bg-card p-10 shadow-card transition-all hover:border-cyan hover:shadow-elev"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="display-serif block text-5xl text-cyan">{c.stat}</span>
                    <p className="eyebrow mt-2 text-navy-deep">{c.label}</p>
                  </div>
                  <img src={c.icon} alt="" loading="lazy" className="h-16 w-16 flex-shrink-0 object-contain" />
                </div>
                <h3 className="mt-8 text-xl font-semibold tracking-tight text-navy-ink">{c.project}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
                <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-navy-deep group-hover:text-cyan">
                  Read the case study
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-secondary py-24 md:py-32">
      <div className="container-wide">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="eyebrow text-cyan">Productized engagements</p>
            <h2 className="display-serif mt-6 text-4xl text-navy-ink text-balance md:text-5xl">{offersHeading}</h2>
          </div>
          <Link
            to="/offers"
            className="group inline-flex items-center gap-2 text-sm font-medium text-navy-deep hover:text-cyan"
          >
            View all offers
            <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {offers.map((o, i) => (
            <Reveal key={o.id} delay={i * 120}>
              <Link
                to={`/offers#${o.id}`}
                className="group flex h-full flex-col rounded-sm border border-border bg-card p-10 shadow-card transition-all hover:border-cyan hover:shadow-elev"
              >
                <div className="flex items-start justify-between gap-4">
                  <img src={o.icon} alt="" loading="lazy" className="h-16 w-16 object-contain" />
                  <span className="eyebrow text-muted-foreground">{o.number}</span>
                </div>
                <p className="eyebrow mt-8 text-cyan">{o.tag}</p>
                <p className="mt-2 text-lg font-medium text-navy-ink">{o.name}</p>
                <div className="mt-3 flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  {o.price && <span className="display-serif text-3xl text-navy-ink">{o.price}</span>}
                  <span className="text-xs text-muted-foreground">{o.detail}</span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{o.summary}</p>
                <span className="mt-auto inline-flex items-center gap-2 pt-8 text-sm font-medium text-navy-deep group-hover:text-cyan">
                  See details <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>

    <ConsultationForm />
  </ServicePageShell>
);

export default PillarPage;
