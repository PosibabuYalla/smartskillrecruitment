import CourseDetail, {
  Code2, Database, Globe, Server, GitBranch, Cloud, Shield, Layers,
  Monitor, Settings, Cpu, Wrench, Award, Rocket, Target, BookOpen,
  type CourseData,
} from "../../../components/CourseDetail";

const data: CourseData = {
  theme: "software", slug: "python-full-stack",
  title: "Python Full Stack", badge: "Most Popular",
  tagline: "Master Python, Django, React & cloud deployment to build production-ready full-stack web applications from scratch.",
  heroImage: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=1600&q=80",
  duration: "6 Months", students: "200+", level: "Beginner → Advanced", rating: 4.8,
  color: "#10B981", gradient: "linear-gradient(135deg, #10B981, #06B6D4)",
  overview: "A comprehensive program covering Python programming, Django/Flask backend, React frontend, databases, REST APIs, and cloud deployment. Build 5+ real-world projects and land your first developer job.",
  learns: [
    "Python programming from basics to advanced OOP",
    "Django framework — models, views, templates, ORM",
    "Flask microframework for lightweight APIs",
    "React.js — hooks, state management, routing",
    "REST API design and JWT authentication",
    "MySQL & PostgreSQL database design",
    "Git, GitHub & version control workflows",
    "Docker basics & cloud deployment (AWS/Heroku)",
    "HTML5, CSS3, Bootstrap & Tailwind CSS",
    "Unit testing with PyTest & Jest",
    "Agile methodology & project management",
    "Resume building & interview preparation",
  ],
  technologies: [
    { name: "Python", icon: Code2 }, { name: "Django", icon: Server }, { name: "Flask", icon: Layers },
    { name: "React", icon: Monitor }, { name: "MySQL", icon: Database }, { name: "PostgreSQL", icon: Database },
    { name: "REST API", icon: Globe }, { name: "Docker", icon: Settings }, { name: "AWS", icon: Cloud },
    { name: "Git", icon: GitBranch }, { name: "HTML/CSS", icon: Cpu }, { name: "Bootstrap", icon: Wrench },
  ],
  outcomes: [
    { role: "Python Developer", salary: "₹4L – ₹10L" },
    { role: "Full Stack Developer", salary: "₹5L – ₹14L" },
    { role: "Backend Engineer", salary: "₹5L – ₹12L" },
    { role: "Django Developer", salary: "₹4L – ₹10L" },
    { role: "API Developer", salary: "₹4.5L – ₹11L" },
    { role: "Software Engineer", salary: "₹5L – ₹15L" },
  ],
  whyChoose: [
    { icon: Award, title: "Industry Curriculum", desc: "Curriculum designed with real hiring managers from top tech companies." },
    { icon: Wrench, title: "100% Hands-on", desc: "Every concept reinforced with live coding, assignments & real projects." },
    { icon: Target, title: "Placement Support", desc: "Resume reviews, mock interviews & direct referrals to hiring partners." },
    { icon: BookOpen, title: "Lifetime Access", desc: "Access course materials, recordings & updates forever after enrollment." },
  ],
  projects: [
    { title: "E-Commerce Platform", desc: "Full-featured online store with cart, payments, admin dashboard & order tracking.", tech: ["Django", "React", "PostgreSQL", "Stripe"] },
    { title: "Social Media App", desc: "Instagram-like app with posts, likes, comments, follow system & real-time notifications.", tech: ["Django REST", "React", "WebSockets", "Redis"] },
    { title: "Job Portal", desc: "Job listing platform with employer & candidate dashboards, resume upload & application tracking.", tech: ["Flask", "React", "MySQL", "AWS S3"] },
    { title: "Blog CMS", desc: "Content management system with rich text editor, SEO tools, categories & analytics.", tech: ["Django", "React", "PostgreSQL"] },
    { title: "REST API Suite", desc: "Production-grade REST API with JWT auth, rate limiting, caching & Swagger docs.", tech: ["FastAPI", "PostgreSQL", "Redis", "Docker"] },
  ],
  syllabus: [
    { module: "Python Fundamentals", topics: ["Variables, data types & operators", "Control flow & loops", "Functions & lambda", "OOP — classes, inheritance, polymorphism", "File handling & exceptions", "Modules & packages"] },
    { module: "Django Backend", topics: ["Django project structure & settings", "Models & ORM queries", "Views, URLs & templates", "Forms & validation", "Authentication & permissions", "Django REST Framework"] },
    { module: "Flask & APIs", topics: ["Flask routing & blueprints", "SQLAlchemy ORM", "RESTful API design", "JWT authentication", "API testing with Postman", "Rate limiting & caching"] },
    { module: "React Frontend", topics: ["JSX, components & props", "State & lifecycle hooks", "React Router v6", "Context API & Redux", "Axios & API integration", "Tailwind CSS styling"] },
    { module: "Databases", topics: ["MySQL schema design", "PostgreSQL advanced queries", "Indexing & optimization", "Migrations & seeds", "NoSQL with MongoDB basics", "Database security"] },
    { module: "Deployment & DevOps", topics: ["Git branching strategies", "Docker & containerization", "AWS EC2 & S3 setup", "CI/CD with GitHub Actions", "Nginx & Gunicorn", "SSL & domain setup"] },
  ],
  pricing: {
    original: 45000, offer: 35000, emi: 3500,
    includes: [
      "120+ hours of live training sessions",
      "5 real-world capstone projects",
      "Industry-recognized certificate",
      "Lifetime access to recordings & materials",
      "1:1 mentorship sessions",
      "Resume & LinkedIn profile review",
      "Mock interview preparation",
      "Job placement assistance",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
