import React from 'react';
import { FadeIn } from '../FadeIn';
import { Magnet } from '../Magnet';
import { ContactButton } from '../ContactButton';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* Navbar */}
      <FadeIn delay={0} y={-20} as="header" className="w-full z-20">
        <nav className="w-full flex justify-between items-center px-6 md:px-10 pt-6 md:pt-8 text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem]">
          <a
            href="#about"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            About
          </a>
          <a
            href="#services"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Price
          </a>
          <a
            href="#projects"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="hover:opacity-70 transition-opacity duration-200"
          >
            Contact
          </a>
        </nav>
      </FadeIn>

      {/* Hero Heading */}
      <div className="w-full overflow-hidden z-0 select-none pointer-events-none mt-6 sm:mt-4 md:-mt-5">
        <FadeIn delay={0.15} y={40} className="w-full flex justify-center">
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-center text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
            Hi, i&apos;m huy
          </h1>
        </FadeIn>
      </div>

      {/* Hero Portrait with Magnet */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30}>
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] flex justify-center items-end"
          >
            <img
              src="/assets/my-hero.png"
              alt="Huy - 3D Creator Portrait"
              className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-[0_20px_50px_rgba(0,0,0,0.8)]"
              loading="eager"
            />
          </Magnet>
        </FadeIn>
      </div>

      {/* Bottom bar */}
      <div className="w-full flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 z-20 relative">
        <FadeIn delay={0.35} y={20}>
          <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px] text-[clamp(0.75rem,1.4vw,1.5rem)]">
            a 3d creator driven by crafting striking and unforgettable projects
          </p>
        </FadeIn>

        <FadeIn delay={0.5} y={20}>
          <ContactButton />
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;

