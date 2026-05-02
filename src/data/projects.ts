export type ProjectCategory = "Vibe Coding" | "Data Science" | "Project Management";

export interface Project {
  title: string;
  category: ProjectCategory;
  description: string;
  link?: string;
}

// Recent projects shown on the Home tab.
export const RECENT_PROJECTS: Project[] = [
  {
    title: "Appointment Reservation System",
    category: "Vibe Coding",
    description:
      "Built with Vercel V0 for Full-life Veterinary Hospital — a two-sided online reservation site replacing phone-call bookings, reducing no-shows, and giving the team data to act on.",
  },
  {
    title: "Dear Diary",
    category: "Vibe Coding",
    description:
      "A diary + travel-diary app built with Lovable. Inspired by my own habit of writing thoughts and snapping photos to remember the moments — encouraging others to do the same.",
  },
  {
    title: "Identifying Healthcare Gap Groups with Clustering",
    category: "Data Science",
    description:
      "Built at the 2nd UW Datathon — a clustering model surfacing groups with limited healthcare access who are at risk of falling through the cracks.",
    link: "https://github.com/MaisieLiu/Datathon_TeamLCSM_Healthcare",
  },
];

// Longer/full project list for the Work tab.
export const WORK_PROJECTS: Project[] = [
  {
    title: "COVID Vaccination Dashboard in United States",
    category: "Data Science",
    description:
      "Built an interactive R ShinyApp dashboard using open-source CDC data to explore COVID-19 vaccination completion across the U.S. Cleaned 3,000+ data points across 57 variables and engineered dynamic visualizations (line graphs, bar charts) with filtering by state, demographic, and time — making complex public health data accessible to non-technical stakeholders.",
  },
  {
    title: "Creating a Sustainable UW Food System",
    category: "Project Management",
    description:
      "Coordinated on-site visits with UW food system stakeholders (Food Pantry, UW Farm, Student Housing) to map social, environmental, and economic gaps. Applied systems thinking and Venn diagram analysis on qualitative data to propose an innovative solution for a more sustainable campus food ecosystem.",
  },
  {
    title: "Identifying Healthcare Gap Groups with Clustering",
    category: "Data Science",
    description:
      "Built at the 2nd UW Datathon. Engineered features from 2,000+ records spanning 2019–2023 and architected an unsupervised clustering model to surface high-risk subgroups with limited healthcare access — delivering actionable segmentation to identify populations most likely to fall through gaps in the healthcare system.",
    link: "https://github.com/MaisieLiu/Datathon_TeamLCSM_Healthcare",
  },
  {
    title: "MarkerQuest: The Remnant Project",
    category: "Project Management",
    description:
      "As part of America's 250-year celebration, led an interactive web app connecting new historical site plaques to hidden neighborhood histories — starting in Tacoma as an MVP. Coordinated cross-functional teams, defined OKRs, and led AI chatbot training data collection to bring forgotten stories to life through technology.",
  },
];
