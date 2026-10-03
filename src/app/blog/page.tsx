import { getBlogPosts } from '@/lib/queries';
import PageTransition from '@/components/layout/PageTransition';
import TerminalPrompt from '@/components/terminal/TerminalPrompt';
import Link from 'next/link';

export const metadata = { title: 'Blog | Anvith Kumar' };

export default async function BlogPage() {
  const posts = await getBlogPosts();

  return (
    <PageTransition>
      <div className="max-w-4xl mx-auto py-24 px-6 min-h-[85vh]">
        <TerminalPrompt command="ls /blog" />
        <h1 className="text-5xl md:text-7xl font-bold mb-8 uppercase tracking-tighter mt-8 text-white">Engineering Notes</h1>
        <p className="text-gray-400 text-lg mb-16 leading-relaxed max-w-2xl">Thoughts on software development, AI, and building resilient systems.</p>

        <div className="space-y-12">
          {posts.map((post: any) => (
            <article key={post.slug} className="group border-b border-gray-800 pb-12">
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="flex flex-wrap gap-3 font-mono text-xs text-gray-500 mb-4 uppercase tracking-wider">
                  <span>{post.date}</span>
                  <span>|</span>
                  <span>{post.readingTime || '5 min read'}</span>
                  <span>|</span>
                  <span className="text-gray-300">{post.category}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 group-hover:underline underline-offset-4">{post.title}</h2>
                <p className="text-gray-400 text-lg leading-relaxed">{post.excerpt}</p>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}
