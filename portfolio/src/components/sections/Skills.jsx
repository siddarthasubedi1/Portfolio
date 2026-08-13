import { motion } from "framer-motion";

import {
    FaCss3Alt,
    FaGitAlt,
    FaHtml5,
    FaPython,
    FaReact,
} from "react-icons/fa";

import {
    SiDjango,
    SiGithub,
    SiJavascript,
    SiPostgresql,
    SiPostman,
    SiTailwindcss,
    SiVercel,
} from "react-icons/si";

import {
    Code2,
    Database,
    Server,
    Wrench,
} from "lucide-react";

const categories = [
    {
        title: "Frontend",
        description:
            "Technologies I use to create responsive interfaces.",
        icon: Code2,
        technologies: [
            {
                name: "HTML5",
                icon: FaHtml5,
            },
            {
                name: "CSS3",
                icon: FaCss3Alt,
            },
            {
                name: "JavaScript",
                icon: SiJavascript,
            },
            {
                name: "React",
                icon: FaReact,
            },
            {
                name: "Tailwind CSS",
                icon: SiTailwindcss,
            },
        ],
    },
    {
        title: "Backend",
        description:
            "Tools I use for APIs and server-side development.",
        icon: Server,
        technologies: [
            {
                name: "Python",
                icon: FaPython,
            },
            {
                name: "Django",
                icon: SiDjango,
            },
            {
                name: "Django REST",
                icon: SiDjango,
            },
            {
                name: "REST APIs",
                icon: Server,
            },
        ],
    },
    {
        title: "Database",
        description:
            "Relational data and application persistence.",
        icon: Database,
        technologies: [
            {
                name: "PostgreSQL",
                icon: SiPostgresql,
            },
            {
                name: "SQL",
                icon: Database,
            },
        ],
    },
    {
        title: "Tools",
        description:
            "Development, testing and deployment workflow.",
        icon: Wrench,
        technologies: [
            {
                name: "Git",
                icon: FaGitAlt,
            },
            {
                name: "GitHub",
                icon: SiGithub,
            },
            {
                name: "Postman",
                icon: SiPostman,
            },
            {
                name: "Vercel",
                icon: SiVercel,
            },
        ],
    },
];

const Skills = () => {
    return (
        <section
            id="skills"
            className="
                relative overflow-hidden
                bg-slate-50/70
                py-20 sm:py-24 lg:py-28
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute -left-40 bottom-0
                    h-96 w-96
                    rounded-full
                    bg-green-100/60
                    blur-[130px]
                "
            />

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="section-badge">
                        <Code2 size={14} />
                        Technical Skills
                    </span>

                    <h2 className="section-title">
                        Tools I use to turn ideas into
                        <span className="text-green-600">
                            {" "}
                            working software.
                        </span>
                    </h2>

                    <p className="section-description">
                        My strongest focus is full stack web development. These
                        are the technologies I have used in coursework,
                        self-learning and practical projects.
                    </p>
                </motion.div>

                {/* SKILLS */}
                <div
                    className="
                        mx-auto mt-12
                        grid max-w-6xl
                        gap-5
                        md:grid-cols-2
                    "
                >
                    {categories.map((category, index) => {
                        const CategoryIcon = category.icon;

                        return (
                            <motion.article
                                key={category.title}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.06,
                                }}
                                className="
                                    portfolio-card
                                    p-5 sm:p-6
                                "
                            >
                                <div className="flex items-start gap-4">

                                    <div
                                        className="
                                            flex h-11 w-11
                                            shrink-0
                                            items-center justify-center
                                            rounded-xl
                                            bg-green-50
                                            text-green-600
                                        "
                                    >
                                        <CategoryIcon size={19} />
                                    </div>

                                    <div>
                                        <h3
                                            className="
                                                text-lg font-bold
                                                text-slate-900
                                            "
                                        >
                                            {category.title}
                                        </h3>

                                        <p
                                            className="
                                                mt-1
                                                text-sm leading-6
                                                text-slate-500
                                            "
                                        >
                                            {category.description}
                                        </p>
                                    </div>

                                </div>

                                <div
                                    className="
                                        mt-6
                                        grid grid-cols-2
                                        gap-2.5
                                        sm:grid-cols-3
                                    "
                                >
                                    {category.technologies.map(
                                        (technology) => {
                                            const TechIcon =
                                                technology.icon;

                                            return (
                                                <div
                                                    key={
                                                        technology.name
                                                    }
                                                    className="
                                                        group
                                                        flex
                                                        min-h-[74px]
                                                        items-center
                                                        gap-3
                                                        rounded-xl
                                                        border
                                                        border-slate-200
                                                        bg-slate-50/60
                                                        p-3
                                                        transition-all
                                                        hover:border-green-200
                                                        hover:bg-green-50/50
                                                    "
                                                >
                                                    <span
                                                        className="
                                                            flex h-9 w-9
                                                            shrink-0
                                                            items-center
                                                            justify-center
                                                            rounded-lg
                                                            bg-white
                                                            text-lg
                                                            text-slate-700
                                                            shadow-sm
                                                            transition-colors
                                                            group-hover:text-green-600
                                                        "
                                                    >
                                                        <TechIcon />
                                                    </span>

                                                    <span
                                                        className="
                                                            text-xs
                                                            font-semibold
                                                            leading-5
                                                            text-slate-700
                                                        "
                                                    >
                                                        {
                                                            technology.name
                                                        }
                                                    </span>
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* BOTTOM MESSAGE */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="
                        mx-auto mt-10
                        max-w-6xl
                        rounded-xl
                        border border-green-100
                        bg-green-50/70
                        px-5 py-4
                        text-center
                    "
                >
                    <p
                        className="
                            text-sm leading-6
                            text-slate-600
                        "
                    >
                        <span className="font-bold text-green-700">
                            Current focus:
                        </span>{" "}
                        strengthening backend architecture, testing, Docker,
                        deployment and clean application design.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Skills;