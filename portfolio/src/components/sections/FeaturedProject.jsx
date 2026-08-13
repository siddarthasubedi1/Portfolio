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
            className="
                relative overflow-hidden
                bg-white
                py-20 sm:py-24 lg:py-28
            "
        >
            <div className="container-custom">

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
                        A closer look at one of my
                        <span className="text-green-600">
                            {" "}
                            full stack projects.
                        </span>
                    </h2>
                </motion.div>

                {/* FEATURED CARD */}
                <motion.article
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{
                        once: true,
                        amount: 0.15,
                    }}
                    transition={{ duration: 0.55 }}
                    className="
                        mx-auto mt-12
                        grid max-w-6xl
                        overflow-hidden
                        rounded-[24px]
                        border border-slate-200
                        bg-slate-50/50
                        shadow-[0_12px_40px_rgba(15,23,42,0.05)]
                        lg:grid-cols-[1.08fr_.92fr]
                    "
                >
                    {/* IMAGE */}
                    <div
                        className="
                            relative
                            min-h-[270px]
                            overflow-hidden
                            bg-slate-100
                            sm:min-h-[360px]
                            lg:min-h-[520px]
                        "
                    >
                        <img
                            src={featuredProject.image}
                            alt={featuredProject.title}
                            className="
                                absolute inset-0
                                h-full w-full
                                object-cover
                                transition-transform
                                duration-700
                                hover:scale-[1.025]
                            "
                        />

                        <div
                            className="
                                absolute left-4 top-4
                                rounded-lg
                                border border-white/70
                                bg-white/90
                                px-3 py-1.5
                                text-[11px]
                                font-bold
                                text-slate-700
                                backdrop-blur
                            "
                        >
                            FEATURED
                        </div>
                    </div>

                    {/* CONTENT */}
                    <div
                        className="
                            flex flex-col
                            justify-center
                            p-6 sm:p-8
                            lg:p-10
                        "
                    >
                        <p
                            className="
                                text-xs font-bold
                                uppercase tracking-[0.18em]
                                text-green-600
                            "
                        >
                            Full Stack Application
                        </p>

                        <h3
                            className="
                                mt-3
                                text-2xl font-bold
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
                                text-sm leading-7
                                text-slate-600
                                sm:text-[15px]
                            "
                        >
                            {featuredProject.description}
                        </p>

                        {/* TECH */}
                        <div className="mt-6 flex flex-wrap gap-2">
                            {featuredProject.technologies
                                ?.slice(0, 6)
                                .map((technology) => (
                                    <span
                                        key={technology}
                                        className="
                                            rounded-lg
                                            border border-green-100
                                            bg-green-50
                                            px-2.5 py-1.5
                                            text-[11px]
                                            font-semibold
                                            text-green-700
                                        "
                                    >
                                        {technology}
                                    </span>
                                ))}
                        </div>

                        {/* SMALL PROJECT INFORMATION */}
                        <div
                            className="
                                mt-7
                                grid grid-cols-2
                                gap-3
                            "
                        >
                            <div
                                className="
                                    rounded-xl
                                    border border-slate-200
                                    bg-white
                                    p-4
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
                                        text-sm font-bold
                                        text-slate-800
                                    "
                                >
                                    Full Stack
                                </p>
                            </div>

                            <div
                                className="
                                    rounded-xl
                                    border border-slate-200
                                    bg-white
                                    p-4
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
                                        text-sm font-bold
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
                                flex flex-col
                                gap-3
                                sm:flex-row
                            "
                        >
                            <Link
                                to={`/project/${featuredProject.slug}`}
                                className="btn-primary group"
                            >
                                View Project

                                <ArrowRight
                                    size={16}
                                    className="
                                        transition-transform
                                        group-hover:translate-x-1
                                    "
                                />
                            </Link>

                            {featuredProject.demo && (
                                <a
                                    href={featuredProject.demo}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-secondary"
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
                                    className="
                                        flex h-11 w-11
                                        shrink-0
                                        items-center justify-center
                                        rounded-xl
                                        border border-slate-200
                                        bg-white
                                        text-slate-700
                                        transition
                                        hover:border-green-300
                                        hover:bg-green-50
                                        hover:text-green-700
                                    "
                                    aria-label="View GitHub repository"
                                >
                                    <FaGithub size={17} />
                                </a>
                            )}
                        </div>

                    </div>
                </motion.article>

            </div>
        </section>
    );
};

export default FeaturedProject;