import { createFileRoute } from "@tanstack/react-router";
import { PolicyEmbed } from "@/components/site/PolicyEmbed";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | TSI Adjusters" },
      { name: "description", content: "How TSI Adjusters collects, uses, and protects your information." },
      { property: "og:title", content: "Privacy Policy | TSI Adjusters" },
      { property: "og:description", content: "How TSI Adjusters collects, uses, and protects your information." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <PolicyEmbed id="WVZoRlZFTmhSMDFaU0dWNVQwRTlQUT09" title="Privacy Policy" />,
});
