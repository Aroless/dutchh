import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog | Dutch Angle",
  description: "E-ticaret, dijital pazarlama ve büyüme stratejileri üzerine içgörüler.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-paper px-6 py-20 text-ink">
      <div className="mx-auto max-w-6xl">
        <header className="border-t border-ink pt-10">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-gold">Dutch Angle blog</span>
          <h1 className="mt-5 max-w-4xl font-serif text-5xl leading-[1.02] tracking-tight md:text-7xl">
            Dijital büyümenin notları.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-muted-ink md:text-lg">
            E-ticaret operasyonları, performans pazarlaması ve yeni nesil dijital altyapılar üzerine uygulanabilir fikirler.
          </p>
        </header>

        <section aria-label="Blog yazıları" className="mt-24 grid gap-x-8 gap-y-12 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`group flex flex-col justify-between border-t border-ink pt-5 ${index === 0 ? "md:col-span-2 md:min-h-[280px]" : ""}`}
            >
              <div>
                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-[0.18em] text-gold">
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className="mt-6 max-w-4xl font-serif text-3xl leading-tight tracking-tight text-ink transition-colors group-hover:text-gold md:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-ink">
                  {post.excerpt}
                </p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-8 inline-flex w-fit items-center border-b border-ink pb-2 text-xs font-bold uppercase tracking-[0.16em] text-ink transition-colors hover:border-gold hover:text-gold"
              >
                Yazıyı oku <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
