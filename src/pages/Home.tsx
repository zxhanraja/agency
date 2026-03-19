import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { StatsCounter } from '../components/StatsCounter';
import { Marquee } from '../components/Marquee';
import { AIEngine3D } from '../components/AIEngine3D';
import { ChevronRight, Star, CheckCircle2, Zap, Shield, Globe, Rocket, MessageSquare, Phone, X, ArrowRight } from 'lucide-react';
import { cn } from '../utils/cn';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Home = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const magneticRefs = useRef<(HTMLButtonElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic button effect
      magneticRefs.current.forEach((btn) => {
        if (!btn) return;
        
        const moveBtn = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          
          gsap.to(btn, {
            x: x * 0.3,
            y: y * 0.3,
            duration: 0.5,
            ease: 'power3.out'
          });
        };
        
        const resetBtn = () => {
          gsap.to(btn, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: 'elastic.out(1, 0.3)'
          });
        };
        
        btn.addEventListener('mousemove', moveBtn);
        btn.addEventListener('mouseleave', resetBtn);
      });

      // Hero entrance animation
      const tl = gsap.timeline({ 
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          // Ensure everything is visible after animation
          gsap.set(['.hero-label', '.hero-title span', '.hero-desc', '.hero-ctas', '.hero-visual', '.stat-card'], { opacity: 1 });
        }
      });
      
      tl.from('.hero-label', { x: -30, opacity: 0, duration: 1 })
        .from('.hero-title span', { 
          y: 100, 
          opacity: 0, 
          stagger: 0.1, 
          duration: 1.2,
          skewY: 7
        }, '-=0.8')
        .from('.hero-desc', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-ctas', { y: 20, opacity: 0, duration: 0.8 }, '-=0.6')
        .from('.hero-visual', { scale: 0.8, opacity: 0, duration: 1.5 }, '-=1')
        .from('.stat-card', { 
          y: 30, 
          opacity: 0, 
          stagger: 0.1, 
          duration: 0.8 
        }, '-=1');

      // Scroll animations for other sections
      gsap.from('.results-card', {
        scrollTrigger: {
          trigger: '.results-section',
          start: 'top 80%',
        },
        y: 50,
        opacity: 0,
        stagger: 0.2,
        duration: 1
      });

      gsap.from('.price-feature-card', {
        scrollTrigger: {
          trigger: '.price-features-section',
          start: 'top 80%',
        },
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8
      });

      gsap.from('.pricing-card-main', {
        scrollTrigger: {
          trigger: '.pricing-section',
          start: 'top 70%',
        },
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: 'back.out(1.7)'
      });

      gsap.from('.why-card', {
        scrollTrigger: {
          trigger: '.why-section',
          start: 'top 80%',
        },
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.9
      });

      gsap.from('.step-card', {
        scrollTrigger: {
          trigger: '.steps-section',
          start: 'top 80%',
        },
        scale: 0.9,
        opacity: 0,
        stagger: 0.1,
        duration: 0.7
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);
  const marqueeItems1 = [
    "🚀 Modern & Fast", "🤖 AI Search Ready", "⚡ Same-Day Available", 
    "🎨 100% Custom Design", "🔒 Fixed ₹9,999", "🌍 Voice Search Ready", "📱 Mobile First"
  ];

  const marqueeItems2 = [
    "SEARCH", "NO TEMPLATES", "EXCLUSIVELY YOURS", "FOUND ON CHATGPT", 
    "VOICE SEARCH READY", "10 PAGES", "₹9,999 ONLY", "1-5 DAYS", 
    "SAME DAY AVAILABLE", "MODERN & FAST", "AI READY", "100% CUSTOM"
  ];

  const testimonials = [
    { name: "Rajesh Kumar", business: "Dental Clinic, Delhi", text: "SHAJAMX delivered my clinic's website in 3 days. It's incredibly fast and looks premium. Highly recommended!" },
    { name: "Priya Sharma", business: "Cafe Owner, Mumbai", text: "The AI optimization is real. My cafe started appearing in voice searches within a week. Amazing value for money." },
    { name: "Amit Patel", business: "Law Firm, Ahmedabad", text: "No hidden costs, no drama. Just a solid, professional website that works. The 50-50 payment model is very fair." }
  ];

  return (
    <div className="relative grid-bg min-h-screen" ref={heroRef}>
      {/* Hero Section */}
      <section className="min-h-[80vh] lg:min-h-screen flex flex-col pt-24 lg:pt-40 pb-12 lg:pb-20 px-4 sm:px-6 max-w-7xl mx-auto relative overflow-hidden flex-shrink-0">
        {/* Subtle Background Elements */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-20 left-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-primary/5 blur-[120px] rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="z-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start gap-4 mb-8 hero-label">
              <div className="h-[1.5px] w-10 bg-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-primary">
                PROJECT SHAJAMX — INDIA'S FUTURE-READY WEB
              </span>
            </div>

            <h1 ref={headingRef} className="font-display font-extrabold text-5xl sm:text-9xl lg:text-[140px] leading-[0.9] lg:leading-[0.8] uppercase flex flex-col tracking-tighter hero-title">
              <span>ELEVATE</span>
              <span>YOUR</span>
              <span className="text-outline-dark">PRESENCE.</span>
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 mt-12 hero-desc">
              <div className="px-6 py-3 bg-black text-white rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-3">
                <span className="text-primary">₹9,999</span>
                <div className="w-[1px] h-4 bg-white/20" />
                <span>Fixed Price</span>
              </div>
              <p className="text-sm font-medium text-ink-muted max-w-[280px] leading-relaxed">
                10 pages. 100% custom. Optimized for Google, ChatGPT & Voice.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-12 hero-ctas">
              <Button 
                ref={(el) => { magneticRefs.current[0] = el; }}
                className="w-full sm:w-auto px-12 py-5 text-sm font-black uppercase tracking-widest bg-primary hover:bg-primary/90 rounded-full text-white"
              >
                START PROJECT →
              </Button>
              <Link to="/our-work" className="w-full sm:w-auto">
                <Button 
                  ref={(el) => { magneticRefs.current[1] = el; }}
                  variant="ghost"
                  className="w-full px-12 py-5 text-sm font-black uppercase tracking-widest border border-black/10 rounded-full hover:bg-black/5 text-black"
                >
                  VIEW WORK
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative flex flex-col items-center hero-visual">
            <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
              <AIEngine3D />
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-2 lg:gap-3 mt-8 lg:mt-12 w-full max-w-[400px]">
              {[
                { value: "95+", label: "PAGESPEED" },
                { value: "<0.5S", label: "LOAD TIME" },
                { value: "10", label: "PAGES" },
                { value: "1-5", label: "DAY DELIVERY" }
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="bg-black p-4 lg:p-5 rounded-xl flex flex-col gap-1 border border-white/5 stat-card"
                >
                  <span className="text-primary text-xl lg:text-2xl font-black tracking-tighter">{stat.value}</span>
                  <span className="text-[7px] lg:text-[8px] font-black text-white/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Marquee Section */}
      <section className="py-8 lg:py-12 border-y border-black/5 bg-black/[0.01]">
        <div className="max-w-7xl mx-auto px-4 mb-6 lg:mb-8 text-center">
          <span className="text-[8px] lg:text-[9px] font-black text-black/20 uppercase tracking-[0.4em]">ENGINEERED WITH MODERN TECHNOLOGY</span>
        </div>
        <Marquee items={marqueeItems2} direction="left" speed={40} />
      </section>

      {/* Client Results */}
      <section className="py-20 lg:py-32 px-4 sm:px-6 bg-black text-white results-section relative overflow-hidden min-h-[500px]">
        <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/20 blur-[150px] rounded-full" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-primary/10 blur-[150px] rounded-full" />
        </div>
        
        {/* Decorative Background Text */}
        <div className="absolute -left-10 top-1/2 -translate-y-1/2 text-[30vw] font-display font-black text-white/[0.015] uppercase pointer-events-none select-none leading-none whitespace-nowrap">
          Results
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end mb-24 gap-12 text-center lg:text-left">
            <div className="max-w-4xl w-full">
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
                <div className="w-12 h-[2px] bg-primary" />
                <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase block">SOCIAL PROOF</span>
              </div>
            <h2 className="text-5xl md:text-9xl font-display font-extrabold uppercase leading-[0.9] lg:leading-[0.85] tracking-tighter">TRUSTED BY<br />INDIA'S BEST.</h2>
            </div>
            <div className="max-w-xl w-full">
              <p className="text-white/60 font-medium text-lg md:text-xl leading-relaxed mb-10">We don't just build websites. We build high-performance growth engines for ambitious Indian brands ready to dominate the digital landscape.</p>
              <div className="flex items-center justify-center lg:justify-start gap-8">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-14 h-14 rounded-full border-2 border-black bg-primary/20 flex items-center justify-center text-[10px] font-black">
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/40">50+ Projects Delivered</span>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <div
                key={i}
                className="bg-white/[0.03] border border-white/10 p-10 rounded-3xl hover:border-primary/40 transition-all duration-500 group results-card"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} size={14} className="fill-primary text-primary" />)}
                </div>
                <p className="text-white/90 italic mb-8 text-lg leading-relaxed font-serif">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-black uppercase text-sm tracking-tight">{t.name}</div>
                    <div className="text-[10px] text-white/30 font-bold uppercase tracking-widest">{t.business}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center text-[10px] font-bold text-white/40 uppercase tracking-widest">
            ★ 4.9 / 5 based on 12 client reviews
          </div>
        </div>
      </section>

      {/* One Price Section */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 lg:gap-12 mb-12 lg:mb-20">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-6 bg-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-widest">Complete Package</span>
            </div>
            <h2 className="text-4xl lg:text-8xl font-black leading-tight uppercase">
              ONE PRICE.<br />
              <span className="text-primary italic serif lowercase font-normal">Everything.</span>
            </h2>
            <p className="text-ink-muted mt-4 lg:mt-6 max-w-md font-medium text-sm lg:text-base">
              Fixed. Final. No agency drama. No scope creep. No surprises. Your complete professional website — designed, built, and launched.
            </p>
          </div>
          <div className="relative w-full md:w-auto">
            <div className="bg-black text-white p-5 lg:p-6 rounded-xl flex items-center justify-between md:justify-start gap-4">
              <div className="text-3xl lg:text-4xl font-black text-primary">₹9,999</div>
              <div className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest opacity-40">Fixed</div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-16 bg-white border-y border-black/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 mb-10 text-center">
          <span className="text-[10px] font-black text-black/20 uppercase tracking-[0.4em]">TRUSTED BY INNOVATORS ACROSS INDIA</span>
        </div>
        <div className="flex gap-20 animate-marquee whitespace-nowrap opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
          {[
            "TECHNOVA", "Z-AXIS", "NEXUS", "QUANTUM", "VELOCITY", "ECLIPSE", "ORBIT", "PULSE"
          ].map(brand => (
            <span key={brand} className="text-4xl font-display uppercase tracking-tighter">{brand}</span>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            "TECHNOVA", "Z-AXIS", "NEXUS", "QUANTUM", "VELOCITY", "ECLIPSE", "ORBIT", "PULSE"
          ].map(brand => (
            <span key={brand + '2'} className="text-4xl font-display uppercase tracking-tighter">{brand}</span>
          ))}
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="py-16 lg:py-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-12 lg:mb-24 max-w-4xl">
          <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-4 lg:mb-6 block">CAPABILITIES</span>
          <h2 className="text-5xl lg:text-9xl font-display font-extrabold uppercase leading-[0.9] lg:leading-[0.85] mb-6 lg:mb-10 tracking-tighter">ENGINEERED FOR<br />THE AI ERA.</h2>
          <p className="text-ink-muted font-medium text-lg lg:text-xl leading-relaxed max-w-2xl">We don't use templates. We use code. Our stack is built for speed, security, and absolute digital dominance.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 lg:gap-6 h-auto md:h-[900px] price-features-section">
          <div className="md:col-span-2 md:row-span-2 bg-black/[0.02] border border-black/5 rounded-[40px] p-8 lg:p-14 flex flex-col justify-between group hover:border-primary/20 transition-all price-feature-card">
            <div>
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-12 group-hover:scale-110 transition-transform">
                <Rocket className="text-primary" size={32} />
              </div>
              <h3 className="text-4xl lg:text-5xl font-black uppercase mb-8 tracking-tight">10 Custom Pages</h3>
              <p className="text-ink-muted font-medium text-lg lg:text-xl leading-relaxed">Every page is designed exclusively for your business. We build custom React components for every section, ensuring your brand stands out from the template-driven crowd.</p>
            </div>
            <div className="mt-12 pt-12 border-t border-black/5 flex items-center justify-between">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary">01 / UNIQUE DESIGN</span>
              <div className="w-14 h-14 rounded-full border border-black/5 flex items-center justify-center">
                <ArrowRight size={24} className="text-black/20 group-hover:text-primary transition-colors" />
              </div>
            </div>
          </div>

          <div className="md:col-span-2 bg-primary text-white rounded-[40px] p-8 lg:p-14 flex flex-col justify-between group price-feature-card">
            <div>
              <h3 className="text-4xl lg:text-5xl font-black uppercase mb-8 tracking-tight">AI + VOICE SEARCH</h3>
              <p className="text-white/90 font-medium text-lg lg:text-xl leading-relaxed">Found on Google, ChatGPT, Gemini, Perplexity & Voice Assistants. We structure your data so AI engines understand exactly who you are.</p>
            </div>
            <div className="mt-12 flex flex-wrap gap-3">
              {['Google', 'ChatGPT', 'Siri', 'Alexa'].map(tag => (
                <span key={tag} className="px-6 py-3 bg-white/10 rounded-full text-[10px] font-black uppercase tracking-widest">{tag}</span>
              ))}
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-[40px] p-8 lg:p-12 flex flex-col justify-between group hover:border-primary/20 transition-all price-feature-card">
            <div>
              <div className="text-6xl font-black text-primary/20 mb-10">0.5s</div>
              <h4 className="font-black uppercase text-lg mb-4 tracking-tight">Modern & Fast</h4>
              <p className="text-base text-ink-muted leading-relaxed font-medium">Blazing-fast load times. Built with Next.js for ultimate performance.</p>
            </div>
          </div>

          <div className="bg-white border border-black/5 rounded-[40px] p-8 lg:p-12 flex flex-col justify-between group hover:border-primary/20 transition-all price-feature-card">
            <div>
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-10">
                <CheckCircle2 size={24} className="text-primary" />
              </div>
              <h4 className="font-black uppercase text-lg mb-4 tracking-tight">Full SEO Setup</h4>
              <p className="text-base text-ink-muted leading-relaxed font-medium">Technical SEO, schema, sitemap — all done professionally.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Pricing Card */}
      <section className="py-16 lg:py-32 px-4 sm:px-6 bg-white pricing-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-4 sticky top-32">
              <span className="text-primary font-black tracking-[0.3em] text-[10px] uppercase mb-4 block">PRICING</span>
              <h2 className="text-5xl md:text-7xl font-display uppercase leading-[0.9] mb-8">ONE PRICE.<br />TOTAL<br />FREEDOM.</h2>
              <p className="text-ink-muted font-medium text-lg leading-relaxed mb-12">No monthly fees. No hidden charges. No retainers. A real custom website — built by professionals, powered by AI, delivered in 1-5 days.</p>
              
              <div className="space-y-6">
                {[
                  "10 Custom Pages",
                  "AI Search Optimization",
                  "Voice Search Ready",
                  "Lightning Fast Load",
                  "100% Ownership"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle2 size={12} className="text-primary" />
                    </div>
                    <span className="text-[11px] font-black uppercase tracking-widest">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="bg-black text-white rounded-[40px] p-10 md:p-20 relative overflow-hidden pricing-card-main">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="absolute -top-20 -right-20 w-96 h-96 bg-primary blur-[120px] rounded-full" />
                </div>
                
                <div className="relative z-10">
                  <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-20">
                    <div>
                      <div className="text-[10px] font-black text-primary uppercase tracking-[0.4em] mb-4">FIXED INVESTMENT</div>
                      <div className="text-7xl sm:text-9xl font-display leading-none">₹9,999</div>
                      <div className="text-[10px] font-black text-white/40 uppercase tracking-widest mt-4">ONE-TIME PAYMENT. NO MONTHLY FEE. EVER.</div>
                    </div>
                    <div className="bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl max-w-[240px]">
                      <div className="text-[9px] font-black text-primary uppercase tracking-widest mb-2">DELIVERY TIME</div>
                      <div className="text-2xl font-black uppercase tracking-tighter">1-5 WORKING DAYS</div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-16 mb-20">
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">TECHNOLOGY STACK</h4>
                      <ul className="space-y-4">
                        {['Next.js Framework', 'Edge CDN Hosting', 'SSL Security', 'Auto-Scaling Infrastructure'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-primary mb-6">SEO & VISIBILITY</h4>
                      <ul className="space-y-4">
                        {['Google Search Console', 'AI Engine Indexing', 'Schema Markup', 'Voice Search Ready'].map(item => (
                          <li key={item} className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-tight">
                            <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center gap-8 pt-12 border-t border-white/10">
                    <Button 
                      ref={(el) => { magneticRefs.current[0] = el; }}
                      className="w-full sm:w-auto px-16 py-6 text-base font-black uppercase tracking-[0.2em] bg-primary hover:bg-primary/90 rounded-full"
                    >
                      START PROJECT →
                    </Button>
                    <div className="text-[10px] font-black text-white/40 uppercase tracking-widest text-center sm:text-left">
                      PAY ₹5,000 TO START.<br />BALANCE AFTER APPROVAL.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Different */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 bg-black text-white why-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "WORLD'S FASTEST TECHNOLOGY", desc: "Built on same tech as TikTok, Twitch, Netflix. Pages load in <0.5s." },
              { title: "ENTERPRISE-GRADE SECURITY", desc: "SSL encrypted. HTTPS default. No WordPress. No plugins. Zero vulnerabilities." },
              { title: "GLOBAL CDN DELIVERY", desc: "99.99% uptime. Fast from Delhi to Dubai. Vercel-grade edge hosting." },
              { title: "SEE IT FOR YOURSELF", desc: "95+ Google PageSpeed. Run a live test on any SHAJAMX site." }
            ].map((item, i) => (
              <div 
                key={i} 
                className="p-8 border border-white/10 rounded-2xl hover:border-primary/50 transition-all group why-card"
              >
                <h4 className="text-[10px] font-black text-primary uppercase tracking-widest mb-4">Why SHAJAMX is different</h4>
                <h3 className="text-sm font-black uppercase mb-4 leading-tight group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed font-medium">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto steps-section">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase">How it works</span>
          <h2 className="text-5xl md:text-7xl font-black mt-4 uppercase">FROM ZERO TO LIVE IN 1-5 DAYS.</h2>
          <p className="text-ink-muted mt-4 font-medium">No long meetings. No back-and-forth. Fill our smart form - we deliver in 1 to 5 working days.</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {[
            { step: "01", title: "FILL THE FORM", desc: "Answer our 6-step smart form. 10 minutes covers everything." },
            { step: "02", title: "AI BUILDS CONTENT", desc: "Our AI converts your answers to SEO-ready content in seconds." },
            { step: "03", title: "WE DESIGN & BUILD", desc: "Designers build using your brand colors. No templates." },
            { step: "04", title: "YOU REVIEW", desc: "Preview link shared. Request changes via client portal." },
            { step: "05", title: "GO LIVE", desc: "Website live on your domain. Ranking from day one." }
          ].map((s, i) => (
            <div 
              key={i} 
              className="p-8 border border-black/5 rounded-2xl hover:border-primary/20 transition-all step-card"
            >
              <div className="text-4xl font-black text-black/5 mb-6">{s.step}</div>
              <h4 className="font-black text-xs uppercase mb-3">{s.title}</h4>
              <p className="text-[11px] text-ink-muted leading-relaxed font-medium">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-black text-white p-12 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-8">
          <h3 className="text-3xl font-black uppercase">READY TO GET STARTED?</h3>
          <Button className="px-12 py-5 text-sm font-black uppercase tracking-widest">BUILD MY WEBSITE →</Button>
        </div>
      </section>

      {/* Built Only For You */}
      <section className="py-16 lg:py-32 px-4 sm:px-6 bg-black text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/5 blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-8"
          >
            <div className="h-[1px] w-12 bg-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-widest">100% Exclusive to You</span>
            <div className="h-[1px] w-12 bg-primary" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-4xl sm:text-7xl md:text-[120px] font-black leading-none uppercase mb-8"
          >
            BUILT <span className="text-primary italic serif lowercase font-normal">only</span> FOR YOU.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl text-white/60 font-medium max-w-2xl mx-auto mb-12"
          >
            Zero templates. Zero copy-paste. Your website is conceived and built from scratch by our team — as unique as your business. No one else will ever have your design.
          </motion.p>
          <div className="flex flex-wrap justify-center gap-6">
            {['Zero Templates', 'Your Brand Only', 'Original Code', 'Exclusive Design', 'Never Resold'].map((tag, i) => (
              <motion.span 
                key={tag} 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 + i * 0.1 }}
                viewport={{ once: true }}
                className="text-[10px] font-black uppercase tracking-widest text-white/40"
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* From Call to Live */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="mb-20">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase">How it works</span>
          <h2 className="text-5xl md:text-8xl font-black mt-4 uppercase leading-none">
            FROM CALL<br />
            <span className="text-primary italic serif lowercase font-normal">to live.</span>
          </h2>
          <p className="text-ink-muted mt-6 font-medium">6 steps. As fast as 1 day. Your business online and found on Google, ChatGPT & voice search.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {[
            { step: "01", title: "You Call Us", desc: "One call to our team. Tell us your business, goals, and style in 10 minutes." },
            { step: "02", title: "Design Concept", desc: "Our brand strategist and designer create your concept. You approve before we build." },
            { step: "03", title: "You Confirm", desc: "Pay ₹5,000. Your dedicated team starts building within hours." },
            { step: "04", title: "We Develop", desc: "All 10 pages in React. Mobile-first. Lightning fast. Fully optimized." },
            { step: "05", title: "AI Optimization", desc: "Google + AI + Voice Search applied. Schema, sitemap, voice search — all set up." },
            { step: "06", title: "You Go Live", desc: "Website live. Indexed on Google. Discoverable on all AI engines. You're future-ready." }
          ].map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative pt-12 border-t border-black/10 group"
            >
              <div className="absolute top-0 left-0 -translate-y-1/2 bg-primary text-white text-xs font-black px-3 py-1 rounded-md group-hover:scale-110 transition-transform">{s.step}</div>
              <h4 className="font-black text-sm uppercase mb-4 group-hover:text-primary transition-colors">{s.title}</h4>
              <p className="text-xs text-ink-muted leading-relaxed font-medium">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Make Your Business Found */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 bg-black/[0.02] overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-primary font-bold tracking-widest text-[10px] uppercase">Future-Proof</span>
            <h2 className="text-3xl sm:text-5xl md:text-8xl font-black mt-4 mb-8 uppercase leading-none">
              MAKE YOUR<br />
              BUSINESS<br />
              <span className="text-primary">FOUND ON GOOGLE,<br />CHATGPT & VOICE SEARCH.</span>
            </h2>
            <p className="text-lg text-ink-muted font-medium mb-12">90% of businesses in India have no presence on AI search engines. Every day they without an AI-ready website, you're invisible to the future of search.</p>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white border border-black/10 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 size={16} className="text-primary" />
                  <h4 className="font-black text-xs uppercase">Voice Search Optimized</h4>
                </div>
                <p className="text-[11px] text-ink-muted font-medium leading-relaxed">When someone asks Siri, Alexa, or Google Assistant about your type of business — your website answers. We structure your content specifically for voice search.</p>
              </div>
              <div className="p-8 bg-white border border-black/10 rounded-2xl hover:shadow-xl transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <CheckCircle2 size={16} className="text-primary" />
                  <h4 className="font-black text-xs uppercase">AI Engine Ready</h4>
                </div>
                <p className="text-[11px] text-ink-muted font-medium leading-relaxed">We ensure your business is indexed and correctly understood by ChatGPT, Gemini, and Perplexity — the new way people find businesses.</p>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative flex items-center justify-center"
          >
            <div className="w-full max-w-[500px] aspect-square bg-white border border-black/5 rounded-3xl shadow-2xl p-12 flex items-center justify-center">
              <div className="relative w-full h-full flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-black text-white flex items-center justify-center font-black text-xl shadow-2xl z-20">
                  SHAJAMX
                </div>
                {/* Orbiting Elements */}
                {[
                  { icon: "Google", delay: "0s" },
                  { icon: "ChatGPT", delay: "-3.75s" },
                  { icon: "Gemini", delay: "-7.5s" },
                  { icon: "Perplexity", delay: "-11.25s" }
                ].map((p, i) => (
                  <div 
                    key={i} 
                    className="absolute animate-orbit flex flex-col items-center"
                    style={{ animationDelay: p.delay }}
                  >
                    <div className="w-12 h-12 rounded-full bg-white border border-black/5 shadow-lg flex items-center justify-center mb-2">
                      <div className="w-6 h-6 rounded-full bg-primary/20" />
                    </div>
                    <div className="text-[8px] font-black uppercase tracking-widest text-ink-muted">✓ Indexed</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <span className="text-primary font-bold tracking-widest text-[10px] uppercase">The Honest Truth</span>
          <h2 className="text-5xl md:text-7xl font-black mt-4 uppercase">SHAJAMX CRUSHES OLD AGENCIES.</h2>
          <p className="text-ink-muted mt-4 font-medium">No fluff. Here's exactly what you get with SHAJAMX versus what traditional web agencies charge — and fail to deliver.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-black/10 border border-black/10 rounded-3xl overflow-hidden shadow-2xl">
          <div className="bg-white p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Rocket size={16} />
              </div>
              <h3 className="text-2xl font-black uppercase">SHAJAMX</h3>
            </div>
            <div className="space-y-8">
              {[
                { label: "Price", val: "₹9,999 Fixed" },
                { label: "Delivery", val: "1-5 Working Days" },
                { label: "Tech Stack", val: "Modern Tech (React)" },
                { label: "AI Optimization", val: "✓ Google + AI + Voice Search" },
                { label: "Voice Search", val: "✓ Included" },
                { label: "Lighthouse Score", val: "95+ Targeted" },
                { label: "Design", val: "100% Custom" },
                { label: "Revision", val: "1 Free Included" },
                { label: "Pricing Model", val: "Fixed. Final. No Surprises." }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted">{item.label}</span>
                  <span className="text-sm font-black uppercase text-primary">{item.val}</span>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="bg-black/[0.02] p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 rounded-full bg-red-500 flex items-center justify-center text-white">
                <X size={16} />
              </div>
              <h3 className="text-2xl font-black uppercase text-ink-muted">OLD AGENCY</h3>
            </div>
            <div className="space-y-8 opacity-60">
              {[
                { label: "Price", val: "₹40,000 - ₹2,00,000+" },
                { label: "Delivery", val: "4-12 Weeks" },
                { label: "Tech Stack", val: "WordPress / Templates" },
                { label: "AI Optimization", val: "None / Extra Cost" },
                { label: "Voice Search", val: "Never Mentioned" },
                { label: "Lighthouse Score", val: "Rarely Tested" },
                { label: "Design", val: "Template + Minor Edits" },
                { label: "Revision", val: "₹5,000+ Per Change" },
                { label: "Pricing Model", val: "Surprise Quotes After Meetings" }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-1"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-ink-muted">{item.label}</span>
                  <span className="text-sm font-black uppercase">{item.val}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-12 bg-green-500 text-white p-6 rounded-2xl flex items-center justify-between">
          <span className="text-xl font-black uppercase">SHAJAMX WINS on every single point</span>
          <span className="text-3xl font-black">9 / 9</span>
        </div>
      </section>

      {/* Understand the New Internet */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase mb-6 block">The AI Manifesto / 05</span>
            <h2 className="text-5xl md:text-8xl font-black mt-4 uppercase leading-none tracking-tighter">
              THE FUTURE<br />
              <span className="text-primary">IS HERE.</span>
            </h2>
            <p className="text-white/40 mt-6 font-medium max-w-xl text-lg">SEO is dead. AI is the new gatekeeper. Learn how we make sure you're the one being recommended.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { label: "SEO", title: "THE FOUNDATION", link: "/what-is-seo" },
              { label: "GEO", title: "THE AI KILLER", link: "/what-is-geo" },
              { label: "AEO", title: "ANSWER THE WORLD", link: "/what-is-aeo" },
              { label: "VOICE", title: "VOICE DOMINANCE", link: "/voice-search" }
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Link 
                  to={item.link}
                  className="group relative glass p-10 border-white/5 hover:bg-primary/5 transition-all duration-500 flex items-center justify-between overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="text-primary font-black text-[10px] tracking-widest uppercase mb-4">{item.label}</div>
                    <h3 className="text-3xl font-black uppercase tracking-tight">{item.title}</h3>
                  </div>
                  <ArrowRight size={32} className="text-white/10 group-hover:text-primary transition-all group-hover:translate-x-2 relative z-10" />
                  <div className="absolute -right-4 -bottom-4 text-8xl font-black text-white/[0.02] group-hover:text-primary/5 transition-colors select-none pointer-events-none">
                    0{i+1}
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities Marquee */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="py-12 border-y border-black/5"
      >
        <Marquee 
          items={["We Serve", "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Pune", "Kolkata", "Ahmedabad", "Jaipur", "Lucknow", "Surat", "Indore", "Chandigarh", "Noida", "Gurgaon", "Pan India"]} 
          speed={50} 
        />
      </motion.section>

      {/* Still Waiting? */}
      <section className="py-16 lg:py-24 px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto bg-primary p-12 md:p-32 rounded-[40px] text-center text-white relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-black/10 animate-pulse" />
          <h2 className="text-4xl sm:text-6xl md:text-9xl font-black mb-8 relative z-10 uppercase leading-none">
            STILL WAITING?<br />
            <span className="italic serif font-normal lowercase">Your competitors aren't.</span>
          </h2>
          <div className="text-6xl sm:text-8xl md:text-9xl font-black mb-12 relative z-10">₹9,999</div>
          <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-10">
            {['10 PAGES', 'REACT', 'AI + VOICE SEARCH READY', '1-5 WORKING DAYS', 'SAME-DAY AVAILABLE', 'EXCLUSIVELY YOURS'].map((tag, i) => (
              <motion.span 
                key={tag} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05 }}
                viewport={{ once: true }}
                className="px-4 py-2 bg-black/20 rounded-full text-[10px] font-black uppercase tracking-widest"
              >
                {tag}
              </motion.span>
            ))}
          </div>
          <Button variant="secondary" className="px-16 py-6 text-xl font-black uppercase tracking-widest bg-white text-primary hover:bg-white/90 border-none relative z-10 group-hover:scale-105 transition-transform">BUILD MY WEBSITE NOW</Button>
        </motion.div>
      </section>

      {/* Contact Form */}
      <section className="py-16 lg:py-24 px-4 sm:px-6 bg-black/[0.02]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-primary font-bold tracking-widest text-[10px] uppercase">Get Started</span>
            <h2 className="text-5xl md:text-7xl font-black mt-4 uppercase">START YOUR WEBSITE TODAY. ₹9,999.</h2>
            <p className="text-ink-muted mt-4 font-medium">Fill in your details and we'll reach out within 2 hours via WhatsApp. No commitment. No pushy sales. Just your website, built right.</p>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-black/10 p-8 md:p-20 rounded-[40px] shadow-2xl"
          >
            <form className="space-y-12">
              <div className="grid md:grid-cols-2 gap-12">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <label className="text-[10px] font-black uppercase tracking-widest text-ink-muted">Your Name *</label>
                  <input type="text" className="w-full bg-black/[0.02] border-b-2 border-black/5 px-0 py-4 focus:outline-none focus:border-primary transition-colors font-bold" placeholder="Raj Sharma" />
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-4"
                >
                  <label className="text-[10px] font-black uppercase tracking-widest text-ink-muted">Phone / WhatsApp *</label>
                  <input type="tel" className="w-full bg-black/[0.02] border-b-2 border-black/5 px-0 py-4 focus:outline-none focus:border-primary transition-colors font-bold" placeholder="+91 98765 43210" />
                </motion.div>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <label className="text-[10px] font-black uppercase tracking-widest text-ink-muted">Business Type</label>
                <input type="text" className="w-full bg-black/[0.02] border-b-2 border-black/5 px-0 py-4 focus:outline-none focus:border-primary transition-colors font-bold" placeholder="e.g. Restaurant, Clinic, Boutique" />
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <label className="text-[10px] font-black uppercase tracking-widest text-ink-muted">Message</label>
                <textarea rows={1} className="w-full bg-black/[0.02] border-b-2 border-black/5 px-0 py-4 focus:outline-none focus:border-primary transition-colors font-bold resize-none" placeholder="Tell us about your business and what you need..." />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Button className="w-full py-6 text-lg font-black uppercase tracking-widest">SEND ENQUIRY →</Button>
              </motion.div>
            </form>
            <div className="mt-12 text-center text-[10px] font-black text-ink-muted uppercase tracking-widest">
              We respond within 2 hours · No upfront payment · 50-50 payment model
            </div>
          </motion.div>

          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-black/5 rounded-2xl flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <CheckCircle2 size={20} />
              </div>
              <h4 className="text-[10px] font-black uppercase mb-2">50-50 Payment</h4>
              <p className="text-[10px] text-ink-muted font-bold uppercase">Pay ₹5,000 to start. Balance after you approve.</p>
            </div>
            <div className="p-8 border border-black/5 rounded-2xl flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Zap size={20} />
              </div>
              <h4 className="text-[10px] font-black uppercase mb-2">1-5 Day Delivery</h4>
              <p className="text-[10px] text-ink-muted font-bold uppercase">Fast turnaround. Same-day available on request.</p>
            </div>
            <div className="p-8 border border-black/5 rounded-2xl flex flex-col items-center text-center">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
                <Shield size={20} />
              </div>
              <h4 className="text-[10px] font-black uppercase mb-2">1 Free Revision</h4>
              <p className="text-[10px] text-ink-muted font-bold uppercase">Not happy? We fix it. No questions asked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/919876543210?text=Hi%20SHAJAMX%2C%20I%20want%20to%20discuss%20a%20project"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 z-[9999] w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl group"
      >
        <div className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" />
        <MessageSquare className="text-white fill-white" size={32} />
        <span className="absolute right-full mr-4 bg-white text-black px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          WhatsApp Us
        </span>
      </motion.a>
    </div>
  );
};
