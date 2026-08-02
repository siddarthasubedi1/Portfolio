import { motion } from "framer-motion";
import {
    ArrowRight,
    ExternalLink,
    CheckCircle2,
    Lightbulb,
    Target,
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
            className="bg-gradient-to-b from-slate-50 to-white py-28"
        >

            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: .8 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-4xl text-center"
                >

                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">

                        FEATURED PROJECT

                    </p>

                    <h2 className="mt-6 text-5xl font-black text-slate-900 md:text-6xl">

                        {featuredProject.title}

                    </h2>

                    <p className="mt-8 text-lg leading-9 text-slate-600">

                        {featuredProject.description}

                    </p>

                </motion.div>

                {/* Main Content */}

                <div className="mt-24 grid items-center gap-16 lg:grid-cols-[1.1fr_.9fr]">

                    {/* Image */}

                    <motion.div
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                    >

                        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">

                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                className="w-full object-cover transition duration-700 hover:scale-105"
                            />

                        </div>

                    </motion.div>

                    {/* Details */}

                    <motion.div
                        initial={{ opacity: 0, x: 70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .8 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >

                        {/* Problem */}

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <Target
                                    className="text-red-500"
                                    size={22}
                                />

                                <h3 className="text-xl font-bold">

                                    Problem

                                </h3>

                            </div>

                            <p className="mt-4 leading-8 text-slate-600">

                                {featuredProject.problem}

                            </p>

                        </div>

                        {/* Solution */}

                        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">

                            <div className="flex items-center gap-3">

                                <Lightbulb
                                    className="text-amber-500"
                                    size={22}
                                />

                                <h3 className="text-xl font-bold">

                                    Solution

                                </h3>

                            </div>

                            <p className="mt-4 leading-8 text-slate-600">

                                {featuredProject.solution}

                            </p>

                        </div>

                        {/* Features */}

                        <div>

                            <h3 className="text-2xl font-bold">

                                Key Features

                            </h3>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">

                                {featuredProject.features.map((feature) => (

                                    <div
                                        key={feature}
                                        className="flex items-center gap-3 rounded-xl bg-emerald-50 p-3"
                                    >

                                        <CheckCircle2
                                            className="text-emerald-600"
                                            size={20}
                                        />

                                        <span className="font-medium">

                                            {feature}

                                        </span>

                                    </div>

                                ))}

                            </div>

                        </div>

                        {/* Technologies */}

                        <div>

                            <h3 className="text-2xl font-bold">

                                Technologies

                            </h3>

                            <div className="mt-6 flex flex-wrap gap-3">

                                {featuredProject.technologies.map((tech) => (

                                    <span
                                        key={tech}
                                        className="rounded-xl bg-indigo-100 px-4 py-2 font-semibold text-indigo-700"
                                    >

                                        {tech}

                                    </span>

                                ))}

                            </div>

                        </div>

                        {/* Buttons */}

                        <div className="flex flex-wrap gap-4 pt-4">

                            <a
                                href={featuredProject.github}
                                target="_blank"
                                rel="noreferrer"
                                className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1"
                            >

                                <FaGithub size={20} />

                                GitHub

                            </a>

                            {featuredProject.demo && (

                                <a
                                    href={featuredProject.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-4 font-semibold text-white transition duration-300 hover:-translate-y-1 hover:bg-indigo-700"
                                >

                                    <ExternalLink size={18} />

                                    Live Demo

                                </a>

                            )}

                            <Link
                                to={`/project/${featuredProject.slug}`}
                                className="inline-flex items-center gap-2 rounded-xl border border-slate-300 bg-white px-6 py-4 font-semibold transition duration-300 hover:border-indigo-600 hover:text-indigo-600"
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