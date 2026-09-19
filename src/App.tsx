import React from 'react';
import HeroSection from './components/sections/HeroSection';
import MarqueeSection from './components/sections/MarqueeSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import ProjectsSection from './components/sections/ProjectsSection';
import ContactButton from './components/ContactButton';
import { ArrowUp, Mail, Instagram, Twitter, Globe } from 'lucide-react';

export const App: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div
      className="bg-[#0C0C0C] text-[#D7E2EA] min-h-screen selection:bg-[#B600A8]/40 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection />

      {/* 2. MARQUEE SECTION */}
      <MarqueeSection />

      {/* 3. ABOUT SECTION */}
      <AboutSection />

      {/* 4. SERVICES SECTION */}
      <ServicesSection />

      {/* 5. PROJECTS SECTION */}
      <ProjectsSection />

      {/* FOOTER & CONTACT SECTION */}
      <footer
        id="contact"
        className="relative bg-[#0C0C0C] border-t border-[#D7E2EA]/10 px-6 md:px-12 py-16 sm:py-20 flex flex-col items-center justify-center text-center z-20"
      >
        <div className="max-w-4xl mx-auto flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-3">
            <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light">
              Ready to create something bold?
            </span>
            <h2 className="hero-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight">
              Let&apos;s Work Together
            </h2>
          </div>

          <div className="flex items-center gap-4">
            <ContactButton href="mailto:huy@3dcreator.art" />
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 mt-4 text-[#D7E2EA]/70">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter / X"
              className="p-3 rounded-full bg-zinc-900/80 hover:bg-[#D7E2EA]/10 hover:text-white transition-all"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-3 rounded-full bg-zinc-900/80 hover:bg-[#D7E2EA]/10 hover:text-white transition-all"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://artstation.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Artstation"
              className="p-3 rounded-full bg-zinc-900/80 hover:bg-[#D7E2EA]/10 hover:text-white transition-all"
            >
              <Globe className="w-5 h-5" />
            </a>
            <a
              href="mailto:huy@3dcreator.art"
              aria-label="Email Huy"
              className="p-3 rounded-full bg-zinc-900/80 hover:bg-[#D7E2EA]/10 hover:text-white transition-all"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright and Back to Top */}
          <div className="w-full flex flex-col sm:flex-row items-center justify-between pt-10 mt-6 border-t border-[#D7E2EA]/10 text-xs sm:text-sm text-[#D7E2EA]/50 font-light gap-4">
            <p>© {new Date().getFullYear()} Huy. All rights reserved. 3D Creator &amp; Visual Artist.</p>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:text-[#D7E2EA] transition-colors cursor-pointer"
            >
              Back to top <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

