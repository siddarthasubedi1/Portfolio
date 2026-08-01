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
            "Completed a 5-day UI/UX Design workshop covering wireframing, prototyping, design principles and user experience fundamentals.",
        icon: Award,
        link: "#",
    },
    {
        title: "Full Stack Web Development",
        organization: "Personal Learning",
        year: "Ongoing",
        description:
            "Building full-stack applications using React, Django REST Framework, PostgreSQL and REST APIs through hands-on projects.",
        icon: GraduationCap,
        link: "#",
    },
    {
        title: "Continuous Learning",
        organization: "Self Learning",
        year: "Current",
        description:
            "Expanding knowledge in authentication, deployment, Docker, Git, testing and modern software engineering practices.",
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
        <section id="certificates" className="bg-slate-50 py-28">
            <div className="mx-auto max-w-7xl px-6">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        CERTIFICATES & LEARNING
                    </p>

                    <h2 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
                        Continuous Growth
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        I believe the best developers never stop learning. Alongside my
                        academic studies, I continuously improve my skills through
                        hands-on projects, workshops and self-learning.
                    </p>
                </motion.div>

                {/* Certificates */}

                <div className="mt-20 grid gap-8 lg:grid-cols-3">
                    {certificates.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8 }}
                                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:shadow-2xl"
                            >
                                <div className="inline-flex rounded-2xl bg-indigo-100 p-4">
                                    <Icon size={30} className="text-indigo-600" />
                                </div>

                                <h3 className="mt-6 text-2xl font-bold text-slate-900">
                                    {item.title}
                                </h3>

                                <p className="mt-2 text-indigo-600 font-medium">
                                    {item.organization} • {item.year}
                                </p>

                                <p className="mt-6 leading-8 text-slate-600">
                                    {item.description}
                                </p>

                                {item.link !== "#" && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-8 inline-flex items-center gap-2 font-semibold text-indigo-600 hover:text-indigo-700"
                                    >
                                        View Certificate
                                        <ArrowUpRight size={18} />
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
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mt-24 rounded-3xl bg-white p-10 shadow-lg"
                >
                    <div className="flex items-center gap-3">
                        <BadgeCheck className="text-indigo-600" size={30} />
                        <h3 className="text-3xl font-bold text-slate-900">
                            Currently Learning
                        </h3>
                    </div>

                    <div className="mt-8 flex flex-wrap gap-4">
                        {currentlyLearning.map((item) => (
                            <span
                                key={item}
                                className="rounded-full bg-indigo-50 px-5 py-3 font-medium text-indigo-700"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <p className="mt-8 text-slate-600 leading-8">
                        My goal is to become a skilled Full Stack Developer by mastering
                        modern backend technologies, deployment, cloud services, software
                        architecture and scalable application development.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default Certificates;