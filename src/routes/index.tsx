import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import hero from "@/assets/hero-earth.jpg";
import { UsaCoverageMap } from "@/components/site/UsaCoverageMap";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "TSI Adjusters — Trust. Service. Integrity." },
      { name: "description", content: "Independent insurance adjuster firm delivering exceptional claims handling nationwide since 2006." },
      { property: "og:title", content: "TSI Adjusters — Trust. Service. Integrity." },
      { property: "og:description", content: "Independent insurance adjuster firm delivering exceptional claims handling nationwide since 2006." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});


function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative isolate overflow-hidden">
        <img
          src={hero}
          alt="Earth from space at night showing United States city lights"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.10 0.05 265 / 0.55), oklch(0.10 0.05 265 / 0.85))" }} />
        <div className="relative container-tsi pt-48 pb-16 text-navy-foreground sm:pt-52 sm:pb-20 md:pt-64 md:pb-28 lg:pt-72 lg:pb-36">
          <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] text-navy-foreground sm:text-5xl md:text-6xl lg:text-7xl">
            Boutique precision. <span className="text-gold italic">Enterprise capacity.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-base text-navy-foreground/85 leading-relaxed sm:mt-6 sm:text-lg">
            Full-service, independent, nationwide. Serving insurance carriers of all sizes with <span className="font-bold">T</span>rust, <span className="font-bold">S</span>ervice, and <span className="font-bold">I</span>ntegrity since 2006.
          </p>
          <div className="mt-8 flex flex-col items-stretch gap-3 min-[420px]:flex-row min-[420px]:items-center sm:mt-10 sm:gap-4">
            <Link to="/contact" className="btn-primary">
              Talk to TSI <ArrowRight className="w-4 h-4" />
            </Link>
            <a href="mailto:hr@tsiadjusters.com?subject=Interested%20in%20joining%20the%20TSI%20roster" className="btn-outline">Join Our Roster</a>
          </div>

          <div className="mt-10 grid max-w-xl grid-cols-3 gap-3 border-t border-navy-foreground/15 pt-7 sm:mt-14 sm:gap-8 sm:pt-10">
            {[
              ["20+", "YEARS"],
              ["95%+", "QA Score"],
              ["99%", "Customer Satisfaction"],
            ].map(([num, label]) => (
              <div key={label}>
                <div className="font-display text-3xl font-semibold text-gold sm:text-4xl">{num}</div>
                <div className="mt-1 text-xs leading-snug text-navy-foreground/70 sm:text-sm">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NATIONWIDE MAP */}
      <section className="bg-navy text-navy-foreground">
        <div className="container-tsi py-12 md:py-16 grid lg:grid-cols-2 gap-8 items-center">
          <div>
            <span className="eyebrow no-line text-gold block mb-4">Nationwide Coverage</span>
            <p className="text-base text-navy-foreground/90 leading-relaxed font-medium">
              We are proud that in all 50 states we can successfully service all your claims needs.
            </p>
            <p className="mt-3 text-sm text-navy-foreground/75 leading-relaxed">
              TSI Adjusters proudly provides claims services across all 50 states, giving our clients reliable support wherever losses occur. Our nationwide network allows us to respond quickly, manage claims efficiently, and deliver the consistent service our clients have come to expect.
            </p>
          </div>
          <div>
            <UsaCoverageMap />
          </div>
        </div>
      </section>

      {/* HOW WE WORK */}
      <section className="container-tsi pt-12 pb-6 md:pt-16 md:pb-8">
        <div className="max-w-2xl">
          <span className="eyebrow">How we work</span>
          <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">A streamlined process, built for our partners.</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            From first notice of loss to final delivery, fast, accurate, and always on time.
          </p>
        </div>
      </section>


      {/* WHAT TSI STANDS FOR */}






      {/* TECHNOLOGY */}
      <section>
        <div className="container-tsi pt-8 pb-10 md:pt-10 md:pb-12">
          <span className="eyebrow">Technology</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold">Investing in what's next.</h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed">
            TSI is actively developing proprietary advanced systems in partnership with leading developers. These tools are purpose-built to transform every stage of the claims process, from first notice of loss to final close.
          </p>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            Our carrier partners will benefit from greater accuracy, faster cycle times, and improved outcomes.
          </p>
          <p className="mt-3 text-base text-muted-foreground leading-relaxed">
            The result is meaningful: fewer reinspections, reduced cycle times, lowered total cost per claim.
          </p>
        </div>
      </section>

    </>
  );
}
