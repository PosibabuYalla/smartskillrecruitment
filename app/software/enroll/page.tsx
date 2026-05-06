"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { CheckCircle, ChevronRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
];

const courses = ["Full-Stack Web Development", "AI & Machine Learning", "Cloud Computing & DevOps", "Data Science & Analytics", "Cybersecurity & Ethical Hacking", "Mobile App Development"];
const batches = ["January 2025", "February 2025", "March 2025", "April 2025"];
const steps = ["Personal Info", "Course Selection", "Goals", "Review"];

export default function SoftwareEnroll() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const [data, setData] = useState({
    name: "", email: "", phone: "", city: "", qualification: "",
    course: "", batch: "", mode: "offline", goal: "job",
    experience: "beginner", linkedin: "",
  });

  const update = (k: string, v: string) => setData(p => ({...p, [k]: v}));
  const inputClass = "w-full px-4 py-3 rounded-xl text-white text-sm outline-none transition-all";
  const inputStyle = {background:'rgba(255,255,255,0.06)', border:'1px solid rgba(255,255,255,0.1)'};

  return (
    <div style={{background:'#0D0D1A', minHeight:'100vh'}}>
      <Navbar theme="software" links={navLinks}/>
      <section className="pt-32 pb-20 px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-center mb-10">
            <h1 className="text-5xl font-bold font-space gradient-text-teal mb-3">Enroll Now</h1>
            <p className="text-gray-400">Launch your tech career in 4 simple steps</p>
          </motion.div>

          {/* Steps */}
          <div className="flex items-center justify-center gap-1 mb-10 flex-wrap">
            {steps.map((s, i) => (
              <div key={i} className="flex items-center gap-1">
                <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold transition-all ${i < step ? 'step-done' : i === step ? 'bg-teal-500 text-white' : 'step-inactive'}`}>
                  {i < step ? <CheckCircle size={16}/> : i + 1}
                </div>
                <span className={`text-xs hidden sm:block ${i === step ? 'text-teal-400' : 'text-gray-500'}`}>{s}</span>
                {i < steps.length - 1 && <ChevronRight size={14} className="text-gray-600 mx-1"/>}
              </div>
            ))}
          </div>

          {done ? (
            <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}}
              className="text-center py-16 rounded-2xl" style={{background:'rgba(16,185,129,0.06)', border:'1px solid rgba(16,185,129,0.2)'}}>
              <div className="text-6xl mb-4">🚀</div>
              <h2 className="text-3xl font-bold font-space gradient-text-teal mb-3">You're Enrolled!</h2>
              <p className="text-gray-300 mb-2">Welcome, <strong className="text-teal-400">{data.name}</strong>!</p>
              <p className="text-gray-400 text-sm">Our team will reach you at <strong>{data.phone}</strong> within 24 hours.</p>
            </motion.div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div key={step} initial={{opacity:0, x:30}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-30}}
                className="p-8 rounded-2xl" style={{background:'rgba(255,255,255,0.04)', border:'1px solid rgba(16,185,129,0.15)'}}>

                {step === 0 && (
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold font-space text-teal-400 mb-2">Personal Information</h2>
                    {[
                      { k: "name", label: "Full Name", type: "text", ph: "Your full name" },
                      { k: "email", label: "Email", type: "email", ph: "your@email.com" },
                      { k: "phone", label: "Phone", type: "tel", ph: "+91 XXXXX XXXXX" },
                      { k: "city", label: "City", type: "text", ph: "Your city" },
                    ].map(f => (
                      <div key={f.k}>
                        <label className="text-sm text-gray-400 mb-1 block">{f.label}</label>
                        <input type={f.type} placeholder={f.ph} value={data[f.k as keyof typeof data]}
                          onChange={e => update(f.k, e.target.value)} className={inputClass} style={inputStyle}/>
                      </div>
                    ))}
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Qualification</label>
                      <select value={data.qualification} onChange={e => update("qualification", e.target.value)}
                        className={inputClass} style={inputStyle}>
                        <option value="">Select qualification</option>
                        <option>12th Pass</option><option>Diploma</option>
                        <option>B.E/B.Tech</option><option>BCA/MCA</option><option>Other Graduate</option>
                      </select>
                    </div>
                  </div>
                )}

                {step === 1 && (
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold font-space text-teal-400 mb-2">Course Selection</h2>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Select Course</label>
                      <select value={data.course} onChange={e => update("course", e.target.value)}
                        className={inputClass} style={inputStyle}>
                        <option value="">Choose a course</option>
                        {courses.map(c => <option key={c}>{c}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">Preferred Batch</label>
                      <select value={data.batch} onChange={e => update("batch", e.target.value)}
                        className={inputClass} style={inputStyle}>
                        <option value="">Select batch</option>
                        {batches.map(b => <option key={b}>{b}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Training Mode</label>
                      <div className="flex gap-3">
                        {["offline", "online", "hybrid"].map(m => (
                          <button key={m} onClick={() => update("mode", m)}
                            className="flex-1 py-2.5 rounded-xl text-sm font-semibold capitalize transition-all"
                            style={data.mode === m ? {background:'rgba(16,185,129,0.2)', border:'1px solid #10B981', color:'#10B981'} : {background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#9CA3AF'}}>
                            {m}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Programming Experience</label>
                      <div className="flex gap-3">
                        {["beginner", "intermediate", "advanced"].map(e => (
                          <button key={e} onClick={() => update("experience", e)}
                            className="flex-1 py-2.5 rounded-xl text-xs font-semibold capitalize transition-all"
                            style={data.experience === e ? {background:'rgba(16,185,129,0.2)', border:'1px solid #10B981', color:'#10B981'} : {background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#9CA3AF'}}>
                            {e}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold font-space text-teal-400 mb-2">Your Goals</h2>
                    <div>
                      <label className="text-sm text-gray-400 mb-2 block">Primary Goal</label>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { v: "job", label: "🎯 Get a Job" },
                          { v: "freelance", label: "💼 Freelancing" },
                          { v: "startup", label: "🚀 Build Startup" },
                          { v: "upskill", label: "📈 Upskill" },
                        ].map(g => (
                          <button key={g.v} onClick={() => update("goal", g.v)}
                            className="py-3 rounded-xl text-sm font-semibold transition-all"
                            style={data.goal === g.v ? {background:'rgba(16,185,129,0.2)', border:'1px solid #10B981', color:'#10B981'} : {background:'rgba(255,255,255,0.05)', border:'1px solid rgba(255,255,255,0.1)', color:'#9CA3AF'}}>
                            {g.label}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="text-sm text-gray-400 mb-1 block">LinkedIn Profile (optional)</label>
                      <input type="url" placeholder="https://linkedin.com/in/yourprofile"
                        value={data.linkedin} onChange={e => update("linkedin", e.target.value)}
                        className={inputClass} style={inputStyle}/>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div>
                    <h2 className="text-2xl font-bold font-space text-teal-400 mb-6">Review Your Details</h2>
                    <div className="flex flex-col gap-3">
                      {[
                        { label: "Name", value: data.name },
                        { label: "Email", value: data.email },
                        { label: "Phone", value: data.phone },
                        { label: "City", value: data.city },
                        { label: "Qualification", value: data.qualification },
                        { label: "Course", value: data.course },
                        { label: "Batch", value: data.batch },
                        { label: "Mode", value: data.mode },
                        { label: "Experience", value: data.experience },
                        { label: "Goal", value: data.goal },
                      ].map(item => (
                        <div key={item.label} className="flex justify-between py-2 border-b border-white/5">
                          <span className="text-gray-400 text-sm">{item.label}</span>
                          <span className="text-white text-sm font-medium">{item.value || "—"}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex gap-3 mt-8">
                  {step > 0 && (
                    <button onClick={() => setStep(s => s - 1)}
                      className="flex-1 py-3 rounded-xl font-semibold text-gray-300 transition-all hover:bg-white/5"
                      style={{border:'1px solid rgba(255,255,255,0.1)'}}>
                      Back
                    </button>
                  )}
                  <button onClick={() => step < 3 ? setStep(s => s + 1) : setDone(true)}
                    className="flex-1 py-3 rounded-xl font-bold text-white transition-transform hover:scale-105"
                    style={{background:'linear-gradient(135deg, #10B981, #7C3AED)'}}>
                    {step < 3 ? "Continue" : "Submit Enrollment"}
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          )}
        </div>
      </section>
      <WhatsAppButton/>
      <BackToTop/>
    </div>
  );
}
