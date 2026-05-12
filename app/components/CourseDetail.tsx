"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { WhatsAppButton, BackToTop } from "./FloatingButtons";
import {
  CheckCircle, ChevronDown, Star, Users, Clock, Award, Zap, ArrowRight,
  BookOpen, Target, Briefcase, Code2, Database, Globe, Brain, Cpu, Server,
  Shield, Wrench, FileText, Layers, Monitor, Smartphone, Cloud, GitBranch,
  BarChart2, Search, Mail, Megaphone, Settings, FlaskConical, Bolt,
  Factory, HardHat, AlertTriangle, ClipboardList, Gauge, Plug, Radio,
  TrendingUp, GraduationCap, BadgeCheck, Rocket, MessageSquare, Tag,
  type LucideIcon,
} from "lucide-react";

export interface CourseData {
  theme: "electrical" | "software";
  slug: string;
  title: string;
  tagline: string;
  heroImage: string;
  duration: string;
  students: string;
  level: string;
  rating: number;
  color: string;
  gradient: string;
  badge: string;
  overview: string;
  learns: string[];
  technologies: { name: string; icon: LucideIcon }[];
  outcomes: { role: string; salary: string }[];
  whyChoose: { icon: LucideIcon; title: string; desc: string }[];
  projects: { title: string; desc: string; tech: string[] }[];
  syllabus: { module: string; topics: string[] }[];
  pricing: {
    original: number;
    offer: number;
    emi: number;
    includes: string[];
  };
}

// Re-export all icons so course pages can import from one place
export {
  Code2, Database, Globe, Brain, Cpu, Server, Shield, Wrench, FileText,
  Layers, Monitor, Smartphone, Cloud, GitBranch, BarChart2, Search, Mail,
  Megaphone, Settings, FlaskConical, Bolt, Factory, HardHat, AlertTriangle,
  ClipboardList, Gauge, Plug, Radio, TrendingUp, GraduationCap, BadgeCheck,
  Rocket, MessageSquare, Tag, Award, Zap, Star, BookOpen, Target, Briefcase,
  CheckCircle, Users, Clock,
};

const navLinksElec = [
  { label: "Home", href: "/electrical" },
  { label: "Courses", href: "/electrical/courses" },
  { label: "About", href: "/electrical/about" },
  { label: "Blog", href: "/electrical/blog" },
  { label: "Contact", href: "/electrical/contact" },
];
const navLinksSoft = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
];

function SyllabusItem({ mod, topics, accent }: { mod: string; topics: string[]; accent: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="rounded-2xl overflow-hidden"
      style={{ border: `1px solid ${accent}20`, background: "rgba(255,255,255,0.03)" }}>
      <button onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors">
        <span className="font-semibold text-white text-sm">{mod}</span>
        <ChevronDown size={18} className="flex-shrink-0 transition-transform"
          style={{ color: accent, transform: open ? "rotate(180deg)" : "rotate(0deg)" }} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
            <div className="px-6 pb-5 grid grid-cols-1 sm:grid-cols-2 gap-2 border-t border-white/5 pt-4">
              {topics.map((t, i) => (
                <div key={i} className="flex items-start gap-2 text-sm text-gray-400">
                  <CheckCircle size={13} className="flex-shrink-0 mt-0.5" style={{ color: accent }} />
                  {t}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function SectionHeader({ icon: Icon, title, accent, fontClass }:
  { icon: LucideIcon; title: string; accent: string; fontClass: string }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="w-12 h-12 rounded-2xl flex items-center justify-center"
        style={{ background: `${accent}18`, color: accent }}>
        <Icon size={22} />
      </div>
      <h2 className={`text-4xl font-bold ${fontClass} text-white`}>{title}</h2>
      <div className="w-16 h-1 rounded-full"
        style={{ background: `linear-gradient(90deg, transparent, ${accent}, transparent)` }} />
    </div>
  );
}

export default function CourseDetail({ data }: { data: CourseData }) {
  const isElec = data.theme === "electrical";
  const accent = data.color;
  const navLinks = isElec ? navLinksElec : navLinksSoft;
  const enrollHref = isElec ? "/electrical/enroll" : "/software/enroll";
  const waPhone = isElec ? "919392606164" : "917799811611";
  const fontClass = isElec ? "font-rajdhani" : "font-space";
  const bg = isElec ? "#0A0F1E" : "#0D0D1A";
  const saved = data.pricing.original - data.pricing.offer;
  const savedPct = Math.round((saved / data.pricing.original) * 100);

  return (
    <div style={{ background: bg, minHeight: "100vh" }}>
      <Navbar theme={data.theme} links={navLinks} />

      {/* ── HERO ── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url('${data.heroImage}')` }} />
        <div className="absolute inset-0"
          style={{ background: `linear-gradient(135deg, ${bg}F5 0%, ${bg}CC 60%, ${bg}99 100%)` }} />
        <div className="absolute top-1/2 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-3xl pointer-events-none -translate-y-1/2"
          style={{ background: `radial-gradient(circle, ${accent}, transparent 70%)` }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold mb-5"
              style={{ background: `${accent}18`, border: `1px solid ${accent}35`, color: accent }}>
              <Zap size={11} /> {data.badge}
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className={`text-5xl md:text-6xl font-extrabold ${fontClass} leading-tight mb-4`}
              style={{ background: data.gradient, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              {data.title}
            </motion.h1>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="text-gray-300 text-lg mb-8 leading-relaxed max-w-xl">
              {data.tagline}
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}
              className="flex flex-wrap gap-3 mb-8">
              {[
                { icon: Clock, label: data.duration },
                { icon: Users, label: `${data.students} Enrolled` },
                { icon: Award, label: data.level },
                { icon: Star, label: `${data.rating} Rating` },
              ].map((m, i) => (
                <div key={i} className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-sm font-medium"
                  style={{ background: `${accent}12`, border: `1px solid ${accent}25`, color: accent }}>
                  <m.icon size={14} /> {m.label}
                </div>
              ))}
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4">
              <Link href={enrollHref}
                className="px-8 py-4 rounded-2xl font-bold text-center transition-all hover:scale-105"
                style={{ background: data.gradient, color: isElec ? "#0A0F1E" : "#fff", boxShadow: `0 0 30px ${accent}40` }}>
                Enroll Now — Free Demo
              </Link>
              <a href={`https://wa.me/${waPhone}`} target="_blank" rel="noopener noreferrer"
                className="px-8 py-4 rounded-2xl font-semibold text-center transition-all hover:bg-white/10 flex items-center justify-center gap-2"
                style={{ border: `1px solid ${accent}40`, color: accent }}>
                <MessageSquare size={16} /> Chat on WhatsApp
              </a>
            </motion.div>
          </div>

          {/* Right card */}
          <motion.div initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, delay: 0.3 }}
            className="rounded-3xl p-8 relative overflow-hidden"
            style={{ background: `linear-gradient(135deg, ${accent}10, ${accent}05)`, border: `1px solid ${accent}25`, backdropFilter: "blur(12px)" }}>
            <div className="absolute top-0 right-0 w-40 h-40 rounded-full opacity-10 blur-2xl" style={{ background: accent }} />
            <div className="text-sm font-semibold mb-5" style={{ color: accent }}>COURSE OVERVIEW</div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">{data.overview}</p>
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Duration", value: data.duration },
                { label: "Level", value: data.level },
                { label: "Students", value: data.students },
                { label: "Certificate", value: "Yes, Included" },
                { label: "Mode", value: "Online + Offline" },
                { label: "Support", value: "Lifetime Access" },
              ].map((item, i) => (
                <div key={i} className="p-3 rounded-xl" style={{ background: `${accent}08`, border: `1px solid ${accent}15` }}>
                  <div className="text-xs text-gray-500 mb-0.5">{item.label}</div>
                  <div className="text-sm font-semibold text-white">{item.value}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHAT YOU'LL LEARN ── */}
      <section className="py-20 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={BookOpen} title="What You'll Learn" accent={accent} fontClass={fontClass} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {data.learns.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                className="flex items-start gap-3 p-4 rounded-2xl"
                style={{ background: `${accent}08`, border: `1px solid ${accent}18` }}>
                <div className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${accent}25` }}>
                  <CheckCircle size={13} style={{ color: accent }} />
                </div>
                <span className="text-gray-300 text-sm leading-relaxed">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECHNOLOGIES ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Cpu} title="Technologies You'll Master" accent={accent} fontClass={fontClass} />
          <div className="flex flex-wrap justify-center gap-4 mt-10">
            {data.technologies.map((tech, i) => {
              const Icon = tech.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.04 }}
                  className="flex flex-col items-center gap-2.5 px-5 py-5 rounded-2xl min-w-[100px] card-hover"
                  style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${accent}18`, color: accent }}>
                    <Icon size={20} />
                  </div>
                  <span className="text-xs font-semibold text-gray-300 text-center">{tech.name}</span>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── COURSE OUTCOMES ── */}
      <section className="py-20 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Target} title="Course Outcomes" accent={accent} fontClass={fontClass} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {data.outcomes.map((o, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl card-hover relative overflow-hidden"
                style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}>
                <div className="absolute top-0 right-0 w-20 h-20 rounded-full opacity-10 blur-xl" style={{ background: accent }} />
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${accent}20` }}>
                  <Briefcase size={18} style={{ color: accent }} />
                </div>
                <div className="font-bold text-white text-base mb-1">{o.role}</div>
                <div className="text-sm font-semibold" style={{ color: accent }}>{o.salary}</div>
                <div className="text-xs text-gray-500 mt-1">Average Package</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ── */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Star} title="Why Choose This Course?" accent={accent} fontClass={fontClass} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-10">
            {data.whyChoose.map((w, i) => {
              const Icon = w.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                  className="p-6 rounded-2xl text-center card-hover"
                  style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${accent}18` }}>
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4"
                    style={{ background: `${accent}18`, color: accent }}>
                    <Icon size={22} />
                  </div>
                  <div className="font-bold text-white mb-2 text-sm">{w.title}</div>
                  <div className="text-gray-400 text-xs leading-relaxed">{w.desc}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section className="py-20 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-6xl mx-auto">
          <SectionHeader icon={Layers} title="Projects You'll Build" accent={accent} fontClass={fontClass} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
            {data.projects.map((p, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="p-6 rounded-2xl card-hover"
                style={{ background: "rgba(255,255,255,0.04)", border: `1px solid ${accent}20` }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 font-bold text-base"
                  style={{ background: data.gradient, color: isElec ? "#0A0F1E" : "#fff" }}>
                  {i + 1}
                </div>
                <div className="font-bold text-white mb-2">{p.title}</div>
                <div className="text-gray-400 text-sm mb-4 leading-relaxed">{p.desc}</div>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-0.5 rounded-full"
                      style={{ background: `${accent}15`, color: accent, border: `1px solid ${accent}25` }}>
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SYLLABUS ── */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <SectionHeader icon={BookOpen} title="Complete Syllabus" accent={accent} fontClass={fontClass} />
          <div className="flex flex-col gap-3 mt-10">
            {data.syllabus.map((s, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.04 }}>
                <SyllabusItem mod={`Module ${i + 1}: ${s.module}`} topics={s.topics} accent={accent} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ── */}
      <section className="py-20 px-6" style={{ background: "rgba(255,255,255,0.02)" }}>
        <div className="max-w-4xl mx-auto">
          <SectionHeader icon={Tag} title="Course Pricing" accent={accent} fontClass={fontClass} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 rounded-3xl overflow-hidden"
            style={{ border: `1px solid ${accent}30` }}>
            <div className="px-8 py-4 flex items-center justify-between flex-wrap gap-3"
              style={{ background: data.gradient }}>
              <div className="flex items-center gap-2 font-bold text-lg"
                style={{ color: isElec ? "#0A0F1E" : "#fff" }}>
                <BadgeCheck size={20} /> Limited Time Offer — {savedPct}% OFF
              </div>
              <div className="text-sm font-semibold"
                style={{ color: isElec ? "#0A0F1E" : "rgba(255,255,255,0.85)" }}>
                Save ₹{saved.toLocaleString("en-IN")}
              </div>
            </div>

            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
              style={{ background: `linear-gradient(135deg, ${accent}08, rgba(255,255,255,0.02))` }}>
              <div>
                <div className="flex items-end gap-4 mb-3">
                  <div className="text-5xl font-extrabold" style={{ color: accent }}>
                    ₹{data.pricing.offer.toLocaleString("en-IN")}
                  </div>
                  <div className="text-xl text-gray-500 line-through mb-1">
                    ₹{data.pricing.original.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="text-sm text-gray-400 mb-6">
                  Or pay in easy EMI starting at{" "}
                  <span className="font-bold" style={{ color: accent }}>
                    ₹{data.pricing.emi.toLocaleString("en-IN")}/month
                  </span>
                </div>
                <Link href={enrollHref}
                  className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
                  style={{ background: data.gradient, color: isElec ? "#0A0F1E" : "#fff", boxShadow: `0 0 24px ${accent}40` }}>
                  Enroll Now <ArrowRight size={16} />
                </Link>
              </div>

              <div>
                <div className="text-sm font-bold text-white mb-4">What's Included:</div>
                <div className="flex flex-col gap-3">
                  {data.pricing.includes.map((item, i) => (
                    <div key={i} className="flex items-center gap-3 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0"
                        style={{ background: `${accent}25` }}>
                        <CheckCircle size={12} style={{ color: accent }} />
                      </div>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 px-6">
        <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center p-12 rounded-3xl relative overflow-hidden"
          style={{ background: `linear-gradient(135deg, ${accent}12, ${accent}06)`, border: `1px solid ${accent}25` }}>
          <div className="absolute inset-0 opacity-5 pointer-events-none"
            style={{ background: `radial-gradient(circle at 50% 50%, ${accent}, transparent 70%)` }} />
          <Rocket size={40} className="mx-auto mb-4 relative z-10" style={{ color: accent }} />
          <h2 className={`text-3xl font-bold ${fontClass} text-white mb-3 relative z-10`}>
            Ready to Start Your Journey?
          </h2>
          <p className="text-gray-400 mb-8 relative z-10">
            Join {data.students} students already learning {data.title} at SSR Institute
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
            <Link href={enrollHref}
              className="px-8 py-4 rounded-2xl font-bold transition-all hover:scale-105"
              style={{ background: data.gradient, color: isElec ? "#0A0F1E" : "#fff" }}>
              Enroll for Free Demo
            </Link>
            <Link href={isElec ? "/electrical/contact" : "/software/contact"}
              className="px-8 py-4 rounded-2xl font-semibold transition-all hover:bg-white/5"
              style={{ border: `1px solid ${accent}35`, color: accent }}>
              Talk to Counsellor
            </Link>
          </div>
        </motion.div>
      </section>

      <Footer theme={data.theme} />
      <WhatsAppButton phone={waPhone} />
      <BackToTop />
    </div>
  );
}
