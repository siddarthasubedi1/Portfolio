import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
    const techColors = {
        React: "bg-cyan-100 text-cyan-700",
        Vite: "bg-purple-100 text-purple-700",
        Python: "bg-yellow-100 text-yellow-700",
        Django: "bg-green-100 text-green-700",
        "Django REST Framework": "bg-emerald-100 text-emerald-700",
        PostgreSQL: "bg-blue-100 text-blue-700",
        JWT: "bg-rose-100 text-rose-700",
        "Tailwind CSS": "bg-sky-100 text-sky-700",
    };
    return (
        <div
            className="
        group
        flex flex-col
        h-full
        rounded-3xl
        border border-slate-200
        bg-white
        p-8 pb-10
        shadow-lg
        transition-all duration-300
        hover:-translate-y-3
        hover:shadow-2xl
        hover:border-indigo-300
        
      "
        >
            {/* Image */}
            {project.image && (
                <div className="mb-6 overflow-hidden rounded-2xl relative">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition" />
                </div>
            )}

            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition group-hover:text-indigo-600 text-center">
                {project.title}
            </h2>

            {/* Description */}
            <p className="mt-4 text-slate-600 leading-relaxed flex-1 text-center text-0.2xl">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
                {project.technologies.map((item, index) => (
                    <span
                        key={index}
                        className={`
        rounded-full
        px-4 py-2
        text-xs font-semibold
        ${techColors[item] || "bg-slate-100 text-slate-700"}
      `}
                    >
                        {item}
                    </span>
                ))}
            </div>


            {/* Button Section */}
            <div className="mt-12 flex justify-center gap-4 pt-4 border-t border-slate-200">

                {/* View Details */}
                <Link
                    to={`/project/${project.slug}`}
                    className="
      inline-flex items-center justify-center
      rounded-full
      bg-indigo-600
      px-7 py-3
      text-sm font-semibold
      text-white
      transition-all duration-300
      hover:bg-indigo-700
      hover:shadow-lg
      hover:-translate-y-1
    "
                >
                    View Details
                    <ArrowUpRight size={16} className="ml-2" />
                </Link>

                {/* GitHub */}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
      inline-flex items-center justify-center
      rounded-full
      border border-slate-300
      bg-white
      px-7 py-3
      text-sm font-semibold
      text-slate-700
      transition-all duration-300
      hover:border-indigo-600
      hover:text-indigo-600
      hover:shadow-md
      hover:-translate-y-1
    "
                >
                    <FaGithub size={16} className="mr-2" />
                    GitHub
                </a>

            </div>
        </div>
    );
}

export default ProjectCard;