import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-[1440px] px-5 py-20 lg:px-10 lg:py-32">
      <div className="max-w-3xl">
        <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground font-medium mb-4">
          OUR STORY
        </p>
        <h1 className="font-serif text-5xl sm:text-7xl mb-12">About Sourour Tarkan</h1>
        <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
          <p>
            Sourour Tarkan is a private wellbeing advisor and coach dedicated to supporting individuals through periods of significant change and high responsibility.
          </p>
          <p>
            With a focus on the Gulf region and an international perspective, she provides a discreet, composed setting for inner work and personal growth.
          </p>
        </div>
      </div>
    </div>
  );
}
