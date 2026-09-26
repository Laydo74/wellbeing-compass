import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/business/founder-wellbeing")({
  head: (ctx) => pageHeadFor(ctx, 
    "Founder Wellbeing Advisory | GULFWELLBEING",
    "Private founder wellbeing advisory for entrepreneurs carrying business responsibility, uncertainty, decision-making and personal pressure."
  ),
  component: Page,
});

function Page() {
  return <SiteShell>
    <article className="mx-auto max-w-4xl px-6 py-24 lg:px-12">
      <p className="eyebrow text-gold">BUSINESS WELLBEING</p>
      <h1 className="mt-6 font-serif text-6xl">Founder Wellbeing</h1>
      <p className="mt-7 text-lg leading-8 text-muted-foreground">A private space for the person carrying the company, the decisions and the uncertainty behind the business.</p>
      <div className="mt-14 space-y-8 text-base leading-7 text-muted-foreground">
        <p>Founders can spend years being the person everyone turns to. That responsibility can make it difficult to step back and notice the personal cost of constant decision-making.</p>
        <h2 className="font-serif text-4xl text-foreground">Beyond the business role</h2>
        <p>Private advisory creates room to consider boundaries, pressure, identity, relationships and the choices that become harder to see when every day is shaped by the company.</p>
        <h2 className="font-serif text-4xl text-foreground">A confidential founder space</h2>
        <p>The work is shaped around the founder's circumstances rather than a fixed corporate programme, with attention to sustainable capacity and the human side of entrepreneurship.</p>
      </div>
      <div className="mt-14 flex flex-wrap gap-4">
        <Link to="/book" className="button-primary">Request a Private Session <ArrowRight className="size-4"/></Link>
        <Link to="/business" className="button-on-light">Explore Business Wellbeing</Link>
      </div>
    </article>
  </SiteShell>;
}