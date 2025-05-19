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
    { name: "React", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "HTML/CSS", level: 88 },
    { name: "Tailwind Css", level: 80 },
    { name: "UI/UX Design", level: 85 },
    
    
  ],
  design: [
    { 
      name: "Python", 
      icon: "https://static.cdnlogo.com/logos/p/3/python.svg" 
    },
    { 
      name: "Java", 
      icon: "https://static.cdnlogo.com/logos/j/2/java.svg" 
    },
    { 
      name: "Node", 
      icon: "https://static.cdnlogo.com/logos/n/94/nodejs-icon.svg" 
    },
    { 
      name: "MySQL", 
      icon: "https://static.cdnlogo.com/logos/m/78/mysql.svg" 
    },
    { 
      name: "Mongo DB", 
      icon: "https://static.cdnlogo.com/logos/m/30/mongodb-icon.svg" 
    },
    // { 
    //   name: "InVision", 
    //   icon: "https://cdn.worldvectorlogo.com/logos/invision.svg" 
    // }
  ],
  soft: [
    "Team Lead",
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