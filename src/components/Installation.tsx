'use client';
import styles from './Installation.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function Installation() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const steps = [
    "Install IBO X Player , IBO PRO Player , IBO Player & CR 7 Player in your devices.",
    "Send the picture of your mac address and device key to the provider.",
    "Select the subscription plan 4K Premium Server or 8K Strong Premium Server.",
    "Wait for 5 minutes your playlist will be added and will notify you in a time.",
    "Restart your device and check the desired playlist that you selected before."
  ];

  return (
    <section className={styles.section} ref={targetRef}>
      <div className="container">
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.header}`}>
          <h2 className={styles.title}>Installation Guide</h2>
          <p className={styles.description}>
            To enjoy IPTV on your device, simply download the required application and get started with your subscription. The setup process is quick and beginner-friendly, so you don’t need any technical skills. Within just a few minutes, you can complete the installation and configure your playlist.
          </p>
        </div>

        <div className={styles.stepper}>
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className={`reveal ${isIntersecting ? 'active' : ''} ${styles.step}`}
              style={{ transitionDelay: `${0.2 * idx}s` }}
            >
              <div className={styles.stepNumber}>{idx + 1}</div>
              <div className={styles.stepContent}>{step}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
