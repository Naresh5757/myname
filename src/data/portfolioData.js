export const personalInfo = {
  name: "Begari Naresh",
  title: "Full-Stack Developer",
  tagline: "Building dynamic, scalable & user-centric web experiences",
  email: "nareshsai5757@gmail.com",
  phone: "+917995901728",
  location: "Hyderabad, India",
  github: "https://github.com/Naresh5757",
  linkedin: "https://www.linkedin.com/in/naresh-begari-902577375/",
  photo: "/src/assets/WhatsApp Image 2025-11-04 at 18.00.55_566730df.jpg",
};

export const about = `Detail-oriented and motivated full-stack developer with a solid foundation in both frontend and backend development. Proficient in JavaScript (ES6+), HTML5, CSS3, and responsive web design, with hands-on experience building dynamic, user-centric applications using React.js and Express.js. Skilled in creating scalable APIs with Node.js and managing databases with Firebase (Realtime & Firestore) and MongoDB. Seeking a full-stack development role to contribute to innovative projects, deliver seamless user experiences, and continuously grow in modern web technologies.`;

export const skills = [
  { category: "Frontend", icon: "🎨", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "React JS"] },
  { category: "Backend", icon: "⚙️", items: ["Node.js", "Express.js"] },
  { category: "Libraries & Frameworks", icon: "📦", items: ["React JS", "Express JS", "Recharts", "Framer Motion", "Tailwindcss", "Material UI", "Shadcn UI", "Bootstrap"] },
  { category: "Databases", icon: "🗄️", items: ["MongoDB", "Firebase Realtime DB", "Firebase Firestore", "Redis"] },
  { category: "Developer Tools", icon: "🛠️", items: ["Git", "GitHub", "VS Code", "Postman"] },
];

export const projects = [
  {
    name: "QuickKart",
    emoji: "🛒",
    description: "A full-scale e-commerce application supporting product browsing, cart management, secure checkout, and order tracking with a responsive and modern UI.",
    tech: ["Node JS", "React JS", "TailwindCSS", "Recharts", "Redis", "MongoDB", "Stripe", "Cloudinary", "Framer Motion"],
    highlights: [
      "React Hooks + Zustand for state management with Tailwind CSS for sleek UI",
      "JWT + bcryptjs for secure auth; Stripe for payments; Cloudinary for image uploads",
      "Redis (Ioredis) caching/session storage; Mailtrap for transactional emails",
    ],
    color: "#6366f1",
    liveLink: "https://ecommerce-indol-chi.vercel.app/",
  },
  {
    name: "Nexwork",
    emoji: "👥",
    description: "A role-based Employee Management System enabling employers to assign tasks, manage users, and handle leave requests through Admin and User dashboards.",
    tech: ["React JS", "Firebase", "Material UI", "Recharts", "Shadcn UI", "Context API"],
    highlights: [
      "Firebase Auth & Realtime Database; Context API for global state management",
      "Recharts for visual analytics; Toastify for alert notifications",
      "Optimized Firebase data structure; skeleton loaders & modals for UX",
    ],
    color: "#8b5cf6",
    liveLink: "https://employermangement-zayp.vercel.app/",
  },
  {
    name: "Travel Planner Platform",
    emoji: "✈️",
    description: "A dynamic Travel Planner web app connecting travelers with local guides — browse destinations, plan trips, and book personalized experiences.",
    tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "Bootstrap", "Firebase"],
    highlights: [
      "Firebase Auth & Realtime Database for user management and storage",
      "Modular JavaScript with efficient event handling & form validations",
      "Fully responsive UI using Bootstrap for seamless cross-device navigation",
    ],
    color: "#06b6d4",
    liveLink: "https://travel-planner-js-main-project-alpha.vercel.app/",
  },
];

export const education = [
  {
    degree: "Bachelor of Technology",
    field: "Electronics and Communication Engineering",
    institution: "Pallavi Engineering College",
    period: "2020 – 2024",
    cgpa: "6.6 / 10",
  },
];

export const softSkills = [
  "Communication", "Active Listening", "Team Work",
  "Problem-Solving", "Creativity", "Flexibility",
  "Adaptability", "Time Management", "Leadership",
];
