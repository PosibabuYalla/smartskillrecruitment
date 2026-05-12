"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";

interface NavbarProps {
  theme: "electrical" | "software";
  links: { label: string; href: string }[];
}

const softwareCourses = [
  { label: "Python Full Stack", href: "/software/courses/python-full-stack", duration: "6 Months" },
  { label: "MERN Stack", href: "/software/courses/mern-stack", duration: "6 Months" },
  { label: "AI & Machine Learning", href: "/software/courses/ai-machine-learning", duration: "6–8 Months" },
  { label: "Data Science", href: "/software/courses/data-science", duration: "6–12 Months" },
  { label: "Digital Marketing", href: "/software/courses/digital-marketing", duration: "3 Months" },
  { label: "Java Full Stack", href: "/software/courses/java-full-stack", duration: "6–8 Months" },
];

const electricalCourses = [
  { label: "HT & LT Motors Training", href: "/electrical/courses/ht-lt-motors", duration: "6 Weeks" },
  { label: "LEPB & Motor Control", href: "/electrical/courses/lepb-motor-control", duration: "4 Weeks" },
  { label: "Protocol Preparation", href: "/electrical/courses/protocol-preparation", duration: "3 Weeks" },
  { label: "Power Transformer & Auxiliaries", href: "/electrical/courses/power-transformer", duration: "5 Weeks" },
  { label: "Industrial Electrical Safety", href: "/electrical/courses/electrical-safety", duration: "2 Weeks" },
  { label: "Pre-Employment Career Program", href: "/electrical/courses/pre-employment-career", duration: "2 Weeks" },
];

export default function Navbar({ theme, links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCoursesOpen, setMobileCoursesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isElec = theme === "electrical";
  const accent = isElec ? "#F59E0B" : "#10B981";
  const accent2 = isElec ? "#D97706" : "#7C3AED";
  const ctaGrad = isElec
    ? "linear-gradient(135deg, #F59E0B, #D97706)"
    : "linear-gradient(135deg, #10B981, #7C3AED)";
  const fontClass = isElec ? "font-rajdhani" : "font-space";
  const home = isElec ? "/electrical" : "/software";
  const courses = isElec ? electricalCourses : softwareCourses;
  const coursesHref = isElec ? "/electrical/courses" : "/software/courses";

  const openDropdown = () => {
    if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
    setDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimer.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-glass" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href={home} className={`text-2xl font-bold ${fontClass}`} style={{ color: accent }}>
          SSR Institute
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((l) => {
            const isCourses = l.label === "Courses";
            if (isCourses) {
              return (
                <div key={l.href} className="relative"
                  onMouseEnter={openDropdown} onMouseLeave={closeDropdown}>
                  {/* Courses trigger */}
                  <button
                    className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors text-sm font-medium"
                    onClick={() => setDropdownOpen((v) => !v)}>
                    Courses
                    <ChevronDown size={14} className="transition-transform"
                      style={{ transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)", color: accent }} />
                  </button>

                  {/* Mega dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.97 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 8, scale: 0.97 }}
                        transition={{ duration: 0.18 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-[420px] rounded-2xl overflow-hidden shadow-2xl"
                        style={{
                          background: isElec ? "rgba(10,15,30,0.97)" : "rgba(13,13,26,0.97)",
                          border: `1px solid ${accent}25`,
                          backdropFilter: "blur(20px)",
                          boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px ${accent}15`,
                        }}
                        onMouseEnter={openDropdown}
                        onMouseLeave={closeDropdown}>

                        {/* Header */}
                        <div className="px-5 py-3.5 flex items-center justify-between"
                          style={{ borderBottom: `1px solid ${accent}15`, background: `${accent}08` }}>
                          <div>
                            <div className={`text-sm font-bold ${fontClass}`} style={{ color: accent }}>
                              {isElec ? "Electrical Training Programs" : "Software Training Programs"}
                            </div>
                            <div className="text-xs text-gray-500 mt-0.5">
                              {courses.length} courses available
                            </div>
                          </div>
                          <Link href={coursesHref}
                            className="flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-lg transition-all hover:opacity-80"
                            style={{ background: `${accent}18`, color: accent }}
                            onClick={() => setDropdownOpen(false)}>
                            View All <ArrowRight size={11} />
                          </Link>
                        </div>

                        {/* Course list */}
                        <div className="p-3">
                          {courses.map((c, i) => (
                            <Link key={c.href} href={c.href}
                              onClick={() => setDropdownOpen(false)}
                              className="flex items-center justify-between px-3 py-2.5 rounded-xl group transition-all hover:bg-white/5">
                              <div className="flex items-center gap-3">
                                <div className="w-1.5 h-1.5 rounded-full flex-shrink-0 transition-all group-hover:scale-150"
                                  style={{ background: accent }} />
                                <span className="text-sm text-gray-300 group-hover:text-white transition-colors font-medium">
                                  {c.label}
                                </span>
                              </div>
                              <div className="flex items-center gap-2">
                                <span className="text-xs px-2 py-0.5 rounded-full"
                                  style={{ background: `${accent}12`, color: accent, border: `1px solid ${accent}20` }}>
                                  {c.duration}
                                </span>
                                <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform"
                                  style={{ color: accent }} />
                              </div>
                            </Link>
                          ))}
                        </div>

                        {/* Footer CTA */}
                        <div className="px-5 py-3" style={{ borderTop: `1px solid ${accent}12` }}>
                          <Link href={isElec ? "/electrical/enroll" : "/software/enroll"}
                            onClick={() => setDropdownOpen(false)}
                            className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-sm font-bold transition-all hover:opacity-90"
                            style={{ background: ctaGrad, color: isElec ? "#0A0F1E" : "#fff" }}>
                            Enroll Now — Free Demo
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <Link key={l.href} href={l.href}
                className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
                {l.label}
              </Link>
            );
          })}

          <Link href={isElec ? "/electrical/enroll" : "/software/enroll"}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{ background: ctaGrad }}>
            Enroll Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden navbar-glass border-t border-white/10">
            <div className="px-4 py-4 flex flex-col gap-1">
              {links.map((l) => {
                const isCourses = l.label === "Courses";
                if (isCourses) {
                  return (
                    <div key={l.href}>
                      <button
                        onClick={() => setMobileCoursesOpen((v) => !v)}
                        className="w-full flex items-center justify-between py-2.5 text-sm text-gray-300 hover:text-white transition-colors">
                        <span>Courses</span>
                        <ChevronDown size={14} className="transition-transform"
                          style={{ color: accent, transform: mobileCoursesOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
                      </button>
                      <AnimatePresence>
                        {mobileCoursesOpen && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                            <div className="pl-3 pb-2 flex flex-col gap-0.5"
                              style={{ borderLeft: `2px solid ${accent}30` }}>
                              {courses.map((c) => (
                                <Link key={c.href} href={c.href}
                                  onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
                                  className="flex items-center justify-between py-2 px-2 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/5 transition-all">
                                  <span>{c.label}</span>
                                  <span className="text-xs" style={{ color: accent }}>{c.duration}</span>
                                </Link>
                              ))}
                              <Link href={coursesHref}
                                onClick={() => { setMobileOpen(false); setMobileCoursesOpen(false); }}
                                className="flex items-center gap-1 py-2 px-2 text-xs font-semibold mt-1 transition-colors"
                                style={{ color: accent }}>
                                View All Courses <ArrowRight size={11} />
                              </Link>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }
                return (
                  <Link key={l.href} href={l.href} onClick={() => setMobileOpen(false)}
                    className="text-gray-300 hover:text-white py-2.5 text-sm transition-colors">
                    {l.label}
                  </Link>
                );
              })}

              <Link href={isElec ? "/electrical/enroll" : "/software/enroll"}
                onClick={() => setMobileOpen(false)}
                className="mt-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white text-center"
                style={{ background: ctaGrad }}>
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
