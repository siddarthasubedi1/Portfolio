import { motion } from "framer-motion";

import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaPython,
    FaGitAlt,
} from "react-icons/fa";

import {
    SiJavascript,
    SiDjango,
    SiPostgresql,
    SiTailwindcss,
    SiPostman,
    SiGithub,
} from "react-icons/si";

const categories = [
    {
        title: "Frontend Development",
        technologies: [
            {
                name: "HTML5",
                icon: <FaHtml5 className="text-orange-500 text-4xl" />,
            },
            {
                name: "CSS3",
                icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
            },
            {
                name: "JavaScript",
                icon: <SiJavascript className="text-yellow-400 text-4xl" />,
            },
            {
                name: "React",
                icon: <FaReact className="text-cyan-500 text-4xl" />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss className="text-sky-500 text-4xl" />,
            },
        ],
    },

    {
        title: "Backend Development",
        technologies: [
            {
                name: "Python",
                icon: <FaPython className="text-yellow-500 text-4xl" />,
            },
            {
                name: "Django",
                icon: <SiDjango className="text-green-700 text-4xl" />,
            },
            {
                name: "Django REST Framework",
                icon: <SiDjango className="text-red-600 text-4xl" />,
            },
        ],
    },

    {
        title: "Database",
        technologies: [
            {
                name: "PostgreSQL",
                icon: <SiPostgresql className="text-blue-600 text-4xl" />,
            },
        ],
    },

    {
        title: "Tools & Technologies",
        technologies: [
            {
                name: "Git",
                icon: <FaGitAlt className="text-orange-500 text-4xl" />,
            },
            {
                name: "GitHub",
                icon: <SiGithub className="text-slate-800 text-4xl" />,
            },
            {
                name: "Postman",
                icon: <SiPostman className="text-orange-600 text-4xl" />,
            },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-gradient-to-b from-blue-50 to-white py-28"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* TITLE */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-violet-600">
                        SKILLS
                    </p>

                    <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-6xl">
                        Technologies I Work With
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                        I enjoy building modern full stack web applications using
                        technologies that prioritize scalability, maintainability and
                        excellent user experiences.
                    </p>
                </motion.div>

                {/* SKILL CATEGORIES */}

                <div className="mt-20 space-y-10">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{
                                opacity: 0,
                                y: 50,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.1,
                            }}
                            viewport={{
                                once: true,
                            }}
                            className="rounded-[40px] bg-white p-10 shadow-xl"
                        >
                            <h3 className="text-3xl font-bold text-slate-900">
                                {category.title}
                            </h3>

                            <div className="mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                                {category.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="rounded-3xl bg-slate-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                                    >
                                        <div className="flex justify-center">
                                            {tech.icon}
                                        </div>

                                        <h4 className="mt-5 font-semibold text-slate-700">
                                            {tech.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* EXTRA INFORMATION */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-20 rounded-[40px] bg-violet-50 p-10 text-center"
                >
                    <h2 className="text-4xl font-bold text-slate-900">
                        Always Learning
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-700">
                        I believe that technology evolves every day. I continuously learn
                        new concepts, improve my problem-solving abilities and explore
                        modern software development practices to become a better Full Stack
                        Developer.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Skills;