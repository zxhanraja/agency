import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { cn } from '../utils/cn';

export const FAQ = () => {
  const faqs = [
    { q: "What is included in the ₹9,999 package?", a: "The package includes 10 custom pages, AI-ready content, full SEO setup, mobile-first design, Next.js technology, SSL security, and 1 round of revisions. No hidden costs." },
    { q: "How long does delivery take?", a: "Standard delivery is between 1 to 5 working days. We don't believe in dragging projects for months. We move fast." },
    { q: "Is there a monthly fee?", a: "No. The ₹9,999 is a one-time payment. You own the website and the code. We don't hold your digital assets hostage." },
    { q: "What is the 50-50 payment model?", a: "You pay ₹5,000 to start. Once we complete the design and you approve it via our preview link, you pay the remaining ₹4,999 before we go live. Fair and transparent." },
    { q: "Do you provide hosting and domain?", a: "We help you set up hosting on Vercel (generous free tier) and connect your domain. Domain costs are separate and paid directly to the registrar. We don't markup third-party costs." },
    { q: "Can I request changes after the site is live?", a: "Yes. We provide 1 free round of revisions during the build. Post-launch changes are actioned within 24 hours via our support channel." },
    { q: "Is the website SEO friendly?", a: "Absolutely. Every SHAJAMX website is built with a 'SEO Core' and is optimized for Google, ChatGPT, and Voice Search from day one. It's built-in, not an add-on." },
    { q: "What technology do you use?", a: "We use Next.js (React), Tailwind CSS, and Framer Motion. This is the same stack used by global giants like TikTok and Netflix. No outdated WordPress bloat." }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">Support / 03</span>
            <h1 className="text-6xl md:text-9xl font-display font-extrabold mb-10 uppercase tracking-tighter leading-none">
              QUESTIONS<span className="text-primary">?</span>
            </h1>
            <p className="text-ink-muted text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              No-nonsense answers to everything you need to know about working with SHAJAMX.
            </p>
          </motion.div>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              viewport={{ once: true }}
              className="glass overflow-hidden border-white/5"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-8 text-left flex justify-between items-center hover:bg-primary/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <HelpCircle size={20} className={cn("text-zinc-600 transition-colors", openIndex === i && "text-primary")} />
                  <span className="font-black text-lg uppercase tracking-tight">{faq.q}</span>
                </div>
                <ChevronDown className={cn("transition-transform duration-500 text-zinc-500", openIndex === i && "rotate-180 text-primary")} />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5, ease: [0.04, 0.62, 0.23, 0.98] }}
                  >
                    <div className="px-20 pb-8 text-ink-muted leading-relaxed font-medium">
                      <div className="h-[1px] w-full bg-white/5 mb-6" />
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="mt-32 glass p-12 text-center border-primary/20"
        >
          <h2 className="text-3xl font-black mb-6 uppercase tracking-tight">STILL HAVE QUESTIONS?</h2>
          <p className="text-ink-muted mb-10 font-medium">We're available on WhatsApp 24/7 for quick answers.</p>
          <a 
            href="https://wa.me/919876543210?text=Hi%20SHAJAMX,%20I%20have%20a%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-black px-12 py-5 text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform"
          >
            CHAT ON WHATSAPP
          </a>
        </motion.div>
      </div>
    </div>
  );
};
