export interface TechnicalSkill {
  name: string;
  level: number;
}

export interface ProfessionalSkill {
  name: string;
  icon: string;
}

export const skills = {
  technical: [
    { name: "React / Next.js", level: 95 },
    { name: "Python / Django", level: 92 },
    { name: "GenAI / RAG", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "MySQL / MongoDB / PostgreSQL", level: 90 },
    { name: "Tailwind CSS", level: 90 },
  ],
  design: [
    {
      name: "Git",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
    },
    {
      name: "GitHub",
      icon: "https://www.vectorlogo.zone/logos/github/github-icon.svg"
    },
    {
      name: "AWS",
      icon: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg"
    },
    {
      name: "Firebase",
      icon: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg"
    },
    {
      name: "Docker",
      icon: "https://www.vectorlogo.zone/logos/docker/docker-icon.svg"
    },
    {
      name: "Figma",
      icon: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg"
    },
    {
      name: "VS Code",
      icon: "https://cdn.worldvectorlogo.com/logos/visual-studio-code-1.svg"
    },
    {
      name: "Postman",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
    },
    {
      name: "AI Dev Tools",
      icon: "https://cdn.worldvectorlogo.com/logos/openai-2.svg"
    }
  ],
  soft: [
    "Technical Leadership & Team Management",
    "Corporate Training & Mentorship",
    "Client Stakeholder Management",
    "Project Delivery Optimization",
    "Workflow Architecture",
    "Strategic Problem Solving",
    "AI-Accelerated Workflow"
  ]
};