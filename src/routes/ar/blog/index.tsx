import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpLeft } from "lucide-react";
import { pageHead, pageHeadFor } from "@/components/site/PageMeta";
import { SiteShell } from "@/components/site/SiteShell";
import { arabicPosts } from "@/lib/arabic-blog";

export const Route = createFileRoute("/ar/blog/")({
  head: (ctx) => pageHeadFor(ctx, "المدونة | رفاه خاص وحياة متوازنة في الخليج | GULFWELLBEING", "مقالات عربية أصلية حول الرفاه الخاص، الضغط، العلاقات، الأسرة، القيادة والتحولات الشخصية في الخليج.", "/ar/blog"),
  component: Page,
});

function Page() {
  const posts = Object.values(arabicPosts);
  return <SiteShell>
    <section className="page-hero">
      <div className="mx-auto grid min-h-[68vh] max-w-[1440px] items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:px-12">
        <div>
          <p className="eyebrow text-gold">المدونة الخاصة</p>
          <h1 className="mt-6 font-serif text-6xl leading-[1.05] md:text-8xl">أفكار لمساحة أكثر وعياً وهدوءاً.</h1>
          <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground">مقالات أصلية باللغة العربية حول الرفاه، الضغط، العلاقات، الأسرة، القيادة والتحولات الشخصية في حياة مليئة بالمسؤوليات.</p>
        </div>
        <div className="flex h-[50vh] items-end bg-secondary p-8 lg:p-12">
          <p className="max-w-lg font-serif text-3xl leading-tight">مساحة للقراءة والتفكير، بعيداً عن الوصفات الجاهزة.</p>
        </div>
      </div>
    </section>
    <section className="mx-auto max-w-[1440px] px-6 py-20 lg:px-12">
      <div className="grid gap-px bg-border md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => <a key={post.slug} href={`/ar/blog/${post.slug}`} className="group bg-background p-7 transition-colors hover:bg-secondary">
          <span className="text-xs text-gold">{String(index + 1).padStart(2, "0")} · {post.category}</span>
          <h2 className="mt-10 font-serif text-3xl leading-tight group-hover:underline">{post.title}</h2>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">{post.description}</p>
          <span className="mt-6 inline-flex items-center gap-2 text-sm">اقرأ المقال <ArrowUpLeft className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"/></span>
        </a>)}
      </div>
    </section>
  </SiteShell>;
}
