import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/business/corporate-advisory")({
  head: (ctx) => pageHeadFor(ctx, 
    "Corporate Wellbeing Advisory | GULFWELLBEING",
    "Discreet corporate wellbeing advisory for leadership groups, senior teams and organisations navigating change, pressure and people responsibility."
  ),
  component: Page,
});

function Page() {
  return <SiteShell>
    <article className="mx-auto max-w-4xl px-6 py-24 lg:px-12">
      <p className="eyebrow text-gold">BUSINESS WELLBEING</p>
      <h1 className="mt-6 font-serif text-6xl">Corporate Wellbeing Advisory</h1>
      <p className="mt-7 text-lg leading-8 text-muted-foreground">A discreet external perspective on the human side of leadership, pressure and organisational change.</p>
      <div className="mt-14 space-y-8 text-base leading-7 text-muted-foreground">
        <p>Organisations can benefit from a private, considered perspective when leadership teams are navigating sustained pressure, growth, restructuring or demanding periods of change.</p>
        <h2 className="font-serif text-4xl text-foreground">Tailored to the organisation</h2>
        <p>The focus can be shaped around a leadership group, senior team or specific organisational period rather than a generic wellbeing package.</p>
        <h2 className="font-serif text-4xl text-foreground">Human wellbeing at leadership level</h2>
        <p>The work considers the people carrying responsibility: communication, capacity, boundaries, decision-making and the human realities behind organisational performance.</p>
      </div>
      <div className="mt-14 flex flex-wrap gap-4">
        <Link to="/book" className="button-primary">Make a Private Enquiry <ArrowRight className="size-4"/></Link>
        <Link to="/business" className="button-on-light">Explore Business Wellbeing</Link>
      </div>
    </article>
  </SiteShell>;
}