export interface SkillCategory {
  id: string;
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "ml",
    title: "Machine Learning",
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Feature Engineering",
      "Model Evaluation",
      "Scikit-learn",
    ],
  },
  {
    id: "genai",
    title: "Generative AI",
    skills: [
      "LLMs",
      "Retrieval-Augmented Generation",
      "LangChain",
      "LlamaIndex",
      "Prompt Engineering",
      "Semantic Search",
    ],
  },
  {
    id: "vector",
    title: "Vector Search",
    skills: ["FAISS", "Hugging Face Embeddings"],
  },
  {
    id: "programming",
    title: "Programming & Data",
    skills: ["Python", "SQL", "Pandas", "NumPy", "MySQL"],
  },
  {
    id: "analytics",
    title: "Data Analytics",
    skills: ["EDA", "Data Cleaning", "ETL", "Data Modeling", "KPI Definition"],
  },
  {
    id: "visualization",
    title: "Visualization",
    skills: ["Power BI", "Tableau", "Microsoft Excel", "Matplotlib", "Seaborn"],
  },
  {
    id: "cloud",
    title: "Cloud & Tools",
    skills: ["AWS", "Git", "GitHub", "VS Code", "Jupyter Notebook", "MySQL Workbench", "Streamlit"],
  },
];
