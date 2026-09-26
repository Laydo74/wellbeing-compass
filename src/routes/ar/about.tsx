import { createFileRoute } from "@tanstack/react-router";
import { ArabicPage } from "@/components/site/ArabicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar/about")({
  head: (ctx) => pageHeadFor(ctx, "سرور طركان | مستشارة رفاه خاصة في الخليج | GULFWELLBEING", "تعرف على سرور طركان، مستشارة رفاه ومدربة وReiki Master، وتعرّف على المقاربة الخاصة التي تشكل جلسات الرفاه في دبي والخليج.", "/ar/about"),
  component: () => <ArabicPage kind="about" />,
});
