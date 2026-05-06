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
import gardenImg from "@/assets/projectimages/garden.jpg";
import foodwasteImg1 from "@/assets/projectimages/food-waste-1.jpg";
import foodwasteImg2 from "@/assets/projectimages/food-waste-2.jpg";
import gbiImg from "@/assets/projectimages/GBI-BI.png";
import gbiImg2 from "@/assets/projectimages/GBI-BI-2.png";
import boxoffImg from "@/assets/projectimages/boxoffice.jpg"
import offCampusImg1 from "@/assets/projectimages/off-campus-housing-1.png";
import offCampusImg2 from "@/assets/projectimages/off-campus-housing-2.png";

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
      "As part of America's 250-year celebration, led development of an interactive web app connecting new historical site plaques to hidden neighborhood histories. Starting in Tacoma as an MVP, expanding Nationwide.",
    bullets: [
      "Coordinated cross-functional scheduling across team members, teaching assistants, and project sponsors to ensure on-time deliverable completion and consistent OKR achievement throughout the project lifecycle.",
      "Defined project OKRs and architected a phased roadmap aligning team milestones to stakeholder expectations, driving structured execution from kickoff to delivery.",
      "Led end-to-end data collection and validation efforts for AI chatbot training, enforcing data governance standards across 100% of project inputs to guarantee accuracy, accountability, and up-to-date historical qualitative data.",
    ],
    images: [markerquestImg],
    link: "https://remnant-project.lovable.app",
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
  id: "gbi-business-intelligence",
  title: "Global Bike Inc. Business Intelligence Platform",
  year: "2026",
  category: "Data Science",
  description:
    "Business Intelligence project where I utilize Power BI and advanced Excel functions to analyze sales data across countries and cities, predict promotion & price, and build a Sales Dashboard for Global Bike Inc.",
  bullets: [
    "Improved forecast accuracy for discount strategies by developing predictive models on GBI transaction data analyzing sales, revenue, and distribution patterns across global markets using advanced Excel and Data Solver.",
    "Engineered data warehouse infrastructure in Snowflake, designing dimensional schemas and fact tables that consolidated sales, inventory, and distribution data for enterprise-scale analytics.",
    "Architected semantic models in Power BI using DAX and Power Query to transform raw transaction data into executive-ready business dashboards, enabling data-driven decision-making for sales and operations teams.",
    "Analyzed 10GB of customer sentiment data by extracting and processing Amazon reviews using MongoDB Atlas, calculating aggregate product ratings and identifying quality trends across GBI product lines.",
  ],
  images: [gbiImg, gbiImg2],
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
    id: "uw-roommate-hunt",
    title: "From Scrolling to Settling: Fixing the Roommate Hunt at UW Seattle",
    year: "2025",
    category: "Data Science",
    description: "Researched how UW Seattle international students find off-campus roommates, uncovering visibility gaps in the UW Off-Campus Housing Marketplace through mixed-methods research combining qualitative interviews and web-based quantitative analysis.",
    bullets: [
      "Conducted qualitative interviews with 8 international students at UW, purposefully selected for diversity, to understand challenges in finding off-campus roommates and navigating available platforms.",
      "Led quantitative data collection through web analysis and Google search experiments across 5 keywords, mapping search ranking scores and user navigation paths to assess marketplace visibility.",
      "Applied mixed-methods analysis combining thematic analysis via ATLAS (deductive and inductive coding) with search ranking scoring and flowcharts to surface actionable findings.",
      "Proposed two key recommendations: augmenting roommate-matching filters on the UW Off-Campus Housing Marketplace and improving platform visibility to better serve international students.",
    ],
    images: [offCampusImg1, offCampusImg2],
  },
  {
    id: "box-office-ml",
    title: "Box Office Forecasting 🍿🎞️",
    year: "2025",
    category: "Data Science",
    description:
      "Built several different machine learning models using Python Scikit-Learn on IMDb dataset, taking in different variables to predict future movie revenue.",
    bullets: [
      "Engineered predictive models using Python (scikit-learn) on IMDb dataset with 1500+ records, comparing kNN, Random Forest, Decision Trees, and Logistic Regression; ;  used R-squared and MSE to validate results.",
      "Performed feature engineering (categorical encoding, standardization, interaction terms) and visualized model insights using Seaborn/Matplotlib, identifying budget, genre, and release season as top revenue drivers.",
    ],
    images: [boxoffImg],
    link: "https://github.com/MaisieLiu/Box-Office-Forecasting.git",
  },
  {
    id: "global-foodwaste",
    title: "Global Analysis of Food Waste Patterns",
    year: "2024",
    category: "Data Science",
    description:
      "An analysis on global food supply and the relationship with food waste in over 100 countries, identifying nutritional gaps between countries, continents, GDP, etc.",
    bullets: [
      "Engineered end-to-end ETL pipelines in R to process and clean FAO datasets containing 1M+ food consumption records, ensuring data consistency through standardization and outlier detection.",
      "Deployed 5+ Tableau dashboards visualizing food waste trends across 100+ countries and modeled supply chain inefficiencies, guiding researchers to identify under-served areas and waste reduction opportunities of up to 12%.",
    ],
    images: [foodwasteImg1, foodwasteImg2],
  },
  {
    id: "dannywoo-garden",
    title: "Creating a Seamless Experience for Danny Woo Garden Volunteers",
    year: "2024",
    category: "Project Management",
    description:
      "Creating a solution that decreases conflicts between stakeholders and volunteers. Understanding the concerns from multiple sources and reimagining the volunteer onboarding experience",
    bullets: [
      "Conducted user research with 12 gardeners and 48 volunteers, using surveys, interviews, and a basic SWOT analysis to understand user pain points and translate findings into clear user stories and problem statements.",
      "Designed and delivered a multilingual weed-identification tool, including an interactive map and visual guides that documented 15 weed species and improved first-time volunteer accuracy by ~35%, supporting a more user-friendly onboarding process.",
      "Supported cross-functional execution by drafting lightweight PRDs, contributing to feature prioritization, and coordinating with community partners, resulting in 90% volunteer adoption and reducing onboarding time by 25 minutes per session.",
    ],
    images: [gardenImg],
    link: "https://www.google.com/maps/d/u/0/viewer?mid=1viBHG1hawn6B8Mc7lBcIoz9Ki0KWp20&ll=47.600434600633655%2C-122.32510939999999&z=20",
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
