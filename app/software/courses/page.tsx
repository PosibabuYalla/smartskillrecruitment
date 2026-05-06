"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Navbar from "../../components/Navbar";
import { WhatsAppButton, BackToTop } from "../../components/FloatingButtons";
import { Code2, Brain, Cloud, Database, Globe, Smartphone, CheckCircle, ArrowRight, Clock, Users } from "lucide-react";

const navLinks = [
  { label: "Home", href: "/software" },
  { label: "Courses", href: "/software/courses" },
  { label: "About", href: "/software/about" },
  { label: "Blog", href: "/software/blog" },
  { label: "Contact", href: "/software/contact" },
];

const courses = [
  {
    icon: <Code2 size={32}/>, title: "Full-Stack Web Development",
    duration: "6 Months", students: "200+", color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
    desc: "Master the complete web development stack from frontend to backend with modern frameworks.",
    topics: ["HTML5, CSS3, JavaScript ES6+", "React.js & Next.js", "Node.js & Express", "MongoDB & PostgreSQL", "REST APIs & GraphQL", "Deployment & DevOps basics"],
    skills: ["React", "Node.js", "MongoDB", "TypeScript", "Docker"],
    outcomes: ["Full-Stack Developer", "Frontend Engineer", "Backend Developer"],
  },
  {
    icon: <Brain size={32}/>, title: "AI & Machine Learning",
    duration: "5 Months", students: "150+", color: "#7C3AED",
    gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
    desc: "Deep dive into artificial intelligence, machine learning, and deep learning with real projects.",
    topics: ["Python for Data Science", "NumPy, Pandas, Matplotlib", "Scikit-learn & ML algorithms", "Deep Learning with TensorFlow", "NLP & Computer Vision", "MLOps & model deployment"],
    skills: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    outcomes: ["ML Engineer", "Data Scientist", "AI Researcher"],
  },
  {
    icon: <Cloud size={32}/>, title: "Cloud Computing & DevOps",
    duration: "4 Months", students: "120+", color: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #3B82F6)",
    desc: "Master cloud platforms and DevOps practices for modern software delivery.",
    topics: ["AWS core services (EC2, S3, RDS)", "Azure & GCP fundamentals", "Docker & Kubernetes", "CI/CD with Jenkins & GitHub Actions", "Infrastructure as Code (Terraform)", "Monitoring & logging"],
    skills: ["AWS", "Docker", "Kubernetes", "Terraform", "Jenkins"],
    outcomes: ["Cloud Engineer", "DevOps Engineer", "SRE"],
  },
  {
    icon: <Database size={32}/>, title: "Data Science & Analytics",
    duration: "4 Months", students: "130+", color: "#10B981",
    gradient: "linear-gradient(135deg, #10B981, #84CC16)",
    desc: "Transform raw data into actionable insights using modern analytics tools.",
    topics: ["Python & R programming", "SQL & NoSQL databases", "Data visualization (Tableau, Power BI)", "Statistical analysis", "Predictive modeling", "Business intelligence"],
    skills: ["Python", "SQL", "Tableau", "Power BI", "R"],
    outcomes: ["Data Analyst", "Business Analyst", "BI Developer"],
  },
  {
    icon: <Globe size={32}/>, title: "Cybersecurity & Ethical Hacking",
    duration: "3 Months", students: "90+", color: "#EF4444",
    gradient: "linear-gradient(135deg, #EF4444, #F97316)",
    desc: "Learn to protect systems and networks from cyber threats with ethical hacking techniques.",
    topics: ["Network security fundamentals", "Penetration testing", "Web application security", "OWASP Top 10", "Incident response", "Security certifications prep"],
    skills: ["Kali Linux", "Metasploit", "Wireshark", "Burp Suite", "Nmap"],
    outcomes: ["Security Analyst", "Ethical Hacker", "SOC Analyst"],
  },
  {
    icon: <Smartphone size={32}/>, title: "Mobile App Development",
    duration: "4 Months", students: "100+", color: "#F59E0B",
    gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
    desc: "Build cross-platform mobile applications for iOS and Android.",
    topics: ["React Native fundamentals", "Flutter & Dart", "State management (Redux, Riverpod)", "Native APIs integration", "App Store deployment", "Performance optimization"],
    skills: ["React Native", "Flutter", "Dart", "Firebase", "Redux"],
    outcomes: ["Mobile Developer", "React Native Dev", "Flutter Dev"],
  },
];

export default function SoftwareCourses() {
  return (
    <div style={{background:'#0D0D1A', minHeight:'100vh'}}>
      <Navbar theme="software" links={navLinks}/>
      <section className="relative pt-32 pb-16 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{backgroundImage:`url('https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&q=80')`}}/>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.h1 initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} className="text-5xl font-bold font-space gradient-text-teal mb-4">
            Our Programs
          </motion.h1>
          <motion.p initial={{opacity:0}} animate={{opacity:1}} transition={{delay:0.2}} className="text-gray-400 text-lg">
            Cutting-edge curriculum designed with top tech companies
          </motion.p>
        </div>
      </section>

      <section className="pb-20 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {courses.map((c, i) => (
            <motion.div key={i} initial={{opacity:0, y:30}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{delay:i*0.08}}
              className="rounded-2xl overflow-hidden card-hover"
              style={{background:'rgba(255,255,255,0.04)', border:`1px solid ${c.color}25`}}>
              {/* Card header */}
              <div className="p-6 relative overflow-hidden" style={{background:`${c.color}10`}}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10 -translate-y-8 translate-x-8"
                  style={{background:c.gradient}}/>
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 relative z-10"
                  style={{background:c.gradient}}>
                  <span className="text-white">{c.icon}</span>
                </div>
                <h3 className="text-xl font-bold font-space text-white mb-2 relative z-10">{c.title}</h3>
                <p className="text-gray-400 text-sm relative z-10">{c.desc}</p>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500 relative z-10">
                  <span className="flex items-center gap-1"><Clock size={11} style={{color:c.color}}/>{c.duration}</span>
                  <span className="flex items-center gap-1"><Users size={11} style={{color:c.color}}/>{c.students} enrolled</span>
                </div>
              </div>

              {/* Topics */}
              <div className="p-6 border-t border-white/5">
                <div className="text-xs font-semibold mb-3" style={{color:c.color}}>TOPICS COVERED</div>
                <div className="grid grid-cols-1 gap-1.5 mb-4">
                  {c.topics.slice(0,4).map((t, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle size={11} style={{color:c.color, flexShrink:0}}/>{t}
                    </div>
                  ))}
                  {c.topics.length > 4 && <div className="text-xs text-gray-500">+{c.topics.length - 4} more topics</div>}
                </div>

                {/* Skill badges */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {c.skills.map(s => (
                    <span key={s} className="text-xs px-2.5 py-1 rounded-full font-medium"
                      style={{background:`${c.color}15`, color:c.color, border:`1px solid ${c.color}30`}}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Career outcomes */}
                <div className="text-xs text-gray-500 mb-4">
                  <span className="font-semibold text-gray-400">Career Paths: </span>
                  {c.outcomes.join(" · ")}
                </div>

                <div className="flex gap-3">
                  <Link href="/software/enroll"
                    className="flex-1 py-2.5 rounded-xl text-sm font-bold text-white text-center transition-transform hover:scale-105"
                    style={{background:c.gradient}}>
                    Enroll Now
                  </Link>
                  <Link href={`/software/courses/${c.title.toLowerCase().replace(/\s+/g,'-')}`}
                    className="flex items-center gap-1 px-4 py-2.5 rounded-xl text-sm font-semibold transition-all hover:bg-white/5"
                    style={{border:`1px solid ${c.color}30`, color:c.color}}>
                    Details <ArrowRight size={13}/>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <WhatsAppButton/>
      <BackToTop/>
    </div>
  );
}
