import { motion } from "framer-motion";
import {
    FaReact,
    FaPython,
    FaGitAlt,
    FaHtml5,
    FaCss3Alt,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiPostgresql,
    SiDjango,
} from "react-icons/si";

const skills = [
    {
        icon: <FaReact size={24} className="text-cyan-400" />,
        name: "React",
        level: 85,
    },
    {
        icon: <SiDjango size={24} className="text-green-500" />,
        name: "Django",
        level: 85,
    },
    {
        icon: <FaPython size={24} className="text-yellow-400" />,
        name: "Python",
        level: 90,
    },
    {
        icon: <SiPostgresql size={24} className="text-blue-400" />,
        name: "PostgreSQL",
        level: 80,
    },
    {
        icon: <SiJavascript size={24} className="text-yellow-300" />,
        name: "JavaScript",
        level: 80,
    },
    {
        icon: <SiTailwindcss size={24} className="text-sky-400" />,
        name: "Tailwind CSS",
        level: 85,
    },
    {
        icon: <FaHtml5 size={24} className="text-orange-500" />,
        name: "HTML",
        level: 95,
    },
    {
        icon: <FaCss3Alt size={24} className="text-blue-500" />,
        name: "CSS",
        level: 90,
    },
    {
        icon: <FaGitAlt size={24} className="text-orange-500" />,
        name: "Git",
        level: 80,
    },
    {
        icon: <FaNodeJs size={24} className="text-green-400" />,
        name: "Node.js",
        level: 60,
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="bg-[#070B1A] py-24 text-white"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mb-16 text-center"
                >
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-semibold uppercase tracking-[3px] text-violet-400">
                        My Skills
                    </span>

                    <h2 className="mt-6 text-4xl font-bold lg:text-5xl">
                        Technologies I Use
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-400">
                        These are the technologies I use most often while building
                        full stack web applications and personal projects.
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div className="grid gap-8 md:grid-cols-2">

                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            initial={{
                                opacity: 0,
                                y: 30,
                            }}
                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.05,
                            }}
                            viewport={{ once: true }}
                            className="rounded-2xl border border-slate-800 bg-[#0B1220] p-6 transition hover:border-violet-500"
                        >
                            <div className="mb-4 flex items-center justify-between">

                                <div className="flex items-center gap-3">

                                    {skill.icon}

                                    <h3 className="text-lg font-semibold">
                                        {skill.name}
                                    </h3>

                                </div>

                                <span className="text-violet-400">
                                    {skill.level}%
                                </span>

                            </div>

                            <div className="h-3 overflow-hidden rounded-full bg-slate-800">

                                <motion.div
                                    initial={{
                                        width: 0,
                                    }}
                                    whileInView={{
                                        width: `${skill.level}%`,
                                    }}
                                    transition={{
                                        duration: 1,
                                    }}
                                    viewport={{ once: true }}
                                    className="h-full rounded-full bg-gradient-to-r from-violet-500 to-blue-500"
                                />

                            </div>

                        </motion.div>
                    ))}

                </div>

            </div>
        </section>
    );
};

export default Skills;