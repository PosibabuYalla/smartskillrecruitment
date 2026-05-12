import CourseDetail, {
  Bolt, Gauge, Wrench, Settings, Shield, Plug, Radio,
  ClipboardList, Factory, HardHat, Award, Target, AlertTriangle,
  type CourseData,
} from "../../../components/CourseDetail";

const data: CourseData = {
  theme: "electrical", slug: "lepb-motor-control",
  title: "LEPB & Motor Control Systems", badge: "Advanced",
  tagline: "Master Local Emergency Push Button operations, tripping & closing sequences, and motor control panel wiring for industrial plants.",
  heroImage: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&q=80",
  duration: "4 Weeks", students: "150+", level: "Intermediate", rating: 4.8,
  color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
  overview: "Specialized training on LEPB (Local Emergency Push Button) systems, motor control panels, tripping & closing sequences, interlock logic and emergency shutdown systems used in thermal power plants and industrial facilities.",
  learns: [
    "LEPB system architecture & components",
    "LEPB tripping procedure — step-by-step",
    "LEPB closing procedure & safety checks",
    "Motor control panel wiring & layout",
    "Emergency shutdown system design",
    "Interlock logic & safety circuits",
    "Control circuit troubleshooting techniques",
    "Field testing & commissioning procedures",
    "MCC (Motor Control Centre) panel operations",
    "Contactor & relay wiring for motor control",
    "PLC-based motor control basics",
    "Safety interlocks & permit-to-work systems",
  ],
  technologies: [
    { name: "LEPB Panel", icon: AlertTriangle }, { name: "MCC Panel", icon: Bolt }, { name: "Contactors", icon: Plug },
    { name: "Relays", icon: Wrench }, { name: "PLC Basics", icon: Settings }, { name: "Multimeter", icon: Gauge },
    { name: "Control Wiring", icon: Radio }, { name: "Interlock Logic", icon: Shield }, { name: "HMI", icon: Settings },
    { name: "Timers", icon: Gauge }, { name: "Limit Switches", icon: Wrench }, { name: "Proximity Sensors", icon: Radio },
  ],
  outcomes: [
    { role: "Control Panel Technician", salary: "₹2.5L – ₹6L" },
    { role: "Electrical Maintenance Engineer", salary: "₹3L – ₹7L" },
    { role: "O&M Plant Technician", salary: "₹3L – ₹7.5L" },
    { role: "Commissioning Engineer", salary: "₹4L – ₹9L" },
    { role: "Power Plant Operator", salary: "₹3L – ₹7L" },
    { role: "Electrical Supervisor", salary: "₹4L – ₹10L" },
  ],
  whyChoose: [
    { icon: Factory, title: "Plant-Ready Skills", desc: "Learn exactly what power plant operators do on day one of their job." },
    { icon: AlertTriangle, title: "Emergency Systems", desc: "Master critical safety systems that protect lives and equipment in plants." },
    { icon: ClipboardList, title: "Protocol Training", desc: "Learn to follow and prepare standard operating procedures for LEPB operations." },
    { icon: Target, title: "Direct Placement", desc: "Graduates placed in thermal power plants, O&M companies across India." },
  ],
  projects: [
    { title: "LEPB Panel Wiring", desc: "Wire a complete LEPB panel from scratch including emergency stop, reset & status indication circuits.", tech: ["Control Wiring", "Contactors", "Relays", "Indicators"] },
    { title: "Motor Control Circuit", desc: "Design and wire a forward-reverse motor control circuit with interlocking and overload protection.", tech: ["Contactors", "Timers", "Overload Relay", "Push Buttons"] },
    { title: "Emergency Shutdown Simulation", desc: "Simulate an emergency shutdown sequence for a pump motor system with LEPB activation & reset.", tech: ["LEPB Panel", "MCC", "PLC Basics"] },
    { title: "Interlock Logic Design", desc: "Design interlock logic for a 3-motor sequential start system with safety conditions.", tech: ["Relay Logic", "PLC", "Control Wiring"] },
    { title: "Commissioning Checklist", desc: "Prepare and execute a complete commissioning checklist for a motor control panel installation.", tech: ["Testing Instruments", "Documentation"] },
  ],
  syllabus: [
    { module: "LEPB System Fundamentals", topics: ["LEPB purpose & applications", "LEPB panel components", "Emergency stop standards (IEC 60947)", "LEPB location & mounting requirements", "Colour coding & labelling standards", "LEPB vs remote stop differences"] },
    { module: "Tripping & Closing Procedures", topics: ["Pre-trip safety checks", "LEPB tripping sequence", "Isolation & lockout after trip", "Pre-closing safety verification", "LEPB closing sequence", "Post-closing checks & logging"] },
    { module: "Motor Control Panel Wiring", topics: ["MCC panel layout & components", "Power circuit wiring", "Control circuit wiring", "Contactor & relay connections", "Indicator lamp circuits", "Terminal block wiring standards"] },
    { module: "Interlock & Safety Circuits", topics: ["Interlock logic design", "Electrical & mechanical interlocks", "Safety relay applications", "Emergency stop categories", "Safety circuit testing", "Fault finding in interlock circuits"] },
    { module: "Field Testing & Commissioning", topics: ["Pre-commissioning checks", "Insulation resistance testing", "Control circuit continuity testing", "Functional testing procedures", "Load testing & monitoring", "Commissioning report preparation"] },
    { module: "Troubleshooting & Maintenance", topics: ["Common control circuit faults", "Systematic fault finding approach", "Contactor & relay maintenance", "Contact resistance measurement", "Preventive maintenance schedule", "Maintenance documentation"] },
  ],
  pricing: {
    original: 18000, offer: 10000, emi: 1000,
    includes: [
      "4 weeks of hands-on practical training",
      "5 real panel wiring projects",
      "SSR Institute certificate",
      "Training materials & wiring diagrams",
      "1:1 guidance from expert trainers",
      "Standard operating procedure templates",
      "Job placement assistance",
      "Alumni network access",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
