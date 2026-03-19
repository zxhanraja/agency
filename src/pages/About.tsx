import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';
import { ArrowRight, Target, Zap, Shield } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-24 lg:pt-32 pb-12 lg:pb-20 px-4 lg:px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative mb-20 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-4 lg:mb-6 block">The Agency / 01</span>
            <h1 className="text-5xl lg:text-9xl font-display font-extrabold mb-6 lg:mb-8 uppercase tracking-tighter leading-[0.9] lg:leading-[0.85]">
              WE ARE <br /><span className="text-primary">SHAJAMX.</span>
            </h1>
            <p className="text-ink-muted text-lg lg:text-2xl leading-relaxed font-medium max-w-2xl">
              We don't build websites. We build digital dominance. Based in India, serving the world's most ambitious brands.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute top-0 right-0 w-96 h-96 bg-primary/10 blur-[100px] -z-10 rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div>
              <h2 className="text-4xl font-black mb-8 uppercase tracking-tight">THE ANTI-TEMPLATE <span className="text-primary">STUDIO.</span></h2>
              <p className="text-ink-muted text-lg leading-relaxed mb-6 font-medium">
                Most agencies sell you a WordPress template and call it "custom". We find that insulting. At SHAJAMX, we build every single pixel from scratch using high-performance React engines.
              </p>
              <p className="text-ink-muted text-lg leading-relaxed font-medium">
                Our mission is simple: To give Indian businesses the same technology that Silicon Valley giants use. Fast. Secure. AI-Ready.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-8">
              {[
                { label: "Performance", value: "100/100", icon: Zap },
                { label: "Security", value: "Military", icon: Shield },
                { label: "Focus", value: "Results", icon: Target },
                { label: "Support", value: "24/7", icon: ArrowRight }
              ].map((stat, i) => (
                <div key={i} className="border-l-2 border-primary/30 pl-6">
                  <stat.icon className="text-primary mb-2" size={20} />
                  <div className="text-2xl font-black text-white">{stat.value}</div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-ink-muted">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass p-4 rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/seed/shajamx-team/800/1000" 
                alt="SHAJAMX Studio" 
                className="w-full grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-10 -left-10 glass p-8 hidden md:block">
              <div className="text-5xl font-black text-primary">0%</div>
              <div className="text-xs font-black uppercase tracking-widest">Templates Used</div>
            </div>
          </motion.div>
        </div>

        <div className="mb-40">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-display font-extrabold mb-24 text-center uppercase tracking-tighter"
          >
            THE <span className="text-primary">ELITE</span> SQUAD
          </motion.h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { role: "Architect", name: "Design Concept", desc: "Visual identity that commands attention." },
              { role: "Engineer", name: "React Build", desc: "High-performance code that never breaks." },
              { role: "Optimizer", name: "AI Strategy", desc: "Making sure AI models recommend YOU." },
              { role: "Strategist", name: "Direction", desc: "Converting traffic into pure revenue." }
            ].map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="glass p-8 hover:bg-primary/5 transition-colors group border-white/5"
              >
                <div className="text-primary font-black mb-6 text-xs uppercase tracking-widest">Role / 0{i+1}</div>
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{m.role}</h3>
                <div className="text-primary font-bold text-xs mb-4 uppercase tracking-wider">{m.name}</div>
                <p className="text-sm text-ink-muted leading-relaxed font-medium">{m.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass p-12 md:p-24 text-center bg-primary border-none rounded-none relative overflow-hidden"
        >
          <div className="relative z-10">
            <h2 className="text-6xl md:text-9xl font-display font-extrabold mb-10 text-black uppercase tracking-tighter leading-none">JOIN THE ELITE.</h2>
            <p className="text-black/80 font-black mb-14 max-w-3xl mx-auto uppercase tracking-[0.3em] text-xs md:text-sm">
              We only take on 4 projects per month to ensure perfection. Is yours next?
            </p>
            <Button variant="secondary" className="px-20 py-8 text-2xl font-black bg-black text-white border-none hover:scale-105 transition-transform rounded-none">
              SECURE YOUR SLOT
            </Button>
          </div>
          <div className="absolute top-0 right-0 text-[300px] font-display font-black text-black/5 leading-none select-none pointer-events-none translate-x-1/4 -translate-y-1/4">
            NOW
          </div>
        </motion.div>
      </div>
    </div>
  );
};
