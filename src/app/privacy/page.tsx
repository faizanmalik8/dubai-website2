import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | IPTV Dubai',
  description: 'Privacy Policy for IPTV Dubai. Learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicy() {
  return (
    <div className="container" style={{ padding: '8rem 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Privacy Policy</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Effective Date: July 1, 2026</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
        <p>At IPTV Dubai, we respect your privacy and are committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the steps we take to keep it secure when you visit our website or purchase one of our IPTV subscription plans.</p>
        <p>By accessing or using our website, you agree to the practices described in this Privacy Policy.</p>
        
        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>1. Information We Collect</h2>
        <h3 style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem' }}>Personal Information</h3>
        <p>When you place an order, contact our support team, or request information, we may collect:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Full Name</li>
          <li>Email Address</li>
          <li>Phone Number</li>
          <li>Billing Information</li>
          <li>Payment Details (Payments are processed securely through trusted third-party payment providers. We do not store your debit or credit card information.)</li>
        </ul>

        <h3 style={{ color: 'var(--color-text-primary)', fontSize: '1.2rem' }}>Technical Information</h3>
        <p>When you browse our website, we may automatically collect:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>IP Address</li>
          <li>Browser Type</li>
          <li>Device Information</li>
          <li>Operating System</li>
          <li>Pages Visited</li>
          <li>Time Spent on the Website</li>
          <li>Referring Website</li>
        </ul>
        <p>This information helps us improve website performance, security, and user experience.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>2. How We Use Your Information</h2>
        <p>We may use your information to:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Process and activate your IPTV subscription.</li>
          <li>Deliver account details and service updates.</li>
          <li>Provide customer and technical support.</li>
          <li>Improve our website, products, and services.</li>
          <li>Send promotional offers when you have chosen to receive them.</li>
          <li>Prevent fraud and protect our website.</li>
          <li>Comply with applicable legal obligations.</li>
        </ul>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>3. Sharing Your Information</h2>
        <p>We value your privacy and do not sell or rent your personal information.</p>
        <p>Your information may only be shared with:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Trusted payment processors for secure transactions.</li>
          <li>Service providers that help us operate our website or provide customer support.</li>
          <li>Government authorities or law enforcement where required by applicable law.</li>
          <li>A successor organization if our business is merged, acquired, or transferred.</li>
        </ul>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>4. Cookies</h2>
        <p>Our website uses cookies and similar technologies to:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Improve website functionality.</li>
          <li>Remember your preferences.</li>
          <li>Analyze visitor behaviour.</li>
          <li>Enhance website performance.</li>
        </ul>
        <p>You may disable cookies through your browser settings, although some website features may not function correctly.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>5. Data Security</h2>
        <p>We use appropriate technical and organizational security measures to protect your personal information against unauthorized access, loss, misuse, or disclosure. While we strive to safeguard your information, no internet transmission or electronic storage system can be guaranteed to be completely secure.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>6. Your Privacy Rights</h2>
        <p>Depending on your location, you may have the right to:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Request access to your personal information.</li>
          <li>Correct inaccurate information.</li>
          <li>Request deletion of your data.</li>
          <li>Withdraw consent for marketing communications.</li>
          <li>Request information about how your data is processed.</li>
        </ul>
        <p>To exercise these rights, please contact our support team.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>7. Third-Party Websites</h2>
        <p>Our website may include links to third-party websites for your convenience. We are not responsible for the privacy practices or content of external websites. We encourage you to review their privacy policies before providing any personal information.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>8. Children's Privacy</h2>
        <p>Our IPTV services are intended for users who are at least 18 years of age. We do not knowingly collect personal information from children. If we become aware that such information has been collected, we will promptly remove it from our records.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>9. Updates to This Privacy Policy</h2>
        <p>We may revise this Privacy Policy from time to time to reflect changes in our services or legal requirements. Any updates will be published on this page with a revised effective date.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>10. Contact Us</h2>
        <p>If you have any questions about this Privacy Policy or the way we handle your personal information, please contact us.</p>
        <p>Email: info@iptvdubai.org</p>
        <p>We will respond to your enquiry as quickly as possible.</p>
      </div>
    </div>
  );
}
