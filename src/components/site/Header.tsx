import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone, Linkedin, Facebook, Instagram } from "lucide-react";
import tsiMark from "@/assets/tsi-mark.png";

const socials = [
  { href: "https://www.linkedin.com/company/tsi-adjusters-inc/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://www.facebook.com/TSIADJUSTERS", label: "Facebook", Icon: Facebook },
  { href: "https://www.instagram.com/tsiadjusters/", label: "Instagram", Icon: Instagram },
];


const nav = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  return (
    <header className={isHome ? "absolute top-0 left-0 right-0 z-50" : "sticky top-0 z-50 bg-navy"}>
      {/* Top contact bar — visible on all screens */}
      <div className="bg-navy text-navy-foreground">
        <div className="container-tsi flex items-center justify-end gap-4 h-10">
          <a
            href="tel:8138390074"
            className="inline-flex items-center gap-1.5 text-xs font-medium"
          >
            <Phone className="w-3.5 h-3.5" />
            813-839-0074
          </a>
          <div className="flex items-center gap-2">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="w-7 h-7 inline-flex items-center justify-center rounded-full border border-navy-foreground/30 text-navy-foreground/80"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="bg-navy border-b border-navy-foreground/10">
        <div className="container-tsi flex items-center justify-between h-24 md:h-28 lg:h-32">
          <Link to="/" className="flex items-center gap-3" aria-label="TSI Adjusters home">
            <img src={tsiMark.url} alt="" className="w-14 h-14 md:w-16 md:h-16 shrink-0 object-contain brightness-0 invert" />
            <div className="leading-none text-center">
              <div className="text-xl md:text-2xl lg:text-3xl font-bold tracking-wide text-navy-foreground">TSI ADJUSTERS</div>
              <div className="mt-1 text-[10px] md:text-xs font-semibold uppercase tracking-[0.2em] text-gold">Trust Service Integrity</div>
            </div>
          </Link>


          <nav className="hidden md:flex items-center gap-6 lg:gap-10">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                className="text-sm font-medium text-navy-foreground/90 relative"
                activeProps={{ className: "text-gold" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
          </nav>


          <button
            className="md:hidden p-2 text-navy-foreground"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-navy-foreground/10 bg-navy/95 backdrop-blur-md">
            <div className="container-tsi py-4 flex flex-col gap-3">
              {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-base font-medium text-navy-foreground"
              >
                {n.label}
              </Link>
            ))}
          </div>
          </div>
        )}
      </div>
    </header>
  );
}
