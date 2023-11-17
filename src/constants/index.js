import {
  backend,
  carrent,
  creator,
  css,
  docker,
  figma,
  git,
  html,
  javascript,
  jobit,
  holberton,
  mobile,
  mongodb,
  nodejs,
  reactjs,
  redux,
  starbucks,
  tailwind,
  ctc,
  threejs,
  tripguide,
  typescript,
  web,
  corecapital
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Graphic Designer",
    icon: backend,
  },
  {
    title: "Tech Teacher",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Hibou Corp",
    icon: corecapital,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - Current",
    points: [
      "Contributed in +10 projects for different companies, using technologies as Python and JavaScript.",
      "Provided support through video calls and emails, ensuring their needs throughout the project lifecycle."
    ],
  },
  {
    title: "Full Stack Developer",
    company_name: "Core Capital",
    icon: corecapital,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Mar 2023",
    points: [
      "Developed a complete project in less than 2 months with a stack never seen, reducing times in the operation process of the company and adding security to its system.",
      "Led and mentoring a 4 member team in different areas of the project as frontend, backend and database using SCRUM as agile methodology."
    ],
  },
  {
    title: "Tech Teacher",
    company_name: "Crack the Code",
    icon: ctc,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Mar 2023",
    points: [
      "Got a satisfaction rate greater than 95% by teaching web design and programming courses for children and teenagers.",
      "Developed educational programs, collaborating with new peers to help them improve their teaching techniques.",
    ],
  },
  {
    title: "Student Tutor",
    company_name: "Holberton",
    icon: holberton,
    iconBg: "#E6DEDD",
    date: "Sep 2022 - Feb 2023",
    points: [
      "Decreased student dropout rate by 48% through personalized teaching methods tailored to individual learning needs.",
      "Guided a group of 25 students in learning new programming languages, while creating audiovisual content for them.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { experiences, projects, services, technologies, testimonials };
