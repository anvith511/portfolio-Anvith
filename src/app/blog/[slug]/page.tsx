import { getBlogPostBySlug, getBlogPosts } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((p: any) => ({ slug: p.slug }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) notFound();

  return (
    <PageTransition>
      <div className="max-w-3xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command={`cat /blog/${post.slug}.md`} />

        <Link href="/blog" className="inline-block mt-8 mb-16 text-sm font-mono text-gray-500 hover:text-white transition-colors uppercase tracking-widest">
          &lt;- Back to Notes
        </Link>

        <header className="mb-16 pb-8 border-b border-gray-800">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">{post.title}</h1>
          <div className="flex flex-wrap gap-4 font-mono text-sm text-gray-500 uppercase tracking-widest">
            <span>{(post as any).date || (post as any).published_at}</span>
            <span>/</span>
            <span>{(post as any).readingTime || (post as any).reading_time || '5 min read'}</span>
            <span>/</span>
            <span className="text-gray-300">{post.category}</span>
          </div>
        </header>

        <div
          className="prose prose-invert prose-lg max-w-none 
          prose-p:leading-relaxed prose-p:text-gray-300
          prose-headings:text-white prose-headings:font-bold prose-headings:tracking-tight
          prose-a:text-white prose-a:underline-offset-4
          prose-pre:bg-black prose-pre:border prose-pre:border-gray-800 prose-pre:rounded-none
          prose-img:rounded-none prose-img:border prose-img:border-gray-800
          prose-blockquote:border-l-gray-600 prose-blockquote:text-gray-400 prose-blockquote:font-normal prose-blockquote:not-italic"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </div>
    </PageTransition>
  );
}
