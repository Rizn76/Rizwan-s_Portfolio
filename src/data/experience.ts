export interface ExperienceMetric {
  value: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  summary: string;
  highlights: string[];
  metrics: ExperienceMetric[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    id: "datavalley",
    role: "AI/ML Engineer Intern",
    company: "Datavalley",
    period: "Dec 2025 – Present",
    current: true,
    summary:
      "Building Machine Learning models, evaluating LLM prompt strategies, and automating AI-driven data workflows in an Agile cross-functional team environment.",
    highlights: [
      "Processed 20,000+ records using Pandas and NumPy, reducing missing values by 30% before model training.",
      "Built classification models using Logistic Regression and Random Forest achieving 85% validation accuracy.",
      "Developed and evaluated 15+ zero-shot, few-shot, and chain-of-thought prompt templates to improve structured information extraction from unstructured data.",
      "Evaluated model performance using Accuracy, Precision, Recall, and F1-score — achieved a 15% improvement in F1-score through feature engineering and model optimization.",
      "Automated Python-based ML workflows integrated with LLM APIs and automated reporting pipelines, reducing manual effort by 40%.",
      "Collaborated with a 4-member cross-functional team in an Agile environment to deliver AI-driven solutions for real-world business use cases.",
    ],
    metrics: [
      { value: "20,000+", label: "Records Processed" },
      { value: "85%", label: "Validation Accuracy" },
      { value: "15%", label: "F1-Score Improvement" },
      { value: "40%", label: "Manual Effort Reduced" },
      { value: "15+", label: "Prompt Templates Evaluated" },
    ],
    tags: ["Machine Learning", "Python", "LLM APIs", "Prompt Engineering", "Feature Engineering", "Agile"],
  },
  {
    id: "wipro",
    role: "Content Compliance Analyst",
    company: "Wipro",
    period: "Nov 2024 – Oct 2025",
    current: false,
    summary:
      "Reviewed and validated Google Ads at scale in a high-volume quality-focused environment, maintaining outstanding accuracy and contributing to process optimization initiatives.",
    highlights: [
      "Reviewed and validated 200+ Google Ads daily while maintaining 98% policy compliance accuracy and consistently meeting SLA requirements.",
      "Analyzed ad creatives and advertiser cases to identify policy violations and operational issues, using Excel to track performance trends and productivity metrics.",
      "Resolved advertiser issues through direct handling and timely escalation workflows, ensuring smooth operations and policy adherence.",
      "Achieved a 99% QA score and exceeded turnaround targets by 15%.",
      "Delivered data-driven insights supporting process optimization, reducing recurring operational issues by 22%.",
      "Consistently met 100% monthly performance KPIs across a high-volume data review environment.",
    ],
    metrics: [
      { value: "200+", label: "Ads Reviewed Daily" },
      { value: "98%", label: "Compliance Accuracy" },
      { value: "99%", label: "QA Score" },
      { value: "22%", label: "Reduction in Recurring Issues" },
    ],
    tags: ["Data Analysis", "Quality Assurance", "Policy Compliance", "Excel", "SLA Management"],
  },
];
