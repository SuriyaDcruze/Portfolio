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
    { name: "Python / Django", level: 97 },
    { name: "React / Next.js", level: 95 },
    { name: "GenAI / RAG", level: 90 },
    { name: "LLM Integration (OpenAI, Claude, Gemini)", level: 88 },
    { name: "Prompt Engineering", level: 90 },
    { name: "LangChain / AI Agents", level: 85 },
    { name: "Vector Databases (Pinecone, ChromaDB)", level: 82 },
    { name: "Machine Learning / NLP", level: 78 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 85 },
    { name: "MySQL / MongoDB / PostgreSQL", level: 90 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Automation Testing (Selenium / Playwright)", level: 88 },
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
    },
    {
      name: "Python",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/python/python-original.svg"
    },
    {
      name: "Django",
      icon: "https://cdn.simpleicons.org/django/44B78B"
    },
    {
      name: "React",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/react/react-original.svg"
    },
    {
      name: "FastAPI",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/fastapi/fastapi-original.svg"
    },
    {
      name: "PostgreSQL",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/postgresql/postgresql-original.svg"
    },
    {
      name: "Redis",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/redis/redis-original.svg"
    },
    {
      name: "Nginx",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/nginx/nginx-original.svg"
    },
    {
      name: "Kubernetes",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/kubernetes/kubernetes-plain.svg"
    },
    {
      name: "Selenium",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/selenium/selenium-original.svg"
    },
    {
      name: "Jira",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/jira/jira-original.svg"
    },
    {
      name: "ClickUp",
      icon: "https://cdn.simpleicons.org/clickup"
    },
    {
      name: "Slack",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons/slack/slack-original.svg"
    },
    {
      name: "Claude AI",
      icon: "https://cdn.simpleicons.org/anthropic/D97757"
    },
    {
      name: "Hugging Face",
      icon: "https://cdn.simpleicons.org/huggingface"
    },
    {
      name: "LangChain",
      icon: "https://cdn.simpleicons.org/langchain/2E8B7A"
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