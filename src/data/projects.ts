export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  technologies: string[];
  liveLink: string;
  repoLink: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Employee Self Services",
    description: "A comprehensive employee self-service portal to manage attendance, leave, and personal information with a seamless user experience.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["Django", "React", "MySQL", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "https://github.com/SuriyaDcruze/new_ess_final"
  },

  {
    id: 2,
    title: "Billing Dashboard",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["Django", "Python", "React", "Tailwind CSS", "MySQL"],
    liveLink: "#",
    repoLink: "https://github.com/SuriyaDcruze/FRONTEND_BILLING"
  },

  {
    id: 3,
    title: "CRM System",
    description: "A fully-fledged sales-oriented CRM system designed to streamline customer management, sales tracking, and communication.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["Node.js", "React", "MongoDB", "Tailwind CSS"],
    liveLink: "#",
    repoLink: "https://github.com/SuriyaDcruze/CRM"
  },

  // New Projects
  {
    id: 4,
    title: "Weefly",
    description: "A premier flight booking web application for the African market, offering seamless search, comparison, and reservation of flights.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["React", "API Integration", "Travel Tech", "Tailwind CSS"],
    liveLink: "https://weefly.africa",
    repoLink: "#"
  },
  {
    id: 5,
    title: "Corporate Legal Hub",
    description: "An exclusive advocate forum connecting legal professionals, facilitating discussions, and building a strong legal community.",
    image: "https://images.unsplash.com/photo-1589994965851-a8f479c573a9?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["React", "Community Platform", "Real-time Chat", "Forum"],
    liveLink: "https://clh.app",
    repoLink: "#"
  },
  {
    id: 6,
    title: "Jurist Quest",
    description: "An innovative online moot court competition platform empowering law students to compete and practice virtually.",
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["React", "EdTech", "Virtual Events", "Platform"],
    liveLink: "https://app.juristquest.com",
    repoLink: "#"
  },
  {
    id: 7,
    title: "Advocate CRM",
    description: "A specialized Client Relationship Management tool tailored for advocates to manage client cases and communications efficiently. (In Progress)",
    image: "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["React", "Legal Tech", "CRM", "Dashboard"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 8,
    title: "Atomlift CRM",
    description: "A powerful CRM solution optimizing business workflows, automating tasks, and enhancing customer relationship strategies.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["React", "SaaS", "Automation", "Analytics"],
    liveLink: "https://admin.careelevators.in/",
    repoLink: "#"
  },
  {
    id: 9,
    title: "Ekhai",
    description: "A comprehensive business service platform and portfolio solution designed to showcase professional services and business capabilities.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    category: "web",
    technologies: ["React", "Business Portfolio", "Service Listing"],
    liveLink: "https://ekhai.org",
    repoLink: "#"
  }
];
