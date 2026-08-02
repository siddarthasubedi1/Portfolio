import { motion } from "framer-motion";
import {
    GraduationCap,
    BriefcaseBusiness,
    MapPin,
    Code2,
    Rocket,
    Laptop,
    CheckCircle2,
} from "lucide-react";

const cards = [
    {
        icon: <GraduationCap className="text-indigo-600" size={26} />,
        title: "Education",
        description:
            "BSc (Hons) Computer System Engineering at ISMT College, Pokhara.",
    },
    {
        icon: <Code2 className="text-indigo-600" size={26} />,
        title: "Full Stack Development",
        description:
            "Building scalable applications using React, Django REST Framework and PostgreSQL.",
    },
    {
        icon: <BriefcaseBusiness className="text-indigo-600" size={26} />,
        title: "Open To Work",
        description:
            "Actively seeking Full Stack Developer internship opportunities.",
    },
    {
        icon: <MapPin className="text-indigo-600" size={26} />,
        title: "Location",
        description: "Pokhara, Nepal",
    },
];

const strengths = [
    "REST API Development",
    "Responsive Web Design",
    "Authentication & Authorization",
    "Database Design",
    "Frontend Development",
    "Backend Development",
    "Problem Solving",
    "Clean & Maintainable Code",
];

export default function About() {
    return (
        <section id="about" className="section bg-slate-50">
            <div className="container-custom">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center align-middle"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        ABOUT ME
                    </p>

                    <h2 className="heading-lg mt-6 max-w-3xl mx-auto">
                        Building Modern Full Stack Applications
                    </h2>

                    <p className="mt-6 text-body max-w-2xl mx-auto">
                        I’m a Computer System Engineering student passionate about building
                        scalable, secure and maintainable web applications using modern full stack technologies.
                    </p>
                </motion.div>

                {/* Main Grid */}
                <div className="mt-20 grid gap-12 lg:grid-cols-2">

                    {/* Left Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 via-white to-purple-50 p-10 shadow-lg border border-indigo-100">

                            {/* Decorative Blur Accent */}
                            <div className="absolute -top-16 -right-16 h-40 w-40 rounded-full bg-purple-200/40 blur-3xl"></div>

                            <div className="relative">

                                {/* Header */}
                                <div className="flex items-center gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow">
                                        <Laptop size={22} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-slate-900">
                                        My Goal
                                    </h3>
                                </div>

                                {/* Goal Statement */}
                                <p className="mt-6 text-lg leading-relaxed text-slate-700">
                                    To become a professional Full Stack Developer by building scalable,
                                    user-focused systems and continuously improving my technical skills.
                                </p>

                                {/* Section Label */}
                                <div className="mt-10 mb-6">
                                    <span className="inline-block rounded-full bg-indigo-100 px-4 py-2 text-sm font-semibold text-indigo-700">
                                        Currently Looking For
                                    </span>
                                </div>

                                {/* Colorful Items */}
                                <div className="grid gap-4 sm:grid-cols-2">

                                    <div className="flex items-center gap-3 rounded-xl bg-indigo-100 px-4 py-3 text-indigo-700 font-medium">
                                        <CheckCircle2 size={18} />
                                        Full Stack Internship
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-purple-100 px-4 py-3 text-purple-700 font-medium">
                                        <CheckCircle2 size={18} />
                                        Junior Web Developer Role
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-sky-100 px-4 py-3 text-sky-700 font-medium">
                                        <CheckCircle2 size={18} />
                                        Collaborative Projects
                                    </div>

                                    <div className="flex items-center gap-3 rounded-xl bg-emerald-100 px-4 py-3 text-emerald-700 font-medium">
                                        <CheckCircle2 size={18} />
                                        Learning Opportunities
                                    </div>

                                </div>

                            </div>
                        </div>
                    </motion.div>

                    {/* Right Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="grid gap-6"
                    >
                        {cards.map((card) => (
                            <div key={card.title} className="card hover:border-indigo-200">
                                <div className="flex items-center gap-3">
                                    {card.icon}
                                    <h3 className="text-lg font-bold">{card.title}</h3>
                                </div>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>

                </div>

                {/* Strengths */}
                <div className="mt-20 border-t border-slate-200 pt-16">
                    <h3 className="text-center text-2xl font-bold">
                        What I Bring To The Table
                    </h3>

                    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {strengths.map((s) => (
                            <div key={s} className="card text-center">
                                <p className="font-medium text-slate-700">{s}</p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}