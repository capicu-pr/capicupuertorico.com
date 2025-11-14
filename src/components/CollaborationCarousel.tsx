import { useEffect, useState, useRef } from "react";
import cdiLabsLogo from "figma:asset/f351cf44c5b6d1dd913878ff7bc928df3cea8a55.png";
import uprmLogo from "figma:asset/88737ffc17c2f5081f003f3d596824314a783069.png";
import ufLogo from "figma:asset/9dd6196a68b01c561dcde95c7517dcccbd2f5042.png";

const collaborations = [
  { name: "CDI LABS", logo: cdiLabsLogo },
  { name: "Universidad de Mayagüez", logo: uprmLogo },
  { name: "University of Florida", logo: ufLogo },
];

export function CollaborationCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Simple auto-play with pause on hover
  useEffect(() => {
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % collaborations.length);
      }, 4000);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isPaused]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    // Reset interval on manual navigation
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (!isPaused) {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % collaborations.length);
      }, 4000);
    }
  };

  return (
    <section className="py-16 px-6 bg-[#F9F5EA] border-t border-[#0F3455]/10">
      <div className="max-w-7xl mx-auto">
        {/* Section Label */}
        <div className="mb-8 text-center">
          <span className="text-sm text-[#0F3455]/60 tracking-wider font-medium">
            Research Collaborations
          </span>
        </div>

        {/* Carousel Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Logo Display */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {collaborations.map((collab, index) => (
                <div
                  key={index}
                  className="w-full flex-shrink-0 flex items-center justify-center py-8"
                >
                  <div className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer p-6">
                    <img
                      src={collab.logo}
                      alt={collab.name}
                      className="max-h-24 max-w-xs object-contain"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-3 mt-6">
            {collaborations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`rounded-full transition-all ${
                  index === currentIndex
                    ? "w-8 h-2 bg-[#D82A2D]"
                    : "w-2 h-2 bg-[#0F3455]/20 hover:bg-[#0F3455]/40"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={() => goToSlide((currentIndex - 1 + collaborations.length) % collaborations.length)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-8 w-10 h-10 border border-[#0F3455]/20 bg-[#F9F5EA] hover:bg-[#0F3455] hover:border-[#0F3455] text-[#0F3455] hover:text-[#F9F5EA] transition-all flex items-center justify-center rounded"
            aria-label="Previous slide"
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
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button
            onClick={() => goToSlide((currentIndex + 1) % collaborations.length)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-8 w-10 h-10 border border-[#0F3455]/20 bg-[#F9F5EA] hover:bg-[#0F3455] hover:border-[#0F3455] text-[#0F3455] hover:text-[#F9F5EA] transition-all flex items-center justify-center rounded"
            aria-label="Next slide"
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
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
