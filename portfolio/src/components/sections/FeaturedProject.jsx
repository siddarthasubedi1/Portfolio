import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ExternalLink,
    Sparkles,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { featuredProject } from "../../constants/projectData";

const FeaturedProject = () => {
    if (!featuredProject) {
        return null;
    }

    return (
        <section
            id="featured-project"
            className="relative overflow-hidden py-24 sm:py-28 lg:py-32"
        >
            {/* BACKGROUND DECORATION */}
            <div className="pointer-events-none absolute inset-0">
                <div
                    className="
                        absolute -left-40 top-20
                        h-[350px] w-[350px]
                        rounded-full
                        bg-green-100/40
                        blur-[120px]
                    "
                />

                <div
                    className="
                        absolute -right-40 bottom-10
                        h-[400px] w-[400px]
                        rounded-full
                        bg-emerald-100/30
                        blur-[130px]
                    "
                />
            </div>

            <div className="container-custom relative z-10">

                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <span className="section-badge">
                        <Sparkles size={14} />
                        Featured Project
                    </span>

                    <h2 className="section-title">
                        A closer look at one of my{" "}
                        <span className="text-green-600">
                            full stack projects.
                        </span>
                    </h2>
                </motion.div>

                {/* PROJECT LAYOUT */}
                <div
                    className="
                        mt-14
                        grid
                        items-center
                        gap-10
                        lg:mt-20
                        lg:grid-cols-[1.1fr_.9fr]
                        lg:gap-14
                    "
                >
                    {/* IMAGE */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-[28px]
                                border
                                border-green-100
                                bg-white
                                p-3
                                shadow-[0_25px_70px_rgba(34,197,94,.10)]
                                sm:rounded-[36px]
                                sm:p-4
                            "
                        >
                            <div className="overflow-hidden rounded-[20px] sm:rounded-[24px]">
                                <img
                                    src={featuredProject.image}
                                    alt={featuredProject.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="
                                        aspect-[16/10]
                                        w-full
                                        object-cover
                                        transition-transform
                                        duration-700
                                        ease-out
                                        group-hover:scale-105
                                    "
                                />
                            </div>

                            {/* IMAGE BADGE */}
                            <div
                                className="
                                    absolute
                                    bottom-6 left-6
                                    rounded-full
                                    border border-white/50
                                    bg-white/90
                                    px-3 py-1.5
                                    text-[10px]
                                    font-bold
                                    uppercase
                                    tracking-[0.12em]
                                    text-green-700
                                    shadow-sm
                                    backdrop-blur-md
                                    sm:bottom-8
                                    sm:left-8
                                "
                            >
                                Featured Work
                            </div>
                        </div>
                    </motion.div>

                    {/* CONTENT */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="
                            portfolio-card
                            rounded-[28px]
                            p-6
                            sm:p-8
                            lg:rounded-[36px]
                            lg:p-10
                        "
                    >
                        <p
                            className="
                                text-xs
                                font-bold
                                uppercase
                                tracking-[0.18em]
                                text-green-600
                            "
                        >
                            Full Stack Application
                        </p>

                        <h3
                            className="
                                mt-3
                                text-2xl
                                font-bold
                                tracking-tight
                                text-slate-900
                                sm:text-3xl
                            "
                        >
                            {featuredProject.title}
                        </h3>

                        <p
                            className="
                                mt-4
                                text-sm
                                leading-7
                                text-slate-600
                                sm:text-[15px]
                            "
                        >
                            {featuredProject.description}
                        </p>

                        {/* TECHNOLOGIES */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {featuredProject.technologies
                                ?.slice(0, 6)
                                .map((technology) => (
                                    <span
                                        key={technology}
                                        className="
                                            rounded-lg
                                            border
                                            border-green-100
                                            bg-green-50
                                            px-2.5
                                            py-1.5
                                            text-[11px]
                                            font-semibold
                                            text-green-700
                                            transition-all
                                            duration-200
                                            hover:-translate-y-0.5
                                            hover:border-green-300
                                            hover:bg-green-100
                                        "
                                    >
                                        {technology}
                                    </span>
                                ))}
                        </div>

                        {/* PROJECT INFORMATION */}
                        <div
                            className="
                                mt-7
                                grid
                                grid-cols-1
                                gap-3
                                sm:grid-cols-2
                            "
                        >
                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-green-200
                                    hover:shadow-md
                                "
                            >
                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.12em]
                                        text-slate-400
                                    "
                                >
                                    Focus
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    Full Stack
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    p-4
                                    transition-all
                                    duration-300
                                    hover:-translate-y-1
                                    hover:border-green-200
                                    hover:shadow-md
                                "
                            >
                                <p
                                    className="
                                        text-[10px]
                                        font-bold
                                        uppercase
                                        tracking-[0.12em]
                                        text-slate-400
                                    "
                                >
                                    Main Backend
                                </p>

                                <p
                                    className="
                                        mt-1
                                        text-sm
                                        font-bold
                                        text-slate-800
                                    "
                                >
                                    Django REST
                                </p>
                            </div>
                        </div>

                        {/* ACTIONS */}
                        <div
                            className="
                                mt-7
                                flex
                                flex-col
                                gap-3
                                sm:flex-row
                                sm:flex-wrap
                            "
                        >
                            <Link
                                to={`/project/${featuredProject.slug}`}
                                className="btn-primary btn-arrow"
                            >
                                View Project
                                <ArrowRight size={16} />
                            </Link>

                            {featuredProject.demo && (
                                <a
                                    href={featuredProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary btn-external"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}

                            {featuredProject.github && (
                                <a
                                    href={featuredProject.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-icon"
                                    aria-label="View GitHub repository"
                                >
                                    <FaGithub size={18} />
                                </a>
                            )}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default FeaturedProject;