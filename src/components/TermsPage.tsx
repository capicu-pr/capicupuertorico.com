interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
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
            Terms of Service
          </h1>
          <p className="text-sm text-[#0F3455]/60">
            Last updated: November 14, 2025
          </p>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="space-y-8 text-[#0F3455]/80 leading-relaxed">
            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                1. Agreement to Terms
              </h2>
              <p>
                By accessing or using the services, websites, or applications provided by Capicú Technologies LLC ("Capicú," "we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                2. Description of Services
              </h2>
              <p>
                Capicú provides applied AI/ML solutions, edge computing systems, and healthcare technology platforms including but not limited to EnMedio. Our services are designed for embedded, edge, and AI-native architectures with applications in healthcare, biological research, and other industries.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                3. User Responsibilities
              </h2>
              <p className="mb-3">You agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate, current, and complete information when using our services</li>
                <li>Maintain the security of your account credentials</li>
                <li>Comply with all applicable local, state, national, and international laws and regulations</li>
                <li>Not use our services for any unlawful or unauthorized purpose</li>
                <li>Not interfere with or disrupt the integrity or performance of our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                4. Intellectual Property Rights
              </h2>
              <p>
                All content, features, and functionality of our services, including but not limited to text, graphics, logos, software, and designs, are owned by Capicú Technologies LLC and are protected by United States and international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                5. Healthcare and Medical Disclaimer
              </h2>
              <p>
                Our healthcare-related services, including EnMedio, are designed to assist with care coordination and communication. They are not intended to replace professional medical advice, diagnosis, or treatment. Always seek the advice of qualified health providers with any questions you may have regarding a medical condition.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                6. Data Processing and Privacy
              </h2>
              <p>
                Our collection, use, and protection of your data is governed by our Privacy Policy. By using our services, you consent to such processing and you warrant that all data provided by you is accurate. We implement edge computing solutions that process data locally where possible to enhance privacy and security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                7. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by law, Capicú Technologies LLC shall not be liable for any indirect, incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting from:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-3">
                <li>Your use or inability to use our services</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from our services</li>
                <li>Any bugs, viruses, or similar harmful components that may be transmitted through our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                8. Service Modifications and Termination
              </h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without prior notice. We may also terminate or suspend your access to our services immediately, without prior notice or liability, for any reason, including breach of these Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                9. Governing Law
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the Commonwealth of Puerto Rico and the United States, without regard to conflict of law provisions. Any legal action or proceeding arising under these Terms will be brought exclusively in the courts located in Puerto Rico.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                10. Changes to Terms
              </h2>
              <p>
                We reserve the right to modify these Terms at any time. We will notify users of any material changes by posting the new Terms on our website. Your continued use of our services after such modifications constitutes your acceptance of the updated Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl text-[#0F3455] mb-4 font-semibold">
                11. Contact Information
              </h2>
              <p>
                For questions about these Terms, please contact us at:
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
