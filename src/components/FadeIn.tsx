import React, { ElementType } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

export interface FadeInProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
  as?: string | ElementType;
  style?: React.CSSProperties;
}

export const FadeIn: React.FC<FadeInProps> = ({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className = '',
  as = 'div',
  style,
  ...rest
}) => {
  // Uses motion.create() for dynamic element types per specification
  const Component = React.useMemo(() => {
    if (typeof motion.create === 'function') {
      return motion.create(as as any);
    }
    const motionMap = motion as unknown as Record<string, any>;
    if (typeof as === 'string' && motionMap[as]) {
      return motionMap[as];
    }
    return motion.div;
  }, [as]);

  return (
    <Component
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={className}
      style={style}
      {...(rest as any)}
    >
      {children}
    </Component>
  );
};

export default FadeIn;

