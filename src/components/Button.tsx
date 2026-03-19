import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'motion/react';
import { cn } from '../utils/cn';

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: 'primary' | 'secondary' | 'ghost';
  children?: ReactNode;
}

export const Button = ({ variant = 'primary', children, className, style, ...props }: ButtonProps) => {
  const variants = {
    primary: 'bg-primary text-white rounded-lg shadow-lg hover:brightness-110 active:scale-95 transition-all duration-300 relative overflow-hidden group',
    secondary: 'border border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-all duration-300',
    ghost: 'hover:text-primary transition-all duration-300',
  };

  return (
    <motion.button
      whileHover={{ scale: variant === 'ghost' ? 1 : 1.02 }}
      whileTap={{ scale: variant === 'ghost' ? 1 : 0.98 }}
      className={cn(
        'px-6 py-3 font-medium flex items-center justify-center gap-2',
        variants[variant],
        className
      )}
      style={style}
      {...props}
    >
      {variant === 'primary' && (
        <div className="absolute inset-0 w-full h-full bg-white/10 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />
      )}
      {children}
    </motion.button>
  );
};
