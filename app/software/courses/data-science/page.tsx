import CourseDetail from "../../components/CourseDetail";
import type { CourseData } from "../../components/CourseDetail";

const data: CourseData = {
  theme: "software", slug: "data-science",
  title: "Data Science", badge: "High Demand",
  tagline: "Turn raw data into business insights. Master Python, SQL, Tableau & statistical analysis to become a data-driven professional.",
  heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1600&q=80",
  duration: "6–8 or 8–12 Months", students: "130+", level: "Beginner → Advanced", rating: 4.8,
  color: "#10B981", gradient: "linear-gradient(135deg, #10B981, #84CC16)",
  overview: "A complete data science program covering Python, SQL, statistics, machine learning, and business intelligence tools. Available in two tracks: 6–8 Month Standard (₹40,000) and 8–12 Month Advanced (₹60,000). Learn to collect, clean, analyze, and visualize data to drive real business decisions.",
  learns: [
    "Python programming for data analysis",
    "SQL — advanced queries, joins, window functions",
    "Statistics — hypothesis testing, distributions, regression",
    "Exploratory Data Analysis (EDA) techniques",
    "Data visualization with Matplotlib, Seaborn & Plotly",
    "Tableau & Power BI dashboard creation",
    "Machine learning with Scikit-learn",
    "Feature engineering & selection",
    "A/B testing & experimental design",
    "Big data basics with PySpark",
    "Business intelligence & storytelling with data",
    "Excel advanced analytics & pivot tables",
  ],
  technologies: [
    { name: "Python", icon: "🐍" }, { name: "SQL", icon: "🗄️" }, { name: "Tableau", icon: "📊" },
    { name: "Power BI", icon: "💹" }, { name: "Pandas", icon: "🐼" }, { name: "NumPy", icon: "🔢" },
    { name: "Matplotlib", icon: "📈" }, { name: "Scikit-learn", icon: "🤖" }, { name: "Excel", icon: "📋" },
    { name: "PySpark", icon: "⚡" }, { name: "Jupyter", icon: "📓" }, { name: "Git", icon: "🔀" },
  ],
  outcomes: [
    { role: "Data Analyst", salary: "₹4L – ₹12L" },
    { role: "Business Analyst", salary: "₹5L – ₹14L" },
    { role: "BI Developer", salary: "₹5L – ₹13L" },
    { role: "Data Engineer", salary: "₹6L – ₹16L" },
    { role: "Product Analyst", salary: "₹6L – ₹15L" },
    { role: "Research Analyst", salary: "₹4L – ₹10L" },
  ],
  whyChoose: [
    { icon: "📊", title: "Real Datasets", desc: "Work with actual business datasets from e-commerce, finance & healthcare." },
    { icon: "🏢", title: "Industry Tools", desc: "Learn the exact tools used by analysts at Amazon, Flipkart & startups." },
    { icon: "💡", title: "Business Focus", desc: "Learn to translate data insights into actionable business recommendations." },
    { icon: "🎯", title: "Placement Ready", desc: "Build a portfolio of 5 projects that impress hiring managers." },
  ],
  projects: [
    { title: "Sales Analytics Dashboard", desc: "Interactive Tableau dashboard analyzing 3 years of sales data with KPI tracking & forecasting.", tech: ["Tableau", "SQL", "Python", "Excel"] },
    { title: "Customer Churn Prediction", desc: "ML model predicting telecom customer churn with 92% accuracy & business recommendations.", tech: ["Python", "Scikit-learn", "Pandas", "Matplotlib"] },
    { title: "COVID-19 Data Analysis", desc: "Comprehensive analysis of global COVID data with interactive visualizations & trend forecasting.", tech: ["Python", "Plotly", "Pandas", "Seaborn"] },
    { title: "E-Commerce Recommendation", desc: "Product recommendation system using collaborative filtering on 1M+ transaction records.", tech: ["Python", "SQL", "Scikit-learn", "Power BI"] },
    { title: "Financial Risk Analysis", desc: "Credit risk scoring model for loan default prediction using logistic regression & random forest.", tech: ["Python", "SQL", "Tableau", "Excel"] },
  ],
  syllabus: [
    { module: "Python for Data Analysis", topics: ["Python basics & data structures", "NumPy arrays & matrix operations", "Pandas — DataFrames, groupby, merge", "Data cleaning & missing values", "String manipulation & regex", "Working with dates & time series"] },
    { module: "SQL & Databases", topics: ["SELECT, WHERE, GROUP BY, HAVING", "JOINs — inner, outer, cross", "Window functions & CTEs", "Subqueries & correlated queries", "Database design & normalization", "PostgreSQL & MySQL hands-on"] },
    { module: "Statistics & Mathematics", topics: ["Descriptive statistics", "Probability distributions", "Hypothesis testing (t-test, chi-square)", "Correlation & regression analysis", "ANOVA & non-parametric tests", "Bayesian statistics basics"] },
    { module: "Data Visualization", topics: ["Matplotlib & Seaborn charts", "Plotly interactive visualizations", "Tableau Desktop fundamentals", "Power BI reports & dashboards", "Storytelling with data", "Dashboard design principles"] },
    { module: "Machine Learning for Analysts", topics: ["Supervised learning overview", "Linear & logistic regression", "Decision trees & random forests", "Clustering for segmentation", "Model evaluation metrics", "Feature importance analysis"] },
    { module: "Business Intelligence", topics: ["KPI definition & tracking", "A/B testing methodology", "Cohort analysis", "Funnel analysis", "Forecasting techniques", "Presenting insights to stakeholders"] },
  ],
  pricing: {
    original: 75000, offer: 40000, emi: 4000,
    includes: [
      "6–8 Month Standard Course — ₹40,000",
      "8–12 Month Advanced Course — ₹60,000",
      "110+ hours of live training sessions",
      "5 industry-grade data projects",
      "Industry-recognized certificate",
      "Lifetime access to recordings & datasets",
      "1:1 mentorship sessions",
      "Tableau & Power BI license support",
      "Portfolio & resume review",
      "Job placement assistance",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
