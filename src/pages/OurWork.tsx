import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink, ArrowRight } from 'lucide-react';

export const OurWork = () => {
  const projects = [
    { name: "Apex Dental", category: "Clinic", desc: "Modern clinic website with AI-ready content.", tech: "React, Next.js" },
    { name: "The Spice Route", category: "Restaurant", desc: "High-performance restaurant menu and booking.", tech: "React, Tailwind" },
    { name: "Legal Minds", category: "Law Firm", desc: "Professional law firm portal with SEO core.", tech: "React, Framer" },
    { name: "TechNova", category: "Startup", desc: "Futuristic landing page for a tech startup.", tech: "React, AI-Ready" },
    { name: "Urban Retail", category: "Retail", desc: "Clean, fast retail catalog for local business.", tech: "React, GEO" },
    { name: "HealthFirst", category: "Clinic", desc: "Patient-focused healthcare portal.", tech: "React, Voice-Ready" }
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-12 lg:pb-20 px-4 lg:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-4 lg:mb-6 block">Portfolio / 04</span>
            <h1 className="text-5xl lg:text-9xl font-display font-extrabold mb-6 lg:mb-10 uppercase tracking-tighter leading-[0.9] lg:leading-none">
              PROVEN <span className="text-primary">RESULTS.</span>
            </h1>
            <p className="text-ink-muted text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              We don't just build websites. We build growth engines. Here is the proof.
            </p>
          </motion.div>
        </div>

        <div className="flex justify-center gap-4 mb-24 flex-wrap">
          {['All Projects', 'Healthcare', 'Hospitality', 'Legal', 'Tech'].map((tab, i) => (
            <motion.button 
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="px-8 py-3 glass rounded-none text-[10px] font-black uppercase tracking-widest hover:bg-primary hover:text-black transition-all duration-300 border-white/10"
            >
              {tab}
            </motion.button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="group relative glass overflow-hidden aspect-[4/5] border-white/5"
            >
              <img 
                src={`https://picsum.photos/seed/${p.name}/800/1000`} 
                alt={p.name} 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                <div className="text-[10px] font-black text-primary uppercase tracking-[0.3em] mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700">{p.category}</div>
                <h3 className="text-3xl font-black mb-4 uppercase tracking-tighter">{p.name}</h3>
                <p className="text-sm text-zinc-400 mb-8 font-medium line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-100">{p.desc}</p>
                <div className="flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                  <span className="text-[10px] font-black text-zinc-500 uppercase tracking-widest">{p.tech}</span>
                  <button className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-white hover:text-primary transition-colors">
                    LIVE PREVIEW <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-40 glass p-12 md:p-24 text-center border-none bg-primary/5 relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-5xl md:text-8xl font-display font-extrabold mb-10 uppercase tracking-tighter leading-none">YOUR PROJECT IS NEXT.</h2>
            <p className="text-ink-muted text-lg md:text-xl mb-14 max-w-2xl mx-auto font-medium">
              We are currently accepting new projects for next month. Don't wait until your competitors overtake you.
            </p>
            <button className="bg-primary text-black px-20 py-8 text-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-none">
              START THE CONVERSATION
            </button>
          </div>
          <div className="absolute -bottom-20 -right-20 text-[300px] font-display font-black text-white/5 leading-none select-none pointer-events-none">
            WORK
          </div>
        </motion.div>
      </div>
    </div>
  );
};
