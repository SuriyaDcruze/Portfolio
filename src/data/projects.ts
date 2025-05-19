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
  image: "https://www.shutterstock.com/image-illustration/employee-self-service-tech-concepta-260nw-2622186021.jpg",
  category: "web",
  technologies: ["Django", "React", "MySQL", "Tailwind CSS"],
  liveLink: "https://ess-frontent.vercel.app/",
  repoLink: "https://github.com/SuriyaDcruze/new_ess_final"
},

 {
  id: 2,
  title: "Billing",
  description: "Interactive dashboard for financial data visualization with real-time updates and customizable widgets.",
  image: "https://media.istockphoto.com/id/2078490118/photo/businessman-using-laptop-to-online-payment-banking-and-online-shopping-financial-transaction.jpg?s=612x612&w=0&k=20&c=1x2G24ANsWxG4YW6ZaoeFPEzjmKFE4ZlohVQSwbjGj8=",
  category: "web",
  technologies: ["Django", "Python", "React", "Tailwind CSS", "MySQL"],
  liveLink: "/billing-in-progress",
  repoLink: "https://github.com/SuriyaDcruze/FRONTEND_BILLING"
},

{
  id: 3,
  title: "CRM",
  description: "A fully-fledged sales-oriented CRM system designed to streamline customer management, sales tracking, and communication.",
  image: "https://thumbs.dreamstime.com/b/real-estate-leads-traffic-sign-blue-sky-background-286858664.jpg",
  category: "web",
  technologies: ["Node.js", "React", "MongoDB", "Tailwind CSS"],
  liveLink: "#",
  repoLink: "https://github.com/SuriyaDcruze/CRM"
}

];
