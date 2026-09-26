import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr/business")({
  head: (ctx) => pageHeadFor(ctx, "Bien-être en entreprise et conseil exécutif privé | GULFWELLBEING", "Conseil privé en bien-être pour fondateurs, dirigeants, cadres supérieurs et organisations à Dubaï, Riyad, Doha, Koweït, Bahreïn et Oman.", "/fr/business"),
  component: () => <FrenchPage kind="business" />,
});
