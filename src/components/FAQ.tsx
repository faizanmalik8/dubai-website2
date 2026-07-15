'use client';
import { useState } from 'react';
import styles from './FAQ.module.css';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export default function FAQ() {
  const { targetRef, isIntersecting } = useIntersectionObserver();
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const faqs = [
    {
      q: "What is IPTV?",
      a: "IPTV (Internet Protocol Television) is a streaming technology that delivers live TV channels, movies, sports, and TV series over an internet connection instead of traditional cable or satellite services."
    },
    {
      q: "Is IPTV legal in the UAE?",
      a: "IPTV technology is legal. Users should ensure they subscribe to a legitimate IPTV service and comply with local laws and regulations in the UAE."
    },
    {
      q: "How do I subscribe to IPTV Dubai?",
      a: "Choose your preferred IPTV subscription plan, complete the secure payment, and you'll receive your activation details via email or WhatsApp within minutes."
    },
    {
      q: "Can I try IPTV before purchasing?",
      a: "Yes, we offer a free trial so you can experience our IPTV Dubai service before choosing a subscription plan."
    },
    {
      q: "Which devices support IPTV?",
      a: "Our IPTV service works with Smart TVs, Firestick, Android TV, Apple TV, Windows, Mac, smartphones, tablets, Formuler, BuzzTV, Roku, and many other compatible devices."
    },
    {
      q: "What internet speed is recommended for IPTV?",
      a: "We recommend a minimum internet speed of 25 Mbps for HD streaming and 50 Mbps or higher for the best 4K and 8K viewing experience."
    },
    {
      q: "What channels are included in the IPTV subscription?",
      a: "Your IPTV subscription includes thousands of live TV channels, premium sports, movies, TV series, kids' content, news, Arabic, Indian, Pakistani, and international entertainment."
    },
    {
      q: "How quickly is my IPTV subscription activated?",
      a: "Most IPTV subscriptions are activated within 5 to 15 minutes after your payment is confirmed."
    },
    {
      q: "Do I need a VPN to use IPTV in Dubai?",
      a: "A VPN is not required for most users. However, some customers choose to use one for additional privacy and security while streaming."
    },
    {
      q: "Do you provide customer support?",
      a: "Yes, our dedicated support team is available 24/7 to assist with installation, activation, account setup, and technical support whenever you need help."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.section} ref={targetRef}>
      <div className="container">
        <div className={`reveal ${isIntersecting ? 'active' : ''} ${styles.header}`}>
          <h2 className={styles.title}>Frequently Asked Questions</h2>
        </div>

        <div className={styles.accordion}>
          {faqs.map((faq, idx) => (
            <div 
              key={idx} 
              className={`reveal ${isIntersecting ? 'active' : ''} ${styles.faqItem} ${openIndex === idx ? styles.open : ''}`}
              style={{ transitionDelay: `${Math.min(idx * 0.1, 0.5)}s` }}
            >
              <button 
                className={styles.question}
                onClick={() => toggleFAQ(idx)}
                aria-expanded={openIndex === idx}
              >
                {faq.q}
                <span className={styles.icon}></span>
              </button>
              <div className={styles.answerWrapper}>
                <div className={styles.answer}>
                  <div className={styles.answerInner}>
                    {faq.a}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
