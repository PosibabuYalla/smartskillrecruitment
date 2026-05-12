import CourseDetail from "../../components/CourseDetail";
import type { CourseData } from "../../components/CourseDetail";

const data: CourseData = {
  theme: "software", slug: "java-full-stack",
  title: "Java Full Stack", badge: "Enterprise Ready",
  tagline: "Build enterprise-grade applications with Java, Spring Boot, Microservices & React. The most sought-after stack in Indian IT.",
  heroImage: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1600&q=80",
  duration: "6–8 Months", students: "160+", level: "Beginner → Advanced", rating: 4.8,
  color: "#EF4444", gradient: "linear-gradient(135deg, #EF4444, #F97316)",
  overview: "The most comprehensive Java Full Stack program covering Core Java, Spring Boot, Microservices, React frontend, MySQL & cloud deployment. Designed for students targeting TCS, Infosys, Wipro & product companies.",
  learns: [
    "Core Java — OOP, collections, generics, streams",
    "Java 17+ features — records, sealed classes, pattern matching",
    "Spring Boot — REST APIs, JPA, security, testing",
    "Spring MVC & Thymeleaf for server-side rendering",
    "Hibernate ORM & JPA advanced mappings",
    "Microservices architecture with Spring Cloud",
    "React.js frontend — hooks, routing, state management",
    "MySQL & PostgreSQL — schema design & optimization",
    "Docker & Kubernetes for containerization",
    "JWT & OAuth2 security implementation",
    "Maven & Gradle build tools",
    "JUnit 5 & Mockito for testing",
  ],
  technologies: [
    { name: "Java", icon: "☕" }, { name: "Spring Boot", icon: "🍃" }, { name: "Spring Cloud", icon: "☁️" },
    { name: "React", icon: "⚛️" }, { name: "MySQL", icon: "🗄️" }, { name: "Hibernate", icon: "🔶" },
    { name: "Docker", icon: "🐳" }, { name: "Kubernetes", icon: "⚙️" }, { name: "Maven", icon: "📦" },
    { name: "JUnit", icon: "✅" }, { name: "AWS", icon: "☁️" }, { name: "Git", icon: "🔀" },
  ],
  outcomes: [
    { role: "Java Developer", salary: "₹4L – ₹12L" },
    { role: "Spring Boot Developer", salary: "₹5L – ₹14L" },
    { role: "Full Stack Engineer", salary: "₹6L – ₹18L" },
    { role: "Backend Engineer", salary: "₹5L – ₹15L" },
    { role: "Microservices Developer", salary: "₹7L – ₹20L" },
    { role: "Software Engineer (MNC)", salary: "₹5L – ₹16L" },
  ],
  whyChoose: [
    { icon: "🏢", title: "MNC Preferred Stack", desc: "Java is the #1 language used by TCS, Infosys, Wipro, Accenture & product companies." },
    { icon: "🔒", title: "Enterprise Security", desc: "Learn Spring Security, OAuth2 & JWT — skills that command premium salaries." },
    { icon: "🧩", title: "Microservices Ready", desc: "Master the architecture pattern used by Amazon, Netflix & Flipkart." },
    { icon: "🎯", title: "Interview Focused", desc: "DSA in Java, system design & mock interviews for top MNC placements." },
  ],
  projects: [
    { title: "Banking Application", desc: "Full-featured banking system with accounts, transactions, loans & admin dashboard using Spring Boot.", tech: ["Spring Boot", "React", "MySQL", "Spring Security"] },
    { title: "Hospital Management System", desc: "Patient records, doctor scheduling, billing & pharmacy management with role-based access.", tech: ["Spring Boot", "Hibernate", "React", "PostgreSQL"] },
    { title: "Microservices E-Commerce", desc: "Netflix-style microservices architecture with API gateway, service discovery & circuit breaker.", tech: ["Spring Cloud", "Docker", "Kubernetes", "React"] },
    { title: "HR Management Portal", desc: "Employee management, payroll, leave tracking & performance reviews with JWT auth.", tech: ["Spring Boot", "React", "MySQL", "Docker"] },
    { title: "Real-Time Notification System", desc: "Event-driven notification service using Kafka, WebSockets & Spring Boot for live updates.", tech: ["Spring Boot", "Kafka", "WebSockets", "React"] },
  ],
  syllabus: [
    { module: "Core Java", topics: ["OOP — classes, inheritance, polymorphism", "Collections framework — List, Map, Set", "Generics & lambda expressions", "Java Streams & functional programming", "Exception handling & I/O", "Java 17+ modern features"] },
    { module: "Spring Boot & REST", topics: ["Spring Boot project setup & auto-config", "REST API design with @RestController", "Spring Data JPA & repositories", "Request validation & error handling", "Spring Boot testing with JUnit 5", "Actuator & monitoring"] },
    { module: "Hibernate & Databases", topics: ["JPA entity mappings & relationships", "JPQL & native queries", "Hibernate caching strategies", "Database migrations with Flyway", "MySQL performance tuning", "PostgreSQL advanced features"] },
    { module: "Spring Security & Auth", topics: ["Spring Security architecture", "JWT token generation & validation", "OAuth2 with Google login", "Role-based access control", "CSRF & XSS protection", "API rate limiting"] },
    { module: "React Frontend", topics: ["React components & JSX", "useState, useEffect & custom hooks", "React Router v6", "Axios API integration", "Redux Toolkit state management", "Tailwind CSS styling"] },
    { module: "Microservices & DevOps", topics: ["Microservices design patterns", "Spring Cloud Gateway & Eureka", "Docker containerization", "Kubernetes deployment", "CI/CD with GitHub Actions", "AWS EC2 & RDS deployment"] },
  ],
  pricing: {
    original: 50000, offer: 35000, emi: 3500,
    includes: [
      "140+ hours of live training sessions",
      "5 enterprise-grade projects",
      "Industry-recognized certificate",
      "Lifetime access to recordings & materials",
      "1:1 mentorship & code reviews",
      "DSA & system design interview prep",
      "Resume & LinkedIn profile review",
      "MNC placement assistance",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
