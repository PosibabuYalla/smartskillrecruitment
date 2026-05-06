"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, Code2, Users, Award, BookOpen, ArrowRight } from "lucide-react";

function useCounter(target: number, duration = 2000) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        let start = 0;
        const step = target / (duration / 16);
        const timer = setInterval(() => {
          start += step;
          if (start >= target) { setCount(target); clearInterval(timer); }
          else setCount(Math.floor(start));
        }, 16);
        observer.disconnect();
      }
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { count, ref };
}

function StatItem({ value, label, suffix = "+" }: { value: number; label: string; suffix?: string }) {
  const { count, ref } = useCounter(value);
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold font-rajdhani gradient-text-amber">{count}{suffix}</div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </div>
  );
}

// Circuit SVG for electrical card
function CircuitLines() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid slice">
      <path className="circuit-line" d="M0 80 H120 V40 H280 V80 H400" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
      <path className="circuit-line" d="M0 160 H80 V200 H200 V160 H400" stroke="#F59E0B" strokeWidth="1.5" fill="none" style={{animationDelay:'1s'}}/>
      <path className="circuit-line" d="M100 0 V120 H160 V180 H100 V300" stroke="#FCD34D" strokeWidth="1" fill="none" style={{animationDelay:'0.5s'}}/>
      <path className="circuit-line" d="M300 0 V60 H340 V240 H300 V300" stroke="#FCD34D" strokeWidth="1" fill="none" style={{animationDelay:'1.5s'}}/>
      <circle cx="120" cy="80" r="4" fill="#F59E0B" opacity="0.8"/>
      <circle cx="280" cy="80" r="4" fill="#F59E0B" opacity="0.8"/>
      <circle cx="200" cy="160" r="4" fill="#F59E0B" opacity="0.8"/>
      <circle cx="160" cy="120" r="3" fill="#FCD34D" opacity="0.6"/>
    </svg>
  );
}

// Floating orbs for software card
function FloatingOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="orb-float absolute top-8 right-12 w-24 h-24 rounded-full opacity-40" style={{background:'radial-gradient(circle, #10B981, transparent)'}}/>
      <div className="orb-float-delay absolute bottom-12 left-8 w-32 h-32 rounded-full opacity-30" style={{background:'radial-gradient(circle, #7C3AED, transparent)'}}/>
      <div className="orb-float-delay2 absolute top-1/2 right-1/4 w-16 h-16 rounded-full opacity-50" style={{background:'radial-gradient(circle, #06B6D4, transparent)'}}/>
    </div>
  );
}

export default function HomePage() {
  return (
    <main className="min-h-screen" style={{background:'#0A0F1E'}}>
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-4 overflow-hidden">
        {/* Background stars */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(60)].map((_, i) => (
            <div key={i} className="absolute rounded-full bg-white"
              style={{
                width: Math.random() * 2 + 1 + 'px',
                height: Math.random() * 2 + 1 + 'px',
                top: Math.random() * 100 + '%',
                left: Math.random() * 100 + '%',
                opacity: Math.random() * 0.6 + 0.1,
              }}
            />
          ))}
        </div>

        {/* Logo */}
        <motion.div initial={{opacity:0, y:-30}} animate={{opacity:1, y:0}} transition={{duration:0.8}}
          className="mb-6 relative">
          <div className="w-20 h-20 rounded-2xl flex items-center justify-center text-3xl font-bold font-rajdhani glow-amber"
            style={{background:'linear-gradient(135deg, #F59E0B, #D97706)'}}>
            SSR
          </div>
          <div className="absolute -inset-2 rounded-2xl opacity-20 blur-xl" style={{background:'#F59E0B'}}/>
        </motion.div>

        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}}
          className="text-6xl md:text-8xl font-bold font-rajdhani text-center mb-4 text-glow-amber gradient-text-amber">
          SSR Institute
        </motion.h1>

        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.4}}
          className="text-gray-400 text-lg md:text-xl text-center mb-4 max-w-xl">
          Shaping India's Future Workforce — Choose Your Path
        </motion.p>

        <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.5}}
          className="flex items-center gap-2 mb-16 text-sm text-gray-500">
          <Award size={14} className="text-amber-400"/>
          <span>ISO Certified</span>
          <span className="mx-2">•</span>
          <Users size={14} className="text-teal-400"/>
          <span>5000+ Alumni</span>
          <span className="mx-2">•</span>
          <BookOpen size={14} className="text-purple-400"/>
          <span>10+ Courses</span>
        </motion.div>

        {/* Division Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl px-4">
          {/* Electrical Card */}
          <motion.div initial={{opacity:0, x:-50}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.6}}>
            <Link href="/electrical">
              <div className="relative h-80 rounded-3xl overflow-hidden cursor-pointer card-hover group"
                style={{background:'linear-gradient(135deg, #1a1200, #2d1f00)'}}>
                {/* BG Image */}
                <div className="absolute inset-0 bg-cover bg-center opacity-30 group-hover:opacity-40 transition-opacity duration-500"
                  style={{backgroundImage:`url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=800&q=80')`}}/>
                {/* Gradient overlay */}
                <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(10,15,30,0.8) 100%)'}}/>
                <CircuitLines/>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 glow-amber"
                    style={{background:'rgba(245,158,11,0.2)', border:'1px solid rgba(245,158,11,0.4)'}}>
                    <Zap size={24} className="text-amber-400"/>
                  </div>
                  <h2 className="text-3xl font-bold font-rajdhani gradient-text-amber mb-2">Electrical Training</h2>
                  <p className="text-gray-300 text-sm mb-4">Industrial wiring, panel boards, HT/LT motors & protocols</p>
                  <div className="flex items-center gap-2 text-amber-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Explore Division</span>
                    <ArrowRight size={18}/>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* Software Card */}
          <motion.div initial={{opacity:0, x:50}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.7}}>
            <Link href="/software">
              <div className="relative h-80 rounded-3xl overflow-hidden cursor-pointer card-hover group"
                style={{background:'linear-gradient(135deg, #0d0d1a, #1a0d2e)'}}>
                <div className="absolute inset-0 bg-cover bg-center opacity-25 group-hover:opacity-35 transition-opacity duration-500"
                  style={{backgroundImage:`url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80')`}}/>
                <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(16,185,129,0.2) 0%, rgba(124,58,237,0.3) 100%)'}}/>
                <FloatingOrbs/>
                <div className="relative z-10 h-full flex flex-col justify-end p-8">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 glow-teal"
                    style={{background:'rgba(16,185,129,0.2)', border:'1px solid rgba(16,185,129,0.4)'}}>
                    <Code2 size={24} className="text-teal-400"/>
                  </div>
                  <h2 className="text-3xl font-bold font-space gradient-text-teal mb-2">Software Training</h2>
                  <p className="text-gray-300 text-sm mb-4">Full-stack, Python, AI/ML, Cloud & modern tech stacks</p>
                  <div className="flex items-center gap-2 text-teal-400 font-semibold group-hover:gap-4 transition-all">
                    <span>Explore Division</span>
                    <ArrowRight size={18}/>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <motion.section initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
        className="py-16 px-4" style={{background:'rgba(255,255,255,0.02)', borderTop:'1px solid rgba(255,255,255,0.06)'}}>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatItem value={5000} label="Students Trained"/>
          <StatItem value={98} label="Placement Rate" suffix="%"/>
          <StatItem value={10} label="Years Experience"/>
          <StatItem value={50} label="Industry Partners"/>
        </div>
      </motion.section>

      {/* WhatsApp + Back to top */}
      <WhatsAppButton/>
      <BackToTop/>
    </main>
  );
}

function WhatsAppButton() {
  return (
    <a href="https://wa.me/919999999999" target="_blank" rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group">
      <div className="relative w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        style={{background:'#25D366'}}>
        <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </div>
      <div className="absolute right-16 top-1/2 -translate-y-1/2 bg-gray-900 text-white text-xs px-3 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-gray-700">
        Chat on WhatsApp
      </div>
    </a>
  );
}

function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return visible ? (
    <button onClick={() => window.scrollTo({top:0, behavior:'smooth'})}
      className="fixed bottom-6 left-6 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
      style={{background:'rgba(245,158,11,0.2)', border:'1px solid rgba(245,158,11,0.4)'}}>
      <svg viewBox="0 0 24 24" className="w-5 h-5 text-amber-400 fill-none stroke-current" strokeWidth="2">
        <path d="M18 15l-6-6-6 6"/>
      </svg>
    </button>
  ) : null;
}
