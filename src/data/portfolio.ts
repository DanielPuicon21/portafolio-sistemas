import { PersonalInfo, Project, Skill, Experience, Education } from "@/types";

export const personalInfo: PersonalInfo = {
  name: "Daniel Puicon Aquino",
  title: "Estudiante de Ingeniería de Sistemas",
  description: "Apasionado por la tecnología y el desarrollo de software. Especializado en desarrollo web full-stack con experiencia en React, Node.js y bases de datos. Siempre buscando nuevos desafíos y oportunidades para crecer profesionalmente.",
  image: "https://scontent.flim2-6.fna.fbcdn.net/v/t39.30808-6/278711147_3178850752389092_7014265100693215130_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeFeJgIKpKL3OvDtMLO_35dMWVtpQ_NNW_FZW2lD801b8cBuNpsxfTVSXMIk-z4z25XuvO4Uuh3PPF26CWdKbOSt&_nc_ohc=SMTVW0OM0kQQ7kNvwF4k05I&_nc_oc=AdmxEs6pfhD9-jzj8NjVZMmsvxL_dF34xkncexJjF_SWqUHKt9Zclaq2zbe3QRnSAyA&_nc_zt=23&_nc_ht=scontent.flim2-6.fna&_nc_gid=7AwpHO_IbeJ5UqIoqUZJlQ&oh=00_AfQ8Wf508Vw9O3c-WTN3eIQuzMEERx5eg_6-J08_-JPffw&oe=6873478B",
  resume: "/resume.pdf",
  contact: {
    email: "tu.email@ejemplo.com",
    phone: "+57 300 123 4567",
    location: "Bogotá, Colombia",
    social: {
      github: "https://github.com/tuusuario",
      linkedin: "https://linkedin.com/in/tuusuario",
      twitter: "https://twitter.com/tuusuario"
    }
  }
};

export const skills: Skill[] = [
  // Frontend
  { name: "JavaScript", level: 85, category: "frontend", icon: "🟨" },
  { name: "TypeScript", level: 80, category: "frontend", icon: "🔷" },
  { name: "React", level: 90, category: "frontend", icon: "⚛️" },
  { name: "Next.js", level: 85, category: "frontend", icon: "▲" },
  { name: "HTML/CSS", level: 95, category: "frontend", icon: "🎨" },
  { name: "Tailwind CSS", level: 90, category: "frontend", icon: "💨" },
  
  // Backend
  { name: "Node.js", level: 80, category: "backend", icon: "🟢" },
  { name: "Express", level: 75, category: "backend", icon: "🚀" },
  { name: "Python", level: 70, category: "backend", icon: "🐍" },
  { name: "Java", level: 65, category: "backend", icon: "☕" },
  { name: "PHP", level: 60, category: "backend", icon: "🐘" },
  
  // Database
  { name: "MySQL", level: 80, category: "database", icon: "🐬" },
  { name: "PostgreSQL", level: 75, category: "database", icon: "🐘" },
  { name: "MongoDB", level: 70, category: "database", icon: "🍃" },
  { name: "Redis", level: 65, category: "database", icon: "🔴" },
  
  // Tools
  { name: "Git", level: 90, category: "tools", icon: "📝" },
  { name: "Docker", level: 70, category: "tools", icon: "🐳" },
  { name: "AWS", level: 65, category: "tools", icon: "☁️" },
  { name: "Vercel", level: 85, category: "tools", icon: "▲" },
  { name: "Figma", level: 75, category: "tools", icon: "🎨" },
  
  // Other
  { name: "Metodologías Ágiles", level: 80, category: "other", icon: "🔄" },
  { name: "Testing", level: 70, category: "other", icon: "🧪" },
  { name: "API REST", level: 85, category: "other", icon: "🔌" },
  { name: "GraphQL", level: 65, category: "other", icon: "📊" }
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Sistema de Gestión Académica",
    description: "Aplicación web full-stack para gestión de estudiantes, profesores y cursos. Incluye sistema de autenticación, dashboard interactivo y reportes.",
    technologies: ["React", "Node.js", "MySQL", "Express", "Tailwind CSS"],
    image: "/projects/project1.jpg",
    githubUrl: "https://github.com/tuusuario/gestion-academica",
    liveUrl: "https://gestion-academica.vercel.app",
    featured: true
  },
  {
    id: "2",
    title: "E-Commerce Responsive",
    description: "Tienda online con carrito de compras, sistema de pagos, gestión de productos y panel de administración.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Prisma"],
    image: "/projects/project2.jpg",
    githubUrl: "https://github.com/tuusuario/ecommerce-app",
    liveUrl: "https://ecommerce-app.vercel.app",
    featured: true
  },
  {
    id: "3",
    title: "API REST Blog",
    description: "API REST completa para un blog con autenticación JWT, CRUD de posts, comentarios y sistema de likes.",
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Postman"],
    image: "/projects/project3.jpg",
    githubUrl: "https://github.com/tuusuario/blog-api",
    featured: false
  },
  {
    id: "4",
    title: "Dashboard Analytics",
    description: "Panel de control con gráficos interactivos, métricas en tiempo real y exportación de datos.",
    technologies: ["React", "Chart.js", "Firebase", "Material-UI"],
    image: "/projects/project4.jpg",
    githubUrl: "https://github.com/tuusuario/analytics-dashboard",
    liveUrl: "https://analytics-dashboard.vercel.app",
    featured: false
  },
  {
    id: "5",
    title: "App Móvil Tareas",
    description: "Aplicación móvil para gestión de tareas con sincronización offline, notificaciones push y colaboración en equipo.",
    technologies: ["React Native", "Expo", "SQLite", "AsyncStorage"],
    image: "/projects/project5.jpg",
    githubUrl: "https://github.com/tuusuario/tasks-mobile",
    featured: false
  },
  {
    id: "6",
    title: "Sistema de Reservas",
    description: "Plataforma web para reservas de citas con calendario interactivo, notificaciones por email y panel administrativo.",
    technologies: ["Vue.js", "Laravel", "MySQL", "EmailJS"],
    image: "/projects/project6.jpg",
    githubUrl: "https://github.com/tuusuario/sistema-reservas",
    liveUrl: "https://reservas-app.vercel.app",
    featured: false
  }
];

export const experiences: Experience[] = [
  {
    id: "1",
    position: "Desarrollador Frontend Junior",
    company: "Tech Solutions SAS",
    period: "Ene 2024 - Presente",
    description: "Desarrollo de interfaces web responsive usando React y TypeScript. Colaboración en equipo ágil para implementar nuevas funcionalidades y optimizar el rendimiento de aplicaciones web.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Git"]
  },
  {
    id: "2",
    position: "Práctica Profesional",
    company: "Innovate Digital",
    period: "Jun 2023 - Dic 2023",
    description: "Desarrollo de aplicaciones web y móviles. Participación en proyectos de desarrollo full-stack y mantenimiento de sistemas existentes.",
    technologies: ["JavaScript", "Node.js", "MongoDB", "React Native"]
  },
  {
    id: "3",
    position: "Desarrollador Freelance",
    company: "Independiente",
    period: "2022 - 2023",
    description: "Desarrollo de sitios web y aplicaciones para pequeñas empresas. Gestión completa de proyectos desde el diseño hasta el deployment.",
    technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL", "WordPress"]
  }
];

export const education: Education[] = [
  {
    id: "1",
    degree: "Ingeniería de Sistemas",
    institution: "Universidad Nacional de Colombia",
    period: "2021 - 2025",
    description: "Enfoque en desarrollo de software, bases de datos y arquitectura de sistemas. Participación activa en proyectos de investigación y desarrollo.",
    gpa: "4.2/5.0"
  },
  {
    id: "2",
    degree: "Técnico en Programación",
    institution: "SENA",
    period: "2020 - 2021",
    description: "Formación técnica en programación con énfasis en desarrollo web y bases de datos.",
    gpa: "4.5/5.0"
  }
];