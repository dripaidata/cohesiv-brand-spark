import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-full.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Our Work" },
    { href: "/labs", label: "Drip Labs" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Drip AI & Data home" onClick={() => setOpen(false)}>
          <img src={logo} alt="Drip AI & Data" className="h-12 w-auto" />
        </Link>
        <ul className="hidden items-center gap-10 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                to={l.href}
                className={`text-sm font-medium tracking-tight transition-colors hover:text-cyan ${
                  pathname === l.href ? "text-navy-deep" : "text-muted-foreground"
                }`}
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button asChild variant="hero" size="lg" className="hidden md:inline-flex">
          <a href="/#consultation">Book a consultation</a>
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
            {links.map((l) => (
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
              <a href="/#consultation" onClick={() => setOpen(false)}>Book a consultation</a>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
