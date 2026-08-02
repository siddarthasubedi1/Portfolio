import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import profile from "../constants/profile";
import heroData from "../constants/heroData";

const HeroContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
        >
            {/* Availability Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-500" />
                {heroData.availability}
            </div>

            {/* Name + Title */}
            <h1 className="mt-8 text-5xl font-black leading-tight tracking-tight text-slate-900 md:text-6xl">
                {heroData.name}
            </h1>

            <h2 className="mt-4 text-2xl font-semibold text-indigo-600 md:text-3xl">
                {heroData.title}
            </h2>

            {/* Short Statement */}
            <p className="mt-6 text-lg leading-8 text-slate-600">
                I build secure, scalable and modern full stack applications using
                React and Django REST Framework.
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-wrap gap-4">
                <a
                    href="#projects"
                    className="btn-primary px-7 py-4"
                >
                    View Projects
                    <ArrowRight size={18} />
                </a>

                <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-outline px-7 py-4"
                >
                    <Download size={18} />
                    Resume
                </a>
            </div>

            {/* Social Icons */}
            <div className="mt-5 flex gap-5">
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-15 w-15 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-600 hover:text-indigo-600 "
                >
                    <FaGithub size={40} />
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex h-15 w-15 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:border-indigo-600 hover:text-indigo-600 cover mt-10"
                >
                    <FaLinkedin size={40} />
                </a>
            </div>
        </motion.div>
    );
};

export default HeroContent;