export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming Languages",
    skills: ["Python", "SQL"],
  },
  {
    id: "genai",
    title: "Generative AI",
    skills: [
      "LLMs",
      "Retrieval-Augmented Generation (RAG)",
      "Prompt Engineering",
      "Semantic Search",
      "Groq",
      "LLM APIs",
    ],
  },
  {
    id: "rag",
    title: "RAG",
    skills: [
      "RAG Pipelines",
      "Document Processing",
      "Text Chunking",
      "Embeddings",
      "Context Retrieval",
      "Grounded Generation",
      "Source Citations",
    ],
  },
  {
    id: "llm-framework",
    title: "AI/LLM Framework",
    skills: ["LangChain", "Hugging Face Sentence Transformers"],
  },
  {
    id: "vector",
    title: "Vector Databases",
    skills: ["FAISS"],
  },
  {
    id: "ml",
    title: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Classification",
      "Regression",
      "Feature Engineering",
      "Model Evaluation",
      "Scikit-learn",
    ],
  },
  {
    id: "analytics",
    title: "Data & Analytics",
    skills: ["EDA", "Data Cleaning", "ETL", "Data Modeling", "Pandas", "NumPy"],
  },
  {
    id: "visualization",
    title: "Visualization",
    skills: ["Power BI", "Tableau", "Microsoft Excel", "Matplotlib", "Seaborn"],
  },
  {
    id: "database",
    title: "Database",
    skills: ["MySQL"],
  },
  {
    id: "cloud",
    title: "Cloud & Tools",
    skills: [
      "AWS",
      "Git",
      "GitHub",
      "CI/CD Pipelines",
      "Streamlit",
      "VS Code",
      "Jupyter Notebook",
      "MySQL Workbench",
    ],
  },
];
