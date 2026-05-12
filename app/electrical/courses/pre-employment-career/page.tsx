import CourseDetail from "../../components/CourseDetail";
import type { CourseData } from "../../components/CourseDetail";

const data: CourseData = {
  theme: "electrical", slug: "pre-employment-career",
  title: "Pre-Employment Career Program", badge: "Career",
  tagline: "Career guidelines & awareness training for B.Tech, Diploma & ITI Electrical students — industrial sector overview & job placement assistance.",
  heroImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
  duration: "2 Weeks", students: "500+", level: "Beginner", rating: 4.8,
  color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #D97706)",
  overview: "A comprehensive career awareness and pre-employment training program designed specifically for B.Tech, Diploma and ITI Electrical students. Covers industrial sector overview, job roles, resume building, interview preparation and direct placement assistance in power plants across India.",
  learns: [
    "Overview of India's electrical power sector",
    "Job roles in thermal power plants & substations",
    "Career paths for B.Tech, Diploma & ITI students",
    "Resume writing for electrical engineering jobs",
    "LinkedIn profile optimization for job search",
    "Technical interview preparation — electrical basics",
    "HR interview skills & body language",
    "Placement process in power plants & O&M companies",
    "Salary negotiation & offer letter evaluation",
    "Industrial visit & plant exposure",
    "Professional communication & email etiquette",
    "Career growth roadmap in the power sector",
  ],
  technologies: [
    { name: "MS Word", icon: "📝" }, { name: "LinkedIn", icon: "💼" }, { name: "Naukri.com", icon: "🔍" },
    { name: "Indeed", icon: "🌐" }, { name: "MS Excel", icon: "📊" }, { name: "PowerPoint", icon: "📑" },
    { name: "Email Tools", icon: "📧" }, { name: "Video Interview", icon: "🎥" }, { name: "Job Portals", icon: "💻" },
    { name: "Resume Builder", icon: "📋" }, { name: "Interview Prep", icon: "🎯" }, { name: "Aptitude Tests", icon: "🧠" },
  ],
  outcomes: [
    { role: "Electrical Trainee Engineer", salary: "₹2L – ₹4L" },
    { role: "O&M Plant Technician", salary: "₹2.5L – ₹5L" },
    { role: "Substation Operator", salary: "₹2.5L – ₹5L" },
    { role: "Power Plant Apprentice", salary: "₹2L – ₹4L" },
    { role: "Electrical Maintenance Trainee", salary: "₹2.5L – ₹5L" },
    { role: "Graduate Apprentice (BHEL/NTPC)", salary: "₹3L – ₹5L" },
  ],
  whyChoose: [
    { icon: "🎯", title: "Direct Placement", desc: "SSR Institute has placed 5000+ students in power plants & industries across India." },
    { icon: "🏭", title: "Industry Connections", desc: "Direct tie-ups with thermal power plants, O&M companies & substations." },
    { icon: "📋", title: "Complete Guidance", desc: "From resume to offer letter — we guide you through every step of the process." },
    { icon: "🚀", title: "Fast Track Career", desc: "Get your first job in the power sector within 30-60 days of completing the program." },
  ],
  projects: [
    { title: "Professional Resume", desc: "Create a job-winning resume tailored for electrical engineering roles in power plants & substations.", tech: ["MS Word", "Resume Templates", "LinkedIn"] },
    { title: "LinkedIn Profile", desc: "Build a complete, optimized LinkedIn profile that attracts recruiters from power sector companies.", tech: ["LinkedIn", "Professional Photo", "Keywords"] },
    { title: "Mock Technical Interview", desc: "Attend 3 rounds of mock technical interviews covering electrical fundamentals & practical knowledge.", tech: ["Interview Prep", "Video Interview", "Feedback"] },
    { title: "Job Application Campaign", desc: "Apply to 20+ relevant job openings on Naukri, LinkedIn & company portals with tracking.", tech: ["Job Portals", "Email Tools", "Application Tracker"] },
    { title: "Career Roadmap Presentation", desc: "Present a 5-year career growth plan in the electrical power sector to a panel of industry experts.", tech: ["PowerPoint", "Research", "Presentation Skills"] },
  ],
  syllabus: [
    { module: "Power Sector Overview", topics: ["India's power generation landscape", "Types of power plants", "Thermal, hydro, nuclear & renewable", "Power transmission & distribution", "Key companies — NTPC, BHEL, L&T, Adani", "Job market & demand analysis"] },
    { module: "Career Paths & Roles", topics: ["B.Tech vs Diploma vs ITI career paths", "Job roles in power plants", "O&M vs EPC vs manufacturing", "Government vs private sector", "Salary ranges & growth", "Specialization options"] },
    { module: "Resume & Profile Building", topics: ["Resume structure for freshers", "Highlighting projects & internships", "Technical skills section", "LinkedIn profile optimization", "Portfolio creation", "Cover letter writing"] },
    { module: "Technical Interview Prep", topics: ["Electrical fundamentals revision", "Common technical interview questions", "Practical knowledge questions", "Problem-solving approach", "Aptitude test preparation", "Group discussion skills"] },
    { module: "HR Interview & Soft Skills", topics: ["Tell me about yourself", "Strengths & weaknesses", "Situational questions", "Body language & confidence", "Professional communication", "Salary negotiation"] },
    { module: "Placement Process", topics: ["How to find power sector jobs", "Job portal strategies", "Campus placement preparation", "Walk-in interview tips", "Offer letter evaluation", "Joining formalities"] },
  ],
  pricing: {
    original: 8000, offer: 4500, emi: 500,
    includes: [
      "2 weeks of career-focused training",
      "5 career development projects",
      "SSR Institute certificate",
      "Resume & LinkedIn review",
      "3 mock interview sessions",
      "Job portal profile setup",
      "Direct placement assistance",
      "Alumni network & referrals",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
