import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';

const WHATSAPP_NUMBER = '1234567890'; // Replace with actual WhatsApp number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.footerSection}>
          <Link href="/#hero" className={styles.footerLogo}>
            <Image src="/logo.webp" alt="IPTV Dubai Logo" width={120} height={40} />
          </Link>
          <p className={styles.footerDesc}>
            Premium IPTV subscription service providing 4K/8K streaming for live channels, movies, and TV shows in Dubai and across the UAE.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/#hero" className={styles.footerLink}>Home</Link></li>
            <li><Link href="/#pricing" className={styles.footerLink}>Pricing</Link></li>
            <li><Link href="/#faq" className={styles.footerLink}>FAQs</Link></li>
            <li><Link href="/blog" className={styles.footerLink}>Blog</Link></li>
            <li><a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className={styles.footerLink}>Contact Us</a></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Legal</h4>
          <ul className={styles.footerLinks}>
            <li><Link href="/terms" className={styles.footerLink}>Terms & Conditions</Link></li>
            <li><Link href="/privacy" className={styles.footerLink}>Privacy Policy</Link></li>
            <li><Link href="/refund" className={styles.footerLink}>Refund Policy</Link></li>
            <li><Link href="/dmca" className={styles.footerLink}>DMCA Policy</Link></li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4>Follow Us</h4>
          <div className={styles.socialIcons}>
            <a href="#" aria-label="Facebook" className={styles.socialIcon}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/></svg>
            </a>
            <a href="#" aria-label="Instagram" className={styles.socialIcon}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.64.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s.01-3.58.07-4.85C2.38 3.85 3.9 2.3 7.15 2.15c1.27-.06 1.65-.07 4.85-.07zm0-2.16C8.74 0 8.33.01 7.05.07 2.76.26.26 2.77.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.28 2.7 6.78 6.98 6.98 1.28.06 1.69.07 4.95.07s3.67-.01 4.95-.07c4.28-.2 6.78-2.7 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.2-4.28-2.7-6.78-6.98-6.98C15.67.01 15.26 0 12 0zm0 5.84A6.16 6.16 0 1018.16 12 6.16 6.16 0 0012 5.84zm0 10.16A4 4 0 1116 12a4 4 0 01-4 4zm6.4-11.44a1.44 1.44 0 10-2.88 0 1.44 1.44 0 002.88 0z"/></svg>
            </a>
            <a href="#" aria-label="Pinterest" className={styles.socialIcon}>
               <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.08 3.16 9.42 7.63 11.18-.1-.94-.2-2.39.04-3.41.22-.92 1.4-5.93 1.4-5.93s-.36-.72-.36-1.78c0-1.67.97-2.92 2.18-2.92 1.03 0 1.53.77 1.53 1.7 0 1.04-.66 2.59-1 4.03-.28 1.21.6 2.19 1.79 2.19 2.15 0 3.8-2.27 3.8-5.54 0-2.9-2.08-4.93-5.06-4.93-3.46 0-5.49 2.59-5.49 5.27 0 1.04.4 2.15.9 2.75.1.12.11.23.08.35-.09.38-.28 1.15-.32 1.3-.05.2-.17.24-.38.15-1.42-.66-2.31-2.74-2.31-4.41 0-3.59 2.61-6.88 7.52-6.88 3.95 0 7.02 2.81 7.02 6.57 0 3.92-2.47 7.08-5.9 7.08-1.15 0-2.23-.6-2.6-1.3l-.71 2.7c-.26.98-.95 2.21-1.41 2.96A11.96 11.96 0 0012 24c6.63 0 12-5.37 12-12S18.63 0 12 0z"/></svg>
            </a>
            <a href="#" aria-label="YouTube" className={styles.socialIcon}>
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M23.5 6.18a3 3 0 00-2.11-2.11C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.39.57A3 3 0 00.5 6.18C0 8.04 0 12 0 12s0 3.96.5 5.82a3 3 0 002.11 2.11C4.47 20.5 12 20.5 12 20.5s7.53 0 9.39-.57a3 3 0 002.11-2.11C24 15.96 24 12 24 12s0-3.96-.5-5.82zM9.54 15.57V8.43L15.82 12l-6.28 3.57z"/></svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className={`container ${styles.footerBottom}`}>
        <p className={styles.copyright}>&copy; {currentYear} IPTV Dubai. All rights reserved.</p>
      </div>
    </footer>
  );
}
