// Single source of truth for per-route head metadata.
// Consumed at runtime by page components (via <Seo />) and at build time by
// scripts/generate-sitemap.ts and scripts/prerender-meta.ts.

export interface RouteSeo {
  path: string;
  title: string;
  description: string;
  /** Omitted from sitemap and prerender when true (legal pages). */
  noindex?: boolean;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const SITE_URL = "https://dripaidata.com";

export const ROUTE_SEO = {
  "/": {
    path: "/",
    title: "Drip AI & Data - Decision Intelligence",
    description:
      "Enterprise-grade data and AI leadership for mid-market companies in financial services, healthcare, and cybersecurity - at a fraction of in-house cost.",
    changefreq: "weekly",
    priority: "1.0",
  },
  "/work": {
    path: "/work",
    title: "Our Work - Drip AI & Data",
    description:
      "Selected client engagements across financial services, insurance, healthcare, and cybersecurity. Verified outcomes from enterprise data and AI leadership.",
    changefreq: "monthly",
    priority: "0.8",
  },
  "/offers": {
    path: "/offers",
    title: "Productized AI & Data Engagements | Drip AI & Data",
    description:
      "Four engagements with published pricing and scope: an AI enablement workshop, a custom prospecting agent, a decision intelligence platform, and a monthly AI & product development retainer.",
    changefreq: "monthly",
    priority: "0.9",
  },
  "/about": {
    path: "/about",
    title: "About Danny Ellowitz - Drip AI & Data",
    description:
      "Boutique consultancy founded by Danny Ellowitz on eleven years of leading data, analytics, and AI inside Fidelity, Manulife, Rocket Software, and Kaspersky.",
    changefreq: "monthly",
    priority: "0.7",
  },
  "/data-analytics": {
    path: "/data-analytics",
    title: "Data & Analytics Consulting for Mid-Market | Drip AI & Data",
    description:
      "Warehouse architecture, resilient pipelines, a governed semantic layer, and live dashboards so one metric means one thing across your company.",
    changefreq: "monthly",
    priority: "0.9",
  },
  "/ai-implementation": {
    path: "/ai-implementation",
    title: "AI Implementation for Mid-Market Companies | Drip AI & Data",
    description:
      "Use case selection with real ROI math, agents that research and draft, LLM analysts on your own data, and deployment into the tools your team already uses.",
    changefreq: "monthly",
    priority: "0.9",
  },
  "/product-development": {
    path: "/product-development",
    title: "Product Development for Mid-Market Companies | Drip AI & Data",
    description:
      "Full-stack applications in React, Node, and PostgreSQL, with multi-tenant architecture, integrations, autonomous pipelines, and handover documentation.",
    changefreq: "monthly",
    priority: "0.9",
  },
  "/fractional-cto": {
    path: "/fractional-cto",
    title: "Fractional CTO for Mid-Market Companies | Drip AI & Data",
    description:
      "Senior technical leadership on retainer: strategy, architecture, AI, data, product direction, and team hiring without the six-month search.",
    changefreq: "monthly",
    priority: "0.9",
  },
  "/work/global-martech-transformation": {
    path: "/work/global-martech-transformation",
    title: "Global MarTech Transformation - Drip AI & Data",
    description:
      "Nine-market analytics, tagging, and personalization rebuild for a Fortune 500 insurer. Quote form conversion lifted +293%.",
    changefreq: "yearly",
    priority: "0.6",
  },
  "/work/real-time-content-personalization": {
    path: "/work/real-time-content-personalization",
    title: "Real-Time Content Personalization - Drip AI & Data",
    description:
      "First-party, real-time personalization framework for financial services - CTA engagement +650% with experimentation built in.",
    changefreq: "yearly",
    priority: "0.6",
  },
  "/work/prospecting-agent": {
    path: "/work/prospecting-agent",
    title: "The Prospecting Agent · Drip AI & Data",
    description:
      "Custom AI prospecting agents that research companies, verify LinkedIn profiles, and draft outreach in your voice. Built around each client's ICP.",
    changefreq: "yearly",
    priority: "0.6",
  },
  "/work/real-estate-data-and-ai-platform": {
    path: "/work/real-estate-data-and-ai-platform",
    title: "Case Study: Real Estate Data & AI Platform | Drip AI & Data",
    description:
      "How a family-run real estate investor replaced spreadsheets and a breaking dashboard tool with a custom data foundation, analytics, and LLM analysts, saving weeks of manual work every month and quarter.",
    changefreq: "yearly",
    priority: "0.6",
  },
  "/labs/dynasty-war-room": {
    path: "/labs/dynasty-war-room",
    title: "Dynasty War Room - Drip Labs",
    description:
      "Multi-league fantasy football platform modeling NFL salary caps, contract types, and an 8-phase state machine across isolated league databases.",
    changefreq: "monthly",
    priority: "0.6",
  },
  "/labs/congressional-trades-fund": {
    path: "/labs/congressional-trades-fund",
    title: "Congressional Trades Fund - Drip Labs",
    description:
      "Autonomous pipeline ingesting STOCK Act disclosures, scoring signals with ML, and executing trades via brokerage API with human approval gates.",
    changefreq: "monthly",
    priority: "0.6",
  },
  "/privacy": {
    path: "/privacy",
    title: "Privacy Policy | Drip AI & Data",
    description:
      "How Drip AI & Data collects, uses, and protects information across our website, products, and client communications.",
    noindex: true,
  },
  "/terms": {
    path: "/terms",
    title: "Terms of Service | Drip AI & Data",
    description:
      "The terms that govern use of the Drip AI & Data website, products, and services.",
    noindex: true,
  },
  "/data-deletion": {
    path: "/data-deletion",
    title: "Data Deletion | Drip AI & Data",
    description:
      "How to request deletion of personal data held by Drip AI & Data, and what happens after a request.",
    noindex: true,
  },
} satisfies Record<string, RouteSeo>;

export type RoutePath = keyof typeof ROUTE_SEO;

/** Indexable routes, used for the sitemap. */
export const INDEXABLE_ROUTES: RouteSeo[] = Object.values(ROUTE_SEO).filter((r) => !("noindex" in r && r.noindex));

/** Every route that gets a prerendered static HTML head, including noindex pages. */
export const ALL_ROUTES: RouteSeo[] = Object.values(ROUTE_SEO);
