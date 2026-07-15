'use client';
import styles from './WhyChooseService.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

const WHATSAPP_NUMBER = '1234567890';
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=I%20want%20to%20Watch%20Now`;

export default function WhyChooseService() {
  const { targetRef, isIntersecting } = useIntersectionObserver();

  const features = [
    {
      title: "Massive Entertainment Library",
      desc: "Enjoy access to 50,000+ live TV channels and 200,000+ movies & TV series, including sports, news, Arabic channels, Indian entertainment, kids' content, and international programming—all with one IPTV subscription."
    },
    {
      title: "Ultra-Fast & Buffer-Free Streaming",
      desc: "Our high-performance servers deliver smooth, reliable streaming in HD, 4K, and 8K quality. Enjoy your favourite content without buffering, freezing, or interruptions."
    },
    {
      title: "Affordable IPTV Plans",
      desc: "Choose from flexible 1-month, 3-month, 6-month, and 12-month IPTV subscription plans designed to suit every budget without compromising on quality."
    },
    {
      title: "Regular Content Updates",
      desc: "We frequently add new live channels, movies, TV series, and sports events, ensuring you always have fresh entertainment and the latest content to enjoy."
    },
    {
      title: "Instant Activation",
      desc: "Receive your IPTV login details within minutes after your order is confirmed. Setup is quick and simple, allowing you to start streaming almost immediately."
    },
    {
      title: "24/7 Expert Customer Support",
      desc: "Our dedicated support team is available 24/7 via WhatsApp and email to help with installation, activation, and technical assistance whenever you need it."
    }
  ];

  return (
    <section className={styles.section} ref={targetRef}>
      <div className="container">
        <h2 className={`reveal ${isIntersecting ? 'active' : ''} ${styles.title}`}>Why Choose Our IPTV Dubai Service?</h2>
        
        <div className={styles.grid}>
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className={`reveal ${isIntersecting ? 'active' : ''} ${styles.featureCard}`}
              style={{ transitionDelay: `${0.1 * idx}s` }}
            >
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDesc}>{feature.desc}</p>
            </div>
          ))}
        </div>

        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.btnWrapper}`} style={{ transitionDelay: '0.6s' }}>
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Watch Now
          </a>
        </div>
      </div>
    </section>
  );
}
