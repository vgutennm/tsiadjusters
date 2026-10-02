import { useEffect, useState } from "react";

// Termageddon's embed script only runs on window "load", which never fires on
// in-app navigation — so we fetch the policy HTML directly instead.
export function PolicyEmbed({ id, title }: { id: string; title: string }) {
  const [html, setHtml] = useState<string | null>(null);
  const url = `https://policies.termageddon.com/api/policy/${id}`;

  useEffect(() => {
    let cancelled = false;
    setHtml(null);
    fetch(url)
      .then((r) => (r.ok ? r.text() : Promise.reject(r.status)))
      .then((t) => !cancelled && setHtml(t))
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [url]);

  return (
    <section className="container-tsi pt-32 sm:pt-40 pb-16">
      <h1 className="text-3xl sm:text-4xl font-bold text-navy mb-6">{title}</h1>
      {html ? (
        <div dangerouslySetInnerHTML={{ __html: html }} />
      ) : (
        <div id={id} className="policy_embed_div" aria-live="polite" aria-busy="true">
          Please wait while the policy is loaded. If it does not load, please{" "}
          <a rel="nofollow" className="text-gold underline" href={url} target="_blank">
            click here to view the policy
          </a>
          .
        </div>
      )}
    </section>
  );
}
