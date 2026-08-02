import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function ProjectCard({ project }) {
    return (
        <div
            className="
      group
      rounded-3xl
      border border-slate-200
      bg-white
      p-8
      shadow-md
      transition-all duration-300
      hover:-translate-y-2
      hover:shadow-2xl
      hover:border-indigo-200
      dark:border-slate-700 dark:bg-slate-900
    "
        >
            {/* Image */}
            {project.image && (
                <div className="mb-6 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="h-52 w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                </div>
            )} 
            {/* Title */}
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white transition group-hover:text-indigo-600">
                {project.title}
            </h2>

            {/* Description */}
            <p className="mt-5 text-slate-600 dark:text-slate-400 leading-relaxed">
                {project.description}
            </p>

            {/* Technologies */}
            <div className="mt-8 flex flex-wrap gap-2">
                {project.technologies.map((item, index) => (
                    <span
                        key={index}
                        className="
              rounded-full
              bg-indigo-50
              px-4
              py-2
              text-sm
              font-medium
              text-indigo-600
              transition
              group-hover:bg-indigo-100
              dark:bg-indigo-500/10 dark:text-indigo-400
            "
                    >
                        {item}
                    </span>
                ))}
            </div>

            {/* Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
                {/* Primary Button */}
                <Link
                    to={`/project/${project.id}`}
                    className="
            inline-flex items-center gap-2
            rounded-xl
            bg-indigo-600
            px-6 py-3
            text-sm font-semibold
            text-white
            transition-all duration-300
            hover:bg-indigo-700
            hover:scale-105
          "
                >
                    View Details
                    <ArrowRight size={16} />
                </Link>

                {/* Secondary Button */}
                <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
            inline-flex items-center gap-2
            rounded-xl
            border border-slate-300
            px-6 py-3
            text-sm font-semibold
            text-slate-700
            transition-all duration-300
            hover:border-indigo-600
            hover:text-indigo-600
            dark:border-slate-600 dark:text-slate-300
          "
                >
                    <FaGithub size={16} />
                    GitHub
                </a>
            </div>
        </div>
    );
}

export default ProjectCard;