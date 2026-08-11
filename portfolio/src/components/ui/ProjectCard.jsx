import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
    const techColors = {
        React: "bg-cyan-50 text-cyan-700 border-cyan-100",
        Vite: "bg-purple-50 text-purple-700 border-purple-100",
        Python: "bg-yellow-50 text-yellow-700 border-yellow-100",
        Django: "bg-green-50 text-green-700 border-green-100",
        "Django REST Framework":
            "bg-emerald-50 text-emerald-700 border-emerald-100",
        PostgreSQL: "bg-blue-50 text-blue-700 border-blue-100",
        JWT: "bg-rose-50 text-rose-700 border-rose-100",
        "Tailwind CSS": "bg-sky-50 text-sky-700 border-sky-100",
    };

    return (
        <article
            className="
                group
                flex
                h-full
                flex-col
                overflow-hidden
                rounded-[28px]
                border
                border-slate-200
                bg-white
                shadow-[0_10px_40px_rgba(15,23,42,0.05)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-3
                hover:border-green-200
                hover:shadow-[0_25px_70px_rgba(34,197,94,0.12)]
            "
        >
            {/* =====================================================
                PROJECT IMAGE
            ====================================================== */}

            {project.image && (
                <div className="relative overflow-hidden p-4 pb-0">
                    <div
                        className="
                            group/image
                            relative
                            aspect-[16/10]
                            overflow-hidden
                            rounded-[22px]
                            bg-slate-100
                        "
                    >
                        <img
                            src={project.image}
                            alt={`${project.title} project preview`}
                            loading="lazy"
                            decoding="async"
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-700
                                ease-out
                                group-hover:scale-105
                            "
                        />

                        {/* Image Overlay */}

                        <div
                            className="
                                absolute
                                inset-0
                                flex
                                items-center
                                justify-center
                                bg-slate-950/50
                                opacity-0
                                backdrop-blur-[2px]
                                transition-all
                                duration-500
                                group-hover:opacity-100
                            "
                        >
                            <div
                                className="
                                    flex
                                    items-center
                                    gap-2
                                    rounded-full
                                    bg-white
                                    px-5
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-slate-900
                                    shadow-xl
                                    transition-transform
                                    duration-500
                                    group-hover:scale-100
                                    scale-90
                                "
                            >
                                View Project

                                <ArrowUpRight size={16} />
                            </div>
                        </div>

                        {/* Project Number */}

                        <div
                            className="
                                absolute
                                left-4
                                top-4
                                flex
                                h-9
                                min-w-9
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-white/60
                                bg-white/90
                                px-3
                                text-xs
                                font-bold
                                text-slate-700
                                shadow-sm
                                backdrop-blur-md
                            "
                        >
                            {String(project.id).padStart(2, "0")}
                        </div>
                    </div>
                </div>
            )}

            {/* =====================================================
                CONTENT
            ====================================================== */}

            <div className="flex flex-1 flex-col p-6 sm:p-7">

                {/* Project Title */}

                <div className="flex items-start justify-between gap-4">

                    <h2
                        className="
                            text-xl
                            font-bold
                            tracking-tight
                            text-slate-900
                            transition-colors
                            duration-300
                            group-hover:text-green-600
                        "
                    >
                        {project.title}
                    </h2>

                    <div
                        className="
                            flex
                            h-9
                            w-9
                            shrink-0
                            items-center
                            justify-center
                            rounded-full
                            bg-green-50
                            text-green-600
                            transition-all
                            duration-300
                            group-hover:bg-green-600
                            group-hover:text-white
                        "
                    >
                        <ArrowUpRight size={17} />
                    </div>

                </div>

                {/* Description */}

                <p
                    className="
                        mt-4
                        flex-1
                        text-sm
                        leading-7
                        text-slate-600
                    "
                >
                    {project.description}
                </p>

                {/* =================================================
                    TECHNOLOGIES
                ================================================== */}

                {project.technologies?.length > 0 && (
                    <div className="mt-6">

                        <p className="mb-3 text-xs font-bold uppercase tracking-[2px] text-slate-400">
                            Built With
                        </p>

                        <div className="flex flex-wrap gap-2">

                            {project.technologies.map((item) => (
                                <span
                                    key={item}
                                    className={`
                                        rounded-full
                                        border
                                        px-3
                                        py-1.5
                                        text-xs
                                        font-semibold
                                        transition-all
                                        duration-300
                                        ${techColors[item] ||
                                        "border-slate-200 bg-slate-50 text-slate-700"}
                                    `}
                                >
                                    {item}
                                </span>
                            ))}

                        </div>

                    </div>
                )}

                {/* =================================================
                    ACTIONS
                ================================================== */}

                <div
                    className="
                        mt-7
                        flex
                        flex-wrap
                        items-center
                        gap-3
                        border-t
                        border-slate-100
                        pt-6
                    "
                >

                    {/* Details */}

                    <Link
                        to={`/project/${project.slug}`}
                        className="
                            group/button
                            inline-flex
                            flex-1
                            items-center
                            justify-center
                            gap-2
                            rounded-full
                            bg-green-600
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            shadow-[0_8px_20px_rgba(34,197,94,0.18)]
                            transition-all
                            duration-300
                            hover:-translate-y-0.5
                            hover:bg-green-700
                            hover:shadow-[0_12px_28px_rgba(34,197,94,0.25)]
                        "
                    >
                        View Details

                        <ArrowUpRight
                            size={16}
                            className="
                                transition-transform
                                duration-300
                                group-hover/button:translate-x-0.5
                                group-hover/button:-translate-y-0.5
                            "
                        />
                    </Link>

                    {/* GitHub */}

                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`View ${project.title} on GitHub`}
                            className="
                                inline-flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-200
                                bg-white
                                text-slate-700
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-green-200
                                hover:bg-green-50
                                hover:text-green-600
                                hover:shadow-md
                            "
                        >
                            <FaGithub size={18} />
                        </a>
                    )}

                    {/* Live Demo */}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Open live demo of ${project.title}`}
                            className="
                                inline-flex
                                h-11
                                w-11
                                shrink-0
                                items-center
                                justify-center
                                rounded-full
                                border
                                border-slate-200
                                bg-white
                                text-slate-700
                                transition-all
                                duration-300
                                hover:-translate-y-0.5
                                hover:border-green-200
                                hover:bg-green-50
                                hover:text-green-600
                                hover:shadow-md
                            "
                        >
                            <ExternalLink size={17} />
                        </a>
                    )}

                </div>

            </div>
        </article>
    );
}

// Prevent unnecessary re-renders
export default memo(ProjectCard);