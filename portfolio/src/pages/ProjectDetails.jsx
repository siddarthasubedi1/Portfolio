import { motion } from "framer-motion";

import { Link, useParams, Navigate } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import {
    ArrowLeft,
    ArrowUpRight,
    CheckCircle2,
    Code2,
    Database,
    Globe,
    Lightbulb,
    Rocket,
    ShieldCheck,
} from "lucide-react";

import { projects } from "../constants/projectData";

const ProjectDetails = () => {
    const { slug } = useParams();

    const project = projects.find(
        (item) => item.slug === slug
    );

    // -------------------------------
    // NOT FOUND
    // -------------------------------

    if (!project) {
        return <Navigate to="/404" replace />;
    }

    return (
        <section className="min-h-screen overflow-hidden bg-white py-24">
            <div className="mx-auto max-w-7xl px-6">
                {/* -------------------------------- */}

                {/* BACK BUTTON */}

                {/* -------------------------------- */}

                <Link
                    to="/"
                    className="inline-flex items-center gap-3 rounded-full border border-slate-300 px-6 py-4 font-semibold text-slate-700 transition duration-300 hover:bg-slate-100"
                >
                    <ArrowLeft size={20} />
                    Back To Home
                </Link>

                {/* -------------------------------- */}

                {/* HERO */}

                {/* -------------------------------- */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="mt-16 text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        PROJECT DETAILS
                    </p>

                    <h1 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-7xl">
                        {project.title}
                    </h1>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                        {project.description}
                    </p>
                </motion.div>

                {/* -------------------------------- */}

                {/* IMAGE */}

                {/* -------------------------------- */}

                <div className="mt-20 overflow-hidden rounded-[40px] shadow-2xl">
                    <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="h-full w-full object-cover"
                    />
                </div>

                {/* -------------------------------- */}

                {/* OVERVIEW */}

                {/* -------------------------------- */}

                <div className="mt-28 grid gap-10 lg:grid-cols-2">
                    <div>
                        <h2 className="text-4xl font-bold text-slate-900">
                            Why I Built This Project
                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">
                            {project.problem}
                        </p>
                    </div>

                    <div>
                        <h2 className="text-4xl font-bold text-slate-900">
                            What Problem Does It Solve?
                        </h2>

                        <p className="mt-8 text-lg leading-9 text-slate-600">
                            {project.solution}
                        </p>
                    </div>
                </div>

                {/* -------------------------------- */}

                {/* FEATURES */}

                {/* -------------------------------- */}

                <div className="mt-28">
                    <h2 className="text-center text-5xl font-extrabold text-slate-900">
                        Features
                    </h2>

                    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {project.features.map((feature) => (
                            <div
                                key={feature}
                                className="rounded-[30px] bg-slate-50 p-8 shadow-lg"
                            >
                                <CheckCircle2 className="text-indigo-600" />

                                <h3 className="mt-5 text-xl font-semibold text-slate-800">
                                    {feature}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------------------------------- */}

                {/* TECHNOLOGIES */}

                {/* -------------------------------- */}

                <div className="mt-28">
                    <h2 className="text-center text-5xl font-extrabold text-slate-900">
                        Technologies Used
                    </h2>

                    <div className="mt-14 flex flex-wrap justify-center gap-5">
                        {project.technologies.map((technology) => (
                            <span
                                key={technology}
                                className="rounded-full bg-indigo-50 px-6 py-4 font-semibold text-indigo-700"
                            >
                                {technology}
                            </span>
                        ))}
                    </div>
                </div>

                {/* -------------------------------- */}

                {/* CHALLENGES */}

                {/* -------------------------------- */}

                <div className="mt-28">
                    <h2 className="text-center text-5xl font-extrabold text-slate-900">
                        Challenges Faced
                    </h2>

                    <div className="mt-16 grid gap-8 md:grid-cols-2">
                        {project.challenges.map((item) => (
                            <div
                                key={item}
                                className="rounded-[30px] bg-white p-8 shadow-xl"
                            >
                                <ShieldCheck className="text-indigo-600" />

                                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------------------------------- */}

                {/* WHAT I LEARNED */}

                {/* -------------------------------- */}

                <div className="mt-28">
                    <h2 className="text-center text-5xl font-extrabold text-slate-900">
                        What I Learned
                    </h2>

                    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {project.learning.map((item) => (
                            <div
                                key={item}
                                className="rounded-[30px] bg-white p-8 shadow-xl"
                            >
                                <Lightbulb className="text-indigo-600" />

                                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                                    {item}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* -------------------------------- */}

                {/* ARCHITECTURE */}

                {/* -------------------------------- */}

                <div className="mt-28 rounded-[40px] bg-gradient-to-r from-blue-50 to-indigo-50 p-14">
                    <h2 className="text-center text-5xl font-extrabold text-slate-900">
                        Project Architecture
                    </h2>

                    <div className="mt-16 flex flex-wrap justify-center gap-6">
                        {project.architecture.map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-white px-7 py-4 font-semibold shadow-lg"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>

                {/* -------------------------------- */}

                {/* BUTTONS */}

                {/* -------------------------------- */}

                <div className="mt-28 flex flex-wrap justify-center gap-6">
                    {project.github && (
                        <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 rounded-full bg-slate-900 px-8 py-5 font-semibold text-white transition duration-300 hover:scale-105"
                        >
                            <FaGithub size={20} />
                            Source Code
                        </a>
                    )}

                    {project.demo && (
                        <a
                            href={project.demo}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-3 rounded-full bg-indigo-600 px-8 py-5 font-semibold text-white transition duration-300 hover:scale-105"
                        >
                            <Globe size={20} />
                            Live Demo
                            <ArrowUpRight size={18} />
                        </a>
                    )}
                </div>

                {/* -------------------------------- */}

                {/* CLOSING */}

                {/* -------------------------------- */}

                <div className="mt-32 rounded-[40px] bg-gradient-to-r from-indigo-50 to-sky-50 p-14 text-center">
                    <Rocket
                        size={50}
                        className="mx-auto text-indigo-600"
                    />

                    <h2 className="mt-8 text-4xl font-extrabold text-slate-900">
                        Continuous Learning Through Building
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-700">
                        Every project teaches me something new about
                        problem solving, software architecture and
                        modern web development practices.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default ProjectDetails;