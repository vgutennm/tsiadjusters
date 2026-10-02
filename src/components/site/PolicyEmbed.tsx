import { useEffect } from "react";

export function PolicyEmbed({ id, title }: { id: string; title: string }) {
  useEffect(() => {
    const s = document.createElement("script");
    s.src = `https://policies.termageddon.com/api/embed/${id}.js`;
    s.async = true;
    document.body.appendChild(s);
    return () => {
      s.remove();
    };
  }, [id]);

  return (
    <section className="container-tsi pt-32 sm:pt-40 pb-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-6">{title}</h1>
      <div id={id} className="policy_embed_div" aria-live="polite" aria-busy="true">
        Please wait while the policy is loaded. If it does not load, please{" "}
        <a rel="nofollow" className="text-gold underline" href={`https://policies.termageddon.com/api/policy/${id}`} target="_blank">
          click here to view the policy
        </a>
        .
      </div>
    </section>
  );
}
