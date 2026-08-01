import { motion } from "framer-motion";
import {
    GraduationCap,
    Briefcase,
    Code2,
    Trophy,
} from "lucide-react";

const journey = [
    {
        year: "2022",
        icon: GraduationCap,
        title: "Higher Secondary Education",
        subtitle: "Kalika Secondary School",
        description:
            "Completed Higher Secondary Education in the Science stream, developing analytical thinking and a strong foundation in mathematics and computer science.",
    },
    {
        year: "2023 - Present",
        icon: GraduationCap,
        title: "BSc (Hons) Computer System Engineering",
        subtitle: "ISMT College, Pokhara",
        description:
            "Currently pursuing a bachelor's degree while focusing on software engineering, databases, networking, and full-stack web development.",
    },
    {
        year: "2024",
        icon: Code2,
        title: "Started Full Stack Development",
        subtitle: "React + Django REST Framework",
        description:
            "Built multiple full-stack applications using React, Django REST Framework, PostgreSQL, JWT authentication, REST APIs, and responsive UI design.",
    },
    {
        year: "2024 - Present",
        icon: Briefcase,
        title: "Personal Projects",
        subtitle: "Portfolio & Ecommerce",
        description:
            "Developed portfolio websites, authentication systems, and e-commerce applications to strengthen backend architecture and frontend development skills.",
    },
    {
        year: "Current Goal",
        icon: Trophy,
        title: "Seeking Internship",
        subtitle: "Full Stack Developer",
        description:
            "Actively looking for internship opportunities where I can contribute, learn from experienced developers, and build scalable web applications.",
    },
];

const MyJourney = () => {
    return (
        <section
            id="journey"
            className="bg-white py-28"
        >
            <div className="mx-auto max-w-6xl px-6">
                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <p className="font-bold uppercase tracking-[6px] text-indigo-600">
                        MY JOURNEY
                    </p>

                    <h2 className="mt-6 text-5xl font-extrabold text-slate-900 md:text-6xl">
                        Learning Through Experience
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-slate-600">
                        Every project, course and challenge has helped shape my journey
                        toward becoming a Full Stack Developer.
                    </p>
                </motion.div>

                {/* Timeline */}

                <div className="relative mt-24">

                    {/* Center Line */}

                    <div className="absolute left-6 top-0 h-full w-1 rounded bg-indigo-100 md:left-1/2 md:-translate-x-1/2"></div>

                    <div className="space-y-16">
                        {journey.map((item, index) => {
                            const Icon = item.icon;

                            const left = index % 2 === 0;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{
                                        opacity: 0,
                                        y: 50,
                                    }}
                                    whileInView={{
                                        opacity: 1,
                                        y: 0,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                    className={`relative flex ${left
                                        ? "md:justify-start"
                                        : "md:justify-end"
                                        }`}
                                >
                                    {/* Card */}

                                    <div className="ml-16 w-full md:ml-0 md:w-[45%]">
                                        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl">
                                            <div className="flex items-center gap-4">
                                                <div className="rounded-2xl bg-indigo-100 p-3">
                                                    <Icon
                                                        size={28}
                                                        className="text-indigo-600"
                                                    />
                                                </div>

                                                <div>
                                                    <p className="font-bold text-indigo-600">
                                                        {item.year}
                                                    </p>

                                                    <h3 className="text-2xl font-bold text-slate-900">
                                                        {item.title}
                                                    </h3>

                                                    <p className="text-slate-500">
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

                                    <div className="absolute left-6 top-10 h-5 w-5 -translate-x-1/2 rounded-full border-4 border-white bg-indigo-600 md:left-1/2"></div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyJourney;