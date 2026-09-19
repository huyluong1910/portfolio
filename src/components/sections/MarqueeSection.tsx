import React, { useRef, useEffect, useState } from 'react';

const ROW1_IMAGES = [
  '/assets/marquee/marquee-01.gif',
  '/assets/marquee/marquee-02.gif',
  '/assets/marquee/marquee-03.gif',
  '/assets/marquee/marquee-04.gif',
  '/assets/marquee/marquee-05.gif',
  '/assets/marquee/marquee-06.gif',
  '/assets/marquee/marquee-07.gif',
  '/assets/marquee/marquee-08.gif',
  '/assets/marquee/marquee-09.gif',
  '/assets/marquee/marquee-10.gif',
  '/assets/marquee/marquee-11.gif',
];

const ROW2_IMAGES = [
  '/assets/marquee/marquee-12.gif',
  '/assets/marquee/marquee-13.gif',
  '/assets/marquee/marquee-14.gif',
  '/assets/marquee/marquee-15.gif',
  '/assets/marquee/marquee-16.gif',
  '/assets/marquee/marquee-17.gif',
  '/assets/marquee/marquee-18.gif',
  '/assets/marquee/marquee-19.gif',
  '/assets/marquee/marquee-20.gif',
  '/assets/marquee/marquee-21.gif',
];

const tripledRow1 = [...ROW1_IMAGES, ...ROW1_IMAGES, ...ROW1_IMAGES];
const tripledRow2 = [...ROW2_IMAGES, ...ROW2_IMAGES, ...ROW2_IMAGES];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    let ticking = false;

    const updateOffset = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const currentOffset =
          (window.scrollY - sectionTop + window.innerHeight) * 0.3;
        setOffset(currentOffset);
      }
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateOffset);
        ticking = true;
      }
    };

    updateOffset();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0C0C0C] pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden select-none"
    >
      <div className="flex flex-col gap-3">
        {/* Row 1: Moves RIGHT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: `translateX(${offset - 200}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow1.map((src, index) => (
            <div
              key={`row1-${index}`}
              className="w-[420px] min-w-[420px] h-[270px] rounded-2xl overflow-hidden bg-zinc-900 flex-shrink-0 shadow-lg"
            >
              <img
                src={src}
                alt={`3D Work Preview ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>

        {/* Row 2: Moves LEFT on scroll */}
        <div
          className="flex gap-3 flex-nowrap"
          style={{
            transform: `translateX(${-(offset - 200)}px)`,
            willChange: 'transform',
          }}
        >
          {tripledRow2.map((src, index) => (
            <div
              key={`row2-${index}`}
              className="w-[420px] min-w-[420px] h-[270px] rounded-2xl overflow-hidden bg-zinc-900 flex-shrink-0 shadow-lg"
            >
              <img
                src={src}
                alt={`3D Work Preview ${index + 1}`}
                loading="lazy"
                className="w-full h-full object-cover rounded-2xl pointer-events-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;

