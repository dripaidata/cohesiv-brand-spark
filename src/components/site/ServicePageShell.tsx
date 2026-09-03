import { ReactNode } from "react";
import Navbar from "@/components/site/Navbar";
import Footer from "@/components/site/Footer";
import Seo from "@/components/site/Seo";

interface ServicePageShellProps {
  eyebrow: string;
  title: ReactNode;
  intro: string;
  seoTitle: string;
  seoDescription: string;
  path: string;
  children?: ReactNode;
}

const ServicePageShell = ({
  eyebrow,
  title,
  intro,
  seoTitle,
  seoDescription,
  path,
  children,
}: ServicePageShellProps) => (
  <div className="min-h-screen bg-background font-sans">
    <Seo title={seoTitle} description={seoDescription} path={path} />
    <Navbar />
    <main>
      <section className="border-b border-border bg-navy-ink py-28 text-primary-foreground md:py-40">
        <div className="container-wide grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <p className="eyebrow text-cyan">{eyebrow}</p>
            <h1 className="display-serif mt-6 text-5xl text-balance md:text-7xl lg:text-8xl">{title}</h1>
          </div>
          <p className="md:col-span-4 self-end text-base leading-relaxed text-primary-foreground/70">{intro}</p>
        </div>
      </section>
      {children}
    </main>
    <Footer />
  </div>
);

export default ServicePageShell;
