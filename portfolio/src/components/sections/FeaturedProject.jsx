import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../../constants/projectData";

const FeaturedProject = () => {
    const featuredProject = projects[0];
    if (!featuredProject) return null;

    const techColors = {
        React: "bg-cyan-100 text-cyan-700 border-cyan-200",
        Vite: "bg-purple-100 text-purple-700 border-purple-200",
        Python: "bg-yellow-100 text-yellow-700 border-yellow-200",
        Django: "bg-green-100 text-green-700 border-green-200",
        PostgreSQL: "bg-blue-100 text-blue-700 border-blue-200",
        "Tailwind CSS": "bg-sky-100 text-sky-700 border-sky-200",
        "Django REST Framework": "bg-emerald-100 text-emerald-700 border-emerald-200",
    };

    return (
        <section id="featured-project" className="section bg-slate-50">
            <div className="container-custom">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        FEATURED PROJECT
                    </p>

                    <h2 className="heading-lg mt-6">
                        {featuredProject.title}
                    </h2>

                    <p className="mt-6 text-body">
                        {featuredProject.description}
                    </p>
                </motion.div>

                {/* Layout */}
                <div className="mt-16 grid gap-12 lg:grid-cols-2 items-start">

                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                    >
                        <div className="card overflow-hidden hover:shadow-xl">
                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                className="w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >

                        {featuredProject.problem && (
                            <div className="card">
                                <h3 className="text-sm font-bold uppercase tracking-[4px] text-indigo-600">
                                    Problem
                                </h3>
                                <p className="mt-4 text-body">{featuredProject.problem}</p>
                            </div>
                        )}

                        {featuredProject.solution && (
                            <div className="card">
                                <h3 className="text-sm font-bold uppercase tracking-[4px] text-indigo-600">
                                    Solution
                                </h3>
                                <p className="mt-4 text-body">{featuredProject.solution}</p>
                            </div>
                        )}

                        {/* Technologies */}
                        <div>
                            <h3 className="text-lg font-bold text-slate-900 text-center">
                                Technologies
                            </h3>

                            <div className="mt-6 flex flex-wrap justify-center gap-3">
                                {featuredProject.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className={`rounded-full border px-4 py-2 text-xs font-semibold ${techColors[tech] ||
                                            "bg-slate-100 text-slate-700 border-slate-200"
                                            }`}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex flex-wrap justify-center gap-4 pt-6 border-t border-slate-200">
                            {featuredProject.github && (
                                <a
                                    href={featuredProject.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-outline"
                                >
                                    <FaGithub size={16} />
                                    GitHub
                                </a>
                            )}

                            {featuredProject.demo && (
                                <a
                                    href={featuredProject.demo}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="btn-primary"
                                >
                                    <ExternalLink size={16} />
                                    Live Demo
                                </a>
                            )}

                            <Link
                                to={`/project/${featuredProject.slug}`}
                                className="btn-outline"
                            >
                                View Details
                                <ArrowRight size={16} />
                            </Link>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default FeaturedProject;