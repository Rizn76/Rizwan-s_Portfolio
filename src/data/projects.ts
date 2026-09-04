export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectChallenge {
  challenge: string;
  solution: string;
}

export interface Project {
  slug: string;
  number: string;
  title: string;
  category: string;
  shortDescription: string;
  fullDescription: string;
  techStack: string[];
  metrics: ProjectMetric[];
  problem: string;
  solution: string;
  architecture: string[];
  features: string[];
  challenges: ProjectChallenge[];
  results: string[];
  githubUrl: string; // PLACEHOLDER — replace with your actual GitHub repo URL
  demoUrl: string;   // PLACEHOLDER — replace with your live demo URL or remove
  imageUrl: string;  // PLACEHOLDER — replace with your actual screenshot path
  featured: boolean;
}

export const projects: Project[] = [
  {
    slug: "rag-powered-pdf-question-answering-system",
    number: "01",
    title: "RAG-Powered PDF Question Answering System",
    category: "Generative AI · RAG · LLM",
    shortDescription:
      "Built a Retrieval-Augmented Generation (RAG) application for querying PDF documents using LangChain, FAISS, HuggingFace embeddings, and Groq-hosted OpenAI GPT-OSS 20B. The system provides grounded answers with source and page citations and supports multiple PDF documents.",
    fullDescription:
      "Built a production-ready RAG pipeline using LangChain, FAISS, HuggingFace embeddings, and Groq-hosted OpenAI GPT-OSS 20B. The system processes multi-document PDF uploads, creates a FAISS vector index from semantic embeddings, retrieves relevant context via similarity search, and generates grounded answers with source filename and page citations — all through a Streamlit interface deployed to Streamlit Cloud.",
    techStack: [
      "Python",
      "Streamlit",
      "LangChain",
      "FAISS",
      "HuggingFace",
      "Groq",
      "GPT-OSS 20B",
      "RAG",
    ],
    metrics: [
      { value: "Multi-PDF", label: "Document Support" },
      { value: "FAISS", label: "Vector Similarity Search" },
      { value: "Groq", label: "LLM Inference Engine" },
      { value: "↓ Hallucinations", label: "Via Retrieval Grounding" },
    ],
    problem:
      "Large PDF documents are difficult to query efficiently. Users need to manually read through pages to find relevant information, and generic LLMs produce hallucinated answers when queried about specific documents without grounded context.",
    solution:
      "Implemented a RAG architecture that grounds LLM responses in retrieved document content. PDFs are chunked, embedded into a FAISS vector store, and queried via similarity search — ensuring the Groq-hosted GPT-OSS 20B model only generates answers based on verified, retrieved context from the uploaded documents, with source filename and page citations for every response.",
    architecture: [
      "PDF Ingestion — multi-PDF upload and text extraction via LangChain PDF loaders.",
      "Document Chunking — recursive text splitting with configurable chunk size and overlap.",
      "Semantic Embeddings — HuggingFace sentence-transformers model generates dense vector representations.",
      "FAISS Vector Store — indexes all chunk embeddings for fast approximate nearest-neighbor search.",
      "Similarity Search — retrieves the top-k most semantically relevant chunks per query.",
      "Prompt Engineering — constructs a grounded context prompt combining retrieved chunks and user question.",
      "Groq + GPT-OSS 20B — generates context-aware, hallucination-reduced responses via Groq inference API.",
      "Streamlit UI — interactive interface deployed to Streamlit Cloud with real-time response and source citations.",
    ],
    features: [
      "PDF document upload — multi-PDF support within a single session.",
      "Question answering over PDF content via natural language queries.",
      "Retrieval-Augmented Generation (RAG) pipeline grounding all answers in document context.",
      "HuggingFace embeddings for high-quality semantic vector representations.",
      "FAISS similarity search for fast retrieval of the most relevant document chunks.",
      "Groq-hosted OpenAI GPT-OSS 20B for fast, context-driven answer generation.",
      "Grounded answers — model responses constrained to retrieved document content only.",
      "Source filename and page citations provided with every answer.",
      "Multiple PDF support — query across several documents simultaneously.",
      "Streamlit deployment — live on Streamlit Cloud.",
    ],
    challenges: [
      {
        challenge: "Preventing LLM hallucinations when document context is insufficient.",
        solution:
          "Implemented strict prompt constraints instructing the model to acknowledge when context is insufficient, rather than generating unsupported answers.",
      },
      {
        challenge: "Maintaining semantic coherence across document chunk boundaries.",
        solution:
          "Applied overlapping chunking strategy to preserve context continuity at chunk edges, reducing answer fragmentation.",
      },
      {
        challenge: "Optimizing retrieval relevance for diverse query types.",
        solution:
          "Tuned chunk size, overlap, and top-k retrieval parameters through experimentation to balance precision and recall across varied query styles.",
      },
    ],
    results: [
      "Built a fully functional end-to-end RAG pipeline supporting multi-document PDF question answering.",
      "Reduced LLM hallucinations through retrieval grounding and prompt engineering.",
      "Delivered source filename and page citations with every generated answer.",
      "Deployed a live Streamlit application accessible at rag-powered-pdf-app-system.streamlit.app.",
      "Implemented context-preserving chunking strategy improving answer coherence across chunk boundaries.",
    ],
    githubUrl: "https://github.com/Rizn76/RAG-Powered-PDF-QA-System",
    demoUrl: "https://rag-powered-pdf-app-system.streamlit.app/",
    imageUrl: "/images/project-rag.png",
    featured: true,
  },
  {
    slug: "ai-smart-attendance-tracking-system",
    number: "02",
    title: "AI-Smart Attendance Tracking System",
    category: "Computer Vision · AI Application",
    shortDescription:
      "An AI-powered attendance platform that automates face-based attendance tracking, reporting, and analytics — designed for educational and organizational environments.",
    fullDescription:
      "Built an end-to-end AI-powered attendance platform using OpenCV for real-time face recognition, SQLite for persistent data storage, and Streamlit for an interactive multi-role interface. The system automates attendance marking, generates AI-powered reports via LLM API integration, and provides dedicated dashboards for Teachers, Students, and Admins.",
    techStack: [
      "Python",
      "OpenCV",
      "Streamlit",
      "SQLite",
      "Pandas",
      "NumPy",
      "LLM API (OpenAI)",
      "Git",
      "GitHub",
    ],
    metrics: [
      { value: "95%+", label: "Face Recognition Accuracy" },
      { value: "100+", label: "Registered Users Supported" },
      { value: "90%", label: "Reduction in Manual Reporting" },
      { value: "3", label: "Role-Based Dashboards" },
    ],
    problem:
      "Manual attendance systems in educational and organizational settings are time-consuming, error-prone, and generate little actionable data. Institutions needed an automated solution that could reliably recognize individuals, maintain accurate records, and surface insights without manual effort.",
    solution:
      "Engineered a face recognition-based attendance system that automatically identifies registered users via webcam, records attendance in a SQLite database, and uses LLM APIs to generate natural language summaries and analytics reports — eliminating manual data entry and report writing.",
    architecture: [
      "Face Registration Module — captures and stores face encodings per user using OpenCV.",
      "Real-Time Recognition Engine — matches live webcam frames against stored encodings with 95%+ accuracy.",
      "SQLite Database Layer — persists user profiles, attendance records, and session history.",
      "Multi-Role Streamlit Interface — three distinct dashboards for Teacher, Student, and Admin roles.",
      "LLM Reporting Layer — sends attendance data to OpenAI API and returns formatted summaries and analytics.",
      "CSV Export Module — enables data export for external analysis and record keeping.",
    ],
    features: [
      "Real-time face detection and recognition via webcam using OpenCV.",
      "Automated attendance marking with timestamp and session recording.",
      "Teacher Dashboard: view class attendance, mark overrides, generate reports.",
      "Student Dashboard: view personal attendance history and statistics.",
      "Admin Dashboard: manage users, view system-wide analytics.",
      "LLM-powered attendance summary and report generation (90% reduction in manual effort).",
      "CSV export for reporting and downstream analysis.",
      "Support for 100+ registered users.",
    ],
    challenges: [
      {
        challenge: "Maintaining face recognition accuracy under varying lighting conditions.",
        solution:
          "Applied image preprocessing (grayscale normalization, histogram equalization) before encoding, significantly reducing false negatives.",
      },
      {
        challenge: "Deployment and dependency compatibility issues across environments.",
        solution:
          "Resolved by pinning exact package versions and creating an environment setup guide, improving deployment reliability.",
      },
      {
        challenge: "Structuring meaningful LLM-generated reports from raw attendance data.",
        solution:
          "Designed structured prompt templates that feed formatted attendance summaries to the LLM, producing consistent and actionable outputs.",
      },
    ],
    results: [
      "Achieved 95%+ face recognition accuracy across 100+ registered users.",
      "Reduced manual attendance reporting effort by 90% via LLM-powered report generation.",
      "Delivered three fully functional role-based dashboards (Teacher, Student, Admin).",
      "Improved deployment stability by resolving dependency and environment issues.",
      "Built a fully operational system with CSV export and analytics tracking.",
    ],
    githubUrl: "https://github.com/Rizn76/ai-attendance-system",
    demoUrl: "",
    imageUrl: "/images/project-attendance.png",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
