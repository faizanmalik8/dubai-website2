'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';

const WHATSAPP_NUMBER = '1234567890'; // Replace with actual WhatsApp number
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '/#hero' },
    { name: 'Pricing', href: '/#pricing' },
    { name: 'FAQs', href: '/#faq' },
    { name: 'Blog', href: '/blog' },
  ];

  return (
    <nav className={`${styles.navbar} ${isScrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        <Link href="/#hero" className={styles.logo}>
          <Image src="/logo.webp" alt="IPTV Dubai Logo" width={150} height={50} priority />
        </Link>

        {/* Desktop Menu */}
        <div className={styles.navLinks}>
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className={styles.navLink}>
              {link.name}
            </Link>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button 
          className={styles.hamburger}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`}></span>
          <span className={`${styles.bar} ${mobileMenuOpen ? styles.open : ''}`}></span>
        </button>

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${mobileMenuOpen ? styles.open : ''}`}>
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              href={link.href} 
              className={styles.navLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary text-center">
            Contact Us
          </a>
        </div>
      </div>
    </nav>
  );
}
