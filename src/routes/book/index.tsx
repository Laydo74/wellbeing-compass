import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/book/")({
  component: Book,
});

function Book() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-32">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium mb-4">
          PRIVATE SESSIONS
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl mb-12">Book a Session</h1>
        <p className="text-lg leading-relaxed text-muted-foreground mb-12">
          Private advisory is by invitation or referral. Please use the form below to inquire about availability.
        </p>
        <form className="grid gap-6">
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Name</label>
            <input type="text" className="border-b border-border py-2 focus:border-gold outline-none bg-transparent" />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input type="email" className="border-b border-border py-2 focus:border-gold outline-none bg-transparent" />
          </div>
          <div className="grid gap-2">
            <label className="text-xs uppercase tracking-widest text-muted-foreground">Message</label>
            <textarea className="border-b border-border py-2 focus:border-gold outline-none bg-transparent min-h-[100px]"></textarea>
          </div>
          <button className="button-gold mt-8 w-fit">Send Inquiry</button>
        </form>
      </div>
    </div>
  );
}
