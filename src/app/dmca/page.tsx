import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DMCA Policy | IPTV Dubai',
  description: 'DMCA Policy for IPTV Dubai.',
};

export default function DMCAPolicy() {
  return (
    <div className="container" style={{ padding: '8rem 2rem 4rem', maxWidth: '800px', margin: '0 auto', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>DMCA Policy</h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', lineHeight: '1.7', color: 'var(--color-text-secondary)' }}>
        <p>IPTV Dubai respects the intellectual property rights of others. In accordance with the Digital Millennium Copyright Act (DMCA), we will respond expeditiously to claims of copyright infringement committed using the IPTV Dubai service that are reported to our designated copyright agent.</p>
        
        <h2 style={{ color: 'var(--color-text-primary)', marginTop: '1.5rem', fontSize: '1.5rem' }}>Filing a DMCA Notice</h2>
        <p>If you believe that your copyrighted work has been copied in a way that constitutes copyright infringement and is accessible via the Service, please notify us. For your complaint to be valid under the DMCA, you must provide the following information in writing:</p>
        <ul style={{ paddingLeft: '1.5rem' }}>
          <li>An electronic or physical signature of a person authorized to act on behalf of the copyright owner;</li>
          <li>Identification of the copyrighted work that you claim has been infringed;</li>
          <li>Identification of the material that is claimed to be infringing and where it is located on the Service;</li>
          <li>Information reasonably sufficient to permit us to contact you, such as your address, telephone number, and, e-mail address;</li>
          <li>A statement that you have a good faith belief that use of the material in the manner complained of is not authorized by the copyright owner, its agent, or law; and</li>
          <li>A statement, made under penalty of perjury, that the above information is accurate, and that you are the copyright owner or are authorized to act on behalf of the owner.</li>
        </ul>

        <p>Please send your DMCA notice to: info@iptvdubai.org</p>
      </div>
    </div>
  );
}
