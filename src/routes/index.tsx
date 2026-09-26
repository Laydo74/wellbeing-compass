import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, LockKeyhole } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { FaqSection } from "@/components/site/FaqSection";
import woman from "@/assets/woman-editorial.jpg";
import executive from "@/assets/executive-editorial.jpg";
import stillLife from "@/assets/private-still-life.jpg";
import sourourPortrait from "@/assets/sourour-tarkan-official.jpeg.asset.json";

export const Route = createFileRoute("/")({
  head: (ctx) => pageHeadFor(ctx, 
    "Private Wellbeing Advisor for the Gulf | GULFWELLBEING",
    "Private wellbeing advisory and coaching with Sourour Tarkan for individuals, women, men, families, founders and executives across the Gulf and internationally."
  ),
  component: Home,
});

const pathways = [
  ["01", "Private Wellbeing", "Space to restore balance, clarity and personal capacity.", "/wellbeing", stillLife],
  ["02", "Women's Wellbeing", "Discreet support for the complexities of private and family life.", "/women", woman],
  ["03", "Men's Wellbeing", "Considered guidance for responsibility, leadership and transition.", "/men", executive],
];

const posts = [
  ["Private Wellbeing Advisory in the Gulf", "A private space for people carrying significant responsibility.", "/blog/private-wellbeing-advisory-gulf"],
  ["Stress and Burnout in Executives", "Recognising sustained pressure before it becomes the new normal.", "/blog/stress-burnout-executives"],
  ["Women's Wellbeing in the Gulf", "Confidence, family life, relationships and personal transitions.", "/blog/womens-wellbeing-gulf"],
];

function Home() {
  return <SiteShell>
    <section className="grain relative min-h-[92svh] bg-primary text-primary-foreground">
      <img src={sourourPortrait.url} width={768} height={1024} fetchPriority="high" alt="Sourour Tarkan, private wellbeing advisor" className="absolute inset-0 h-full w-full object-cover object-center" />
      <div className="absolute inset-0 bg-linear-to-r from-primary via-primary/65 to-transparent" />
      <div className="relative mx-auto flex min-h-[92svh] max-w-[1600px] items-end px-5 pb-16 pt-36 lg:px-10 lg:pb-20">
        <div className="max-w-4xl">
          <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-gold">PRIVATE WELLBEING ADVISORY · GCC & INTERNATIONAL</p>
          <h1 className="font-serif text-[clamp(3.2rem,7vw,7.2rem)] leading-[0.9]">Private Wellbeing Advisor<br/><em className="font-normal">for the Gulf.</em></h1>
          <p className="mt-8 max-w-xl text-sm leading-7 text-primary-foreground/72 sm:text-base">Online, with private sessions by invitation.<br/>Personal, discreet guidance for the inner life behind responsibility, family, leadership and change.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link to="/book" className="button-gold">Book a Private Session <ArrowRight className="size-4" /></Link>
            <Link to="/wellbeing" className="button-on-dark">Explore Wellbeing</Link>
          </div>
        </div>
        <ArrowDown className="absolute bottom-8 end-6 size-5 text-gold lg:end-10" />
      </div>
    </section>

    <section className="editorial-grid bg-background px-5 py-20 lg:px-10 lg:py-32">
      <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">A PRIVATE ADVISORY RELATIONSHIP</p>
        <div>
          <h2 className="font-serif text-5xl leading-[0.95] sm:text-7xl">Wellbeing is personal.<br/>The support should be too.</h2>
          <p className="mt-7 max-w-2xl text-sm leading-7 text-muted-foreground sm:text-base">GULFWELLBEING offers a composed, confidential setting to make sense of pressure, restore perspective and move through change with greater clarity. Every conversation begins with the individual—not a formula.</p>
        </div>
      </div>
    </section>

    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-12 flex items-end justify-between">
          <div><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">AREAS OF ADVISORY</p><h2 className="mt-3 font-serif text-5xl sm:text-7xl">Private pathways</h2></div>
          <span className="hidden text-xs text-muted-foreground sm:block">01 — 03</span>
        </div>
        <div className="grid gap-px bg-border md:grid-cols-3">
          {pathways.map(([n, title, text, to, image]) => <Link key={title} to={to ?? "/"} className="group relative min-h-[30rem] overflow-hidden bg-primary text-primary-foreground">
            <img src={image} width={1280} height={960} loading="lazy" alt={`${title} — GULFWELLBEING`} className="absolute inset-0 h-full w-full object-cover opacity-62 transition-transform duration-700 group-hover:scale-[1.025]" />
            <div className="absolute inset-0 bg-linear-to-t from-primary via-primary/20 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7"><span className="text-[10px] text-gold">{n}</span><h3 className="mt-3 font-serif text-4xl">{title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-primary-foreground/68">{text}</p><ArrowUpRight className="mt-6 size-5" /></div>
          </Link>)}
        </div>
      </div>
    </section>

    <section className="grid bg-secondary lg:grid-cols-2">
      <div className="flex min-h-[34rem] items-center px-6 py-20 lg:px-20">
        <div>
          <p className="text-[10px] uppercase tracking-[0.22em] text-gold">BUSINESS WELLBEING</p>
          <h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Wellbeing for<br/>business & leadership.</h2>
          <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">Private wellbeing advisory for founders, executives, leaders and organisations navigating sustained pressure, decision-making, people responsibility and the human side of performance.</p>
          <Link to="/business" className="button-primary mt-9">Explore Business Wellbeing <ArrowRight className="size-4" /></Link>
        </div>
      </div>
      <img src={executive} width={1100} height={825} loading="lazy" alt="Private business wellbeing advisory" className="h-[28rem] w-full object-cover lg:h-[34rem]" />
    </section>

    <section className="grid bg-background lg:grid-cols-[1.1fr_0.9fr]">
      <div className="order-2 flex items-center px-6 py-20 lg:order-2 lg:px-20"><div>
        <LockKeyhole className="size-5 text-gold" />
        <p className="mt-7 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">BY PRIVATE ENQUIRY</p>
        <h2 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">VIP Concierge<br/>Wellbeing</h2>
        <p className="mt-7 max-w-lg text-sm leading-7 text-muted-foreground sm:text-base">A highly personalised experience designed around demanding schedules, international lives and the value of exceptional discretion.</p>
        <Link to="/business/vip-concierge-wellbeing" className="button-primary mt-9">Explore VIP Concierge</Link>
      </div></div>
      <img src={stillLife} width={900} height={700} loading="lazy" alt="Private consultation salon with understated Gulf architecture" className="order-1 h-[24rem] w-full object-cover lg:order-1 lg:h-[34rem]" />
    </section>

    <section className="relative overflow-hidden bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-[1600px] lg:min-h-[760px] lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative order-2 min-h-[520px] px-5 py-8 lg:order-2 lg:min-h-0 lg:px-10 lg:py-16">
          <div className="relative h-full overflow-hidden rounded-[2rem]">
            <img src={sourourPortrait.url} width={800} height={1000} loading="lazy" alt="Sourour Tarkan, private wellbeing advisor and coach" className="absolute inset-0 h-full w-full object-cover object-center" />
            <div className="absolute inset-0 bg-linear-to-l from-transparent via-primary/5 to-primary/35" />
            <div className="absolute inset-0 bg-linear-to-t from-primary/35 via-transparent to-transparent" />
          </div>
        </div>
        <div className="relative order-1 flex items-center px-7 py-24 lg:order-1 lg:px-20 xl:px-28">
          <div className="max-w-xl">
            <div className="mb-10 flex items-center gap-4">
              <span className="h-px w-12 bg-gold" />
              <p className="text-[10px] uppercase tracking-[0.28em] text-gold">MEET SOUROUR TARKAN</p>
            </div>
            <h2 className="font-serif text-5xl leading-[0.98] sm:text-7xl lg:text-[5.5rem]">A quieter kind<br/><em className="font-normal">of wellbeing.</em></h2>
            <p className="mt-9 max-w-lg text-sm leading-7 text-primary-foreground/70 sm:text-base">A private relationship built around listening, context and the realities of the person behind the role.</p>
            <p className="mt-5 max-w-lg text-sm leading-7 text-primary-foreground/55">Sourour Tarkan is a private wellbeing advisor, coach and Reiki Master. Her work begins with the individual, not a formula.</p>
            <Link to="/about" className="mt-10 inline-flex items-center gap-3 border-b border-gold/70 pb-3 text-xs font-semibold uppercase tracking-[0.16em] text-primary-foreground transition-colors hover:text-gold">Meet Sourour Tarkan <ArrowRight className="size-4" /></Link>
          </div>
        </div>
      </div>
    </section>

    <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto grid max-w-[1350px] gap-16 lg:grid-cols-2">
        <div><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">THE TARKAN APPROACH</p><h2 className="mt-5 font-serif text-5xl leading-none sm:text-7xl">Human attention,<br/>without assumption.</h2></div>
        <div className="space-y-8 text-sm leading-7 text-muted-foreground sm:text-base">
          <p>The work is attentive, practical and shaped around the realities of your life. There is room for complexity without judgement, and direction without rigid formulas.</p>
          <p>Support may focus on personal wellbeing, relationships, transition, leadership, family dynamics or the quieter pressures that are difficult to discuss elsewhere.</p>
          <p>Where appropriate and welcomed, holistic wellbeing practices and Reiki may form part of the work. Sourour Tarkan is a Reiki Master.</p>
          <Link to="/the-tarkan-approach" className="inline-flex items-center gap-2 border-b border-foreground pb-2 text-xs font-semibold uppercase tracking-[0.14em] text-foreground">Discover The Tarkan Approach <ArrowUpRight className="size-4" /></Link>
        </div>
      </div>
    </section>

    <section className="bg-background px-5 py-20 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-[1350px]">
        <div className="mb-12 flex items-end justify-between"><div><p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">THE BLOG</p><h2 className="mt-3 font-serif text-5xl sm:text-7xl">From the Blog</h2></div><Link to="/blog" className="hidden items-center gap-2 text-xs font-semibold uppercase tracking-[.14em] sm:inline-flex">View all <ArrowUpRight className="size-4"/></Link></div>
        <div className="grid gap-8 md:grid-cols-3">
          {posts.map(([title,text,to],i) => <a key={title} href={to} className="group relative z-10 block cursor-pointer border-t border-border pt-6">
            <span className="text-[10px] text-gold">0{i+1}</span><h3 className="mt-4 font-serif text-3xl leading-tight group-hover:underline">{title}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p><span className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[.14em]">Read article <ArrowUpRight className="size-4"/></span>
          </a>)}
        </div>
      </div>
    </section>

    <FaqSection />

    <section className="bg-primary px-5 py-20 text-primary-foreground lg:px-10 lg:py-28">
      <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 md:flex-row md:items-end">
        <div><p className="text-[10px] uppercase tracking-[0.22em] text-gold">PRIVATE ENQUIRY</p><h2 className="mt-4 font-serif text-5xl leading-none sm:text-7xl">A confidential setting<br/>for what matters most.</h2></div>
        <Link to="/book" className="button-gold">Request a Private Session <ArrowRight className="size-4"/></Link>
      </div>
    </section>
  </SiteShell>;
}
