'use client';
import Image from 'next/image';
import styles from './Carousel.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=I%20want%20to%20Buy%20Now`;

export default function Carousel() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  // We duplicate the images to create an infinite scroll effect
  const images = [
    '/1.webp', '/2.webp', '/3.webp', '/4.webp', '/5.webp', '/6.webp', 
    '/tv1.webp', '/tv2.webp', '/tv3.webp', '/tv4.webp'
  ];
  
  const duplicatedImages = [...images, ...images]; // Duplicate array for seamless loop

  return (
    <section className={styles.section} ref={targetRef}>
      <div className={`container ${styles.header} reveal ${isIntersecting ? 'active' : ''}`}>
        <h2 className={styles.title}>More Than Just an IPTV Subscription</h2>
        <p className={styles.description}>
          Our IPTV Dubai service offers more than live TV. Enjoy premium features designed to give you a complete entertainment experience.
        </p>
      </div>

      <div className={styles.carouselWrapper}>
        <div className={styles.carouselTrack}>
          {duplicatedImages.map((src, idx) => (
            <div key={idx} className={styles.imageCard}>
              <Image src={src} alt={`IPTV Feature ${idx}`} fill sizes="(max-width: 768px) 280px, 400px" />
            </div>
          ))}
        </div>
      </div>

      <div className={`container ${styles.btnWrapper} reveal ${isIntersecting ? 'active' : ''}`} style={{ transitionDelay: '0.4s' }}>
        <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
          Buy Now
        </a>
      </div>
    </section>
  );
}
