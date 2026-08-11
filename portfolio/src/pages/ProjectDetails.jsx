import { memo } from "react";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "../constants/projectData";

const techColors = {
    React: "bg-cyan-100 text-cyan-700 border-cyan-200",
    Vite: "bg-purple-100 text-purple-700 border-purple-200",
    Python: "bg-yellow-100 text-yellow-700 border-yellow-200",
    Django: "bg-green-100 text-green-700 border-green-200",
    PostgreSQL: "bg-blue-100 text-blue-700 border-blue-200",
    "Django REST Framework": "bg-emerald-100 text-emerald-700 border-emerald-200",
    JWT: "bg-rose-100 text-rose-700 border-rose-200",
    "Tailwind CSS": "bg-sky-100 text-sky-700 border-sky-200",
};

const ProjectDetails = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="py-32 bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold">Project not found</h1>
                    <Link to="/" className="mt-6 inline-flex items-center text-indigo-600">
                        <ArrowLeft size={18} className="mr-2" />
                        Back
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* Top Bar */}
                <div className="mb-12 flex flex-wrap items-center justify-between gap-6">
                    <Link
                        to="/#projects"
                        className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold text-slate-700 transition hover:border-indigo-600 hover:text-indigo-600"
                    >
                        <ArrowLeft size={18} />
                        Back to Projects
                    </Link>

                    <div className="flex flex-wrap gap-6">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-6 py-3 text-sm font-semibold transition hover:border-indigo-600 hover:text-indigo-600"
                            >
                                <FaGithub size={18} />
                                GitHub
                            </a>
                        )}

                        {project.demo && (
                            <a
                                href={project.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-3 text-sm font-semibold text-white transition hover:shadow-lg"
                            >
                                <ExternalLink size={18} />
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
                        PROJECT CASE STUDY
                    </p>

                    <h1 className="mt-6 text-4xl md:text-6xl font-black">
                        {project.title}
                    </h1>

                    <p className="mt-6 text-lg text-slate-600">
                        {project.description}
                    </p>
                </motion.div>

                {/* Layout */}
                <div className="mt-20 grid gap-16 lg:grid-cols-2 items-start">

                    {/* LEFT SIDE */}
                    <div className="space-y-8">

                        {/* ✅ LCP Optimized Main Image */}
                        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg aspect-[16/9]">
                            <img
                                src={project.image}
                                alt={project.title}
                                loading="eager"
                                decoding="async"
                                className="h-full w-full object-cover"
                            />
                        </div>

                        {/* ✅ Lazy Loaded Screenshots */}
                        {project.screenshots?.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {project.screenshots.map((shot, i) => (
                                    <div
                                        key={i}
                                        className="overflow-hidden rounded-2xl border border-slate-200 aspect-[4/3]"
                                    >
                                        <img
                                            src={shot}
                                            alt={`Screenshot ${i + 1}`}
                                            loading="lazy"
                                            decoding="async"
                                            className="h-full w-full object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        )}

                    </div>

                    {/* RIGHT SIDE */}
                    <div className="space-y-8">

                        {project.problem && (
                            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                                    Problem
                                </h2>
                                <p className="mt-4 text-slate-600">
                                    {project.problem}
                                </p>
                            </div>
                        )}

                        {project.solution && (
                            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                                    Solution
                                </h2>
                                <p className="mt-4 text-slate-600">
                                    {project.solution}
                                </p>
                            </div>
                        )}

                        {project.features?.length > 0 && (
                            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                                    Key Features
                                </h2>
                                <ul className="mt-6 space-y-3">
                                    {project.features.map((f) => (
                                        <li
                                            key={f}
                                            className="rounded-xl bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
                                        >
                                            • {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.technologies?.length > 0 && (
                            <div className="rounded-2xl bg-slate-50 p-6 border border-slate-200 shadow-sm">
                                <h2 className="text-sm font-bold uppercase tracking-wide text-indigo-600">
                                    Technologies Used
                                </h2>
                                <div className="mt-6 flex flex-wrap gap-3">
                                    {project.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className={`rounded-full border px-4 py-2 text-xs font-semibold ${techColors[t] ||
                                                "bg-slate-100 text-slate-700 border-slate-200"
                                                }`}
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

export default memo(ProjectDetails);