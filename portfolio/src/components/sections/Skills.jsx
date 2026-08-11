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

import {
    Code2,
    Database,
    Wrench,
    ArrowUpRight,
} from "lucide-react";


const categories = [
    {
        title: "Frontend",
        description: "Building responsive and interactive user interfaces.",
        icon: Code2,
        technologies: [
            {
                name: "HTML5",
                icon: <FaHtml5 />,
            },
            {
                name: "CSS3",
                icon: <FaCss3Alt />,
            },
            {
                name: "JavaScript",
                icon: <SiJavascript />,
            },
            {
                name: "React",
                icon: <FaReact />,
            },
            {
                name: "Tailwind CSS",
                icon: <SiTailwindcss />,
            },
        ],
    },

    {
        title: "Backend",
        description: "Developing APIs, databases and server-side systems.",
        icon: Database,
        technologies: [
            {
                name: "Python",
                icon: <FaPython />,
            },
            {
                name: "Django",
                icon: <SiDjango />,
            },
            {
                name: "PostgreSQL",
                icon: <SiPostgresql />,
            },
        ],
    },

    {
        title: "Tools",
        description: "Tools I use for development, testing and deployment.",
        icon: Wrench,
        technologies: [
            {
                name: "Git",
                icon: <FaGitAlt />,
            },
            {
                name: "GitHub",
                icon: <SiGithub />,
            },
            {
                name: "Postman",
                icon: <SiPostman />,
            },
            {
                name: "Vercel",
                icon: <SiVercel />,
            },
        ],
    },
];


const Skills = () => {
    return (
        <section
            id="skills"
            className="
                relative
                overflow-hidden
                bg-white
                py-28
                lg:py-36
            "
        >

            {/* =====================================================
                BACKGROUND
            ====================================================== */}

            <div className="pointer-events-none absolute inset-0 -z-10">

                <div
                    className="
                        absolute
                        left-0
                        top-20
                        h-80
                        w-80
                        rounded-full
                        bg-green-100/60
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute
                        bottom-0
                        right-0
                        h-96
                        w-96
                        rounded-full
                        bg-emerald-100/50
                        blur-[140px]
                    "
                />

            </div>


            <div className="container-custom relative z-10">

                {/* =================================================
                    HEADER
                ================================================== */}

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
                        duration: 0.7,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mx-auto max-w-4xl text-center"
                >

                    {/* Label */}

                    <span
                        className="
                            inline-flex
                            rounded-full
                            border
                            border-green-200
                            bg-green-50
                            px-5
                            py-2
                            text-sm
                            font-semibold
                            text-green-700
                        "
                    >
                        Technical Skills
                    </span>


                    {/* Heading */}

                    <h2
                        className="
                            mt-8
                            text-4xl
                            font-black
                            tracking-tight
                            text-slate-900
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        Technologies I Work With
                    </h2>


                    {/* Description */}

                    <p
                        className="
                            mx-auto
                            mt-7
                            max-w-3xl
                            text-lg
                            leading-8
                            text-slate-600
                        "
                    >
                        A growing toolkit of technologies I use to build
                        responsive interfaces, scalable backend systems and
                        practical full-stack applications.
                    </p>

                </motion.div>


                {/* =================================================
                    SKILL CATEGORIES
                ================================================== */}

                <div
                    className="
                        mt-20
                        grid
                        gap-8
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >

                    {categories.map((category, index) => {

                        const CategoryIcon = category.icon;

                        return (
                            <motion.div
                                key={category.title}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{
                                    once: true,
                                    amount: 0.2,
                                }}
                                className="
                                    group
                                    relative
                                    overflow-hidden
                                    rounded-[32px]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-8
                                    shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                                    transition-all
                                    duration-500
                                    hover:-translate-y-2
                                    hover:border-green-200
                                    hover:shadow-[0_25px_70px_rgba(34,197,94,0.10)]
                                "
                            >

                                {/* Card Glow */}

                                <div
                                    className="
                                        pointer-events-none
                                        absolute
                                        -right-16
                                        -top-16
                                        h-32
                                        w-32
                                        rounded-full
                                        bg-green-100/70
                                        blur-3xl
                                        transition-all
                                        duration-500
                                        group-hover:bg-green-200/70
                                    "
                                />


                                {/* Category Icon */}

                                <div
                                    className="
                                        relative
                                        flex
                                        h-14
                                        w-14
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-green-50
                                        text-green-600
                                        transition-all
                                        duration-300
                                        group-hover:scale-110
                                        group-hover:bg-green-600
                                        group-hover:text-white
                                    "
                                >
                                    <CategoryIcon size={25} />
                                </div>


                                {/* Category Title */}

                                <h3
                                    className="
                                        relative
                                        mt-7
                                        text-2xl
                                        font-bold
                                        text-slate-900
                                    "
                                >
                                    {category.title}
                                </h3>


                                {/* Description */}

                                <p
                                    className="
                                        relative
                                        mt-3
                                        text-sm
                                        leading-7
                                        text-slate-600
                                    "
                                >
                                    {category.description}
                                </p>


                                {/* Divider */}

                                <div
                                    className="
                                        my-7
                                        h-px
                                        bg-slate-100
                                    "
                                />


                                {/* Technologies */}

                                <div className="relative space-y-3">

                                    {category.technologies.map(
                                        (technology) => (
                                            <div
                                                key={technology.name}
                                                className="
                                                    group/tech
                                                    flex
                                                    items-center
                                                    justify-between
                                                    rounded-2xl
                                                    border
                                                    border-slate-100
                                                    bg-slate-50/70
                                                    px-4
                                                    py-3
                                                    transition-all
                                                    duration-300
                                                    hover:border-green-100
                                                    hover:bg-green-50
                                                "
                                            >

                                                <div className="flex items-center gap-3">

                                                    {/* Technology Icon */}

                                                    <span
                                                        className="
                                                            flex
                                                            h-9
                                                            w-9
                                                            items-center
                                                            justify-center
                                                            rounded-xl
                                                            bg-white
                                                            text-lg
                                                            text-slate-700
                                                            shadow-sm
                                                            transition-all
                                                            duration-300
                                                            group-hover/tech:text-green-600
                                                        "
                                                    >
                                                        {technology.icon}
                                                    </span>


                                                    {/* Technology Name */}

                                                    <span
                                                        className="
                                                            text-sm
                                                            font-semibold
                                                            text-slate-700
                                                        "
                                                    >
                                                        {technology.name}
                                                    </span>

                                                </div>


                                                {/* Arrow */}

                                                <ArrowUpRight
                                                    size={16}
                                                    className="
                                                        text-slate-300
                                                        transition-all
                                                        duration-300
                                                        group-hover/tech:-translate-y-0.5
                                                        group-hover/tech:translate-x-0.5
                                                        group-hover/tech:text-green-600
                                                    "
                                                />

                                            </div>
                                        )
                                    )}

                                </div>

                            </motion.div>
                        );
                    })}

                </div>


                {/* =================================================
                    BOTTOM MESSAGE
                ================================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-16 text-center"
                >

                    <p className="text-sm text-slate-500">
                        Always learning, experimenting and adding new
                        technologies to my toolkit.
                    </p>

                    <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-gradient-to-r from-green-500 to-emerald-500" />

                </motion.div>

            </div>
        </section>
    );
};

export default Skills;