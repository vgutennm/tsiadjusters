import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Users } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — TSI Adjusters" },
      { name: "description", content: "Reach the TSI Adjusters team 24/7 for urgent claims response. Call (813) 839-0074 or email inquiries@tsiadjusters.com." },
      { property: "og:title", content: "Contact — TSI Adjusters" },
      { property: "og:description", content: "Always in reach. 24/7 urgent response team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      {/* SEND US A MESSAGE */}
      <section className="container-tsi pt-10 pb-6">
        <div className="max-w-3xl mx-auto text-center">
          <span className="eyebrow">Send us a message</span>
          <h2 className="mt-3 text-4xl md:text-5xl lg:text-6xl font-bold">We make the claims process easier.</h2>
        </div>
        <div className="mt-8 max-w-2xl mx-auto rounded-2xl bg-card border border-border p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <a href="mailto:inquiries@tsiadjusters.com" className="flex items-start gap-3 group">
              <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-semibold text-navy">General inquiries</span>
                <span className="text-sm text-muted-foreground">inquiries@tsiadjusters.com</span>
              </div>
            </a>
            <a href="mailto:assignments@tsiadjusters.com" className="flex items-start gap-3 group">
              <Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-semibold text-navy">Claims inquiries</span>
                <span className="text-sm text-muted-foreground">assignments@tsiadjusters.com</span>
              </div>
            </a>
            <a href="mailto:hr@tsiadjusters.com?subject=Interested in joining the TSI roster" className="flex items-start gap-3 group">
              <Users className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-semibold text-navy">Join our roster</span>
                <span className="text-sm text-muted-foreground">hr@tsiadjusters.com</span>
              </div>
            </a>
            <a href="tel:8138390074" className="flex items-start gap-3 group">
              <Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" />
              <div>
                <span className="block text-sm font-semibold text-navy">Urgent needs</span>
                <span className="text-sm text-muted-foreground">(813) 839-0074</span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* OFFICE + MAILING ADDRESS */}
      <section className="container-tsi pb-10">
        <div className="max-w-2xl mx-auto grid sm:grid-cols-2 gap-3 text-center">
          <div className="rounded-xl p-4 bg-card border border-border">
            <div className="flex items-center justify-center gap-2 text-gold">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.2em]">Office</span>
            </div>
            <div className="mt-2 font-display text-base font-bold text-navy leading-snug">
              10675 66th St<br />
              Pinellas Park, FL 33782
            </div>
            <p className="mt-1 text-[11px] text-muted-foreground">Visit our Tampa Bay area office.</p>
          </div>

          <div className="rounded-xl p-4 bg-card border border-border">
            <div className="flex items-center justify-center gap-2 text-gold">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.2em]">Mailing address</span>
            </div>
            <div className="mt-2 font-display text-base font-bold text-navy leading-snug">
              P.O. Box 1066<br />
              Pinellas Park, FL 33780<br />
              United States
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 text-gold">
              <MapPin className="w-3.5 h-3.5" />
              <span className="text-[10px] uppercase tracking-[0.2em]">Office location map</span>
            </div>
            <p className="mt-1 text-sm font-display font-bold text-navy">
              TSI Adjusters Inc, Pinellas Park, FL
            </p>
          </div>
          <div className="mt-3 overflow-hidden rounded-xl border border-border bg-card">
            <iframe
              title="Map of the TSI Adjusters office in Pinellas Park, FL"
              src="https://maps.google.com/maps?q=TSI%20Adjusters%20Inc,%2010675%2066th%20St,%20Pinellas%20Park,%20FL%2033782&t=m&z=16&output=embed&iwloc=near"
              className="w-full h-72 md:h-80 block"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          <p className="mt-3 text-center text-sm">
            <a
              href="https://www.google.com/maps/place/TSI+Adjusters+Inc/@27.8689403,-82.728539,17z/data=!3m1!4b1!4m6!3m5!1s0x88c2c3270f3b2f2d:0xc0a5c4d29074f767!8m2!3d27.8689403!4d-82.728539!16s%2Fg%2F1wk6_k99"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:underline font-medium"
            >
              View TSI Adjusters Inc on Google Maps →
            </a>
          </p>
        </div>
      </section>
    </>
  );
}

