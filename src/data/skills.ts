export interface TechnicalSkill {
  name: string;
  level: number;
}

export interface DesignSkill {
  name: string;
  icon: string;
}

export const skills = {
  technical: [
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "UI/UX Design", level: 85 },
    { name: "Responsive Design", level: 92 },
    { name: "GraphQL", level: 75 }
  ],
  design: [
    { 
      name: "Figma", 
      icon: "https://cdn.worldvectorlogo.com/logos/figma-1.svg" 
    },
    { 
      name: "Adobe XD", 
      icon: "https://cdn.worldvectorlogo.com/logos/adobe-xd-1.svg" 
    },
    { 
      name: "Photoshop", 
      icon: "https://cdn.worldvectorlogo.com/logos/photoshop-cc-4.svg" 
    },
    { 
      name: "Illustrator", 
      icon: "https://cdn.worldvectorlogo.com/logos/adobe-illustrator-cc-2019.svg" 
    },
    { 
      name: "Sketch", 
      icon: "https://cdn.worldvectorlogo.com/logos/sketch-2.svg" 
    },
    { 
      name: "InVision", 
      icon: "https://cdn.worldvectorlogo.com/logos/invision.svg" 
    }
  ],
  soft: [
    "Problem Solving",
    "Communication",
    "Teamwork",
    "Time Management",
    "Adaptability",
    "Creativity",
    "Critical Thinking",
    "Leadership",
    "Attention to Detail"
  ]
};