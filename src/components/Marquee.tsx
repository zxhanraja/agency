import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../utils/cn';

interface MarqueeProps {
  items: string[];
  direction?: 'left' | 'right';
  speed?: number;
  className?: string;
}

export const Marquee = ({ items, direction = 'left', speed = 30, className }: MarqueeProps) => {
  return (
    <div className={cn("relative flex overflow-x-hidden py-4", className)}>
      <motion.div
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: speed,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex whitespace-nowrap gap-8"
      >
        {[...items, ...items].map((item, i) => (
          <span 
            key={i} 
            className="text-lg md:text-xl font-medium text-ink-muted/80 flex items-center gap-4"
          >
            <span className="w-2 h-2 rounded-full bg-primary" />
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
};
