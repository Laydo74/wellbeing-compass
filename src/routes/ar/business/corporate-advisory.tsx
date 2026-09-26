import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/business/corporate-advisory")({
  head: (ctx) => pageHeadFor(ctx, "استشارات رفاه الشركات | GULFWELLBEING","استشارات خاصة لفرق القيادة والإدارة العليا والمؤسسات خلال مراحل التغيير والضغط والمسؤولية تجاه الأشخاص."),
  component: Page,
});

function Page(){return <SiteShell><article dir="rtl" className="mx-auto max-w-4xl px-6 py-24 lg:px-12">
  <p className="eyebrow text-gold">رفاه الشركات والقيادات</p>
  <h1 className="mt-6 font-serif text-6xl">استشارات رفاه الشركات</h1>
  <p className="mt-7 text-lg leading-8 text-muted-foreground">منظور خارجي خاص حول الجانب الإنساني من القيادة والضغط والتغيير داخل المؤسسة.</p>
  <div className="mt-14 space-y-8 text-base leading-8 text-muted-foreground">
    <p>قد تحتاج المؤسسات إلى منظور هادئ وخاص عندما تواجه القيادة ضغطاً مستمراً أو نمواً سريعاً أو إعادة تنظيم أو مرحلة تغيير تتطلب قدراً كبيراً من المسؤولية.</p>
    <h2 className="font-serif text-4xl text-foreground">صيغة تناسب المؤسسة</h2>
    <p>يمكن بناء التركيز حول مجموعة قيادية أو فريق إداري أو مرحلة محددة من التغيير، بدلاً من تقديم باقة رفاه عامة لا تعكس الواقع الفعلي للمؤسسة.</p>
    <h2 className="font-serif text-4xl text-foreground">الإنسان خلف الأداء</h2>
    <p>يهتم العمل بالأشخاص الذين يحملون المسؤولية: التواصل، القدرة، الحدود، اتخاذ القرار والواقع الإنساني خلف الأداء المؤسسي.</p>
  </div>
  <div className="mt-14 flex flex-wrap gap-4"><Link to="/ar/book" className="button-primary">إرسال استفسار خاص <ArrowUpLeft className="size-4"/></Link><Link to="/ar/business" className="button-on-light">استكشاف رفاه الشركات</Link></div>
</article></SiteShell>}