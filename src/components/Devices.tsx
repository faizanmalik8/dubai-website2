'use client';
import Image from 'next/image';
import styles from './Devices.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Devices() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const devices = [
    "Smart TVs (Samsung, LG, Sony, TCL & Hisense)",
    "Amazon Firestick & Fire TV",
    "Android TV & Android TV Boxes",
    "Apple TV (4th Generation & Later)",
    "Android Phones & Tablets",
    "iPhone & iPad (iOS)",
    "Windows PCs & Laptops",
    "Mac Computers (macOS)",
    "Formuler Devices",
    "NVIDIA Shield TV",
    "Chromecast with Google TV",
    "Roku Devices",
    "BuzzTV",
    "MAG Boxes",
    "Xbox & PlayStation Consoles"
  ];

  return (
    <section className={styles.section} ref={targetRef}>
      <div className={`container ${styles.container}`}>
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.header}`}>
          <h2 className={styles.title}>IPTV Compatible Devices</h2>
          <p className={styles.description}>Our IPTV Dubai service is compatible with virtually all modern streaming devices, allowing you to enjoy premium entertainment wherever you are.</p>
        </div>

        <div className={styles.contentWrapper}>
          <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.listWrapper}`} style={{ transitionDelay: '0.2s' }}>
            {devices.map((device, idx) => (
              <div key={idx} className={styles.listItem}>
                <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                {device}
              </div>
            ))}
          </div>

          <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.imageGrid}`} style={{ transitionDelay: '0.4s' }}>
            <div className={styles.imageWrapper}>
              <Image src="/tv1.webp" alt="Smart TV Compatibility" fill />
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/tv2.webp" alt="Firestick Compatibility" fill />
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/tv3.webp" alt="Apple TV Compatibility" fill />
            </div>
            <div className={styles.imageWrapper}>
              <Image src="/tv4.webp" alt="Mobile Devices Compatibility" fill />
            </div>
          </div>
        </div>

        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.bottomText}`} style={{ transitionDelay: '0.6s' }}>
          Our IPTV UAE service works seamlessly with popular IPTV players, including IPTV Smarters Pro, TiviMate, XCIPTV, IBO Player Pro, Bob Player, and other compatible apps. Stream live TV, premium sports, movies, TV series, Arabic channels, South Asian entertainment, and international content in HD, 4K, and 8K quality with fast, stable, and buffer-free performance on your favourite device.
        </div>
      </div>
    </section>
  );
}
