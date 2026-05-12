import CourseDetail from "../../../components/CourseDetail";
import type { CourseData } from "../../../components/CourseDetail";

const data: CourseData = {
  theme: "electrical", slug: "power-transformer",
  title: "Power Transformer & Auxiliaries", badge: "Specialist",
  tagline: "In-depth training on power transformer maintenance, testing, oil analysis & auxiliary systems for substations and power plants.",
  heroImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80",
  duration: "5 Weeks", students: "120+", level: "Advanced", rating: 4.9,
  color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
  overview: "Comprehensive training on power transformer types, maintenance procedures, oil testing, protection systems and auxiliary equipment. Covers everything from nameplate reading to Buchholz relay testing — essential for substation and power plant engineers.",
  learns: [
    "Power transformer types, ratings & nameplate reading",
    "Transformer oil testing — BDV, moisture & acidity",
    "Buchholz relay operation, testing & maintenance",
    "On-load tap changer (OLTC) operation & maintenance",
    "Transformer protection relay settings",
    "Cooling system — ONAN, ONAF, OFAF maintenance",
    "Transformer winding resistance measurement",
    "Turns ratio test (TTR) procedure",
    "Insulation resistance & PI value testing",
    "Transformer auxiliary systems — conservator, breather",
    "Transformer oil filtration & regeneration",
    "Transformer commissioning & shutdown procedures",
  ],
  technologies: [
    { name: "TTR Meter", icon: "🔬" }, { name: "BDV Tester", icon: "🧪" }, { name: "Megger", icon: "⚡" },
    { name: "Winding Tester", icon: "🔌" }, { name: "Oil Tester", icon: "💧" }, { name: "Thermal Camera", icon: "🌡️" },
    { name: "Buchholz Relay", icon: "🔴" }, { name: "OLTC", icon: "⚙️" }, { name: "Protection Relay", icon: "🛡️" },
    { name: "Power Analyzer", icon: "📊" }, { name: "Multimeter", icon: "🔢" }, { name: "Gas Analyzer", icon: "🔍" },
  ],
  outcomes: [
    { role: "Substation Engineer", salary: "₹3.5L – ₹8L" },
    { role: "Transformer Maintenance Engineer", salary: "₹4L – ₹9L" },
    { role: "Power Plant Engineer", salary: "₹4L – ₹10L" },
    { role: "O&M Engineer", salary: "₹3.5L – ₹8.5L" },
    { role: "Electrical Testing Engineer", salary: "₹4L – ₹9L" },
    { role: "Commissioning Engineer", salary: "₹5L – ₹12L" },
  ],
  whyChoose: [
    { icon: "⚡", title: "Real Transformer Training", desc: "Train on actual power transformers — not just theory or simulations." },
    { icon: "🔬", title: "Advanced Testing Skills", desc: "Master TTR, BDV, winding resistance & PI tests that employers demand." },
    { icon: "🏭", title: "Substation Ready", desc: "Directly applicable skills for substation & power plant maintenance roles." },
    { icon: "🎯", title: "High Salary Potential", desc: "Transformer specialists command premium salaries in the power sector." },
  ],
  projects: [
    { title: "Transformer Oil Testing Report", desc: "Perform BDV, moisture content & acidity tests on transformer oil and prepare a complete test report.", tech: ["BDV Tester", "Oil Tester", "Gas Analyzer"] },
    { title: "Transformer Electrical Tests", desc: "Conduct TTR, winding resistance, IR & PI tests on a distribution transformer with full documentation.", tech: ["TTR Meter", "Megger", "Winding Tester"] },
    { title: "Buchholz Relay Testing", desc: "Test and calibrate a Buchholz relay — alarm & trip functions with simulation of gas accumulation.", tech: ["Buchholz Relay", "Relay Tester", "Multimeter"] },
    { title: "OLTC Maintenance", desc: "Perform a complete OLTC inspection, contact resistance measurement & oil sampling procedure.", tech: ["OLTC", "Contact Resistance Meter", "Oil Tester"] },
    { title: "Transformer Commissioning", desc: "Execute a complete pre-commissioning & commissioning procedure for a 11kV/415V transformer.", tech: ["All Test Instruments", "Protocol Templates"] },
  ],
  syllabus: [
    { module: "Transformer Fundamentals", topics: ["Transformer types & construction", "Nameplate reading & ratings", "Vector groups & connections", "Cooling methods (ONAN/ONAF/OFAF)", "Transformer losses & efficiency", "IS/IEC standards for transformers"] },
    { module: "Transformer Oil Testing", topics: ["Transformer oil properties", "BDV (Breakdown Voltage) test", "Moisture content measurement", "Acidity & interfacial tension test", "Dissolved gas analysis (DGA)", "Oil filtration & regeneration"] },
    { module: "Electrical Testing", topics: ["Turns ratio test (TTR)", "Winding resistance measurement", "Insulation resistance & PI test", "Capacitance & tan delta test", "Short circuit impedance test", "No-load & load loss measurement"] },
    { module: "Protection Systems", topics: ["Buchholz relay — operation & testing", "Differential protection relay", "Over-current & earth fault relay", "Temperature protection (WTI/OTI)", "Pressure relief device", "Protection relay settings"] },
    { module: "Auxiliary Systems", topics: ["Conservator & breather maintenance", "Radiator & cooling fan maintenance", "OLTC operation & maintenance", "Marshalling box inspection", "Bushing inspection & testing", "Earthing system maintenance"] },
    { module: "Commissioning & Maintenance", topics: ["Pre-commissioning checks", "Energization procedure", "Post-commissioning monitoring", "Planned maintenance schedule", "Transformer failure analysis", "Maintenance documentation"] },
  ],
  pricing: {
    original: 22000, offer: 13000, emi: 1300,
    includes: [
      "5 weeks of hands-on practical training",
      "5 real transformer testing projects",
      "SSR Institute certificate",
      "Training materials & test report templates",
      "1:1 guidance from expert trainers",
      "Testing instrument operation guides",
      "Job placement assistance",
      "Alumni network access",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
