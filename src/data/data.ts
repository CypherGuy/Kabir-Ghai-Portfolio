export const data = {
  // Personal Information
  name: "Kabir Ghai",
  title: "Software Engineer ● Backend Developer",
  roles: {
    primary: "Software Engineer",
    secondary: "Backend Developer",
  },
  summary:
    "I am n undergraduate backend engineer located in London, passionate about building innovative projects that help solve problems.",
  profileImage: "/me.jpeg", // Reference from the public folder

  // Navigation Links
  navigation: [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
    { name: "Resume", href: "#resume" },
  ],

  // Social Media Links
  social: {
    email: "mailto:kabir.ghai@icloud.com",
    github: "https://github.com/CypherGuy",
    linkedin: "https://www.linkedin.com/in/kabirsghai/",
    resume: "/resume.pdf",
  },

  // Skills Section with added images and descriptions
  skills: {
    Frontend: [
      {
        name: "JavaScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "TypeScript",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      },
      {
        name: "React",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
      {
        name: "Next.js",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      },
      {
        name: "Tailwind CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      },
      {
        name: "HTML",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
    ],
    Backend: [
      {
        name: "Python",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      {
        name: "Java",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      },
      {
        name: "NodeJS",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "PostgreSQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      },
      {
        name: "MySQL",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      },
      {
        name: "Docker",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      },
      {
        name: "Microsoft Azure",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      },
      {
        name: "NGINX",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg",
      },
    ],
    "Tools and Version Control": [
      {
        name: "Git",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "VS Code",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "IntelliJ IDEA",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg",
      },
      {
        name: "Vercel",
        image:
          "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
      },
    ],
  },

  // Projects Section with added GitHub links
  // liveLink is optional
  projects: [
    {
      title: "AoCode",
      description:
        "Advent of Code IDE designed to help efficiently solve the daily puzzles",
      image: "/AoCode.png",
      technologies: ["Python"],
      githubLink: "https://github.com/CypherGuy/AOCode",
      date: "12/2024 - 02/2025",
    },
    {
      title: "PantryPal",
      description:
        "Website to allow users to create recipes based on a series of filters and what's in their fridge.",
      image: "/PantryPal.png",
      technologies: [
        "Microsoft Azure",
        "Docker",
        "MySQL",
        "Streamlit",
        "Python",
        "LangChain",
        "Serper",
        "Github",
      ],
      githubLink: "https://github.com/CypherGuy/PantryPal",
      date: "02/2024 - 05/2024",
    },
  ],

  // Want To Section
  wantTo: {
    jobOpportunity: {
      title: "Offer a job opportunity?",
      content:
        "I am open to discussing potential job opportunities or collaborations. With experience in web development and software engineering, I am interested in roles that allow me to work on exciting and challenging projects. If you have a project or role in mind, feel free to reach out and let's discuss!",
    },
    connect: {
      title: "Connect?",
      content:
        "Networking is key in the tech industry, and I'm always looking to meet new people and expand my professional circle. Whether you're a fellow developer, designer, or entrepreneur, I'd love to chat and learn more about work. Let's grab a virtual coffee and see where the conversation takes us!",
    },
    buildSomething: {
      title: "Build something together?",
      content:
        "I have a passion for developing solutions to problems that people commonly might have. Whether it's a sleek app, or a new cutting-edge web app or anything in between, I'm always ready for a new challenge. Let's create something amazing together!",
    },
  },

  // Footer
  footer: {
    copyright: "© 2025-present Kabir Ghai. All Rights Reserved",
  },

  // Theme
  theme: {
    colors: {
      accent: "#FF1493", // Hot pink color used throughout the site
      background: {
        start: "#1a1f2e",
        end: "#2d1b2d",
      },
    },
  },
  // Experience Section
  experience: [
    {
      period: "09/2024 - Current",
      title: "Peer Tutor",
      company: "The University of Kent",
      location: "Canterbury, England",
      responsibilities: [
        "Assisted first-year students with course-related assignments and provided academic advice.",
        "Collaborated closely with University academic staff to ensure the best support for students.",
        "Developed strong communication and mentoring skills while helping students navigate their academic journey.",
      ],
      technologies: ["Java", "JUnit", "IntelliJ IDEA"],
    },
    {
      period: "08/2024 - 08/2024",
      title: "Software Engineer Intern",
      company: "Flagstone",
      location: "London, England",
      responsibilities: [
        "Shadowed a senior engineer to understand company workflows, communication, and project management processes.",
        "Engaged in discussions with the CEO to analyze company vision, challenges, and leadership strategies, applying insights to a final presentation.",
        "Initiated and led a collaborative Ad Campaign strategy with a theoretical £200,000 budget, presented to senior management and peers.",
        "Participated in training sessions across multiple departments, including Sales and DevOps, to develop a well-rounded industry perspective.",
      ],
      technologies: ["Python", "Microsoft Azure SQL", "Docker", "VSCode"],
    },
    {
      period: "10/2019 - 11/2023",
      title: "Center Supervisor",
      company: "Bright Young Things",
      location: "London, England",
      responsibilities: [
        "Taught Mathematics, English, and Science to students aged 4-16, alongside introductory Computer Science courses.",
        "Designed and led Computer Science Summer Schools, teaching Python and problem-solving to 20+ students, culminating in four completed projects.",
        "Planned and executed Computational Thinking workshops, focusing on logical reasoning, problem abstraction, and algorithmic solutions.",
        "Managed centre operations, including inventory, customer support, and administrative tasks, while assisting students with coursework and exam preparation.",
      ],
      technologies: ["Scratch", "Python", "Drag-and-drop programming"],
    },
    {
      period: "05/2021 - 06/2021",
      title: "Python Developer",
      company: "French Noodles",
      location: "Online",
      responsibilities: [
        "Developed a Python wrapper for an API made by the Lead Developer at French Noodles at the time, focusing on client feedback, RAD style.",
        "Enhanced code style and functionality based on client feedback for improved user experience.",
        "Implemented comprehensive unit tests and continuous integration processes to ensure high code quality and reliability.",
        "Utilised version control systems to manage code iterations effectively",
      ],
      technologies: ["Python", "Git", "RESTful API's"],
    },
  ],
};
