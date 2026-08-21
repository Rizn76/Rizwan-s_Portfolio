export interface Certification {
  id: string;
  title: string;
  issuer: string;
  category: string;
}

export const certifications: Certification[] = [
  {
    id: "datavalley",
    title: "AI/ML Engineer Internship Programme",
    issuer: "Datavalley",
    category: "AI / Machine Learning",
  },
  {
    id: "aviatrix",
    title: "Aviatrix Certified Engineer — Multi-Cloud Networking Associate",
    issuer: "Aviatrix",
    category: "Cloud Networking",
  },
  {
    id: "deloitte",
    title: "Data Analytics Virtual Experience",
    issuer: "Deloitte (Forage)",
    category: "Data Analytics",
  },
  {
    id: "accenture",
    title: "Data Analytics and Visualization Job Simulation",
    issuer: "Accenture (Forage)",
    category: "Data Analytics",
  },
  {
    id: "kapil",
    title: "Data Analytics",
    issuer: "Kapil IT Skill Hub",
    category: "Data Analytics",
  },
];
