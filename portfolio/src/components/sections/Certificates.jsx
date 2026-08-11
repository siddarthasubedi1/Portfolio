import { motion } from "framer-motion";
import {
    Award,
    BookOpen,
    GraduationCap,
    BadgeCheck,
    ArrowUpRight,
    Sparkles,
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
            "Expanding knowledge in authentication, deployment, Docker, Git, testing and modern software engineering practices.",
        icon: BookOpen,
        link: "#",
    },
];

const currentlyLearning = [
    {
        name: "Docker",
        color: "border-sky-200 bg-sky-50 text-sky-700 hover:bg-sky-100",
    },
    {
        name: "CI/CD",
        color: "border-violet-200 bg-violet-50 text-violet-700 hover:bg-violet-100",
    },
    {
        name: "Testing",
        color: "border-emerald-200 bg-emerald-50 text-emerald-700 hover:bg-emerald-100",
    },
    {
        name: "Redis",
        color: "border-red-200 bg-red-50 text-red-700 hover:bg-red-100",
    },
    {
        name: "Celery",
        color: "border-orange-200 bg-orange-50 text-orange-700 hover:bg-orange-100",
    },
    {
        name: "AWS Basics",
        color: "border-yellow-200 bg-yellow-50 text-yellow-700 hover:bg-yellow-100",
    },
    {
        name: "System Design",
        color: "border-teal-200 bg-teal-50 text-teal-700 hover:bg-teal-100",
    },
    {
        name: "Clean Architecture",
        color: "border-indigo-200 bg-indigo-50 text-indigo-700 hover:bg-indigo-100",
    },
];

const Certificates = () => {
    return (
        <section id="certificates" className="section relative overflow-hidden bg-slate-50">
            <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl" />
            <div className="pointer-events-none absolute bottom-20 right-0 h-80 w-80 rounded-full bg-teal-200/20 blur-3xl" />

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
                        <Sparkles size={16} />
                        Certificates & Learning
                    </div>

                    <h2 className="mt-7 text-4xl font-black tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Continuous
                        <span className="mt-2 block bg-gradient-to-r from-emerald-600 via-teal-500 to-sky-500 bg-clip-text text-transparent">
                            growth
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                        I continuously improve my skills through structured learning, hands-on projects and exploration of modern software engineering practices.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {certificates.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 35 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.55, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -8, scale: 1.01 }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-emerald-200 hover:shadow-[0_25px_70px_rgba(15,23,42,0.10)] sm:p-8"
                            >
                                <div className="absolute left-0 right-0 top-0 h-1 bg-gradient-to-r from-emerald-500 via-teal-500 to-sky-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <div className="flex items-center justify-between">
                                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white">
                                        <Icon size={24} />
                                    </div>

                                    <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-500">
                                        {item.year}
                                    </span>
                                </div>

                                <div className="mt-7 flex-1">
                                    <h3 className="text-xl font-bold leading-snug text-slate-900 transition-colors duration-300 group-hover:text-emerald-600">
                                        {item.title}
                                    </h3>

                                    <p className="mt-2 text-sm font-semibold text-emerald-600">
                                        {item.organization}
                                    </p>

                                    <p className="mt-5 text-sm leading-7 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>

                                {item.link !== "#" && (
                                    <a
                                        href={item.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mt-7 inline-flex w-fit items-center gap-2 text-sm font-bold text-emerald-600 transition-colors hover:text-emerald-700"
                                    >
                                        View Certificate
                                        <ArrowUpRight
                                            size={16}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </a>
                                )}
                            </motion.article>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="relative mt-16 overflow-hidden rounded-[32px] border border-slate-200 bg-white p-7 shadow-sm sm:p-10 lg:p-12"
                >
                    <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-100/50 blur-3xl" />

                    <div className="relative z-10 text-center">
                        <div className="flex items-center justify-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                                <BadgeCheck size={23} />
                            </div>

                            <h3 className="text-2xl font-bold text-slate-900">
                                Currently Learning
                            </h3>
                        </div>

                        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-600 sm:text-base">
                            Technologies and concepts I am currently exploring to strengthen my backend, deployment and software engineering skills.
                        </p>

                        <div className="mt-8 flex flex-wrap justify-center gap-3">
                            {currentlyLearning.map((item, index) => (
                                <motion.span
                                    key={item.name}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.35, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                    whileHover={{ y: -3 }}
                                    className={`cursor-default rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-200 ${item.color}`}
                                >
                                    {item.name}
                                </motion.span>
                            ))}
                        </div>

                        <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-emerald-100 bg-emerald-50/70 p-5">
                            <p className="text-sm leading-7 text-emerald-800 sm:text-base">
                                My goal is to master backend architecture, cloud deployment, scalable systems and clean software design principles.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Certificates;