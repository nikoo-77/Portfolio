export const profile = {
  name: "Gelo Nikolai Lajera",
  firstName: "Gelo Nikolai",
  lastName: "Lajera",
  handle: "gelo-dev",
  title: "Computer Engineering Student",
  tagline: "Currently studying Computer Engineering at Cebu Institute of Technology - University.",
  subtitle: "Building logic, interfaces, and multi-tenant systems.",
  location: "Basak, Lapu-Lapu City, Cebu",
  email: "gelo.lajera@gmail.com",
  phone: "(+63) 976 644 3074",
  timezone: "Asia/Manila",
  summary:
    "Motivated and detail-oriented Computer Engineering student at Cebu Institute of Technology - University, with hands-on experience in C/C++ programming and web development. A critical thinker and fast learner with a strong foundation in programming logic, collaborative teamwork, and problem-solving.",
  greetings: [
    { lang: "Cebuano", native: "Kumusta", roman: "Kumusta" },
    { lang: "Filipino", native: "Kamusta", roman: "Kamusta" },
    { lang: "English", native: "Hello", roman: "Hello" },
  ],
  languages: ["Filipino (Native)", "English (Proficient)", "Bisaya (Native)"],
};

export const bootLines = [
  "BIOS v2.026 — CIT-U Engineering Lab",
  "CPU: ARM64-compatible brain ... OK",
  "RAM: curiosity + caffeine ... OK",
  "Loading modules: C++, React, Supabase",
  "Checking git status ... clean (probably)",
  "Mounting /dev/projects ... OK",
  "Starting portfolio.service ...",
  "DEPLOYMENT SYSTEM — ONLINE",
];

export const skills = {
  programming: [
    "C / C++",
    "HTML / CSS / JavaScript",
    "TypeScript",
  ],
  frameworks: [
    "Next.js (App Router)",
    "React",
    "Tailwind CSS / ShadCN UI",
  ],
  tools: ["Firebase", "Git", "VS Code", "Supabase", "PostgreSQL"],
  soft: [
    "Analytical thinking",
    "Team collaboration",
    "Self-directed learning",
  ],
};

export const projects = [
  {
    id: "PRJ_001",
    name: "COLLAPP",
    subtitle: "College Application Platform",
    year: "2025",
    stack: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Firebase"],
    description:
      "Full-stack platform for managing college applications across students, schools, and admins. Firebase Auth & Firestore for user management; Cloudinary for document uploads.",
    status: "ACTIVELY MAINTAINED",
  },
  {
    id: "PRJ_002",
    name: "DevFlow",
    subtitle: "Multi-Tenant Project Tracking",
    year: "2025",
    stack: ["Next.js 14", "Supabase", "PostgreSQL", "Tailwind CSS"],
    description:
      "Multi-tenant app with subdomain-based tenant routing and organization-scoped API routes. Row Level Security via Supabase to enforce strict data isolation per tenant.",
    status: "PRODUCTION READY",
  },
  {
    id: "PRJ_003",
    name: "Heatmap",
    subtitle: "Crisis Response and Workforce Safety Platform",
    year: "2026",
    role: "Full-stack Developer",
    stack: ["React", "TypeScript", "Supabase", "Leaflet", "Express"],
    description:
      "Full-stack crisis response and workforce safety platform for Innodata employees across the Philippines. Combines real-time employee GPS distribution and geospatial heatmapping across Luzon, Visayas, and Mindanao, a dynamic disaster simulation engine with adjustable threat radii, NOAH-style hazard zone mapping, and a manual outreach roll-call protocol with live GSM carrier monitoring and terminal-grade communication logs.",
    status: "PRODUCTION READY",
  },
];

export const education = [
  {
    school: "Cebu Institute of Technology - University",
    period: "2023 – Present",
    degree: "Bachelor of Science in Computer Engineering (BS CpE)",
  },
  {
    school: "University of Cebu Lapu-Lapu and Mandaue",
    period: "2018 – 2023",
    degree: "Junior High School to Senior High School",
  },
  {
    school: "Science and Technology Education Center",
    period: "2011 – 2018",
    degree: "Elementary to Junior High School",
  },
];

export const tickerItems = [
  "◆ AVAILABLE FOR INTERNSHIPS & COLLABORATION — 2026",
  "▶ NEXT.JS • REACT • TYPESCRIPT • SUPABASE",
  "◆ CIT-U COMPUTER ENGINEERING STUDENT",
  "▶ FULL-STACK • MULTI-TENANT SYSTEMS • RLS",
  "◆ LAPU-LAPU CITY, CEBU, PHILIPPINES",
  "▶ BUILDING REAL PROJECTS, NOT JUST TUTORIALS",
];
