import { motion } from "framer-motion";
import {
    ArrowRight,
    ExternalLink,
    CheckCircle2,
} from "lucide-react";

import { FaGithub } from "react-icons/fa";

import { Link } from "react-router-dom";
import { projects } from "../../constants/projectData";

const FeaturedProject = () => {
    const featuredProject = projects[0];

    if (!featuredProject) return null;

    return (
        <section
            id="featured-project"
            className="bg-white py-28"
        >
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        FEATURED PROJECT
                    </p>

                    <h2 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
                        {featuredProject.title}
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                        {featuredProject.description}
                    </p>
                </motion.div>

                {/* Content */}

                <div className="mt-20 grid gap-16 lg:grid-cols-2">

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-2xl">
                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                className="w-full transition duration-500 hover:scale-105"
                            />
                        </div>
                    </motion.div>

                    {/* Details */}

                    <motion.div
                        initial={{ opacity: 0, x: 80 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="space-y-10"
                    >

                        {/* Problem */}

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Problem
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                {featuredProject.problem}
                            </p>
                        </div>

                        {/* Solution */}

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Solution
                            </h3>

                            <p className="mt-4 leading-8 text-slate-600">
                                {featuredProject.solution}
                            </p>
                        </div>

                        {/* Features */}

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Key Features
                            </h3>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                {featuredProject.features.map((feature) => (
                                    <div
                                        key={feature}
                                        className="flex items-center gap-3"
                                    >
                                        <CheckCircle2
                                            size={20}
                                            className="text-green-600"
                                        />

                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Tech */}

                        <div>
                            <h3 className="text-2xl font-bold text-slate-900">
                                Technologies
                            </h3>

                            <div className="mt-6 flex flex-wrap gap-3">
                                {featuredProject.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-full bg-indigo-50 px-5 py-2 font-medium text-indigo-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}

                        <div className="flex flex-wrap gap-4 pt-6">

                            <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-4 font-semibold text-white transition hover:scale-105"
                            >
                                <FaGithub size={20} />

                                GitHub
                            </a>

                            {featuredProject.demo && (
                                <a
                                    href={featuredProject.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-6 py-4 font-semibold text-white transition hover:scale-105"
                                >
                                    <ExternalLink size={18} />

                                    Live Demo
                                </a>
                            )}

                            <Link
                                to={`/project/${featuredProject.slug}`}
                                className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-4 font-semibold transition hover:border-indigo-600 hover:text-indigo-600"
                            >
                                View Details

                                <ArrowRight size={18} />
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default FeaturedProject;