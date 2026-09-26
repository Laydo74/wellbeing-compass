import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

const principles = [
  ["01","الإنسان قبل المشكلة","لا نختزل الإنسان في مشكلة أو عنوان واحد. البداية هي الشخص نفسه: ما الذي يعيشه، ما الذي يحمله، وما الذي تغيّر في حياته."],
  ["02","السياق قبل النصيحة","قبل أي اتجاه، تأتي مساحة لفهم الواقع والمسؤوليات والعلاقات والظروف التي تشكل الحياة اليومية."],
  ["03","الوضوح الداخلي قبل التغيير الخارجي","عندما يصبح ما يحدث في الداخل أوضح، يمكن النظر إلى القرارات والحدود والعلاقات والخطوات القادمة بوعي أكبر."],
  ["04","رفاه الإنسان ككل","الحياة الخاصة والعلاقات والأسرة والمسؤولية والقيادة ونمط الحياة قد تتقاطع، لذلك تُفهم التجربة ككل لا كأجزاء منفصلة."],
  ["05","خاص، فردي، بلا قالب جاهز","لا يوجد برنامج واحد مفروض على الجميع. يتشكل التركيز والإيقاع وطريقة العمل وفق الشخص واحتياجه وما يتم الاتفاق عليه."]
] as const;

export const Route = createFileRoute("/ar/the-tarkan-approach")({
  head: (ctx) => pageHeadFor(ctx, 
    "منهج سرور طركان | The Tarkan Approach | استشارات رفاه خاصة في الخليج",
    "اكتشف The Tarkan Approach، منهج سرور طركان في الاستشارات الخاصة للرفاه في دبي وأبوظبي والرياض وجدة والدوحة والكويت والبحرين وعُمان، ويبدأ بالإنسان والسياق والوضوح الداخلي."
  ),
  component: Page,
});

function Page() {
  return <SiteShell>
    <section className="page-hero">
      <div className="mx-auto max-w-[1240px] px-6 py-20 lg:px-10 lg:py-24">
        <p className="eyebrow text-gold">THE TARKAN APPROACH · منهج سرور طركان</p>
        <h1 className="mt-5 max-w-4xl font-serif text-4xl leading-[1.15] sm:text-5xl md:text-6xl">منهج يبدأ بالإنسان، لا بالمشكلة.</h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground">مقاربة خاصة وفردية للرفاه، مصممة حول الإنسان وسياقه وحياته الفعلية، لا حول برنامج جاهز أو تعريف واحد للمشكلة.</p>
      </div>
    </section>

    <section className="bg-primary px-6 py-16 text-primary-foreground lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-[1180px] gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
        <div><p className="eyebrow text-gold">الفلسفة</p><p className="mt-5 font-serif text-3xl leading-tight sm:text-4xl lg:text-5xl">الإنسان أولاً.</p></div>
        <p className="max-w-3xl text-base leading-8 text-primary-foreground/75">يبدأ منهج سرور طركان بالإنصات. يترك مساحة للتعقيد والسياق الشخصي والواقع خلف الدور الذي قد يحمله الإنسان. ليس برنامجاً جامداً، ولا يحاول اختزال حياة معقدة في قائمة جاهزة.</p>
      </div>
    </section>

    <section className="mx-auto max-w-[1180px] px-6 py-16 lg:px-10 lg:py-24">
      <div className="mb-16 max-w-3xl">
        <p className="eyebrow text-gold">المبادئ الخمسة</p>
        <h2 className="mt-5 font-serif text-5xl leading-tight md:text-7xl">الطريقة قبل الوصفة.</h2>
      </div>
      <div>
        {principles.map(([n,title,body]) => (
          <article key={n} className="grid gap-5 border-t border-border py-10 md:grid-cols-[.45fr_1.55fr] md:items-center lg:gap-10 lg:py-12">
            <div className="md:order-1">
              <span className="font-serif text-2xl text-gold/70">{n}</span>
              <h2 className="mt-2 max-w-5xl font-serif text-3xl leading-[1.15] sm:text-4xl lg:text-5xl">{title}</h2>
            </div>
            <div className="md:order-2">
              <p className="mt-5 max-w-4xl text-base leading-8 text-muted-foreground">{body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-secondary px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-[1100px]">
        <p className="eyebrow text-gold">الخليج ودولياً</p>
        <h2 className="mt-5 max-w-4xl font-serif text-5xl leading-tight sm:text-7xl">نهج واحد، لكن لا توجد حياة واحدة.</h2>
        <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground">قد تكون الحياة بين دبي وأبوظبي والرياض وجدة والدوحة والكويت والمنامة ومسقط، أو بين الخليج والعالم، مليئة بالعمل والسفر والأسرة والمسؤوليات. The Tarkan Approach لا يفترض أن هذه التجارب متشابهة؛ بل يبدأ من سياق الشخص نفسه.</p>
      </div>
    </section>

    <section className="bg-background px-6 py-20 text-center lg:py-28">
      <p className="eyebrow text-gold">مساحة خاصة</p>
      <h2 className="mx-auto mt-4 max-w-3xl font-serif text-5xl leading-tight sm:text-7xl">ابدأ بما يهمك أنت.</h2>
      <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground">إذا كنت تبحث عن استشارات رفاه خاصة وشخصية، يمكنك مشاركة ما يناسبك فقط وطلب محادثة أولية.</p>
      <Link to="/ar/book" className="button-primary mt-9 inline-flex items-center gap-2">طلب استشارة خاصة <ArrowUpLeft className="size-4" /></Link>
    </section>
  </SiteShell>;
}
