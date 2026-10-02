import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import tsiMark from "@/assets/tsi-mark.png";

export function Footer() {
  return (
    <footer className="bg-navy text-navy-foreground mt-6">
      <div className="container-tsi py-4 grid gap-3 md:grid-cols-5 items-center">
        <div className="md:col-span-2 flex min-w-0 items-center gap-2.5">
          <img src={tsiMark} alt="" className="w-7 h-7 shrink-0 object-contain brightness-0 invert" />
          <div className="min-w-0 text-lg font-bold text-navy-foreground">TSI ADJUSTERS</div>
        </div>

        <div>
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-1">Navigate</h4>
          <ul className="space-y-0.5 text-navy-foreground/80 text-xs">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[11px] uppercase tracking-[0.2em] text-gold mb-1">Contact</h4>
          <ul className="text-navy-foreground/80 text-xs space-y-0.5">
            <li className="flex items-center gap-1.5"><Phone className="w-3.5 h-3.5 text-gold shrink-0" /><a href="tel:8138390074">(813) 839-0074</a></li>
            <li className="flex items-center gap-1.5 min-w-0"><Mail className="w-3.5 h-3.5 text-gold shrink-0" /><a href="mailto:inquiries@tsiadjusters.com" className="break-words">inquiries@tsiadjusters.com</a></li>
            <li className="flex min-w-0 items-start gap-1.5"><MapPin className="mt-0.5 w-3.5 h-3.5 text-gold shrink-0" /><span className="min-w-0">P.O. Box 1066, Pinellas Park, FL 33780</span></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-navy-foreground/10">
        <div className="container-tsi py-2.5 text-[11px] text-navy-foreground/60 flex flex-wrap items-center justify-center sm:justify-between gap-2">
          <span>© {new Date().getFullYear()} TSI Adjusters. All rights reserved.</span>
          <span>Nationwide coverage · Licensed in all 50 states</span>
          <span className="flex gap-3">
            <Link to="/privacy-policy" className="hover:text-gold">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-gold">Terms of Service</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
