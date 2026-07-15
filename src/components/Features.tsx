'use client';
import styles from './Features.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Features() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const featuresList = [
    "50,000+ Live TV Channels Worldwide",
    "200,000+ Movies & TV Series (VOD)",
    "Premium Sports & PPV Events Included",
    "HD, 4K & 8K Ultra HD Streaming",
    "Anti-Freeze & Buffer-Free Technology",
    "High-Speed & Stable IPTV Servers",
    "EPG (Electronic Program Guide) Support",
    "Catch-Up TV for Selected Channels",
    "Compatible with All Major Devices",
    "Works with IPTV Smarters Pro, TiviMate, XCIPTV & More",
    "Instant Account Activation Within Minutes",
    "Secure & Reliable IPTV Streaming",
    "Regular Channel & VOD Content Updates",
    "International, Arabic, Indian & Pakistani Channels",
    "Affordable IPTV Plans with 24/7 Customer Support"
  ];

  return (
    <section className={styles.section} ref={targetRef}>
      <div className="container">
        <h2 className={`reveal ${isIntersecting ? 'active' : ''} ${styles.title}`}>Features You'll Get with Our IPTV Subscription</h2>
        
        <div className={styles.grid}>
          {featuresList.map((feature, idx) => (
            <div 
              key={idx} 
              className={`reveal ${isIntersecting ? 'active' : ''} ${styles.featureItem}`}
              style={{ transitionDelay: `${(idx % 5) * 0.1}s` }}
            >
              <svg className={styles.icon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                <polyline points="22 4 12 14.01 9 11.01"></polyline>
              </svg>
              <span className={styles.text}>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
