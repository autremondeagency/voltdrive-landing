"use client";

import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollHero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const video = videoRef.current;
    const overlay = overlayRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!section || !overlay || !title || !subtitle) return;

    // Animate overlay opacity on scroll
    gsap.to(overlay, {
      opacity: 0.8,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    // Parallax text movement
    gsap.to(title, {
      y: -100,
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "60% top",
        scrub: true,
      },
    });

    gsap.to(subtitle, {
      y: -60,
      opacity: 0,
      scrollTrigger: {
        trigger: section,
        start: "top top",
        end: "50% top",
        scrub: true,
      },
    });

    // Scrub video playback with scroll
    if (video) {
      video.pause();

      const updateVideo = () => {
        if (!video.duration) return;
        const scrollProgress = ScrollTrigger.getAll().find(
          (st) => st.vars.trigger === section && st.vars.id === "videoScrub"
        );
        if (scrollProgress) {
          video.currentTime = scrollProgress.progress * video.duration;
        }
      };

      ScrollTrigger.create({
        id: "videoScrub",
        trigger: section,
        start: "top top",
        end: "bottom top",
        scrub: true,
        onUpdate: (self) => {
          if (video.duration) {
            video.currentTime = self.progress * video.duration;
          }
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] w-full"
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Gradient placeholder background (will be replaced by video) */}
        <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-[#0d1b3e] to-[#001040]">
          {/* Animated gradient orbs for visual interest */}
          <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-electric-blue/10 blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-electric-blue/5 blur-[100px] animate-pulse [animation-delay:1s]" />
        </div>

        {/* Video element (hidden until real video is provided) */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover opacity-0"
          muted
          playsInline
          preload="auto"
        >
          {/* Placeholder: add src when Kling video is ready */}
        </video>

        {/* Dark overlay */}
        <div
          ref={overlayRef}
          className="absolute inset-0 bg-black/30"
        />

        {/* Hero content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          {/* Logo mark */}
          <div className="mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-electric-blue flex items-center justify-center">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <path
                    d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <span className="text-2xl font-bold tracking-tight text-white">
                VoltDrive
              </span>
            </div>
          </div>

          <h1
            ref={titleRef}
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white max-w-5xl leading-[1.05]"
          >
            Elektryczna przyszlosc.
            <br />
            <span className="text-electric-blue">Juz dzis.</span>
          </h1>

          <p
            ref={subtitleRef}
            className="mt-6 text-lg sm:text-xl md:text-2xl text-white/70 max-w-2xl"
          >
            Premium chińskie samochody elektryczne. Importowane do Polski.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#cars"
              className="px-8 py-4 bg-electric-blue text-white font-semibold rounded-xl hover:bg-accent-blue transition-colors text-lg"
            >
              Zobacz samochody
            </a>
            <a
              href="#contact"
              className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors text-lg"
            >
              Skontaktuj sie
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
            <span className="text-sm tracking-wider uppercase">
              Przewin w dol
            </span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="animate-bounce"
            >
              <path
                d="M12 5v14m-7-7l7 7 7-7"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
