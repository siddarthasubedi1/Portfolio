import { motion } from "framer-motion";
import {
    ArrowRight,
    Brain,
    Code2,
    Database,
    LayoutDashboard,
    Rocket,
    Sparkles,
    Target,
    Users,
} from "lucide-react";

const qualities = [
    {
        icon: Code2,
        title: "Full Stack Development",
        description:
            "Build responsive web applications using React, Django REST Framework and PostgreSQL.",
    },
    {
        icon: Database,
        title: "REST API Development",
        description:
            "Develop secure and scalable REST APIs with authentication and CRUD operations.",
    },
    {
        icon: LayoutDashboard,
        title: "Modern UI",
        description:
            "Create responsive and user-friendly interfaces with Tailwind CSS and React.",
    },
    {
        icon: Brain,
        title: "Problem Solving",
        description:
            "Enjoy learning new technologies and solving real-world programming challenges.",
    },
    {
        icon: Users,
        title: "Team Player",
        description:
            "Comfortable collaborating, learning from feedback, and working in team environments.",
    },
    {
        icon: Rocket,
        title: "Career Focus",
        description:
            "Seeking internship opportunities to gain industry experience and continue growing as a developer.",
    },
];

const highlights = [
    { label: "Projects built", value: "8+" },
    { label: "Focus areas", value: "Full stack" },
    { label: "Approach", value: "User-first" },
];

const WhyHireMe = () => {
    return (
        <section id="why-hire-me" className="section relative overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(16,185,129,0.12),_transparent_42%)]">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[36px] border border-emerald-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.08)] sm:p-8 lg:p-10"
                >
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-emerald-500/15 via-transparent to-green-500/15" />

                    <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div className="max-w-2xl">
                            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
                                Why Hire Me
                            </span>

                            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
                                I bring thoughtful
                                <span className="mt-3 block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                                    development and teamwork
                                </span>
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                I combine clean design, reliable development, and clear communication to turn ideas into polished digital experiences that feel modern and work smoothly.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-700">
                                    Let&apos;s connect
                                    <ArrowRight size={18} />
                                </a>
                                <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-emerald-700 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-800">
                                    View projects
                                </a>
                            </div>

                            <div className="mt-8 grid gap-3 sm:grid-cols-3">
                                {highlights.map((item) => (
                                    <div key={item.label} className="rounded-2xl border border-emerald-100 bg-emerald-50/70 px-4 py-3 text-left">
                                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                            {item.label}
                                        </p>
                                        <p className="mt-1 text-lg font-bold text-slate-900">{item.value}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 24 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="rounded-[28px] border border-emerald-200 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-700 p-6 text-white shadow-[0_20px_50px_rgba(16,185,129,0.24)]"
                        >
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                                    <Sparkles size={22} />
                                </div>
                                <div>
                                    <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-100">
                                        My approach
                                    </p>
                                    <h3 className="text-xl font-bold">Built with intention</h3>
                                </div>
                            </div>

                            <ul className="mt-6 space-y-3 text-sm text-emerald-50">
                                <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                                    <Target size={18} className="mt-0.5 shrink-0" />
                                    <span>Focus on user needs, performance, and clean, modern interfaces.</span>
                                </li>
                                <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                                    <Sparkles size={18} className="mt-0.5 shrink-0" />
                                    <span>Combine creativity with practical problem-solving and dependable execution.</span>
                                </li>
                                <li className="flex items-start gap-3 rounded-2xl bg-white/10 p-3">
                                    <Users size={18} className="mt-0.5 shrink-0" />
                                    <span>Work closely, communicate clearly, and keep improving with every project.</span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </motion.div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {qualities.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 28 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                whileHover={{ y: -8, scale: 1.01 }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-[30px] border border-emerald-100 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_25px_70px_rgba(34,197,94,.12)]"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />
                                <div className="relative z-10 flex h-full flex-col">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg transition-all duration-300 group-hover:rotate-6 group-hover:scale-110">
                                        <Icon size={24} />
                                    </div>

                                    <h3 className="mt-6 text-xl font-bold text-slate-900">{item.title}</h3>

                                    <span className="mt-4 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                        Professional Skill
                                    </span>

                                    <p className="mt-5 flex-1 leading-8 text-slate-600">{item.description}</p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhyHireMe;
