export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  cgpa: string;
}

export const education: EducationItem[] = [
  {
    id: "btech",
    degree: "B.Tech — Computer Science and Engineering",
    institution: "KL University (KL Deemed to be University)",
    location: "Hyderabad",
    period: "2019 – 2023",
    cgpa: "8.3",
  },
  {
    id: "intermediate",
    degree: "Intermediate",
    institution: "Narayana Junior College",
    location: "Telangana",
    period: "2017 – 2019",
    cgpa: "8.0",
  },
];
