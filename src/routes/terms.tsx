import { createFileRoute } from "@tanstack/react-router";
import { PolicyEmbed } from "@/components/site/PolicyEmbed";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | TSI Adjusters" },
      { name: "description", content: "The terms governing use of the TSI Adjusters website." },
      { property: "og:title", content: "Terms of Service | TSI Adjusters" },
      { property: "og:description", content: "The terms governing use of the TSI Adjusters website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <PolicyEmbed id="UWtNdk4weEROMmhoUVd4WVRYYzlQUT09" title="Terms of Service" />,
});
