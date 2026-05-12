import CourseDetail, {
  Globe, Search, Mail, Megaphone, BarChart2, Monitor, Settings,
  Smartphone, Cloud, Wrench, Award, Rocket, Target, TrendingUp,
  type CourseData,
} from "../../../components/CourseDetail";

const data: CourseData = {
  theme: "software", slug: "digital-marketing",
  title: "Digital Marketing", badge: "Fast Track",
  tagline: "Master SEO, Google Ads, Social Media, Content Marketing & Analytics to grow brands and launch your digital career.",
  heroImage: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=1600&q=80",
  duration: "3 Months", students: "220+", level: "Beginner → Professional", rating: 4.7,
  color: "#F59E0B", gradient: "linear-gradient(135deg, #F59E0B, #EF4444)",
  overview: "A practical, job-ready digital marketing program covering SEO, paid advertising, social media, email marketing, content strategy and analytics. Learn to run real campaigns with real budgets from day one.",
  learns: [
    "Search Engine Optimization (SEO) — on-page & off-page",
    "Google Ads — Search, Display, Shopping & YouTube",
    "Meta Ads — Facebook & Instagram campaign management",
    "Social media marketing strategy & content planning",
    "Content marketing & copywriting for conversions",
    "Email marketing & automation with Mailchimp",
    "Google Analytics 4 & data-driven decision making",
    "YouTube marketing & video SEO",
    "Influencer marketing & brand collaborations",
    "E-commerce marketing on Amazon & Flipkart",
    "Graphic design basics with Canva",
    "Freelancing & agency business setup",
  ],
  technologies: [
    { name: "Google Ads", icon: Search }, { name: "Meta Ads", icon: Megaphone }, { name: "SEO Tools", icon: Globe },
    { name: "GA4", icon: BarChart2 }, { name: "Mailchimp", icon: Mail }, { name: "Canva", icon: Monitor },
    { name: "Semrush", icon: Search }, { name: "Ahrefs", icon: TrendingUp }, { name: "HubSpot", icon: Settings },
    { name: "WordPress", icon: Globe }, { name: "Hootsuite", icon: Smartphone }, { name: "YouTube", icon: Cloud },
  ],
  outcomes: [
    { role: "Digital Marketing Executive", salary: "₹2.5L – ₹7L" },
    { role: "SEO Specialist", salary: "₹3L – ₹8L" },
    { role: "Social Media Manager", salary: "₹3L – ₹8L" },
    { role: "PPC Analyst", salary: "₹3.5L – ₹9L" },
    { role: "Content Marketer", salary: "₹3L – ₹7L" },
    { role: "Digital Marketing Freelancer", salary: "₹3L – ₹15L+" },
  ],
  whyChoose: [
    { icon: Target, title: "Live Ad Budgets", desc: "Run real Google & Meta ad campaigns with actual budgets during training." },
    { icon: TrendingUp, title: "Fastest Growing Field", desc: "Every business needs digital marketing — 10L+ jobs open in India." },
    { icon: Globe, title: "Work From Anywhere", desc: "Freelance or work remotely for clients across India & globally." },
    { icon: Rocket, title: "3-Month Fast Track", desc: "Get job-ready in just 3 months with intensive hands-on training." },
  ],
  projects: [
    { title: "SEO Campaign for Local Business", desc: "Rank a local business website on Google Page 1 for 10+ keywords using on-page & off-page SEO.", tech: ["Semrush", "Ahrefs", "WordPress", "Google Search Console"] },
    { title: "Google Ads Campaign", desc: "Run a complete Google Search & Display campaign with ₹5000 budget, optimizing for conversions.", tech: ["Google Ads", "GA4", "Google Tag Manager"] },
    { title: "Social Media Brand Launch", desc: "Build a brand from scratch on Instagram & Facebook — content calendar, reels, ads & growth strategy.", tech: ["Meta Ads", "Canva", "Hootsuite", "Meta Business Suite"] },
    { title: "Email Marketing Funnel", desc: "Design a 7-email welcome sequence with automation, A/B testing & 30%+ open rate target.", tech: ["Mailchimp", "HubSpot", "Canva"] },
    { title: "E-Commerce Marketing Plan", desc: "Complete digital marketing strategy for an online store — SEO, ads, social & email integration.", tech: ["Google Ads", "Meta Ads", "Shopify", "GA4"] },
  ],
  syllabus: [
    { module: "SEO — Search Engine Optimization", topics: ["Keyword research & intent mapping", "On-page SEO — title, meta, content", "Technical SEO — speed, schema, sitemap", "Link building strategies", "Local SEO & Google My Business", "SEO audit & reporting"] },
    { module: "Google Ads (PPC)", topics: ["Search campaign setup & structure", "Keyword match types & bidding", "Ad copywriting & extensions", "Display & remarketing campaigns", "Shopping ads for e-commerce", "Conversion tracking & optimization"] },
    { module: "Social Media Marketing", topics: ["Facebook & Instagram strategy", "Meta Ads Manager — campaigns & targeting", "Content calendar & scheduling", "Reels, Stories & viral content", "LinkedIn B2B marketing", "YouTube channel growth"] },
    { module: "Content & Email Marketing", topics: ["Content strategy & planning", "Blog writing for SEO", "Email list building tactics", "Mailchimp automation workflows", "Copywriting for conversions", "Landing page optimization"] },
    { module: "Analytics & Reporting", topics: ["Google Analytics 4 setup", "Custom reports & dashboards", "UTM tracking & attribution", "Conversion rate optimization", "A/B testing methodology", "Monthly reporting templates"] },
    { module: "Freelancing & Career", topics: ["Building a digital marketing portfolio", "Freelance pricing & proposals", "Finding clients on Upwork & Fiverr", "Agency workflow & tools", "Personal branding on LinkedIn", "Interview preparation"] },
  ],
  pricing: {
    original: 40000, offer: 30000, emi: 3000,
    includes: [
      "60+ hours of live training sessions",
      "5 real campaign projects",
      "Google & Meta Ads certifications prep",
      "Lifetime access to recordings & tools",
      "1:1 mentorship sessions",
      "Live ad budget for practice campaigns",
      "Portfolio & LinkedIn profile review",
      "Freelancing & job placement support",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
