import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
export const Route = createFileRoute("/fr/privacy")({ head: (ctx) => pageHeadFor(ctx, "Politique de confidentialité | GULFWELLBEING", "Politique de confidentialité et de données du site GULFWELLBEING et utilisation des informations partagées par le client.", "/fr/privacy"), component: () => <FrenchPage kind="privacy" /> });
