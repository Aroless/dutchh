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
    <main className="min-h-screen bg-[#f5f1e8] px-6 py-20 text-[#1c1b19]">
      <article className="mx-auto max-w-4xl">
        <Link href="/blog" className="inline-flex items-center text-xs font-bold uppercase tracking-[0.16em] text-[#6e6a61] transition-colors hover:text-[#a77b16]">
          <span aria-hidden="true" className="mr-2">←</span> Bloga Dön
        </Link>

        <header className="mt-12 border-t border-[#1c1b19] pt-10">
          <div className="flex flex-wrap items-center gap-3 text-[11px] font-bold uppercase tracking-[0.18em] text-[#a77b16]">
            <span>{post.category}</span>
            <span className="text-slate-400">•</span>
            <span>{post.readTime}</span>
          </div>
          <h1 className="mt-5 font-serif text-5xl leading-[1.05] tracking-tight text-[#1c1b19] md:text-7xl">
            {post.title}
          </h1>
          <p className="mt-7 text-lg leading-8 text-[#6e6a61]">{post.excerpt}</p>
        </header>

        <div className="prose-content mt-12">
          {post.blocks.map((block, index) => {
            if (block.type === "heading") {
              return <h2 key={index} className="mt-12 font-serif text-3xl leading-tight text-[#1c1b19] md:text-4xl">{block.text}</h2>;
            }
            if (block.type === "paragraph") {
              return <p key={index} className="mt-5 text-base leading-8 text-[#6e6a61]">{block.text}</p>;
            }
            if (block.type === "list") {
              return <ul key={index} className="mt-6 grid gap-3 border-l border-[#c79a2b] pl-6 text-base leading-7 text-[#6e6a61]">{block.items.map((item) => <li key={item}>{item}</li>)}</ul>;
            }
            return (
              <div key={index} className="mt-8 overflow-x-auto border-y border-[#d8d1c4] bg-[#fbfaf6]">
                <table className="w-full min-w-[620px] border-collapse text-left text-sm">
                  <thead className="bg-[#20211f] text-[#d7ad4a]">
                    <tr>{block.headers.map((header) => <th key={header} className="px-5 py-4 font-bold">{header}</th>)}</tr>
                  </thead>
                  <tbody>{block.rows.map((row, rowIndex) => <tr key={rowIndex} className="border-t border-[#d8d1c4] even:bg-[#f5f1e8]">{row.map((cell, cellIndex) => <td key={cellIndex} className="px-5 py-4 text-[#6e6a61]">{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            );
          })}
        </div>

        <footer className="mt-16 border-t border-[#1c1b19] pt-8">
          <Link href="/basvuru" className="inline-flex bg-[#1c1b19] px-5 py-4 text-xs font-bold uppercase tracking-wider text-[#fbfaf6] transition-colors hover:bg-[#a77b16]">
            Projenizi Konuşalım →
          </Link>
        </footer>
      </article>
    </main>
  );
}
