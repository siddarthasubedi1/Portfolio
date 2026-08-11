import { motion } from "framer-motion";
import {
    GraduationCap,
    BriefcaseBusiness,
    MapPin,
    Code2,
    Laptop,
    Target,
    Award,
    Rocket,
    Sparkles,
} from "lucide-react";

const cards = [
    {
        icon: GraduationCap,
        title: "Education",
        description:
            "Currently pursuing BSc (Hons) Computer System Engineering at ISMT College with a strong focus on software engineering, system design, and modern web technologies.",
    },
    {
        icon: Code2,
        title: "Full Stack Development",
        description:
            "Building responsive, secure and scalable applications using React, Django REST Framework, PostgreSQL, REST APIs and modern development practices.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Career Goal",
        description:
            "Seeking a Full Stack Developer Internship where I can contribute to real-world projects while growing as a professional software engineer.",
    },
    {
        icon: MapPin,
        title: "Based In",
        description:
            "Pokhara, Nepal • Available for remote, hybrid and on-site internship opportunities.",
    },
];

const stats = [
    {
        number: "10+",
        label: "Projects",
        icon: Rocket,
    },
    {
        number: "15+",
        label: "Technologies",
        icon: Award,
    },
    {
        number: "2+",
        label: "Years Learning",
        icon: Target,
    },
];

export default function About() {
    return (
        <section id="about" className="section relative overflow-hidden">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute left-[-8%] top-20 h-72 w-72 rounded-full bg-emerald-200/25 blur-3xl"></div>
                <div className="absolute right-[-4%] bottom-10 h-80 w-80 rounded-full bg-sky-200/20 blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="inline-flex items-center rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
                        About Me
                    </span>

                    <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
                        Building digital experiences
                        <span className="mt-3 block bg-gradient-to-r from-emerald-600 via-green-500 to-teal-500 bg-clip-text text-transparent">
                            that feel polished and purposeful
                        </span>
                    </h2>

                    <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-slate-600">
                        I’m a Computer System Engineering student who loves turning ideas into
                        fast, secure, and user-friendly web applications with a strong focus on
                        clean code and thoughtful design.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-16 rounded-[36px] border border-emerald-100 bg-white/85 p-8 shadow-[0_25px_70px_rgba(15,23,42,.06)] backdrop-blur-xl md:p-10 lg:p-12"
                >
                    <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
                        <div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">
                                <Sparkles size={16} />
                                Crafting practical solutions
                            </div>

                            <h3 className="mt-6 text-2xl font-bold text-slate-900 sm:text-3xl">
                                From brainstorming to deployment, I focus on building products that are useful, reliable, and modern.
                            </h3>

                            <p className="mt-5 text-lg leading-8 text-slate-600">
                                My goal is to grow into a well-rounded Full Stack Developer who can own both the user experience and the technical foundation behind it.
                            </p>

                            <div className="mt-8 flex flex-wrap gap-3">
                                {[
                                    "React",
                                    "Django REST Framework",
                                    "PostgreSQL",
                                    "Responsive Design",
                                ].map((skill) => (
                                    <span
                                        key={skill}
                                        className="rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
                            {stats.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.label}
                                        whileHover={{ y: -6, scale: 1.02 }}
                                        transition={{ duration: 0.3 }}
                                        className="rounded-[24px] border border-emerald-100 bg-slate-50 p-5 text-center shadow-sm"
                                    >
                                        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
                                            <Icon size={22} />
                                        </div>
                                        <h3 className="mt-4 text-3xl font-black text-slate-900">
                                            {item.number}
                                        </h3>
                                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                                            {item.label}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>

                <div className="mt-10 grid gap-6 lg:grid-cols-2">
                    {cards.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.45, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="group rounded-[28px] border border-emerald-100 bg-white/80 p-7 shadow-sm backdrop-blur-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_20px_60px_rgba(34,197,94,.12)]"
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-md">
                                        <Icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-3 leading-8 text-slate-600">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}