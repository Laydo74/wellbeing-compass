import { createFileRoute } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { useState } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole } from "lucide-react";
import { SiteShell } from "@/components/site/SiteShell";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { submitEnquiry } from "@/lib/content.functions";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/fr/book")({
  head: (ctx) => pageHeadFor(ctx, "Demande de séance privée dans le Golfe | GULFWELLBEING", "Demandez une séance privée et confidentielle de bien-être avec Sourour Tarkan, pour particuliers, femmes, hommes, familles et dirigeants dans le Golfe.", "/fr/book"),
  component: Page,
});

const countries = ["Émirats arabes unis", "Arabie saoudite", "Qatar", "Koweït", "Bahreïn", "Oman", "Autre"];

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs uppercase tracking-[.12em] text-muted-foreground">{label}</span>
      {children}
    </label>
  );
}

function Page() {
  const send = useServerFn(submitEnquiry);
  const [state, setState] = useState<"idle" | "sending" | "sent" | "error">("idle");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");
    const f = new FormData(e.currentTarget);
    try {
      await send({
        data: {
          name: String(f.get("name")),
          email: String(f.get("email")),
          phone: String(f.get("phone") || ""),
          country: String(f.get("country")),
          area_of_support: String(f.get("area")),
          session_format: String(f.get("format")),
          availability: String(f.get("availability")),
          contact_method: String(f.get("contact")),
          message: String(f.get("message") || ""),
        },
      });
      setState("sent");
    } catch {
      setState("error");
    }
  }
  return (
    <SiteShell>
      <section className="page-hero">
        <div className="mx-auto grid max-w-[1440px] gap-16 px-6 py-20 lg:grid-cols-[.75fr_1.25fr] lg:px-12 lg:py-28">
          <div>
            <p className="eyebrow text-gold">DEMANDE PRIVÉE</p>
            <h1 className="mt-6 font-serif text-6xl leading-none md:text-7xl">Demander une séance privée.</h1>
            <p className="mt-7 max-w-lg text-lg leading-8 text-muted-foreground">
              Partagez uniquement ce qui vous semble approprié. Il s'agit d'une demande privée, et non d'une réservation instantanée. Votre demande est examinée personnellement avant toute étape suivante. Vous pouvez demander un conseil privé en bien-être, un accompagnement pour femmes ou hommes, un bien-être exécutif, un soutien relationnel et familial, ou un service de bien-être VIP.
            </p>
            <div className="mt-10 border-t border-border pt-8">
              <p className="eyebrow">CE QUI SE PASSE ENSUITE</p>
              <ol className="mt-5 space-y-5 text-sm text-muted-foreground">
                <li><b className="me-3 font-serif text-xl text-gold">01</b>Votre demande est examinée en privé.</li>
                <li><b className="me-3 font-serif text-xl text-gold">02</b>Vous êtes contacté(e) par le moyen que vous préférez.</li>
                <li><b className="me-3 font-serif text-xl text-gold">03</b>La disponibilité et le format le plus adapté sont discutés.</li>
              </ol>
            </div>
            <p className="mt-10 flex items-center gap-2 text-sm"><LockKeyhole className="size-4 text-gold" />Conçu avec la confidentialité comme priorité.</p>
            <p className="mt-4 max-w-lg text-sm leading-6 text-muted-foreground">Les tarifs sont communiqués en privé une fois le service et le format de séance appropriés discutés. Différents domaines de soutien et arrangements de conciergerie peuvent avoir des tarifs différents.</p>
          </div>
          <div className="border border-border bg-card p-7 md:p-10">
            {state === "sent" ? (
              <div className="grid min-h-[500px] place-items-center text-center">
                <div>
                  <CheckCircle2 className="mx-auto size-10 text-gold" />
                  <h2 className="mt-6 font-serif text-4xl">Votre demande a bien été reçue.</h2>
                  <p className="mt-4 text-muted-foreground">Merci. La prochaine étape sera organisée via le moyen de contact que vous avez choisi.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={submit} className="grid gap-6 md:grid-cols-2">
                <Field label="Nom"><Input name="name" required minLength={2} /></Field>
                <Field label="E-mail"><Input name="email" type="email" required /></Field>
                <Field label="Téléphone / WhatsApp"><Input name="phone" type="tel" placeholder="Indiquez l'indicatif du pays" /></Field>
                <Field label="Pays">
                  <select name="country" required className="field">
                    <option value="">Sélectionnez le pays</option>
                    {countries.map((c) => <option key={c}>{c}</option>)}
                  </select>
                </Field>
                <Field label="Domaine de soutien">
                  <select name="area" required className="field">
                    <option value="">Sélectionnez un domaine</option>
                    <option>Bien-être personnel</option>
                    <option>Bien-être des femmes</option>
                    <option>Bien-être des hommes</option>
                    <option>Entreprises & dirigeants</option>
                    <option>Bien-être privé VIP</option>
                    <option>Relations & famille</option>
                  </select>
                </Field>
                <Field label="Format de séance préféré">
                  <select name="format" required className="field">
                    <option value="">Sélectionnez le format</option>
                    <option>En ligne</option>
                    <option>En personne</option>
                    <option>À discuter</option>
                  </select>
                </Field>
                <Field label="Méthode de contact préférée">
                  <select name="contact" required className="field">
                    <option>E-mail</option>
                    <option>Téléphone</option>
                    <option>WhatsApp</option>
                  </select>
                </Field>
                <Field label="Disponibilités préférées"><Input name="availability" required placeholder="Jours, horaires et fuseau horaire" /></Field>
                <div className="md:col-span-2">
                  <Field label="Message / informations complémentaires"><Textarea name="message" rows={5} maxLength={2000} /></Field>
                </div>
                {state === "error" && <p className="md:col-span-2 text-sm text-destructive">Nous n'avons pas pu envoyer votre demande. Veuillez vérifier les informations et réessayer.</p>}
                <Button type="submit" size="lg" disabled={state === "sending"} className="md:col-span-2 md:justify-self-start">
                  {state === "sending" ? "Envoi de la demande…" : "Envoyer une demande privée"}
                  <ArrowRight />
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>
    </SiteShell>
  );
}
