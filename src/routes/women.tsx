import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.women;
export const Route=createFileRoute("/women")({head: (ctx) => pageHeadFor(ctx, "Women’s Wellbeing Advisor for the Gulf | GULFWELLBEING","Private women’s wellbeing advisory for motherhood, relationships, confidence, family life and personal transitions for clients in Dubai, Abu Dhabi, Riyadh, Doha and across the Gulf.","/women"),component:Page});
function Page(){return <SiteShell><EditorialPage page="women" {...content}/></SiteShell>}
