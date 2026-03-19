import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../utils/cn';
import { Button } from './Button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLearnOpen, setIsLearnOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { 
      name: 'Learn', 
      path: '#', 
      dropdown: [
        { name: 'What is SEO?', path: '/what-is-seo' },
        { name: 'What is GEO?', path: '/what-is-geo' },
        { name: 'What is AEO?', path: '/what-is-aeo' },
        { name: 'Voice Search', path: '/voice-search' },
      ]
    },
    { name: 'About', path: '/about' },
    { name: 'Our Work', path: '/our-work' },
    { name: 'FAQ', path: '/faq' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', damping: 20, stiffness: 100 }}
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300 py-3 px-4 sm:px-6 bg-black border-b border-white/10'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-3xl font-display font-black text-white flex items-center gap-1 tracking-tighter">
          SHAJAMX <span className="w-2 h-2 rounded-full bg-primary" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <button 
                  onClick={() => setIsLearnOpen(!isLearnOpen)}
                  className="flex items-center gap-1 text-white/80 hover:text-primary transition-colors py-2 text-[10px] font-black uppercase tracking-widest"
                >
                  {link.name} <ChevronDown size={12} />
                </button>
              ) : (
                <Link 
                  to={link.path} 
                  className={cn(
                    "text-white/80 hover:text-primary transition-colors py-2 text-[10px] font-black uppercase tracking-widest",
                    location.pathname === link.path && "text-primary"
                  )}
                >
                  {link.name}
                </Link>
              )}

              {link.dropdown && (
                <div className="absolute top-full left-0 mt-2 w-48 glass opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 p-2">
                  {link.dropdown.map((sub) => (
                    <Link 
                      key={sub.name} 
                      to={sub.path} 
                      className="block px-4 py-2 text-sm text-ink-muted hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden lg:flex items-center gap-4">
          <Button 
            className="text-[10px] px-6 py-2.5 font-black uppercase tracking-widest rounded-none border-none bg-primary"
            style={{ clipPath: 'polygon(0 0, 100% 0, 100% 75%, 85% 100%, 0 100%)' }}
          >
            Get Started
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 bg-bg z-[60] flex flex-col p-8"
          >
            <div className="flex justify-between items-center mb-12">
              <span className="text-2xl font-bold">SHAJAMX</span>
              <button onClick={() => setIsMobileMenuOpen(false)}><X size={32} /></button>
            </div>
            
            <div className="flex flex-col gap-6 overflow-y-auto">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.dropdown ? (
                    <div className="flex flex-col gap-4">
                      <span className="text-xl font-medium text-ink-muted">{link.name}</span>
                      <div className="pl-4 flex flex-col gap-4">
                        {link.dropdown.map((sub) => (
                          <Link 
                            key={sub.name} 
                            to={sub.path} 
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-lg text-ink-muted"
                          >
                            {sub.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link 
                      to={link.path} 
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-semibold"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-auto flex flex-col gap-4 pt-8 border-t border-white/10">
              <Button className="w-full">Get Started</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
