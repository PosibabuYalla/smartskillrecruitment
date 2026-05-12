import CourseDetail from "../../../components/CourseDetail";
import type { CourseData } from "../../../components/CourseDetail";

const data: CourseData = {
  theme: "software", slug: "mern-stack",
  title: "MERN Stack", badge: "Top Rated",
  tagline: "Become a JavaScript expert — build scalable full-stack apps with MongoDB, Express, React & Node.js.",
  heroImage: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1600&q=80",
  duration: "6 Months", students: "180+", level: "Beginner → Advanced", rating: 4.9,
  color: "#06B6D4", gradient: "linear-gradient(135deg, #06B6D4, #3B82F6)",
  overview: "The most in-demand full-stack JavaScript program. Master React for frontend, Node.js & Express for backend, MongoDB for database, and deploy production apps on cloud platforms.",
  learns: [
    "JavaScript ES6+ — async/await, destructuring, modules",
    "TypeScript fundamentals & type safety",
    "React.js — hooks, context, performance optimization",
    "Next.js — SSR, SSG & App Router",
    "Node.js — event loop, streams, clustering",
    "Express.js — middleware, routing, error handling",
    "MongoDB — aggregation, indexing, Atlas",
    "Mongoose ODM & schema design",
    "JWT, OAuth2 & session-based authentication",
    "GraphQL API design with Apollo",
    "Redis caching & Socket.io real-time",
    "Docker, CI/CD & cloud deployment",
  ],
  technologies: [
    { name: "MongoDB", icon: "🍃" }, { name: "Express", icon: "⚡" }, { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🟢" }, { name: "Next.js", icon: "▲" }, { name: "TypeScript", icon: "🔷" },
    { name: "GraphQL", icon: "🔺" }, { name: "Redis", icon: "🔴" }, { name: "Socket.io", icon: "🔌" },
    { name: "Docker", icon: "🐳" }, { name: "AWS", icon: "☁️" }, { name: "Git", icon: "🔀" },
  ],
  outcomes: [
    { role: "MERN Developer", salary: "₹5L – ₹14L" },
    { role: "Frontend Engineer", salary: "₹5L – ₹16L" },
    { role: "Backend Developer", salary: "₹5L – ₹14L" },
    { role: "Full Stack Engineer", salary: "₹6L – ₹18L" },
    { role: "React Developer", salary: "₹5L – ₹15L" },
    { role: "Node.js Developer", salary: "₹5L – ₹13L" },
  ],
  whyChoose: [
    { icon: "🌐", title: "Most In-Demand Stack", desc: "MERN is the #1 requested skill set in Indian & global job postings." },
    { icon: "⚡", title: "One Language — Full Stack", desc: "JavaScript everywhere — frontend, backend & database queries." },
    { icon: "🚀", title: "Production Projects", desc: "Build & deploy 5 real apps that go live on the internet." },
    { icon: "💼", title: "100% Placement Help", desc: "Direct referrals to 50+ hiring partners across India." },
  ],
  projects: [
    { title: "Real-Time Chat App", desc: "WhatsApp-like messaging app with rooms, typing indicators & file sharing.", tech: ["React", "Node.js", "Socket.io", "MongoDB"] },
    { title: "Netflix Clone", desc: "Video streaming platform with auth, subscriptions, search & recommendations.", tech: ["Next.js", "Node.js", "MongoDB", "AWS S3"] },
    { title: "Food Delivery App", desc: "Zomato-like app with restaurant listings, cart, payments & order tracking.", tech: ["React", "Express", "MongoDB", "Stripe"] },
    { title: "Project Management Tool", desc: "Trello-like kanban board with drag-drop, teams, deadlines & notifications.", tech: ["React", "Node.js", "MongoDB", "Redis"] },
    { title: "E-Learning Platform", desc: "Course platform with video lessons, quizzes, progress tracking & certificates.", tech: ["Next.js", "Express", "MongoDB", "AWS"] },
  ],
  syllabus: [
    { module: "JavaScript & TypeScript", topics: ["ES6+ features & closures", "Async/await & Promises", "TypeScript types & interfaces", "Generics & decorators", "Module systems (ESM/CJS)", "Error handling patterns"] },
    { module: "React & Next.js", topics: ["Components, props & state", "useEffect, useRef, useMemo", "Context API & Redux Toolkit", "React Router v6", "Next.js App Router & SSR", "Performance optimization"] },
    { module: "Node.js & Express", topics: ["Node.js event loop & streams", "Express routing & middleware", "RESTful API design", "File uploads & email", "Rate limiting & security", "WebSockets with Socket.io"] },
    { module: "MongoDB & Mongoose", topics: ["Document model & collections", "CRUD operations", "Aggregation pipeline", "Indexing & performance", "Mongoose schemas & virtuals", "Atlas cloud setup"] },
    { module: "Authentication & Security", topics: ["JWT access & refresh tokens", "OAuth2 with Google/GitHub", "bcrypt password hashing", "CORS & helmet security", "Input validation & sanitization", "OWASP best practices"] },
    { module: "Deployment & DevOps", topics: ["Docker & docker-compose", "GitHub Actions CI/CD", "AWS EC2 & S3", "Nginx reverse proxy", "PM2 process management", "Monitoring & logging"] },
  ],
  pricing: {
    original: 45000, offer: 35000, emi: 3500,
    includes: [
      "130+ hours of live training sessions",
      "5 deployed real-world projects",
      "Industry-recognized certificate",
      "Lifetime access to recordings & updates",
      "1:1 mentorship & code reviews",
      "Resume & portfolio building",
      "Mock technical interviews",
      "Job placement assistance",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
