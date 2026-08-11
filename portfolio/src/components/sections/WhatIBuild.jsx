import { motion } from "framer-motion";
import {
    ArrowRight,
    Database,
    Globe,
    Rocket,
    Server,
    ShieldCheck,
    Smartphone,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Frontend Development",
        description:
            "Build responsive, fast, and interactive user interfaces using React, Tailwind CSS, and modern frontend best practices.",
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "Develop secure and scalable REST APIs with Django REST Framework, authentication, permissions, and business logic.",
    },
    {
        icon: Database,
        title: "Database Design",
        description:
            "Design efficient PostgreSQL databases with optimized relationships, queries, and scalable data structures.",
    },
    {
        icon: ShieldCheck,
        title: "Authentication & Security",
        description:
            "Implement JWT authentication, role-based authorization, protected routes, and secure user management.",
    },
    {
        icon: Smartphone,
        title: "Responsive Web Design",
        description:
            "Create websites that look and perform beautifully across desktop, tablet, and mobile devices.",
    },
    {
        icon: Rocket,
        title: "Deployment & Optimization",
        description:
            "Deploy full-stack applications with optimized performance, production-ready configuration, and modern hosting platforms.",
    },
];

const WhatIBuild = () => {
    return (
        <section id="what-i-build" className="section relative overflow-hidden bg-[radial-gradient(circle_at_top_right,_rgba(16,185,129,0.12),_transparent_38%)]">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative overflow-hidden rounded-[36px] border border-emerald-100 bg-white/90 p-6 shadow-[0_20px_60px_rgba(16,185,129,0.08)] sm:p-8 lg:p-10"
                >
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-emerald-500/15 via-transparent to-green-500/15" />
                    <div className="relative grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
                        <div className="max-w-2xl">
                            <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
                                What I Build
                            </span>

                            <h2 className="mt-6 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
                                Full stack solutions
                                <span className="mt-3 block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                                    built for real products
                                </span>
                            </h2>

                            <p className="mt-6 text-lg leading-8 text-slate-600">
                                I create modern, scalable web experiences from the first screen to the final deployment, with a focus on performance, clarity, and long-term reliability.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                <a href="#contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition hover:-translate-y-1 hover:bg-emerald-700">
                                    Start a conversation
                                    <ArrowRight size={18} />
                                </a>
                                <a href="#why-hire-me" className="inline-flex items-center justify-center rounded-full border border-emerald-200 bg-white px-6 py-3.5 text-sm font-semibold text-emerald-700 transition hover:-translate-y-1 hover:border-emerald-400 hover:text-emerald-800">
                                    Why work with me
                                </a>
                            </div>
                        </div>

                        <div className="rounded-[28px] border border-emerald-100 bg-slate-900 p-6 text-white shadow-[0_20px_50px_rgba(15,23,42,0.18)]">
                            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300">
                                Project focus
                            </p>
                            <div className="mt-4 space-y-3 text-sm text-slate-300">
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                                    Sleek business websites with polished layouts and strong conversion paths.
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                                    Secure dashboards and web apps with smooth interactions and clean architecture.
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/10 p-3">
                                    Scalable products that are easy to maintain and ready to grow.
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.article
                                key={service.title}
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

                                    <h3 className="mt-6 text-xl font-bold text-slate-900">{service.title}</h3>

                                    <span className="mt-4 inline-flex w-fit rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                        Service
                                    </span>

                                    <p className="mt-5 flex-1 leading-8 text-slate-600">{service.description}</p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default WhatIBuild;
