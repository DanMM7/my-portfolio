import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
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
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "BI Analyst",
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
    name: "Python",
    icon: typescript,
  },
  {
    name: "Vue JS",
    icon: reactjs,
  },
  {
    name: "FastAPI",
    icon: redux,
  },
  {
    name: "SCSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Postgres DB",
    icon: mongodb,
  },
  {
    name: "SQL",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "GitHub",
    icon: figma,
  },
  {
    name: "Power BI",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Geo-spatial Software Developer",
    company_name: "Giscoe",
    icon: starbucks,
    iconBg: "#383E56",
    date: "Nov 2022 - Aug 2023",
    points: [
      "Develop, test, debug and maintain an array of custom web-based GIS applications, tools, and supporting web services using standard software life cycle processes.",
      "Support the infrastructure by maintaining and developing new capabilities in Microsoft .Net.",
      "Reviewing data to identify errors and inconsistencies in order to correct them before further analysis is performed.",
      "Implementing new technologies to improve efficiency in workflow processes.",
      "Providing support for software and hardware systems that are used by other departments within an organization.",
      "Designing custom applications using GIS technology to meet business needs.",
      "Using statistical analysis tools to process and analyze data in order to identify patterns or trends.",
      "Developing for web and mobile application development using JavaScript, HTML5, CSS, SQL, Python for the Esri ArcGIS platform.",
      "Provide support, troubleshooting, modifications, enhancements, and maintenance for existing GIS applications, scripts, tools, and web services.",
    ],
  },
  {
    title: "Oracle DBA support",
    company_name: "Ulwembu Business Services",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Mar 2022 – Aug 2022",
    points: [
      "Air Traffic and Navigation Services (ATNS) Oracle E-Business Suite (EBS) support.",
      "Air Traffic and Navigation Services (ATNS) Oracle Databases support.",
      "Technical support Project Management Office (PMO).",
      "Provide hands on technical and functional end user support.",
      "Assisting business user during CRPs/SITs/UATs.",
      "Lead the configuration/setup, testing, training, implementation and support of Oracle application modules.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Travel Now Agency",
    icon: shopify,
    iconBg: "#383E56",
    date: "Feb 2022 – Apr 2022",
    points: [
      "Conceived and designed three critical software programs needed for financial tracking, human resource and reporting.",
      "Optimized user effectiveness by creating a detailed feedback queue for users to discuss functionality, convenience, and effectiveness.",
      "Researched best practices to implement within the software development team.",
      "Helped write code for a website using HTML, CSS and Javascript.",
      "Presented to management an end-of-term demonstration on valuable software developments that were in the works.",

    ],
  },
  {
    title: "Power BI Developer",
    company_name: "Zakheni ICT",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2020 - Aug 2020",
    points: [
      "Microsoft Power BI technical support for the Phambili Waste Management existing application.",
      "Developed reports for business analysis, with knowledge of SQL Server development, open source languages (Python), and visualization tool (Microsoft Power BI).",
      "Create technical documentation of report logic and processes.",
      "Worked with business partners to understand business objectives and develop value-added reporting and provide ad-hoc data extracts and analysis.",
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

export { services, technologies, experiences, testimonials, projects };
