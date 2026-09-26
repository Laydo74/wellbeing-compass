import { createFileRoute } from "@tanstack/react-router";
import { FrenchPage } from "@/components/site/FrenchPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr/men")({
  head: (ctx) => pageHeadFor(ctx, "Bien-être des hommes dans le Golfe | GULFWELLBEING", "Conseil privé et discret en bien-être pour les hommes à Dubaï, Abou Dhabi, Riyad, Doha et dans tout le Golfe : pression, paternité et leadership.", "/fr/men"),
  component: () => <FrenchPage kind="men" />,
});
