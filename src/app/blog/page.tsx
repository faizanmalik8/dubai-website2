import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Blog | IPTV Dubai',
  description: 'Read the latest news, guides, and tips about IPTV streaming, setup, and entertainment from IPTV Dubai.',
};

export default function Blog() {
  const posts = [
    {
      id: 1,
      title: 'How to Setup IPTV on Smart TV',
      excerpt: 'A comprehensive guide to setting up your IPTV Dubai subscription on Samsung, LG, and Android Smart TVs.',
      image: '/4.webp',
      slug: 'setup-iptv-smart-tv',
      date: 'July 14, 2026'
    },
    {
      id: 2,
      title: 'Top 10 Channels to Watch This Weekend',
      excerpt: 'Discover the best premium sports and movie channels included in your IPTV Dubai subscription this weekend.',
      image: '/5.webp',
      slug: 'top-10-channels-weekend',
      date: 'July 10, 2026'
    },
    {
      id: 3,
      title: 'Why 4K Streaming is the Future of TV',
      excerpt: 'Learn why ultra HD 4K and 8K streaming is revolutionizing the way we watch live television and movies.',
      image: '/6.webp',
      slug: '4k-streaming-future-tv',
      date: 'July 5, 2026'
    }
  ];

  return (
    <div className="container" style={{ padding: '8rem 2rem 4rem', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>Our Blog</h1>
      <p style={{ color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '4rem', fontSize: '1.2rem' }}>
        Latest news, tips, and guides for the ultimate IPTV experience.
      </p>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2.5rem' }}>
        {posts.map(post => (
          <div key={post.id} style={{ 
            backgroundColor: 'var(--color-card-bg)', 
            borderRadius: 'var(--border-radius)', 
            overflow: 'hidden', 
            boxShadow: 'var(--shadow-md)',
            border: '1px solid var(--color-border)',
            transition: 'var(--transition)'
          }}>
            <Link href={`/blog/${post.slug}`}>
              <div style={{ position: 'relative', width: '100%', height: '220px' }}>
                <Image src={post.image} alt={post.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '2rem' }}>
                <p style={{ color: 'var(--color-primary)', fontSize: '0.9rem', marginBottom: '0.5rem', fontWeight: 600 }}>{post.date}</p>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem', color: 'var(--color-text-primary)' }}>{post.title}</h3>
                <p style={{ color: 'var(--color-text-secondary)', lineHeight: 1.6 }}>{post.excerpt}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
