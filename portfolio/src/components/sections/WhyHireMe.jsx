import { motion } from "framer-motion";
import {
    Code2,
    Database,
    LayoutDashboard,
    Brain,
    Users,
    Rocket,
    ArrowRight,
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
            "Develop secure and structured REST APIs with authentication, CRUD operations and database integration.",
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
            className="relative overflow-hidden bg-slate-50/60 py-24 lg:py-28"
        >
            {/* Soft background */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-green-100/50 blur-[100px]" />
            <div className="pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-emerald-100/40 blur-[110px]" />

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700">
                        Why Hire Me
                    </span>

                    <h2 className="mt-6 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        What I Bring to
                        <span className="block text-green-600">
                            Your Team
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        I enjoy building complete applications, solving real
                        problems and continuously improving my development
                        skills.
                    </p>
                </motion.div>

                {/* CARDS */}
                <div className="mx-auto mt-14 grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">

                    {qualities.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.45,
                                    delay: index * 0.06,
                                }}
                                className="
                                    group
                                    flex
                                    min-h-[270px]
                                    flex-col
                                    rounded-[24px]
                                    border
                                    border-slate-200
                                    bg-white
                                    p-7
                                    shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1.5
                                    hover:border-green-200
                                    hover:shadow-[0_18px_45px_rgba(34,197,94,0.10)]
                                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        flex
                                        h-13
                                        w-13
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-green-50
                                        text-green-600
                                        transition-all
                                        duration-300
                                        group-hover:bg-green-600
                                        group-hover:text-white
                                    "
                                >
                                    <Icon size={23} strokeWidth={2} />
                                </div>

                                {/* TITLE */}
                                <h3 className="mt-6 min-h-[56px] text-xl font-bold leading-7 text-slate-900">
                                    {item.title}
                                </h3>

                                {/* DESCRIPTION */}
                                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                                    {item.description}
                                </p>

                                {/* SMALL LABEL */}
                                <div className="mt-5 border-t border-slate-100 pt-4">
                                    <span className="text-xs font-semibold uppercase tracking-[1.5px] text-green-600">
                                        Core Skill
                                    </span>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="
                        mx-auto
                        mt-14
                        flex
                        max-w-6xl
                        flex-col
                        items-center
                        justify-between
                        gap-7
                        rounded-[26px]
                        bg-slate-900
                        px-7
                        py-9
                        text-center
                        text-white
                        sm:px-10
                        lg:flex-row
                        lg:text-left
                    "
                >
                    <div className="max-w-2xl">
                        <p className="text-sm font-semibold uppercase tracking-[2px] text-green-400">
                            Open to Opportunities
                        </p>

                        <h3 className="mt-2 text-2xl font-bold sm:text-3xl">
                            Ready to contribute to real projects.
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-300">
                            I'm currently looking for internship opportunities
                            where I can contribute, learn from experienced
                            developers and grow as a Full Stack Developer.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="
                            group
                            inline-flex
                            shrink-0
                            items-center
                            justify-center
                            gap-3
                            rounded-full
                            bg-green-600
                            px-6
                            py-3.5
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-green-700
                            hover:shadow-lg
                        "
                    >
                        Let's Connect

                        <ArrowRight
                            size={17}
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default WhyHireMe;