"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { WhatsAppButton, BackToTop } from "../components/FloatingButtons";
import { StatCounter } from "../components/Counter";
import { Zap, Shield, Award, Users, CheckCircle, Star, ArrowRight, Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/electrical" },
  { label: "Courses", href: "/electrical/courses" },
  { label: "About", href: "/electrical/about" },
  { label: "Blog", href: "/electrical/blog" },
  { label: "Contact", href: "/electrical/contact" },
];

function CircuitSVG() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
      <path className="circuit-line" d="M0 150 H300 V80 H600 V150 H900 V80 H1200" stroke="#F59E0B" strokeWidth="1.5" fill="none"/>
      <path className="circuit-line" d="M0 350 H200 V280 H500 V350 H800 V280 H1200" stroke="#F59E0B" strokeWidth="1.5" fill="none" style={{animationDelay:'1s'}}/>
      <path className="circuit-line" d="M0 550 H400 V480 H700 V550 H1200" stroke="#FCD34D" strokeWidth="1" fill="none" style={{animationDelay:'2s'}}/>
      <path className="circuit-line" d="M200 0 V200 H280 V500 H200 V700" stroke="#F59E0B" strokeWidth="1" fill="none" style={{animationDelay:'0.5s'}}/>
      <path className="circuit-line" d="M600 0 V100 H680 V600 H600 V700" stroke="#FCD34D" strokeWidth="1" fill="none" style={{animationDelay:'1.5s'}}/>
      <path className="circuit-line" d="M1000 0 V300 H1080 V400 H1000 V700" stroke="#F59E0B" strokeWidth="1" fill="none" style={{animationDelay:'0.8s'}}/>
      {[{cx:300,cy:150},{cx:600,cy:80},{cx:900,cy:150},{cx:200,cy:350},{cx:500,cy:280},{cx:800,cy:350}].map((c,i) => (
        <circle key={i} cx={c.cx} cy={c.cy} r="4" fill="#F59E0B" opacity="0.7"/>
      ))}
    </svg>
  );
}

const whyCards = [
  { icon: <Award size={28}/>, title: "Industry Certified", desc: "Training aligned with thermal power plants, substations, and O&M plant requirements" },
  { icon: <Users size={28}/>, title: "Expert Trainers", desc: "15+ years experienced electrical industry professionals as mentors" },
  { icon: <Shield size={28}/>, title: "Hands-on Training", desc: "Real industrial equipment — HT/LT motors, transformers, and control panels" },
  { icon: <Zap size={28}/>, title: "Job Placement", desc: "Placement assistance in power plants & power industries across India" },
];

const sectors = ["Thermal Power Plants", "Substations", "O&M Plants", "Power Industries", "Manufacturing", "Oil & Gas", "Railways", "Renewable Energy"];

const testimonials = [
  { name: "Rahul Sharma", role: "Electrical Engineer, BHEL", text: "SSR Institute transformed my career. The hands-on training was exceptional.", rating: 5 },
  { name: "Priya Patel", role: "Panel Technician, L&T", text: "Best electrical training institute in the region. Got placed within 2 months.", rating: 5 },
  { name: "Amit Kumar", role: "HT Engineer, NTPC", text: "The curriculum is perfectly aligned with industry requirements.", rating: 5 },
];

export default function ElectricalHome() {
  return (
    <div style={{background:'#0A0F1E', minHeight:'100vh'}}>
      <Navbar theme="electrical" links={navLinks}/>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80')`}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(10,15,30,0.92) 0%, rgba(10,15,30,0.75) 100%)'}}/>
        <CircuitSVG/>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{background:'rgba(245,158,11,0.15)', border:'1px solid rgba(245,158,11,0.3)', color:'#F59E0B'}}>
            <Zap size={12}/> India's Premier Electrical Training Institute
          </motion.div>
          <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}}
            className="text-5xl md:text-7xl font-bold font-rajdhani mb-6 text-glow-amber gradient-text-amber leading-tight">
            Power Your<br/>Career Forward
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.4}}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Industry-grade electrical training with real equipment — HT/LT Motors, Protocol Preparation, Power Transformer maintenance, and guaranteed placement in power plants across India.
          </motion.p>
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.6}}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/electrical/enroll"
              className="px-8 py-4 rounded-full font-bold text-black transition-transform hover:scale-105 glow-amber"
              style={{background:'linear-gradient(135deg, #F59E0B, #D97706)'}}>
              Enroll Now — Free Demo
            </Link>
            <Link href="/electrical/courses"
              className="px-8 py-4 rounded-full font-semibold text-amber-400 transition-all hover:bg-amber-400/10"
              style={{border:'1px solid rgba(245,158,11,0.4)'}}>
              View Courses <ArrowRight className="inline ml-2" size={16}/>
            </Link>
          </motion.div>
        </div>
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-amber-400 to-transparent"/>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4" style={{background:'rgba(245,158,11,0.04)', borderTop:'1px solid rgba(245,158,11,0.1)'}}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={5000} label="Students Trained" color="#F59E0B"/>
          <StatCounter value={98} label="Placement Rate" suffix="%" color="#F59E0B"/>
          <StatCounter value={15} label="Years Experience" color="#F59E0B"/>
          <StatCounter value={50} label="Hiring Partners" color="#F59E0B"/>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-14">
            <h2 className="text-4xl font-bold font-rajdhani gradient-text-amber mb-3">Why Choose SSR?</h2>
            <p className="text-gray-400">Industry-leading training with proven results</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCards.map((c, i) => (
              <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="p-6 rounded-2xl card-hover"
                style={{background:'rgba(245,158,11,0.06)', border:'1px solid rgba(245,158,11,0.15)'}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-amber-400"
                  style={{background:'rgba(245,158,11,0.15)'}}>
                  {c.icon}
                </div>
                <h3 className="font-bold font-rajdhani text-lg text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Placement Sectors */}
      <section className="py-20 px-4" style={{background:'rgba(255,255,255,0.02)'}}>
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-12">
            <h2 className="text-4xl font-bold font-rajdhani gradient-text-amber mb-3">Placement Sectors</h2>
            <p className="text-gray-400">Our graduates work across major industries</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {sectors.map((s, i) => (
              <motion.span key={i} initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:i*0.05}}
                className="px-5 py-2.5 rounded-full text-sm font-semibold text-amber-400"
                style={{background:'rgba(245,158,11,0.1)', border:'1px solid rgba(245,158,11,0.25)'}}>
                {s}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-14">
            <h2 className="text-4xl font-bold font-rajdhani gradient-text-amber mb-3">Student Success Stories</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.15}}
                className="p-6 rounded-2xl card-hover"
                style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)'}}>
                <div className="flex gap-1 mb-4">
                  {[...Array(t.rating)].map((_, j) => <Star key={j} size={14} className="text-amber-400 fill-amber-400"/>)}
                </div>
                <p className="text-gray-300 text-sm mb-4 italic">"{t.text}"</p>
                <div>
                  <div className="font-semibold text-white">{t.name}</div>
                  <div className="text-amber-400 text-xs">{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 px-4">
        <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl relative overflow-hidden"
          style={{background:'linear-gradient(135deg, rgba(245,158,11,0.15), rgba(217,119,6,0.1))', border:'1px solid rgba(245,158,11,0.25)'}}>
          <div className="absolute inset-0 opacity-5"><CircuitSVG/></div>
          <h2 className="text-4xl font-bold font-rajdhani gradient-text-amber mb-4 relative z-10">Ready to Start Your Journey?</h2>
          <p className="text-gray-300 mb-8 relative z-10">Join 5000+ successful electrical professionals trained at SSR Institute</p>
          <Link href="/electrical/enroll"
            className="inline-block px-10 py-4 rounded-full font-bold text-black glow-amber transition-transform hover:scale-105 relative z-10"
            style={{background:'linear-gradient(135deg, #F59E0B, #D97706)'}}>
            Start Free Demo Today
          </Link>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold font-rajdhani text-amber-400 mb-3">SSR Institute</div>
            <p className="text-gray-400 text-sm">Electrical Division — Pre-Employment Career Guidelines & Job Placement Assistance for B.Tech, Diploma & ITI students.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Quick Links</div>
            <div className="flex flex-col gap-2">
              {navLinks.map(l => <Link key={l.href} href={l.href} className="text-gray-400 hover:text-amber-400 text-sm transition-colors">{l.label}</Link>)}
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <div className="flex items-center gap-2"><Phone size={14} className="text-amber-400"/><span>+91 93926 06164</span></div>
              <div className="flex items-center gap-2"><Mail size={14} className="text-amber-400"/><span>ssrvijayawada@gmail.com</span></div>
              <div className="flex items-center gap-2"><MapPin size={14} className="text-amber-400"/><span>Poranki, Vijayawada, AP - 521137</span></div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-8">© 2024 SSR Institute. All rights reserved.</div>
      </footer>

      <WhatsAppButton phone="919392606164"/>
      <BackToTop/>
    </div>
  );
}
