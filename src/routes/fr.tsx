import { createFileRoute, Outlet } from "@tanstack/react-router";
import { pageHeadFor } from "@/components/site/PageMeta";

export const Route = createFileRoute("/fr")({
  head: (ctx) => pageHeadFor(
    ctx,
    "GULFWELLBEING | Conseil privé en bien-être dans le Golfe",
    "Conseil privé et confidentiel en bien-être avec Sourour Tarkan pour particuliers, familles et dirigeants dans le Golfe et à l'international."
  ),
  component: () => <Outlet />,
});
