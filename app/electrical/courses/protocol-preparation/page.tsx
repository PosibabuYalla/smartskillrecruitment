import CourseDetail from "../../components/CourseDetail";
import type { CourseData } from "../../components/CourseDetail";

const data: CourseData = {
  theme: "electrical", slug: "protocol-preparation",
  title: "Protocol Preparation & Documentation", badge: "Foundation",
  tagline: "Learn to prepare industry-standard electrical protocols, maintenance records & commissioning documents required in power plants.",
  heroImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1600&q=80",
  duration: "3 Weeks", students: "180+", level: "All Levels", rating: 4.7,
  color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
  overview: "A focused program on preparing electrical protocols, test reports, maintenance logs and commissioning documents as per industry standards. Essential skill for every electrical engineer entering power plants, substations and O&M companies.",
  learns: [
    "Protocol preparation standards & formats",
    "Electrical test report writing & documentation",
    "Maintenance log preparation & record keeping",
    "Commissioning checklist creation & execution",
    "Safety permit-to-work (PTW) system",
    "Isolation certificate preparation",
    "Equipment history card maintenance",
    "Shutdown & startup procedure documentation",
    "Defect reporting & corrective action formats",
    "Calibration record maintenance",
    "Statutory compliance documentation",
    "Digital documentation & filing systems",
  ],
  technologies: [
    { name: "MS Word", icon: "📝" }, { name: "MS Excel", icon: "📊" }, { name: "PDF Tools", icon: "📄" },
    { name: "SAP PM Basics", icon: "💼" }, { name: "CMMS", icon: "🖥️" }, { name: "AutoCAD Basics", icon: "📐" },
    { name: "Permit System", icon: "🔒" }, { name: "ISO Standards", icon: "📋" }, { name: "IEC Standards", icon: "⚡" },
    { name: "IS Standards", icon: "🇮🇳" }, { name: "Checklist Tools", icon: "✅" }, { name: "Report Templates", icon: "📑" },
  ],
  outcomes: [
    { role: "Electrical Engineer (O&M)", salary: "₹3L – ₹7L" },
    { role: "Commissioning Engineer", salary: "₹4L – ₹9L" },
    { role: "Maintenance Engineer", salary: "₹3.5L – ₹8L" },
    { role: "Quality Control Engineer", salary: "₹3.5L – ₹8L" },
    { role: "Plant Documentation Officer", salary: "₹3L – ₹6L" },
    { role: "Electrical Supervisor", salary: "₹4L – ₹9L" },
  ],
  whyChoose: [
    { icon: "📋", title: "Industry Standard Formats", desc: "Learn the exact protocol formats used by NTPC, BHEL, L&T & private power plants." },
    { icon: "✅", title: "Compliance Ready", desc: "Understand statutory & regulatory documentation requirements for electrical installations." },
    { icon: "🏆", title: "Career Differentiator", desc: "Most engineers lack documentation skills — this makes you stand out in interviews." },
    { icon: "🔒", title: "Safety First", desc: "Master permit-to-work systems that prevent accidents and save lives." },
  ],
  projects: [
    { title: "Motor Testing Protocol", desc: "Prepare a complete testing protocol for a 3-phase induction motor including IR, PI, winding resistance & functional tests.", tech: ["MS Word", "Excel", "IS Standards"] },
    { title: "Transformer Commissioning Checklist", desc: "Create a comprehensive commissioning checklist for a 11kV/415V distribution transformer.", tech: ["Excel", "IEC Standards", "PDF Tools"] },
    { title: "Permit-to-Work Document", desc: "Prepare a complete PTW document for a high-voltage switchgear maintenance activity.", tech: ["PTW System", "Isolation Certificate", "MS Word"] },
    { title: "Maintenance Log System", desc: "Design a monthly maintenance log system for 20 motors in a simulated plant using Excel.", tech: ["MS Excel", "CMMS", "Report Templates"] },
    { title: "Shutdown Procedure Document", desc: "Write a complete planned shutdown & startup procedure for a 6.6kV motor with all safety steps.", tech: ["MS Word", "Checklist Tools", "ISO Standards"] },
  ],
  syllabus: [
    { module: "Protocol Fundamentals", topics: ["What is a protocol & why it matters", "Types of electrical protocols", "Protocol numbering & revision control", "Standard protocol formats", "Approval & sign-off procedures", "Protocol filing & retrieval"] },
    { module: "Test Report Preparation", topics: ["IR & PI test report format", "Transformer test report", "Cable test report", "Switchgear test report", "Motor test report", "Calibration certificates"] },
    { module: "Maintenance Documentation", topics: ["Equipment history cards", "Preventive maintenance schedules", "Corrective maintenance reports", "Spare parts consumption records", "Defect register maintenance", "KPI tracking sheets"] },
    { module: "Commissioning Documents", topics: ["Pre-commissioning checklist", "Commissioning procedure writing", "Punch list management", "As-built drawing updates", "Handover documentation", "Warranty & guarantee records"] },
    { module: "Permit-to-Work System", topics: ["PTW system overview", "Isolation certificate preparation", "Earthing certificate", "Hot work permit", "Confined space entry permit", "PTW cancellation & clearance"] },
    { module: "Digital Documentation", topics: ["SAP PM basics for maintenance", "CMMS software overview", "Digital filing systems", "Document control procedures", "Version control & archiving", "Audit trail maintenance"] },
  ],
  pricing: {
    original: 12000, offer: 7000, emi: 700,
    includes: [
      "3 weeks of intensive practical training",
      "5 real documentation projects",
      "SSR Institute certificate",
      "Protocol & report templates library",
      "1:1 guidance from expert trainers",
      "Industry-standard format collection",
      "Job placement assistance",
      "Alumni network access",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
