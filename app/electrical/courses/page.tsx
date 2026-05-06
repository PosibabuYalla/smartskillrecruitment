"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { ChevronDown, Clock, Users, Award, CheckCircle } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/electrical" },
  { label: "Courses", href: "/electrical/courses" },
  { label: "About", href: "/electrical/about" },
  { label: "Blog", href: "/electrical/blog" },
  { label: "Contact", href: "/electrical/contact" },
];

const courses = [
  {
    title: "Cable Identification & Installation",
    duration: "4 Weeks", students: "120+", level: "Beginner",
    desc: "Master cable types, color coding, installation techniques, and safety standards used in industrial environments.",
    topics: ["Cable types & specifications", "Color coding standards", "Conduit installation", "Cable tray systems", "Safety protocols", "Testing & commissioning"],
    badge: "Foundation",
  },
  {
    title: "Panel Board Design & Assembly",
    duration: "6 Weeks", students: "95+", level: "Intermediate",
    desc: "Learn to design, assemble, and troubleshoot industrial panel boards including MCBs, MCCBs, and contactors.",
    topics: ["Panel layout design", "MCB/MCCB selection", "Contactor wiring", "PLC integration basics", "Fault diagnosis", "Documentation"],
    badge: "Core",
  },
  {
    title: "HT/LT Motors & Drives",
    duration: "8 Weeks", students: "80+", level: "Advanced",
    desc: "Comprehensive training on high-tension and low-tension motors, VFDs, and industrial drive systems.",
    topics: ["Motor types & selection", "Star-delta starters", "VFD programming", "Motor protection", "Energy efficiency", "Maintenance schedules"],
    badge: "Advanced",
  },
  {
    title: "Industrial Protocols & Automation",
    duration: "6 Weeks", students: "70+", level: "Advanced",
    desc: "Industry 4.0 protocols including Modbus, PROFIBUS, PROFINET, and SCADA system integration.",
    topics: ["Modbus RTU/TCP", "PROFIBUS DP", "PROFINET", "SCADA basics", "HMI programming", "IoT integration"],
    badge: "Specialist",
  },
  {
    title: "Electrical Safety & Compliance",
    duration: "2 Weeks", students: "200+", level: "All Levels",
    desc: "Essential safety training covering IS standards, PPE, lockout/tagout, and electrical hazard management.",
    topics: ["IS/IEC standards", "PPE selection", "LOTO procedures", "Arc flash safety", "First aid", "Compliance documentation"],
    badge: "Safety",
  },
  {
    title: "Renewable Energy Systems",
    duration: "5 Weeks", students: "60+", level: "Intermediate",
    desc: "Solar PV systems, wind energy integration, battery storage, and grid-tie inverter installation.",
    topics: ["Solar PV design", "Inverter types", "Battery storage", "Grid-tie systems", "Net metering", "Maintenance"],
    badge: "Green Tech",
  },
];

const badgeColors: Record<string, string> = {
  Foundation: "#10B981", Core: "#F59E0B", Advanced: "#EF4444",
  Specialist: "#7C3AED", Safety: "#06B6D4", "Green Tech": "#84CC16",
};

function CourseCard({ course, index }: { course: typeof courses[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:index*0.08}}
      className="rounded-2xl overflow-hidden" style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(245,158,11,0.15)'}}>
      <button className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-amber-400/5 transition-colors"
        onClick={() => setOpen(!open)}>
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2 flex-wrap">
            <span className="text-xs font-bold px-2.5 py-1 rounded-full" style={{background:`${badgeColors[course.badge]}20`, color:badgeColors[course.badge], border:`1px solid ${badgeColors[course.badge]}40`}}>
              {course.badge}
            </span>
            <span className="text-xs text-gray-500">{course.level}</span>
          </div>
          <h3 className="text-xl font-bold font-rajdhani text-white mb-2">{course.title}</h3>
          <p className="text-gray-400 text-sm">{course.desc}</p>
          <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Clock size={12} className="text-amber-400"/>{course.duration}</span>
            <span className="flex items-center gap-1"><Users size={12} className="text-amber-400"/>{course.students} enrolled</span>
            <span className="flex items-center gap-1"><Award size={12} className="text-amber-400"/>Certificate</span>
          </div>
        </div>
        <ChevronDown size={20} className={`text-amber-400 transition-transform flex-shrink-0 mt-1 ${open ? 'rotate-180' : ''}`}/>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:"auto", opacity:1}} exit={{height:0, opacity:0}}
            className="overflow-hidden">
            <div className="px-6 pb-6 border-t border-amber-400/10 pt-4">
              <div className="text-sm font-semibold text-amber-400 mb-3">Topics Covered</div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                {course.topics.map((t, i) => (
                  <div key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <CheckCircle size={14} className="text-amber-400 flex-shrink-0"/>
                    {t}
                  </div>
                ))}
              </div>
              <Link href="/electrical/enroll"
                className="inline-block px-6 py-2.5 rounded-full text-sm font-bold text-black transition-transform hover:scale-105"
                style={{background:'linear-gradient(135deg, #F59E0B, #D97706)'}}>
                Enroll in This Course
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function ElectricalCourses() {
  return (
    <div style={{background:'#0A0F1E', minHeight:'100vh'}}>
      <Navbar theme="electrical" links={navLinks}/>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')`}}/>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-5xl font-bold font-rajdhani gradient-text-amber mb-4">
            Our Courses
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-gray-400 text-lg">
            Industry-aligned curriculum designed with top electrical engineers
          </motion.p>
        </div>
      </section>
      <section className="py-10 px-4 pb-20">
        <div className="max-w-4xl mx-auto flex flex-col gap-4">
          {courses.map((c, i) => <CourseCard key={i} course={c} index={i}/>)}
        </div>
      </section>
      <WhatsAppButton/>
      <BackToTop/>
    </div>
  );
}
