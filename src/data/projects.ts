// ---------------------------------------------------------------------------
// Image imports — put your files in src/assets/projectimages/
// Rename extracted images as follows:
//   image1.png  →  covid-dashboard-1.png
//   image2.png  →  covid-dashboard-2.png
//   image3.jpg  →  uw-food-system-1.jpg
//   image4.jpg  →  uw-food-system-2.jpg
//   image5.jpg  →  markerquest.jpg
// ---------------------------------------------------------------------------
import covidImg1 from "@/assets/projectimages/covid-dashboard-1.png";
import covidImg2 from "@/assets/projectimages/covid-dashboard-2.png";
import foodImg1 from "@/assets/projectimages/uw-food-system-1.jpg";
import foodImg2 from "@/assets/projectimages/uw-food-system-2.jpg";
import markerquestImg from "@/assets/projectimages/markerquest.jpg";
import genuineImg from "@/assets/projectimages/people-analytics.jpg";
import genuineImg2 from "@/assets/projectimages/people-analytics-2.png";
import appsystemImg from "@/assets/projectimages/appointment-system.png";
import appsystemImg2 from "@/assets/projectimages/appointment-system-2.png";
import appsystemImg3 from "@/assets/projectimages/appointment-system-3.png";
import clusterImg from "@/assets/projectimages/clustering.png"

export type ProjectCategory = "Vibe Coding" | "Data Science" | "Project Management";

export interface Project {
  id: string;           // used as the URL slug  /work/:id
  title: string;
  year: string;
  category: ProjectCategory;
  description: string;  // short blurb shown on the card
  bullets: string[];    // "My role" points shown on the detail page
  images?: string[];    // one or more screenshots / slides
  link?: string;        // external "learn more" URL
}

// ---------------------------------------------------------------------------
// Recent projects — shown on the Home tab (2–3 entries).
// ---------------------------------------------------------------------------
export const RECENT_PROJECTS: Project[] = [
  {
    id: "appointment-reservation",
    title: "Appointment Reservation System",
    year: "2026",
    category: "Vibe Coding",
    description:
      "Built with Vercel V0 for Full-life Veterinary Hospital — a two-sided online reservation site replacing phone-call bookings, reducing no-shows, and giving the team data to act on.",
    bullets: [
      "Gathered business requirements from Full-life Veterinary Hospital to understand booking pain points and staff workflow needs.",
      "Conducted market research on existing reservation systems to identify best practices and feature gaps.",
      "Vibe coded the full two-sided reservation system using Vercel V0, translating requirements into a working product.",
    ],
    images: [appsystemImg],
  },
  {
    id: "dear-diary",
    title: "Dear Diary",
    year: "2026",
    category: "Vibe Coding",
    description:
      "A diary + travel-diary app built with Lovable. Inspired by my own habit of writing thoughts and snapping photos to remember the moments — encouraging others to do the same.",
    bullets: [],
  },
  {
    id: "healthcare-clustering",
    title: "Identifying Healthcare Gap Groups with Clustering",
    year: "2025",
    category: "Data Science",
    description:
      "Built at the 2nd UW Datathon — a clustering model surfacing groups with limited healthcare access who are at risk of falling through the cracks.",
    bullets: [
      "Engineered features across different determinants (behavioral, costs, disability, etc.) from 2,000+ records spanning 2019–2023, transforming raw census-level data into model-ready inputs for unsupervised learning.",
      "Architected and tuned an unsupervised clustering model using Python to surface high-risk subgroups with limited healthcare access, delivering actionable segmentation that identified populations most likely to fall through gaps in the healthcare system.",
      "Executed end-to-end data cleaning and preprocessing pipeline on 2,000+ records, resolving inconsistencies across 5 years of longitudinal health data to ensure model integrity and reproducible results.",
    ],
    images: [clusterImg],
    link: "https://github.com/MaisieLiu/Datathon_TeamLCSM_Healthcare",
  },
  {
  id: "genuine-burnout",
  title: "GENUINE: Employee Burnout Analysis",
  year: "2026",
  category: "Data Science",
  description:
    "Analyzed employee burnout at a publicly traded bioinformatics company where over 1,000 employees work on a fully flexible work-from-anywhere schedule. Using survey data, we identified burnout hotspots across departments, tenure groups, and job titles to surface targeted recommendations for leadership.",
  bullets: [
    "Led end-to-end research project from planning through final presentation, coordinating deliverables across a team of five and ensuring on-time completion of all milestones.",
    "Conducted quantitative analysis using Python on employee burnout survey data, identifying that burnout rates reached 75% in Managed Care and 71.4% in Facilities while remaining concentrated rather than widespread across the organization.",
    "Synthesized quantitative and qualitative findings into actionable organizational recommendations, including targeted interventions for hotspot departments and improved reorg communication protocols.",
  ],
  images: [genuineImg2],
  link: "https://github.com/MaisieLiu/GENuine_peopleanalytics_burnouts",
  },
];

// ---------------------------------------------------------------------------
// Full project list — shown on the Work tab, each card links to /work/:id
// ---------------------------------------------------------------------------
export const WORK_PROJECTS: Project[] = [
  {
    id: "markerquest",
    title: "MarkerQuest: The Remnant Project",
    year: "2026",
    category: "Project Management",
    description:
      "As part of America's 250-year celebration, led development of an interactive web app connecting new historical site plaques to hidden neighborhood histories — starting in Tacoma as an MVP.",
    bullets: [
      "Coordinated cross-functional scheduling across team members, teaching assistants, and project sponsors to ensure on-time deliverable completion and consistent OKR achievement throughout the project lifecycle.",
      "Defined project OKRs and architected a phased roadmap aligning team milestones to stakeholder expectations, driving structured execution from kickoff to delivery.",
      "Led end-to-end data collection and validation efforts for AI chatbot training, enforcing data governance standards across 100% of project inputs to guarantee accuracy, accountability, and up-to-date historical qualitative data.",
    ],
    images: [markerquestImg],
  },
  {
  id: "genuine-burnout",
  title: "GENUINE: Employee Burnout Analysis",
  year: "2026",
  category: "Data Science",
  description:
    "Analyzed employee burnout at a publicly traded bioinformatics company where over 1,000 employees work on a fully flexible work-from-anywhere schedule. Using survey data, we identified burnout hotspots across departments, tenure groups, and job titles to surface targeted recommendations for leadership.",
  bullets: [
    "Led end-to-end research project from planning through final presentation, coordinating deliverables across a team of five and ensuring on-time completion of all milestones.",
    "Conducted quantitative analysis using Python on employee burnout survey data, identifying that burnout rates reached 75% in Managed Care and 71.4% in Facilities while remaining concentrated rather than widespread across the organization.",
    "Synthesized quantitative and qualitative findings into actionable organizational recommendations, including targeted interventions for hotspot departments and improved reorg communication protocols.",
  ],
  images: [genuineImg],
  link: "https://github.com/MaisieLiu/GENuine_peopleanalytics_burnouts",
  },
  {
    id: "appointment-reservation",
    title: "Appointment Reservation System",
    year: "2026",
    category: "Vibe Coding",
    description:
      "Built with Vercel V0 for Full-life Veterinary Hospital — a two-sided online reservation site replacing phone-call bookings, reducing no-shows, and giving the team data to act on.",
    bullets: [
      "Gathered business requirements from Full-life Veterinary Hospital to understand booking pain points and staff workflow needs.",
      "Conducted market research on existing reservation systems to identify best practices and feature gaps.",
      "Vibe coded the full two-sided reservation system using Vercel V0, translating requirements into a working product.",
    ],
    images: [appsystemImg, appsystemImg2, appsystemImg3],
  },
  {
    id: "dear-diary",
    title: "Dear Diary",
    year: "2026",
    category: "Vibe Coding",
    description:
      "A diary + travel-diary app built with Lovable. Inspired by my own habit of writing thoughts and snapping photos to remember the moments — encouraging others to do the same.",
    bullets: [],
  },
  {
    id: "healthcare-clustering",
    title: "Identifying Healthcare Gap Groups with Clustering",
    year: "2025",
    category: "Data Science",
    description:
      "Built at the 2nd UW Datathon — a clustering model surfacing groups with limited healthcare access who are at risk of falling through the cracks.",
    bullets: [
      "Engineered features across different determinants (behavioral, costs, disability, etc.) from 2,000+ records spanning 2019–2023, transforming raw census-level data into model-ready inputs for unsupervised learning.",
      "Architected and tuned an unsupervised clustering model using Python to surface high-risk subgroups with limited healthcare access, delivering actionable segmentation that identified populations most likely to fall through gaps in the healthcare system.",
      "Executed end-to-end data cleaning and preprocessing pipeline on 2,000+ records, resolving inconsistencies across 5 years of longitudinal health data to ensure model integrity and reproducible results.",
    ],
    images: [clusterImg],
    link: "https://github.com/MaisieLiu/Datathon_TeamLCSM_Healthcare",
  },
  {
    id: "covid-dashboard",
    title: "COVID Vaccination Dashboard in United States",
    year: "2023",
    category: "Data Science",
    description:
      "An interactive R ShinyApp dashboard exploring COVID-19 vaccination completion across the U.S., built on open-source CDC data with dynamic filtering by state, demographic, and time.",
    bullets: [
      "Cleaned and standardized 3,000+ data points across 57 variables from CDC open-source datasets, resolving inconsistencies to ensure accurate downstream analysis.",
      "Engineered interactive visualizations in R (Shiny, ggplot2) including line graphs and bar charts with dynamic filtering by state, demographic, and time dimension, enabling real-time exploration of vaccination completion trends.",
      "Designed and implemented the end-to-end UI layout in R ShinyApp, building one- and two-dimensional analysis views that made complex CDC data accessible to non-technical stakeholders.",
    ],
    images: [covidImg1, covidImg2],
    link: "https://github.com/MaisieLiu/DataVisualization_COVIDVaccination",
  },
  {
    id: "uw-food-system",
    title: "Creating a Sustainable UW Food System",
    year: "2023",
    category: "Project Management",
    description:
      "Coordinated on-site visits with UW food system stakeholders to map social, environmental, and economic gaps, and proposed an innovative solution for a more sustainable campus food ecosystem.",
    bullets: [
      "Coordinated meetings, on-site visits, and distributed tasks across team members spanning multiple UW food system stakeholders (Food Pantry, Student Housing & Food Service, UW Farm).",
      "Analyzed qualitative data by applying a systems thinking method through modeling the food system on the UW Seattle campus and utilizing Venn diagrams to find common problems for each stakeholder.",
      "Proposed an innovative solution that delivers better experience and sustainability for the UW food system.",
    ],
    images: [foodImg1, foodImg2],
  },
];
