import {
    FaReact,
    FaPython,
    FaGitAlt,
    FaDocker,
} from "react-icons/fa";

import {
    SiDjango,
    SiPostgresql,
    SiTailwindcss,
    SiJavascript,
} from "react-icons/si";

const heroData = {
    greeting: "Hi, I'm",

    name: "Siddartha Raj Subedi",

    title: "Full Stack Developer",

    subtitle:
        "Computer System Engineering Student specializing in React, Django REST Framework and PostgreSQL.",

    description:
        "I build secure, scalable and responsive web applications while continuously improving my software engineering skills through real-world projects.",

    location: "Pokhara, Nepal",

    availability: "Available for Full Stack Developer Internship",

    stats: [
        {
            number: "10+",
            label: "Projects",
        },
        {
            number: "15+",
            label: "Technologies",
        },
        {
            number: "2+",
            label: "Years Learning",
        },
        {
            number: "100%",
            label: "Dedication",
        },
    ],

    technologies: [
        {
            name: "React",
            icon: FaReact,
            color: "text-sky-500",
        },
        {
            name: "JavaScript",
            icon: SiJavascript,
            color: "text-yellow-500",
        },
        {
            name: "Python",
            icon: FaPython,
            color: "text-blue-500",
        },
        {
            name: "Django",
            icon: SiDjango,
            color: "text-green-700",
        },
        {
            name: "PostgreSQL",
            icon: SiPostgresql,
            color: "text-blue-700",
        },
        {
            name: "Tailwind CSS",
            icon: SiTailwindcss,
            color: "text-cyan-500",
        },
        {
            name: "Git",
            icon: FaGitAlt,
            color: "text-orange-600",
        },
        {
            name: "Docker",
            icon: FaDocker,
            color: "text-blue-500",
        },
    ],
};

export default heroData;