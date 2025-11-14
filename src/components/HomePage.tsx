import { useState } from "react";
import sebastianPhoto from "figma:asset/a614c9aa5e8bd70778bc7838761b932a1b2af779.png";
import luisPhoto from "figma:asset/6588ff4c8ce5f8e0668f5f46de47fdf0aa0f8a80.png";
import misaelPhoto from "figma:asset/81d4597475544b0619c678615a255e67354bde9e.png";
import perspectivasLogo from "figma:asset/a9c311c1ba1bc4b44af5a77fdf7ab5e1574c721a.png";
import prstrtLogo from "figma:asset/223125e04591c49886a1c3320fc96637ca08cdec.png";
import colmena66Logo from "figma:asset/f5930b62372ebcdb8fb7fd67b76653cb295baf31.png";
import nsfAccessLogo from "figma:asset/8fd5a27aed5aaca66da45282a5be024710307666.png";
import venturewellLogo from "figma:asset/3b9bbd1d375c7107d6abbf9ba4914b6603eb964a.png";
import awsStartupsLogo from "figma:asset/a0a56e0c275f3fc8fe296cccad26c7f8bbfcd4b4.png";
import nvidiaInceptionLogo from "figma:asset/b71923b62a2af9f99e655b41a16b954e35f8a743.png";
import circuitBoardBg from "figma:asset/8f2dc359768f01eb26f2fc70a1c29aeb4d49d79f.png";

interface HomePageProps {
  currentText: string;
}

export function HomePage({ currentText }: HomePageProps) {
  const [activeCard, setActiveCard] = useState<"flow" | "demo">("flow");

  return (
    <>
      {/* Hero */}
      <section className="min-h-screen flex items-center px-6 pt-20">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h1 className="text-5xl lg:text-7xl mb-2 tracking-tight leading-tight font-semibold">
                Making AI Fit Anywhere
              </h1>
              
              {/* Animated typing text */}
              <div className="text-5xl lg:text-7xl mb-8 tracking-tight leading-tight font-semibold text-[#D82A2D] h-20">
                {currentText}
                <span className="animate-pulse">|</span>
              </div>

              <p className="text-xl text-[#0F3455]/70 mb-10 max-w-xl leading-relaxed">
                Capicú is an Applied AI/ML studio that
                co‑designs advanced analytical systems to work
                directly where biological and medical data is
                collected.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-8 py-4 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] tracking-wide transition-colors flex items-center justify-center gap-2 font-medium">
                  SEE THE ARCHITECTURE
                  <span>→</span>
                </button>
                <button className="px-8 py-4 border border-[#0F3455]/20 hover:bg-[#0F3455]/5 tracking-wide transition-colors font-medium">
                  EXPLORE EN
                  <span className="text-[#D82A2D]">MEDIO</span>
                </button>
              </div>
            </div>

            <div className="p-8 bg-[#F9F5EA] relative">
              <div className="text-center mb-6">
                <span className="text-sm text-[#0F3455] tracking-wider font-semibold">
                  Supported by:
                </span>
              </div>

              <div className="space-y-4">
                {/* First row - 2 logos */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center justify-center transition-all hover:-translate-y-1 cursor-pointer brightness-[0.4] hover:brightness-100">
                    <img
                      src={perspectivasLogo}
                      alt="Perspectivas Globales"
                      className="h-12 w-32 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:-translate-y-1 cursor-pointer">
                    <img
                      src={prstrtLogo}
                      alt="Puerto Rico Science Technology Research Trust"
                      className="h-12 w-32 object-contain"
                    />
                  </div>
                </div>

                {/* Second row - 3 logos */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:-translate-y-1 cursor-pointer">
                    <img
                      src={colmena66Logo}
                      alt="Colmena66"
                      className="h-12 w-32 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:-translate-y-1 cursor-pointer">
                    <img
                      src={nsfAccessLogo}
                      alt="NSF ACCESS"
                      className="h-12 w-32 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:-translate-y-1 cursor-pointer">
                    <img
                      src={venturewellLogo}
                      alt="VentureWell"
                      className="h-12 w-32 object-contain"
                    />
                  </div>
                </div>

                {/* Third row - 2 logos */}
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:-translate-y-1 cursor-pointer">
                    <img
                      src={awsStartupsLogo}
                      alt="AWS Startups"
                      className="h-12 w-32 object-contain"
                    />
                  </div>
                  <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all hover:-translate-y-1 cursor-pointer">
                    <img
                      src={nvidiaInceptionLogo}
                      alt="NVIDIA Inception"
                      className="h-12 w-32 object-contain"
                    />
                  </div>
                </div>
              </div>

              <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#D82A2D]"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#D82A2D]"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stack Diagram */}
      <section id="stack" className="py-32 px-6 bg-[#0F3455]/5">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#D82A2D]/30 bg-[#D82A2D]/5">
              <div className="w-2 h-2 bg-[#D82A2D]"></div>
              <span className="text-xs text-[#D82A2D] tracking-widest font-medium">
                PLATFORM STACK
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl text-[#0F3455] mb-4 tracking-tight font-semibold">
              Everywhere and <span> </span>
              <span className="text-[#D82A2D]">Anywhere</span>.
            </h2>
            <p className="text-xl text-[#0F3455]/70 max-w-3xl">
              We design computing that runs close to where data
              collected.
              <p>Here's how that helps different teams.</p>
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-8 relative group hover:border-[#D82A2D]/50 transition-all">
              <div className="absolute top-4 right-4 text-6xl opacity-5 text-[#0F3455] font-bold">
                01
              </div>
              <div className="w-12 h-12 border border-[#D82A2D]/50 flex items-center justify-center mb-6 bg-[#D82A2D]/5">
                <svg
                  className="w-6 h-6 text-[#D82A2D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0F3455] mb-3 tracking-wide font-semibold">
                For Software Engineers
              </h3>
              <p className="text-[#0F3455]/70 mb-4 leading-relaxed">
                <span className="text-[#D82A2D] font-bold">
                  Build on-device, without the headache.
                </span>{" "}
                We help you run features on the hardware you
                already ship. Systems keep working when the
                network is spotty, data stays near its source,
                and you control exactly what syncs to the cloud
                and when.
              </p>
              <div className="pt-4 border-t border-[#0F3455]/5">
                {/* <div className="text-xs text-[#0F3455]/60 tracking-wider">
                  Low-power ARM | RISC-V | Custom ASICs
                </div> */}
              </div>
            </div>

            <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-8 relative group hover:border-[#D82A2D]/50 transition-all">
              <div className="absolute top-4 right-4 text-6xl opacity-5 text-[#0F3455] font-bold">
                02
              </div>
              <div className="w-12 h-12 border border-[#D82A2D]/50 flex items-center justify-center mb-6 bg-[#D82A2D]/5">
                <svg
                  className="w-6 h-6 text-[#D82A2D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0F3455] mb-3 tracking-wide font-semibold">
                For Caregivers & Clinicians
              </h3>
              <p className="text-[#0F3455]/70 mb-4 leading-relaxed">
                <span className="text-[#D82A2D] font-bold">
                  Less typing, more care.
                </span>{" "}
                We turn everyday check-ins and observations into
                clean notes and timely updates so people spend
                less time typing and more time helping.
                Information goes to the right person and stays
                private by default.
              </p>
              <div className="pt-4 border-t border-[#0F3455]/5">
                {/* <div className="text-xs text-[#0F3455]/60 tracking-wider">
                  TinyML | Neural engines | DSP pipelines
                </div> */}
              </div>
            </div>

            <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-8 relative group hover:border-[#D82A2D]/50 transition-all">
              <div className="absolute top-4 right-4 text-6xl opacity-5 text-[#0F3455] font-bold">
                03
              </div>
              <div className="w-12 h-12 border border-[#D82A2D]/50 flex items-center justify-center mb-6 bg-[#D82A2D]/5">
                <svg
                  className="w-6 h-6 text-[#D82A2D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4"
                  />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0F3455] mb-3 tracking-wide font-semibold">
                For Researchers & Scientists
              </h3>
              <p className="text-[#0F3455]/70 mb-4 leading-relaxed">
                <span className="text-[#D82A2D] font-bold">
                  From experiment to usable software.
                </span>{" "}
                We meet data where it's created—at instruments,
                devices, and homes—and shape it into tidy,
                usable sets. When a method proves itself, we
                help turn it into a smart, reliable tool your
                team can run in the same places.
              </p>
              <div className="pt-4 border-t border-[#0F3455]/5">
                {/* <div className="text-xs text-[#0F3455]/60 tracking-wider">
                  HL7 FHIR | OMOP | Custom schemas
                </div> */}
              </div>
            </div>

            <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-8 relative group hover:border-[#D82A2D]/50 transition-all">
              <div className="absolute top-4 right-4 text-6xl opacity-5 text-[#0F3455] font-bold">
                04
              </div>
              <div className="w-12 h-12 border border-[#D82A2D]/50 flex items-center justify-center mb-6 bg-[#D82A2D]/5">
                <svg
                  className="w-6 h-6 text-[#D82A2D]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeWidth={2}
                    d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                  />
                </svg>
              </div>
              <h3 className="text-2xl text-[#0F3455] mb-3 tracking-wide font-semibold">
                For Biotech & Manufacturing
              </h3>
              <p className="text-[#0F3455]/70 mb-4 leading-relaxed">
                <span className="text-[#D82A2D] font-bold">
                  Make instruments and lines smarter.
                </span>{" "}
                We read signals in the moment and act on them,
                catching issues early and keeping a clear record
                of what happened, avoiding expensive downtime.
                Our systems sit longside what you already use,
                so change can be gradual.
              </p>
              <div className="pt-4 border-t border-[#0F3455]/5">
                {/* <div className="text-xs text-[#0F3455]/60 tracking-wider">
                    strokeLinejoin="round"
                  Health | Biology | Clinical research
                </div> */}
              </div>
            </div>
          </div>
          <div className="mt-16 border border-[#0F3455] bg-[#F9F5EA] p-12 flex flex-col md:flex-row items-center justify-between gap-6">
            <h3 className="text-3xl text-[#0F3455] tracking-tight font-semibold">
              <span className="text-[#D82A2D] font-bold">
                Enable Intelligence at the Edge
              </span>{" "}
              with Capicú.
            </h3>
            <a
              href="#contact"
              className="px-8 py-4 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] tracking-wide transition-colors font-medium whitespace-nowrap"
            >
              DISCUSS A PROJECT
            </a>
          </div>
        </div>
      </section>

      {/* EnMedio Product - Continued in next part due to length... */}
      {/* Rest of the sections will be added */}
    </>
  );
}
