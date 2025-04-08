import backend from "../images/c.svg";
import web from "../images/w.svg";
import support from "../images/s.png";
import skill from "../images/r.svg";
import ports from "../images/my_port.png";
import { BsFacebook, BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";
export const projectData = [
  {
    id: 1,
    imgage:
      "https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "Gym Application Template",
    description: "Template design for a GYM Application showcasing GYM Programs and other services",
    technologies: ["React Js", "css", "html"],
    link_demo:'https://gym-app-1x5.pages.dev',
    link_github:'https://github.com/developer-home/gym-app-react.git',
    updated: "10/03/2023",
  },
  {
    id: 2,
    imgage:
      "https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxzZWFyY2h8OHx8ZGV2ZWxvcGVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60",
    title: "Smart API with Daraja",
    description: "Intergration of Mpesa Daraja API to a web, API simulation of B2C, Lipa na MPESA service, and STK Push",
    technologies: ["Java", "css", "html", "jquery"],
    link_demo:'404.html',
    link_github:'https://github.com/developer-home/Node_daraja_api.git',
    updated: "10/03/2023",
  },
  {
    id: 3,
    imgage: ports,
      //"https://images.unsplash.com/photo-1604964432806-254d07c11f32?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    title: "dev portfolio",
    description: "My portfolio design",
    technologies: ["React Js", "css", "html"],
    link_demo:'https://nicholaskiplimo.pages.dev',
    link_github:'https://github.com/developer-home/dev.portfolio.git',
    updated: "10/03/2023",
  },
];

export const skillData = [
  {
    id: 1,
    icon: web,
    skill: "Website Development",
    tech: ["html,css", "Angular", "React Js", "Javascript"],
  },
  {
    id: 2,
    icon: backend,
    skill: "Backend & APIs",
    tech: ["JAVA", "Spring Boot [API]", "MySQL", "Oracle Database"],
  },
  {
    id: 3,
    icon: support,
    skill: "Tools & Support",
    tech: [
      "Gerrit, Git, Github",
      "JIRA, Teams, PowerBI",
      "Docker,jenkins",
      "Postman, Swagger",
    ],
  },
  {
    id: 4,
    icon: skill,
    skill: "Soft Skills",
    tech: ["Team Work", "Good Communication skills", "Problem Solving", "Results Oriented"],
  },
];

export const experiences = [
  {
    title: "Software Engineer",
    company: "Turnkey Africa Ltd",
    duration: "2023 — Present",
    description:
        "I develop and customize TurnQuest ERP Application, focusing on database design, API development with Spring Boot, and enterprise reporting. " +
        "I support system optimization, user training, code reviews, and manage deployments through CI/CD pipelines while collaborating with teams for environment setup and maintenance",
    skills: ["PLSQL", "Oracle Database", "JAVA", "Spring Boot", 'Angular','Docker'],
  },
  {
    title: "Software and Application - [Support Engineer]",
    company: "ICT Authority",
    duration: "2022 — 2023",
    description:
        "I assist in the development, testing, and deployment of software applications, focusing on troubleshooting, database management, and API integration. I support system upgrades, server maintenance, and ensure smooth data exchange between applications. Additionally, " +
        "I conduct system testing, create documentation, and provide user training for new software implementations while staying up-to-date with emerging technologies.",
    skills: [
      "JavaScript",
      "React",
      "HTML & SCSS",
      "JAVA",
    ],
  },
];

export const socialData = [
  {
    id: 1,
    name: 'LinkedIn',
    icon: BsLinkedin({ style: { fill: "blue" } }),
    url: 'https://www.linkedin.com/in/nicholas-kiplimo-a4511a170/',
  },
  {
    id: 2,
    name: 'Github',
    icon: BsGithub({ style: { fill: "black" } }),
    url: 'https://github.com/nicholaskiplimo5',
  },
  {
    id: 3,
    name: 'Facebook',
    icon: BsFacebook({ style: { fill: "blue" } }),
    url: 'https://www.facebook.com/nicholas.kiplimo.908/',
  },
  {
    id: 4,
    name: 'Whatsapp',
    icon: BsWhatsapp({ style: { fill: "green" } }),
    url: 'https://api.whatsapp.com/send/?phone=0791980616&text=Hello there i am ..&type=phone_number&app_absent=0',
  },
];

export const handleSocialIcons = (soc) => {
  const found = socialData.find((item) => item.name === soc);
  if (found) {
    window.open(found.url, "_blank");
  } else {
    console.log("Invalid Social Icon:", soc);
  }
};