import logo from "figma:asset/bc28cd3b23be4b191421f0ead27bb2b9b7c23ff5.png";
import capicuLogo from "figma:asset/98f05726183249c8abf9576dc27eac41911bdc9b.png";
import sebastianPhoto from "figma:asset/a614c9aa5e8bd70778bc7838761b932a1b2af779.png";
import luisPhoto from "figma:asset/6588ff4c8ce5f8e0668f5f46de47fdf0aa0f8a80.png";
import misaelPhoto from "figma:asset/81d4597475544b0619c678615a255e67354bde9e.png";
import supportLogos from "figma:asset/2044b0732535cf6fb1e384fc4dfcb13a7aa1b5cb.png";
import perspectivasLogo from "figma:asset/a9c311c1ba1bc4b44af5a77fdf7ab5e1574c721a.png";
import prstrtLogo from "figma:asset/223125e04591c49886a1c3320fc96637ca08cdec.png";
import colmena66Logo from "figma:asset/f5930b62372ebcdb8fb7fd67b76653cb295baf31.png";
import nsfAccessLogo from "figma:asset/8fd5a27aed5aaca66da45282a5be024710307666.png";
import venturewellLogo from "figma:asset/3b9bbd1d375c7107d6abbf9ba4914b6603eb964a.png";
import awsStartupsLogo from "figma:asset/a0a56e0c275f3fc8fe296cccad26c7f8bbfcd4b4.png";
import nvidiaInceptionLogo from "figma:asset/b71923b62a2af9f99e655b41a16b954e35f8a743.png";
import circuitBoardBg from "figma:asset/8f2dc359768f01eb26f2fc70a1c29aeb4d49d79f.png";
import cdiLabsLogo from "figma:asset/f351cf44c5b6d1dd913878ff7bc928df3cea8a55.png";
import uprmLogo from "figma:asset/88737ffc17c2f5081f003f3d596824314a783069.png";
import ufLogo from "figma:asset/9dd6196a68b01c561dcde95c7517dcccbd2f5042.png";
import aarpFigure4 from "./assets/aarp-report-figure4.png";
import enmedioBanner from "./assets/enmedio-banner.png";
import enmedioSoloLogo from "./assets/enmedio-solo-logo.png";
import cardBg from "./assets/card-bg.png";
import { useEffect, useState } from "react";
import { ContactPage } from "./components/ContactPage";
import ContactForm from "./components/ContactForm";
import { TermsPage } from "./components/TermsPage";
import { PrivacyPage } from "./components/PrivacyPage";

type Page = "home" | "contact" | "terms" | "privacy";

const collaborationLogos = [
  { src: cdiLabsLogo, alt: "CDI LABS" },
  { src: uprmLogo, alt: "Universidad de Mayagüez" },
  // { src: ufLogo, alt: "University of Florida" },
  { src: nsfAccessLogo, alt: "NSF ACCESS" },
];

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>("home");
  const [activeCard, setActiveCard] = useState<"challenge" | "flow" | "demo">(
    "challenge",
  );
  const [showProductsDropdown, setShowProductsDropdown] =
    useState(false);

  // Typing animation state
  const words = ["Lighter", "Faster", "Smarter"];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
  };

  // Scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [currentPage]);

  // Typing animation effect
  useEffect(() => {
    const currentWord = words[currentWordIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseDuration = 2000; // Pause before deleting

    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing forward
        if (currentText.length < currentWord.length) {
          setCurrentText(
            currentWord.slice(0, currentText.length + 1),
          );
        } else {
          // Word complete, pause then start deleting
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        // Deleting backward
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          // Done deleting, move to next word
          setIsDeleting(false);
          setCurrentWordIndex(
            (prevIndex) => (prevIndex + 1) % words.length,
          );
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex]);


  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";

    // Handle anchor clicks with offset for fixed navbar
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "A" &&
        target.getAttribute("href")?.startsWith("#")
      ) {
        e.preventDefault();
        const id = target.getAttribute("href")?.slice(1);
        const element = document.getElementById(id || "");
        if (element) {
          const offset = 80; // Height of fixed navbar
          const elementPosition =
            element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return (
    <div
      className="min-h-screen bg-[#F9F5EA] text-[#0F3455]"
      style={{ fontFamily: "'IBM Plex Sans', sans-serif" }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F9F5EA]/95 backdrop-blur-sm border-b border-[#0F3455]/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => handleNavigate("home")}
            className="flex items-center"
          >
            <img
              src={capicuLogo}
              alt="Capicú"
              className="h-10"
            />
          </button>
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => handleNavigate("home")}
              className="text-[#0F3455]/70 hover:text-[#0F3455] text-sm tracking-wide transition-colors"
            >
              HOME
            </button>
            <div
              className="relative"
              onMouseEnter={() => setShowProductsDropdown(true)}
              onMouseLeave={() =>
                setShowProductsDropdown(false)
              }
            >
              <button className="text-[#0F3455]/70 hover:text-[#0F3455] text-sm tracking-wide transition-colors">
                TECHNOLOGY
              </button>
              {showProductsDropdown && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-[#F9F5EA] border border-[#0F3455]/20 shadow-lg p-8 w-[600px]">
                  <div className="grid grid-cols-3 gap-8">
                    {/* Computing Column */}
                    <div>
                      <h3 className="text-xs tracking-widest text-[#0F3455]/60 mb-4 font-semibold border-b border-[#0F3455]/10 pb-2">
                        COMPUTING
                      </h3>
                      <div className="space-y-2">
                        <span className="block text-sm text-[#0F3455]/40 italic">
                          Coming soon
                        </span>
                      </div>
                    </div>

                    {/* Healthcare Column */}
                    <div>
                      <h3 className="text-xs tracking-widest text-[#0F3455]/60 mb-4 font-semibold border-b border-[#0F3455]/10 pb-2">
                        HEALTHCARE
                      </h3>
                      <div className="space-y-2">
                        <a
                          href="#products"
                          className="block text-sm text-[#0F3455] hover:text-[#D82A2D] transition-colors py-1"
                          onClick={() =>
                            setShowProductsDropdown(false)
                          }
                        >
                          En
                          <span className="text-[#D82A2D]">
                            Medio
                          </span>
                        </a>
                        {/* <a
                          href="#"
                          className="block text-sm text-[#0F3455] hover:text-[#D82A2D] transition-colors py-1"
                          onClick={() =>
                            setShowProductsDropdown(false)
                          }
                        >
                          En
                          <span className="text-[#D82A2D]">
                            Medio
                          </span>{" "}
                          MDDS
                        </a> */}
                        {/* <a
                          href="#"
                          className="block text-sm text-[#0F3455] hover:text-[#D82A2D] transition-colors py-1"
                          onClick={() =>
                            setShowProductsDropdown(false)
                          }
                        >
                          En
                          <span className="text-[#D82A2D]">
                            Medio
                          </span>{" "}
                          Scribe
                        </a> */}
                      </div>
                    </div>

                    {/* Biology Column */}
                    <div>
                      <h3 className="text-xs tracking-widest text-[#0F3455]/60 mb-4 font-semibold border-b border-[#0F3455]/10 pb-2">
                        BIOLOGY
                      </h3>
                      <div className="space-y-2">
                        <span className="block text-sm text-[#0F3455]/40 italic">
                          Coming soon
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/capicu-pr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3455]/70 hover:text-[#0F3455] transition-colors"
                aria-label="GitHub"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/capicu-pr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3455]/70 hover:text-[#0F3455] transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/capicu.pr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0F3455]/70 hover:text-[#0F3455] transition-colors"
                aria-label="Instagram"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
            <button
              onClick={() => handleNavigate("contact")}
              className="px-6 py-2 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] text-sm tracking-wide transition-colors font-medium"
            >
              CONTACT
            </button>
          </div>
        </div>
      </nav>

      {/* Conditional Page Rendering */}
      {currentPage === "contact" && (
        <ContactPage onNavigate={handleNavigate} />
      )}
      {currentPage === "terms" && (
        <TermsPage onNavigate={handleNavigate} />
      )}
      {currentPage === "privacy" && (
        <PrivacyPage onNavigate={handleNavigate} />
      )}

      {/* Home Page Content */}
      {currentPage === "home" && (
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
                    co‑designs advanced analytical systems to
                    work directly where biological and medical
                    data is collected.
                  </p>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button 
                        onClick={() => handleNavigate("contact")}
                        className="px-8 py-4 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] tracking-wide transition-colors flex items-center justify-center gap-2 font-medium"
                      >
                        REACH OUT
                        <span>→</span>
                      </button>
                      <button 
                        onClick={() => {
                          setCurrentPage("home");
                          setTimeout(() => {
                            const element = document.getElementById("products");
                            if (element) {
                              element.scrollIntoView({ behavior: "smooth" });
                            }
                          }, 100);
                        }}
                        className="px-8 py-4 border border-[#0F3455]/20 hover:bg-[#0F3455]/5 tracking-wide transition-colors font-medium"
                      >
                        EXPLORE EN
                        <span className="text-[#D82A2D]">
                          MEDIO
                        </span>
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
                      <div className="flex items-center justify-center transition-all hover:-translate-y-1 grayscale grayscale-50 cursor-pointer brightness-[0.4] hover:brightness-100">
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
          <section
            id="stack"
            className="py-32 px-6 bg-[#0F3455]/5"
          >
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
                  <span className="text-[#D82A2D]">
                    Anywhere
                  </span>
                  .
                </h2>
                <p className="text-xl text-[#0F3455]/70 max-w-3xl">
                  We design computing that runs close to the
                  data source.
                  <p>Here’s how that helps different teams.</p>
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
                    network is spotty, data stays near its
                    source, and you control exactly what syncs
                    to the cloud and when.
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
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
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
                    We turn everyday check-ins and observations
                    into clean notes and timely updates so
                    people spend less time typing and more time
                    helping. Information goes to the right
                    person and stays private by default.
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
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
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
                    We meet data where it's created—at
                    instruments, devices, and homes—and shape it
                    into tidy, usable sets. When a method proves
                    itself, we help turn it into a smart,
                    reliable tool your team can run in the same
                    places.
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
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
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
                    We read signals in the moment and act on
                    them, catching issues early and keeping a
                    clear record of what happened, avoiding
                    expensive downtime. Our systems sit longside
                    what you already use, so change can be
                    gradual.
                  </p>
                  <div className="pt-4 border-t border-[#0F3455]/5">
                    {/* <div className="text-xs text-[#0F3455]/60 tracking-wider">
                    strokeLinejoin="round"
                  Health | Biology | Clinical research
                </div> */}
                  </div>
                </div>
              </div>
              <div 
                className="mt-16 border border-[#0F3455] p-8 flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden"
                style={{
                  backgroundImage: `url(${cardBg})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
                <div 
                  className="absolute inset-0 bg-[#F9F5EA]"
                  style={{ opacity: 0.85 }}
                ></div>
                <div className="relative z-10">
                  <h3 className="text-3xl text-[#0F3455] tracking-tight font-semibold">
                    Enable
                    <span className="text-[#D82A2D] font-bold">
                      {" "}Intelligence at the Edge
                    </span>{" "}
                    with Capicú.
                  </h3>
                </div>
                <div className="relative z-10">
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="px-8 py-4 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] tracking-wide transition-colors font-medium whitespace-nowrap"
                  >
                    DISCUSS A PROJECT
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* EnMedio Product */}
          <section
            id="products"
            className="py-32 px-6 bg-[#F9F5EA]"
          >
            <div className="max-w-7xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#D82A2D]/30 bg-[#D82A2D]/5">
                    <div className="w-2 h-2 bg-[#D82A2D]"></div>
                    <span className="text-xs text-[#D82A2D] tracking-widest font-medium">
                      FEATURED APPLICATION
                    </span>
                  </div>

                  <h2 className="text-5xl text-[#0F3455] mb-6 tracking-tight font-semibold flex items-center gap-4">
                    <span>
                      En
                      <span className="text-[#D82A2D]">
                        Medio
                      </span>
                    </span>
                    <img
                      src={enmedioSoloLogo}
                      alt="EnMedio Logo"
                      className="h-12 w-auto"
                    />
                  </h2>

                  <p className="text-xl text-[#0F3455]/70 mb-4 leading-relaxed">
                  Over 53 million Americans are family caregivers – roughly 1 in
                  4 adults over 45 – and vital health details are usually
                  scattered across pill bottles, notebooks, and memory. Medical
                  jargon only adds to the confusion, so when an emergency
                  strikes, families freeze up and clinicians get late, fragmented
                  stories. We knew there had to be a better way.
                  </p>

                  <p className="text-xl text-[#0F3455]/70 mb-8 leading-relaxed">
                  <span className="font-semibold">
                    En
                    <span className="text-[#D82A2D]">
                      Medio
                    </span>{" "}
                    </span>
                    is coordination and communication made
                    simple. For family caregivers and health
                    professionals it keeps the network connected
                    and care delivery consistent. That is the
                    promise we're committing to:{" "}
                    <span className="text-[#D82A2D] font-semibold">
                      less noise, more alignment, and time
                      returning to care.
                    </span>
                  </p>

                  <a
                    href="http://share.hsforms.com/2QFKi_JUXRXC26dYlYPmGKwu4tk6"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] tracking-wide transition-colors font-medium"
                  >
                    USE ENMEDIO IN YOUR PRACTICE
                  </a>
                </div>

                <div className="relative">
                  <div className="flex gap-2 mb-4">
                    <button
                      onClick={() => setActiveCard("challenge")}
                      className={`px-4 py-2 text-xs tracking-wider transition-all font-medium ${
                        activeCard === "challenge"
                          ? "bg-[#D82A2D] text-[#F9F5EA]"
                          : "border border-[#0F3455]/20 text-[#0F3455]/60 hover:border-[#D82A2D]/30"
                      }`}
                    >
                      THE CHALLENGE
                    </button>
                    <button
                      onClick={() => setActiveCard("flow")}
                      className={`px-4 py-2 text-xs tracking-wider transition-all font-medium ${
                        activeCard === "flow"
                          ? "bg-[#D82A2D] text-[#F9F5EA]"
                          : "border border-[#0F3455]/20 text-[#0F3455]/60 hover:border-[#D82A2D]/30"
                      }`}
                    >
                      SIGNAL FLOW
                    </button>
                    <button
                      onClick={() => setActiveCard("demo")}
                      className={`px-4 py-2 text-xs tracking-wider transition-all font-medium ${
                        activeCard === "demo"
                          ? "bg-[#D82A2D] text-[#F9F5EA]"
                          : "border border-[#0F3455]/20 text-[#0F3455]/60 hover:border-[#D82A2D]/30"
                      }`}
                    >
                      DEMO
                    </button>
                    <a
                      href="http://share.hsforms.com/2QFKi_JUXRXC26dYlYPmGKwu4tk6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 text-xs tracking-wider transition-all font-medium border border-[#0F3455]/20 text-[#0F3455]/60 hover:border-[#D82A2D]/30 hover:bg-[#D82A2D]/5"
                    >
                      JOIN PILOT →
                    </a>
                  </div>

                  <div
                    className="relative overflow-hidden"
                    style={{ minHeight: "350px" }}
                  >
                    <div className="absolute inset-0 p-6">
                      {/* The Challenge Content */}
                      <div
                        className={`transition-all duration-700 ease-in-out ${
                          activeCard === "challenge"
                            ? "translate-x-0 opacity-100"
                            : "-translate-x-full opacity-0"
                        }`}
                      >
                        <div className="relative mx-auto w-full h-full flex items-center justify-center overflow-auto">
                          <div className="bg-white shadow-sm w-full max-w-5xl">
                            <img
                              src={aarpFigure4}
                              alt="Figure 13. Care Recipient Relation to Caregiver"
                              className="w-full h-auto"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Signal Flow Content */}
                      <div
                        className={`absolute inset-0 p-6 transition-all duration-700 ease-in-out ${
                          activeCard === "flow"
                            ? "translate-x-0 opacity-100"
                            : activeCard === "challenge"
                            ? "translate-x-full opacity-0"
                            : "-translate-x-full opacity-0"
                        }`}
                      >
                        <div
                          className="relative mx-auto"
                          style={{ maxWidth: "600px" }}
                        >
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 border-2 border-[#D82A2D] flex items-center justify-center flex-shrink-0 bg-[#F9F5EA]">
                                <svg
                                  className="w-7 h-7 text-[#D82A2D]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1 pt-1">
                                <div className="text-[#0F3455] mb-2 tracking-wide font-medium text-lg">
                                  Biomedical Speech-to-Text
                                </div>
                                <div className="text-sm text-[#0F3455]/60">
                                  Caregiver speaks naturally
                                  about patient status
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 ml-7">
                              <div className="w-px h-6 bg-[#D82A2D]/30"></div>
                            </div>

                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 border-2 border-[#D82A2D] flex items-center justify-center flex-shrink-0 bg-[#F9F5EA]">
                                <svg
                                  className="w-7 h-7 text-[#D82A2D]"
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
                              <div className="flex-1 pt-1">
                                <div className="text-[#0F3455] mb-2 tracking-wide font-medium text-lg">
                                  Edge AI Processing
                                </div>
                                <div className="text-sm text-[#0F3455]/60">
                                  Local inference converts
                                  speech to structured clinical
                                  data
                                </div>
                              </div>
                            </div>

                            <div className="flex items-center gap-2 ml-7">
                              <div className="w-px h-6 bg-[#D82A2D]/30"></div>
                            </div>

                            <div className="flex items-start gap-4">
                              <div className="w-14 h-14 border-2 border-[#D82A2D] flex items-center justify-center flex-shrink-0 bg-[#F9F5EA]">
                                <svg
                                  className="w-7 h-7 text-[#D82A2D]"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                                  />
                                </svg>
                              </div>
                              <div className="flex-1 pt-1">
                                <div className="text-[#0F3455] mb-2 tracking-wide font-medium text-lg">
                                  Care Team Alert
                                </div>
                                <div className="text-sm text-[#0F3455]/60">
                                  Family members & physicians
                                  receive formatted note +
                                  actionable insights
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Live Demo Content */}
                      <div
                        className={`absolute inset-0 p-6 transition-all duration-700 ease-in-out ${
                          activeCard === "demo"
                            ? "translate-x-0 opacity-100"
                            : activeCard === "challenge"
                            ? "translate-x-full opacity-0"
                            : activeCard === "flow"
                            ? "translate-x-full opacity-0"
                            : "translate-x-full opacity-0"
                        }`}
                      >
                        {/* MacBook Frame */}
                        <div
                          className="relative mx-auto"
                          style={{ maxWidth: "500px" }}
                        >
                          {/* MacBook Screen */}
                          <div className="relative bg-[#1a1a1a] rounded-lg p-2 shadow-2xl">
                            {/* Top bezel with notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-3 bg-[#1a1a1a] rounded-b-xl z-10"></div>

                            {/* Screen content */}
                            <div
                              className="relative bg-[#F9F5EA] rounded overflow-hidden"
                              style={{ aspectRatio: "16/10" }}
                            >
                              <iframe
                                src="https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7388413351317434368?compact=1"
                                width="100%"
                                height="100%"
                                frameBorder="0"
                                allowFullScreen
                                title="EnMedio Demo Walkthrough"
                                className="w-full h-full"
                                style={{
                                  transform: "scale(1.1)",
                                  transformOrigin: "center",
                                }}
                              ></iframe>
                            </div>
                          </div>

                          {/* MacBook Base */}
                          <div
                            className="relative h-2 bg-gradient-to-b from-[#d4d4d4] to-[#a3a3a3] rounded-b-lg mx-auto"
                            style={{ width: "60%" }}
                          >
                            {/* Hinge notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-[#525252] rounded-sm"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Card */}
            </div>
          </section>

          <div className="border-t border-[#0F3455]/20 pt-8 mt-12 max-w-7xl mx-auto"></div>

          {/* Verticals */}
          <section className="py-32 px-6 bg-[#F9F5EA]">
              <div className="max-w-7xl mx-auto">
              <div className="mb-20">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#D82A2D]/30 bg-[#D82A2D]/5">
                  <div className="w-2 h-2 bg-[#D82A2D]"></div>
                  <span className="text-xs text-[#D82A2D] tracking-widest font-medium">
                    R&D
                  </span>
                </div>
                <h2 className="text-4xl lg:text-5xl text-[#0F3455] mb-4 tracking-tight font-semibold">
                  <span className="text-[#D82A2D]">
                    Research & Development
                  </span>{" "}
                  at the Edge
                </h2>
                <p className="text-xl text-[#0F3455]/70 max-w-3xl">
                  Powering innovation that deploys across
                  healthcare and biological discovery
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-6 hover:border-[#D82A2D]/50 transition-all group relative">
                  <div className="absolute top-4 right-4">
                    <div className="text-[10px] px-2 py-1 border tracking-widest border-[#D82A2D]/50 text-[#D82A2D] bg-[#D82A2D]/5 font-medium">
                      ON-DEVICE AI
                    </div>
                  </div>
                  <div className="w-14 h-14 border-2 border-[#0F3455]/20 flex items-center justify-center mb-6 group-hover:border-[#D82A2D]/50 transition-all">
                    <svg
                      className="w-7 h-7 text-[#0F3455]/60 group-hover:text-[#D82A2D] transition-colors"
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
                  <h3 className="text-lg text-[#0F3455] mb-3 tracking-wide leading-tight font-semibold">
                    Model compression & efficient architectures
                  </h3>
                  <p className="text-sm text-[#0F3455]/60 leading-relaxed">
                    We prototype compact networks and inference
                    graphs for Edge AI —quantization,
                    distillation, LoRA, and streaming windows.
                    Architectures are shaped by deployment
                    constraints (memory, power, thermal,
                    privacy), so models run well on real
                    hardware without leaning on the cloud.
                  </p>
                </div>

                <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-6 hover:border-[#D82A2D]/50 transition-all group relative">
                  <div className="absolute top-4 right-4">
                    <div className="text-[10px] px-2 py-1 border tracking-widest border-[#D82A2D]/50 text-[#D82A2D] bg-[#D82A2D]/5 font-medium">
                      EDGE COMPUTING
                    </div>
                  </div>
                  <div className="w-14 h-14 border-2 border-[#0F3455]/20 flex items-center justify-center mb-6 group-hover:border-[#D82A2D]/50 transition-all">
                    <svg
                      className="w-7 h-7 text-[#0F3455]/60 group-hover:text-[#D82A2D] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg text-[#0F3455] mb-3 tracking-wide leading-tight font-semibold">
                    Embedded & distributed systems
                  </h3>
                  <p className="text-sm text-[#0F3455]/60 leading-relaxed">
                    We turn ML into software that survives the
                    real world: embedded computing on MCUs/SoCs
                    and distributed systems that sync over shaky
                    links. OTA updates, watchdogs,
                    store-and-forward, retries, and
                    observability are designed in from day one.
                  </p>
                </div>

                <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-6 hover:border-[#D82A2D]/50 transition-all group relative">
                  <div className="absolute top-4 right-4">
                    <div className="text-[10px] px-2 py-1 border tracking-widest border-[#D82A2D]/50 text-[#D82A2D] bg-[#D82A2D]/5 font-medium">
                      BIO & HEALTH
                    </div>
                  </div>
                  <div className="w-14 h-14 border-2 border-[#0F3455]/20 flex items-center justify-center mb-6 group-hover:border-[#D82A2D]/50 transition-all">
                    <svg
                      className="w-7 h-7 text-[#0F3455]/60 group-hover:text-[#D82A2D] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg text-[#0F3455] mb-3 tracking-wide leading-tight font-semibold">
                    Data Science for Biology & Health
                  </h3>
                  <p className="text-sm text-[#0F3455]/60 leading-relaxed">
                    We convert messy signals into analysis-ready
                    datasets: computational biology workflows,
                    biomedical informatics mapping
                    (FHIR/OMOP/SNOMED), and clear evaluation
                    plans. The goal is tidy data that seamlessly
                    integrates to your tools & teams.
                  </p>
                </div>

                <div className="border border-[#0F3455]/10 bg-[#F9F5EA] p-6 hover:border-[#D82A2D]/50 transition-all group relative">
                  <div className="absolute top-4 right-4">
                    <div className="text-[10px] px-2 py-1 border tracking-widest border-[#D82A2D]/50 text-[#D82A2D] bg-[#D82A2D]/5 font-medium">
                      APPLIED AI/ML
                    </div>
                  </div>
                  <div className="w-14 h-14 border-2 border-[#0F3455]/20 flex items-center justify-center mb-6 group-hover:border-[#D82A2D]/50 transition-all">
                    <svg
                      className="w-7 h-7 text-[#0F3455]/60 group-hover:text-[#D82A2D] transition-colors"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg text-[#0F3455] mb-3 tracking-wide leading-tight font-semibold">
                    Applied AI/ML with collaborators
                  </h3>
                  <p className="text-sm text-[#0F3455]/60 leading-relaxed">
                    We collaborate with partners to move ideas
                    from notebook to bench to field. Heavy jobs
                    run on an NSF ACCESS cluster; lab work with
                    groups keeps results grounded and
                    reproducible. This way, we continuously move
                    science & engineering innovation in other
                    sectors.
                  </p>
                </div>
              </div>

              {/* Research Collaborations Carousel */}
              <div className="mt-12 pt-8 border-t border-[#0F3455]/10">
                <div className="overflow-hidden w-full">
                  <div className="carousel-wrapper">
                    <div className="carousel-track">
                      {/* Render logo set twice for seamless infinite loop */}
                      {Array.from({ length: 10 }, (_, i) => i + 1).map((set) => (
                        <div key={set} className="flex gap-8 items-center flex-shrink-0 pr-16">
                          {collaborationLogos.map((logo, index) => (
                            <div
                              key={`${set}-${index}`}
                              className="flex items-center justify-center grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer px-6 max-h-12 max-w-12"
                            >
                              <img
                                src={logo.src}
                                alt={logo.alt}
                                className="h-12 object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* CTA Section */}
              <div className="mt-16 py-8 px-6 text-center">
                <div className="mb-4">
                  <span className="text-xs text-[#0F3455]/60 tracking-wider font-medium uppercase">
                    Ready to <em>Make AI Fit Anywhere</em>?
                  </span>
                </div>
                <h3 className="text-4xl lg:text-5xl text-[#0F3455] tracking-tight font-semibold mb-8 max-w-4xl mx-auto">
                  Power your{" "}
                  <span className="text-[#D82A2D]">business, research, and innovation</span>{" "}
                  with Capicú.
                </h3>
                <div className="flex items-center justify-center">
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="px-6 py-3 bg-[#D82A2D] hover:bg-[#D82A2D]/90 text-[#F9F5EA] tracking-wide transition-colors font-medium"
                  >
                    TALK TO OUR TEAM
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          <section
            id="team"
            className="py-32 px-6 bg-[#0F3455] relative"
          >
            <div className="absolute inset-0 opacity-[0.06]">
              <img
                src={circuitBoardBg}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="mb-20">
                <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 border border-[#D82A2D]/30 bg-[#D82A2D]/5">
                  <div className="w-2 h-2 bg-[#D82A2D]"></div>
                  <span className="text-xs text-[#D82A2D] tracking-widest font-medium">
                    TEAM & TRUST
                  </span>
                </div>

                <h2 className="text-4xl lg:text-5xl text-[#F9F5EA] mb-6 tracking-tight font-semibold">
                  Our Builders & Leadership
                </h2>

                <p className="text-xl text-[#F9F5EA]/80 leading-relaxed max-w-2xl">
                  We operate from Mayagüez, Puerto Rico, a hub
                  of engineering talent and applied scientific
                  research. Our work is deeply connected to the
                  University of Puerto Rico at Mayagüez (UPRM) —
                  one of the nation's leading Hispanic-Serving
                  Institutions and a recognized leader in STEM.
                  Our founding team has a breadth and depth of
                  experience in Academic, Industry, and Federal
                  projects in machine learning, software
                  development, electronics, and cybersecurity,
                  whilst being advised by leading professionals
                  in high-risk tech and applied computational
                  sciences.
                </p>
              </div>

              {/* Co-Founders */}
              <div className="grid md:grid-cols-3 gap-8">
                <div className="group">
                  <div className="w-48 h-48 mx-auto mb-4 overflow-hidden">
                    <img
                      src={sebastianPhoto}
                      alt="Sebastian A. Cruz Romero"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#D82A2D] tracking-widest mb-2 font-medium">
                      CEO & CO-FOUNDER
                    </div>
                    <h3 className="text-lg text-[#F9F5EA] mb-2 tracking-wide font-semibold">
                      Sebastian A. Cruz Romero
                    </h3>
                    <p className="text-sm text-[#F9F5EA]/70 mb-3">
                      Computer Science & Engineering
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="https://github.com/romerocruzsa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="GitHub"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/romerocruzsa"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="mailto:scruzromero@capicupuertorico.com"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="Email"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="w-48 h-48 mx-auto mb-4 overflow-hidden">
                    <img
                      src={luisPhoto}
                      alt="Luis G. Luna Betancourt"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#D82A2D] tracking-widest mb-2 font-medium">
                      COO & CO-FOUNDER
                    </div>
                    <h3 className="text-lg text-[#F9F5EA] mb-2 tracking-wide font-semibold">
                      Luis G. Luna Betancourt
                    </h3>
                    <p className="text-sm text-[#F9F5EA]/70 mb-3">
                      Computer Engineering
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="https://github.com/lunal7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="GitHub"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/luis-luna787"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="mailto:lluna@capicupuertorico.com"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="Email"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group">
                  <div className="w-48 h-48 mx-auto mb-4 overflow-hidden">
                    <img
                      src={misaelPhoto}
                      alt="Misael J. Mercado Hernández"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-[#D82A2D] tracking-widest mb-2 font-medium">
                      CIO & CO-FOUNDER
                    </div>
                    <h3 className="text-lg text-[#F9F5EA] mb-2 tracking-wide font-semibold">
                      Misael J. Mercado Hernández
                    </h3>
                    <p className="text-sm text-[#F9F5EA]/70 mb-3">
                      Software Engineering
                    </p>
                    <div className="flex items-center justify-center gap-3">
                      <a
                        href="https://github.com/misaelmercado1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="GitHub"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                      <a
                        href="https://linkedin.com/in/misael-j-mercado"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="LinkedIn"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                      </a>
                      <a
                        href="mailto:mmercado@capicupuertorico.com"
                        className="text-[#F9F5EA]/60 hover:text-[#F9F5EA] transition-colors"
                        aria-label="Email"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* Footer */}
      <footer className="bg-[#0F3455] text-[#F9F5EA]/70 py-16 px-6 border-t border-[#F9F5EA]/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={logo}
                  alt="Capicú Technologies"
                  className="w-8 h-8"
                />
                <span className="text-xl text-[#F9F5EA] tracking-wider font-semibold">
                  Capicú Technologies
                </span>
              </div>
              <p className="text-sm mb-6">
                Making AI Fit Anywhere
              </p>
              <p className="text-sm mb-6">
                62 Calle Ernesto Ramos Antonini, Mayagüez PR
                00680
              </p>
              <p className="text-sm mb-6">
                info@capicupuertorico.com
              </p>
            </div>
            {/* <div>
              <h4 className="text-[#F9F5EA] mb-4 text-sm tracking-wide font-semibold">
                PRODUCTS
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    En
                    <span className="text-[#D82A2D]">
                      Medio
                    </span>{" "}
                    Platform
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    Documentation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    API Access
                  </a>
                </li>
              </ul>
            </div> */}
            <div>
              <h4 className="text-[#F9F5EA] mb-4 text-sm tracking-wide font-semibold">
                COMPANY
              </h4>
              <ul className="space-y-3 text-sm">
                <li>
                  {/* <a
                    href="#"
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    About
                  </a> */}
                </li>
                <li>
                  {/* <a
                    href="#"
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    Careers
                  </a> */}
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("contact")}
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("terms")}
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    Terms
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleNavigate("privacy")}
                    className="hover:text-[#F9F5EA] transition-colors"
                  >
                    Privacy
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-[#F9F5EA]/10 text-center text-xs text-[#F9F5EA]/60">
            © 2025 CAPICÚ TECHNOLOGIES LLC. ALL RIGHTS
            RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}