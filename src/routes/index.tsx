import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, ArrowDown, LockKeyhole, User, Users, Briefcase } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[92vh] bg-primary text-primary-foreground overflow-hidden">
        {/* Placeholder image overlay effect */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6199f7d209?q=80&w=2070&auto=format&fit=crop" 
            alt="Luxury residence" 
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/60 to-transparent"></div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-[92vh] max-w-[1440px] items-end px-5 pb-16 pt-36 lg:px-10 lg:pb-20">
          <div className="max-w-4xl">
            <p className="mb-6 text-[10px] uppercase tracking-[0.25em] text-gold font-medium">
              PRIVATE WELLBEING ADVISORY · GCC & INTERNATIONAL
            </p>
            <h1 className="font-serif text-[clamp(3.2rem,7vw,7.2rem)] leading-[0.9] tracking-tight">
              Private Wellbeing Advisor<br/>
              <em className="font-normal italic">for the Gulf.</em>
            </h1>
            <p className="mt-8 max-w-xl text-sm leading-7 text-primary-foreground/70 sm:text-base">
              Online, with private sessions by invitation.<br/>
              Personal, discreet guidance for the inner life behind responsibility, family, leadership and change.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <button className="button-gold">
                Book a Private Session <ArrowRight className="size-4" />
              </button>
              <button className="button-outline !border-primary-foreground/20 !text-primary-foreground hover:!bg-primary-foreground hover:!text-primary">
                Explore Wellbeing
              </button>
            </div>
          </div>
          <ArrowDown className="absolute bottom-8 right-5 size-5 text-gold lg:right-10 animate-bounce" />
        </div>
      </section>

      {/* Editorial Grid Section */}
      <section className="bg-background px-5 py-20 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-[1400px] gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium mb-4">
              A PRIVATE ADVISORY RELATIONSHIP
            </p>
            <h2 className="font-serif text-5xl leading-[0.95] sm:text-7xl">
              Wellbeing is personal.<br/>
              The support should be too.
            </h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">
              GULFWELLBEING offers a composed, confidential setting to make sense of pressure, restore perspective and move through change with greater clarity. Every conversation begins with the individual—not a formula.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Advisory */}
      <section className="bg-secondary px-5 py-20 lg:px-10 lg:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="mb-16 flex items-end justify-between border-b border-border/60 pb-8">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium">AREAS OF ADVISORY</p>
              <h3 className="mt-4 font-serif text-4xl sm:text-5xl tracking-tight">Tailored Guidance</h3>
            </div>
          </div>

          <div className="grid gap-px bg-border/40 overflow-hidden rounded-sm border border-border/40 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "For Women", icon: <User className="size-5" />, desc: "Navigating complexity, transition, and personal fulfillment." },
              { title: "For Men", icon: <User className="size-5" />, desc: "Leadership, mental resilience, and balanced excellence." },
              { title: "For Business", icon: <Briefcase className="size-5" />, desc: "Founder wellbeing and executive presence." },
              { title: "Confidentiality", icon: <LockKeyhole className="size-5" />, desc: "Complete discretion for high-profile individuals." }
            ].map((item, i) => (
              <div key={i} className="group relative bg-background p-8 transition-colors hover:bg-secondary/50">
                <div className="mb-12 text-gold">{item.icon}</div>
                <h4 className="font-serif text-2xl mb-4">{item.title}</h4>
                <p className="text-sm leading-relaxed text-muted-foreground mb-8">{item.desc}</p>
                <button className="text-[10px] uppercase tracking-widest text-gold font-bold flex items-center gap-2">
                  Learn More <ArrowRight className="size-3" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote/Philosophy Section */}
      <section className="bg-background px-5 py-32 text-center lg:px-10">
        <div className="mx-auto max-w-3xl">
          <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground mb-12">THE PHILOSOPHY</p>
          <blockquote className="font-serif text-4xl leading-tight sm:text-6xl italic">
            "True wellbeing is not the absence of stress, but the presence of a composed inner life."
          </blockquote>
          <div className="mt-12 flex justify-center">
             <div className="h-px w-20 bg-gold/40"></div>
          </div>
          <p className="mt-12 font-serif text-xl">— Sourour Tarkan</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary px-5 py-24 text-center lg:px-10">
         <div className="mx-auto max-w-4xl">
            <h2 className="font-serif text-4xl sm:text-6xl text-primary-foreground mb-8">Begin your private consultation.</h2>
            <p className="text-primary-foreground/60 mb-12 max-w-xl mx-auto italic">
              Discreet, online advisory for individuals and families across the GCC and internationally.
            </p>
            <button className="button-gold">
              Inquire Privately
            </button>
         </div>
      </section>
    </div>
  );
}
