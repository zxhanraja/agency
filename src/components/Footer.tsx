import React from 'react';
import { Link } from 'react-router-dom';
import { MessageSquare, Phone, Instagram, Mail, ArrowUpRight, MapPin, Globe, Linkedin, Twitter } from 'lucide-react';
import { Button } from './Button';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-16 lg:pt-24 pb-8 lg:pb-12 px-4 lg:px-6 overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[120px] -z-10" />
      
      <div className="max-w-7xl mx-auto">
        {/* Pre-footer CTA */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 lg:pb-20 border-b border-white/10 mb-12 lg:mb-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9] lg:leading-none mb-4 lg:mb-6">
              READY TO <span className="text-primary">DOMINATE</span> THE WEB?
            </h2>
            <p className="text-zinc-400 font-medium max-w-lg text-sm lg:text-base">
              Stop settling for average. Get a 100% custom, AI-optimized website that actually grows your business. Fixed price. No surprises.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <Button className="px-10 py-5 text-sm font-black uppercase tracking-widest group">
              START YOUR PROJECT <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
            </Button>
            <Button variant="secondary" className="px-10 py-5 text-sm font-black uppercase tracking-widest border-white/20 hover:bg-white/10">
              VIEW OUR WORK
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-8">
            <Link to="/" className="text-4xl font-black text-white tracking-tighter">
              SHAJAMX<span className="text-primary">.</span>
            </Link>
            <p className="text-zinc-400 leading-relaxed font-medium max-w-sm">
              India's premier future-ready web studio. We don't just build websites; we build growth engines optimized for the AI era.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Mail, href: "mailto:hello@qx137.com" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-primary hover:border-primary transition-all duration-300 bg-white/5"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          <div className="lg:col-span-2">
            <h4 className="font-black mb-8 uppercase tracking-widest text-xs text-primary">Navigation</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Our Work', 'Services', 'FAQ', 'Blog'].map(item => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase().replace(' ', '-')}`} 
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-black mb-8 uppercase tracking-widest text-xs text-primary">Knowledge</h4>
            <ul className="space-y-4">
              {['What is SEO?', 'What is GEO?', 'What is AEO?', 'Voice Search'].map(item => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '-').replace('?', '')}`} 
                    className="text-zinc-400 hover:text-white transition-colors text-sm font-bold uppercase tracking-wider flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-4">
            <h4 className="font-black mb-8 uppercase tracking-widest text-xs text-primary">Get In Touch</h4>
            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Call Us</p>
                  <p className="text-white font-bold tracking-tight">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <MessageSquare size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">WhatsApp</p>
                  <p className="text-white font-bold tracking-tight">Chat with an Expert</p>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-black transition-colors shrink-0">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-zinc-500 mb-1">Location</p>
                  <p className="text-white font-bold tracking-tight">New Delhi, India (Global Delivery)</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-black uppercase tracking-[0.2em] text-zinc-500">
          <div className="flex items-center gap-2">
            <Globe size={14} className="text-primary" />
            <span>© {currentYear} SHAJAMX STUDIO. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-8">
            <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
