import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "@/assets/logo-full.png";
import { Button } from "@/components/ui/button";

const services = [
  { href: "/data-analytics", label: "Data & Analytics" },
  { href: "/ai-implementation", label: "AI Implementation" },
  { href: "/product-development", label: "Product Development" },
];

const serviceFooterLink = { href: "/fractional-cto", label: "Fractional CTO" };

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const servicesRef = useRef<HTMLLIElement>(null);

  const links = [
    { href: "/", label: "Home" },
    { href: "/offers", label: "Offers" },
    { href: "/work", label: "Work" },
    { href: "/about", label: "About" },
  ];

  const allServiceHrefs = [...services.map((s) => s.href), serviceFooterLink.href];
  const servicesActive = allServiceHrefs.includes(pathname);

  useEffect(() => {
    setServicesOpen(false);
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  const linkClass = (active: boolean) =>
    `text-sm font-medium tracking-tight transition-colors hover:text-cyan ${
      active ? "text-navy-deep" : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Drip AI & Data home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Drip AI & Data" className="h-12 w-auto" />
        </Link>
        <ul className="hidden items-center gap-10 md:flex">
          <li>
            <Link to="/" className={linkClass(pathname === "/")}>
              Home
            </Link>
          </li>
          <li
            ref={servicesRef}
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={servicesOpen}
              onClick={() => setServicesOpen((v) => !v)}
              className={`${linkClass(servicesActive)} inline-flex items-center gap-1.5`}
            >
              Services
              <ChevronDown className={`size-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
            </button>
            {servicesOpen && (
              <div className="absolute left-0 top-full w-64 pt-3">
                <ul className="overflow-hidden rounded-sm border border-border bg-background py-2 shadow-lg">
                  {services.map((s) => (
                    <li key={s.href}>
                      <Link
                        to={s.href}
                        className={`block px-4 py-2.5 text-sm font-medium tracking-tight transition-colors hover:bg-cyan-soft/30 hover:text-cyan ${
                          pathname === s.href ? "text-navy-deep" : "text-muted-foreground"
                        }`}
                      >
                        {s.label}
                      </Link>
                    </li>
                  ))}
                  <li aria-hidden className="my-2 border-t border-border" />
                  <li>
                    <Link
                      to={serviceFooterLink.href}
                      className={`block px-4 py-2.5 text-sm font-medium tracking-tight transition-colors hover:bg-cyan-soft/30 hover:text-cyan ${
                        pathname === serviceFooterLink.href ? "text-navy-deep" : "text-muted-foreground"
                      }`}
                    >
                      {serviceFooterLink.label}
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </li>
          {links.slice(1).map((l) => (
            <li key={l.href}>
              <Link to={l.href} className={linkClass(pathname === l.href)}>
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" size="lg" className="hidden md:inline-flex">
          <a href="#consultation">Book a consultation</a>
        </Button>
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-sm p-2 text-navy-ink hover:text-cyan md:hidden"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>
      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <div className="container-wide flex flex-col gap-1 py-4">
            <Link
              to="/"
              onClick={() => setOpen(false)}
              className={`rounded-sm px-2 py-3 text-base font-medium tracking-tight transition-colors hover:text-cyan ${
                pathname === "/" ? "text-navy-deep" : "text-muted-foreground"
              }`}
            >
              Home
            </Link>

            <p className="eyebrow px-2 pt-3 text-cyan">Services</p>
            {services.map((s) => (
              <Link
                key={s.href}
                to={s.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-2 py-3 text-base font-medium tracking-tight transition-colors hover:text-cyan ${
                  pathname === s.href ? "text-navy-deep" : "text-muted-foreground"
                }`}
              >
                {s.label}
              </Link>
            ))}
            <div className="mx-2 my-1 border-t border-border" />
            <Link
              to={serviceFooterLink.href}
              onClick={() => setOpen(false)}
              className={`rounded-sm px-2 py-3 text-base font-medium tracking-tight transition-colors hover:text-cyan ${
                pathname === serviceFooterLink.href ? "text-navy-deep" : "text-muted-foreground"
              }`}
            >
              {serviceFooterLink.label}
            </Link>
            <div className="mx-2 my-1 border-t border-border" />

            {links.slice(1).map((l) => (
              <Link
                key={l.href}
                to={l.href}
                onClick={() => setOpen(false)}
                className={`rounded-sm px-2 py-3 text-base font-medium tracking-tight transition-colors hover:text-cyan ${
                  pathname === l.href ? "text-navy-deep" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            ))}
            <Button asChild variant="hero" size="lg" className="mt-3 w-full">
              <a href="#consultation" onClick={() => setOpen(false)}>Book a consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
