import { motion } from "framer-motion";
import {
    Award,
    BookOpen,
    GraduationCap,
    BadgeCheck,
    ArrowUpRight,
} from "lucide-react";

const certificates = [
    {
        title: "UI/UX Design Training",
        organization: "ISMT College",
        year: "2025",
        description:
            "Completed a 5-day workshop covering wireframing, prototyping, design principles and user experience fundamentals.",
        icon: Award,
        link: "#",
    },
    {
        title: "Full Stack Web Development",
        organization: "Personal Learning",
        year: "Ongoing",
        description:
            "Building full-stack applications using React, Django REST Framework and PostgreSQL through real-world projects.",
        icon: GraduationCap,
        link: "#",
    },
    {
        title: "Continuous Learning",
        organization: "Self Learning",
        year: "Current",
        description:
            "Expanding knowledge in authentication, deployment, Docker, Git, testing and software engineering practices.",
        icon: BookOpen,
        link: "#",
    },
];

const currentlyLearning = [
    "Docker",
    "CI/CD",
    "Testing",
    "Redis",
    "Celery",
    "AWS Basics",
    "System Design",
    "Clean Architecture",
];

const Certificates = () => {
    return (
        <section id="certificates" className="section bg-slate-50">
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
                        CERTIFICATES & LEARNING
                    </p>

                    <h2 className="heading-lg mt-6">
                        Continuous Growth
                    </h2>

                    <p className="mt-6 text-body max-w-3xl mx-auto">
                        I continuously improve my skills through structured learning,
                        hands-on projects and exploration of modern software engineering practices.
                    </p>
                </motion.div>

                {/* Certificates Grid */}
                <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                className="card text-center"
                            >
                                <div className="flex justify-center">
                                    <div className="rounded-xl bg-indigo-100 p-4">
                                        <Icon size={24} className="text-indigo-600" />
                                    </div>
                                </div>

                                <h3 className="mt-6 text-lg font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-sm font-medium text-indigo-600">
                                    {item.organization} • {item.year}
                                </p>

                                <p className="mt-5 text-slate-600 leading-relaxed">
                                    {item.description}
                                </p>

                                {item.link !== "#" && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-indigo-600 hover:text-indigo-700"
                                    >
                                        View Certificate
                                        <ArrowUpRight size={16} />
                                    </a>
                                )}
                            </motion.div>
                        );
                    })}
                </div>

                {/* Currently Learning */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-24 card text-center"
                >
                    <div className="flex items-center justify-center gap-3">
                        <BadgeCheck size={26} className="text-indigo-600" />
                        <h3 className="text-xl font-bold text-slate-900">
                            Currently Learning
                        </h3>
                    </div>

                    {/* Colorful Tech Tags */}
                    <div className="mt-10 flex flex-wrap justify-center gap-4">

                        <span className="rounded-full border border-blue-200 bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700">
                            Docker
                        </span>

                        <span className="rounded-full border border-purple-200 bg-purple-100 px-5 py-2 text-sm font-semibold text-purple-700">
                            CI/CD
                        </span>

                        <span className="rounded-full border border-emerald-200 bg-emerald-100 px-5 py-2 text-sm font-semibold text-emerald-700">
                            Testing
                        </span>

                        <span className="rounded-full border border-red-200 bg-red-100 px-5 py-2 text-sm font-semibold text-red-700">
                            Redis
                        </span>

                        <span className="rounded-full border border-orange-200 bg-orange-100 px-5 py-2 text-sm font-semibold text-orange-700">
                            Celery
                        </span>

                        <span className="rounded-full border border-yellow-200 bg-yellow-100 px-5 py-2 text-sm font-semibold text-yellow-700">
                            AWS Basics
                        </span>

                        <span className="rounded-full border border-indigo-200 bg-indigo-100 px-5 py-2 text-sm font-semibold text-indigo-700">
                            System Design
                        </span>

                        <span className="rounded-full border border-sky-200 bg-sky-100 px-5 py-2 text-sm font-semibold text-sky-700">
                            Clean Architecture
                        </span>

                    </div>

                    <p className="mt-8 text-body max-w-2xl mx-auto">
                        My goal is to master backend architecture, cloud deployment,
                        scalable systems and clean software design principles.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Certificates;