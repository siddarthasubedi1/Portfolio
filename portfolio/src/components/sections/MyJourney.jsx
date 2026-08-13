import { motion } from "framer-motion";
import {
    ArrowUpRight,
    Briefcase,
    Code2,
    GraduationCap,
    MapPin,
    Trophy,
} from "lucide-react";

const journey = [
    {
        year: "2022",
        icon: GraduationCap,
        title: "Higher Secondary Education",
        subtitle: "Kalika Secondary School",
        location: "Pokhara, Nepal",
        description:
            "Completed Higher Secondary Education in Science and developed a strong foundation in analytical thinking, problem solving and computer science.",
        type: "Education",
    },
    {
        year: "2023 – Present",
        icon: GraduationCap,
        title: "BSc (Hons) Computer System Engineering",
        subtitle: "ISMT College",
        location: "Pokhara, Nepal",
        description:
            "Studying software engineering, databases, networking and full stack development while working on practical academic projects.",
        type: "University",
    },
    {
        year: "2024",
        icon: Code2,
        title: "Full Stack Development Journey",
        subtitle: "React + Django REST Framework",
        location: "Personal Learning",
        description:
            "Started building full stack applications using React for frontend development and Django REST Framework for backend APIs.",
        type: "Development",
    },
    {
        year: "2024 – Present",
        icon: Briefcase,
        title: "Building Real Projects",
        subtitle: "Authentication, E-commerce & Portfolio",
        location: "Project Based Learning",
        description:
            "Built practical systems involving authentication, REST APIs, databases, responsive interfaces and reusable application architecture.",
        type: "Projects",
    },
    {
        year: "Current Goal",
        icon: Trophy,
        title: "Seeking Internship",
        subtitle: "Full Stack Developer",
        location: "Open to Opportunities",
        description:
            "Looking for an internship where I can contribute to real projects, learn from experienced developers and continue growing professionally.",
        type: "Career",
    },
];

const JourneyCard = ({ item, align }) => {
    return (
        <article
            className="
                portfolio-card
                group
                relative overflow-hidden
                p-5 sm:p-6
            "
        >
            {/* TOP ACCENT */}
            <div
                className="
                    absolute inset-x-0 top-0
                    h-[3px]
                    origin-left
                    scale-x-0
                    bg-gradient-to-r
                    from-green-500
                    to-emerald-400
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                "
            />

            {/* YEAR + TYPE */}
            <div
                className={`
                    flex flex-wrap
                    items-center gap-2
                    ${align === "right"
                        ? "lg:justify-end"
                        : ""
                    }
                `}
            >
                <span
                    className="
                        rounded-full
                        bg-green-50
                        px-3 py-1.5
                        text-[11px]
                        font-bold
                        text-green-700
                    "
                >
                    {item.year}
                </span>

                <span
                    className="
                        rounded-full
                        border border-slate-200
                        bg-slate-50
                        px-3 py-1.5
                        text-[11px]
                        font-semibold
                        text-slate-500
                    "
                >
                    {item.type}
                </span>
            </div>

            <h3
                className={`
                    mt-4
                    text-lg font-bold
                    leading-7
                    text-slate-900
                    sm:text-xl
                    ${align === "right"
                        ? "lg:text-right"
                        : ""
                    }
                `}
            >
                {item.title}
            </h3>

            <p
                className={`
                    mt-1.5
                    text-sm font-semibold
                    text-green-600
                    ${align === "right"
                        ? "lg:text-right"
                        : ""
                    }
                `}
            >
                {item.subtitle}
            </p>

            <div
                className={`
                    mt-3
                    flex items-center
                    gap-2
                    text-xs
                    font-medium
                    text-slate-400
                    ${align === "right"
                        ? "lg:justify-end"
                        : ""
                    }
                `}
            >
                <MapPin size={13} />
                {item.location}
            </div>

            <p
                className={`
                    mt-4
                    text-sm leading-7
                    text-slate-600
                    ${align === "right"
                        ? "lg:text-right"
                        : ""
                    }
                `}
            >
                {item.description}
            </p>
        </article>
    );
};

const MyJourney = () => {
    return (
        <section
            id="journey"
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
                    absolute -left-40 top-32
                    h-80 w-80
                    rounded-full
                    bg-green-100/50
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute -right-40 bottom-20
                    h-96 w-96
                    rounded-full
                    bg-emerald-100/40
                    blur-[130px]
                "
            />

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{
                        once: true,
                    }}
                    transition={{
                        duration: 0.55,
                    }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="section-badge">
                        <Briefcase size={15} />
                        My Journey
                    </span>

                    <h2 className="section-title">
                        Learning, Building
                        <span className="text-green-600">
                            {" "}
                            & Growing.
                        </span>
                    </h2>

                    <p className="section-description">
                        A quick look at how my education, learning and practical
                        development experience have shaped my path as a Full
                        Stack Developer.
                    </p>
                </motion.div>

                {/* TIMELINE */}
                <div
                    className="
                        relative
                        mx-auto mt-14
                        max-w-6xl
                        sm:mt-16
                    "
                >
                    {/* DESKTOP LINE */}
                    <div
                        className="
                            absolute
                            left-1/2 top-4
                            hidden
                            h-[calc(100%-2rem)]
                            w-px
                            -translate-x-1/2
                            bg-gradient-to-b
                            from-green-200
                            via-green-400
                            to-green-100
                            lg:block
                        "
                    />

                    {/* MOBILE LINE */}
                    <div
                        className="
                            absolute
                            left-[21px] top-5
                            h-[calc(100%-2.5rem)]
                            w-px
                            bg-green-200
                            lg:hidden
                        "
                    />

                    <div className="space-y-6 lg:space-y-10">
                        {journey.map((item, index) => {
                            const Icon = item.icon;
                            const isLeft = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 30,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    viewport={{
                                        once: true,
                                        amount: 0.2,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.06,
                                    }}
                                    className="
                                        relative
                                        grid
                                        grid-cols-[44px_1fr]
                                        gap-4
                                        lg:grid-cols-[1fr_72px_1fr]
                                        lg:gap-0
                                    "
                                >
                                    {/* LEFT DESKTOP */}
                                    <div
                                        className={`
                                            hidden lg:block
                                            ${isLeft
                                                ? "pr-8"
                                                : "order-3 pl-8"
                                            }
                                        `}
                                    >
                                        {isLeft && (
                                            <JourneyCard
                                                item={item}
                                                align="right"
                                            />
                                        )}
                                    </div>

                                    {/* CENTER ICON */}
                                    <div
                                        className="
                                            relative z-10
                                            flex items-start
                                            justify-center
                                            pt-1
                                            lg:order-2
                                        "
                                    >
                                        <div
                                            className="
                                                flex
                                                h-11 w-11
                                                shrink-0
                                                items-center
                                                justify-center
                                                rounded-2xl
                                                border-4
                                                border-white
                                                bg-green-600
                                                text-white
                                                shadow-[0_8px_24px_rgba(34,197,94,0.25)]
                                                sm:h-12
                                                sm:w-12
                                            "
                                        >
                                            <Icon
                                                size={20}
                                                strokeWidth={2}
                                            />
                                        </div>
                                    </div>

                                    {/* RIGHT / MOBILE */}
                                    <div
                                        className={
                                            isLeft
                                                ? "lg:order-3 lg:pl-8"
                                                : "lg:order-1 lg:pr-8"
                                        }
                                    >
                                        <div className="lg:hidden">
                                            <JourneyCard
                                                item={item}
                                                align="left"
                                            />
                                        </div>

                                        {!isLeft && (
                                            <div className="hidden lg:block">
                                                <JourneyCard
                                                    item={item}
                                                    align="left"
                                                />
                                            </div>
                                        )}
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
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
                        mx-auto mt-14
                        flex max-w-6xl
                        flex-col
                        items-center justify-between
                        gap-6
                        rounded-[24px]
                        border border-green-100
                        bg-green-50/70
                        px-6 py-7
                        text-center
                        sm:px-8
                        lg:flex-row
                        lg:text-left
                    "
                >
                    <div>
                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-green-600
                            "
                        >
                            Next Step
                        </p>

                        <h3
                            className="
                                mt-2
                                text-xl font-bold
                                text-slate-900
                                sm:text-2xl
                            "
                        >
                            Ready to turn learning into industry experience.
                        </h3>

                        <p
                            className="
                                mt-2
                                max-w-2xl
                                text-sm leading-6
                                text-slate-600
                            "
                        >
                            My next goal is to work with a professional
                            development team and contribute to meaningful
                            software projects.
                        </p>
                    </div>

                    <a
                        href="#contact"
                        className="btn-primary btn-arrow shrink-0"
                    >
                        Let&apos;s Connect
                        <ArrowUpRight size={16} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default MyJourney;