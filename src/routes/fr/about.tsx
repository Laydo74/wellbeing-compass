import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr/about")({
  head: (ctx) => pageHeadFor(ctx, "Sourour Tarkan | Conseillère privée en bien-être dans le Golfe | GULFWELLBEING", "Découvrez Sourour Tarkan, conseillère privée en bien-être, coach et Reiki Master, et l'approche personnelle qui façonne les séances de bien-être à Dubaï et dans le Golfe.", "/fr/about"),
  component: () => <FrenchPage kind="about" />,
});
