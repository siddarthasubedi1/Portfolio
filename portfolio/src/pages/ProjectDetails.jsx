import { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";

import {
    ArrowLeft,
    ArrowRight,
    Check,
    ExternalLink,
    FolderGit2,
    Layers3,
    Lightbulb,
    MonitorSmartphone,
    Sparkles,
    Target,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { projects } from "../constants/projectData";

const techColors = {
    React: "bg-cyan-50 text-cyan-700 border-cyan-100",
    Vite: "bg-purple-50 text-purple-700 border-purple-100",
    Python: "bg-yellow-50 text-yellow-700 border-yellow-100",
    Django: "bg-green-50 text-green-700 border-green-100",
    PostgreSQL: "bg-blue-50 text-blue-700 border-blue-100",

    "Django REST Framework":
        "bg-emerald-50 text-emerald-700 border-emerald-100",

    DRF: "bg-emerald-50 text-emerald-700 border-emerald-100",

    JWT: "bg-rose-50 text-rose-700 border-rose-100",

    "Tailwind CSS":
        "bg-sky-50 text-sky-700 border-sky-100",

    "Framer Motion":
        "bg-violet-50 text-violet-700 border-violet-100",
};

const ProjectDetails = () => {
    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug,
    );

    if (!project) {
        return (
            <section
                className="
                    flex min-h-screen
                    items-center justify-center
                    bg-white
                    px-5
                    py-32
                "
            >
                <div className="max-w-lg text-center">

                    <div
                        className="
                            mx-auto
                            flex h-14 w-14
                            items-center justify-center
                            rounded-2xl
                            bg-green-50
                            text-green-600
                        "
                    >
                        <FolderGit2 size={23} />
                    </div>

                    <h1
                        className="
                            mt-6
                            text-3xl font-black
                            text-slate-900
                        "
                    >
                        Project not found
                    </h1>

                    <p
                        className="
                            mt-3
                            text-sm leading-7
                            text-slate-600
                        "
                    >
                        The project you are looking for does not
                        exist or may have been moved.
                    </p>

                    <Link
                        to="/"
                        className="
                            btn-primary btn-arrow
                            mt-7
                        "
                    >
                        <ArrowLeft size={16} />
                        Back Home
                    </Link>

                </div>
            </section>
        );
    }

    return (
        <main
            className="
                relative
                overflow-hidden
                bg-white
                pb-24
                pt-28
                sm:pt-32
                lg:pb-28
            "
        >
            {/* BACKGROUND DECORATION */}

            <div
                className="
                    pointer-events-none
                    absolute -left-40 top-40
                    h-96 w-96
                    rounded-full
                    bg-green-100/50
                    blur-[130px]
                "
            />

            <div
                className="
                    pointer-events-none
                    absolute -right-40 top-[40%]
                    h-96 w-96
                    rounded-full
                    bg-emerald-100/40
                    blur-[130px]
                "
            />

            <div className="container-custom relative z-10">

                {/* ========================================
                    TOP NAVIGATION
                ======================================== */}

                <div
                    className="
                        flex flex-col
                        justify-between
                        gap-4
                        sm:flex-row
                        sm:items-center
                    "
                >
                    <Link
                        to="/#projects"
                        className="
                            group
                            inline-flex w-fit
                            items-center gap-2
                            rounded-xl
                            border border-slate-200
                            bg-white
                            px-4 py-2.5
                            text-sm font-semibold
                            text-slate-600
                            transition-all
                            hover:-translate-y-0.5
                            hover:border-green-300
                            hover:bg-green-50
                            hover:text-green-700
                        "
                    >
                        <ArrowLeft
                            size={16}
                            className="
                                transition-transform
                                group-hover:-translate-x-1
                            "
                        />

                        Back to Projects
                    </Link>

                    <div className="flex flex-wrap gap-2">

                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-secondary"
                            >
                                <FaGithub size={16} />
                                GitHub
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary btn-external"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}

                    </div>
                </div>

                {/* ========================================
                    HERO
                ======================================== */}

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
                        duration: 0.55,
                    }}
                    className="
                        mx-auto
                        mt-14
                        max-w-4xl
                        text-center
                    "
                >
                    <span className="section-badge">
                        <Sparkles size={14} />
                        Project Case Study
                    </span>

                    <h1
                        className="
                            mt-6
                            text-4xl font-black
                            leading-[1.1]
                            tracking-[-0.04em]
                            text-slate-900
                            sm:text-5xl
                            lg:text-6xl
                        "
                    >
                        {project.title}
                    </h1>

                    <p
                        className="
                            mx-auto
                            mt-6
                            max-w-3xl
                            text-[15px]
                            leading-8
                            text-slate-600
                            sm:text-base
                        "
                    >
                        {project.description}
                    </p>

                    {/* TECHNOLOGY PREVIEW */}

                    {project.technologies?.length > 0 && (
                        <div
                            className="
                                mt-7
                                flex flex-wrap
                                justify-center gap-2
                            "
                        >
                            {project.technologies
                                .slice(0, 7)
                                .map((technology) => (
                                    <span
                                        key={technology}
                                        className={`
                                            rounded-full
                                            border
                                            px-3 py-1.5
                                            text-[11px]
                                            font-semibold
                                            ${techColors[
                                            technology
                                            ] ||
                                            "border-slate-200 bg-slate-50 text-slate-600"
                                            }
                                        `}
                                    >
                                        {technology}
                                    </span>
                                ))}
                        </div>
                    )}
                </motion.div>

                {/* ========================================
                    MAIN SCREENSHOT
                ======================================== */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.6,
                        delay: 0.1,
                    }}
                    className="
                        mx-auto
                        mt-14
                        max-w-6xl
                    "
                >
                    <div
                        className="
                            group
                            relative
                            overflow-hidden
                            rounded-[26px]
                            border border-green-100
                            bg-white
                            p-2
                            shadow-[0_25px_70px_rgba(15,23,42,0.09)]
                            sm:p-3
                            lg:rounded-[30px]
                        "
                    >
                        {/* FAKE BROWSER BAR */}

                        <div
                            className="
                                flex h-10
                                items-center gap-2
                                border-b
                                border-slate-100
                                px-3
                            "
                        >
                            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />

                            <div
                                className="
                                    ml-3
                                    hidden flex-1
                                    rounded-md
                                    bg-slate-50
                                    px-3 py-1
                                    text-[9px]
                                    text-slate-400
                                    sm:block
                                "
                            >
                                {project.demo ||
                                    `${project.slug}.project`}
                            </div>
                        </div>

                        <div
                            className="
                                overflow-hidden
                                rounded-b-[20px]
                            "
                        >
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="eager"
                                decoding="async"
                                className="
                                    aspect-[16/9]
                                    h-full w-full
                                    object-cover
                                    transition-transform
                                    duration-700
                                    group-hover:scale-[1.015]
                                "
                            />
                        </div>
                    </div>
                </motion.div>

                {/* ========================================
                    PROJECT DETAILS
                ======================================== */}

                <div
                    className="
                        mx-auto
                        mt-14
                        grid max-w-6xl
                        gap-6
                        lg:grid-cols-[1.1fr_.9fr]
                    "
                >
                    {/* LEFT */}

                    <div className="space-y-6">

                        {project.problem && (
                            <InfoCard
                                icon={Target}
                                label="The Problem"
                                title="What needed to be solved"
                            >
                                {project.problem}
                            </InfoCard>
                        )}

                        {project.solution && (
                            <InfoCard
                                icon={Lightbulb}
                                label="The Solution"
                                title="How I approached it"
                            >
                                {project.solution}
                            </InfoCard>
                        )}

                        {/* SCREENSHOTS */}

                        {project.screenshots?.length > 1 && (
                            <motion.div
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
                                className="portfolio-card p-5 sm:p-6"
                            >
                                <div
                                    className="
                                        flex items-center gap-3
                                    "
                                >
                                    <div className="card-icon">
                                        <MonitorSmartphone
                                            size={18}
                                        />
                                    </div>

                                    <div>
                                        <p
                                            className="
                                                text-[10px]
                                                font-bold
                                                uppercase
                                                tracking-[0.15em]
                                                text-green-600
                                            "
                                        >
                                            Interface
                                        </p>

                                        <h2
                                            className="
                                                mt-1
                                                text-lg
                                                font-bold
                                                text-slate-900
                                            "
                                        >
                                            Project Screens
                                        </h2>
                                    </div>
                                </div>

                                <div
                                    className="
                                        mt-6
                                        grid gap-3
                                        sm:grid-cols-2
                                    "
                                >
                                    {project.screenshots.map(
                                        (shot, index) => (
                                            <div
                                                key={`${project.slug}-${index}`}
                                                className="
                                                    group
                                                    overflow-hidden
                                                    rounded-xl
                                                    border
                                                    border-slate-200
                                                    bg-slate-50
                                                "
                                            >
                                                <img
                                                    src={shot}
                                                    alt={`${project.title} screenshot ${index +
                                                        1
                                                        }`}
                                                    loading="lazy"
                                                    decoding="async"
                                                    className="
                                                        aspect-[16/10]
                                                        h-full
                                                        w-full
                                                        object-cover
                                                        transition-transform
                                                        duration-500
                                                        group-hover:scale-[1.03]
                                                    "
                                                />
                                            </div>
                                        ),
                                    )}
                                </div>
                            </motion.div>
                        )}

                    </div>

                    {/* RIGHT */}

                    <div className="space-y-6">

                        {project.features?.length > 0 && (
                            <ListCard
                                icon={Check}
                                label="Features"
                                title="Key Features"
                                items={project.features}
                            />
                        )}

                        {project.architecture?.length > 0 && (
                            <ListCard
                                icon={Layers3}
                                label="Architecture"
                                title="How It Works"
                                items={project.architecture}
                            />
                        )}

                        {project.challenges?.length > 0 && (
                            <ListCard
                                icon={Target}
                                label="Challenges"
                                title="Problems I Worked Through"
                                items={project.challenges}
                            />
                        )}

                        {project.lessons?.length > 0 && (
                            <ListCard
                                icon={Lightbulb}
                                label="Learning"
                                title="What I Learned"
                                items={project.lessons}
                            />
                        )}

                    </div>
                </div>

                {/* ========================================
                    BOTTOM CTA
                ======================================== */}

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
                    className="
                        relative
                        mx-auto
                        mt-14
                        flex max-w-6xl
                        flex-col
                        items-center
                        justify-between
                        gap-6
                        overflow-hidden
                        rounded-[24px]
                        bg-slate-900
                        px-6 py-8
                        text-center
                        sm:px-8
                        lg:flex-row
                        lg:text-left
                    "
                >
                    <div
                        className="
                            pointer-events-none
                            absolute -right-20 -top-20
                            h-60 w-60
                            rounded-full
                            bg-green-500/15
                            blur-[70px]
                        "
                    />

                    <div className="relative z-10">

                        <p
                            className="
                                text-xs font-bold
                                uppercase
                                tracking-[0.16em]
                                text-green-400
                            "
                        >
                            Explore More
                        </p>

                        <h3
                            className="
                                mt-2
                                text-xl font-bold
                                text-white
                                sm:text-2xl
                            "
                        >
                            Want to see my other projects?
                        </h3>

                        <p
                            className="
                                mt-2
                                max-w-xl
                                text-sm leading-6
                                text-slate-300
                            "
                        >
                            Explore the rest of my development work
                            and the technologies I have been learning.
                        </p>

                    </div>

                    <Link
                        to="/#projects"
                        className="
                            btn-primary btn-arrow
                            relative z-10
                            shrink-0
                        "
                    >
                        More Projects
                        <ArrowRight size={16} />
                    </Link>

                </motion.div>

            </div>
        </main>
    );
};

const InfoCard = ({
    icon: Icon,
    label,
    title,
    children,
}) => {
    return (
        <motion.article
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
            className="
                portfolio-card
                p-5 sm:p-6
            "
        >
            <div className="flex items-start gap-4">

                <div className="card-icon">
                    <Icon size={18} />
                </div>

                <div className="min-w-0">

                    <p
                        className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-green-600
                        "
                    >
                        {label}
                    </p>

                    <h2
                        className="
                            mt-1
                            text-lg font-bold
                            text-slate-900
                        "
                    >
                        {title}
                    </h2>

                </div>
            </div>

            <p
                className="
                    mt-5
                    text-sm leading-7
                    text-slate-600
                "
            >
                {children}
            </p>
        </motion.article>
    );
};

const ListCard = ({
    icon: Icon,
    label,
    title,
    items,
}) => {
    return (
        <motion.article
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
            className="
                portfolio-card
                p-5 sm:p-6
            "
        >
            <div className="flex items-start gap-4">

                <div className="card-icon">
                    <Icon size={18} />
                </div>

                <div>
                    <p
                        className="
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.15em]
                            text-green-600
                        "
                    >
                        {label}
                    </p>

                    <h2
                        className="
                            mt-1
                            text-lg font-bold
                            text-slate-900
                        "
                    >
                        {title}
                    </h2>
                </div>

            </div>

            <ul className="mt-5 space-y-2.5">

                {items.map((item) => (
                    <li
                        key={item}
                        className="
                            flex items-start
                            gap-3
                            rounded-xl
                            border border-slate-100
                            bg-slate-50/70
                            px-3.5 py-3
                            text-sm
                            leading-6
                            text-slate-600
                            transition-all
                            hover:border-green-100
                            hover:bg-green-50/70
                        "
                    >
                        <span
                            className="
                                mt-1
                                flex h-4 w-4
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                bg-green-100
                                text-green-700
                            "
                        >
                            <Check size={10} />
                        </span>

                        {item}
                    </li>
                ))}

            </ul>
        </motion.article>
    );
};

export default memo(ProjectDetails);