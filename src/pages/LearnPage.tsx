import React from 'react';
import { motion } from 'motion/react';
import { Button } from '../components/Button';

export const LearnPage = ({ title, type }: { title: string, type: string }) => {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">Manifesto / 01</span>
          <h1 className="text-5xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-none">
            {title.split(' ').map((word, i) => (
              <span key={i} className={i === title.split(' ').length - 1 ? "text-primary" : ""}>
                {word}{' '}
              </span>
            ))}
          </h1>
          <div className="h-[1px] w-full bg-white/10 mb-12" />
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-12 mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <h2 className="text-2xl font-black mb-8 text-white uppercase tracking-tight">The Brutal Truth.</h2>
            <p className="text-ink-muted text-xl leading-relaxed mb-8 font-medium">
              The internet isn't a library anymore. It's a battlefield. If you're reading this, you probably realize that your current strategy is outdated. 
              {type === 'SEO' && " SEO isn't about keywords; it's about being the undisputed authority in your space."}
              {type === 'GEO' && " AI models like ChatGPT are the new gatekeepers. If they don't know you, you don't exist."}
              {type === 'AEO' && " Users want answers, not links. If you're not the answer, you're the noise."}
              {type === 'Voice Search' && " Voice search is about being the only result. There is no 'page two' on Alexa."}
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="glass p-8 border-l-4 border-primary bg-primary/5">
              <h3 className="text-white font-black mb-4 uppercase tracking-widest text-xs">Why it matters:</h3>
              <p className="text-ink-muted text-sm leading-relaxed">
                While your competitors are still arguing over meta tags, we're building digital assets that AI models trust. 
                SHAJAMX builds this optimization into every site by default. We don't do "basic".
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h3 className="text-3xl font-black mb-12 text-primary uppercase tracking-tight">Our Execution Strategy:</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: "Semantic Architecture", desc: "We structure data so LLMs can digest your authority instantly." },
              { title: "Zero-Latency Engine", desc: "Speed is a ranking factor. Our sites load in under 0.5s." },
              { title: "Intent Mapping", desc: "We don't target words. We target the problems your customers have." },
              { title: "Crawlable Trust", desc: "Advanced schema markup that makes search engines love you." }
            ].map((item, i) => (
              <div key={i} className="glass p-8 border-white/5 hover:border-primary/30 transition-colors">
                <div className="text-primary font-black mb-2 text-xs uppercase tracking-widest">0{i+1}</div>
                <h4 className="text-white font-bold mb-3 uppercase tracking-tight">{item.title}</h4>
                <p className="text-ink-muted text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass p-12 text-center bg-primary border-none rounded-none"
        >
          <h2 className="text-4xl font-black mb-6 text-black uppercase tracking-tighter">STOP OVERTHINKING.</h2>
          <p className="text-black/80 font-bold mb-10 max-w-xl mx-auto uppercase tracking-wider text-sm">
            The technical details are our problem. Your problem is handled by clicking the button below.
          </p>
          <Button variant="secondary" className="px-12 py-5 text-xl font-black bg-black text-white border-none hover:bg-zinc-900">
            DOMINATE NOW
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
