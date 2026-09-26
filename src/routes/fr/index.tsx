import { createFileRoute } from "@tanstack/react-router";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { FrenchHome } from "@/components/site/FrenchPage";

export const Route = createFileRoute("/fr/")({
  head: (ctx) => pageHeadFor(ctx, "GULFWELLBEING | Conseil privé en bien-être dans le Golfe", "Conseil privé et confidentiel en bien-être avec Sourour Tarkan pour particuliers, familles et dirigeants à Dubaï, Abou Dhabi, Riyad, Doha, Koweït, Bahreïn et Oman.", "/fr"),
  component: FrenchHome,
});
