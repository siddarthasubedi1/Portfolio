import { motion } from "framer-motion";
import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaGitAlt,
    FaNodeJs,
} from "react-icons/fa";

import {
    SiJavascript,
    SiTailwindcss,
    SiPostgresql,
    SiDjango,
} from "react-icons/si";

import { ArrowRight, Download } from "lucide-react";

const Hero = () => {
    return (
        <section
            id="home"
            className="relative overflow-hidden bg-[#070B1A] text-white"
        >
            {/* Background Blur */}
            <div className="absolute -left-24 top-20 h-96 w-96 rounded-full bg-violet-600/20 blur-[140px]" />

            <div className="absolute -right-20 bottom-10 h-[500px] w-[500px] rounded-full bg-blue-600/10 blur-[180px]" />

            {/* Container */}
            <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-between gap-20 px-6 pt-36 pb-20 lg:flex-row">

                {/* LEFT SIDE */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: -60,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    className="max-w-xl"
                >
                    {/* Badge */}
                    <span className="inline-block rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[3px] text-violet-400">
                        I'M A FULL STACK DEVELOPER
                    </span>

                    {/* Heading */}
                    <h1 className="mt-8 text-5xl font-extrabold leading-tight lg:text-7xl">
                        Hi, I'm{" "}
                        <span className="text-violet-500">
                            Siddartha
                        </span>
                        <br />
                        I build things for the web.
                    </h1>

                    {/* Description */}
                    <p className="mt-8 text-lg leading-8 text-slate-400">
                        I'm passionate about developing secure, scalable and
                        modern web applications using Python, Django REST
                        Framework, React, PostgreSQL and Tailwind CSS.
                        I enjoy creating clean UI and responsive user
                        experiences.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-5">
                        <a
                            href="#projects"
                            className="flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-4 font-semibold transition hover:bg-violet-700"
                        >
                            View My Work

                            <ArrowRight size={18} />
                        </a>

                        <a
                            href="/resume.pdf"
                            download
                            className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-6 py-4 font-semibold transition hover:border-violet-500 hover:bg-slate-800"
                        >
                            Download CV

                            <Download size={18} />
                        </a>
                    </div>

                    {/* Technologies */}
                    <div className="mt-14">
                        <p className="mb-5 text-sm font-semibold uppercase tracking-[3px] text-slate-500">
                            Technologies I Work With
                        </p>

                        <div className="flex flex-wrap gap-5 text-4xl">

                            <FaHtml5 className="text-orange-500 transition hover:scale-110" />

                            <FaCss3Alt className="text-blue-500 transition hover:scale-110" />

                            <SiJavascript className="text-yellow-400 transition hover:scale-110" />

                            <FaReact className="text-cyan-400 transition hover:scale-110" />

                            <SiTailwindcss className="text-sky-400 transition hover:scale-110" />

                            <SiDjango className="text-green-500 transition hover:scale-110" />

                            <SiPostgresql className="text-blue-400 transition hover:scale-110" />

                            <FaNodeJs className="text-green-400 transition hover:scale-110" />

                            <FaGitAlt className="text-orange-600 transition hover:scale-110" />

                        </div>
                    </div>
                </motion.div>

                {/* RIGHT SIDE */}
                <motion.div
                    initial={{
                        opacity: 0,
                        x: 80,
                    }}
                    animate={{
                        opacity: 1,
                        x: 0,
                    }}
                    transition={{
                        duration: 1,
                    }}
                    className="relative flex items-center justify-center"
                >
                    {/* Purple Circle */}
                    <div className="absolute h-[420px] w-[420px] rounded-full bg-gradient-to-br from-violet-600 via-purple-500 to-blue-600 opacity-70 blur-3xl" />

                    {/* Decorative Circle */}
                    <div className="absolute h-[420px] w-[420px] rounded-full border border-violet-500/20" />

                    {/* Image */}
                    <motion.img
                        animate={{
                            y: [-12, 12, -12],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 5,
                        }}
                        src="/profile.png"
                        alt="Siddartha Raj Subedi"
                        className="relative z-10 w-[340px] object-contain lg:w-[470px]"
                    />

                    {/* Floating Card */}
                    <motion.div
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 4,
                        }}
                        className="absolute right-0 top-16 z-20 w-64 rounded-2xl border border-slate-700 bg-[#0B1220]/90 p-5 shadow-2xl backdrop-blur-xl"
                    >
                        <div className="mb-3 flex items-center justify-between">
                            <span className="text-xs text-slate-400">
                                developer.js
                            </span>

                            <div className="flex gap-1">
                                <div className="h-2 w-2 rounded-full bg-red-500" />
                                <div className="h-2 w-2 rounded-full bg-yellow-500" />
                                <div className="h-2 w-2 rounded-full bg-green-500" />
                            </div>
                        </div>

                        <pre className="overflow-hidden text-sm leading-7 text-violet-400">
                            {`const developer = {
  name: "Siddartha",
  role: "Full Stack",
  stack: [
    "React",
    "Django",
    "PostgreSQL"
  ],
  passion: "Building"
};`}
                        </pre>
                    </motion.div>

                    {/* Dots */}
                    <div className="absolute -right-6 top-0 grid grid-cols-4 gap-2 opacity-40">
                        {Array.from({ length: 16 }).map((_, index) => (
                            <div
                                key={index}
                                className="h-2 w-2 rounded-full bg-violet-500"
                            />
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;