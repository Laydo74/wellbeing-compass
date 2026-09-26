import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.men;
export const Route=createFileRoute("/men")({head: (ctx) => pageHeadFor(ctx, "Men’s Wellbeing Advisor for the Gulf | GULFWELLBEING","Private men’s wellbeing advisory for pressure, fatherhood, emotional balance, leadership and personal transitions for clients in Dubai, Abu Dhabi, Riyadh, Doha and across the Gulf.","/men"),component:Page});
function Page(){return <SiteShell><EditorialPage page="men" {...content}/></SiteShell>}
