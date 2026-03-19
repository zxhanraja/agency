import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, Zap, Search, Mic, Shield, Layout, RefreshCw } from 'lucide-react';
import { Button } from '../components/Button';

export const Services = () => {
  const services = [
    { title: "Custom Web Design", desc: "100% unique designs built from scratch. No templates, ever.", icon: Layout },
    { title: "AI Optimization", desc: "Get found on ChatGPT, Gemini, and other AI search engines.", icon: Zap },
    { title: "Voice Search", desc: "Optimized for Siri, Alexa, and Google Assistant queries.", icon: Mic },
    { title: "SEO Core", desc: "Advanced technical SEO setup to rank on traditional search engines.", icon: Search },
    { title: "Logo Design", desc: "Professional branding to match your new high-end website.", icon: Shield },
    { title: "Maintenance", desc: "Ongoing support to keep your site fast and secure.", icon: RefreshCw }
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
            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-4 lg:mb-6 block">Capabilities / 02</span>
            <h1 className="text-5xl lg:text-9xl font-display font-extrabold mb-6 lg:mb-10 uppercase tracking-tighter leading-[0.9] lg:leading-none">
              WHAT WE <span className="text-primary">DO.</span>
            </h1>
            <p className="text-ink-muted text-lg lg:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              We don't just build websites. We build high-performance assets that dominate the modern web.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-40">
          {services.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass p-10 group hover:bg-primary/5 transition-all duration-500 border-white/5"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-black transition-colors">
                <s.icon size={24} />
              </div>
              <h3 className="text-2xl font-black mb-4 uppercase tracking-tight">{s.title}</h3>
              <p className="text-ink-muted leading-relaxed font-medium text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Pricing Table Re-used */}
        <div className="max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-5xl md:text-8xl font-display font-extrabold mb-8 uppercase tracking-tighter leading-none">ONE PACKAGE. <br /><span className="text-primary">TOTAL DOMINANCE.</span></h2>
            <p className="text-ink-muted font-black uppercase tracking-[0.4em] text-[10px]">We don't believe in "Basic" or "Premium". We only do "Perfect".</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-20 border-primary/30 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8">
              <div className="bg-primary text-black text-[10px] font-black px-4 py-1 uppercase tracking-widest rotate-12">Best Value</div>
            </div>

            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/2 text-center lg:text-left">
                <div className="text-8xl md:text-[140px] font-display font-black text-white mb-6 tracking-tighter leading-none">₹9,999</div>
                <p className="text-2xl text-primary font-black uppercase tracking-[0.3em] mb-12">Fixed Price. No Monthly Fees.</p>
                <Button className="w-full lg:w-auto px-16 py-8 text-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform rounded-none">
                  CLAIM THIS OFFER
                </Button>
              </div>

              <div className="lg:w-1/2 grid sm:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">The Build</h4>
                  <ul className="space-y-4">
                    {['10 Custom Pages', 'AI-Ready Content', 'Hindi + English Ready', 'Loads <0.5s'].map(item => (
                      <li key={item} className="flex items-center gap-3 text-ink-muted text-sm font-bold">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="text-white font-black text-xs uppercase tracking-widest mb-6">The Tech</h4>
                  <ul className="space-y-4">
                    {['SSL Secure', '99.99% Uptime', 'GEO Optimized', 'AEO Ready'].map(item => (
                      <li key={item} className="flex items-center gap-3 text-ink-muted text-sm font-bold">
                        <CheckCircle2 size={16} className="text-primary" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
