import CourseDetail from "../../components/CourseDetail";
import type { CourseData } from "../../components/CourseDetail";

const data: CourseData = {
  theme: "software", slug: "ai-machine-learning",
  title: "AI & Machine Learning", badge: "Future Tech",
  tagline: "Build intelligent systems with Python, TensorFlow & PyTorch. From ML fundamentals to deploying AI models in production.",
  heroImage: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=1600&q=80",
  duration: "5 Months", students: "150+", level: "Intermediate → Advanced", rating: 4.9,
  color: "#7C3AED", gradient: "linear-gradient(135deg, #7C3AED, #EC4899)",
  overview: "The most comprehensive AI/ML program in Andhra Pradesh. Master machine learning algorithms, deep learning, NLP, computer vision, and deploy production AI models. Includes hands-on projects with real datasets.",
  learns: [
    "Python for data science — NumPy, Pandas, Matplotlib",
    "Statistics & probability for machine learning",
    "Supervised & unsupervised learning algorithms",
    "Deep learning with TensorFlow & Keras",
    "PyTorch for research & production",
    "Natural Language Processing (NLP) & transformers",
    "Computer Vision with OpenCV & CNNs",
    "Generative AI & Large Language Models (LLMs)",
    "Feature engineering & model selection",
    "MLOps — model versioning, monitoring & deployment",
    "Cloud AI services (AWS SageMaker, GCP Vertex AI)",
    "Ethics in AI & responsible ML practices",
  ],
  technologies: [
    { name: "Python", icon: "🐍" }, { name: "TensorFlow", icon: "🔶" }, { name: "PyTorch", icon: "🔥" },
    { name: "Scikit-learn", icon: "🤖" }, { name: "OpenCV", icon: "👁️" }, { name: "Pandas", icon: "🐼" },
    { name: "NumPy", icon: "🔢" }, { name: "Hugging Face", icon: "🤗" }, { name: "MLflow", icon: "📊" },
    { name: "AWS SageMaker", icon: "☁️" }, { name: "Jupyter", icon: "📓" }, { name: "Docker", icon: "🐳" },
  ],
  outcomes: [
    { role: "ML Engineer", salary: "₹7L – ₹20L" },
    { role: "Data Scientist", salary: "₹7L – ₹22L" },
    { role: "AI Developer", salary: "₹8L – ₹25L" },
    { role: "NLP Engineer", salary: "₹8L – ₹22L" },
    { role: "Computer Vision Engineer", salary: "₹8L – ₹24L" },
    { role: "MLOps Engineer", salary: "₹9L – ₹26L" },
  ],
  whyChoose: [
    { icon: "🧠", title: "Real AI Projects", desc: "Work on projects using real datasets from Kaggle, UCI & industry partners." },
    { icon: "🔬", title: "Research + Industry", desc: "Balance between academic understanding and production-ready implementation." },
    { icon: "🌍", title: "Global Demand", desc: "AI/ML engineers are the highest-paid professionals in tech globally." },
    { icon: "🎓", title: "Expert Mentors", desc: "Learn from practitioners with experience at top AI research labs & companies." },
  ],
  projects: [
    { title: "Sentiment Analysis Engine", desc: "NLP model that classifies customer reviews with 95%+ accuracy using BERT transformers.", tech: ["Python", "Hugging Face", "FastAPI", "Docker"] },
    { title: "Object Detection System", desc: "Real-time object detection using YOLO for security camera footage analysis.", tech: ["PyTorch", "OpenCV", "YOLO", "Flask"] },
    { title: "Stock Price Predictor", desc: "LSTM-based time series model predicting stock prices with live data feeds.", tech: ["TensorFlow", "Pandas", "Plotly", "AWS"] },
    { title: "Recommendation Engine", desc: "Netflix-style collaborative filtering recommendation system for e-commerce.", tech: ["Scikit-learn", "Surprise", "FastAPI", "Redis"] },
    { title: "AI Chatbot", desc: "GPT-powered customer support chatbot with context memory & knowledge base.", tech: ["LangChain", "OpenAI API", "React", "MongoDB"] },
  ],
  syllabus: [
    { module: "Python for Data Science", topics: ["NumPy arrays & operations", "Pandas DataFrames & cleaning", "Matplotlib & Seaborn visualization", "Scipy for statistics", "Jupyter notebooks workflow", "Data preprocessing pipelines"] },
    { module: "Machine Learning Fundamentals", topics: ["Linear & logistic regression", "Decision trees & random forests", "SVM & KNN algorithms", "Clustering (K-Means, DBSCAN)", "Dimensionality reduction (PCA)", "Model evaluation & cross-validation"] },
    { module: "Deep Learning", topics: ["Neural network architecture", "Backpropagation & optimizers", "CNNs for image classification", "RNNs & LSTMs for sequences", "Transfer learning & fine-tuning", "Regularization techniques"] },
    { module: "NLP & Transformers", topics: ["Text preprocessing & tokenization", "Word embeddings (Word2Vec, GloVe)", "BERT & transformer architecture", "Hugging Face pipelines", "Named entity recognition", "Text generation with GPT"] },
    { module: "Computer Vision", topics: ["Image processing with OpenCV", "Object detection (YOLO, SSD)", "Image segmentation", "Face recognition systems", "Video analysis", "Augmented reality basics"] },
    { module: "MLOps & Deployment", topics: ["MLflow experiment tracking", "Model versioning & registry", "FastAPI model serving", "Docker containerization", "AWS SageMaker deployment", "Monitoring & drift detection"] },
  ],
  pricing: {
    original: 60000, offer: 35000, emi: 3500,
    includes: [
      "150+ hours of live training sessions",
      "5 AI/ML capstone projects with real datasets",
      "Industry-recognized certificate",
      "Lifetime access to recordings & new content",
      "1:1 mentorship with AI practitioners",
      "Kaggle competition guidance",
      "Portfolio & GitHub profile review",
      "Job placement assistance",
    ],
  },
};

export default function Page() { return <CourseDetail data={data} />; }
