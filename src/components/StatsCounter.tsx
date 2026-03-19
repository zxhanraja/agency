import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { cn } from '../utils/cn';

interface StatsCounterProps {
  target: number;
  suffix?: string;
  label: string;
  duration?: number;
  className?: string;
  light?: boolean;
}

export const StatsCounter = ({ target, suffix = '', label, duration = 1.5, className, light }: StatsCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, target, duration]);

  return (
    <div 
      ref={ref} 
      className={cn(
        "p-4 sm:p-6 min-w-[120px] transition-all duration-500", 
        light ? "bg-white border border-black/5 shadow-xl text-black" : "glass-dark",
        className
      )}
    >
      <div className="text-2xl sm:text-3xl md:text-4xl font-black text-primary mb-1 tracking-tighter">
        {count}{suffix}
      </div>
      <div className={cn(
        "text-[9px] uppercase tracking-[0.2em] font-black",
        light ? "text-black/40" : "text-white/40"
      )}>
        {label}
      </div>
    </div>
  );
};
