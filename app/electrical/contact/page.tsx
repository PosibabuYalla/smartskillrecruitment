"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from "lucide-react";
import Footer from "../../components/Footer";

const navLinks = [
  { label: "Home", href: "/electrical" },
  { label: "Courses", href: "/electrical/courses" },
  { label: "About", href: "/electrical/about" },
  { label: "Blog", href: "/electrical/blog" },
  { label: "Contact", href: "/electrical/contact" },
];

export default function ElectricalContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div style={{background:'#0A0F1E', minHeight:'100vh'}}>
      <Navbar theme="electrical" links={navLinks}/>
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-5xl font-bold font-rajdhani gradient-text-amber mb-4">
          Get In Touch
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-gray-400">
          We're here to help you start your electrical career journey
        </motion.p>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Info */}
          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="flex flex-col gap-5">
            {[
              { icon: <Phone size={22}/>, title: "Phone", lines: ["+91 93926 06164"] },
              { icon: <Mail size={22}/>, title: "Email", lines: ["ssrvijayawada@gmail.com"] },
              { icon: <MapPin size={22}/>, title: "Address", lines: ["Flat No.: 15-136-1, Sri Nagar Colony,", "Prabhu Nagar, Poranki, Vijayawada,", "NTR Dist., Andhra Pradesh - 521137"] },
              { icon: <Clock size={22}/>, title: "Working Hours", lines: ["Mon–Sat: 9:00 AM – 7:00 PM", "Sunday: By Appointment"] },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl"
                style={{background:'rgba(245,158,11,0.06)', border:'1px solid rgba(245,158,11,0.15)'}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 text-amber-400"
                  style={{background:'rgba(245,158,11,0.15)'}}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold font-rajdhani text-amber-400 mb-1">{item.title}</div>
                  {item.lines.map((l, j) => <div key={j} className="text-gray-300 text-sm">{l}</div>)}
                </div>
              </div>
            ))}
          </motion.div>

          {/* Form */}
          <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
            className="p-8 rounded-2xl" style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(245,158,11,0.15)'}}>
            {sent ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{background:'rgba(245,158,11,0.15)'}}>
                  <CheckCircle size={32} className="text-amber-400"/>
                </div>
                <h3 className="text-2xl font-bold font-rajdhani text-amber-400 mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold font-rajdhani text-white mb-2">Send a Message</h3>
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "Your full name" },
                  { key: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                  { key: "phone", label: "Phone", type: "tel", placeholder: "+91 XXXXX XXXXX" },
                ].map(f => (
                  <div key={f.key}>
                    <label className="text-sm text-gray-400 mb-1 block">{f.label}</label>
                    <input type={f.type} placeholder={f.placeholder} required
                      value={form[f.key as keyof typeof form]}
                      onChange={e => setForm({...form, [f.key]: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all focus:border-amber-400"
                      style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}/>
                  </div>
                ))}
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" required
                    value={form.message}
                    onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none transition-all focus:border-amber-400"
                    style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}/>
                </div>
                <button type="submit"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-black transition-transform hover:scale-105"
                  style={{background:'linear-gradient(135deg, #F59E0B, #D97706)'}}>
                  <Send size={16}/> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      <Footer theme="electrical"/>
      <WhatsAppButton phone="919392606164"/>
      <BackToTop/>
    </div>
  );
}
