import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Refund Policy | IPTV Dubai',
  description: 'Refund Policy for IPTV Dubai. Learn about our 7-day money-back guarantee and refund eligibility.',
};

export default function RefundPolicy() {
  return (
    <div className="container" style={{ padding: '8rem 2rem 4rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>Refund Policy</h1>
      <p style={{ color: 'var(--color-text-secondary)', marginBottom: '2rem' }}>Effective Date: July 1, 2026</p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
        <p>At IPTV Dubai, customer satisfaction is our priority. We strive to deliver a reliable IPTV service with fast activation and premium streaming quality. If you're not completely satisfied with your first purchase, please review our refund policy below.</p>
        
        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>1. 7-Day Money-Back Guarantee</h2>
        <p>We offer a 7-day money-back guarantee for eligible first-time customers. If you experience a service-related issue that our support team cannot resolve, you may request a refund within seven (7) days of your original purchase.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>2. Refund Eligibility</h2>
        <p>You may qualify for a full refund if:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Your refund request is submitted within 7 days of your initial purchase.</li>
          <li>You are purchasing our IPTV service for the first time.</li>
          <li>Your IPTV subscription cannot be activated due to an issue on our side.</li>
          <li>You experience technical problems that our support team is unable to resolve after reasonable troubleshooting.</li>
        </ul>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>3. Non-Refundable Situations</h2>
        <p>Refund requests may not be approved if:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>The request is made after the 7-day refund period.</li>
          <li>Incorrect device information or account details were provided during the order process.</li>
          <li>Your internet connection, network, or device is not suitable for IPTV streaming.</li>
          <li>The issue is caused by unsupported hardware, third-party applications, or user configuration.</li>
          <li>You have violated our Terms of Service or attempted to misuse the service.</li>
          <li>The purchase is a renewal, upgrade, or additional subscription, as the money-back guarantee applies only to first-time subscriptions.</li>
        </ul>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>4. How to Request a Refund</h2>
        <p>To request a refund, please contact our support team and include the following information:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>Full Name</li>
          <li>Email Address used for the purchase</li>
          <li>Order Number or Transaction ID</li>
          <li>A brief explanation of the issue or reason for the refund request</li>
        </ul>
        <p>Our team will review your request and respond within 24 to 48 hours. If approved, refunds will be issued to your original payment method. Processing times may vary depending on your payment provider.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>5. Partial Refunds</h2>
        <p>In certain situations, we may issue a partial refund if only a portion of the purchased service was delivered or used. Each request is evaluated individually based on the circumstances.</p>

        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>6. Need Assistance?</h2>
        <p>Before requesting a refund, we encourage you to contact our support team. Most activation, installation, and streaming issues can be resolved quickly by our technical specialists.</p>
        <p>Email: support@iptvdubai.org</p>
        <p>We're committed to providing fast, friendly, and professional assistance to ensure you have the best possible IPTV experience.</p>
      </div>
    </div>
  );
}
