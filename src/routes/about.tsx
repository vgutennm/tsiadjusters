import { createFileRoute } from "@tanstack/react-router";
import teamJo from "@/assets/team-jo.jpg";
import teamHeather from "@/assets/team-heather.jpg";
import teamCheryl from "@/assets/team-cheryl.jpg";
import teamNicole from "@/assets/nicole-farris-v2.png";
import teamKendall from "@/assets/kendall-farris-v2.png";
import teamKaitlyn from "@/assets/kaitlyn-headshot.jpg";
import teamChristina from "@/assets/christina-tatum-v2.png";
import teamEmilie from "@/assets/emilie-wilbanks-light.png";
import teamPlaceholder from "@/assets/team-placeholder.jpg";
import collage1 from "@/assets/collage/IMG_9772.jpg";
import collage2 from "@/assets/collage/IMG_9773.jpg";
import collage3 from "@/assets/collage/IMG_9774.jpg";
import collage4 from "@/assets/collage/IMG_9775.jpg";
import collage5 from "@/assets/collage/IMG_9776.jpg";
import collage6 from "@/assets/collage/IMG_9778.jpg";
import collage7 from "@/assets/collage/IMG_9779.jpg";
import collage8 from "@/assets/collage/IMG_9780.jpg";
import collage9 from "@/assets/collage/IMG_9781.jpg";
import collage10 from "@/assets/collage/IMG_9783.jpg";
import collage11 from "@/assets/collage/IMG_9782.jpg";

import collage13 from "@/assets/collage/IMG_9785.jpg";
import collage14 from "@/assets/collage/IMG_9786.jpg";
import collage15 from "@/assets/team-collage-15.png";
import collage16 from "@/assets/collage/image-47.png";
import collage17 from "@/assets/collage/image-50.png";
import centerpiece from "@/assets/collage/image-53.png";

const surroundingImages = [collage1, collage2, collage3, collage4, collage5, collage6, collage7, collage8, collage9, collage10, collage11, collage13, collage14, collage15, collage16, collage17];




export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — TSI Adjusters" },
      { name: "description", content: "How TSI Adjusters began in 2006, what Trust, Service, and Integrity mean to us, and the family behind the firm." },
      { property: "og:title", content: "About — TSI Adjusters" },
      { property: "og:description", content: "Our beginning, what we stand for, and the leadership behind TSI Adjusters." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

const team = [
  {
    name: "Jo Farris",
    role: "President & CEO",
    image: teamJo,
  },
  {
    name: "Heather Farris",
    role: "Vice President",
    image: teamHeather,
  },
  {
    name: "Kaitlyn Aurigemma",
    role: "Finance Manager",
    image: teamKaitlyn,
  },
  {
    name: "Cheryl Baker",
    role: "Director of Marketing & Operations",
    image: teamCheryl,
  },
  {
    name: "Nicole Farris",
    role: "Director of Client Relations & Business Development",
    image: teamNicole,
  },
  {
    name: "Emilie Wilbanks",
    role: "Director of Claims",
    image: teamEmilie,
  },
  {
    name: "Kendall Farris",
    role: "Human Resources",
    image: teamKendall,
    position: "center 22%",
  },
  {
    name: "Christina Tatum",
    role: "Director of Quality Control",
    image: teamChristina,
    position: "center 22%",
  },
];

function About() {
  return (
    <>
      {/* OUR STORY */}
      <section>
        <div className="container-tsi pt-10 pb-6 md:pt-12 md:pb-8">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-start">
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="mt-3 text-3xl md:text-4xl font-bold text-navy">A firm built on Trust, Service, and Integrity.</h2>
            </div>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed md:pt-8">
              Since our inception, TSI Adjusters has been dedicated to providing superior claims handling services. Our culture is built on strong relationships with our clients, adjusters, and team members, and through our experience and customized approach to each client’s needs, TSI continues to set a high standard within the claims services industry.
            </p>
          </div>
        </div>
      </section>

      {/* ABOUT TSI */}
      <section>
        <div className="container-tsi py-10 md:py-12">
          <span className="eyebrow text-gold">About TSI</span>
          <h2 className="mt-3 max-w-3xl text-3xl md:text-4xl font-bold text-navy">
            Founded in 2006.
          </h2>
          <p className="mt-6 max-w-3xl text-lg text-muted-foreground leading-relaxed">
            Headquartered in the Tampa Bay area, we have grown into a trusted nationwide independent adjusting firm while maintaining the values that have guided us from the beginning. For over two decades we've delivered ethical, accurate, and reliable claims services to clients across all 50 states.
          </p>
        </div>
      </section>

      {/* MEET THE TEAM */}
      <section>
        <div className="container-tsi py-10 md:py-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our Executive Team
            </h2>
          </div>

          <div className="mt-4 grid md:grid-cols-2 gap-4 max-w-4xl">
            {team.map((m) => (
              <article key={m.name} className="rounded-xl bg-card border border-border overflow-hidden">
                <div className="grid grid-cols-[4.5rem_minmax(0,1fr)] gap-3 p-3 sm:grid-cols-[5rem_minmax(0,1fr)] sm:p-4">
                  <div className="h-[4.5rem] w-[4.5rem] shrink-0 overflow-hidden rounded-lg bg-secondary sm:h-20 sm:w-20">
                    <img
                      src={m.image}
                      alt={`${m.name}, ${m.role}`}
                      className="w-full h-full object-cover object-top"
                      style={(m as { position?: string }).position ? { objectPosition: (m as { position?: string }).position } : undefined}
                      loading="lazy"
                      width={448}
                      height={576}
                    />
                  </div>
                  <div className="min-w-0 flex flex-col justify-center">
                    <h3 className="font-display text-lg md:text-xl font-bold leading-tight text-navy">{m.name}</h3>
                    <div className="mt-0.5 text-sm font-medium text-foreground/80">{m.role}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Your Claims Team collage */}
          <div className="mt-8 max-w-5xl">
            <div className="rounded-2xl border border-border bg-card/50 p-3 sm:p-6 md:p-8">
              <span className="eyebrow">Your Claims Team</span>
              <h3 className="mt-3 font-display text-2xl md:text-3xl font-bold">The people behind every claim</h3>
              <div className="mt-5 grid grid-cols-2 gap-2 [grid-auto-flow:dense] sm:gap-3 md:grid-cols-4">
                {/* Centerpiece — center of the collage, larger than the rest */}
                <div className="col-span-2 row-span-2 md:col-start-2 md:row-start-2 rounded-2xl overflow-hidden bg-navy p-2 shadow-xl">
                  <div className="h-full w-full rounded-xl overflow-hidden border-2 border-gold">
                    <img
                      src={centerpiece}
                      alt="TSI Adjusters leadership team"
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {surroundingImages.map((img, i) => {
                  const isTall = img === collage16 || img === collage17;
                  return (
                    <div
                      key={`collage-${i}`}
                      className="aspect-square rounded-lg overflow-hidden bg-secondary"
                    >
                      <img
                        src={img.url}
                        alt="TSI Adjusters team"
                        className={`h-full w-full object-cover ${isTall ? "object-center" : "object-top"}`}
                        loading="lazy"
                      />
                    </div>
                  );
                })}



              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
