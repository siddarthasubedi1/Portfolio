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
            <section className="min-h-[60vh] bg-gradient-to-b from-white to-slate-50 py-28">
                <div className="mx-auto w-full max-w-4xl px-6 text-center">
                    <h1 className="text-4xl font-black text-slate-900">Project not found</h1>
                    <p className="mt-4 text-slate-600">
                        The project you’re looking for doesn’t exist.
                    </p>
                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-3 font-semibold text-white"
                    >
                        <ArrowLeft size={18} />
                        Back to Home
                    </Link>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-gradient-to-b from-white to-slate-50 py-28">
            <div className="mx-auto w-full max-w-7xl px-6">
                {/* Top bar */}
                <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                    <Link
                        to="/"
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-semibold text-slate-800 transition hover:border-slate-900"
                    >
                        <ArrowLeft size={18} />
                        Back
                    </Link>

                    <div className="flex flex-wrap gap-3">
                        {project.github && (
                            <a
                                href={project.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5"
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
                                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:-translate-y-0.5 hover:bg-indigo-700"
                            >
                                <ExternalLink size={18} />
                                Live Demo
                            </a>
                        )}
                    </div>
                </div>

                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.45 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        PROJECT DETAILS
                    </p>
                    <h1 className="mt-5 text-5xl font-black text-slate-900 md:text-6xl">
                        {project.title}
                    </h1>
                    <p className="mt-6 text-lg leading-9 text-slate-600">
                        {project.description}
                    </p>
                </motion.div>

                {/* Main layout */}
                <div className="mt-14 grid items-start gap-10 lg:grid-cols-2">
                    {/* LEFT: Image + screenshots */}
                    <div className="space-y-6">
                        {/* IMPORTANT: use project.image (NOT cover) */}
                        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                            <div className="aspect-[16/9] w-full bg-slate-100">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="block h-full w-full object-cover"
                                    loading="lazy"
                                />
                            </div>
                        </div>

                        {project.screenshots?.length > 0 && (
                            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                                {project.screenshots.slice(0, 6).map((shot, idx) => (
                                    <div
                                        key={idx}
                                        className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
                                    >
                                        <div className="aspect-[16/10] w-full bg-slate-100">
                                            <img
                                                src={shot}
                                                alt={`${project.title} screenshot ${idx + 1}`}
                                                className="block h-full w-full object-cover"
                                                loading="lazy"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* RIGHT: Problem / Solution / Features / Tech */}
                    <div className="space-y-6">
                        {(project.problem || project.solution) && (
                            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
                                {project.problem && (
                                    <>
                                        <h2 className="text-xl font-black text-slate-900">Problem</h2>
                                        <p className="mt-3 leading-8 text-slate-600">
                                            {project.problem}
                                        </p>
                                    </>
                                )}

                                {project.solution && (
                                    <>
                                        <div className="my-6 h-px w-full bg-slate-200" />
                                        <h2 className="text-xl font-black text-slate-900">Solution</h2>
                                        <p className="mt-3 leading-8 text-slate-600">
                                            {project.solution}
                                        </p>
                                    </>
                                )}
                            </div>
                        )}

                        {project.features?.length > 0 && (
                            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
                                <h2 className="text-xl font-black text-slate-900">Key Features</h2>
                                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                                    {project.features.map((f) => (
                                        <li
                                            key={f}
                                            className="rounded-xl bg-emerald-50 px-4 py-3 font-semibold text-emerald-800"
                                        >
                                            {f}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {project.technologies?.length > 0 && (
                            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
                                <h2 className="text-xl font-black text-slate-900">Technologies</h2>
                                <div className="mt-5 flex flex-wrap gap-2">
                                    {project.technologies.map((t) => (
                                        <span
                                            key={t}
                                            className="rounded-xl bg-indigo-50 px-3 py-2 text-sm font-semibold text-indigo-700"
                                        >
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(project.architecture?.length > 0 ||
                            project.challenges?.length > 0 ||
                            project.lessons?.length > 0) && (
                                <div className="grid gap-6">
                                    {project.architecture?.length > 0 && (
                                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
                                            <h2 className="text-xl font-black text-slate-900">Architecture</h2>
                                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                                {project.architecture.map((a) => (
                                                    <li key={a}>{a}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.challenges?.length > 0 && (
                                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
                                            <h2 className="text-xl font-black text-slate-900">Challenges</h2>
                                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                                {project.challenges.map((c) => (
                                                    <li key={c}>{c}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}

                                    {project.lessons?.length > 0 && (
                                        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-lg">
                                            <h2 className="text-xl font-black text-slate-900">Lessons</h2>
                                            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
                                                {project.lessons.map((l) => (
                                                    <li key={l}>{l}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </div>
                            )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;