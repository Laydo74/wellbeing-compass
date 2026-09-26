import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FaqItem = { question: string; answer: string };

const englishFaq: FaqItem[] = [
  { question: "What is private wellbeing advisory?", answer: "Private wellbeing advisory is a confidential space to reflect on pressure, relationships, life transitions, leadership and personal wellbeing. Sessions are shaped around the individual rather than a fixed programme." },
  { question: "Who is GULFWELLBEING for?", answer: "GULFWELLBEING works with private clients, women, men, families, founders, executives and senior professionals across the Gulf and internationally." },
  { question: "Are sessions confidential?", answer: "Discretion is central to the experience. Conversations are private and the focus, pace and format are shaped around the client." },
  { question: "Is this therapy or medical treatment?", answer: "GULFWELLBEING provides wellbeing advisory and coaching, not medical diagnosis or treatment. Where a situation requires clinical or medical care, an appropriate qualified professional should be consulted." },
  { question: "Can Reiki be part of a session?", answer: "Where appropriate and welcomed by the client, Reiki and other holistic wellbeing practices may form part of the work. Sourour Tarkan is a Reiki Master." },
  { question: "How do I begin?", answer: "Start with a private enquiry. The first conversation is an opportunity to understand your needs and see whether the approach is appropriate for you." },
];

const arabicFaq: FaqItem[] = [
  { question: "ما المقصود باستشارات الرفاه الخاصة؟", answer: "هي مساحة خاصة وسرية للتفكير في الضغوط، العلاقات، التحولات الحياتية، القيادة والرفاه الشخصي، مع بناء الحوار حول احتياجات الشخص بدلاً من برنامج ثابت." },
  { question: "لمن تناسب GULFWELLBEING؟", answer: "تعمل GULFWELLBEING مع الأفراد والنساء والرجال والعائلات والمؤسسين والمديرين والقيادات في الخليج ودولياً." },
  { question: "هل الجلسات سرية؟", answer: "الخصوصية جزء أساسي من التجربة. يتم احترام خصوصية العميل، كما يتم تحديد إيقاع الجلسات وتركيزها بما يتناسب مع ظروفه." },
  { question: "هل هذه جلسات علاج نفسي أو طبي؟", answer: "تقدم GULFWELLBEING استشارات الرفاه والتدريب، وليست بديلاً عن التشخيص أو العلاج الطبي. عند الحاجة إلى رعاية سريرية أو طبية، ينبغي الرجوع إلى مختص مؤهل." },
  { question: "هل يمكن أن تتضمن الجلسة Reiki؟", answer: "عندما يكون ذلك مناسباً ومطلوباً من العميل، يمكن أن تدخل Reiki وممارسات الرفاه الشمولي ضمن العمل. سرور طركان هي Reiki Master." },
  { question: "كيف أبدأ؟", answer: "يمكنك إرسال طلب خاص. المحادثة الأولى فرصة لفهم احتياجاتك ومعرفة ما إذا كانت المقاربة مناسبة لك." },
];

const frenchFaq: FaqItem[] = [
  { question: "Qu'est-ce qu'un conseil privé en bien-être ?", answer: "Un espace confidentiel pour réfléchir à la pression, aux relations, aux transitions de vie, au leadership et au bien-être personnel. Les séances sont construites autour de la personne plutôt que d'un programme figé." },
  { question: "À qui s'adresse GULFWELLBEING ?", answer: "GULFWELLBEING accompagne des clients privés, femmes, hommes, familles, fondateurs, dirigeants et cadres supérieurs dans le Golfe et à l'international." },
  { question: "Les séances sont-elles confidentielles ?", answer: "La discrétion est au cœur de l'expérience. Les échanges sont privés, et le rythme, le format et le contenu sont adaptés à chaque client." },
  { question: "S'agit-il de thérapie ou d'un traitement médical ?", answer: "GULFWELLBEING propose du conseil en bien-être et du coaching, non un diagnostic ou un traitement médical. Lorsqu'une situation requiert des soins cliniques ou médicaux, il convient de consulter un professionnel qualifié." },
  { question: "Le Reiki peut-il faire partie d'une séance ?", answer: "Lorsque cela est pertinent et souhaité par le client, le Reiki et d'autres pratiques de bien-être holistique peuvent s'intégrer au travail. Sourour Tarkan est Reiki Master." },
  { question: "Comment commencer ?", answer: "Commencez par une demande privée. Le premier échange permet de comprendre vos besoins et de vérifier que l'approche vous convient." },
];

export function FaqSection({ isArabic = false, locale }: { isArabic?: boolean; locale?: "en" | "ar" | "fr" }) {
  const [open, setOpen] = useState<number | null>(null);
  const resolvedLocale = locale ?? (isArabic ? "ar" : "en");
  const items = resolvedLocale === "ar" ? arabicFaq : resolvedLocale === "fr" ? frenchFaq : englishFaq;
  const isArabicResolved = resolvedLocale === "ar";
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
  return (
    <section className="bg-background px-5 py-20 lg:px-10 lg:py-28" dir={isArabicResolved ? "rtl" : "ltr"}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-[.7fr_1.3fr]">
        <div>
          <p className="eyebrow text-gold">{isArabicResolved ? "الأسئلة الشائعة" : resolvedLocale === "fr" ? "FAQ" : "FAQ"}</p>
          <h2 className="mt-4 font-serif text-5xl leading-[1.05] sm:text-7xl">{isArabicResolved ? "قبل أن تبدأ." : resolvedLocale === "fr" ? "Avant de commencer." : "Before you begin."}</h2>
          <p className="mt-6 max-w-md leading-7 text-muted-foreground">{isArabicResolved ? "إجابات واضحة عن طبيعة الاستشارات، الخصوصية وكيفية بدء المحادثة." : resolvedLocale === "fr" ? "Des réponses claires sur l'approche de conseil, la confidentialité et la manière de commencer." : "Clear answers about the advisory approach, privacy and how to begin."}</p>
        </div>
        <div className="border-t border-border">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.question} className="border-b border-border">
                <button type="button" onClick={() => setOpen(isOpen ? null : i)} aria-expanded={isOpen} className="flex w-full items-center justify-between gap-6 py-6 text-start">
                  <span className="font-serif text-2xl">{item.question}</span>
                  <ChevronDown className={`size-5 shrink-0 text-gold transition-transform ${isOpen ? "rotate-180" : ""}`} />
                </button>
                {isOpen && <p className="max-w-3xl pb-6 leading-7 text-muted-foreground">{item.answer}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
