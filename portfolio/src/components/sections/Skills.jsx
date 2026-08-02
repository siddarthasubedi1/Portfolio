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
    SiVercel,
} from "react-icons/si";

const categories = [
    {
        title: "Frontend Development",
        technologies: [
            { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
            { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
            { name: "JavaScript", icon: <SiJavascript className="text-yellow-400 text-4xl" /> },
            { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
            { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-500 text-4xl" /> },
        ],
    },
    {
        title: "Backend Development",
        technologies: [
            { name: "Python", icon: <FaPython className="text-yellow-500 text-4xl" /> },
            { name: "Django", icon: <SiDjango className="text-green-700 text-4xl" /> },
            { name: "Django REST", icon: <SiDjango className="text-red-600 text-4xl" /> },
        ],
    },
    {
        title: "Database",
        technologies: [
            { name: "PostgreSQL", icon: <SiPostgresql className="text-blue-600 text-4xl" /> },
        ],
    },
    {
        title: "Tools & Technologies",
        technologies: [
            { name: "Git", icon: <FaGitAlt className="text-orange-500 text-4xl" /> },
            { name: "GitHub", icon: <SiGithub className="text-slate-800 text-4xl" /> },
            { name: "Postman", icon: <SiPostman className="text-orange-600 text-4xl" /> },
            {
                name: "Vercel",
                icon: <SiVercel className="text-black text-4xl" />,
            },
        ],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section bg-white">
            <div className="container-custom">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                ><p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        SKILLS
                    </p>

                    <h2 className="heading-lg mt-6">
                        Technologies I Work With
                    </h2>
                    <p className="mt-6 text-body max-w-3xl mx-auto">
                        I build scalable and maintainable full stack applications using modern technologies.
                    </p>
                </motion.div>

                <div className="mt-24 space-y-16">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <h3 className="text-2xl font-bold text-slate-900 text-center">
                                {category.title}
                            </h3>

                            <div className="mt-8 mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                {category.technologies.map((tech) => (
                                    <div
                                        key={tech.name}
                                        className="group rounded-3xl border border-slate-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:border-indigo-200"
                                    >
                                        <div className="flex justify-center transition-transform duration-300 group-hover:scale-110">
                                            {tech.icon}
                                        </div>

                                        <h4 className="mt-5 font-semibold text-slate-700 transition group-hover:text-indigo-600">
                                            {tech.name}
                                        </h4>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Skills;