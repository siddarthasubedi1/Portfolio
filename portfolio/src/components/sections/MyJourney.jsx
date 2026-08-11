import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Code2, Trophy } from "lucide-react";

const journey = [
    {
        year: "2022",
        icon: GraduationCap,
        title: "Higher Secondary Education",
        subtitle: "Kalika Secondary School",
        description:
            "Completed Higher Secondary Education in Science, building strong analytical thinking and foundational computer science knowledge.",
    },
    {
        year: "2023 – Present",
        icon: GraduationCap,
        title: "BSc (Hons) Computer System Engineering",
        subtitle: "ISMT College, Pokhara",
        description:
            "Focused on software engineering, databases, networking, and modern full stack development.",
    },
    {
        year: "2024",
        icon: Code2,
        title: "Full Stack Development Journey",
        subtitle: "React + Django REST",
        description:
            "Built real-world applications using modern backend architecture and responsive frontend systems.",
    },
    {
        year: "2024 – Present",
        icon: Briefcase,
        title: "Personal Projects & Systems",
        subtitle: "Authentication & E-commerce",
        description:
            "Developed scalable authentication systems and full e-commerce applications with clean architecture.",
    },
    {
        year: "Current Goal",
        icon: Trophy,
        title: "Seeking Internship",
        subtitle: "Full Stack Developer",
        description:
            "Actively seeking opportunities to contribute, learn, and grow as a professional developer.",
    },
];

const MyJourney = () => {
    return (
        <section id="journey" className="section relative overflow-hidden">
            <div className="container-custom">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <span className="inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-5 py-2 text-sm font-semibold text-emerald-700">
                        My Journey
                    </span>

                    <h2 className="mt-8 text-4xl font-black text-slate-900 sm:text-5xl lg:text-6xl">
                        Learning,
                        <span className="mt-3 block bg-gradient-to-r from-emerald-600 to-green-500 bg-clip-text text-transparent">
                            building & growing
                        </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
                        Every project, every challenge, and every technology I learn brings me one step closer to becoming a polished Full Stack Software Engineer.
                    </p>
                </motion.div>

                <div className="mt-16 space-y-6">
                    {journey.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.article
                                key={item.title}
                                initial={{ opacity: 0, y: 25 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.08 }}
                                viewport={{ once: true }}
                                whileHover={{ y: -6, scale: 1.01 }}
                                className="relative rounded-[30px] border border-emerald-100 bg-white p-6 shadow-sm transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_20px_60px_rgba(34,197,94,.12)] sm:p-8"
                            >
                                <div className="absolute left-4 top-8 hidden h-5 w-5 rounded-full bg-emerald-500 ring-4 ring-white shadow-lg sm:block lg:left-8" />

                                <div className="sm:ml-8 lg:ml-12">
                                    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                                        <div className="flex items-start gap-4">
                                            <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-lg">
                                                <Icon size={24} />
                                            </div>
                                            <div>
                                                <span className="inline-flex rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
                                                    {item.year}
                                                </span>
                                                <h3 className="mt-4 text-xl font-bold text-slate-900">
                                                    {item.title}
                                                </h3>
                                                <p className="mt-2 text-sm font-semibold text-emerald-600">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="mt-5 leading-8 text-slate-600">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default MyJourney;