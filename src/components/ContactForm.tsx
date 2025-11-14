import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";

export default function ContactForm({ className = "" }: { className?: string }) {
  const [state, handleSubmit] = useForm("mnnddqko");
  const [selectedInquiry, setSelectedInquiry] = useState("");
  const [selectedHearAbout, setSelectedHearAbout] = useState("");

  const handleInquiryClick = (value: string) => {
    if (selectedInquiry === value) {
      setSelectedInquiry("");
      const input = document.getElementById('inquiry-type') as HTMLInputElement;
      if (input) input.value = "";
    } else {
      setSelectedInquiry(value);
      const input = document.getElementById('inquiry-type') as HTMLInputElement;
      if (input) input.value = value;
    }
  };

  const handleHearAboutClick = (value: string) => {
    if (selectedHearAbout === value) {
      setSelectedHearAbout("");
      const input = document.getElementById('hear-about') as HTMLInputElement;
      if (input) input.value = "";
    } else {
      setSelectedHearAbout(value);
      const input = document.getElementById('hear-about') as HTMLInputElement;
      if (input) input.value = value;
    }
  };

  if (state.succeeded) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl text-[#0F3455] mb-4 font-semibold">Thank you!</h2>
        <p className="text-lg text-[#0F3455]/70">Your message has been sent. We'll be in touch soon.</p>
      </div>
    );
  }

  return (
    <form className={className} onSubmit={handleSubmit}>
      <div className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm text-[#0F3455] mb-2 font-medium">
              Full Name <span className="text-[#D82A2D]">*</span>
            </label>
            <input 
              id="name" 
              type="text" 
              name="name" 
              placeholder="Enter your full name"
              required 
              className="w-full px-4 py-3 border border-[#0F3455]/20 bg-white focus:outline-none focus:border-[#D82A2D] transition-colors"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm text-[#0F3455] mb-2 font-medium">
              Email Address <span className="text-[#D82A2D]">*</span>
            </label>
            <input 
              id="email" 
              type="email" 
              name="email" 
              placeholder="your.email@company.com"
              required 
              className="w-full px-4 py-3 border border-[#0F3455]/20 bg-white focus:outline-none focus:border-[#D82A2D] transition-colors"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
        </div>

        <div>
          <label htmlFor="company" className="block text-sm text-[#0F3455] mb-2 font-medium">
            Company/Organization
          </label>
          <input 
            id="company" 
            type="text" 
            name="company" 
            placeholder="Your company or organization"
            className="w-full px-4 py-3 border border-[#0F3455]/20 bg-white focus:outline-none focus:border-[#D82A2D] transition-colors"
          />
        </div>

        <div>
          <label className="block text-sm text-[#0F3455] mb-3 font-medium">
            Inquiry Type <span className="text-[#D82A2D]">*</span>
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedInquiry === 'partnership' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleInquiryClick('partnership')}
            >
              Partnership Opportunity
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedInquiry === 'technical' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleInquiryClick('technical')}
            >
              Technical Consultation
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedInquiry === 'project' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleInquiryClick('project')}
            >
              Project Discussion
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedInquiry === 'general' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleInquiryClick('general')}
            >
              General Inquiry
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedInquiry === 'career' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleInquiryClick('career')}
            >
              Career Opportunities
            </button>
          </div>
          <input type="hidden" id="inquiry-type" name="inquiry-type" required />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm text-[#0F3455] mb-2 font-medium">
            Tell us about your project <span className="text-[#D82A2D]">*</span>
          </label>
          <textarea 
            id="message" 
            name="message" 
            rows={6} 
            placeholder="Describe your project, challenges, or what you'd like to discuss..."
            required 
            className="w-full px-4 py-3 border border-[#0F3455]/20 bg-white focus:outline-none focus:border-[#D82A2D] transition-colors resize-vertical"
          />
          <ValidationError prefix="Message" field="message" errors={state.errors} />
        </div>

        <div>
          <label className="block text-sm text-[#0F3455] mb-3 font-medium">
            How did you hear about us?
          </label>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedHearAbout === 'search' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleHearAboutClick('search')}
            >
              Search Engine
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedHearAbout === 'social' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleHearAboutClick('social')}
            >
              Social Media
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedHearAbout === 'referral' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleHearAboutClick('referral')}
            >
              Referral
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedHearAbout === 'conference' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleHearAboutClick('conference')}
            >
              Conference/Event
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedHearAbout === 'university' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleHearAboutClick('university')}
            >
              University
            </button>
            <button 
              type="button" 
              className={`px-4 py-3 text-sm border transition-all ${
                selectedHearAbout === 'other' 
                  ? 'bg-[#D82A2D] text-[#F9F5EA] border-[#D82A2D]' 
                  : 'border-[#0F3455]/20 text-[#0F3455] hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5'
              }`}
              onClick={() => handleHearAboutClick('other')}
            >
              Other
            </button>
          </div>
          <input type="hidden" id="hear-about" name="hear-about" />
        </div>

        <div className="pt-4">
          <button 
            type="submit" 
            className="px-8 py-4 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] tracking-wide transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={state.submitting}
          >
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
        </div>
      </div>
    </form>
  );
}

