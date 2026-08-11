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
        <section id="journey" className="relative overflow-hidden py-32 lg:py-40">
            <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">

                {/* ================= Header ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto max-w-4xl text-center"
                >

                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
                        My Journey
                    </span>

                    <h2 className="mt-8 text-4xl font-black text-slate-900 md:text-6xl">

                        Learning,
                        <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
                            Building & Growing
                        </span>

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">

                        Every project, every challenge, and every technology I learn
                        moves me one step closer to becoming a professional Full Stack
                        Software Engineer.

                    </p>

                </motion.div>

                {/* Timeline */}
                <div className="relative mt-24">

                    {/* Center Line */}
                    <div className="
        group
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-green-100
        bg-white
        p-8
        shadow-md
        transition-all
        duration-300
        hover:-translate-y-3
        hover:border-green-300
        hover:shadow-[0_25px_70px_rgba(34,197,94,.15)]
    ">

                        <div className="space-y-24">

                            {journey.map((item, index) => {
                                const Icon = item.icon;
                                const isLeft = index % 2 === 0;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.08 }}
                                        viewport={{ once: true }}
                                        className={`relative flex flex-col items-centermd:flex-row ${isLeft ? "md:flex-row" : "md:flex-row-reverse"
                                            } items-center`}
                                    >
                                        {/* Content */}
                                        <div className="w-full md:w-1/2 md:px-12">

                                            <div className="rounded-3xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                                                <div className="flex items-center gap-4">
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
        group-hover:rotate-6
        group-hover:scale-110
    "
                                                    >
                                                        <Icon size={28} />
                                                    </div>

                                                    <div>
                                                        <span className="inline-flex rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                                            {item.year}
                                                        </span>

                                                        <h3 className="mt-4 text-2xl font-bold text-slate-900">
                                                            {item.title}
                                                        </h3>

                                                        <p className="mt-2 text-sm font-medium text-green-600">
                                                            {item.subtitle}
                                                        </p>
                                                    </div>
                                                </div>

                                                <p className="mt-6 leading-8 text-slate-600">
                                                    {item.description}
                                                </p>

                                            </div>

                                        </div>

                                        {/* Timeline Dot */}
                                        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2">
                                            <div className="h-4 w-4 rounded-full bg-indigo-600 ring-4 ring-white shadow-md"></div>
                                        </div>

                                    </motion.div>
                                );
                            })}

                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default MyJourney;