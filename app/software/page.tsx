"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../components/Navbar";
import { WhatsAppButton, BackToTop } from "../components/FloatingButtons";
import { StatCounter } from "../components/Counter";
import { Code2, Brain, Cloud, Database, Globe, Smartphone, ArrowRight, CheckCircle, Users, Award, Zap } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
];

function NeonOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="orb-float absolute top-20 left-10 w-72 h-72 rounded-full opacity-20" style={{background:'radial-gradient(circle, #10B981, transparent 70%)'}}/>
      <div className="orb-float-delay absolute top-40 right-20 w-96 h-96 rounded-full opacity-15" style={{background:'radial-gradient(circle, #7C3AED, transparent 70%)'}}/>
      <div className="orb-float-delay2 absolute bottom-20 left-1/3 w-64 h-64 rounded-full opacity-20" style={{background:'radial-gradient(circle, #06B6D4, transparent 70%)'}}/>
      <div className="orb-float absolute bottom-40 right-10 w-48 h-48 rounded-full opacity-15" style={{background:'radial-gradient(circle, #10B981, transparent 70%)'}}/>
    </div>
  );
}

const quickCourses = [
  { icon: <Code2 size={28}/>, title: "Full-Stack Development", tech: "React · Node · MongoDB", color: "#10B981" },
  { icon: <Brain size={28}/>, title: "AI & Machine Learning", tech: "Python · TensorFlow · PyTorch", color: "#7C3AED" },
  { icon: <Cloud size={28}/>, title: "Cloud Computing", tech: "AWS · Azure · GCP", color: "#06B6D4" },
  { icon: <Database size={28}/>, title: "Data Science", tech: "Python · Pandas · SQL", color: "#10B981" },
  { icon: <Globe size={28}/>, title: "DevOps & CI/CD", tech: "Docker · K8s · Jenkins", color: "#7C3AED" },
  { icon: <Smartphone size={28}/>, title: "Mobile Development", tech: "React Native · Flutter", color: "#06B6D4" },
];

export default function SoftwareHome() {
  return (
    <div style={{background:'#0D0D1A', minHeight:'100vh'}}>
      <Navbar theme="software" links={navLinks}/>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80')`}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(13,13,26,0.95) 0%, rgba(13,13,26,0.8) 100%)'}}/>
        <NeonOrbs/>

        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div initial={{opacity:0, y:-20}} animate={{opacity:1, y:0}} transition={{duration:0.6}}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold mb-6"
            style={{background:'rgba(16,185,129,0.15)', border:'1px solid rgba(16,185,129,0.3)', color:'#10B981'}}>
            <Zap size={12}/> India's Premier Software Training Institute
          </motion.div>

          <motion.h1 initial={{opacity:0, y:30}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.2}}
            className="text-5xl md:text-7xl font-bold font-space mb-6 leading-tight">
            <span className="gradient-text-teal">Build the</span>{" "}
            <span className="text-white">Future</span><br/>
            <span className="gradient-text-purple">with Code</span>
          </motion.h1>

          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{duration:0.8, delay:0.4}}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Master cutting-edge technologies with industry experts. From zero to job-ready in months.
          </motion.p>

          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.8, delay:0.6}}
            className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/software/enroll"
              className="px-8 py-4 rounded-full font-bold text-white transition-transform hover:scale-105 glow-teal"
              style={{background:'linear-gradient(135deg, #10B981, #7C3AED)'}}>
              Start Learning — Free Demo
            </Link>
            <Link href="/software/courses"
              className="px-8 py-4 rounded-full font-semibold text-teal-400 transition-all hover:bg-teal-400/10"
              style={{border:'1px solid rgba(16,185,129,0.4)'}}>
              Explore Courses <ArrowRight className="inline ml-2" size={16}/>
            </Link>
          </motion.div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 text-xs">
          <span>Scroll Down</span>
          <div className="w-px h-8 bg-gradient-to-b from-teal-400 to-transparent"/>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4" style={{background:'rgba(16,185,129,0.04)', borderTop:'1px solid rgba(16,185,129,0.1)'}}>
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <StatCounter value={3000} label="Developers Trained" color="#10B981"/>
          <StatCounter value={95} label="Placement Rate" suffix="%" color="#10B981"/>
          <StatCounter value={8} label="Years Experience" color="#10B981"/>
          <StatCounter value={100} label="Hiring Partners" color="#10B981"/>
        </div>
      </section>

      {/* Quick Course Grid */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} className="text-center mb-14">
            <h2 className="text-4xl font-bold font-space gradient-text-teal mb-3">Our Programs</h2>
            <p className="text-gray-400">Industry-aligned courses for the modern tech landscape</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {quickCourses.map((c, i) => (
              <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
                className="p-6 rounded-2xl card-hover group cursor-pointer"
                style={{background:'rgba(255,255,255,0.04)', border:`1px solid ${c.color}25`}}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                  style={{background:`${c.color}20`, color:c.color}}>
                  {c.icon}
                </div>
                <h3 className="font-bold font-space text-lg text-white mb-1">{c.title}</h3>
                <p className="text-gray-500 text-xs mb-4">{c.tech}</p>
                <Link href="/software/courses" className="flex items-center gap-1 text-sm font-semibold hover:gap-2 transition-all" style={{color:c.color}}>
                  Learn More <ArrowRight size={14}/>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4" style={{background:'rgba(255,255,255,0.02)'}}>
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
            className="p-8 rounded-2xl" style={{background:'rgba(16,185,129,0.06)', border:'1px solid rgba(16,185,129,0.2)'}}>
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-2xl font-bold font-space gradient-text-teal mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">To be India's most impactful software training institute, producing world-class developers who build solutions that matter.</p>
            <div className="mt-6 flex flex-col gap-2">
              {["10,000 developers by 2026", "Global placement network", "Industry-first curriculum"].map((v, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle size={14} className="text-teal-400"/>{v}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
            className="p-8 rounded-2xl" style={{background:'rgba(124,58,237,0.06)', border:'1px solid rgba(124,58,237,0.2)'}}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold font-space gradient-text-purple mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">Deliver hands-on, project-based training that bridges the gap between academic learning and real-world software development.</p>
            <div className="mt-6 flex flex-col gap-2">
              {["Project-based learning", "1:1 mentorship sessions", "Lifetime career support"].map((v, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                  <CheckCircle size={14} className="text-purple-400"/>{v}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4">
        <motion.div initial={{opacity:0, scale:0.95}} whileInView={{opacity:1, scale:1}} viewport={{once:true}}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl relative overflow-hidden"
          style={{background:'linear-gradient(135deg, rgba(16,185,129,0.1), rgba(124,58,237,0.15))', border:'1px solid rgba(16,185,129,0.2)'}}>
          <NeonOrbs/>
          <h2 className="text-4xl font-bold font-space gradient-text-teal mb-4 relative z-10">Ready to Code Your Future?</h2>
          <p className="text-gray-300 mb-8 relative z-10">Join 3000+ developers who launched their careers with SSR Institute</p>
          <a href="https://wa.me/917799811611" target="_blank" rel="noopener noreferrer"
            className="inline-block px-10 py-4 rounded-full font-bold text-white glow-teal transition-transform hover:scale-105 relative z-10"
            style={{background:'linear-gradient(135deg, #10B981, #7C3AED)'}}>
            Call Now: +91 77998 11611
          </a>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-white/10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="text-2xl font-bold font-space gradient-text-teal mb-3">SSR Institute</div>
            <p className="text-gray-400 text-sm">Software Division — Building India's next generation of tech professionals.</p>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Quick Links</div>
            <div className="flex flex-col gap-2">
              {navLinks.map(l => <Link key={l.href} href={l.href} className="text-gray-400 hover:text-teal-400 text-sm transition-colors">{l.label}</Link>)}
            </div>
          </div>
          <div>
            <div className="font-semibold text-white mb-3">Contact</div>
            <div className="flex flex-col gap-2 text-sm text-gray-400">
              <a href="tel:+917799811611" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-teal-400 fill-current flex-shrink-0"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                +91 77998 11611
              </a>
              <a href="mailto:ssrvijayawada@gmail.com" className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-teal-400 fill-current flex-shrink-0"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                ssrvijayawada@gmail.com
              </a>
              <div className="flex items-start gap-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-teal-400 fill-current flex-shrink-0 mt-0.5"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
                <span>Poranki, Vijayawada,<br/>AP - 521137</span>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-gray-600 text-xs mt-8">© 2024 SSR Institute. All rights reserved.</div>
      </footer>

      <WhatsAppButton phone="917799811611"/>
      <BackToTop/>
    </div>
  );
}
