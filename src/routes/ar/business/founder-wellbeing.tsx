import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/business/founder-wellbeing")({
  head: (ctx) => pageHeadFor(ctx, "رفاه المؤسسين | GULFWELLBEING","استشارات خاصة في رفاه المؤسسين حول ضغط المسؤولية، القرارات، الحدود والجانب الشخصي من ريادة الأعمال."),
  component: Page,
});

function Page(){return <SiteShell><article dir="rtl" className="mx-auto max-w-4xl px-6 py-24 lg:px-12">
  <p className="eyebrow text-gold">رفاه الشركات والقيادات</p>
  <h1 className="mt-6 font-serif text-6xl">رفاه المؤسسين</h1>
  <p className="mt-7 text-lg leading-8 text-muted-foreground">مساحة خاصة للشخص الذي يحمل الشركة وقراراتها وعدم اليقين المرتبط بها.</p>
  <div className="mt-14 space-y-8 text-base leading-8 text-muted-foreground">
    <p>قد يقضي المؤسس سنوات وهو الشخص الذي يعود إليه الجميع. ومع كثرة القرارات والمسؤوليات، قد يصبح من الصعب التوقف وملاحظة الأثر الشخصي لهذا الضغط.</p>
    <h2 className="font-serif text-4xl text-foreground">خلف الدور المهني</h2>
    <p>توفر الاستشارة الخاصة مساحة للتفكير في الحدود والضغط والهوية والعلاقات والخيارات التي قد يصعب رؤيتها بوضوح عندما تكون الشركة حاضرة في كل تفاصيل الحياة.</p>
    <h2 className="font-serif text-4xl text-foreground">مساحة سرية للمؤسس</h2>
    <p>يُبنى العمل حول ظروف المؤسس، لا حول برنامج مؤسسي ثابت، مع الاهتمام بالقدرة الشخصية المستدامة والجانب الإنساني من ريادة الأعمال.</p>
  </div>
  <div className="mt-14 flex flex-wrap gap-4"><Link to="/ar/book" className="button-primary">إرسال طلب خاص <ArrowUpLeft className="size-4"/></Link><Link to="/ar/business" className="button-on-light">استكشاف رفاه الشركات</Link></div>
</article></SiteShell>}