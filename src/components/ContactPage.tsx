import ContactForm from "./ContactForm";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {

  return (
    <div className="min-h-screen bg-[#F9F5EA] text-[#0F3455] py-32 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#D82A2D]/30 bg-[#D82A2D]/5">
            <div className="w-2 h-2 bg-[#D82A2D]"></div>
            <span className="text-xs text-[#D82A2D] tracking-widest font-medium">
              GET IN TOUCH
            </span>
          </div>
          <h1 className="text-4xl lg:text-5xl text-[#0F3455] mb-6 tracking-tight font-semibold">
            Contact Us
          </h1>
        </div>

        {/* Reach out card */}
        <div className="border border-[#0F3455]/20 bg-[#F9F5EA] p-6 mb-12">
          <div className="flex items-center gap-3">
            <span className="text-[#0F3455]/70">Reach out to our team:</span>
            <a
              href="mailto:info@capicupuertorico.com"
              className="text-[#D82A2D] font-medium hover:underline"
            >
              info@capicupuertorico.com
            </a>
          </div>
        </div>

        {/* Contact Form */}
        <ContactForm />
        
        <div className="mt-8">
          <p className="mt-4 text-sm font-semibold text-[#0F3455]/60">
            By submitting this form you agree to our{" "}
            <button
              type="button"
              onClick={() => onNavigate("terms")}
              className="text-[#D82A2D] hover:underline"
            >
              Terms of Service
            </button>{" "}
            and have read our{" "}
            <button
              type="button"
              onClick={() => onNavigate("privacy")}
              className="text-[#D82A2D] hover:underline"
            >
              Privacy Policy
            </button>
            .
          </p>
        </div>
      </div>
    </div>
  );
}