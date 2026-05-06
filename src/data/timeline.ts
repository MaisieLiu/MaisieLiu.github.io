export type TimelineKind = "education" | "work";

export interface TimelineItem {
  years: string;
  title: string;
  org: string;
  kind: TimelineKind;
  note?: string;
}

export const TIMELINE: TimelineItem[] = [
  { years: "2019–2021", title: "Associates in Biology", org: "Pierce College", kind: "education" },
  { years: "2020–2021", title: "Technical Solutions Engineer Intern", org: "Imonology Inc.", kind: "work" },
  { years: "2021",      title: "Academic Instructor", org: "MeikoSchool Tutoring Center", kind: "work" },
  { years: "2021–2022", title: "Exchange Program", org: "University of British Columbia", kind: "education",
    note: "CBEL program — taught kindergarten and first graders nutrition in fun, interactive ways." },
  { years: "2021–2022", title: "Team Lead", org: "Chatime Canada", kind: "work" },
  { years: "2022–2023", title: "Data & Business Intelligence Analyst", org: "Full-life Veterinary Hospital", kind: "work" },
  { years: "2022–2024", title: "B.A. in Food Systems, Nutrition and Health", org: "University of Washington", kind: "education",
    note: "Minor in Data Science and Business Administration."},
  { years: "2023–2025", title: "Operations Student Assistant", org: "UW Department of Chemistry", kind: "work" },
  { years: "2024–2026", title: "M.S. in Information Management", org: "University of Washington", kind: "education",
    note: "Specializing in Data Science, Business Intelligence, People Analytics & Program Management." },
  { years: "2025–2026", title: "Graduate Research Assistant", org: "UW People Analytics Insights Lab", kind: "work" },
  { years: "Next…",     title: "Waiting to come ✨", org: "", kind: "work" },
];
