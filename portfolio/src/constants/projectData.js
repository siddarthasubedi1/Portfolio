// ===============================================
// PROJECT IMAGES
// ===============================================

// Ecommerce
import ecommerceCover from "../assets/projects/ecommerce/cover.png";
import ecommerceProduct from "../assets/projects/ecommerce/product.png";
import ecommerceDashboard from "../assets/projects/ecommerce/dashboard.png";

// Authentication
import authCover from "../assets/projects/authentication/cover.png";
import authLogin from "../assets/projects/authentication/login.png";

// Portfolio
import portfolioCover from "../assets/projects/portfolio/cover.png";
import portfolioHero from "../assets/projects/portfolio/hero.png";

// Hospital Management System
import hospitalCover from "../assets/projects/hospital/cover.png";
import hospitalDashboard from "../assets/projects/hospital/dashboard.png";
import hospitalHero from "../assets/projects/hospital/hero.png";

export const projects = [
    {
        id: 1,

        slug: "ecommerce",

        featured: true,

        title: "Simple Ecommerce Website",

        shortDescription:
            "Full Stack Ecommerce application built using Bootstrap, Django REST Framework and DBSqlite.",

        description:
            "A modern ecommerce platform featuring authentication, product management, CRUD operations and responsive design built with Bootstrap, DBSqlite and Django.",

        image: ecommerceCover,

        screenshots: [
            ecommerceCover,
            ecommerceProduct,
            ecommerceDashboard,
        ],

        problem:
            "Learning how professional ecommerce applications manage products, authentication and REST APIs.",

        solution:
            "Built a secure and scalable ecommerce application using React for the frontend and Django REST Framework for the backend.",

        features: [
            "JWT Authentication",
            "User Registration",
            "Login System",
            "Product CRUD",
            "Responsive Design",
            "Protected Routes",
            "REST API",
            "Search",
            "Filtering",
            "PostgreSQL Database",
        ],

        technologies: [
            "React",
            "Vite",
            "Python",
            "Django",
            "Django REST Framework",
            "PostgreSQL",
            "JWT",
            "Tailwind CSS",
        ],

        architecture: [
            "React Frontend",
            "REST API",
            "Django Backend",
            "JWT Authentication",
            "PostgreSQL Database",
        ],

        challenges: [
            "Connecting React with DRF",
            "JWT Authentication",
            "Managing Product CRUD",
            "Database Relationships",
            "Responsive UI",
        ],

        lessons: [
            "REST API Design",
            "Authentication",
            "Database Design",
            "Component Reusability",
            "Problem Solving",
        ],

        stats: {
            apis: "20+",
            components: "25+",
            pages: "10+",
        },

        github: "https://github.com/siddarthasubedi1",

        demo: "https://electro-ecommerce-rho.vercel.app/",
    },

    {
        id: 2,

        slug: "authentication-system",

        featured: false,

        title: "Authentication System",

        shortDescription:
            "Authentication project using Django REST Framework and React.",

        description:
            "Secure authentication project implementing login, registration, password reset and JWT authentication.",

        image: authCover,

        screenshots: [
            authCover,
            authLogin,
        ],

        problem:
            "Understanding authentication workflows used in real applications.",

        solution:
            "Implemented complete authentication using JWT and REST APIs.",

        features: [
            "Registration",
            "Login",
            "Logout",
            "Password Reset",
            "Protected Routes",
            "JWT",
        ],

        technologies: [
            "React",
            "DRF",
            "Python",
            "PostgreSQL",
        ],

        architecture: [
            "Frontend",
            "Backend",
            "REST API",
            "Database",
        ],

        challenges: [
            "Token Authentication",
            "Password Reset",
            "Email Integration",
        ],

        lessons: [
            "Authentication Flow",
            "Security",
            "API Integration",
        ],

        github: "https://github.com/siddarthasubedi1",

        demo: "",
    },

    {
        id: 3,

        slug: "portfolio",

        featured: false,

        title: "Modern Portfolio",

        shortDescription:
            "Recruiter focused portfolio website built using React.",

        description:
            "A modern portfolio showcasing projects, technical skills and development journey.",

        image: portfolioCover,

        screenshots: [
            portfolioCover,
            portfolioHero,
        ],

        problem:
            "Traditional portfolios fail to highlight real development work effectively.",

        solution:
            "Designed a modern recruiter-focused portfolio emphasizing projects and practical skills.",

        features: [
            "Responsive Layout",
            "Framer Motion",
            "Project Details",
            "Animations",
            "Modern UI",
        ],

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
        ],

        architecture: [
            "Reusable Components",
            "Responsive Design",
            "React Router",
        ],

        challenges: [
            "Responsive Layout",
            "Animations",
            "Performance",
        ],

        lessons: [
            "Modern UI Design",
            "Animations",
            "Accessibility",
        ],

        github: "https://github.com/siddarthasubedi1",

        demo: "",
    },
    {
        id: 4,

        slug: "hospital-management-system",

        featured: false,

        title: "Hospital Management System",

        shortDescription:
            "Hospital management system built with React.",

        description:
            "A comprehensive hospital management system built with React, featuring patient records, appointment scheduling, medical history tracking, payment processing, and more.",

        image: hospitalCover,

        screenshots: [
            hospitalDashboard,
            hospitalHero,
        ],

        problem:
            "Hospital management systems often lack user-friendly interfaces and efficient workflows, leading to administrative challenges and patient dissatisfaction.",

        solution:
            "Designed a modern hospital management system emphasizing projects and practical skills.",

        features: [
            "Responsive Layout",
            "Framer Motion",
            "Patient Records",
            "Appointment Scheduling",
            "Medical History Tracking",
            "Payment Processing",
            "User Management",
        ],

        technologies: [
            "React",
            "Vite",
            "Tailwind CSS",
            "Framer Motion",
        ],

        architecture: [
            "Reusable Components",
            "Responsive Design",
            "React Router",
        ],

        challenges: [
            "Responsive Layout",
            "Animations",
            "Performance",
        ],

        lessons: [
            "Modern UI Design",
            "Animations",
            "Accessibility",
        ],

        github: "https://github.com/siddarthasubedi1",

        demo: "https://hospital-prototype-ten.vercel.app/",
    },
];

// ===============================================
// Featured Project
// ===============================================

export const featuredProject =
    projects.find((project) => project.featured);

// ===============================================
// Skills
// ===============================================

export const skillCategories = [
    {
        title: "Frontend",

        skills: [
            "React",
            "JavaScript",
            "HTML",
            "CSS",
            "Tailwind CSS",
        ],
    },

    {
        title: "Backend",

        skills: [
            "Python",
            "Django",
            "Django REST Framework",
            "JWT",
        ],
    },

    {
        title: "Database",

        skills: [
            "PostgreSQL",
            "SQL",
        ],
    },

    {
        title: "Tools",

        skills: [
            "Git",
            "GitHub",
            "VS Code",
            "Postman",
            "Vercel",
        ],
    },
];