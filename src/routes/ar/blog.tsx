import { createFileRoute, Outlet } from "@tanstack/react-router";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/blog")({
  head: (ctx) => pageHeadFor(ctx, "المدونة الخاصة | GULFWELLBEING", "مقالات عربية أصلية حول الرفاه الشخصي، رفاه المرأة والرجل، العلاقات، الأسرة، القيادة والتحولات الحياتية."),
  component: () => <Outlet />,
});
