export type Section = { id: string; title: string; body: string; keywords?: string[] };

export const pageContent = {
  wellbeing: {
    eyebrow: "PRIVATE WELLBEING ADVISORY ACROSS THE GULF",
    title: "Private wellbeing advisory for a more considered life.",
    intro: "GULFWELLBEING offers private online wellbeing advisory and coaching for individuals navigating stress, emotional pressure, relationships, life transitions and the demands of a full life. Sessions are personal, discreet and shaped around your circumstances, wherever you are across the Gulf or internationally.",
    sections: [
      { id: "stress-burnout", title: "Stress & Burnout", body: "Sustained pressure can affect concentration, relationships, energy and the ability to feel present. Private advisory creates space to understand what is driving the pressure, identify what needs attention and consider more sustainable ways of working and living.", keywords: ["stress support", "burnout prevention", "private wellbeing coaching"] },
      { id: "emotional-balance", title: "Emotional Balance", body: "A confidential setting to reflect on difficult emotions, recurring patterns and periods when life feels harder to navigate. The focus is on greater awareness, perspective and practical next steps rather than a one-size-fits-all programme.", keywords: ["emotional wellbeing", "private coaching", "personal wellbeing"] },
      { id: "life-transitions", title: "Life Transitions", body: "Changes in career, family life, relationships, identity or personal priorities can require a different perspective. GULFWELLBEING provides considered support while you clarify what has changed, what matters now and how you want to move forward.", keywords: ["life transition coaching", "personal change", "life coaching"] },
      { id: "relationships", title: "Relationships & Family", body: "Close relationships can bring expectations, communication challenges and competing responsibilities. Sessions provide a private place to examine boundaries, communication, family dynamics and the choices in front of you.", keywords: ["relationship wellbeing", "family wellbeing", "private relationship coaching"] },
      { id: "mindfulness", title: "Mindfulness & Presence", body: "Mindfulness practices can support greater awareness of thoughts, emotions and everyday reactions. Where appropriate, reflective practices are incorporated into a broader wellbeing conversation designed around the individual.", keywords: ["mindfulness coaching", "presence", "holistic wellbeing"] },
      { id: "energy-restoration", title: "Energy & Restoration", body: "Wellbeing also involves how you experience your energy, attention and capacity. Holistic practices, including Reiki where appropriate and welcomed by the client, may form part of an individual wellbeing approach.", keywords: ["energy wellbeing", "Reiki", "holistic wellbeing"] },
    ] satisfies Section[],
  },
  women: {
    eyebrow: "PRIVATE ADVISORY FOR WOMEN",
    title: "Women's wellbeing, approached as a whole.",
    intro: "Private wellbeing advisory for women navigating relationships, motherhood, family responsibilities, confidence, identity, professional pressure and periods of meaningful change for clients across Dubai, Abu Dhabi, Riyadh, Doha and the wider Gulf.",
    sections: [
      { id: "womens-wellbeing", title: "Women's Wellbeing", body: "Women's wellbeing is shaped by many overlapping parts of life. Gulfwellbeing creates a confidential space to consider your own needs alongside relationships, family, work, expectations and personal priorities.", keywords: ["women's wellbeing", "wellbeing advisor for women", "private coaching for women"] },
      { id: "motherhood", title: "Motherhood", body: "Motherhood can bring love and meaning alongside responsibility, fatigue, changing identity and pressure to meet competing expectations. Sessions provide space to reflect on the woman beyond the role and what she needs now.", keywords: ["motherhood support", "maternal wellbeing", "women's coaching"] },
      { id: "private-family-dynamics", title: "Family & Private Life", body: "Family dynamics can become complex when responsibilities, expectations and personal boundaries overlap. A private conversation can help you examine what is happening and decide what deserves your attention.", keywords: ["family wellbeing", "family dynamics", "private wellbeing advisory"] },
      { id: "confidence", title: "Confidence & Self-Trust", body: "Confidence is not only about performance. It can also involve trusting your own judgement, communicating clearly and making decisions that reflect your values and circumstances.", keywords: ["confidence coaching", "self-trust", "women's wellbeing coaching"] },
      { id: "marriage-pressure", title: "Marriage & Relationship Pressure", body: "Relationships may involve emotional distance, communication difficulties, expectations or decisions that feel difficult to discuss elsewhere. Gulfwellbeing offers a discreet setting for reflection without judgement.", keywords: ["relationship coaching", "marriage support", "relationship wellbeing"] },
      { id: "transitions-women", title: "Transitions for Women", body: "Changes in work, marriage, motherhood, family life or personal identity can alter the way you see yourself and your future. Advisory can help you create perspective around a new chapter.", keywords: ["life transitions for women", "women's life coaching", "personal transitions"] },
    ] satisfies Section[],
  },
  men: {
    eyebrow: "PRIVATE ADVISORY FOR MEN",
    title: "Men's wellbeing beyond the role and the responsibility.",
    intro: "Discreet wellbeing advisory for men carrying professional responsibility, family expectations, leadership pressure and personal questions for clients across Dubai, Abu Dhabi, Riyadh, Doha and the wider Gulf.",
    sections: [
      { id: "mens-wellbeing", title: "Men's Wellbeing", body: "Men's wellbeing can be closely connected to work, family, responsibility, identity and expectations around strength. Private advisory provides room to look at the full picture rather than one isolated issue.", keywords: ["men's wellbeing", "wellbeing advisor for men", "private coaching for men"] },
      { id: "fatherhood-pressure", title: "Fatherhood & Pressure", body: "Fatherhood can bring responsibility as well as pressure to provide, protect and remain present. Sessions offer a private place to reflect on expectations, partnership, family life and personal capacity.", keywords: ["fatherhood support", "men's wellbeing", "family wellbeing"] },
      { id: "emotional-balance", title: "Emotional Balance", body: "When pressure is prolonged, emotions may become difficult to recognise or communicate. A private advisory relationship can create space for greater awareness, perspective and deliberate responses.", keywords: ["men's emotional wellbeing", "emotional balance", "private coaching"] },
      { id: "confidence-leadership", title: "Confidence & Leadership", body: "Leadership begins with clarity about decisions, boundaries, communication and responsibility. Advisory can support a more deliberate approach to the pressures that accompany leadership.", keywords: ["leadership coaching", "executive wellbeing", "confidence coaching"] },
      { id: "provider-role", title: "The Provider Role", body: "Being relied upon can carry an unseen emotional and practical weight. This is a private space to examine expectations, responsibility and the balance between providing for others and maintaining your own wellbeing.", keywords: ["provider pressure", "men's wellbeing", "private advisory"] },
      { id: "transitions-men", title: "Transitions for Men", body: "Career changes, business decisions, relationship changes, fatherhood and shifts in identity can create a need for perspective. Advisory supports reflection during these periods of transition.", keywords: ["life transitions for men", "men's coaching", "personal change"] },
    ] satisfies Section[],
  },
  business: {
    eyebrow: "BUSINESS WELLBEING & PRIVATE EXECUTIVE ADVISORY",
    title: "Wellbeing for business, leadership and the people carrying responsibility.",
    intro: "Private wellbeing advisory for founders, executives, senior professionals and organisations, for clients in Dubai, Abu Dhabi, Riyadh, Jeddah, Doha, Kuwait, Bahrain and Oman, navigating sustained pressure, complex decisions, people responsibility and the human side of performance.",
    sections: [
      { id: "executive-wellbeing", title: "Executive Wellbeing", body: "Leadership pressure can affect attention, relationships, energy and personal capacity. Private advisory creates a confidential space away from the role to reflect, restore perspective and protect sustainable capacity.", keywords: ["executive wellbeing", "executive coaching", "private wellbeing advisor"] },
      { id: "founder-wellbeing", title: "Founder Wellbeing", body: "Founders often carry the business, the decisions, the people and the uncertainty at the same time. Advisory provides a private space to examine pressure, boundaries, identity and the personal cost of carrying a company.", keywords: ["founder wellbeing", "founder coaching", "entrepreneur wellbeing"] },
      { id: "leadership-clarity", title: "Leadership Clarity & Decision-Making", body: "Senior decisions often need distance from immediate noise. Sessions can create room to think through difficult conversations, competing priorities, boundaries and longer-term direction with greater perspective.", keywords: ["leadership clarity", "decision making", "executive advisory"] },
      { id: "burnout-prevention", title: "Pressure & Burnout Prevention", body: "Sustained pressure can become normal before it becomes visible. Private advisory helps leaders examine patterns of pressure, recovery, workload and boundaries before they become harder to change.", keywords: ["executive burnout", "burnout prevention", "leadership wellbeing"] },
      { id: "team-wellbeing", title: "Leadership & Team Wellbeing", body: "Leaders shape the human environment around them. Advisory can support thoughtful approaches to communication, expectations, team wellbeing and the responsibilities that come with leading people.", keywords: ["team wellbeing", "leadership wellbeing", "workplace wellbeing"] },
      { id: "corporate-advisory", title: "Corporate Wellbeing Advisory", body: "For organisations seeking a discreet external perspective on the human side of leadership and wellbeing. The focus can be tailored to leadership groups, senior teams or specific periods of organisational change.", keywords: ["corporate wellbeing", "workplace wellbeing advisory", "business wellbeing"] },
    ] satisfies Section[],
  }
} as const;
