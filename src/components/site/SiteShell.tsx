import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowUpRight, Languages } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { BrandMark } from "./BrandMark";

type Locale = "en" | "ar" | "fr";

const nav = [
  { label: "Home", ar: "الرئيسية", fr: "Accueil", to: "/" },
  { label: "Wellbeing", ar: "الرفاه", fr: "Bien-être", to: "/wellbeing" },
  { label: "Women", ar: "المرأة", fr: "Femmes", to: "/women" },
  { label: "Men", ar: "الرجل", fr: "Hommes", to: "/men" },
  { label: "Business", ar: "الأعمال والقيادات", fr: "Entreprises", to: "/business" },
  { label: "The Tarkan Approach", ar: "منهج سرور طركان", fr: "L'Approche Tarkan", to: "/the-tarkan-approach" },
  { label: "About", ar: "عن سرور طركان", fr: "À propos", to: "/about" },
  { label: "Blog", ar: "المدونة", fr: "Blog", to: "/blog" },
  { label: "Book", ar: "طلب جلسة", fr: "Réserver", to: "/book" },
] as const;

const localeLabel: Record<Locale, string> = { en: "English", ar: "العربية", fr: "Français" };
const localePrefix: Record<Locale, string> = { en: "", ar: "/ar", fr: "/fr" };

function localeOf(path: string): Locale {
  if (path === "/ar" || path.startsWith("/ar/")) return "ar";
  if (path === "/fr" || path.startsWith("/fr/")) return "fr";
  return "en";
}
function stripLocale(path: string, locale: Locale) {
  if (locale === "en") return path;
  const prefix = localePrefix[locale];
  return path === prefix ? "/" : path.replace(prefix, "") || "/";
}
function toLocale(enPath: string, locale: Locale) {
  if (locale === "en") return enPath;
  const prefix = localePrefix[locale];
  return enPath === "/" ? prefix : `${prefix}${enPath}`;
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const path = useRouterState({ select: (s) => s.location.pathname });
  const locale = localeOf(path);
  const isArabic = locale === "ar";
  const enPath = stripLocale(path, locale);
  const otherLocales = (["en", "ar", "fr"] as const).filter((l) => l !== locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = isArabic ? "rtl" : "ltr";
  }, [locale, isArabic, path]);

  const t = (en: string, ar: string, fr: string) => (locale === "ar" ? ar : locale === "fr" ? fr : en);

  return (
    <div className="min-h-screen bg-background text-foreground" dir={isArabic ? "rtl" : "ltr"} lang={locale}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "GULFWELLBEING",
        description: "Private wellbeing advisory and coaching for individuals, families and executives across the Gulf and internationally.",
        founder: {
          "@type": "Person",
          name: "Sourour Tarkan",
          jobTitle: "Private Wellbeing Advisor & Coach",
          knowsAbout: ["Private wellbeing advisory", "Wellbeing coaching", "Reiki", "Executive wellbeing", "Women's wellbeing", "Men's wellbeing"],
        },
        areaServed: ["United Arab Emirates", "Saudi Arabia", "Qatar", "Kuwait", "Bahrain", "Oman"],
        serviceType: ["Private Wellbeing Advisory", "Wellbeing Coaching", "Executive Wellbeing", "Women's Wellbeing", "Men's Wellbeing"],
      }) }} />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/95">
        <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <Link to={toLocale("/", locale) as any} aria-label="GULFWELLBEING home"><BrandMark /></Link>
          <div className="hidden items-center gap-6 lg:flex" dir="ltr">
            <nav className="flex items-center gap-3" dir={isArabic ? "rtl" : "ltr"} aria-label={t("Main navigation", "التنقل الرئيسي", "Navigation principale")}>
              {nav.map((item, i) => (
                <a key={item.label} href={toLocale(item.to, locale)}
                  className={item.label === "Book" ? "nav-book" : "nav-link"}>
                  {t(item.label, item.ar, item.fr)}
                </a>
              ))}
            </nav>
            <div className="flex shrink-0 items-center gap-2 border-s border-border ps-4 text-xs" dir="ltr">
              <Languages className="size-4 text-muted-foreground" />
              {otherLocales.map((l, i) => (
                <span key={l}>
                  {i > 0 && <span className="mx-1 text-muted-foreground">·</span>}
                  <a href={toLocale(enPath, l)} className="nav-link" aria-label={`Switch to ${localeLabel[l]}`}>{localeLabel[l]}</a>
                </span>
              ))}
            </div>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" dir="ltr" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen(!open)}>
            {open ? <X /> : <Menu />}
          </Button>
{open && (
          <div className="fixed inset-0 top-20 z-40 bg-primary px-6 py-10 text-primary-foreground lg:hidden overflow-y-auto">
            <nav className="flex flex-col" aria-label={t("Mobile navigation", "التنقل", "Navigation mobile")}>
              {nav.map((item, i) => (
                <a key={item.label} href={toLocale(item.to, locale)} onClick={() => setOpen(false)}
                  className="border-b border-primary-foreground/15 py-4 font-serif text-3xl">
                  {String(i + 1).padStart(2, "0")} <span className="ms-4">{t(item.label, item.ar, item.fr)}</span>
                </a>
              ))}
              <div className="mt-6 flex flex-wrap items-center gap-4 py-4 text-gold">
                <Languages className="size-5" />
                {otherLocales.map((l) => (
                  <a key={l} href={toLocale(enPath, l)} onClick={() => setOpen(false)}>{localeLabel[l]}</a>
                ))}
              </div>
            </nav>
          </div>
        )}
        </div>
      </header>

      <main className="pt-20">{children}</main>
<a href="https://wa.me/?text=Hello%20Sourour%20Tarkan%2C%20I%20would%20like%20to%20make%20a%20private%20wellbeing%20enquiry." target="_blank" rel="noreferrer" aria-label={t("Contact via WhatsApp", "تواصل عبر واتساب", "Contacter via WhatsApp")} className="fixed bottom-5 end-5 z-50 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[.12em] text-primary-foreground shadow-xl transition-transform hover:-translate-y-1">
  <svg viewBox="0 0 32 32" aria-hidden="true" className="size-5 shrink-0" fill="#25D366">
    <path d="M16 3.2a12.8 12.8 0 0 0-10.9 19.5L3.2 28.8l6.3-1.8A12.8 12.8 0 1 0 16 3.2Zm0 23.1c-2.2 0-4.3-.7-6-2l1.1-3.6-.3-.4A10.2 10.2 0 1 1 16 26.3Zm5.6-7.5c-.3-.2-1.8-.9-2.1-1s-.5-.2-.7.2-.8 1-1 1.2-.4.2-.7.1a8.3 8.3 0 0 1-2.4-1.5 9 9 0 0 1-1.7-2.1c-.2-.3 0-.5.2-.7l.5-.6c.2-.2.2-.4.3-.6.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1-1.1 2.5s1.1 2.9 1.2 3.1c.2.2 2.2 3.4 5.4 4.8.8.4 1.4.6 2 0.1.7-.1 1.8-.7 2-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4Z"/>
  </svg>
  <span>WhatsApp</span>
</a>

      <footer className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-16 md:grid-cols-[1.4fr_1fr_1fr] lg:px-12">
          <div>
            <BrandMark />
            <p className="mt-8 max-w-sm text-sm leading-7 text-primary-foreground/65">
              {t(
                "Private wellbeing advisory for individuals, families and executives across the Gulf and internationally.",
                "استشارات رفاه خاصة للأفراد والعائلات والقيادات في الخليج ودولياً.",
                "Conseil privé en bien-être pour particuliers, familles et dirigeants, dans le Golfe et à l'international."
              )}
            </p>
          </div>
          <div>
            <p className="eyebrow text-gold">{t("Navigate", "التنقل", "Navigation")}</p>
            <div className="mt-5 grid grid-cols-2 gap-3 text-sm">
              {nav.map((n) => <a key={n.label} href={toLocale(n.to, locale)}>{t(n.label, n.ar, n.fr)}</a>)}
            </div>
          </div>
          <div>
            <p className="eyebrow text-gold">{t("Private enquiries", "طلب خاص", "Demande privée")}</p>
            <p className="mt-5 text-sm leading-7 text-primary-foreground/65">
              {t(
                "Private enquiries for wellbeing advisory, executive support and VIP concierge arrangements are welcomed by request.",
                "الطلبات الخاصة باستشارات الرفاه والدعم التنفيذي وترتيبات VIP مرحب بها عبر طلب خاص.",
                "Les demandes privées de conseil en bien-être, d'accompagnement de dirigeants et de service VIP sont les bienvenues sur simple demande."
              )}
            </p>
            <a href={toLocale("/book", locale)} className="mt-6 inline-flex items-center gap-2 text-sm text-gold">
              {t("Private enquiry", "طلب جلسة خاصة", "Demande privée")} <ArrowUpRight className="size-4"/>
            </a>
          </div>
        </div>
        <div className="border-t border-primary-foreground/10 px-6 py-5 text-xs text-primary-foreground/50">
          <div className="mx-auto flex max-w-[1440px] flex-wrap justify-between gap-4">
            <span>© {new Date().getFullYear()} GULFWELLBEING</span>
            <span>
              <a href={toLocale("/privacy", locale)}>{t("Privacy Policy", "الخصوصية", "Confidentialité")}</a> ·{" "}
              <a href={toLocale("/terms", locale)}>{t("Terms & Conditions", "الشروط", "Conditions générales")}</a>
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
