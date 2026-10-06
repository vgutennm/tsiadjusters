import { createFileRoute } from "@tanstack/react-router";
import {
  Building2,
  CloudLightning,
  FileStack,
  FileSearch,
  FolderSearch,
  Handshake,
  HeartPulse,
  House,
  Package,
  Scale,
  Search,
  Shield,
  ShieldCheck,
  TrendingUp,
  Truck,
  Users,
  type LucideIcon,
} from "lucide-react";

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

type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

const services: Service[] = [
  {
    icon: House,
    title: "Daily Claims (All Perils)",
    description: "Field adjusting support for day-to-day property claims across a range of covered perils.",
  },
  {
    icon: CloudLightning,
    title: "CAT Claims",
    description: "Scalable adjusting support for catastrophe events and high-volume claims.",
  },
  {
    icon: FileSearch,
    title: "Flood (NFIP & Private)",
    description: "Adjusting support for flood claims under NFIP and private flood policies.",
  },
  {
    icon: FileStack,
    title: "TPA Services",
    description: "Third-party administration support to coordinate claims handling and reporting.",
  },
  {
    icon: Users,
    title: "Insurance Staffing",
    description: "Flexible staffing support to help insurance teams meet changing workload demands.",
  },
  {
    icon: Building2,
    title: "Commercial / Large Loss",
    description: "Detailed adjusting support for commercial property claims and complex large losses.",
  },
  {
    icon: Shield,
    title: "General Liability",
    description: "Claims investigation and adjusting support for third-party liability matters.",
  },
  {
    icon: Search,
    title: "Re-inspections",
    description: "Follow-up inspections to review damage findings, documentation, and claim accuracy.",
  },
  {
    icon: Scale,
    title: "Appraisals",
    description: "Appraisal support to help resolve disputes over the amount of a covered loss.",
  },
  {
    icon: HeartPulse,
    title: "Bodily Injury",
    description: "Claims investigation and evaluation support for bodily injury matters.",
  },
  {
    icon: TrendingUp,
    title: "Business Interruption",
    description: "Review and documentation support for business income losses following covered events.",
  },
  {
    icon: ShieldCheck,
    title: "Captives",
    description: "Claims handling support tailored to captive insurance programs.",
  },
  {
    icon: Handshake,
    title: "Mediation",
    description: "Mediation support to help parties work toward a resolution of claim disputes.",
  },
  {
    icon: Truck,
    title: "Auto / Heavy Equipment",
    description: "Damage assessment and adjusting support for vehicles and heavy equipment.",
  },
  {
    icon: FolderSearch,
    title: "Litigation",
    description: "Claims documentation and case support for matters involved in litigation.",
  },
  {
    icon: Package,
    title: "Contents",
    description: "Assessment and documentation of personal or business contents affected by a loss.",
  },
];

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
          <div className="rounded-2xl bg-navy p-4 sm:p-6 md:p-10">
            <div className="max-w-2xl mb-6 md:mb-10">
              <span className="eyebrow">Full capabilities</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy-foreground">Our services.</h2>
            </div>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map(({ icon: Icon, title, description }) => (
                <div
                  key={title}
                  className="flex min-w-0 flex-col rounded-2xl border border-navy-foreground/10 bg-navy-foreground/5 p-5 transition-colors hover:border-navy-foreground/25"
                >
                  <Icon className="h-8 w-8 text-gold" strokeWidth={1.5} aria-hidden="true" />
                  <h3 className="mt-4 text-lg font-bold leading-snug text-navy-foreground">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy-foreground/75">{description}</p>
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
