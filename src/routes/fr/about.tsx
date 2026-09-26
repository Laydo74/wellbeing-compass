import { createFileRoute } from "@tanstack/react-router";
import { AboutSourour } from "@/components/site/AboutSourour";
import { pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr/about")({
  head: (ctx) => pageHeadFor(ctx, "Sourour Tarkan | Conseillère privée en bien-être dans le Golfe | GULFWELLBEING", "Découvrez Sourour Tarkan, conseillère privée en bien-être, coach et Reiki Master, et l'approche personnelle qui façonne les séances de bien-être à Dubaï et dans le Golfe.", "/fr/about"),
  component: () => <AboutSourour locale="fr" />,
});
