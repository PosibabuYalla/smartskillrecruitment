"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  theme: "electrical" | "software";
  links: { label: string; href: string }[];
}

export default function Navbar({ theme, links }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const isElec = theme === "electrical";
  const accent = isElec ? "#F59E0B" : "#10B981";
  const ctaGrad = isElec
    ? "linear-gradient(135deg, #F59E0B, #D97706)"
    : "linear-gradient(135deg, #10B981, #7C3AED)";
  const fontClass = isElec ? "font-rajdhani" : "font-space";
  const home = isElec ? "/electrical" : "/software";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "navbar-glass" : "bg-transparent"}`}>
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href={home} className={`text-2xl font-bold ${fontClass}`} style={{color: accent}}>
          SSR Institute
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <Link key={l.href} href={l.href}
              className="text-gray-300 hover:text-white transition-colors text-sm font-medium">
              {l.label}
            </Link>
          ))}
          <Link href={isElec ? "/electrical/enroll" : "/software/enroll"}
            className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
            style={{background: ctaGrad}}>
            Enroll Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X size={24}/> : <Menu size={24}/>}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div initial={{opacity:0, height:0}} animate={{opacity:1, height:"auto"}} exit={{opacity:0, height:0}}
            className="md:hidden navbar-glass border-t border-white/10">
            <div className="px-4 py-4 flex flex-col gap-3">
              {links.map(l => (
                <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
                  className="text-gray-300 hover:text-white py-2 text-sm">
                  {l.label}
                </Link>
              ))}
              <Link href={isElec ? "/electrical/enroll" : "/software/enroll"}
                onClick={() => setOpen(false)}
                className="px-5 py-2 rounded-full text-sm font-semibold text-white text-center"
                style={{background: ctaGrad}}>
                Enroll Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
