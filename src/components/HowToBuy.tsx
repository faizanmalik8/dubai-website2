'use client';
import Image from 'next/image';
import styles from './HowToBuy.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function HowToBuy() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  return (
    <section className={styles.section} ref={targetRef}>
      <div className="container">
        <h2 className={`reveal ${isIntersecting ? 'active' : ''} ${styles.title}`}>How To Buy IPTV Subscription?</h2>
        
        <div className={styles.contentWrapper}>
          <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.imageGrid}`}>
            <Image src="/1.webp" alt="IPTV Devices" width={500} height={300} className={styles.img1} />
            <Image src="/2.webp" alt="IPTV App interface" width={250} height={200} className={styles.img2} />
            <Image src="/3.webp" alt="IPTV Channels" width={250} height={200} className={styles.img3} />
          </div>

          <div className={styles.steps}>
            <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.step}`} style={{ transitionDelay: '0.2s' }}>
              <div className={styles.stepNumber}>1</div>
              <div className={styles.stepContent}>
                <h3>Choose Your IPTV Plan</h3>
                <p>Select the IPTV subscription Dubai package that best suits your entertainment needs. Complete your secure checkout and provide your email address or WhatsApp number. Your IPTV login credentials will be delivered quickly so you can start streaming without delay.</p>
              </div>
            </div>

            <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.step}`} style={{ transitionDelay: '0.4s' }}>
              <div className={styles.stepNumber}>2</div>
              <div className={styles.stepContent}>
                <h3>Install Your IPTV Player</h3>
                <p>Download a compatible IPTV player such as IPTV Smarters Pro or another recommended app from the Google Play Store, Apple App Store, or Amazon Appstore. Our IPTV Dubai service is compatible with Smart TVs, Firestick, Android, iPhone, iPad, Windows, and Mac.</p>
              </div>
            </div>

            <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.step}`} style={{ transitionDelay: '0.6s' }}>
              <div className={styles.stepNumber}>3</div>
              <div className={styles.stepContent}>
                <h3>Activate & Start Streaming</h3>
                <p>Enter the IPTV credentials you received into your IPTV player and activate your subscription. Enjoy the best IPTV Dubai experience with thousands of live TV channels, premium sports, movies, TV series, and international entertainment in crystal-clear HD, 4K, and 8K quality across the UAE.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
