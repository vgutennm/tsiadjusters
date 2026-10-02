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
        <div className="container-tsi flex h-10 items-center justify-center gap-3 sm:justify-end sm:gap-4">
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
        <div className="container-tsi grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-2 md:flex md:h-28 md:justify-between lg:h-32">
          <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3" aria-label="TSI Adjusters home">
            <img src={tsiMark} alt="" className="h-11 w-11 shrink-0 object-contain brightness-0 invert sm:h-14 sm:w-14 md:h-16 md:w-16" />
            <div className="min-w-0 text-center leading-none">
              <div className="truncate text-base font-bold text-navy-foreground sm:text-xl md:text-2xl lg:text-3xl">TSI ADJUSTERS</div>
              <div className="mt-1 truncate text-[8px] font-semibold uppercase text-gold sm:text-[10px] md:text-xs">Trust Service Integrity</div>
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
            className="shrink-0 p-2 text-navy-foreground md:hidden"
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
