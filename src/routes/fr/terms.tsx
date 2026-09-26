import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
export const Route = createFileRoute("/fr/terms")({ head: (ctx) => pageHeadFor(ctx, "Conditions générales | GULFWELLBEING", "Conditions d'utilisation du site GULFWELLBEING et nature des services de conseil en bien-être et de coaching.", "/fr/terms"), component: () => <FrenchPage kind="terms" /> });
