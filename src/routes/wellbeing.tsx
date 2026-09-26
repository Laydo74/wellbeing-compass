import { createFileRoute } from "@tanstack/react-router";
import { SiteShell } from "@/components/site/SiteShell";
import { EditorialPage } from "@/components/site/PublicPage";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { pageContent } from "@/lib/site-content";
const content=pageContent.wellbeing;
export const Route=createFileRoute("/wellbeing")({head: (ctx) => pageHeadFor(ctx, "Private Wellbeing Advisory for the Gulf | GULFWELLBEING","Private online wellbeing advisory and coaching for individuals across the UAE, Saudi Arabia, Qatar, Kuwait, Bahrain, Oman and the wider Gulf.","/wellbeing"),component:Page});
function Page(){return <SiteShell><EditorialPage page="wellbeing" {...content}/></SiteShell>}
