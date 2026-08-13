import { motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    Code2,
    Database,
    LayoutDashboard,
    Rocket,
    Users,
} from "lucide-react";

const qualities = [
    {
        icon: Code2,
        title: "Full Stack Development",
        description:
            "Build responsive web applications using React, Django REST Framework and PostgreSQL.",
    },
    {
        icon: Database,
        title: "REST API Development",
        description:
            "Develop structured REST APIs with authentication, CRUD operations and database integration.",
    },
    {
        icon: LayoutDashboard,
        title: "Modern UI Development",
        description:
            "Create clean, responsive and user-friendly interfaces using React and Tailwind CSS.",
    },
    {
        icon: Brain,
        title: "Problem Solving",
        description:
            "Enjoy understanding problems, finding practical solutions and learning new technologies.",
    },
    {
        icon: Users,
        title: "Team Collaboration",
        description:
            "Comfortable working with others, receiving feedback and contributing in team environments.",
    },
    {
        icon: Rocket,
        title: "Career Focus",
        description:
            "Looking for internship opportunities to gain industry experience and grow as a developer.",
    },
];

const WhyHireMe = () => {
    return (
        <section
            id="why-hire-me"
            className="
                relative overflow-hidden
                bg-slate-50/60
                py-20 sm:py-24 lg:py-28
            "
        >
            <div
                className="
                    pointer-events-none
                    absolute -left-32 top-20
                    h-72 w-72
                    rounded-full
                    bg-green-100/50
                    blur-[100px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute -right-32 bottom-20
                    h-80 w-80
                    rounded-full
                    bg-emerald-100/40
                    blur-[110px]
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
                        Why Hire Me
                    </span>

                    <h2 className="section-title">
                        What I can bring to
                        <span className="text-green-600">
                            {" "}
                            your team.
                        </span>
                    </h2>

                    <p className="section-description">
                        I combine technical learning with practical project
                        experience. I care about clean code, useful interfaces,
                        teamwork and continuously improving my development
                        skills.
                    </p>
                </motion.div>

                {/* CARDS */}
                <div
                    className="
                        mx-auto mt-12
                        grid max-w-6xl
                        gap-5
                        md:grid-cols-2
                        lg:grid-cols-3
                    "
                >
                    {qualities.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
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
                                    delay: index * 0.06,
                                }}
                                className="
                                    portfolio-card
                                    group
                                    flex h-full
                                    min-h-[245px]
                                    flex-col
                                    p-6
                                "
                            >
                                <div className="card-icon">
                                    <Icon size={21} />
                                </div>

                                <h3
                                    className="
                                        mt-5
                                        min-h-[52px]
                                        text-lg font-bold
                                        leading-6
                                        text-slate-900
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-3
                                        flex-1
                                        text-sm leading-6
                                        text-slate-600
                                    "
                                >
                                    {item.description}
                                </p>
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
                        bg-green-600
                        px-6 py-8
                        text-center
                        text-white
                        sm:px-8
                        lg:flex-row
                        lg:px-10
                        lg:py-9
                        lg:text-left
                    "
                >
                    <div className="max-w-2xl">
                        <h3
                            className="
                                text-2xl
                                font-extrabold
                                text-white
                            "
                        >
                            Looking for a motivated developer?
                        </h3>

                        <p
                            className="
                                mt-2
                                text-sm leading-6
                                text-emerald-50
                            "
                        >
                            I&apos;m currently looking for an internship where
                            I can contribute to real projects and grow as a Full
                            Stack Developer.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="
                            group
                            btn-secondary
                            shrink-0
                            border-white
                            bg-white
                            text-green-700
                            hover:bg-green-50
                        "
                    >
                        Let&apos;s Connect

                        <ArrowRight
                            size={16}
                            className="
                                transition-transform
                                group-hover:translate-x-1
                            "
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyHireMe;