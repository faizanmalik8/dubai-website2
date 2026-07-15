'use client';
import { useState } from 'react';
import styles from './Pricing.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=I%20want%20to%20buy%20the%20`;

const standardPlans = [
  { duration: '1 Month', price: 'AED 30', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
  { duration: '3 Months', price: 'AED 80', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
  { duration: '6 Months', price: 'AED 150', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
  { duration: '12 Months', price: 'AED 250', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
];

const premiumPlans = [
  { duration: '1 Month', price: 'AED 70', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '8K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
  { duration: '3 Months', price: 'AED 150', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '8K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
  { duration: '6 Months', price: 'AED 250', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '8K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
  { duration: '12 Months', price: 'AED 400', features: ['32000+ channels', '20k+ Movies & Series', '1 Device Connection', 'One-time payment', '4K Supported', '8K Supported', '24/7 Support', 'Instant Activation', 'Anti-Freeze', 'VPN Protection'] },
];

export default function Pricing() {
  const [isPremium, setIsPremium] = useState(false);
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const plans = isPremium ? premiumPlans : standardPlans;

  return (
    <section id="pricing" className={styles.pricingSection} ref={targetRef}>
      <div className="container">
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.header}`}>
          <h2 className={styles.title}>Pricing Plans</h2>
          <p>Choose the perfect IPTV package that suits your entertainment needs.</p>
          
          <div className={styles.toggleWrapper}>
            <span className={`${styles.toggleLabel} ${!isPremium ? styles.active : ''}`} onClick={() => setIsPremium(false)}>Standard</span>
            <div className={`${styles.toggleSwitch} ${isPremium ? styles.active : ''}`} onClick={() => setIsPremium(!isPremium)}>
              <div className={styles.toggleCircle}></div>
            </div>
            <span className={`${styles.toggleLabel} ${isPremium ? styles.active : ''}`} onClick={() => setIsPremium(true)}>Premium</span>
          </div>
        </div>

        <div className={styles.grid}>
          {plans.map((plan, idx) => (
            <div key={idx} className={`reveal ${isIntersecting ? 'active' : ''} ${styles.card}`} style={{ transitionDelay: `${idx * 0.1}s` }}>
              <div className={styles.cardDuration}>{plan.duration}</div>
              <div className={styles.cardPrice}>{plan.price}</div>
              <ul className={styles.featureList}>
                {plan.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <svg className={styles.checkIcon} width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a 
                href={`${WHATSAPP_LINK}${isPremium ? 'Premium' : 'Standard'}%20Plan%20(${plan.duration})`}
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.btnBuy}
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
