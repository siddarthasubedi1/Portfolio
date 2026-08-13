import { motion } from "framer-motion";
import {
    ArrowRight,
    Database,
    Globe2,
    Layers3,
    LockKeyhole,
    Server,
    Smartphone,
} from "lucide-react";

const services = [
    {
        number: "01",
        icon: Globe2,
        title: "Frontend Interfaces",
        description:
            "Responsive interfaces built with reusable React components, clear layouts and accessible user interactions.",
        skills: ["React", "JavaScript", "Tailwind CSS"],
    },
    {
        number: "02",
        icon: Server,
        title: "Backend APIs",
        description:
            "REST APIs using Django REST Framework with validation, authentication and structured application logic.",
        skills: ["Python", "Django", "DRF"],
    },
    {
        number: "03",
        icon: Database,
        title: "Database Integration",
        description:
            "Relational database integration with structured models, relationships and application data management.",
        skills: ["PostgreSQL", "SQL", "ORM"],
    },
    {
        number: "04",
        icon: LockKeyhole,
        title: "Authentication",
        description:
            "Registration, login, JWT authentication, protected routes and permission-based application behaviour.",
        skills: ["JWT", "Auth", "Security"],
    },
    {
        number: "05",
        icon: Smartphone,
        title: "Responsive Design",
        description:
            "Interfaces designed to remain clear and usable across desktop, tablet and mobile screen sizes.",
        skills: ["Mobile", "Tablet", "Desktop"],
    },
    {
        number: "06",
        icon: Layers3,
        title: "Full Stack Integration",
        description:
            "Connecting frontend interfaces, APIs and databases into complete working web application flows.",
        skills: ["Frontend", "API", "Database"],
    },
];

const WhatIBuild = () => {
    return (
        <section
            id="what-i-build"
            className="
                relative overflow-hidden
                bg-white
                py-20 sm:py-24 lg:py-28
            "
        >
            {/* BACKGROUND */}
            <div
                className="
                    pointer-events-none
                    absolute -right-40 top-24
                    h-96 w-96
                    rounded-full
                    bg-green-100/50
                    blur-[130px]
                "
            />

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="section-badge">
                        <Layers3 size={14} />
                        What I Build
                    </span>

                    <h2 className="section-title">
                        From interface to API to
                        <span className="text-green-600">
                            {" "}
                            database.
                        </span>
                    </h2>

                    <p className="section-description">
                        My projects focus on the main parts of modern full stack
                        development, including responsive interfaces, backend
                        APIs, authentication and database integration.
                    </p>
                </motion.div>

                {/* SERVICES */}
                <div
                    className="
                        mx-auto mt-12
                        grid max-w-6xl
                        gap-5
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.article
                                key={service.title}
                                initial={{
                                    opacity: 0,
                                    y: 25,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.05,
                                }}
                                className="
                                    group
                                    portfolio-card
                                    relative
                                    flex min-h-[280px]
                                    flex-col
                                    overflow-hidden
                                    p-6
                                "
                            >
                                {/* NUMBER */}
                                <div
                                    className="
                                        absolute
                                        right-5 top-3
                                        text-5xl font-black
                                        text-slate-50
                                        transition-colors
                                        group-hover:text-green-50
                                    "
                                >
                                    {service.number}
                                </div>

                                {/* ICON */}
                                <div className="card-icon relative z-10">
                                    <Icon size={19} />
                                </div>

                                <h3
                                    className="
                                        relative z-10
                                        mt-5
                                        text-lg font-bold
                                        text-slate-900
                                    "
                                >
                                    {service.title}
                                </h3>

                                <p
                                    className="
                                        relative z-10
                                        mt-3 flex-1
                                        text-sm leading-7
                                        text-slate-600
                                    "
                                >
                                    {service.description}
                                </p>

                                {/* SKILLS */}
                                <div
                                    className="
                                        relative z-10
                                        mt-5
                                        flex flex-wrap gap-2
                                    "
                                >
                                    {service.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="
                                                rounded-lg
                                                bg-slate-50
                                                px-2.5 py-1.5
                                                text-[11px]
                                                font-semibold
                                                text-slate-500
                                            "
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 25,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.5,
                    }}
                    className="
                        mx-auto mt-12
                        flex max-w-6xl
                        flex-col
                        items-center justify-between
                        gap-6
                        rounded-[24px]
                        bg-slate-900
                        px-6 py-8
                        text-center
                        sm:px-8
                        lg:flex-row
                        lg:text-left
                    "
                >
                    <div>
                        <p
                            className="
                                text-xs font-bold
                                uppercase tracking-[0.16em]
                                text-green-400
                            "
                        >
                            Let&apos;s Work Together
                        </p>

                        <h3
                            className="
                                mt-2
                                text-xl font-bold
                                text-white
                                sm:text-2xl
                            "
                        >
                            Have an opportunity or project to discuss?
                        </h3>

                        <p
                            className="
                                mt-2
                                max-w-2xl
                                text-sm leading-6
                                text-slate-300
                            "
                        >
                            I&apos;m interested in practical development
                            opportunities where I can contribute and continue
                            improving my skills.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="btn-primary btn-arrow shrink-0"
                    >
                        Contact Me
                        <ArrowRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhatIBuild;