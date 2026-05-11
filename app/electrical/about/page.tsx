"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { Target, Eye, Lightbulb } from "lucide-react";
import Footer from "../../components/Footer";

const navLinks = [
  { label: "Home", href: "/electrical" },
  { label: "Courses", href: "/electrical/courses" },
  { label: "About", href: "/electrical/about" },
  { label: "Blog", href: "/electrical/blog" },
  { label: "Contact", href: "/electrical/contact" },
];

const team = [
  { name: "Er. Suresh Reddy", role: "Founder & Director", exp: "20 yrs", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80" },
  { name: "Er. Kavitha Rao", role: "Head of Training", exp: "15 yrs", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80" },
  { name: "Er. Ravi Kumar", role: "Senior Trainer — HT/LT", exp: "12 yrs", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80" },
  { name: "Er. Anita Singh", role: "Placement Head", exp: "10 yrs", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=200&q=80" },
];

const milestones = [
  { year: "2009", event: "SSR Institute founded in Vijayawada, Andhra Pradesh" },
  { year: "2012", event: "First batch placed in thermal power plants & substations" },
  { year: "2015", event: "Launched HT/LT Motors & Protocol Preparation programs" },
  { year: "2018", event: "Expanded placement network across power industries in India" },
  { year: "2021", event: "Launched online hybrid training programs" },
  { year: "2024", event: "5000+ alumni milestone reached" },
];

export default function ElectricalAbout() {
  return (
    <div style={{background:'#0A0F1E', minHeight:'100vh'}}>
      <Navbar theme="electrical" links={navLinks}/>

      {/* Hero */}
      <section className="relative pt-32 pb-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-15"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80')`}}/>
        <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(10,15,30,0.8), #0A0F1E)'}}/>
        <div className="max-w-6xl mx-auto relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div initial={{opacity:0, x:-30}} animate={{opacity:1, x:0}} transition={{duration:0.8}}>
            <h1 className="text-5xl font-bold font-rajdhani gradient-text-amber mb-6">Our Story</h1>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded in 2009, SSR Institute began with a simple mission: bridge the gap between academic electrical education and real-world industrial requirements in Andhra Pradesh.
            </p>
            <p className="text-gray-400 leading-relaxed">
              Based in Vijayawada, we are Andhra Pradesh's most trusted electrical training institute with 5000+ alumni placed in thermal power plants, substations, O&M plants, and power industries across India.
            </p>
          </motion.div>
          <motion.div initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} transition={{duration:0.8, delay:0.2}}
            className="grid grid-cols-1 gap-4">
            {[
              { icon: <Target size={24}/>, title: "Our Mission", text: "Deliver world-class electrical training that creates job-ready professionals for India's growing industrial sector." },
              { icon: <Eye size={24}/>, title: "Our Vision", text: "To be India's #1 electrical training institute, producing 10,000+ certified professionals by 2030." },
              { icon: <Lightbulb size={24}/>, title: "Our Values", text: "Excellence, integrity, hands-on learning, and unwavering commitment to student success." },
            ].map((item, i) => (
              <div key={i} className="p-5 rounded-2xl flex gap-4"
                style={{background:'rgba(245,158,11,0.06)', border:'1px solid rgba(245,158,11,0.15)'}}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 text-amber-400"
                  style={{background:'rgba(245,158,11,0.15)'}}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold font-rajdhani text-amber-400 mb-1">{item.title}</div>
                  <p className="text-gray-400 text-sm">{item.text}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4" style={{background:'rgba(255,255,255,0.02)'}}>
        <div className="max-w-3xl mx-auto">
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
            className="text-4xl font-bold font-rajdhani gradient-text-amber text-center mb-14">
            Our Journey
          </motion.h2>
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px" style={{background:'rgba(245,158,11,0.3)'}}/>
            {milestones.map((m, i) => (
              <motion.div key={i} initial={{opacity:0, x:-20}} whileInView={{opacity:1, x:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="flex gap-6 mb-8 relative">
                <div className="w-16 h-16 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold font-rajdhani z-10"
                  style={{background:'linear-gradient(135deg, #F59E0B, #D97706)', color:'#0A0F1E'}}>
                  {m.year}
                </div>
                <div className="flex-1 pt-4">
                  <p className="text-gray-300">{m.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2 initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}}
            className="text-4xl font-bold font-rajdhani gradient-text-amber text-center mb-14">
            Meet Our Team
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {team.map((member, i) => (
              <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.1}}
                className="text-center p-6 rounded-2xl card-hover"
                style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(245,158,11,0.1)'}}>
                <div className="w-20 h-20 rounded-full mx-auto mb-4 overflow-hidden border-2 border-amber-400/30">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover"/>
                </div>
                <div className="font-bold font-rajdhani text-white text-sm">{member.name}</div>
                <div className="text-amber-400 text-xs mt-1">{member.role}</div>
                <div className="text-gray-500 text-xs mt-1">{member.exp} exp</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer theme="electrical"/>
      <WhatsAppButton phone="919392606164"/>
      <BackToTop/>
    </div>
  );
}
