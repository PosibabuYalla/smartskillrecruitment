"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
];

export default function SoftwareContact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sent, setSent] = useState(false);

  return (
    <div style={{background:'#0D0D1A', minHeight:'100vh'}}>
      <Navbar theme="software" links={navLinks}/>
      <section className="pt-32 pb-16 px-4 text-center">
        <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-5xl font-bold font-space gradient-text-teal mb-4">
          Get In Touch
        </motion.h1>
        <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-gray-400">
          Ready to start your tech journey? We're here to help.
        </motion.p>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
          <motion.div initial={{opacity:0, x:-30}} whileInView={{opacity:1, x:0}} viewport={{once:true}} className="flex flex-col gap-5">
            {[
              { icon: <Phone size={22}/>, title: "Phone", lines: ["+91 88888 88888", "+91 77777 77777"], color: "#10B981" },
              { icon: <Mail size={22}/>, title: "Email", lines: ["software@ssrinstitute.in", "careers@ssrinstitute.in"], color: "#7C3AED" },
              { icon: <MapPin size={22}/>, title: "Address", lines: ["3rd Floor, Tech Hub", "Madhapur, Hyderabad 500081"], color: "#06B6D4" },
              { icon: <Clock size={22}/>, title: "Working Hours", lines: ["Mon–Sat: 9:00 AM – 8:00 PM", "Sunday: 10:00 AM – 3:00 PM"], color: "#10B981" },
            ].map((item, i) => (
              <div key={i} className="flex gap-4 p-5 rounded-2xl"
                style={{background:`${item.color}08`, border:`1px solid ${item.color}20`}}>
                <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{background:`${item.color}20`, color:item.color}}>
                  {item.icon}
                </div>
                <div>
                  <div className="font-bold font-space mb-1" style={{color:item.color}}>{item.title}</div>
                  {item.lines.map((l, j) => <div key={j} className="text-gray-300 text-sm">{l}</div>)}
                </div>
              </div>
            ))}
          </motion.div>

          <motion.div initial={{opacity:0, x:30}} whileInView={{opacity:1, x:0}} viewport={{once:true}}
            className="p-8 rounded-2xl" style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(16,185,129,0.15)'}}>
            {sent ? (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-2xl font-bold font-space text-teal-400 mb-2">Message Sent!</h3>
                <p className="text-gray-400">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} className="flex flex-col gap-4">
                <h3 className="text-2xl font-bold font-space text-white mb-2">Send a Message</h3>
                {[
                  { k: "name", label: "Full Name", type: "text", ph: "Your full name" },
                  { k: "email", label: "Email", type: "email", ph: "your@email.com" },
                  { k: "phone", label: "Phone", type: "tel", ph: "+91 XXXXX XXXXX" },
                ].map(f => (
                  <div key={f.k}>
                    <label className="text-sm text-gray-400 mb-1 block">{f.label}</label>
                    <input type={f.type} placeholder={f.ph} required
                      value={form[f.k as keyof typeof form]}
                      onChange={e => setForm({...form, [f.k]: e.target.value})}
                      className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all focus:border-teal-400"
                      style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}/>
                  </div>
                ))}
                <div>
                  <label className="text-sm text-gray-400 mb-1 block">Message</label>
                  <textarea rows={4} placeholder="How can we help you?" required
                    value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                    className="w-full px-4 py-3 rounded-xl text-white text-sm outline-none resize-none"
                    style={{background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'}}/>
                </div>
                <button type="submit"
                  className="flex items-center justify-center gap-2 py-3 rounded-xl font-bold text-white transition-transform hover:scale-105"
                  style={{background:'linear-gradient(135deg, #10B981, #7C3AED)'}}>
                  <Send size={16}/> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
      <WhatsAppButton/>
      <BackToTop/>
    </div>
  );
}
