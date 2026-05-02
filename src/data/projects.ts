export type ProjectCategory = "Vibe Coding" | "Data Science";

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
  },
];

// Longer/full project list for the Work tab.
// TODO Maisie: add your past work projects here.
export const WORK_PROJECTS: Project[] = [
  // {
  //   title: "Project name",
  //   category: "Data Science",
  //   description: "What you did, what tools, what impact.",
  //   link: "https://...",
  // },
];
