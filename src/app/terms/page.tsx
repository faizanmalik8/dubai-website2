import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | IPTV Dubai',
  description: 'Terms and Conditions for using IPTV Dubai services.',
};

export default function TermsAndConditions() {
  return (
    <div className="container" style={{ padding: '8rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Terms & Conditions</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
        <p>Welcome to IPTV Dubai. By accessing our website and purchasing our services, you agree to be bound by the following Terms & Conditions. Please read them carefully.</p>
        
        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>1. Use of Service</h2>
        <p>Our IPTV service is provided for personal, non-commercial use. You may not resell, redistribute, or broadcast our content without explicit permission.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>2. Account and Subscription</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials. We reserve the right to suspend or terminate accounts that are found to be shared or used simultaneously on more devices than your plan allows.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>3. Service Availability</h2>
        <p>While we strive for 99.9% uptime, we cannot guarantee uninterrupted service due to factors beyond our control, such as internet provider issues, server maintenance, or force majeure events.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>4. Changes to Terms</h2>
        <p>We reserve the right to modify these terms at any time. Continued use of our service constitutes acceptance of the revised terms.</p>
      </div>
    </div>
  );
}
