import React from 'react';
import { FadeIn } from '../FadeIn';

interface ServiceItem {
  id: string;
  number: string;
  name: string;
  description: string;
}

const SERVICES: ServiceItem[] = [
  {
    id: '01',
    number: '01',
    name: '3D Modeling',
    description:
      'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
  },
  {
    id: '02',
    number: '02',
    name: 'Rendering',
    description:
      'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
  },
  {
    id: '03',
    number: '03',
    name: 'Motion Design',
    description:
      'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
  },
  {
    id: '04',
    number: '04',
    name: 'Branding',
    description:
      'Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.',
  },
  {
    id: '05',
    number: '05',
    name: 'Web Design',
    description:
      'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
  },
];

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 relative z-0"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <FadeIn delay={0} y={40}>
          <h2 className="text-[#0C0C0C] font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-16 sm:mb-20 md:mb-28">
            Services
          </h2>
        </FadeIn>

        {/* 5 Services List */}
        <div className="border-t border-[#0C0C0C]/15">
          {SERVICES.map((service, index) => (
            <FadeIn
              key={service.id}
              delay={index * 0.1}
              y={30}
              className="border-b border-[#0C0C0C]/15 py-8 sm:py-10 md:py-12"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 sm:gap-10 md:gap-14">
                {/* Number on left */}
                <div className="flex-shrink-0 w-[100px] sm:w-[160px] md:w-[220px]">
                  <span className="font-black text-[#0C0C0C] text-[clamp(3rem,10vw,140px)] leading-none select-none tracking-tight block">
                    {service.number}
                  </span>
                </div>

                {/* Name + Description on right */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3 className="font-medium uppercase text-[#0C0C0C] text-[clamp(1rem,2.2vw,2.1rem)] tracking-wide mb-2 sm:mb-3">
                    {service.name}
                  </h3>
                  <p className="font-light leading-relaxed max-w-2xl text-[#0C0C0C]/60 text-[clamp(0.85rem,1.6vw,1.25rem)]">
                    {service.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

