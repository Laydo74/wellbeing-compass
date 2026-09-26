import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/business/team-wellbeing")({
  head: (ctx) => pageHeadFor(ctx, 
    "Leadership & Team Wellbeing | GULFWELLBEING",
    "Private wellbeing advisory for leaders and teams focused on communication, expectations, pressure and the human side of leadership."
  ),
  component: Page,
});

function Page() {
  return <SiteShell>
    <article className="mx-auto max-w-4xl px-6 py-24 lg:px-12">
      <p className="eyebrow text-gold">BUSINESS WELLBEING</p>
      <h1 className="mt-6 font-serif text-6xl">Leadership & Team Wellbeing</h1>
      <p className="mt-7 text-lg leading-8 text-muted-foreground">Thoughtful wellbeing support for leaders responsible for people, communication and the human environment around them.</p>
      <div className="mt-14 space-y-8 text-base leading-7 text-muted-foreground">
        <p>Leadership affects more than performance. Expectations, communication, pressure and the way decisions are handled all shape the experience of the people around a leader.</p>
        <h2 className="font-serif text-4xl text-foreground">For leaders</h2>
        <p>Private advisory can help leaders reflect on difficult conversations, boundaries, team dynamics and the personal pressure that comes with being responsible for others.</p>
        <h2 className="font-serif text-4xl text-foreground">For organisations</h2>
        <p>Where appropriate, the work can be tailored to a leadership group or senior team during periods of growth, pressure or organisational change.</p>
      </div>
      <div className="mt-14 flex flex-wrap gap-4">
        <Link to="/book" className="button-primary">Request a Private Session <ArrowRight className="size-4"/></Link>
        <Link to="/business" className="button-on-light">Explore Business Wellbeing</Link>
      </div>
    </article>
  </SiteShell>;
}