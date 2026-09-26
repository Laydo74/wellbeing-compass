import { createFileRoute } from "@tanstack/react-router";
import { ArabicPage } from "@/components/site/ArabicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/wellbeing")({
  head: (ctx) => pageHeadFor(ctx, "استشارات الرفاه الخاصة في الخليج | GULFWELLBEING", "استشارات خاصة وسرية في الرفاه حول الضغط والتوازن والعلاقات والتحولات الحياتية للأفراد في دبي وأبوظبي والرياض والدوحة والكويت وعبر الخليج.", "/ar/wellbeing"),
  component: () => <ArabicPage kind="wellbeing" />,
});
