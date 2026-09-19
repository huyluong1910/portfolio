import React from 'react';
import { FadeIn } from '../FadeIn';
import { AnimatedText } from '../AnimatedText';
import { ContactButton } from '../ContactButton';

export const AboutSection: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen relative flex flex-col items-center justify-center bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 overflow-hidden"
    >
      {/* 4 Decorative 3D images in corners */}
      {/* Top-left: Moon icon */}
      <div className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.1} x={-80} y={0} duration={0.9}>
          <img
            src="/assets/about/moon_icon.png"
            alt="3D Moon Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-left: 3D object */}
      <div className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.25} x={-80} y={0} duration={0.9}>
          <img
            src="/assets/about/p59_1.png"
            alt="3D Sphere Object"
            className="w-[100px] sm:w-[140px] md:w-[180px] h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Top-right: Lego icon */}
      <div className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.15} x={80} y={0} duration={0.9}>
          <img
            src="/assets/about/lego_icon.png"
            alt="3D Lego Icon"
            className="w-[120px] sm:w-[160px] md:w-[210px] h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Bottom-right: 3D group */}
      <div className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none select-none">
        <FadeIn delay={0.3} x={80} y={0} duration={0.9}>
          <img
            src="/assets/about/Group_134.png"
            alt="3D Geometric Shapes"
            className="w-[130px] sm:w-[170px] md:w-[220px] h-auto object-contain drop-shadow-2xl"
            loading="lazy"
          />
        </FadeIn>
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase leading-none tracking-tight text-center text-[clamp(3rem,12vw,160px)]">
            About me
          </h2>
        </FadeIn>

        {/* Gap between heading & text: gap-10 sm:gap-14 md:gap-16 */}
        <div className="mt-10 sm:mt-14 md:mt-16 w-full flex justify-center">
          <AnimatedText
            text="With more than five years of experience in design, i focus on branding, web design, and user experience, i truly enjoy working with businesses that aim to stand out and present their best image. Let's build something incredible together!"
            className="text-[#D7E2EA] font-medium text-center leading-relaxed max-w-[560px] text-[clamp(1rem,2vw,1.35rem)]"
          />
        </div>

        {/* Gap between text block and button: gap-16 sm:gap-20 md:gap-24 */}
        <div className="mt-16 sm:mt-20 md:mt-24">
          <FadeIn delay={0.2} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

