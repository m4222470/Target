import { useRoute, Link } from 'wouter';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, User, Calendar, ArrowRight } from 'lucide-react';
import { blogPosts } from '../data/mockData';

export default function JournalArticlePage() {
  const [, params] = useRoute('/journal/:slug');
  const post = blogPosts.find(p => p.slug === params?.slug);
  const related = blogPosts.filter(p => p.slug !== params?.slug).slice(0, 3);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Article Not Found</h2>
          <Link href="/journal"><button className="px-6 py-3 bg-amber-600 text-white rounded-xl font-semibold">Back to Journal</button></Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-950">
      <div className="relative h-[50vh] overflow-hidden">
        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 max-w-4xl mx-auto px-4 sm:px-6 pb-10">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest">{post.category}</span>
          <h1 className="text-3xl md:text-5xl font-bold font-serif text-white mt-2 leading-tight">{post.title}</h1>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-center gap-6 text-sm text-neutral-500 dark:text-neutral-400 mb-10">
          <Link href="/journal"><span className="flex items-center gap-1.5 hover:text-amber-600 cursor-pointer transition-colors text-xs"><ArrowLeft className="w-3.5 h-3.5" /> Back to Journal</span></Link>
          <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5 text-amber-500" />{post.author}</div>
          <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-amber-500" />{post.date}</div>
          <div className="flex items-center gap-1.5"><Clock className="w-3.5 h-3.5 text-amber-500" />{post.readTime} min read</div>
        </div>

        <p className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8 font-medium border-l-4 border-amber-500 pl-5">
          {post.excerpt}
        </p>

        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-serif prose-headings:text-neutral-900 dark:prose-headings:text-white prose-p:text-neutral-600 dark:prose-p:text-neutral-400 prose-p:leading-relaxed prose-strong:text-neutral-900 dark:prose-strong:text-white prose-a:text-amber-600">
          {post.content.split('\n\n').map((paragraph, i) => {
            if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
              return <h3 key={i} className="text-xl font-bold font-serif text-neutral-900 dark:text-white mt-8 mb-3">{paragraph.replace(/\*\*/g, '')}</h3>;
            }
            const parts = paragraph.split(/\*\*(.*?)\*\*/g);
            return (
              <p key={i} className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-5">
                {parts.map((part, j) => j % 2 === 0 ? part : <strong key={j} className="text-neutral-900 dark:text-white">{part}</strong>)}
              </p>
            );
          })}
        </div>

        <div className="mt-16 pt-12 border-t border-neutral-200 dark:border-neutral-800">
          <h2 className="text-2xl font-bold font-serif text-neutral-900 dark:text-white mb-8">Continue Reading</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {related.map(p => (
              <Link key={p.id} href={`/journal/${p.slug}`}>
                <div className="group cursor-pointer">
                  <div className="overflow-hidden rounded-xl aspect-video mb-3">
                    <img src={p.image} alt={p.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <span className="text-xs text-amber-600 font-bold uppercase">{p.category}</span>
                  <h3 className="text-sm font-bold text-neutral-900 dark:text-white mt-1 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">{p.title}</h3>
                  <div className="flex items-center gap-2 mt-1 text-xs text-amber-600">
                    Read <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
