import { memo } from "react";
import { Link } from "react-router-dom";
import {
    ArrowRight,
    ExternalLink,
    Eye,
} from "lucide-react";
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
                rounded-[24px]
                border
                border-slate-200
                bg-white
                shadow-[0_8px_30px_rgba(15,23,42,0.05)]
                transition-all
                duration-300
                hover:-translate-y-1.5
                hover:border-green-200
                hover:shadow-[0_20px_50px_rgba(34,197,94,0.10)]
            "
        >
            {/* IMAGE */}
            {project.image && (
                <div className="p-4 pb-0">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-[18px] bg-slate-100">

                        <img
                            src={project.image}
                            alt={`${project.title} preview`}
                            loading="lazy"
                            className="
                                h-full
                                w-full
                                object-cover
                                transition-transform
                                duration-500
                                group-hover:scale-[1.04]
                            "
                        />

                        {/* NUMBER */}
                        <span
                            className="
                                absolute
                                left-3
                                top-3
                                rounded-full
                                border
                                border-white/70
                                bg-white/90
                                px-3
                                py-1.5
                                text-xs
                                font-bold
                                text-slate-700
                                shadow-sm
                                backdrop-blur
                            "
                        >
                            {String(project.id).padStart(2, "0")}
                        </span>

                        {/* IMAGE VIEW BUTTON */}
                        <Link
                            to={`/project/${project.slug}`}
                            className="
                                absolute
                                bottom-3
                                right-3
                                flex
                                h-10
                                w-10
                                items-center
                                justify-center
                                rounded-full
                                bg-white
                                text-slate-900
                                shadow-lg
                                transition
                                hover:bg-green-600
                                hover:text-white
                            "
                            aria-label={`View ${project.title}`}
                        >
                            <ArrowRight size={17} />
                        </Link>
                    </div>
                </div>
            )}

            {/* CONTENT */}
            <div className="flex flex-1 flex-col p-6">

                <h3 className="text-xl font-bold tracking-tight text-slate-900">
                    {project.title}
                </h3>

                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {project.description}
                </p>

                {/* TECH */}
                {project.technologies?.length > 0 && (
                    <div className="mt-5">
                        <p className="mb-3 text-[11px] font-bold uppercase tracking-[1.8px] text-slate-400">
                            Built With
                        </p>

                        <div className="flex flex-wrap gap-2">
                            {project.technologies
                                .slice(0, 5)
                                .map((technology) => (
                                    <span
                                        key={technology}
                                        className={`
                                            rounded-full
                                            border
                                            px-3
                                            py-1.5
                                            text-[11px]
                                            font-semibold
                                            ${techColors[technology] ||
                                            "border-slate-200 bg-slate-50 text-slate-700"
                                            }
                                        `}
                                    >
                                        {technology}
                                    </span>
                                ))}
                        </div>
                    </div>
                )}

                {/* ACTION BUTTONS */}
                <div className="mt-6 border-t border-slate-100 pt-5">

                    <Link
                        to={`/project/${project.slug}`}
                        className="
                            group/button
                            flex
                            w-full
                            items-center
                            justify-center
                            gap-2
                            rounded-xl
                            bg-green-600
                            px-5
                            py-3
                            text-sm
                            font-semibold
                            text-white
                            transition-all
                            duration-300
                            hover:bg-green-700
                        "
                    >
                        <Eye size={17} />

                        View Project

                        <ArrowRight
                            size={16}
                            className="transition-transform group-hover/button:translate-x-1"
                        />
                    </Link>

                    <div
                        className={`
                            mt-3 grid gap-3
                            ${project.github && project.demo
                                ? "grid-cols-2"
                                : "grid-cols-1"
                            }
                        `}
                    >
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    transition-all
                                    duration-300
                                    hover:border-green-300
                                    hover:bg-green-50
                                    hover:text-green-700
                                "
                            >
                                <FaGithub size={17} />
                                GitHub
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    flex
                                    items-center
                                    justify-center
                                    gap-2
                                    rounded-xl
                                    border
                                    border-slate-200
                                    bg-white
                                    px-4
                                    py-3
                                    text-sm
                                    font-semibold
                                    text-slate-700
                                    transition-all
                                    duration-300
                                    hover:border-green-300
                                    hover:bg-green-50
                                    hover:text-green-700
                                "
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}

export default memo(ProjectCard);