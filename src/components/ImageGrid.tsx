'use client';
import Image from 'next/image';
import styles from './ImageGrid.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function ImageGrid() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <section className={styles.section} ref={targetRef}>
      <div className={`container ${styles.grid}`}>
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.imageWrapper}`} style={{ transitionDelay: '0.1s' }}>
          <Image src="/4.webp" alt="IPTV Interface 1" fill />
        </div>
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.imageWrapper}`} style={{ transitionDelay: '0.3s' }}>
          <Image src="/5.webp" alt="IPTV Interface 2" fill />
        </div>
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.imageWrapper}`} style={{ transitionDelay: '0.5s' }}>
          <Image src="/6.webp" alt="IPTV Interface 3" fill />
        </div>
      </div>
    </section>
  );
}
