'use client';
import styles from './Stats.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCountUp } from '../hooks/useCountUp';

export default function Stats() {
  const { targetRef, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const channelsCount = useCountUp(30000, 2500, isIntersecting);
  const moviesCount = useCountUp(200000, 2500, isIntersecting);
  // Custom decimal count for uptime
  const uptimeCountRaw = useCountUp(999, 2500, isIntersecting); 
  const uptimeDisplay = (uptimeCountRaw / 10).toFixed(1);

  return (
    <section className={styles.section} ref={targetRef}>
      <div className="container">
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.header}`}>
          <h2 className={styles.title}>Why Choose Us as Your IPTV Providers in Dubai?</h2>
          <p className={styles.description}>
            Enjoy modern television with our IPTV Dubai service—no satellite dish or complicated installation needed. Simply connect to a reliable internet connection, activate your subscription, and start streaming instantly.
          </p>
        </div>

        <div className={styles.grid}>
          {/* Card 1 */}
          <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.card}`} style={{ transitionDelay: '0.1s' }}>
            <svg className={styles.icon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
              <polyline points="17 2 12 7 7 2"></polyline>
            </svg>
            <div className={styles.number}>{channelsCount.toLocaleString()}+</div>
            <div className={styles.label}>Live Channels</div>
          </div>

          {/* Card 2 */}
          <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.card}`} style={{ transitionDelay: '0.2s' }}>
            <svg className={styles.icon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18"></rect>
              <line x1="7" y1="2" x2="7" y2="22"></line>
              <line x1="17" y1="2" x2="17" y2="22"></line>
              <line x1="2" y1="12" x2="22" y2="12"></line>
              <line x1="2" y1="7" x2="7" y2="7"></line>
              <line x1="2" y1="17" x2="7" y2="17"></line>
              <line x1="17" y1="17" x2="22" y2="17"></line>
              <line x1="17" y1="7" x2="22" y2="7"></line>
            </svg>
            <div className={styles.number}>{moviesCount.toLocaleString()}+</div>
            <div className={styles.label}>Movies & Series</div>
          </div>

          {/* Card 3 (Static) */}
          <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.card}`} style={{ transitionDelay: '0.3s' }}>
            <svg className={styles.icon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
            <div className={styles.number}>4K/8K</div>
            <div className={styles.label}>Ultra HD Streaming</div>
          </div>

          {/* Card 4 */}
          <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.card}`} style={{ transitionDelay: '0.4s' }}>
            <svg className={styles.icon} width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"></circle>
              <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
            <div className={styles.number}>{uptimeDisplay}%</div>
            <div className={styles.label}>Uptime Guarantee</div>
          </div>
        </div>
      </div>
    </section>
  );
}
