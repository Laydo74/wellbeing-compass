import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/business/team-wellbeing")({
  head: (ctx) => pageHeadFor(ctx, "رفاه القيادة والفريق | GULFWELLBEING","استشارات خاصة في رفاه القيادة والفرق حول التواصل والتوقعات والضغط والجانب الإنساني من القيادة."),
  component: Page,
});

function Page(){return <SiteShell><article dir="rtl" className="mx-auto max-w-4xl px-6 py-24 lg:px-12">
  <p className="eyebrow text-gold">رفاه الشركات والقيادات</p>
  <h1 className="mt-6 font-serif text-6xl">رفاه القيادة والفريق</h1>
  <p className="mt-7 text-lg leading-8 text-muted-foreground">دعم خاص للقادة الذين يتحملون مسؤولية الأشخاص والتواصل والبيئة الإنسانية المحيطة بهم.</p>
  <div className="mt-14 space-y-8 text-base leading-8 text-muted-foreground">
    <p>لا تؤثر القيادة في الأداء فقط. فالتوقعات والتواصل والضغط وطريقة اتخاذ القرارات كلها تشكل تجربة الأشخاص حول القائد.</p>
    <h2 className="font-serif text-4xl text-foreground">للقادة</h2>
    <p>يمكن أن تساعد الاستشارة الخاصة على التفكير في المحادثات الصعبة والحدود وديناميكيات الفريق والضغط الشخصي المرتبط بالمسؤولية عن الآخرين.</p>
    <h2 className="font-serif text-4xl text-foreground">للمؤسسات</h2>
    <p>يمكن تكييف العمل، عند الحاجة، مع مجموعة قيادية أو فريق إداري خلال مراحل النمو أو الضغط أو التغيير التنظيمي.</p>
  </div>
  <div className="mt-14 flex flex-wrap gap-4"><Link to="/ar/book" className="button-primary">إرسال طلب خاص <ArrowUpLeft className="size-4"/></Link><Link to="/ar/business" className="button-on-light">استكشاف رفاه الشركات</Link></div>
</article></SiteShell>}