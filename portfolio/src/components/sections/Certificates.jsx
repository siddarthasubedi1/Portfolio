import { motion } from "framer-motion";
import {
    Award,
    BookOpen,
    GraduationCap,
    BadgeCheck,
    ArrowUpRight,
    Sparkles,
    CheckCircle2,
    ExternalLink,
    Rocket,
    Cloud,
    TestTube2,
    Boxes,
    Workflow,
    Database,
    Layers3,
    Code2,
} from "lucide-react";

const certificates = [
    {
        title: "UI/UX Design Training",
        organization: "ISMT College",
        year: "2025",
        description:
            "Completed a 5-day workshop covering wireframing, prototyping, design principles and user experience fundamentals.",
        icon: Award,
        type: "Training",
        status: "Completed",
        link: "#",
    },
    {
        title: "Full Stack Web Development",
        organization: "Personal Learning",
        year: "Ongoing",
        description:
            "Building full stack applications using React, Django REST Framework and PostgreSQL through practical projects.",
        icon: GraduationCap,
        type: "Development",
        status: "In Progress",
        link: "#",
    },
    {
        title: "Continuous Learning",
        organization: "Self Learning",
        year: "Current",
        description:
            "Expanding my knowledge in deployment, Docker, Git, testing, backend architecture and modern software engineering.",
        icon: BookOpen,
        type: "Self Learning",
        status: "Active",
        link: "#",
    },
];

const currentlyLearning = [
    {
        name: "Docker",
        icon: Boxes,
        description: "Containers & deployment",
    },
    {
        name: "CI/CD",
        icon: Workflow,
        description: "Automated delivery",
    },
    {
        name: "Testing",
        icon: TestTube2,
        description: "Reliable applications",
    },
    {
        name: "Redis",
        icon: Database,
        description: "Caching & performance",
    },
    {
        name: "Celery",
        icon: Rocket,
        description: "Background tasks",
    },
    {
        name: "AWS Basics",
        icon: Cloud,
        description: "Cloud fundamentals",
    },
    {
        name: "System Design",
        icon: Layers3,
        description: "Scalable architecture",
    },
    {
        name: "Clean Architecture",
        icon: Code2,
        description: "Maintainable software",
    },
];

const Certificates = () => {
    return (
        <section
            id="certificates"
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
                    absolute -left-32 top-28
                    h-80 w-80
                    rounded-full
                    bg-emerald-100/60
                    blur-[120px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute -right-40 bottom-16
                    h-96 w-96
                    rounded-full
                    bg-green-100/50
                    blur-[130px]
                "
            />

            <div className="container-custom relative z-10">

                {/* ================= HEADER ================= */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span
                        className="
                            inline-flex items-center gap-2
                            rounded-full
                            border border-green-200
                            bg-green-50
                            px-4 py-2
                            text-xs font-bold
                            uppercase tracking-[0.16em]
                            text-green-700
                            sm:text-sm
                        "
                    >
                        <Sparkles size={15} />
                        Certificates & Learning
                    </span>

                    <h2
                        className="
                            mt-6
                            text-3xl font-black
                            tracking-tight text-slate-900
                            sm:text-4xl
                            lg:text-5xl
                        "
                    >
                        Growing Through
                        <span className="text-green-600">
                            {" "}
                            Continuous Learning.
                        </span>
                    </h2>

                    <p
                        className="
                            mx-auto mt-5
                            max-w-2xl
                            text-[15px] leading-7
                            text-slate-600
                            sm:text-base
                        "
                    >
                        I continue strengthening my technical skills through
                        training, self-learning and hands-on development projects.
                    </p>
                </motion.div>

                {/* ================= CERTIFICATE CARDS ================= */}
                <div
                    className="
                        mx-auto mt-14
                        grid max-w-6xl
                        gap-5
                        md:grid-cols-2
                        xl:grid-cols-3
                    "
                >
                    {certificates.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
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
                                    duration: 0.45,
                                    delay: index * 0.07,
                                }}
                                className="
                                    group
                                    relative
                                    flex h-full
                                    min-h-[315px]
                                    flex-col
                                    overflow-hidden
                                    rounded-[22px]
                                    border border-slate-200
                                    bg-white
                                    p-6
                                    shadow-[0_8px_30px_rgba(15,23,42,0.04)]
                                    transition-all duration-300
                                    hover:-translate-y-1.5
                                    hover:border-green-200
                                    hover:shadow-[0_18px_45px_rgba(34,197,94,0.09)]
                                "
                            >
                                {/* HOVER ACCENT */}
                                <div
                                    className="
                                        absolute inset-x-0 top-0
                                        h-[3px]
                                        origin-left scale-x-0
                                        bg-gradient-to-r
                                        from-green-500
                                        to-emerald-400
                                        transition-transform duration-300
                                        group-hover:scale-x-100
                                    "
                                />

                                {/* TOP */}
                                <div className="flex items-start justify-between gap-4">
                                    <div
                                        className="
                                            flex h-12 w-12
                                            shrink-0
                                            items-center justify-center
                                            rounded-xl
                                            bg-green-50
                                            text-green-600
                                            transition-all duration-300
                                            group-hover:bg-green-600
                                            group-hover:text-white
                                        "
                                    >
                                        <Icon
                                            size={21}
                                            strokeWidth={2}
                                        />
                                    </div>

                                    <span
                                        className="
                                            rounded-full
                                            border border-slate-200
                                            bg-slate-50
                                            px-3 py-1.5
                                            text-[11px] font-bold
                                            text-slate-500
                                        "
                                    >
                                        {item.year}
                                    </span>
                                </div>

                                {/* TYPE */}
                                <div className="mt-6">
                                    <span
                                        className="
                                            text-[11px] font-bold
                                            uppercase tracking-[0.16em]
                                            text-green-600
                                        "
                                    >
                                        {item.type}
                                    </span>
                                </div>

                                <h3
                                    className="
                                        mt-2
                                        text-xl font-bold
                                        leading-7
                                        text-slate-900
                                    "
                                >
                                    {item.title}
                                </h3>

                                <p
                                    className="
                                        mt-1.5
                                        text-sm font-semibold
                                        text-slate-500
                                    "
                                >
                                    {item.organization}
                                </p>

                                <p
                                    className="
                                        mt-4 flex-1
                                        text-sm leading-7
                                        text-slate-600
                                    "
                                >
                                    {item.description}
                                </p>

                                {/* FOOTER */}
                                <div
                                    className="
                                        mt-6
                                        flex items-center justify-between
                                        border-t border-slate-100
                                        pt-4
                                    "
                                >
                                    <span
                                        className="
                                            inline-flex items-center gap-1.5
                                            text-xs font-semibold
                                            text-green-600
                                        "
                                    >
                                        <CheckCircle2 size={14} />
                                        {item.status}
                                    </span>

                                    {item.link !== "#" ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={`View ${item.title}`}
                                            className="
                                                flex h-9 w-9
                                                items-center justify-center
                                                rounded-lg
                                                border border-slate-200
                                                text-slate-600
                                                transition-all
                                                hover:border-green-300
                                                hover:bg-green-50
                                                hover:text-green-600
                                            "
                                        >
                                            <ExternalLink size={15} />
                                        </a>
                                    ) : (
                                        <span
                                            className="
                                                text-[11px]
                                                font-medium
                                                text-slate-400
                                            "
                                        >
                                            Learning Record
                                        </span>
                                    )}
                                </div>
                            </motion.article>
                        );
                    })}
                </div>

                {/* ================= CURRENTLY LEARNING ================= */}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55 }}
                    className="
                        relative
                        mx-auto mt-14
                        max-w-6xl
                        overflow-hidden
                        rounded-[26px]
                        border border-slate-200
                        bg-white
                        p-6
                        shadow-[0_10px_35px_rgba(15,23,42,0.04)]
                        sm:p-8
                        lg:p-10
                    "
                >
                    {/* SOFT GLOW */}
                    <div
                        className="
                            pointer-events-none
                            absolute -right-20 -top-20
                            h-64 w-64
                            rounded-full
                            bg-green-100/60
                            blur-[90px]
                        "
                    />

                    <div className="relative z-10">

                        {/* LEARNING HEADER */}
                        <div
                            className="
                                flex flex-col
                                items-start justify-between
                                gap-5
                                md:flex-row
                                md:items-center
                            "
                        >
                            <div className="flex items-start gap-4">
                                <div
                                    className="
                                        flex h-12 w-12
                                        shrink-0
                                        items-center justify-center
                                        rounded-xl
                                        bg-green-600
                                        text-white
                                        shadow-[0_8px_22px_rgba(34,197,94,0.2)]
                                    "
                                >
                                    <BadgeCheck size={21} />
                                </div>

                                <div>
                                    <p
                                        className="
                                            text-xs font-bold
                                            uppercase tracking-[0.17em]
                                            text-green-600
                                        "
                                    >
                                        Development Focus
                                    </p>

                                    <h3
                                        className="
                                            mt-1
                                            text-xl font-bold
                                            text-slate-900
                                            sm:text-2xl
                                        "
                                    >
                                        Currently Learning
                                    </h3>

                                    <p
                                        className="
                                            mt-2
                                            max-w-2xl
                                            text-sm leading-6
                                            text-slate-600
                                        "
                                    >
                                        Technologies and concepts I am exploring to
                                        improve backend development, deployment and
                                        software architecture.
                                    </p>
                                </div>
                            </div>

                            <span
                                className="
                                    shrink-0
                                    rounded-full
                                    bg-green-50
                                    px-4 py-2
                                    text-xs font-bold
                                    text-green-700
                                "
                            >
                                Always Improving
                            </span>
                        </div>

                        {/* LEARNING GRID */}
                        <div
                            className="
                                mt-8
                                grid gap-3
                                sm:grid-cols-2
                                lg:grid-cols-4
                            "
                        >
                            {currentlyLearning.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.name}
                                        initial={{
                                            opacity: 0,
                                            scale: 0.96,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            scale: 1,
                                        }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.35,
                                            delay: index * 0.04,
                                        }}
                                        whileHover={{
                                            y: -3,
                                        }}
                                        className="
                                            group
                                            flex items-center gap-3
                                            rounded-xl
                                            border border-slate-200
                                            bg-slate-50/60
                                            p-4
                                            transition-all duration-300
                                            hover:border-green-200
                                            hover:bg-green-50/60
                                        "
                                    >
                                        <span
                                            className="
                                                flex h-9 w-9
                                                shrink-0
                                                items-center justify-center
                                                rounded-lg
                                                bg-white
                                                text-green-600
                                                shadow-sm
                                                transition
                                                group-hover:bg-green-600
                                                group-hover:text-white
                                            "
                                        >
                                            <Icon size={16} />
                                        </span>

                                        <div>
                                            <p
                                                className="
                                                    text-sm font-bold
                                                    text-slate-800
                                                "
                                            >
                                                {item.name}
                                            </p>

                                            <p
                                                className="
                                                    mt-0.5
                                                    text-[11px]
                                                    text-slate-500
                                                "
                                            >
                                                {item.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>

                        {/* GOAL */}
                        <div
                            className="
                                mt-8
                                flex flex-col
                                items-start justify-between
                                gap-4
                                rounded-xl
                                border border-green-100
                                bg-green-50/60
                                p-5
                                sm:flex-row
                                sm:items-center
                            "
                        >
                            <div>
                                <p
                                    className="
                                        text-xs font-bold
                                        uppercase tracking-[0.15em]
                                        text-green-600
                                    "
                                >
                                    Long-Term Goal
                                </p>

                                <p
                                    className="
                                        mt-1
                                        max-w-3xl
                                        text-sm leading-6
                                        text-slate-700
                                    "
                                >
                                    Build a strong understanding of backend
                                    architecture, scalable systems, cloud deployment
                                    and clean software design.
                                </p>
                            </div>

                            <Sparkles
                                size={22}
                                className="
                                    hidden shrink-0
                                    text-green-500
                                    sm:block
                                "
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;