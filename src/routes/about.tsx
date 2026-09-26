import { createFileRoute } from "@tanstack/react-router";
import { AboutSourour } from "@/components/site/AboutSourour";
import { pageHeadFor } from "@/components/site/PageMeta";

export const Route=createFileRoute("/about")({
  head: (ctx) => pageHeadFor(ctx, "Sourour Tarkan | Private Wellbeing Advisor for the Gulf — GULFWELLBEING","Meet Sourour Tarkan, private wellbeing advisor, coach and Reiki Master, offering discreet wellbeing advisory for individuals, families and executives across the Gulf.","/about"),
  component:Page
});

function Page(){return <AboutSourour locale="en" />}
