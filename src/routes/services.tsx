import { createFileRoute } from "@tanstack/react-router";


export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — TSI Adjusters" },
      { name: "description", content: "Comprehensive claims handling: appraisals, residential, commercial, large loss, litigation, flood, and 24/7 emergency adjustment teams." },
      { property: "og:title", content: "Services — TSI Adjusters" },
      { property: "og:description", content: "Comprehensive claims handling nationwide." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Services,
});

const services = [
  "Daily Claims (All Perils)", "CAT Claims", "Flood (NFIP & Private)", "TPA Services",
  "Insurance Staffing", "Commercial / Large Loss", "General Liability", "Re-inspections",
  "Appraisals", "Bodily Injury", "Business Interruption", "Captives",
  "Mediation", "Auto / Heavy Equipment", "Litigation", "Contents",
];

const mid = Math.ceil(services.length / 2);
const leftServices = services.slice(0, mid);
const rightServices = services.slice(mid);

function Services() {
  return (
    <>
      {/* HEADER */}
      <section>
        <div className="container-tsi pt-10 pb-6 md:pt-12 md:pb-8">
          <h1 className="max-w-3xl text-3xl font-bold leading-tight text-navy sm:text-4xl md:text-5xl">
            Comprehensive claims handling, every step of the way.
          </h1>
          <p className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed">
            We offer a comprehensive range of customized claims handling services to meet all your needs. See below for a list of the services we provide.
          </p>
        </div>
      </section>

      {/* SERVICE GRID */}
      <section>
        <div className="container-tsi py-8 md:py-12">
          <div className="rounded-2xl bg-navy p-4 text-navy-foreground sm:p-6 md:p-10">
            <div className="max-w-2xl mb-6">
              <span className="eyebrow">Full capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-foreground">Our services</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 max-w-3xl">
              {services.map((s) => (
                <div key={s} className="flex min-w-0 items-center gap-3">
                  <span className="h-2 w-2 shrink-0 rounded-full bg-gold" aria-hidden="true" />
                  <span className="min-w-0 text-navy-foreground/95 font-medium">{s}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>



      {/* QUICK RESULTS */}
      <section>
        <div className="container-tsi py-12 md:py-16">
          <span className="eyebrow">Quick and accurate</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy max-w-3xl">
            Successful claims handling is measured in timeliness and accuracy.
          </h2>
          <p className="mt-4 text-base text-muted-foreground leading-relaxed max-w-3xl">
            We ensure strict adherence to timelines while maintaining exceptional accuracy on every claim. This commitment has earned us top ratings with our clients, regardless of need, you can count on us.
          </p>
        </div>
      </section>

    </>
  );
}
