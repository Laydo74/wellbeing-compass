import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";

const content = pageContent.business;

const subcategories = [
  ["Executive Wellbeing", "Private space for executives and senior professionals carrying sustained responsibility.", "/business/executive-wellbeing"],
  ["Founder Wellbeing", "Support for founders balancing the company, decisions, uncertainty and personal capacity.", "/business/founder-wellbeing"],
  ["Leadership Clarity", "A confidential setting for difficult decisions, boundaries and leadership conversations.", "/business/leadership-clarity"],
  ["Pressure & Burnout Prevention", "Considered support around sustained pressure, recovery, workload and boundaries.", "/business/burnout-prevention"],
  ["Leadership & Team Wellbeing", "Wellbeing support for leaders responsible for people, communication and team culture.", "/business/team-wellbeing"],
  ["Corporate Wellbeing Advisory", "A discreet external perspective for leadership groups and organisations navigating change.", "/business/corporate-advisory"],
] as const;

export const Route = createFileRoute("/business")({
  head: (ctx) => pageHeadFor(ctx, 
    "Business Wellbeing & Private Executive Advisory | GULFWELLBEING",
    "Private business wellbeing advisory for founders, executives, senior professionals and organisations navigating pressure, leadership, burnout prevention and the human side of performance."
  ),
  component: Page,
});

function Page() {
  return <SiteShell>
    <EditorialPage page="business" {...content} />
    <section className="bg-secondary px-6 py-20 lg:px-12 lg:py-28">
      <div className="mx-auto max-w-[1350px]">
        <p className="eyebrow text-gold">BUSINESS WELLBEING</p>
        <h2 className="mt-4 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">Choose the area closest to your situation.</h2>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {subcategories.map(([title, text, to], index) => (
            <Link key={to} to={to} className="group bg-background p-7 transition-colors hover:bg-primary hover:text-primary-foreground">
              <span className="text-xs text-gold">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-8 font-serif text-3xl leading-tight">{title}</h3>
              <p className="mt-4 text-sm leading-7 text-muted-foreground group-hover:text-primary-foreground/70">{text}</p>
              <ArrowUpRight className="mt-8 size-5 text-gold transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  </SiteShell>;
}
