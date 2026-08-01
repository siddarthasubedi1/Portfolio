import { motion } from "framer-motion";
import {
    ArrowRight,
    Download,
    MapPin,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

import profile from "../constants/profile";
import heroData from "../constants/heroData";

import HeroStats from "./HeroStats";
import TechStack from "./TechStack";

const HeroContent = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
        >
            {/* Availability */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>

                <span className="text-sm font-semibold text-emerald-700">
                    {heroData.availability}
                </span>
            </div>

            {/* Greeting */}

            <div>
                <p className="text-xl font-medium text-slate-500">
                    {heroData.greeting}
                </p>

                <h1 className="mt-3 text-5xl font-black leading-tight text-slate-900 md:text-7xl">
                    {heroData.name}
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-indigo-600 md:text-4xl">
                    {heroData.title}
                </h2>
            </div>

            {/* Description */}

            <p className="max-w-2xl text-lg leading-9 text-slate-600">
                {heroData.description}
            </p>

            {/* Location */}

            <div className="flex items-center gap-2 text-slate-500">
                <MapPin size={18} />

                <span>{heroData.location}</span>
            </div>

            {/* Buttons */}

            <div className="flex flex-wrap gap-4">
                <a
                    href="#featured-project"
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-600 px-7 py-4 font-semibold text-white transition hover:scale-105 hover:bg-indigo-700"
                >
                    View Projects

                    <ArrowRight size={18} />
                </a>

                <a
                    href={profile.resume}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-7 py-4 font-semibold transition hover:border-indigo-600 hover:text-indigo-600"
                >
                    <Download size={18} />

                    Resume
                </a>
            </div>

            {/* Social */}

            <div className="flex gap-5">
                <a
                    href={profile.github}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border p-3 transition hover:bg-slate-100"
                >
                    <FaGithub size={22} />
                </a>

                <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-full border p-3 transition hover:bg-slate-100"
                >
                    <FaLinkedin size={22} />
                </a>
            </div>

            <HeroStats />

            <TechStack />
        </motion.div>
    );
};

export default HeroContent;