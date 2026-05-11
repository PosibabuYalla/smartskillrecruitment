"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";

const navLinks = [
  { label: "Home", href: "/electrical" },
  { label: "Courses", href: "/electrical/courses" },
  { label: "About", href: "/electrical/about" },
  { label: "Blog", href: "/electrical/blog" },
  { label: "Contact", href: "/electrical/contact" },
];

const posts = [
  { title: "Understanding Cable Sizing for Industrial Applications", category: "Technical", date: "Dec 15, 2024", readTime: "5 min", img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80", excerpt: "A comprehensive guide to selecting the right cable size for different industrial loads and environments." },
  { title: "Top 10 Electrical Safety Practices Every Engineer Must Know", category: "Safety", date: "Dec 10, 2024", readTime: "7 min", img: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80", excerpt: "Essential safety protocols that protect electrical engineers from workplace hazards." },
  { title: "VFD vs Soft Starter: Which One Should You Choose?", category: "Drives", date: "Dec 5, 2024", readTime: "6 min", img: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&q=80", excerpt: "A detailed comparison of Variable Frequency Drives and Soft Starters for motor control applications." },
  { title: "Industry 4.0 and the Future of Electrical Engineering", category: "Industry", date: "Nov 28, 2024", readTime: "8 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", excerpt: "How IoT, AI, and automation are reshaping the electrical engineering landscape in India." },
  { title: "Solar Panel Installation: A Step-by-Step Guide", category: "Renewable", date: "Nov 20, 2024", readTime: "10 min", img: "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80", excerpt: "Complete walkthrough of residential and commercial solar PV system installation." },
  { title: "SCADA Systems: Monitoring Industrial Processes", category: "Automation", date: "Nov 15, 2024", readTime: "6 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", excerpt: "Introduction to SCADA systems and their role in modern industrial automation." },
];

const catColors: Record<string, string> = {
  Technical: "#F59E0B", Safety: "#EF4444", Drives: "#7C3AED",
  Industry: "#06B6D4", Renewable: "#10B981", Automation: "#F97316",
};

export default function ElectricalBlog() {
  return (
    <div style={{background:'#0A0F1E', minHeight:'100vh'}}>
      <Navbar theme="electrical" links={navLinks}/>
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-5xl font-bold font-rajdhani gradient-text-amber mb-4">
          Knowledge Hub
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-gray-400 text-lg">
          Insights, tutorials, and industry updates from our expert trainers
        </motion.p>
      </section>
      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="rounded-2xl overflow-hidden card-hover group"
              style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(255,255,255,0.08)'}}>
              <div className="h-48 overflow-hidden relative">
                <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"/>
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(10,15,30,0.6), transparent)'}}/>
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{background:`${catColors[post.category]}20`, color:catColors[post.category], border:`1px solid ${catColors[post.category]}40`}}>
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={11}/>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11}/>{post.readTime} read</span>
                </div>
                <h3 className="font-bold font-rajdhani text-white text-lg mb-2 leading-snug">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-amber-400 text-sm font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight size={14}/>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <Footer theme="electrical"/>
      <WhatsAppButton phone="919392606164"/>
      <BackToTop/>
    </div>
  );
}
