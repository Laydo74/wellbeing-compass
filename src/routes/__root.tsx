import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode, useState } from "react";
import { Menu, X, Languages } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-5 lg:px-10">
        <Link to="/" className="flex items-center gap-3">
          <span className="grid size-9 place-items-center rounded-full border border-gold/60 font-serif text-lg text-gold">G</span>
          <span>
            <span className="block font-serif text-lg leading-none tracking-[0.16em]">GULFWELLBEING</span>
            <span className="mt-1 block text-[9px] uppercase tracking-[0.28em] text-muted-foreground">Tarkan Wellbeing Advisor</span>
          </span>
        </Link>

        <div className="hidden items-center gap-6 lg:flex">
          <nav className="flex items-center gap-6">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/wellbeing" className="nav-link">Wellbeing</Link>
            <Link to="/women" className="nav-link">Women</Link>
            <Link to="/men" className="nav-link">Men</Link>
            <Link to="/business" className="nav-link">Business</Link>
            <Link to="/" className="nav-link">Approach</Link>
            <Link to="/about" className="nav-link">About</Link>
            <Link to="/book" className="nav-book">Book</Link>
          </nav>
          
          <div className="flex items-center gap-2 border-s border-border ps-4 text-xs">
            <Languages className="size-4 text-muted-foreground" />
            <span className="flex gap-2">
              <button className="nav-link">العربية</button>
              <span className="text-muted-foreground">·</span>
              <button className="nav-link">Français</button>
            </span>
          </div>
        </div>

        <button 
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>
      
      {/* Mobile Menu Placeholder */}
      {isOpen && (
        <div className="lg:hidden absolute top-20 left-0 right-0 bg-background border-b border-border p-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-5">
          <Link to="/" className="text-lg font-serif">Home</Link>
          <Link to="/" className="text-lg font-serif">Wellbeing</Link>
          <Link to="/" className="text-lg font-serif">Approach</Link>
          <Link to="/" className="text-lg font-serif">About</Link>
          <Link to="/book" className="button-gold justify-center">Book Now</Link>
        </div>
      )}
    </header>
  );
}

function Footer() {
  return (
    <footer className="bg-primary py-20 text-primary-foreground mt-20">
      <div className="mx-auto max-w-[1440px] px-5 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <span className="grid size-12 place-items-center rounded-full border border-gold/60 font-serif text-2xl text-gold">G</span>
              <div>
                <span className="block font-serif text-2xl leading-none tracking-[0.16em]">GULFWELLBEING</span>
                <span className="mt-1 block text-[10px] uppercase tracking-[0.28em] text-primary-foreground/60">Tarkan Wellbeing Advisor</span>
              </div>
            </div>
            <p className="max-w-md text-primary-foreground/70 text-sm leading-relaxed">
              Private wellbeing advisory and coaching for individuals, families and executives across the Gulf and internationally. Composed, confidential and personal.
            </p>
          </div>
          
          <div>
            <h4 className="font-serif text-lg mb-6">Navigation</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li><Link to="/wellbeing">Wellbeing</Link></li>
              <li><Link to="/">The Approach</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-6">Connect</h4>
            <ul className="space-y-4 text-sm text-primary-foreground/60">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Newsletter</li>
            </ul>
          </div>
        </div>
        
        <div className="mt-20 pt-8 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between text-[10px] uppercase tracking-widest text-primary-foreground/40">
          <p>© 2024 GULFWELLBEING. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="/">Privacy</Link>
            <Link to="/">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-serif text-foreground italic">404</h1>
        <h2 className="mt-4 text-xl font-serif text-foreground uppercase tracking-widest">Page not found</h2>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          The sanctuary you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="button-gold"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-serif tracking-widest text-foreground uppercase">
          A moment of pause
        </h1>
        <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="button-gold"
          >
            Try again
          </button>
          <Link
            to="/"
            className="button-outline"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Private Wellbeing Advisor for the Gulf | GULFWELLBEING" },
      { name: "description", content: "Private wellbeing advisory and coaching for individuals, women, men, families, founders and executives across the Gulf and internationally." },
      { name: "author", content: "Sourour Tarkan | GULFWELLBEING" },
      { property: "og:title", content: "Private Wellbeing Advisor for the Gulf | GULFWELLBEING" },
      { property: "og:description", content: "Private wellbeing advisory and coaching for individuals, families and executives." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Italiana&display=swap" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="font-sans antialiased">
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
    </QueryClientProvider>
  );
}
