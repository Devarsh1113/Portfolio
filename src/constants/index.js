export const HERO_CONTENT = `I am a passionate Software developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, SQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated software developer with a passion for creating efficient and user-friendly web applications. With experience, I have worked with a variety of technologies, including React, Next.js, Node.js, SQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
export const EXPERIENCES = [
  {
    year: "JAN 2024 - APR-2024",
    role: "Product Verification Specialist Co-op",
    company: "Evertz Microsystems.",
    description: [
      "Helped and tested a demonstration utilizing XPS Edge technology resulting in successful showcasing at the renowned NAB Show.",
      "Executed rigorous testing protocols on 5+ products and video streams, ensuring functionality, stability, and performance adhered to industry standards; reduced post-launch bugs by 40%.",
      "Configured and deployed a server for ORT, identifying and resolving video errors within streaming operations,leading to enhanced video reliability and uninterrupted content delivery.",
    ],
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Daily Dose: News App",
    image: project1,
    description: [
      "Developed a single-page React application enabling personalized news reading across various categories.",
      "Optimized user experience by allowing users to track news topics of interest.",
    ],
    technologies: ["React", "Node.js", "Bootstrap", "NewsApi"],
  },
  {
    title: "Book Store Application",
    image:project2,
    description: [
      "Engineered a robust Spring Application for a virtual bookstore, facilitating seamless CRUD operations for book inventory management. Integrated a sophisticated user registration system that enhanced user experience.",
      "Implemented JUnit testing to validate database interaction methods, ensuring accurate data retrieval and manipulation in the virtual bookstore application.",
    
    ],
    technologies: ["Java", "SpringBoot", "Spring Security", "HTML","CSS","H2 DB"],
  },
  {
    title: "Portfolio Website",
    image:project3,
    description: [
      "Created a personal portfolio website showcasing projects, skills, and contact information.",
      "Designed a responsive layout for optimal viewing across devices.",
    ],
    technologies: ["React.js", "Taildwind CSS", "Motion FrameWork",],
  },
];

export const CONTACT = {
  address: "95 Charolais Blvd, Brampton, L6Y2R9 ",
  phoneNo: "+1 226-899-8020 ",
  email: "agrawaldevarsh@gmail.com",
};
