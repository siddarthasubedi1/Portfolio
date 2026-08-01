import { motion } from "framer-motion";
import {
    Globe,
    Database,
    ShieldCheck,
    Smartphone,
    Server,
    Rocket,
} from "lucide-react";

const services = [
    {
        icon: Globe,
        title: "Frontend Development",
        description:
            "Modern, responsive and accessible user interfaces built with React, Vite and Tailwind CSS.",
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "RESTful APIs using Django REST Framework with secure authentication and clean architecture.",
    },
    {
        icon: Database,
        title: "Database Design",
        description:
            "Designing relational databases using PostgreSQL with optimized queries and proper relationships.",
    },
    {
        icon: ShieldCheck,
        title: "Authentication",
        description:
            "JWT authentication, authorization, protected routes, password reset and secure user management.",
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description:
            "Applications that work seamlessly across desktop, tablet and mobile devices.",
    },
    {
        icon: Rocket,
        title: "Deployment",
        description:
            "Deploying full-stack applications with modern hosting platforms and Git-based workflows.",
    },
];

const WhatIBuild = () => {
    return (
        <section
            id="what-i-build"
            className="bg-slate-50 py-28"
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
                        WHAT I BUILD
                    </p>

                    <h2 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
                        Building Modern Web Applications
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        I enjoy building secure, scalable and responsive web
                        applications while learning modern software engineering
                        practices and writing clean, maintainable code.
                    </p>
                </motion.div>

                {/* Cards */}

                <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={service.title}
                                initial={{
                                    opacity: 0,
                                    y: 40,
                                }}
                                whileInView={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.08,
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -8,
                                }}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition-all hover:border-indigo-300 hover:shadow-2xl"
                            >
                                <div className="inline-flex rounded-2xl bg-indigo-100 p-4">
                                    <Icon
                                        size={32}
                                        className="text-indigo-600"
                                    />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-4 leading-8 text-slate-600">
                                    {service.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
};

export default WhatIBuild;