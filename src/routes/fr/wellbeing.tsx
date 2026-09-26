import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr/wellbeing")({
  head: (ctx) => pageHeadFor(ctx, "Conseil privé en bien-être dans le Golfe | GULFWELLBEING", "Conseil et coaching privés en ligne pour particuliers aux Émirats, en Arabie saoudite, au Qatar, au Koweït, à Bahreïn, à Oman et dans tout le Golfe.", "/fr/wellbeing"),
  component: () => <FrenchPage kind="wellbeing" />,
});
