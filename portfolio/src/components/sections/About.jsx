import { motion } from "framer-motion";
import {
    ArrowRight,
    BriefcaseBusiness,
    Code2,
    GraduationCap,
    MapPin,
    Rocket,
    Sparkles,
    Target,
} from "lucide-react";

const highlights = [
    {
        icon: GraduationCap,
        title: "Education",
        description:
            "Currently pursuing BSc (Hons) Computer System Engineering at ISMT College, with a focus on software engineering, databases and modern web development.",
    },
    {
        icon: Code2,
        title: "Development",
        description:
            "Focused on building full stack applications with React, Django REST Framework, REST APIs and PostgreSQL.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Career Direction",
        description:
            "Seeking a Full Stack Developer internship where I can contribute to real projects and grow within a professional team.",
    },
    {
        icon: MapPin,
        title: "Location",
        description:
            "Based in Pokhara, Nepal and open to suitable remote, hybrid and on-site opportunities.",
    },
];

const stats = [
    {
        number: "10+",
        label: "Projects",
        icon: Rocket,
    },
    {
        number: "15+",
        label: "Technologies",
        icon: Code2,
    },
    {
        number: "2+",
        label: "Years Learning",
        icon: Target,
    },
];

const About = () => {
    return (
        <section
            id="about"
            className="
                relative overflow-hidden
                bg-slate-50/70
                py-20 sm:py-24 lg:py-28
            "
        >
            {/* BACKGROUND */}
            <div
                className="
                    pointer-events-none
                    absolute -left-40 top-20
                    h-80 w-80
                    rounded-full
                    bg-green-100/60
                    blur-[120px]
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
                        <Sparkles size={14} />
                        About Me
                    </span>

                    <h2 className="section-title">
                        Developer focused on building
                        <span className="text-green-600">
                            {" "}
                            useful digital products.
                        </span>
                    </h2>

                    <p className="section-description">
                        I&apos;m a Computer System Engineering student with a
                        strong interest in Full Stack Development. I enjoy
                        transforming ideas into practical web applications
                        while continuing to improve my understanding of
                        frontend, backend and software engineering.
                    </p>
                </motion.div>

                {/* MAIN CONTENT */}
                <div
                    className="
                        mx-auto mt-12
                        grid max-w-6xl
                        gap-6
                        lg:grid-cols-[1.15fr_.85fr]
                    "
                >
                    {/* LEFT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="
                            portfolio-card
                            relative overflow-hidden
                            p-6 sm:p-8 lg:p-9
                        "
                    >
                        <div
                            className="
                                absolute right-0 top-0
                                h-40 w-40
                                rounded-full
                                bg-green-100/60
                                blur-[70px]
                            "
                        />

                        <div className="relative z-10">
                            <div className="card-icon">
                                <Target size={21} />
                            </div>

                            <p
                                className="
                                    mt-6
                                    text-xs font-bold
                                    uppercase tracking-[0.17em]
                                    text-green-600
                                "
                            >
                                My Focus
                            </p>

                            <h3
                                className="
                                    mt-2
                                    text-2xl font-bold
                                    tracking-tight
                                    text-slate-900
                                    sm:text-3xl
                                "
                            >
                                Learning by building real applications.
                            </h3>

                            <p
                                className="
                                    mt-5
                                    max-w-2xl
                                    text-sm leading-7
                                    text-slate-600
                                    sm:text-[15px]
                                "
                            >
                                My goal is to become a dependable Full Stack
                                Developer who understands both the user-facing
                                side of an application and the systems working
                                behind it. I strengthen my skills through
                                practical projects, debugging, API development
                                and continuous learning.
                            </p>

                            {/* TECH */}
                            <div className="mt-6 flex flex-wrap gap-2">
                                {[
                                    "React",
                                    "Django REST",
                                    "PostgreSQL",
                                    "REST APIs",
                                    "Responsive UI",
                                ].map((item) => (
                                    <span
                                        key={item}
                                        className="
                                            rounded-lg
                                            border border-green-100
                                            bg-green-50/70
                                            px-3 py-2
                                            text-xs font-semibold
                                            text-green-700
                                        "
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>

                            <a
                                href="#projects"
                                className="
                                    hover-link
                                    mt-7
                                    text-sm font-bold
                                    text-green-700
                                "
                            >
                                Explore my projects
                                <ArrowRight size={16} />
                            </a>
                        </div>
                    </motion.div>

                    {/* STATS */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 25,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        viewport={{
                            once: true,
                        }}
                        transition={{
                            duration: 0.5,
                        }}
                        className="
                            grid grid-cols-3 gap-3
                            lg:grid-cols-1
                        "
                    >
                        {stats.map((stat) => {
                            const Icon = stat.icon;

                            return (
                                <div
                                    key={stat.label}
                                    className="
                                        portfolio-card
                                        flex flex-col
                                        items-center justify-center
                                        p-4
                                        text-center
                                        sm:p-6
                                        lg:flex-row
                                        lg:justify-start
                                        lg:gap-5
                                        lg:text-left
                                    "
                                >
                                    <div className="card-icon">
                                        <Icon size={18} />
                                    </div>

                                    <div className="mt-3 lg:mt-0">
                                        <p
                                            className="
                                                text-xl
                                                font-extrabold
                                                text-slate-900
                                                sm:text-2xl
                                            "
                                        >
                                            {stat.number}
                                        </p>

                                        <p
                                            className="
                                                mt-0.5
                                                text-[10px]
                                                font-semibold
                                                uppercase
                                                tracking-[0.08em]
                                                text-slate-500
                                                sm:text-xs
                                            "
                                        >
                                            {stat.label}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </motion.div>
                </div>

                {/* HIGHLIGHTS */}
                <div
                    className="
                        mx-auto mt-6
                        grid max-w-6xl
                        gap-5
                        sm:grid-cols-2
                        lg:grid-cols-4
                    "
                >
                    {highlights.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
                                initial={{
                                    opacity: 0,
                                    y: 20,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.05,
                                }}
                                className="
                                    portfolio-card
                                    flex h-full
                                    flex-col
                                    p-5 sm:p-6
                                "
                            >
                                <div className="card-icon">
                                    <Icon size={18} />
                                </div>

                                <h3
                                    className="
                                        mt-5
                                        text-base font-bold
                                        text-slate-900
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-2
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
            </div>
        </section>
    );
};

export default About;