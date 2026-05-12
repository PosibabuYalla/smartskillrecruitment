import CourseDetail from "../../../components/CourseDetail";
import type { CourseData } from "../../../components/CourseDetail";

const data: CourseData = {
  theme: "electrical", slug: "ht-lt-motors",
  title: "HT & LT Motors Training", badge: "Core Program",
  tagline: "Master High Tension & Low Tension motors — IR value, PI testing, motor checker usage & maintenance for power plant careers.",
  heroImage: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=1600&q=80",
  duration: "6 Weeks", students: "200+", level: "Intermediate", rating: 4.9,
  color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
  overview: "Comprehensive hands-on training on HT and LT motors used in thermal power plants, substations and industrial O&M plants. Learn IR value testing, PI value, inductance measurement, direction of rotation and motor checker usage with real equipment.",
  learns: [
    "HT & LT motor types, ratings and specifications",
    "Insulation Resistance (IR) value testing procedures",
    "Polarization Index (PI) value measurement & interpretation",
    "Inductance value testing and analysis",
    "Direction of rotation of motor — testing & correction",
    "How to use Motor Checker instrument correctly",
    "Motor winding resistance measurement",
    "Bearing inspection & lubrication procedures",
    "Motor nameplate reading & data interpretation",
    "Star-delta starter connections & troubleshooting",
    "Motor protection relay settings & testing",
    "Preventive maintenance schedules & logs",
  ],
  technologies: [
    { name: "Motor Checker", icon: "🔌" }, { name: "Megger", icon: "⚡" }, { name: "Multimeter", icon: "🔢" },
    { name: "Tachometer", icon: "🔄" }, { name: "Clamp Meter", icon: "📏" }, { name: "IR Tester", icon: "🧪" },
    { name: "Thermal Gun", icon: "🌡️" }, { name: "Vibration Meter", icon: "📳" }, { name: "LCR Meter", icon: "🔬" },
    { name: "Phase Sequence", icon: "🔃" }, { name: "Power Analyzer", icon: "📊" }, { name: "Oscilloscope", icon: "📈" },
  ],
  outcomes: [
    { role: "Electrical Technician", salary: "₹2.5L – ₹5L" },
    { role: "Motor Maintenance Engineer", salary: "₹3L – ₹7L" },
    { role: "O&M Engineer", salary: "₹3.5L – ₹8L" },
    { role: "Power Plant Technician", salary: "₹3L – ₹7L" },
    { role: "Substation Technician", salary: "₹3L – ₹6.5L" },
    { role: "Electrical Supervisor", salary: "₹4L – ₹9L" },
  ],
  whyChoose: [
    { icon: "🏭", title: "Real Equipment Training", desc: "Train on actual HT/LT motors, not just theory — same equipment used in power plants." },
    { icon: "📋", title: "Protocol Based", desc: "Learn industry-standard testing protocols accepted by NTPC, BHEL & private plants." },
    { icon: "🎯", title: "Job Placement", desc: "Direct placement assistance in thermal power plants & O&M companies across India." },
    { icon: "👨‍🏫", title: "Expert Trainers", desc: "Trainers with 15+ years of hands-on experience in power plant operations." },
  ],
  projects: [
    { title: "Motor Testing Report", desc: "Complete IR, PI & winding resistance testing on a 3-phase induction motor with full documentation.", tech: ["Megger", "LCR Meter", "Multimeter"] },
    { title: "Motor Fault Diagnosis", desc: "Identify and diagnose common motor faults — winding failure, bearing damage & insulation breakdown.", tech: ["Motor Checker", "Thermal Gun", "Vibration Meter"] },
    { title: "Star-Delta Starter Commissioning", desc: "Wire, test and commission a star-delta starter for a 15kW motor with protection relay settings.", tech: ["Control Panel", "Relay Tester", "Multimeter"] },
    { title: "Preventive Maintenance Schedule", desc: "Create a complete PM schedule for 10 motors in a simulated plant environment with log sheets.", tech: ["Maintenance Software", "Inspection Tools"] },
    { title: "Motor Efficiency Analysis", desc: "Measure and calculate motor efficiency, power factor & energy consumption with improvement recommendations.", tech: ["Power Analyzer", "Clamp Meter", "Tachometer"] },
  ],
  syllabus: [
    { module: "Motor Fundamentals", topics: ["Types of HT & LT motors", "Motor nameplate & ratings", "3-phase induction motor working principle", "Motor efficiency & power factor", "Motor selection criteria", "IS standards for motors"] },
    { module: "IR & PI Value Testing", topics: ["Insulation resistance concept", "Megger operation & safety", "IR value testing procedure", "PI value calculation & interpretation", "Acceptable IR/PI values for HT/LT", "Test report preparation"] },
    { module: "Inductance & Winding Tests", topics: ["Inductance value measurement", "LCR meter operation", "Winding resistance testing", "Phase balance checking", "Turn-to-turn fault detection", "Winding insulation class"] },
    { module: "Motor Checker & Direction", topics: ["Motor checker instrument overview", "Step-by-step motor checker usage", "Direction of rotation testing", "Phase sequence verification", "Reversing motor direction safely", "Documentation of results"] },
    { module: "Motor Protection & Control", topics: ["Overload relay settings", "Thermistor & PT100 protection", "Star-delta starter wiring", "DOL starter connections", "VFD basics & parameter setting", "Control circuit troubleshooting"] },
    { module: "Maintenance & Documentation", topics: ["Preventive maintenance schedules", "Bearing inspection & replacement", "Lubrication standards", "Maintenance log preparation", "Failure analysis & reporting", "Spare parts management"] },
  ],
  pricing: {
    original: 20000, offer: 12000, emi: 1200,
    includes: [
      "6 weeks of hands-on practical training",
      "5 real equipment-based projects",
      "SSR Institute certificate",
      "Training materials & test reports",
      "1:1 guidance from expert trainers",
      "Protocol preparation templates",
      "Job placement assistance",
      "Alumni network access",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
