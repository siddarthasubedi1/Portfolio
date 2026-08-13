import { motion } from "framer-motion";
import {
    ArrowDown,
    ArrowRight,
    BriefcaseBusiness,
    Code2,
    Download,
    MapPin,
    Sparkles,
} from "lucide-react";

import {
    FaGithub,
    FaLinkedinIn,
    FaPython,
    FaReact,
} from "react-icons/fa";

import {
    SiDjango,
    SiPostgresql,
} from "react-icons/si";

import profile from "../../constants/profile";

const technologies = [
    {
        name: "React",
        icon: FaReact,
    },
    {
        name: "Python",
        icon: FaPython,
    },
    {
        name: "Django REST",
        icon: SiDjango,
    },
    {
        name: "PostgreSQL",
        icon: SiPostgresql,
    },
];

const Hero = () => {
    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-gradient-primary pt-32 pb-20 lg:pt-40 lg:pb-28"
        >
            {/* ================= BACKGROUND ================= */}

            <div
                className="
                    pointer-events-none
                    absolute inset-0
                    opacity-[0.025]
                "
                style={{
                    backgroundImage: `
                        linear-gradient(to right, #0f172a 1px, transparent 1px),
                        linear-gradient(to bottom, #0f172a 1px, transparent 1px)
                    `,
                    backgroundSize: "42px 42px",
                }}
            />

            <div
                className="
                    pointer-events-none
                    absolute -left-32 top-20
                    h-[360px] w-[360px]
                    rounded-full
                    bg-green-100/70
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute -right-40 bottom-10
                    h-[420px] w-[420px]
                    rounded-full
                    bg-emerald-100/50
                    blur-[130px]
                "
            />

            {/* ================= CONTENT ================= */}

            <div className="container-custom relative z-10">
                <div
                    className="
                        mx-auto
                        grid max-w-6xl
                        items-center
                        gap-14
                        lg:grid-cols-[1.08fr_.92fr]
                        lg:gap-16
                    "
                >
                    {/* ================= LEFT ================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            y: 25,
                        }}
                        animate={{
                            opacity: 1,
                            y: 0,
                        }}
                        transition={{
                            duration: 0.6,
                        }}
                        className="
                            order-2
                            text-center
                            lg:order-1
                            lg:text-left
                        "
                    >
                        {/* STATUS */}

                        <div
                            className="
                                flex flex-wrap
                                items-center
                                justify-center
                                gap-2
                                lg:justify-start
                            "
                        >
                            <span
                                className="
                                    inline-flex
                                    items-center gap-2
                                    rounded-full
                                    border border-green-200
                                    bg-green-50
                                    px-3.5 py-2
                                    text-xs
                                    font-bold
                                    text-green-700
                                "
                            >
                                <span className="relative flex h-2 w-2">
                                    <span
                                        className="
                                            absolute
                                            inline-flex h-full w-full
                                            animate-ping
                                            rounded-full
                                            bg-green-500
                                            opacity-60
                                        "
                                    />

                                    <span
                                        className="
                                            relative
                                            inline-flex h-2 w-2
                                            rounded-full
                                            bg-green-500
                                        "
                                    />
                                </span>

                                Open to Internship
                            </span>

                            <span
                                className="
                                    inline-flex
                                    items-center gap-1.5
                                    rounded-full
                                    border border-slate-200
                                    bg-white
                                    px-3.5 py-2
                                    text-xs
                                    font-semibold
                                    text-slate-500
                                "
                            >
                                <MapPin size={13} />

                                Pokhara, Nepal
                            </span>
                        </div>

                        {/* INTRO */}

                        <p
                            className="
                                mt-7
                                text-sm font-bold
                                uppercase
                                tracking-[0.2em]
                                text-green-600
                            "
                        >
                            Hello, I'm
                        </p>

                        <h1
                            className="
                                mt-2
                                text-[42px]
                                font-black
                                leading-[1.08]
                                tracking-[-0.045em]
                                text-slate-900
                                sm:text-5xl
                                md:text-6xl
                                lg:text-[64px]
                            "
                        >
                            Siddartha Raj
                            <span className="block text-green-600">
                                Subedi.
                            </span>
                        </h1>

                        {/* ROLE */}

                        <div
                            className="
                                mt-5
                                flex items-center
                                justify-center gap-2
                                lg:justify-start
                            "
                        >
                            <Code2
                                size={19}
                                className="text-green-600"
                            />

                            <h2
                                className="
                                    text-lg font-bold
                                    text-slate-700
                                    sm:text-xl
                                "
                            >
                                Full Stack Developer
                            </h2>
                        </div>

                        {/* DESCRIPTION */}

                        <p
                            className="
                                mx-auto mt-5
                                max-w-xl
                                text-[15px]
                                leading-7
                                text-slate-600
                                sm:text-base
                                lg:mx-0
                            "
                        >
                            Computer System Engineering student building
                            responsive full stack applications with{" "}
                            <span className="font-semibold text-slate-800">
                                React
                            </span>
                            ,{" "}
                            <span className="font-semibold text-slate-800">
                                Django REST Framework
                            </span>{" "}
                            and{" "}
                            <span className="font-semibold text-slate-800">
                                PostgreSQL
                            </span>
                            .
                        </p>

                        {/* CTA */}

                        <div
                            className="
                                mt-8
                                flex flex-col
                                items-center
                                justify-center
                                gap-3
                                sm:flex-row
                                lg:justify-start
                            "
                        >
                            <a
                                href="#projects"
                                className="
                                    group
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    bg-green-600
                                    px-5 py-3
                                    text-sm
                                    font-bold
                                    text-white
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:bg-green-700
                                    hover:shadow-[0_10px_25px_rgba(22,163,74,0.18)]
                                    sm:w-auto
                                "
                            >
                                View My Work

                                <ArrowRight
                                    size={16}
                                    className="
                                        transition-transform
                                        group-hover:translate-x-1
                                    "
                                />
                            </a>

                            <a
                                href={profile.resume}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    inline-flex
                                    w-full
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    border border-slate-200
                                    bg-white
                                    px-5 py-3
                                    text-sm
                                    font-bold
                                    text-slate-700
                                    transition-all
                                    hover:-translate-y-0.5
                                    hover:border-green-300
                                    hover:bg-green-50
                                    hover:text-green-700
                                    sm:w-auto
                                "
                            >
                                <Download size={16} />

                                Resume
                            </a>
                        </div>

                        {/* SOCIAL + MINI INFO */}

                        <div
                            className="
                                mt-8
                                flex flex-col
                                items-center
                                gap-5
                                sm:flex-row
                                sm:justify-center
                                lg:justify-start
                            "
                        >
                            <div className="flex items-center gap-2">
                                <a
                                    href={profile.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="GitHub"
                                    className="
                                        flex h-10 w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border border-slate-200
                                        bg-white
                                        text-slate-600
                                        transition-all
                                        hover:-translate-y-1
                                        hover:border-green-300
                                        hover:bg-green-50
                                        hover:text-green-700
                                    "
                                >
                                    <FaGithub size={17} />
                                </a>

                                <a
                                    href={profile.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="LinkedIn"
                                    className="
                                        flex h-10 w-10
                                        items-center
                                        justify-center
                                        rounded-xl
                                        border border-slate-200
                                        bg-white
                                        text-slate-600
                                        transition-all
                                        hover:-translate-y-1
                                        hover:border-green-300
                                        hover:bg-green-50
                                        hover:text-green-700
                                    "
                                >
                                    <FaLinkedinIn size={17} />
                                </a>
                            </div>

                            <div
                                className="
                                    hidden h-7 w-px
                                    bg-slate-200
                                    sm:block
                                "
                            />

                            <div
                                className="
                                    flex items-center
                                    gap-2
                                    text-xs
                                    font-semibold
                                    text-slate-500
                                "
                            >
                                <BriefcaseBusiness
                                    size={15}
                                    className="text-green-600"
                                />

                                Available for development opportunities
                            </div>
                        </div>
                    </motion.div>

                    {/* ================= RIGHT / PROFILE ================= */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            scale: 0.94,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                        }}
                        transition={{
                            duration: 0.65,
                            delay: 0.1,
                        }}
                        className="
                            order-1
                            flex justify-center
                            lg:order-2
                        "
                    >
                        <div
                            className="
                                relative
                                w-full
                                max-w-[390px]
                                sm:max-w-[430px]
                            "
                        >
                            {/* DECORATIVE OUTER SHAPE */}

                            <div
                                className="
                                    absolute
                                    -inset-5
                                    rounded-[40px]
                                    border border-green-100
                                    bg-gradient-to-br
                                    from-green-50
                                    via-white
                                    to-slate-50
                                    sm:-inset-7
                                "
                            />

                            {/* DOT DECORATION */}

                            <div
                                className="
                                    absolute
                                    -right-4 -top-7
                                    hidden
                                    grid-cols-4
                                    gap-2
                                    opacity-50
                                    sm:grid
                                "
                            >
                                {Array.from({ length: 16 }).map(
                                    (_, index) => (
                                        <span
                                            key={index}
                                            className="
                                                h-1.5 w-1.5
                                                rounded-full
                                                bg-green-400
                                            "
                                        />
                                    ),
                                )}
                            </div>

                            {/* IMAGE CARD */}

                            <div
                                className="
                                    relative
                                    overflow-hidden
                                    rounded-[28px]
                                    border border-slate-200
                                    bg-white
                                    p-3
                                    shadow-[0_25px_70px_rgba(15,23,42,0.12)]
                                "
                            >
                                <div
                                    className="
                                        relative
                                        aspect-[4/5]
                                        overflow-hidden
                                        rounded-[20px]
                                        bg-slate-100
                                    "
                                >
                                    <img
                                        src={profile.image}
                                        alt="Siddartha Raj Subedi"
                                        className="
                                            h-full w-full
                                            object-cover
                                            object-center
                                        "
                                    />

                                    {/* IMAGE GRADIENT */}

                                    <div
                                        className="
                                            absolute inset-x-0
                                            bottom-0 h-32
                                            bg-gradient-to-t
                                            from-slate-950/45
                                            to-transparent
                                        "
                                    />

                                    {/* BOTTOM IMAGE LABEL */}

                                    <div
                                        className="
                                            absolute
                                            bottom-4 left-4 right-4
                                            flex items-center
                                            justify-between
                                            rounded-xl
                                            border border-white/20
                                            bg-white/90
                                            px-4 py-3
                                            backdrop-blur-lg
                                        "
                                    >
                                        <div>
                                            <p
                                                className="
                                                    text-xs
                                                    font-bold
                                                    text-slate-900
                                                "
                                            >
                                                Full Stack Developer
                                            </p>

                                            <p
                                                className="
                                                    mt-0.5
                                                    text-[10px]
                                                    font-medium
                                                    text-slate-500
                                                "
                                            >
                                                React • Django • PostgreSQL
                                            </p>
                                        </div>

                                        <span
                                            className="
                                                flex h-8 w-8
                                                items-center
                                                justify-center
                                                rounded-lg
                                                bg-green-600
                                                text-white
                                            "
                                        >
                                            <Code2 size={15} />
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* FLOATING CARD 1 */}

                            <motion.div
                                animate={{
                                    y: [0, -6, 0],
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    -left-8 top-[22%]
                                    hidden
                                    items-center gap-3
                                    rounded-xl
                                    border border-slate-200
                                    bg-white/95
                                    px-3.5 py-3
                                    shadow-[0_12px_30px_rgba(15,23,42,0.09)]
                                    backdrop-blur
                                    lg:flex
                                "
                            >
                                <span
                                    className="
                                        flex h-9 w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-green-50
                                        text-green-600
                                    "
                                >
                                    <FaReact size={18} />
                                </span>

                                <div>
                                    <p
                                        className="
                                            text-[10px]
                                            font-medium
                                            text-slate-400
                                        "
                                    >
                                        Frontend
                                    </p>

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            text-slate-800
                                        "
                                    >
                                        React
                                    </p>
                                </div>
                            </motion.div>

                            {/* FLOATING CARD 2 */}

                            <motion.div
                                animate={{
                                    y: [0, 6, 0],
                                }}
                                transition={{
                                    duration: 4.5,
                                    repeat: Infinity,
                                    ease: "easeInOut",
                                }}
                                className="
                                    absolute
                                    -right-10 bottom-[23%]
                                    hidden
                                    items-center gap-3
                                    rounded-xl
                                    border border-slate-200
                                    bg-white/95
                                    px-3.5 py-3
                                    shadow-[0_12px_30px_rgba(15,23,42,0.09)]
                                    backdrop-blur
                                    lg:flex
                                "
                            >
                                <span
                                    className="
                                        flex h-9 w-9
                                        items-center
                                        justify-center
                                        rounded-lg
                                        bg-green-50
                                        text-green-600
                                    "
                                >
                                    <SiDjango size={17} />
                                </span>

                                <div>
                                    <p
                                        className="
                                            text-[10px]
                                            font-medium
                                            text-slate-400
                                        "
                                    >
                                        Backend
                                    </p>

                                    <p
                                        className="
                                            text-xs
                                            font-bold
                                            text-slate-800
                                        "
                                    >
                                        Django REST
                                    </p>
                                </div>
                            </motion.div>

                            {/* AVAILABLE BADGE */}

                            <div
                                className="
                                    absolute
                                    -bottom-6 left-1/2
                                    flex -translate-x-1/2
                                    items-center gap-2
                                    whitespace-nowrap
                                    rounded-full
                                    border border-green-200
                                    bg-white
                                    px-4 py-2.5
                                    text-xs
                                    font-bold
                                    text-green-700
                                    shadow-lg
                                "
                            >
                                <Sparkles size={14} />

                                Ready to learn & contribute
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* ================= TECH STRIP ================= */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.5,
                        delay: 0.35,
                    }}
                    className="
                        mx-auto mt-20
                        max-w-6xl
                        border-y border-slate-200
                        py-5
                        lg:mt-16
                    "
                >
                    <div
                        className="
                            flex flex-col
                            items-center
                            justify-between
                            gap-5
                            md:flex-row
                        "
                    >
                        <p
                            className="
                                shrink-0
                                text-[10px]
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-slate-400
                            "
                        >
                            Main Stack
                        </p>

                        <div
                            className="
                                grid w-full
                                grid-cols-2
                                gap-3
                                sm:grid-cols-4
                                md:max-w-3xl
                            "
                        >
                            {technologies.map((technology) => {
                                const Icon = technology.icon;

                                return (
                                    <div
                                        key={technology.name}
                                        className="
                                            group
                                            flex items-center
                                            justify-center
                                            gap-2.5
                                            rounded-lg
                                            px-3 py-2
                                            text-slate-500
                                            transition
                                            hover:bg-green-50
                                            hover:text-green-700
                                        "
                                    >
                                        <Icon
                                            size={17}
                                            className="
                                                transition-transform
                                                group-hover:scale-110
                                            "
                                        />

                                        <span
                                            className="
                                                text-xs
                                                font-semibold
                                            "
                                        >
                                            {technology.name}
                                        </span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                {/* SCROLL INDICATOR */}

                <a
                    href="#featured-project"
                    aria-label="Scroll to featured project"
                    className="
                        absolute
                        bottom-5 left-1/2
                        hidden -translate-x-1/2
                        flex-col items-center
                        gap-1
                        text-slate-400
                        transition
                        hover:text-green-600
                        xl:flex
                    "
                >
                    <span
                        className="
                            text-[9px]
                            font-bold
                            uppercase
                            tracking-[0.16em]
                        "
                    >
                        Scroll
                    </span>

                    <ArrowDown
                        size={14}
                        className="animate-bounce"
                    />
                </a>
            </div>
        </section>
    );
};

export default Hero;