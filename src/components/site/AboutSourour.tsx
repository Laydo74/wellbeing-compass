import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, LockKeyhole } from "lucide-react";
import sourourPortrait from "@/assets/sourour-tarkan-official.jpeg.asset.json";
import { SiteShell } from "@/components/site/SiteShell";

type Locale = "en" | "fr" | "ar";

const content = {
  en: {
    eyebrow: "ABOUT SOUROUR",
    title: "A quiet authority in wellbeing.",
    lead: "For over fifteen years, Sourour Tarkan has counselled the Gulf's most discerning leaders — quietly, precisely, and entirely in confidence.",
    paragraphs: [
      "Sourour Tarkan is a wellbeing advisor and holistic lifestyle coach trusted by chairmen, founders, and royal-court executives across the UAE, Saudi Arabia, Qatar, Kuwait, Oman, and Bahrain. Her practice unites evidence-based psychology with the contemplative wisdom of the region — a discipline she calls bio-harmony.",
      "Her method is deliberately unhurried. Every engagement begins with listening: to your schedule, your pressures, your family, and your ambitions. What follows is a private protocol — measured, discreet, and designed to compound over years, not weeks.",
      "She advises in Arabic, English, and French, in person across the Gulf capitals or by encrypted virtual session, always under strict non-disclosure.",
    ],
    quote: "True luxury is a clear mind, a rested body, and time that belongs to you.",
    credentialsLabel: "EXPERIENCE & PRACTICE",
    credentials: [
      "MSc Psychology — Executive Wellbeing",
      "Certified Longevity & Lifestyle Medicine Practitioner",
      "Advisor to GCC family offices & sovereign enterprises",
      "Trilingual counsel: Arabic · English · Français",
    ],
    pillarsLabel: "THE FOUR PILLARS",
    pillarsTitle: "A considered practice for demanding lives.",
    pillars: [
      ["Executive Mindfulness", "Attention training for decision-makers — calm focus, decisive clarity, and composure in the boardroom."],
      ["Holistic Vitality", "Sleep, nutrition, movement, and recovery woven into one protocol that respects your calendar."],
      ["Longevity & Bio-Harmony", "Biomarker-guided longevity practices aligned with seasonal rhythms and the Gulf climate."],
      ["Private VIP Advisory", "Discreet, at-your-side counsel for leaders and their families — under NDA, always."],
    ],
    ctaLabel: "A PRIVATE CONVERSATION",
    ctaTitle: "Begin with what matters to you.",
    ctaBody: "Every engagement is private by design and shaped around your circumstances, responsibilities, and ambitions.",
    cta: "Request a private consultation",
    href: "/book" as const,
  },
  fr: {
    eyebrow: "À PROPOS DE SOUROUR",
    title: "Une autorité tranquille du bien-être.",
    lead: "Depuis plus de quinze ans, Sourour Tarkan conseille les dirigeants les plus exigeants du Golfe — discrètement, précisément, et en toute confidentialité.",
    paragraphs: [
      "Sourour Tarkan est une conseillère en bien-être et coach de vie holistique, en qui font confiance présidents de conseils, fondateurs et cadres de cours royales aux Émirats, en Arabie saoudite, au Qatar, au Koweït, à Oman et à Bahreïn. Sa pratique unit la psychologie fondée sur les preuves à la sagesse contemplative de la région — une discipline qu'elle nomme bio-harmonie.",
      "Sa méthode se veut sans hâte. Chaque accompagnement commence par une écoute : votre agenda, vos pressions, votre famille, vos ambitions. S'ensuit un protocole privé — mesuré, discret, conçu pour porter ses fruits sur des années, non des semaines.",
      "Elle conseille en arabe, en anglais et en français, en personne dans les capitales du Golfe ou par session virtuelle chiffrée, toujours sous accord strict de non-divulgation.",
    ],
    quote: "Le vrai luxe, c'est un esprit clair, un corps reposé et un temps qui vous appartient.",
    credentialsLabel: "EXPÉRIENCE & PRATIQUE",
    credentials: [
      "MSc Psychologie — Bien-être des dirigeants",
      "Praticienne certifiée en médecine de style de vie & longévité",
      "Conseillère de family offices et entreprises souveraines du CCG",
      "Conseil trilingue : arabe · anglais · français",
    ],
    pillarsLabel: "LES QUATRE PILIERS",
    pillarsTitle: "Une pratique réfléchie pour les vies exigeantes.",
    pillars: [
      ["Pleine conscience exécutive", "L'entraînement de l'attention pour décideurs — calme, clarté décisive et sang-froid en salle du conseil."],
      ["Vitalité holistique", "Sommeil, nutrition, mouvement et récupération réunis en un protocole qui respecte votre agenda."],
      ["Longévité & bio-harmonie", "Pratiques de longévité guidées par biomarqueurs, alignées sur les saisons et le climat du Golfe."],
      ["Conseil privé VIP", "Un accompagnement discret, à vos côtés, pour les dirigeants et leurs familles — sous NDA, toujours."],
    ],
    ctaLabel: "UNE CONVERSATION PRIVÉE",
    ctaTitle: "Commencez par ce qui compte pour vous.",
    ctaBody: "Chaque accompagnement est privé par principe et façonné autour de votre situation, de vos responsabilités et de vos ambitions.",
    cta: "Demander une consultation privée",
    href: "/fr/book" as const,
  },
  ar: {
    eyebrow: "عن سرور طركان",
    title: "مرجعية هادئة في عالم الرفاه.",
    lead: "منذ أكثر من خمسة عشر عاماً، ترافق سرور طركان نخبة من قادة الخليج — بهدوء ودقة وسرية تامة.",
    paragraphs: [
      "سرور طركان مستشارة رفاه ومدرّبة في أسلوب الحياة الشمولي، تحظى بثقة رؤساء مجالس الإدارة والمؤسسين والتنفيذيين في الإمارات والسعودية وقطر والكويت وعُمان والبحرين. تجمع ممارستها بين علم النفس القائم على الأدلة والحكمة التأملية للمنطقة، ضمن نهج تسميه الانسجام الحيوي.",
      "منهجها متأنٍ بطبيعته. يبدأ كل تعاون بالاستماع إلى جدولك وضغوطك وعائلتك وطموحاتك، ثم يتشكل بروتوكول خاص ومدروس وسري، صُمم ليُحدث أثراً يمتد لسنوات لا لأسابيع.",
      "تقدم استشاراتها بالعربية والإنجليزية والفرنسية، حضورياً في عواصم الخليج أو عبر جلسات افتراضية مشفّرة، وفي إطار صارم من السرية.",
    ],
    quote: "الرفاهية الحقيقية هي صفاء الذهن، وراحة الجسد، ووقت تملكه أنت.",
    credentialsLabel: "الخبرة والممارسة",
    credentials: [
      "ماجستير علم النفس — الرفاهية التنفيذية",
      "ممارسة معتمدة في طب طول العمر ونمط الحياة",
      "مستشارة للمكاتب العائلية والمؤسسات الخليجية",
      "استشارة بثلاث لغات: العربية · الإنجليزية · الفرنسية",
    ],
    pillarsLabel: "الأركان الأربعة",
    pillarsTitle: "ممارسة مدروسة لحياة مليئة بالمسؤوليات.",
    pillars: [
      ["اليقظة الذهنية التنفيذية", "تدريب الانتباه لصُنّاع القرار — تركيز هادئ، ووضوح حاسم، ورباطة جأش في مجلس الإدارة."],
      ["الحيوية المتكاملة", "النوم والتغذية والحركة والتعافي في بروتوكول واحد يحترم جدولك."],
      ["طول العمر والانسجام الحيوي", "ممارسات طول العمر المبنية على المؤشرات الحيوية، المتوائمة مع الفصول ومناخ الخليج."],
      ["الاستشارة الخاصة لكبار الشخصيات", "مرافقة محكمة وسرية للقادة وعائلاتهم — تحت اتفاقية عدم إفصاح، دائماً."],
    ],
    ctaLabel: "محادثة خاصة",
    ctaTitle: "ابدأ بما يهمك أنت.",
    ctaBody: "كل تعاون خاص بتصميمه، ويُبنى حول ظروفك ومسؤولياتك وطموحاتك.",
    cta: "طلب استشارة خاصة",
    href: "/ar/book" as const,
  },
} as const;

export function AboutSourour({ locale }: { locale: Locale }) {
  const d = content[locale];
  const rtl = locale === "ar";
  const Arrow = rtl ? ArrowLeft : ArrowRight;

  return (
    <SiteShell>
      <main dir={rtl ? "rtl" : "ltr"}>
        <section className="page-hero border-b border-border">
          <div className="mx-auto grid min-h-[76vh] max-w-[1440px] items-stretch lg:grid-cols-[1.06fr_.94fr]">
            <div className="flex items-center px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
              <div className="reveal max-w-3xl">
                <p className="eyebrow text-gold">{d.eyebrow}</p>
                <h1 className="mt-6 font-serif text-5xl leading-[1.02] sm:text-6xl lg:text-7xl">{d.title}</h1>
                <p className="mt-8 max-w-2xl font-serif text-xl leading-8 text-foreground/80 sm:text-2xl">{d.lead}</p>
                <Link to={d.href} className="button-primary mt-9">{d.cta}<Arrow className="size-4" /></Link>
              </div>
            </div>
            <div className="min-h-[480px] overflow-hidden lg:min-h-full">
              <img src={sourourPortrait.url} alt={rtl ? "سرور طركان، مستشارة رفاه ومدربة في أسلوب الحياة الشمولي" : locale === "fr" ? "Sourour Tarkan, conseillère en bien-être et coach de vie holistique" : "Sourour Tarkan, wellbeing advisor and holistic lifestyle coach"} className="h-full min-h-[480px] w-full object-cover object-center" />
            </div>
          </div>
        </section>

        <section className="bg-primary text-primary-foreground">
          <div className="mx-auto grid max-w-[1280px] gap-12 px-6 py-16 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-24">
            <div>
              <p className="eyebrow text-gold">{d.eyebrow}</p>
              <blockquote className="mt-6 max-w-lg font-serif text-3xl leading-tight sm:text-4xl">“{d.quote}”</blockquote>
            </div>
            <div className="space-y-6 text-base leading-8 text-primary-foreground/75">
              {d.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              <div className="flex items-center gap-3 pt-2 text-sm text-primary-foreground"><LockKeyhole className="size-4 text-gold" />{rtl ? "السرية جزء من كل تعاون." : locale === "fr" ? "La confidentialité est au cœur de chaque accompagnement." : "Confidentiality is central to every engagement."}</div>
            </div>
          </div>
        </section>

        <section className="border-b border-border bg-background">
          <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-20">
            <p className="eyebrow text-gold">{d.credentialsLabel}</p>
            <div className="mt-8 grid border-y border-border md:grid-cols-2">
              {d.credentials.map((credential, index) => <div key={credential} className={`flex min-h-28 items-center gap-5 border-border py-6 md:px-8 ${index < 2 ? "border-b" : ""} ${index % 2 === 0 ? rtl ? "md:border-l" : "md:border-r" : ""}`}><span className="font-serif text-2xl text-gold">0{index + 1}</span><p className="max-w-md text-sm leading-6">{credential}</p></div>)}
            </div>
          </div>
        </section>

        <section className="bg-secondary">
          <div className="mx-auto max-w-[1280px] px-6 py-16 lg:px-12 lg:py-24">
            <p className="eyebrow text-gold">{d.pillarsLabel}</p>
            <h2 className="mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-5xl">{d.pillarsTitle}</h2>
            <div className="mt-12 grid gap-px border border-border bg-border md:grid-cols-2">
              {d.pillars.map(([title, body], index) => <article key={title} className="min-h-64 bg-background p-7 sm:p-10"><span className="font-serif text-3xl text-gold">0{index + 1}</span><h3 className="mt-8 font-serif text-3xl leading-tight">{title}</h3><p className="mt-5 max-w-lg text-sm leading-7 text-muted-foreground">{body}</p></article>)}
            </div>
          </div>
        </section>

        <section className="bg-background px-6 py-20 text-center lg:py-28">
          <p className="eyebrow text-gold">{d.ctaLabel}</p>
          <h2 className="mx-auto mt-5 max-w-3xl font-serif text-4xl leading-tight sm:text-6xl">{d.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-muted-foreground">{d.ctaBody}</p>
          <Link to={d.href} className="button-primary mt-9">{d.cta}<Arrow className="size-4" /></Link>
        </section>
      </main>
    </SiteShell>
  );
}