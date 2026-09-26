export const SITE_URL = "https://www.gulfwellbeing.com";
const SITE_NAME = "GULFWELLBEING";
const DEFAULT_IMAGE = `${SITE_URL}/images/og-default.jpg`;

const BLOG_SLUGS = [
  "private-wellbeing-advisory-gulf", "stress-burnout-executives", "womens-wellbeing-gulf",
  "mens-wellbeing-pressure", "relationships-family-wellbeing", "life-transitions-wellbeing",
  "mindfulness-busy-lives", "emotional-balance-private-wellbeing", "confidence-self-trust",
  "leadership-clarity-private-advisory", "family-life-gulf-wellbeing", "private-wellbeing-high-responsibility",
];
const BUSINESS_SUB = [
  "burnout-prevention", "corporate-advisory", "executive-wellbeing", "founder-wellbeing",
  "leadership-clarity", "team-wellbeing", "vip-concierge-wellbeing",
];
/** French sub-pages that exist alongside their English equivalent. */
const FR_BUSINESS_SUB = BUSINESS_SUB;

/** English paths that have a real Arabic equivalent at /ar + path. */
const BILINGUAL = new Set<string>([
  "/", "/wellbeing", "/women", "/men", "/business", "/the-tarkan-approach", "/about",
  "/blog", "/book", "/privacy", "/terms",
  ...BUSINESS_SUB.map((s) => `/business/${s}`),
  ...BLOG_SLUGS.map((s) => `/blog/${s}`),
]);
/** English paths that have a real French equivalent at /fr + path (built out progressively). */
const TRILINGUAL = new Set<string>([
  "/", "/wellbeing", "/women", "/men", "/business", "/the-tarkan-approach", "/about",
  "/blog", "/book", "/privacy", "/terms",
  ...FR_BUSINESS_SUB.map((s) => `/business/${s}`),
]);
const NOINDEX = new Set(["/auth", "/admin"]);

type HeadContext = {
  match: { id: string; pathname: string };
  matches: Array<{ id: string }>;
};

const abs = (p: string) => (p === "/" ? `${SITE_URL}/` : `${SITE_URL}${p}`);
const normalize = (p: string) => (p.length > 1 ? p.replace(/\/+$/, "") : p) || "/";
const localeOf = (p: string): "ar" | "fr" | "en" =>
  p === "/ar" || p.startsWith("/ar/") ? "ar" : p === "/fr" || p.startsWith("/fr/") ? "fr" : "en";
const stripLocale = (p: string) => (p === "/ar" || p === "/fr" ? "/" : p.replace(/^\/(ar|fr)/, "") || "/");

/** Builds head tags. Canonical/hreflang are emitted only when `path` is given (leaf routes). */
export function pageHead(title: string, description: string, path?: string) {
  const p = path ? normalize(path) : undefined;
  const locale = p ? localeOf(p) : "en";
  const isArabic = locale === "ar";
  const alt = isArabic
    ? "سرور طركان — استشارات رفاه خاصة"
    : locale === "fr"
      ? "Sourour Tarkan, conseillère privée en bien-être et coach"
      : "Sourour Tarkan, private wellbeing advisor and coach";

  const meta: Array<Record<string, string>> = [
    { title },
    { name: "description", content: description },
    { name: "robots", content: p && NOINDEX.has(p) ? "noindex,nofollow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1" },
    { name: "author", content: "Sourour Tarkan | GULFWELLBEING" },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:type", content: p?.includes("/blog/") ? "article" : "website" },
    { property: "og:locale", content: locale === "ar" ? "ar_AE" : locale === "fr" ? "fr_FR" : "en_US" },
    { property: "og:site_name", content: SITE_NAME },
    { property: "og:image", content: DEFAULT_IMAGE },
    { property: "og:image:width", content: "1200" },
    { property: "og:image:height", content: "630" },
    { property: "og:image:alt", content: alt },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: DEFAULT_IMAGE },
    { name: "twitter:image:alt", content: alt },
  ];
  if (!p) return { meta };

  meta.push({ property: "og:url", content: abs(p) });
  const links: Array<Record<string, string>> = [{ rel: "canonical", href: abs(p) }];
  const enPath = normalize(stripLocale(p));
  if (BILINGUAL.has(enPath) || TRILINGUAL.has(enPath)) {
    links.push({ rel: "alternate", hrefLang: "en", href: abs(enPath) }, { rel: "alternate", hrefLang: "x-default", href: abs(enPath) });
    if (BILINGUAL.has(enPath)) links.push({ rel: "alternate", hrefLang: "ar", href: abs(enPath === "/" ? "/ar" : `/ar${enPath}`) });
    if (TRILINGUAL.has(enPath)) links.push({ rel: "alternate", hrefLang: "fr", href: abs(enPath === "/" ? "/fr" : `/fr${enPath}`) });
  }
  return { meta, links };
}

/** Route head helper: derives the path from the matched route; only the leaf match emits canonical/hreflang. */
export function pageHeadFor(ctx: HeadContext, title: string, description: string, explicitPath?: string) {
  const isLeaf = ctx.matches[ctx.matches.length - 1]?.id === ctx.match.id;
  const routePath = explicitPath ?? ctx.match.pathname;
  return pageHead(title, description, isLeaf ? routePath : undefined);
}
