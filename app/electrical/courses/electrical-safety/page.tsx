import CourseDetail from "../../../components/CourseDetail";
import type { CourseData } from "../../../components/CourseDetail";

const data: CourseData = {
  theme: "electrical", slug: "electrical-safety",
  title: "Industrial Electrical Safety", badge: "Safety",
  tagline: "Essential safety training for B.Tech, Diploma & ITI electrical students entering thermal power plants, substations & O&M plants.",
  heroImage: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=1600&q=80",
  duration: "2 Weeks", students: "300+", level: "All Levels", rating: 4.8,
  color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
  overview: "A comprehensive electrical safety program covering IS/IEC standards, PPE selection, LOTO procedures, arc flash safety and permit-to-work systems. Mandatory knowledge for every electrical professional entering industrial environments.",
  learns: [
    "Electrical safety standards — IS 5216, IEC 60364",
    "Hazard identification & risk assessment",
    "Personal Protective Equipment (PPE) selection & usage",
    "Lockout/Tagout (LOTO) procedures",
    "Arc flash hazard awareness & protection",
    "Safe isolation procedures for HV & LV systems",
    "Permit-to-work (PTW) system operation",
    "Electrical first aid & CPR for electrical accidents",
    "Fire safety & extinguisher types for electrical fires",
    "Safe working distances for HV equipment",
    "Earthing & bonding safety requirements",
    "Incident reporting & investigation procedures",
  ],
  technologies: [
    { name: "PPE Equipment", icon: "🦺" }, { name: "LOTO Devices", icon: "🔒" }, { name: "Arc Flash PPE", icon: "⚡" },
    { name: "Safety Meters", icon: "🔢" }, { name: "Voltage Detector", icon: "🔍" }, { name: "Earthing Kit", icon: "🌍" },
    { name: "Safety Signs", icon: "⚠️" }, { name: "Fire Extinguisher", icon: "🧯" }, { name: "First Aid Kit", icon: "🏥" },
    { name: "PTW System", icon: "📋" }, { name: "Risk Assessment", icon: "📊" }, { name: "Incident Forms", icon: "📝" },
  ],
  outcomes: [
    { role: "Safety Officer (Electrical)", salary: "₹3L – ₹8L" },
    { role: "Electrical Engineer (Any Plant)", salary: "₹3L – ₹8L" },
    { role: "O&M Technician", salary: "₹2.5L – ₹6L" },
    { role: "Substation Operator", salary: "₹3L – ₹7L" },
    { role: "Power Plant Technician", salary: "₹3L – ₹7L" },
    { role: "HSE Engineer", salary: "₹4L – ₹10L" },
  ],
  whyChoose: [
    { icon: "🛡️", title: "Mandatory Knowledge", desc: "No power plant or substation will hire without basic electrical safety certification." },
    { icon: "⚡", title: "Life-Saving Skills", desc: "Learn procedures that prevent accidents and save lives in industrial environments." },
    { icon: "📋", title: "Compliance Ready", desc: "Understand all statutory safety requirements for electrical installations in India." },
    { icon: "🏆", title: "Interview Advantage", desc: "Safety knowledge is the first thing interviewers test for plant & substation roles." },
  ],
  projects: [
    { title: "Risk Assessment Report", desc: "Conduct a complete electrical risk assessment for a simulated substation maintenance activity.", tech: ["Risk Matrix", "IS Standards", "Documentation"] },
    { title: "LOTO Procedure", desc: "Develop and execute a complete LOTO procedure for isolating a 415V motor control panel.", tech: ["LOTO Devices", "Isolation Certificate", "PTW"] },
    { title: "PPE Selection Guide", desc: "Create a PPE selection guide for different electrical work categories in a power plant.", tech: ["PPE Standards", "Arc Flash Analysis", "IS 5216"] },
    { title: "Emergency Response Plan", desc: "Prepare an emergency response plan for electrical accidents in a substation environment.", tech: ["First Aid", "Fire Safety", "Incident Forms"] },
    { title: "Safety Audit Checklist", desc: "Develop and conduct a safety audit checklist for an electrical workshop & panel room.", tech: ["Audit Tools", "IS Standards", "Reporting"] },
  ],
  syllabus: [
    { module: "Electrical Hazards & Standards", topics: ["Types of electrical hazards", "Effects of electric current on body", "IS 5216 & IEC 60364 overview", "Statutory requirements in India", "Electrical accident statistics", "Employer & employee responsibilities"] },
    { module: "PPE & Protective Equipment", topics: ["PPE categories for electrical work", "Insulating gloves — classes & testing", "Arc flash suits & face shields", "Safety footwear & helmets", "Voltage-rated tools", "PPE inspection & maintenance"] },
    { module: "Lockout/Tagout (LOTO)", topics: ["LOTO purpose & legal requirements", "Energy isolation methods", "LOTO device types & usage", "Group LOTO procedures", "Verification of isolation", "LOTO record keeping"] },
    { module: "Arc Flash Safety", topics: ["Arc flash phenomenon", "Arc flash boundary calculation", "Incident energy analysis", "Arc flash PPE selection", "Arc flash warning labels", "Safe work practices near arc flash hazards"] },
    { module: "Permit-to-Work System", topics: ["PTW system overview", "Types of permits", "Permit preparation & approval", "Isolation & earthing certificates", "Permit cancellation", "PTW auditing"] },
    { module: "Emergency Response", topics: ["Electrical first aid procedures", "CPR for electrical accidents", "Electrical fire fighting", "Emergency evacuation", "Incident reporting", "Accident investigation basics"] },
  ],
  pricing: {
    original: 10000, offer: 6000, emi: 600,
    includes: [
      "2 weeks of intensive safety training",
      "5 practical safety projects",
      "SSR Institute safety certificate",
      "Safety standards reference materials",
      "1:1 guidance from safety experts",
      "PPE & LOTO hands-on practice",
      "Job placement assistance",
      "Alumni network access",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
