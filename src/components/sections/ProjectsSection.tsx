import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn } from '../FadeIn';
import { LiveProjectButton } from '../LiveProjectButton';

interface ProjectData {
  id: string;
  number: string;
  name: string;
  category: string;
  col1Img1: string;
  col1Img2: string;
  col2Img: string;
}

const PROJECTS: ProjectData[] = [
  {
    id: '01',
    number: '01',
    name: 'Nextlevel Studio',
    category: 'Client',
    col1Img1: '/assets/projects/p1-col1-1.webp',
    col1Img2: '/assets/projects/p1-col1-2.webp',
    col2Img: '/assets/projects/p1-col2.webp',
  },
  {
    id: '02',
    number: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1Img1: '/assets/projects/p2-col1-1.webp',
    col1Img2: '/assets/projects/p2-col1-2.webp',
    col2Img: '/assets/projects/p2-col2.webp',
  },
  {
    id: '03',
    number: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1Img1: '/assets/projects/p3-col1-1.webp',
    col1Img2: '/assets/projects/p3-col1-2.webp',
    col2Img: '/assets/projects/p3-col2.webp',
  },
];

interface ProjectCardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
  progress: MotionValue<number>;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  project,
  index,
  totalCards,
  progress,
}) => {
  // Scale calculation: targetScale = 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;

  // Each card scales down as subsequent cards scroll over it
  const startRange = index * 0.25;
  const endRange = 1;
  const scale = useTransform(progress, [startRange, endRange], [1, targetScale]);

  return (
    <div
      className="h-[85vh] sticky [--base-top:1.25rem] sm:[--base-top:1.75rem] md:[--base-top:2.25rem] flex items-start justify-center"
      style={{
        top: `calc(var(--base-top) + ${index * 28}px)`,
        zIndex: index + 10,
      }}
    >
      <motion.div
        style={{
          scale,
          transformOrigin: 'top center',
        }}
        className="w-full max-w-6xl rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-5 md:p-6 lg:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.95)] flex flex-col gap-4 sm:gap-5"
      >
        {/* Top row: Number (huge, same style as services), category label, project name, and a "Live Project" ghost button */}
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b border-[#D7E2EA]/15 pb-3 sm:pb-4">
          <div className="flex items-center gap-3 sm:gap-5">
            <span className="font-black text-[#D7E2EA] text-[clamp(2.5rem,7vw,90px)] leading-none select-none tracking-tight block">
              {project.number}
            </span>
            <div className="flex flex-col justify-center">
              <span className="text-xs sm:text-sm uppercase tracking-widest text-[#D7E2EA]/60 font-light block">
                ({project.category})
              </span>
              <h3 className="text-base sm:text-xl md:text-2xl lg:text-3xl font-bold uppercase tracking-wide text-[#D7E2EA]">
                {project.name}
              </h3>
            </div>
          </div>

          <LiveProjectButton />
        </div>

        {/* Bottom row: Two-column image grid -- left column (40% width) has 2 stacked images, right column (60%) has 1 tall image */}
        <div className="flex flex-col md:flex-row gap-3 sm:gap-5 w-full flex-1">
          {/* Left column (40% width): 2 stacked images */}
          <div className="w-full md:w-[40%] flex flex-col gap-3 sm:gap-4 justify-between">
            <div className="h-[clamp(115px,13vw,190px)] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-zinc-900">
              <img
                src={project.col1Img1}
                alt={`${project.name} asset 1`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="h-[clamp(140px,18vw,270px)] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-zinc-900">
              <img
                src={project.col1Img2}
                alt={`${project.name} asset 2`}
                loading="lazy"
                className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right column (60% width): 1 tall image */}
          <div className="w-full md:w-[60%] overflow-hidden rounded-[30px] sm:rounded-[40px] md:rounded-[50px] bg-zinc-900 min-h-[220px] md:min-h-0 flex-1">
            <img
              src={project.col2Img}
              alt={`${project.name} showcase`}
              loading="lazy"
              className="w-full h-full object-cover rounded-[30px] sm:rounded-[40px] md:rounded-[50px] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="relative z-10 bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-40"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Project" (singular) using .hero-heading gradient */}
        <FadeIn delay={0} y={40}>
          <h2 className="hero-heading font-black uppercase text-center text-[clamp(3rem,12vw,160px)] leading-none mb-10 sm:mb-14 md:mb-16">
            Project
          </h2>
        </FadeIn>

        {/* 3 Sticky-Stacking Project Cards */}
        <div className="relative">
          {PROJECTS.map((project, index) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={index}
              totalCards={PROJECTS.length}
              progress={scrollYProgress}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
