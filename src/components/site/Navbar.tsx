import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-full.png";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const { pathname } = useLocation();
  const links = [
    { href: "/", label: "Home" },
    { href: "/work", label: "Our Work" },
    { href: "/labs", label: "Drip Labs" },
    { href: "/about", label: "About" },
  ];
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/85 backdrop-blur-md">
      <nav className="container-wide flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2" aria-label="Drip AI & Data home">
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
      </nav>
    </header>
  );
};

export default Navbar;
