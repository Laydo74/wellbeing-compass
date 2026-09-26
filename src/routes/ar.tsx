import { createFileRoute, Outlet } from "@tanstack/react-router";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/ar")({
  head: (ctx) => pageHeadFor(ctx, "GULFWELLBEING | استشارات خاصة في الرفاه", "استشارات خاصة في الرفاه وسرية مع سرور طركان للأفراد والعائلات والقيادات."),
  component: () => <Outlet />,
});
