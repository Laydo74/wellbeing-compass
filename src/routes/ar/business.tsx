import { createFileRoute } from "@tanstack/react-router";
import { ArabicPage } from "@/components/site/ArabicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/business")({
  head: (ctx) => pageHeadFor(ctx, "رفاه الشركات والقيادات في الخليج | GULFWELLBEING", "استشارات خاصة في رفاه الشركات والقيادات للمؤسسين والمديرين والقيادات حول الضغط والقيادة والاحتراق ووضوح القرار في دبي والرياض وأبوظبي والدوحة وعبر الخليج.", "/ar/business"),
  component: () => <ArabicPage kind="business" />,
});
