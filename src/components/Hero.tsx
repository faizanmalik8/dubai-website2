import Image from 'next/image';
import styles from './Hero.module.css';

const WHATSAPP_NUMBER = '1234567890'; // Replace with actual WhatsApp number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Hero() {
  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.heroBackground}>
        <Image 
          src="/hero.webp" 
          alt="IPTV Dubai Hero Background" 
          fill
          priority
        />
      </div>
      <div className={styles.heroOverlay}></div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={`${styles.title} ${styles.animateSlideUp} ${styles.delay1}`}>
          IPTV Dubai — <span className={styles.titleHighlight}>4K Streaming Subscription</span> for the Whole UAE
        </h1>
        <p className={`${styles.description} ${styles.animateSlideUp} ${styles.delay2}`}>
          Cable prices keep climbing, yet half your favorite shows still sit behind some premium add-on you didn't ask for. StreamHub Dubai fixes that with one subscription covering live channels, sports, movies, and on-demand series — streamed in 4K, with no satellite dish on the balcony and no technician visit.
        </p>
        <div className={`${styles.ctaWrapper} ${styles.animateSlideUp} ${styles.delay3}`}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
            Start Your Free Trial — No Card Required
          </a>
        </div>
      </div>
    </section>
  );
}
