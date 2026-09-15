import Link from "next/link";
import { blogPosts } from "@/lib/blogData";

export const metadata = {
  title: "Blog | Dutch Angle",
  description: "E-ticaret, dijital pazarlama ve büyüme stratejileri üzerine içgörüler.",
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50/60 via-slate-50 to-orange-50/50 px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <header className="max-w-3xl mb-14">
          <span className="inline-flex rounded-full border border-amber-300 bg-amber-100/80 px-3 py-1 text-[11px] font-bold uppercase tracking-widest text-amber-800">
            Dutch Angle Blog
          </span>
          <h1 className="mt-5 text-4xl font-black uppercase tracking-tight text-slate-900 md:text-6xl">
            Dijital büyümenin notları.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
            E-ticaret operasyonları, performans pazarlaması ve yeni nesil dijital altyapılar üzerine uygulanabilir fikirler.
          </p>
        </header>

        <section aria-label="Blog yazıları" className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post, index) => (
            <article
              key={post.slug}
              className={`group flex min-h-[290px] flex-col justify-between rounded-3xl border p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl ${
                index === 0 ? "border-slate-900 bg-slate-900 text-white md:col-span-2" : "border-amber-200/80 bg-white/90"
              }`}
            >
              <div>
                <div className={`flex items-center justify-between text-[11px] font-bold uppercase tracking-widest ${index === 0 ? "text-amber-300" : "text-amber-700"}`}>
                  <span>{post.category}</span>
                  <span>{post.readTime}</span>
                </div>
                <h2 className={`mt-7 max-w-4xl text-2xl font-black leading-tight md:text-3xl ${index === 0 ? "text-white" : "text-slate-900"}`}>
                  {post.title}
                </h2>
                <p className={`mt-4 max-w-3xl text-sm leading-6 ${index === 0 ? "text-slate-300" : "text-slate-600"}`}>
                  {post.excerpt}
                </p>
              </div>
              <Link
                href={`/blog/${post.slug}`}
                className={`mt-8 inline-flex w-fit items-center rounded-xl px-4 py-2.5 text-xs font-bold uppercase tracking-wider transition-colors ${index === 0 ? "bg-amber-400 text-slate-900 hover:bg-amber-300" : "bg-slate-900 text-amber-300 hover:bg-slate-800"}`}
              >
                Yazıyı Oku <span className="ml-2" aria-hidden="true">→</span>
              </Link>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
