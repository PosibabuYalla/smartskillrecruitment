"use client";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Footer from "../../components/Footer";

const navLinks = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
];

const posts = [
  { title: "React 19 Features Every Developer Should Know", category: "Frontend", date: "Dec 18, 2024", readTime: "6 min", img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=600&q=80", excerpt: "Explore the game-changing features in React 19 including the new compiler and server components." },
  { title: "Building Production-Ready APIs with Node.js", category: "Backend", date: "Dec 14, 2024", readTime: "8 min", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&q=80", excerpt: "Best practices for building scalable, secure, and maintainable REST APIs with Node.js and Express." },
  { title: "Getting Started with AWS for Developers", category: "Cloud", date: "Dec 10, 2024", readTime: "10 min", img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80", excerpt: "A beginner's guide to the most important AWS services every developer should know." },
  { title: "Python for Machine Learning: 2025 Roadmap", category: "AI/ML", date: "Dec 5, 2024", readTime: "7 min", img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80", excerpt: "The complete learning path for becoming a machine learning engineer in 2025." },
  { title: "Docker & Kubernetes: Container Orchestration Guide", category: "DevOps", date: "Nov 30, 2024", readTime: "9 min", img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80", excerpt: "Master containerization and orchestration with Docker and Kubernetes from scratch." },
  { title: "TypeScript Best Practices for Large Codebases", category: "Frontend", date: "Nov 25, 2024", readTime: "5 min", img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&q=80", excerpt: "Essential TypeScript patterns and practices for maintaining large-scale applications." },
];

const catColors: Record<string, string> = {
  Frontend: "#10B981", Backend: "#7C3AED", Cloud: "#06B6D4",
  "AI/ML": "#EC4899", DevOps: "#F59E0B",
};

export default function SoftwareBlog() {
  return (
    <div style={{background:'#0D0D1A', minHeight:'100vh'}}>
      <Navbar theme="software" links={navLinks}/>
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-5xl font-bold font-space gradient-text-teal mb-4">
          Dev Insights
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-gray-400 text-lg">
          Tutorials, trends, and tech insights from our expert developers
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
                <div className="absolute inset-0" style={{background:'linear-gradient(to top, rgba(13,13,26,0.7), transparent)'}}/>
                <span className="absolute top-3 left-3 text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{background:`${catColors[post.category] || '#10B981'}20`, color:catColors[post.category] || '#10B981', border:`1px solid ${catColors[post.category] || '#10B981'}40`}}>
                  {post.category}
                </span>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-3 text-xs text-gray-500 mb-3">
                  <span className="flex items-center gap-1"><Calendar size={11}/>{post.date}</span>
                  <span className="flex items-center gap-1"><Clock size={11}/>{post.readTime} read</span>
                </div>
                <h3 className="font-bold font-space text-white text-lg mb-2 leading-snug">{post.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                <button className="flex items-center gap-2 text-teal-400 text-sm font-semibold hover:gap-3 transition-all">
                  Read More <ArrowRight size={14}/>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
      <Footer theme="software"/>
      <WhatsAppButton phone="917799811611"/>
      <BackToTop/>
    </div>
  );
}
