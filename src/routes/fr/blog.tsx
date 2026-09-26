import { createFileRoute, Link, useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import stillLife from "@/assets/private-still-life.jpg";

export const Route = createFileRoute("/fr/blog")({
  head: (ctx) => pageHeadFor(ctx, "Le Blog Privé | GULFWELLBEING", "Réflexions originales sur le bien-être privé, les relations, le leadership, la pression exécutive et les transitions de vie, dans le Golfe et à l'international.", "/fr/blog"),
  component: Page,
});

type ArticleProps = { eyebrow: string; title: string; description: string; sections: [string, string][]; faqs: [string, string][] };

function FrArticle({ eyebrow, title, description, sections, faqs }: ArticleProps) {
  const origin = typeof window !== "undefined" ? window.location.origin : "";
  const canonical = origin ? origin + window.location.pathname : window.location.pathname;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    inLanguage: "fr",
    author: { "@type": "Person", name: "Sourour Tarkan", url: origin ? origin + "/fr/about" : "/fr/about" },
    publisher: { "@type": "Organization", name: "GULFWELLBEING" },
    mainEntityOfPage: { "@type": "WebPage", "@id": canonical },
    image: origin ? [origin + "/images/sourour-tarkan-home.jpg"] : ["/images/sourour-tarkan-home.jpg"],
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map(([q, a]) => ({ "@type": "Question", name: q, acceptedAnswer: { "@type": "Answer", text: a } })),
  };
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: origin ? origin + "/fr" : "/fr" },
      { "@type": "ListItem", position: 2, name: "Blog", item: origin ? origin + "/fr/blog" : "/fr/blog" },
      { "@type": "ListItem", position: 3, name: title, item: canonical },
    ],
  };
  return (
    <SiteShell>
      <article>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <header className="page-hero"><div className="mx-auto max-w-4xl px-6 py-24 lg:px-12 lg:py-32"><p className="eyebrow text-gold">{eyebrow}</p><h1 className="mt-6 font-serif text-5xl leading-tight md:text-7xl">{title}</h1><p className="mt-7 max-w-3xl text-base leading-7 text-muted-foreground">{description}</p></div></header>
        <figure className="mx-auto max-w-6xl px-6 pt-10 lg:px-12 lg:pt-16">
          <img src={stillLife} width={1408} height={1008} alt={title + " — Blog privé GULFWELLBEING"} className="h-[38vh] w-full object-cover lg:h-[52vh]" loading="eager" />
          <figcaption className="mt-3 text-xs uppercase tracking-[.16em] text-muted-foreground">GULFWELLBEING · Blog privé du bien-être</figcaption>
        </figure>
        <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-[1fr_.32fr] lg:px-12 lg:py-28">
          <div className="space-y-14">
            {sections.map((s) => (
              <section key={s[0]}><h2 className="font-serif text-3xl md:text-4xl">{s[0]}</h2><p className="mt-5 text-base leading-7 text-muted-foreground">{s[1]}</p></section>
            ))}
            <section className="border-t border-border pt-12"><p className="eyebrow text-gold">FAQ</p><h2 className="mt-4 font-serif text-4xl">Questions fréquentes</h2><div className="mt-8 divide-y divide-border">{faqs.map(([q, a]) => <details key={q} className="py-5"><summary className="cursor-pointer font-medium">{q}</summary><p className="mt-3 max-w-3xl text-base leading-7 text-muted-foreground">{a}</p></details>)}</div></section>
            <section className="border-t border-border pt-10"><p className="eyebrow text-gold">DEMANDE PRIVÉE</p><h2 className="mt-4 font-serif text-4xl">Si cela reflète ce que vous traversez, une conversation privée peut être la prochaine étape.</h2><Link to="/fr/book" className="button-gold mt-7">Demander une consultation privée <ArrowRight className="size-4" /></Link></section>
          </div>
          <aside className="lg:border-s lg:border-border lg:ps-10">
            <p className="eyebrow text-gold">EXPLORER</p>
            <div className="mt-5 space-y-4">
              <Link to="/fr/wellbeing" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être personnel<ArrowRight className="size-4" /></Link>
              <Link to="/fr/women" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être des femmes<ArrowRight className="size-4" /></Link>
              <Link to="/fr/men" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être des hommes<ArrowRight className="size-4" /></Link>
              <Link to="/fr/business" className="flex items-center justify-between border-b border-border pb-4 text-sm">Bien-être en entreprise<ArrowRight className="size-4" /></Link>
              <Link to="/fr/the-tarkan-approach" className="flex items-center justify-between border-b border-border pb-4 text-sm">L'Approche Tarkan<ArrowRight className="size-4" /></Link>
            </div>
          </aside>
        </div>
      </article>
    </SiteShell>
  );
}

const articles: Record<string, ArticleProps> = {
  "conseil-prive-bien-etre-golfe": {
    eyebrow: "CONSEIL PRIVÉ EN BIEN-ÊTRE",
    title: "Le conseil privé en bien-être dans le Golfe : ce qu'une approche plus personnelle peut offrir",
    description: "Une introduction posée au conseil privé en bien-être pour les personnes et les familles qui mènent une vie personnelle ou professionnelle exigeante.",
    sections: [
      ["Un accompagnement différent", "Le conseil privé en bien-être ne repose pas sur un programme standard. Il commence par le contexte de la personne : les responsabilités qu'elle porte, les relations qui comptent, les changements en cours et les zones où davantage de clarté serait utile."],
      ["Pourquoi la confidentialité compte", "Pour les dirigeants, entrepreneurs, familles et personnalités publiques, pouvoir parler sans jouer un rôle a une réelle valeur. Une relation de conseil discrète crée un espace pour examiner la pression, les limites, les décisions et les priorités personnelles, loin des exigences du quotidien."],
      ["Ce que les séances peuvent explorer", "Selon le sujet convenu, les échanges peuvent porter sur le stress, l'équilibre émotionnel, les relations, la confiance en soi, les transitions de vie, la pleine conscience ou le bien-être holistique. L'accent est mis sur la personne plutôt que sur une formule figée."],
      ["Le contexte du Golfe compte", "Les clients vivant à Dubaï, Abou Dhabi, Doha, Riyad, Djeddah, Koweït City, Manama ou Mascate peuvent composer avec des carrières internationales, des relations familiales élargies, des déplacements fréquents et des emplois du temps très chargés. Une conversation utile a donc besoin de contexte : il ne s'agit pas d'imposer une routine de bien-être générique, mais de comprendre la vie réelle de la personne et ce qu'elle souhaite y changer."],
    ],
    faqs: [
      ["Qu'est-ce que le conseil privé en bien-être ?", "C'est un espace confidentiel et personnalisé pour explorer le bien-être, la clarté, les relations, le changement personnel et les réalités d'une vie exigeante."],
      ["À qui s'adresse le conseil privé en bien-être ?", "Il peut concerner des particuliers, des familles, des dirigeants, des entrepreneurs et toute personne qui accorde de la valeur à la discrétion et à une approche très individuelle."],
      ["Les séances peuvent-elles se dérouler à distance dans le Golfe ?", "Oui. Une relation de conseil privée peut être organisée à distance pour des clients dans tout le Golfe et à l'international."],
      ["Le conseil en bien-être remplace-t-il un suivi médical ou psychologique ?", "Non. Lorsqu'un suivi clinique, médical ou psychologique est nécessaire, des professionnels qualifiés doivent être impliqués."],
    ],
  },
  "stress-epuisement-dirigeants": {
    eyebrow: "BIEN-ÊTRE EXÉCUTIF",
    title: "Stress et épuisement chez les dirigeants",
    description: "Créer de l'espace avant qu'une pression soutenue ne prenne le dessus.",
    sections: [
      ["Quand la haute performance devient un état permanent", "La pression exécutive peut être difficile à reconnaître précisément parce que tout continue de fonctionner : les réunions ont lieu, les décisions sont prises, les responsabilités sont assumées, tandis que le repos, les relations et l'attention personnelle reçoivent progressivement moins de place."],
      ["La différence entre pression et recul", "Une conversation privée sur le bien-être peut créer une distance avec les exigences immédiates du leadership. Cette distance permet d'examiner ce qui est réellement nécessaire, ce qui est devenu une habitude et où les limites se sont estompées."],
      ["Le bien-être exécutif dans le Golfe", "Les dirigeants du Golfe évoluent souvent entre plusieurs cultures, fuseaux horaires et réseaux professionnels. La croissance des affaires, les engagements familiaux, les déplacements et l'attente d'une disponibilité constante peuvent créer un environnement particulièrement dense."],
      ["Au-delà de la productivité", "Le bien-être ne devrait pas se réduire à un indicateur de performance supplémentaire. Une relation de conseil privée peut explorer la personne derrière le rôle : les relations, l'identité, l'équilibre émotionnel, les priorités personnelles et la capacité à vivre pleinement en dehors du travail."],
    ],
    faqs: [
      ["Que peut explorer le conseil privé en bien-être exécutif ?", "Il peut explorer la pression continue, les limites, la fatigue décisionnelle, les relations, les priorités personnelles et l'aspect humain du leadership."],
      ["Le bien-être exécutif ne concerne-t-il que la productivité ?", "Non. L'approche considère aussi la personne derrière le rôle : relations, identité, équilibre émotionnel et vie en dehors du travail."],
      ["Les dirigeants dans le Golfe peuvent-ils travailler à distance avec une conseillère ?", "Oui. Des séances privées à distance peuvent assurer une continuité pour les dirigeants qui voyagent ou travaillent entre plusieurs pays du Golfe et à l'international."],
      ["Quand faut-il consulter un professionnel de santé clinique ?", "Si des symptômes ou des préoccupations nécessitent un diagnostic ou un traitement, des professionnels médicaux ou de santé mentale qualifiés doivent prendre le relais."],
    ],
  },
  "bien-etre-femmes-golfe": {
    eyebrow: "BIEN-ÊTRE DES FEMMES",
    title: "Le bien-être des femmes dans le Golfe",
    description: "Identité, relations, vie de famille, confiance et transitions.",
    sections: [
      ["Les multiples dimensions du bien-être des femmes", "Le bien-être des femmes peut mobiliser plusieurs réalités à la fois : identité professionnelle, vie de famille, couple, maternité, confiance en soi, attentes et aspirations personnelles. Dans les communautés du Golfe, ces dimensions peuvent être influencées par les structures familiales, la culture et les responsabilités sociales."],
      ["Un espace qui appartient à la personne", "De nombreuses femmes passent une grande partie de leur temps à répondre aux besoins des autres. Une séance privée peut offrir autre chose : un temps délibérément centré sur la personne elle-même, pour explorer la confiance, l'équilibre émotionnel, les limites, les relations ou les transitions."],
      ["Des femmes menant des vies internationales exigeantes", "Pour les femmes qui se déplacent entre les villes du Golfe, une carrière internationale et des engagements familiaux, la continuité peut être particulièrement précieuse. Une relation de conseil privée à distance peut offrir un espace de réflexion constant, même lorsque les routines et les lieux changent."],
      ["Maternité, identité et changement", "La maternité peut apporter du sens et de l'amour tout en modifiant le temps, l'identité et les attentes. Les conversations privées sur le bien-être peuvent explorer la tension entre prendre soin des autres et préserver un sentiment de soi."],
    ],
    faqs: [
      ["Que peuvent explorer les séances de bien-être des femmes ?", "Les sujets peuvent inclure la confiance en soi, les relations, la maternité, les limites, l'équilibre émotionnel, les transitions et les priorités personnelles."],
      ["L'approche est-elle spécifique aux femmes vivant dans le Golfe ?", "L'approche tient compte des réalités de la vie dans le Golfe tout en restant individuelle ; aucune expérience culturelle ou familiale unique n'est présumée."],
      ["Les mères peuvent-elles disposer d'un espace privé pour elles-mêmes ?", "Oui. Une séance peut offrir un temps dédié pour considérer son identité, ses besoins et ses priorités, aux côtés des responsabilités de la maternité."],
      ["Les séances sont-elles confidentielles ?", "Le service est conçu comme une relation de conseil privée et discrète, avec des limites professionnelles appropriées."],
    ],
  },
  "bien-etre-prive-dubai": {
    eyebrow: "BIEN-ÊTRE PRIVÉ À DUBAÏ",
    title: "Bien-être privé à Dubaï : une approche personnalisée et confidentielle",
    description: "Comprendre le conseil privé en bien-être à Dubaï pour les personnes qui recherchent discrétion, personnalisation et accompagnement à distance.",
    sections: [
      ["Pourquoi une approche privée ?", "Une vie internationale peut réunir responsabilités professionnelles, famille, voyages et engagements sociaux. Un espace privé permet de prendre du recul sans ajouter un programme standard à un agenda déjà chargé."],
      ["Une approche conçue autour de la personne", "Le conseil privé commence par le contexte individuel : objectifs, rythme, priorités et réalités personnelles. Les séances sont adaptées plutôt que déroulées selon un parcours identique pour tous."],
      ["Dubaï et les vies internationales", "Dubaï est un environnement où les personnes peuvent travailler avec plusieurs marchés et vivre entre plusieurs pays. La continuité d'un accompagnement en ligne peut donc être particulièrement pratique."],
      ["Confidentialité et discrétion", "Pour les dirigeants, entrepreneurs, familles et particuliers qui accordent de la valeur à leur vie privée, la discrétion fait partie de l'expérience dès la première demande."],
    ],
    faqs: [
      ["Le conseil privé en bien-être est-il disponible à Dubaï ?", "Oui. Les séances peuvent être organisées à distance pour les clients à Dubaï et dans les autres villes du Golfe."],
      ["Les séances sont-elles personnalisées ?", "Oui. Le contenu, le rythme et la fréquence sont déterminés selon les besoins et les objectifs du client."],
      ["Le service remplace-t-il un suivi médical ?", "Non. Lorsqu'un suivi clinique est nécessaire, un professionnel de santé qualifié doit intervenir."],
      ["Puis-je demander une consultation privée ?", "Oui, une demande peut être envoyée via la page de consultation privée."],
    ],
  },
  "bien-etre-dirigeants-golfe": {
    eyebrow: "BIEN-ÊTRE EXÉCUTIF",
    title: "Bien-être des dirigeants dans le Golfe : créer de l'espace pour décider avec clarté",
    description: "Conseil privé en bien-être pour dirigeants, fondateurs et cadres supérieurs confrontés à la pression, aux décisions et à une responsabilité constante dans le Golfe.",
    sections: [
      ["Le poids de la responsabilité", "Un dirigeant peut porter simultanément des décisions stratégiques, des équipes, des résultats, des relations professionnelles et des responsabilités familiales. Cette accumulation mérite parfois un espace séparé du rôle."],
      ["Clarté avant action", "Une conversation privée peut permettre de distinguer ce qui est réellement urgent de ce qui est devenu une habitude, avant de décider ce qui doit évoluer."],
      ["Le contexte des marchés du Golfe", "Dubaï, Abou Dhabi, Riyad, Djeddah, Doha, Koweït, Manama et Mascate réunissent des environnements professionnels différents. L'accompagnement reste donc centré sur la situation réelle du dirigeant."],
      ["Le dirigeant derrière le titre", "Le leadership n'épuise pas l'identité d'une personne. Les relations, la famille, la santé du quotidien, les valeurs et la vie personnelle peuvent aussi entrer dans une conversation de bien-être."],
    ],
    faqs: [
      ["À qui s'adresse le bien-être exécutif privé ?", "Aux fondateurs, dirigeants, cadres supérieurs et professionnels qui souhaitent un espace confidentiel autour de la pression et de la responsabilité."],
      ["Les séances concernent-elles uniquement le travail ?", "Non. L'approche peut également considérer les relations, la famille, les limites, l'identité et la vie en dehors du travail."],
      ["Les séances peuvent-elles être suivies en voyage ?", "Oui, des séances à distance peuvent soutenir les personnes qui se déplacent régulièrement."],
      ["Est-ce du traitement psychologique ?", "Non. Il s'agit de conseil privé en bien-être et non d'un traitement clinique."],
    ],
  },
  "gestion-stress-vie-exigeante": {
    eyebrow: "GESTION DU STRESS",
    title: "Gérer le stress dans une vie exigeante : retrouver une perspective",
    description: "Une réflexion sur le stress, les limites et la récupération pour les personnes menant une vie professionnelle et personnelle particulièrement dense.",
    sections: [
      ["Quand le stress devient normal", "Le stress prolongé peut devenir tellement familier qu'il cesse d'être identifié comme un signal. Les rendez-vous continuent, les décisions sont prises et la disponibilité reste constante."],
      ["Observer les schémas", "Plutôt que de chercher une solution universelle, il peut être utile d'identifier les situations qui déclenchent la pression, les habitudes de disponibilité et les moments où les limites disparaissent."],
      ["Le rôle des limites", "Les limites ne consistent pas à tout arrêter. Elles peuvent simplement clarifier ce qui doit recevoir une attention immédiate et ce qui peut attendre."],
      ["Une approche personnalisée", "Le rythme de vie, les responsabilités et les ressources diffèrent d'une personne à l'autre. L'accompagnement doit donc rester adapté au contexte."],
    ],
    faqs: [
      ["Le conseil en bien-être peut-il aider à réfléchir au stress ?", "Oui. Il peut offrir un espace pour comprendre les sources de pression, les habitudes et les priorités personnelles."],
      ["Le stress est-il toujours un problème médical ?", "Pas nécessairement. Toutefois, des symptômes persistants ou préoccupants doivent être évalués par un professionnel de santé qualifié."],
      ["Les dirigeants du Golfe peuvent-ils consulter à distance ?", "Oui, les séances en ligne permettent d'accompagner des clients dans plusieurs pays."],
      ["Les conseils sont-ils standardisés ?", "Non. L'approche est construite autour de la situation individuelle."],
    ],
  },
  "bien-etre-hommes-golfe": {
    eyebrow: "BIEN-ÊTRE DES HOMMES",
    title: "Bien-être des hommes dans le Golfe : au-delà de la responsabilité",
    description: "Une approche privée du bien-être des hommes autour de la pression professionnelle, de la famille, de la paternité, du leadership et de la confiance.",
    sections: [
      ["L'homme derrière les responsabilités", "Être celui sur qui les autres comptent peut laisser peu de place à l'examen de ses propres besoins. Un espace privé permet de considérer la personne derrière le rôle."],
      ["Paternité et vie de famille", "La paternité peut apporter sens et responsabilité tout en modifiant le temps, l'énergie et l'identité. Une conversation privée peut aider à remettre ces dimensions en perspective."],
      ["Leadership et pression", "Le leadership demande des décisions et une disponibilité importantes. Le bien-être peut aussi concerner les limites, les relations et la capacité à rester présent en dehors du travail."],
      ["Une approche sans modèle imposé", "Il n'existe pas une seule manière de vivre le rôle d'homme, de père ou de dirigeant. Le contexte individuel reste le point de départ."],
    ],
    faqs: [
      ["Quels sujets peuvent être abordés ?", "La pression, la paternité, les relations, la confiance, le leadership, les limites et les transitions peuvent être explorés."],
      ["L'approche suppose-t-elle un modèle de masculinité ?", "Non. Elle part de la situation et des priorités de chaque client."],
      ["Les séances sont-elles confidentielles ?", "Le service est conçu comme une relation de conseil privée et discrète."],
      ["Les séances sont-elles disponibles dans le Golfe ?", "Oui, notamment à distance pour les clients des principaux pays du Golfe."],
    ],
  },
  "relations-famille-golfe": {
    eyebrow: "RELATIONS & FAMILLE",
    title: "Relations et vie de famille dans le Golfe : créer un espace pour réfléchir",
    description: "Conseil privé autour des relations, de la communication, des limites et des responsabilités familiales dans le contexte du Golfe.",
    sections: [
      ["Les relations sont contextuelles", "Les relations proches sont influencées par l'histoire commune, les attentes, les responsabilités et les habitudes de communication. Comprendre le contexte précède souvent toute décision."],
      ["Famille et responsabilités", "La famille peut être une source de soutien et de responsabilité en même temps. Les attentes peuvent se croiser avec le travail, le couple, les enfants et la famille élargie."],
      ["Les limites sans rupture", "Une limite peut simplement clarifier un besoin, une disponibilité ou une responsabilité. Elle ne signifie pas nécessairement prendre de la distance avec les personnes importantes."],
      ["Un espace individuel", "Le conseil privé ne remplace pas une thérapie familiale ou conjugale lorsque celle-ci est nécessaire. Il offre un espace individuel de réflexion."],
    ],
    faqs: [
      ["Les relations familiales peuvent-elles être abordées ?", "Oui, lorsqu'elles font partie du contexte personnel que le client souhaite examiner."],
      ["L'approche est-elle spécifique aux familles du Golfe ?", "Elle tient compte du contexte sans supposer que toutes les familles ont la même structure ou les mêmes attentes."],
      ["Est-ce une thérapie familiale ?", "Non. Si une thérapie familiale ou conjugale est nécessaire, un professionnel qualifié doit être consulté."],
      ["Les séances peuvent-elles être suivies à distance ?", "Oui."],
    ],
  },
  "transitions-vie-golfe": {
    eyebrow: "TRANSITIONS DE VIE",
    title: "Transitions de vie dans le Golfe : retrouver de la clarté dans un nouveau chapitre",
    description: "Changement de carrière, mariage, parentalité, déménagement ou nouvelle responsabilité : une approche privée pour traverser les transitions avec davantage de perspective.",
    sections: [
      ["Une transition n'est pas toujours une crise", "Une promotion, un mariage, un déménagement ou la création d'une entreprise peuvent être souhaités tout en soulevant de nouvelles questions."],
      ["Quand l'identité évolue", "Lorsque les rôles changent, l'image que l'on a de soi peut évoluer elle aussi. Une période de réflexion permet de distinguer ce qui doit rester de ce qui demande à être redéfini."],
      ["Entre le Golfe et l'international", "Les personnes qui vivent entre plusieurs villes ou pays peuvent connaître plusieurs transitions simultanées. L'accompagnement doit tenir compte de cette réalité mobile."],
      ["Une étape à la fois", "La clarté ne nécessite pas toujours un grand plan. Identifier la prochaine étape significative peut suffire à retrouver un sentiment de direction."],
    ],
    faqs: [
      ["Quelles transitions peuvent être abordées ?", "Les changements professionnels, familiaux, relationnels, géographiques et identitaires peuvent faire partie de la conversation."],
      ["L'accompagnement donne-t-il des décisions toutes faites ?", "Non. L'objectif est de créer un espace de réflexion adapté au contexte du client."],
      ["Est-ce disponible dans tout le Golfe ?", "Oui, les séances en ligne permettent une continuité internationale."],
      ["Les changements de vie sont-ils traités médicalement ?", "Non. Pour toute question clinique, un professionnel de santé qualifié doit être consulté."],
    ],
  },

};

function Page() {
  const location = useLocation();
  const slug = location.pathname.startsWith("/fr/blog/") ? location.pathname.split("/").filter(Boolean)[2] : "";
  const article = articles[slug];
  if (article) return <FrArticle {...article} />;

  return (
    <SiteShell>
      <section className="page-hero">
        <div className="mx-auto grid min-h-[68vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
          <div>
            <p className="eyebrow text-gold">LE BLOG</p>
            <h1 className="mt-6 font-serif text-6xl md:text-8xl">Des perspectives pour une vie plus posée.</h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground">Réflexions occasionnelles sur le bien-être, les relations, le leadership, le changement personnel et les réalités d'une vie exigeante.</p>
          </div>
          <img src={stillLife} width={1408} height={1008} alt="Un blog privé et un bureau d'écriture" className="h-[50vh] w-full object-cover" />
        </div>
      </section>
      <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
        <div className="mt-2 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
          {[
            ["Le conseil privé en bien-être dans le Golfe", "Une approche personnelle pour les personnes et les familles menant une vie exigeante.", "/fr/blog/conseil-prive-bien-etre-golfe"],
            ["Stress et épuisement chez les dirigeants", "Créer de l'espace avant qu'une pression soutenue ne prenne le dessus.", "/fr/blog/stress-epuisement-dirigeants"],
            ["Le bien-être des femmes dans le Golfe", "Identité, relations, vie de famille, confiance et transitions.", "/fr/blog/bien-etre-femmes-golfe"],
          ].map(([title, text, to], i) => (
            <div key={to} className="group relative z-10 bg-background p-7 transition-colors hover:bg-secondary">
              <span className="text-xs text-gold">0{i + 1}</span>
              <Link to={to ?? "/fr/blog"} className="relative z-20 block cursor-pointer"><h2 className="mt-10 font-serif text-3xl leading-tight hover:underline">{title}</h2></Link>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">{text}</p>
              <Link to={to ?? "/fr/blog"} className="relative z-20 mt-6 inline-flex cursor-pointer items-center gap-2 text-sm">Lire l'article <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" /></Link>
            </div>
          ))}
        </div>
        <p className="mt-14 max-w-2xl text-sm leading-7 text-muted-foreground">D'autres perspectives en français — sur les relations, les transitions de vie, la pleine conscience et le leadership — sont ajoutées régulièrement au blog.</p>
      </section>
    </SiteShell>
  );
}
