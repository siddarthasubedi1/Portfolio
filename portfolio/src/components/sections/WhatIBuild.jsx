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
        <section id="what-i-build" className="section bg-white">
            <div className="container-custom">

                {/* ================= Header ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto max-w-4xl text-center"
                >

                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
                        What I Build
                    </span>

                    <h2 className="mt-8 text-4xl font-black text-slate-900 md:text-6xl">

                        Full Stack Solutions
                        <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                            Designed For Real Businesses
                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        I build complete web applications from frontend to backend,
                        focusing on performance, scalability, security, and an excellent
                        user experience.

                    </p>

                </motion.div>

                {/* Service Cards */}
                <div className="mt-24 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
                    {services.map((service, index) => {
                        const Icon = service.icon;
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: .5,
                                    delay: index * .08,
                                }}
                                whileHover={{
                                    y: -12,
                                }}
                                className="
                                group
                                relative
                                flex
                                h-full
                                flex-col
                                overflow-hidden
                                rounded-[32px]
                                border
                                border-green-100
                                bg-white
                                p-8
                                shadow-md
                                transition-all
                                duration-300
                                hover:border-green-300
                                hover:shadow-[0_25px_70px_rgba(34,197,94,.15)]
                            "
                            >

                                {/* Hover Background */}

                                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                                {/* Glow */}

                                <div className="absolute right-0 top-0 h-32 w-32 rounded-full bg-green-100 blur-[70px] opacity-0 transition duration-300 group-hover:opacity-100" />

                                <div className="relative z-10 flex h-full flex-col">

                                    {/* Icon */}

                                    <div
                                        className="
                                        flex
                                        h-16
                                        w-16
                                        items-center
                                        justify-center
                                        rounded-2xl
                                        bg-gradient-to-br
                                        from-green-500
                                        to-emerald-600
                                        text-white
                                        shadow-lg
                                        transition-all
                                        duration-300
                                        group-hover:scale-110
                                        group-hover:rotate-6
                                    "
                                    >
                                        <Icon size={28} />
                                    </div>

                                    {/* Title */}

                                    <h3 className="mt-8 text-xl font-bold text-slate-900">
                                        {service.title}
                                    </h3>

                                    {/* Badge */}

                                    <span className="mt-4 inline-flex w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                        Service
                                    </span>

                                    {/* Description */}

                                    <p className="mt-5 flex-1 leading-8 text-slate-600">
                                        {service.description}
                                    </p>

                                </div>

                            </motion.div>
                        );
                    })}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mt-24 rounded-[36px] border border-green-100 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-16 text-center text-white shadow-xl"
                >

                    <h3 className="text-3xl font-black">

                        Have a Project in Mind?

                    </h3>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">

                        Whether it's a business website, an e-commerce platform, or a custom web application, I'm ready to help transform your ideas into reliable, modern digital solutions.

                    </p>

                    <a
                        href="#contact"
                        className="mt-10 inline-flex rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition border-amber-600 hover:-translate-y-1 hover:shadow-xl"
                    >
                        Start a Conversation
                    </a>

                </motion.div>

            </div>
        </section>
    );
};

export default WhatIBuild;