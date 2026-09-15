import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blogData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  return post
    ? { title: `${post.title} | Dutch Angle`, description: post.excerpt }
    : { title: "Blog | Dutch Angle" };
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-50/60 via-slate-50 to-orange-50/50 px-6 py-14">
      <article className="mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-slate-500 transition-colors hover:text-amber-700">
          <span aria-hidden="true" className="mr-2">←</span> Bloga Dön
        </Link>

        <header className="mt-10 border-b border-amber-200/80 pb-10">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-widest text-amber-700">
            <span>{post.category}</span>
            <span className="text-slate-400">•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-5 text-4xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
            {post.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-600">{post.excerpt}</p>
        </header>

        <div className="prose-content mt-12">
          {post.blocks.map((block, index) => {
            if (block.type === "heading") {
              return <h2 key={index} className="mt-12 text-2xl font-black leading-tight text-slate-900 md:text-3xl">{block.text}</h2>;
            }
            if (block.type === "paragraph") {
              return <p key={index} className="mt-5 text-base leading-8 text-slate-700">{block.text}</p>;
            }
            if (block.type === "list") {
              return <ul key={index} className="mt-6 grid gap-3 border-l-2 border-amber-400 pl-6 text-base leading-7 text-slate-700">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            }
            return (
              <div key={index} className="mt-8 overflow-x-auto rounded-2xl border border-amber-200/80 bg-white shadow-sm">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead className="bg-slate-900 text-amber-200">
                    <tr>{block.headers.map((header) => <th key={header} className="px-5 py-4 font-bold">{header}</th>)}</tr>
                  </thead>
                  <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-slate-100 even:bg-amber-50/50">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-5 py-4 text-slate-700">{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            );
          })}
        </div>

        <footer className="mt-16 border-t border-amber-200/80 pt-8">
          <Link href="/basvuru" className="inline-flex rounded-xl bg-amber-400 px-5 py-3 text-xs font-bold uppercase tracking-wider text-slate-900 transition-colors hover:bg-amber-500">
            Projenizi Konuşalım →
          </Link>
        </footer>
      </article>
    </main>
  );
}
