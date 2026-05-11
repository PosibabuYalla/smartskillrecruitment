"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { Target, Eye, CheckCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
];

const team = [
  { name: "Vikram Nair", role: "Founder & CEO", exp: "18 yrs", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80" },
  { name: "Deepa Krishnan", role: "Head of Curriculum", exp: "12 yrs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
  { name: "Arjun Mehta", role: "Lead Trainer — AI/ML", exp: "10 yrs", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
  { name: "Sneha Iyer", role: "Placement Director", exp: "8 yrs", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" },
];

const techStack = ["React", "Next.js", "Node.js", "Python", "TensorFlow", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL", "TypeScript", "GraphQL"];

const visionCards = [
  { emoji: "🎯", title: "Student-First", desc: "Every decision we make is centered around student success and career outcomes.", color: "#10B981" },
  { emoji: "🔬", title: "Research-Driven", desc: "Curriculum updated quarterly based on industry trends and hiring patterns.", color: "#7C3AED" },
  { emoji: "🤝", title: "Industry Connected", desc: "Direct partnerships with 100+ tech companies for placement and internships.", color: "#06B6D4" },
  { emoji: "🌍", title: "Global Standards", desc: "Training aligned with international certifications and global best practices.", color: "#10B981" },
];

export default function SoftwareAbout() {
  return (
    <div style={{background:'#0D0D1A', minHeight:'100vh'}}>
      <Navbar theme="software" links={navLinks}/>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')`}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(13,13,26,0.85), #0D0D1A)'}}/>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:0.8}}>
            <h1 className="text-5xl font-bold font-space gradient-text-teal mb-6">About SSR Software</h1>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded in 2016, SSR Institute's Software Division was born from a vision to create India's most practical, industry-aligned software training program.
            </p>
            <p className="text-gray-400 leading-relaxed">
              We don't just teach code — we build careers. Our alumni work at Google, Amazon, Flipkart, Infosys, and 100+ other companies across India and globally.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.2}}
            className="flex flex-col gap-4">
            {[
              { icon: <Target size={22}/>, title: "Mission", text: "Deliver project-based, mentor-driven software training that creates job-ready developers.", color: "#10B981" },
              { icon: <Eye size={22}/>, title: "Vision", text: "To be India's #1 software training institute producing 10,000 developers by 2027.", color: "#7C3AED" },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl flex gap-4"
                style={{background:`${item.color}08`, border:`1px solid ${item.color}25`}}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{background:`${item.color}20`, color:item.color}}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold font-space mb-1" style={{color:item.color}}>{item.title}</div>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
            <div className="p-5 rounded-2xl" style={{background:'rgba(6,182,212,0.06)', border:'1px solid rgba(6,182,212,0.2)'}}>
              <div className="font-bold font-space text-cyan-400 mb-3">Mission Checklist</div>
              {["Project-based learning approach", "1:1 mentorship for every student", "Lifetime alumni network access", "Job guarantee programs available"].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-gray-300 mb-2">
                  <CheckCircle size={14} className="text-cyan-400 flex-shrink-0"/>{item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Cards */}
      <section className="py-20 px-4" style={{background:'rgba(255,255,255,0.02)'}}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
            className="text-4xl font-bold font-space gradient-text-teal text-center mb-14">
            Our Core Values
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {visionCards.map((c, i) => (
              <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="p-6 rounded-2xl text-center card-hover"
                style={{background:`${c.color}06`, border:`1px solid ${c.color}20`}}>
                <div className="text-4xl mb-4">{c.emoji}</div>
                <h3 className="font-bold font-space text-white mb-2">{c.title}</h3>
                <p className="text-gray-400 text-sm">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
            className="text-4xl font-bold font-space gradient-text-teal text-center mb-14">
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="text-center p-6 rounded-2xl card-hover"
                style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(16,185,129,0.1)'}}>
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-teal-400/30">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover"/>
                </div>
                <div className="font-bold font-space text-white text-sm">{member.name}</div>
                <div className="text-teal-400 text-xs mt-1">{member.role}</div>
                <div className="text-gray-500 text-xs mt-1">{member.exp} exp</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-4" style={{background:'rgba(255,255,255,0.02)'}}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
            className="text-3xl font-bold font-space gradient-text-purple mb-8">
            Technologies We Teach
          </motion.h2>
          <div className="flex flex-wrap justify-center gap-3">
            {techStack.map((t, i) => (
              <motion.span key={i} initial={{opacity:0, scale:0.8}} whileInView={{opacity:1, scale:1}} viewport={{once:true}} transition={{delay:i*0.04}}
                className="px-4 py-2 rounded-full text-sm font-semibold"
                style={{background:'rgba(16,185,129,0.1)', border:'1px solid rgba(16,185,129,0.25)', color:'#10B981'}}>
                {t}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      <WhatsAppButton phone="917799811611"/>
      <BackToTop/>
    </div>
  );
}
