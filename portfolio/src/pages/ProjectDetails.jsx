import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../constants/projectData";

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="section bg-white">
                <div className="container-custom text-center">
                    <h1 className="heading-lg">Project not found</h1>
                    <p className="mt-4 text-body">
                        The project you’re looking for doesn’t exist.
                    </p>
                    <Link to="/" className="btn-primary mt-8 inline-flex">
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="section bg-white">
            <div className="container-custom">

                {/* Top Bar */}
                <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                    <Link to="/" className="btn-outline">
                        <ArrowLeft size={16} />
                        Back
                    </Link>

                    <div className="flex flex-wrap gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary"
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
                                className="btn-primary"
                            >
                                <ExternalLink size={16} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        PROJECT DETAILS
                    </p>

                    <h1 className="mt-5 text-4xl md:text-6xl font-black tracking-tight">
                        {project.title}
                    </h1>

                    <p className="mt-6 text-body max-w-3xl mx-auto">
                        {project.description}
                    </p>
                </motion.div>

                {/* Layout */}
                <div className="mt-16 grid gap-12 lg:grid-cols-2">

                    {/* Left */}
                    <div className="space-y-6">
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full object-cover"
                            />
                        </div>

                        {project.screenshots?.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {project.screenshots.map((shot, i) => (
                                    <div
                                        key={i}
                                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                    >
                                        <img
                                            src={shot}
                                            alt={`Screenshot ${i + 1}`}
                                            className="w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Right */}
                    <div className="space-y-6">

                        {project.problem && (
                            <div className="card">
                                <h2 className="text-lg font-bold text-indigo-600 uppercase tracking-wide">
                                    Problem
                                </h2>
                                <p className="mt-4 text-body">{project.problem}</p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="card">
                                <h2 className="text-lg font-bold text-indigo-600 uppercase tracking-wide">
                                    Solution
                                </h2>
                                <p className="mt-4 text-body">{project.solution}</p>
                            </div>
                        )}

                        {project.features?.length > 0 && (
                            <div className="card">
                                <h2 className="text-lg font-bold text-indigo-600 uppercase tracking-wide">
                                    Key Features
                                </h2>
                                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {project.features.map((f) => (
                                        <li
                                            key={f}
                                            className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700"
                                        >
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.technologies?.length > 0 && (
                            <div className="card">
                                <h2 className="text-lg font-bold text-indigo-600 uppercase tracking-wide">
                                    Technologies
                                </h2>
                                <div className="mt-5 flex flex-wrap gap-3">
                                    {project.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-full border border-indigo-200 bg-indigo-50 px-4 py-2 text-xs font-semibold text-indigo-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;