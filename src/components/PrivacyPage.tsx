interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-[#F9F5EA] text-[#0F3455] py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#D82A2D]/30 bg-[#D82A2D]/5">
            <div className="w-2 h-2 bg-[#D82A2D]"></div>
            <span className="text-xs text-[#D82A2D] tracking-widest font-medium">
              LEGAL
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl text-[#0F3455] mb-4 tracking-tight font-semibold">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#0F3455]/60">
            Last updated: November 14, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#0F3455]/80 leading-relaxed">
            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                1. Introduction
              </h2>
              <p>
                Capicú Technologies LLC ("Capicú," "we," "us," or "our") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, websites, and applications, including EnMedio and other healthcare and edge computing solutions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                2. Information We Collect
              </h2>
              
              <h3 className="text-xl text-[#0F3455] mb-3 mt-4 font-semibold">
                2.1 Information You Provide
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Contact information (name, email address, phone number, company affiliation)</li>
                <li>Account credentials and profile information</li>
                <li>Healthcare-related information when using EnMedio (clinical notes, care coordination data)</li>
                <li>Communications with our team</li>
                <li>Information submitted through forms on our website</li>
              </ul>

              <h3 className="text-xl text-[#0F3455] mb-3 mt-4 font-semibold">
                2.2 Automatically Collected Information
              </h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Device information (IP address, browser type, operating system)</li>
                <li>Usage data (pages visited, features used, time spent on services)</li>
                <li>Cookies and similar tracking technologies</li>
                <li>Log data and analytics information</li>
              </ul>

              <h3 className="text-xl text-[#0F3455] mb-3 mt-4 font-semibold">
                2.3 Edge Computing and Local Processing
              </h3>
              <p>
                A core principle of our technology is privacy-by-design through edge computing. Many of our services process data locally on your device, meaning sensitive information never leaves your hardware unless you explicitly choose to sync or share it. When data is processed on-device, we may collect anonymized performance metrics but not the underlying sensitive data itself.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                3. How We Use Your Information
              </h2>
              <p className="mb-3">We use the information we collect to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and customer service requests</li>
                <li>Develop new products, services, and features</li>
                <li>Monitor and analyze trends, usage, and activities</li>
                <li>Detect, prevent, and address technical issues and security vulnerabilities</li>
                <li>Comply with legal obligations and protect rights and safety</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                4. Healthcare Data and HIPAA Compliance
              </h2>
              <p>
                For healthcare-related services including EnMedio, we understand the critical importance of protecting health information. When we act as a Business Associate under HIPAA, we:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Implement appropriate administrative, physical, and technical safeguards</li>
                <li>Use and disclose Protected Health Information (PHI) only as permitted by law</li>
                <li>Enter into Business Associate Agreements with covered entities</li>
                <li>Employ edge computing to minimize PHI transmission and centralized storage</li>
                <li>Provide individuals with rights regarding their health information as required by law</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                5. Information Sharing and Disclosure
              </h2>
              <p className="mb-3">We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>With your consent:</strong> When you authorize us to share your information</li>
                <li><strong>Service providers:</strong> With third-party vendors who perform services on our behalf</li>
                <li><strong>Business transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                <li><strong>Legal requirements:</strong> When required by law, court order, or governmental regulation</li>
                <li><strong>Protection of rights:</strong> To protect our rights, privacy, safety, or property</li>
                <li><strong>Anonymized data:</strong> Aggregated or de-identified data that cannot reasonably identify you</li>
              </ul>
              <p className="mt-3">
                We do not sell your personal information to third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                6. Data Security
              </h2>
              <p>
                We implement industry-standard security measures to protect your information, including:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Encryption in transit and at rest</li>
                <li>Edge computing architecture that minimizes data exposure</li>
                <li>Access controls and authentication mechanisms</li>
                <li>Regular security assessments and updates</li>
                <li>Employee training on data protection practices</li>
              </ul>
              <p className="mt-3">
                However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                7. Data Retention
              </h2>
              <p>
                We retain your information for as long as necessary to provide our services, comply with legal obligations, resolve disputes, and enforce our agreements. Healthcare data is retained according to applicable legal and regulatory requirements. Edge-processed data that remains on your device is under your control and subject to your own retention policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                8. Your Rights and Choices
              </h2>
              <p className="mb-3">Depending on your location, you may have certain rights regarding your personal information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Access:</strong> Request access to the personal information we hold about you</li>
                <li><strong>Correction:</strong> Request correction of inaccurate or incomplete information</li>
                <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                <li><strong>Portability:</strong> Request a copy of your information in a structured format</li>
                <li><strong>Objection:</strong> Object to certain processing of your information</li>
                <li><strong>Restriction:</strong> Request restriction of processing in certain circumstances</li>
              </ul>
              <p className="mt-3">
                To exercise these rights, please contact us at <a href="mailto:info@capicupuertorico.com" className="text-[#D82A2D] hover:underline">info@capicupuertorico.com</a>.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                9. Cookies and Tracking Technologies
              </h2>
              <p>
                We use cookies and similar technologies to collect information about your browsing activities and to distinguish you from other users. This helps us provide a better experience and improve our services. You can control cookies through your browser settings, but disabling cookies may limit your ability to use certain features.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                10. Third-Party Links and Services
              </h2>
              <p>
                Our services may contain links to third-party websites or integrate with third-party services. We are not responsible for the privacy practices of these third parties. We encourage you to read their privacy policies before providing any information to them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                11. Children's Privacy
              </h2>
              <p>
                Our services are not intended for children under the age of 13, and we do not knowingly collect personal information from children under 13. If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                12. International Data Transfers
              </h2>
              <p>
                Your information may be transferred to and processed in countries other than your country of residence. These countries may have data protection laws that differ from those in your country. By using our services, you consent to the transfer of your information to Puerto Rico, the United States, and other jurisdictions where we operate.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                13. Changes to This Privacy Policy
              </h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of material changes by posting the new Privacy Policy on our website and updating the "Last updated" date. Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                14. Contact Us
              </h2>
              <p>
                If you have questions or concerns about this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <div className="mt-3 pl-4">
                <p className="font-medium">Capicú Technologies LLC</p>
                <p>Email: <a href="mailto:info@capicupuertorico.com" className="text-[#D82A2D] hover:underline">info@capicupuertorico.com</a></p>
              </div>
            </section>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#0F3455]/20">
          <button
            onClick={() => onNavigate("home")}
            className="text-[#D82A2D] hover:underline font-medium"
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
