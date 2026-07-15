'use client';
import styles from './WhyBest.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=I%20want%20a%20Free%20Trial`;

export default function WhyBest() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <section className={styles.section} ref={targetRef}>
      <div className={`container ${styles.content}`}>
        <h2 className={`reveal ${isIntersecting ? 'active' : ''} ${styles.title}`}>Why We're the Best IPTV Provider</h2>
        
        <p className={`reveal ${isIntersecting ? 'active' : ''} ${styles.description}`} style={{ transitionDelay: '0.2s' }}>
          Experience premium entertainment with our reliable IPTV service, offering 50,000+ live TV channels and 200,000+ movies & TV series in stunning HD, 4K, and 8K quality. Our powerful servers deliver fast, stable, and buffer-free streaming, so you can enjoy your favourite content without interruptions.
        </p>
        
        <p className={`reveal ${isIntersecting ? 'active' : ''} ${styles.description}`} style={{ transitionDelay: '0.4s' }}>
          Access premium channels and on-demand entertainment from Canada, the USA, the UK, the UAE, France, Portugal, and many other countries—all with a single IPTV subscription. We combine high-quality streaming, affordable pricing, and regular content updates to provide exceptional value for every customer.
        </p>
        
        <p className={`reveal ${isIntersecting ? 'active' : ''} ${styles.description}`} style={{ transitionDelay: '0.6s' }}>
          Our IPTV service is fully compatible with Smart TVs, Firestick, Android TV, Apple TV, Windows, Mac, smartphones, and tablets, allowing you to enjoy premium entertainment anytime, anywhere, on the device you prefer.
        </p>

        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.btnWrapper}`} style={{ transitionDelay: '0.8s' }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Get Free Trial Now
          </a>
        </div>
      </div>
    </section>
  );
}
