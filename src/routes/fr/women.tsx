import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr/women")({
  head: (ctx) => pageHeadFor(ctx, "Bien-être des femmes dans le Golfe | GULFWELLBEING", "Conseil privé en bien-être pour les femmes à Dubaï, Abou Dhabi, Riyad, Doha et dans tout le Golfe : relations, maternité, confiance et transitions.", "/fr/women"),
  component: () => <FrenchPage kind="women" />,
});
