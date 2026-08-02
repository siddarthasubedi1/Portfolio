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
            "Modern and responsive interfaces built using React, Vite and Tailwind CSS.",
    },
    {
        icon: Server,
        title: "Backend Development",
        description:
            "Scalable REST APIs using Django REST Framework with secure authentication.",
    },
    {
        icon: Database,
        title: "Database Design",
        description:
            "Efficient PostgreSQL schemas with optimized queries and relationships.",
    },
    {
        icon: ShieldCheck,
        title: "Authentication",
        description:
            "JWT-based authentication, authorization and protected route systems.",
    },
    {
        icon: Smartphone,
        title: "Responsive Design",
        description:
            "Applications optimized for desktop, tablet and mobile experiences.",
    },
    {
        icon: Rocket,
        title: "Deployment",
        description:
            "Deploying full-stack applications using modern hosting platforms.",
    },
];

const WhatIBuild = () => {
    return (
        <section id="what-i-build" className="section bg-white">
            <div className="container-custom">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                        WHAT I BUILD
                    </p>

                    <h2 className="heading-lg mt-6">
                        Building Modern Web Applications
                    </h2>

                    <p className="mt-6 text-body max-w-3xl mx-auto">
                        I focus on creating scalable, secure and maintainable full stack
                        systems using modern technologies.
                    </p>
                </motion.div>

                {/* Service Cards */}
                <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="card"
                            >
                                <div className="rounded-xl bg-indigo-100 p-4 w-fit">
                                    <Icon size={28} className="text-indigo-600" />
                                </div>

                                <h3 className="mt-6 text-xl font-bold text-slate-900">
                                    {service.title}
                                </h3>

                                <p className="mt-4 text-slate-600 leading-relaxed">
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