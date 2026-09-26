import { createFileRoute } from "@tanstack/react-router";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { ArabicHome } from "@/components/site/ArabicPage";

export const Route = createFileRoute("/ar/")({
  head: (ctx) => pageHeadFor(ctx, "GULFWELLBEING | استشارات خاصة في الرفاه في الخليج", "استشارات خاصة وسرية في الرفاه مع سرور طركان للأفراد والعائلات والقيادات في دبي وأبوظبي والرياض والدوحة والكويت والبحرين وعُمان.", "/ar"),
  component: ArabicHome,
});
