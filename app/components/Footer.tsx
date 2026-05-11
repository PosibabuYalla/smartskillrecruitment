"use client";
import Link from "next/link";
import { motion } from "framer-motion";

interface FooterProps {
  theme: "electrical" | "software";
}

const electricalLinks = [
  { label: "Home", href: "/electrical" },
  { label: "Courses", href: "/electrical/courses" },
  { label: "About", href: "/electrical/about" },
  { label: "Blog", href: "/electrical/blog" },
  { label: "Contact", href: "/electrical/contact" },
  { label: "Enroll Now", href: "/electrical/enroll" },
];

const softwareLinks = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
  { label: "Enroll Now", href: "/software/enroll" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://youtube.com",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58zM9.75 15.02V8.98L15.5 12l-5.75 3.02z" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/917799811611",
    icon: (
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      </svg>
    ),
  },
];

export default function Footer({ theme }: FooterProps) {
  const isElec = theme === "electrical";
  const accent = isElec ? "#F59E0B" : "#10B981";
  const accent2 = isElec ? "#D97706" : "#7C3AED";
  const bg = isElec ? "#0A0F1E" : "#0D0D1A";
  const fontClass = isElec ? "font-rajdhani" : "font-space";
  const gradientText = isElec ? "gradient-text-amber" : "gradient-text-teal";
  const navLinks = isElec ? electricalLinks : softwareLinks;
  const phone = isElec ? "+91 93926 06164" : "+91 77998 11611";
  const waPhone = isElec ? "919392606164" : "917799811611";
  const division = isElec ? "Electrical Training" : "Software Training";
  const tagline = isElec
    ? "Pre-Employment Career Guidelines & Job Placement Assistance for B.Tech, Diploma & ITI Electrical students."
    : "Industry-aligned software training producing job-ready developers for India's top tech companies.";

  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${bg} 0%, #050810 100%)`,
        borderTop: `1px solid ${accent}18`,
      }}
    >
      {/* Top glow line */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent}60, ${accent2}60, transparent)`,
        }}
      />

      {/* Background orb */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: `radial-gradient(circle, ${accent}, transparent)` }}
      />

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

          {/* Col 1 — Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0 }}
          >
            {/* Logo mark */}
            <div className="flex items-center gap-3 mb-5">
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-lg font-bold font-rajdhani flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                  color: isElec ? "#0A0F1E" : "#fff",
                  boxShadow: `0 0 20px ${accent}40`,
                }}
              >
                SSR
              </div>
              <div>
                <div className={`text-lg font-bold ${fontClass} ${gradientText}`}>
                  SSR Institute
                </div>
                <div className="text-xs text-gray-500">{division}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-5">{tagline}</p>

            {/* Contact quick-info */}
            <div className="flex flex-col gap-2.5">
              <a
                href={`tel:${phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2.5 text-sm group"
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${accent}18`, color: accent }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                  </svg>
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors">{phone}</span>
              </a>
              <a
                href="mailto:ssrvijayawada@gmail.com"
                className="flex items-center gap-2.5 text-sm group"
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 transition-all group-hover:scale-110"
                  style={{ background: `${accent}18`, color: accent }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </span>
                <span className="text-gray-300 group-hover:text-white transition-colors">ssrvijayawada@gmail.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-sm">
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{ background: `${accent}18`, color: accent }}
                >
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  </svg>
                </span>
                <span className="text-gray-400 leading-relaxed">
                  Flat No.: 15-136-1, Sri Nagar Colony,<br />
                  Prabhu Nagar, Poranki, Vijayawada,<br />
                  NTR Dist., Andhra Pradesh - 521137
                </span>
              </div>
            </div>
          </motion.div>

          {/* Col 2 — Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className={`text-base font-bold ${fontClass} text-white mb-5 flex items-center gap-2`}>
              <span
                className="w-1 h-5 rounded-full inline-block"
                style={{ background: `linear-gradient(180deg, ${accent}, ${accent2})` }}
              />
              Quick Links
            </div>
            <ul className="flex flex-col gap-2.5">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 flex-shrink-0 transition-transform group-hover:translate-x-1"
                      style={{ fill: accent }}
                    >
                      <path d="M9 18l6-6-6-6" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Other division link */}
            <div
              className="mt-6 p-3.5 rounded-xl"
              style={{ background: `${accent}08`, border: `1px solid ${accent}20` }}
            >
              <div className="text-xs text-gray-500 mb-2">Also explore</div>
              <Link
                href={isElec ? "/software" : "/electrical"}
                className="text-sm font-semibold transition-colors hover:opacity-80"
                style={{ color: accent }}
              >
                {isElec ? "→ Software Training" : "→ Electrical Training"}
              </Link>
            </div>
          </motion.div>

          {/* Col 3 — Our Courses */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className={`text-base font-bold ${fontClass} text-white mb-5 flex items-center gap-2`}>
              <span
                className="w-1 h-5 rounded-full inline-block"
                style={{ background: `linear-gradient(180deg, ${accent}, ${accent2})` }}
              />
              Our Courses
            </div>
            <ul className="flex flex-col gap-2.5">
              {(isElec
                ? [
                    { label: "HT & LT Motors Training", href: "/electrical/courses" },
                    { label: "LEPB & Motor Control", href: "/electrical/courses" },
                    { label: "Protocol Preparation", href: "/electrical/courses" },
                    { label: "Power Transformer & Auxiliaries", href: "/electrical/courses" },
                    { label: "Industrial Electrical Safety", href: "/electrical/courses" },
                    { label: "Pre-Employment Career Program", href: "/electrical/courses" },
                  ]
                : [
                    { label: "Python Full Stack", href: "/software/courses" },
                    { label: "MERN Stack", href: "/software/courses" },
                    { label: "AI & Machine Learning", href: "/software/courses" },
                    { label: "Data Science", href: "/software/courses" },
                    { label: "Digital Marketing", href: "/software/courses" },
                    { label: "Java Full Stack", href: "/software/courses" },
                  ]
              ).map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-all group"
                  >
                    <svg
                      viewBox="0 0 24 24"
                      className="w-3 h-3 flex-shrink-0 transition-transform group-hover:translate-x-1"
                    >
                      <path d="M9 18l6-6-6-6" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
                    </svg>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Social & Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className={`text-base font-bold ${fontClass} text-white mb-5 flex items-center gap-2`}>
              <span
                className="w-1 h-5 rounded-full inline-block"
                style={{ background: `linear-gradient(180deg, ${accent}, ${accent2})` }}
              />
              Connect With Us
            </div>

            {/* Social icons */}
            <div className="flex flex-wrap gap-2.5 mb-7">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.label === "WhatsApp" ? `https://wa.me/${waPhone}` : s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-110 hover:-translate-y-0.5 group"
                  style={{
                    background: `${accent}12`,
                    border: `1px solid ${accent}25`,
                    color: accent,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${accent}28`;
                    (e.currentTarget as HTMLElement).style.boxShadow = `0 0 14px ${accent}40`;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = `${accent}12`;
                    (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>

            {/* Legal links */}
            <div className={`text-base font-bold ${fontClass} text-white mb-4 flex items-center gap-2`}>
              <span
                className="w-1 h-5 rounded-full inline-block"
                style={{ background: `linear-gradient(180deg, ${accent}, ${accent2})` }}
              />
              Legal
            </div>
            <ul className="flex flex-col gap-2">
              {[
                { label: "Privacy Policy", href: "#" },
                { label: "Terms & Conditions", href: "#" },
                { label: "Refund Policy", href: "#" },
                { label: "Disclaimer", href: "#" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-500 hover:text-gray-300 transition-colors flex items-center gap-1.5"
                  >
                    <span className="w-1 h-1 rounded-full bg-gray-600 inline-block" />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Divider */}
        <div
          className="h-px w-full mb-6"
          style={{
            background: `linear-gradient(90deg, transparent, ${accent}30, ${accent2}30, transparent)`,
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <div>
            © {new Date().getFullYear()} SSR Institute. All rights reserved.
          </div>

          {/* Made by SabariyaTech */}
          <a
            href="https://sabariyatech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 group"
          >
            <span className="text-gray-600 group-hover:text-gray-400 transition-colors">
              Designed & Developed by
            </span>
            <span
              className="font-bold tracking-wide transition-all group-hover:opacity-90"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                filter: `drop-shadow(0 0 6px ${accent}50)`,
              }}
            >
              SabariyaTech
            </span>
            <span
              className="w-5 h-5 rounded-md flex items-center justify-center text-xs font-bold transition-transform group-hover:scale-110"
              style={{
                background: `linear-gradient(135deg, ${accent}, ${accent2})`,
                color: isElec ? "#0A0F1E" : "#fff",
              }}
            >
              S
            </span>
          </a>

          <div className="flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: accent }} />
            <span>Vijayawada, Andhra Pradesh</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
