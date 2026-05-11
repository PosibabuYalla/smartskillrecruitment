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
    title: "HT and LT Motors Training",
    duration: "6 Weeks", students: "200+", level: "Intermediate",
    desc: "Comprehensive hands-on training on High Tension and Low Tension motors used in industrial power plants and substations.",
    topics: ["HT & LT motor types and specifications", "IR value & PI value testing", "Inductance value measurement", "Direction of rotation of motor", "How to use Motor Checker", "Motor protection & maintenance"],
    badge: "Core",
  },
  {
    title: "LEPB & Motor Control Systems",
    duration: "4 Weeks", students: "150+", level: "Intermediate",
    desc: "Master Local Emergency Push Button (LEPB) operations, tripping, closing sequences, and motor control panel operations.",
    topics: ["LEPB tripping and closing procedures", "Motor control panel wiring", "Emergency shutdown systems", "Interlock logic and safety circuits", "Control panel troubleshooting", "Field testing & commissioning"],
    badge: "Advanced",
  },
  {
    title: "Protocol Preparation & Documentation",
    duration: "3 Weeks", students: "180+", level: "All Levels",
    desc: "Learn to prepare industry-standard electrical protocols, maintenance records, and commissioning documents required in power plants.",
    topics: ["Protocol preparation standards", "Maintenance log documentation", "Commissioning checklists", "Test report formats", "Safety permit-to-work systems", "Compliance documentation"],
    badge: "Foundation",
  },
  {
    title: "Power Transformer & Auxiliaries",
    duration: "5 Weeks", students: "120+", level: "Advanced",
    desc: "In-depth training on power transformer maintenance, testing, and auxiliary systems used in substations and power plants.",
    topics: ["Transformer types & ratings", "Transformer oil testing", "Buchholz relay & protection", "Auxiliary systems maintenance", "Tap changer operations", "Substation safety procedures"],
    badge: "Specialist",
  },
  {
    title: "Industrial Electrical Safety",
    duration: "2 Weeks", students: "300+", level: "All Levels",
    desc: "Essential safety training for B.Tech, Diploma, and ITI electrical students entering thermal power plants, substations, and O&M plants.",
    topics: ["Electrical safety standards (IS/IEC)", "PPE selection and usage", "Lockout/Tagout (LOTO) procedures", "Arc flash hazard awareness", "First aid for electrical accidents", "Permit-to-work systems"],
    badge: "Safety",
  },
  {
    title: "Pre-Employment Career Awareness Program",
    duration: "2 Weeks", students: "500+", level: "Beginner",
    desc: "Career guidelines and awareness training for B.Tech, Diploma, and ITI Electrical students about the industrial sector and job placement assistance.",
    topics: ["Industrial sector overview", "Job roles in power plants & substations", "Resume & interview preparation", "Placement in thermal power plants", "O&M plant opportunities across India", "Career growth roadmap"],
    badge: "Career",
  },
];

const badgeColors: Record<string, string> = {
  Foundation: "#10B981", Core: "#F59E0B", Advanced: "#EF4444",
  Specialist: "#7C3AED", Safety: "#06B6D4", Career: "#F97316",
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
      <WhatsAppButton phone="919392606164"/>
      <BackToTop/>
    </div>
  );
}
