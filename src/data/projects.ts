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
    title: "Modern E-commerce Platform",
    description: "A fully responsive e-commerce website with product filtering, cart functionality, and secure checkout.",
    image: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "web",
    technologies: ["React", "Node.js", "Stripe"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
    image: "https://images.pexels.com/photos/7567441/pexels-photo-7567441.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "web",
    technologies: ["React", "D3.js", "Firebase"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 3,
    title: "Task Management App",
    description: "A productivity application for managing tasks, projects, and team collaboration with real-time updates.",
    image: "https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "mobile",
    technologies: ["React Native", "Redux", "Firebase"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 4,
    title: "Health & Fitness Tracker",
    description: "Mobile application for tracking workouts, nutrition, and health metrics with personalized insights.",
    image: "https://images.pexels.com/photos/4498362/pexels-photo-4498362.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "mobile",
    technologies: ["Flutter", "Firebase", "GraphQL"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 5,
    title: "Restaurant Booking System",
    description: "Complete booking system for restaurants with table management, reservations, and customer notifications.",
    image: "https://images.pexels.com/photos/67468/pexels-photo-67468.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "#",
    repoLink: "#"
  },
  {
    id: 6,
    title: "Travel Experience Platform",
    description: "Platform for discovering, booking, and sharing unique travel experiences with interactive maps.",
    image: "https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    category: "web",
    technologies: ["React", "Node.js", "MongoDB"],
    liveLink: "#",
    repoLink: "#"
  }
];