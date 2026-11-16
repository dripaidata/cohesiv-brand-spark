import { ArrowUpRight, Linkedin } from "lucide-react";
import type { Partner } from "@/content/partners";

const initialsOf = (name: string) =>
  name
    .split(" ")
    .filter(Boolean)
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

export const PartnerCard = ({ partner }: { partner: Partner }) => {
  const initials = initialsOf(partner.name);

  return (
    <article
      id={partner.slug}
      className="flex h-full scroll-mt-28 flex-col rounded-sm border border-border bg-card p-8 transition-colors hover:border-cyan md:p-10"
    >
      <div className="flex items-center gap-5">
        {partner.photo ? (
          <img
            src={partner.photo}
            alt={partner.name}
            loading="lazy"
            className="size-16 flex-shrink-0 rounded-full object-cover"
          />
        ) : (
          <div className="flex size-16 flex-shrink-0 items-center justify-center rounded-full bg-navy-ink font-mono text-sm text-cyan">
            {initials}
          </div>
        )}
        <div>
          <h3 className="display-serif text-3xl text-navy-ink">{partner.name}</h3>
          <p className="mt-1 text-sm text-navy-deep">{partner.role}</p>
        </div>
      </div>

      <p className="mt-6 font-mono text-xs uppercase tracking-widest text-cyan">
        Referral partner &middot; {partner.specialty}
        {partner.location ? (
          <span className="text-muted-foreground"> &middot; {partner.location}</span>
        ) : null}
      </p>

      <p className="mb-8 mt-4 text-sm leading-relaxed text-muted-foreground">{partner.blurb}</p>

      <div className="mt-auto flex items-center gap-6 border-t border-border pt-6">
        {partner.website ? (
          <a
            href={partner.website.url}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-deep transition-colors hover:text-cyan"
          >
            {partner.website.label}
            <ArrowUpRight className="size-4" />
          </a>
        ) : null}
        {partner.linkedin ? (
          <a
            href={partner.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-navy-deep transition-colors hover:text-cyan"
          >
            LinkedIn
            <Linkedin className="size-4" />
          </a>
        ) : null}
      </div>
    </article>
  );
};

export const PartnerGrid = ({ partners }: { partners: Partner[] }) => (
  <div className="grid gap-6 md:grid-cols-2">
    {partners.map((partner) => (
      <PartnerCard key={partner.slug} partner={partner} />
    ))}
  </div>
);
