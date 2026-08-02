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
            "Completed Higher Secondary Education in the Science stream, building strong analytical thinking and fundamentals in computer science.",
    },
    {
        year: "2023 - Present",
        icon: GraduationCap,
        title: "BSc (Hons) Computer System Engineering",
        subtitle: "ISMT College, Pokhara",
        description:
            "Focused on software engineering, databases, networking and full stack web development.",
    },
    {
        year: "2024",
        icon: Code2,
        title: "Started Full Stack Development",
        subtitle: "React + Django REST Framework",
        description:
            "Built real-world full stack applications using modern backend architecture and responsive frontend systems.",
    },
    {
        year: "2024 - Present",
        icon: Briefcase,
        title: "Personal Projects",
        subtitle: "Portfolio & Ecommerce",
        description:
            "Developed scalable authentication systems and e-commerce applications with clean architecture principles.",
    },
    {
        year: "Current Goal",
        icon: Trophy,
        title: "Seeking Internship",
        subtitle: "Full Stack Developer",
        description:
            "Actively seeking opportunities to contribute, learn and grow as a professional full stack developer.",
    },
];

const MyJourney = () => {
    return (
        <section id="journey" className="section bg-white">            <div className="container-custom">

            {/* Header */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-center"
            >
                <p className="text-sm font-bold uppercase tracking-[6px] text-indigo-600">
                    MY JOURNEY
                </p>

                <h2 className="heading-lg mt-6">
                    Learning Through Experience
                </h2>

                <p className="mt-6 text-body max-w-3xl mx-auto">                    A structured progression of learning, building and growing toward becoming a Full Stack Developer.
                </p>
            </motion.div>

            {/* Timeline */}
            <div className="relative mx-auto mt-20 max-w-5xl">

                {/* Stronger Center Line */}
                <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-indigo-500 via-indigo-400 to-transparent md:left-1/2 md:-translate-x-1/2"></div>

                <div className="space-y-12">
                    {journey.map((item, index) => {
                        const Icon = item.icon;
                        const isLeft = index % 2 === 0;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"
                                    }`}
                            >
                                {/* Card */}
                                <div className="ml-16 w-full md:ml-0 md:w-1/2 md:px-10">
                                    <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-indigo-200">

                                        <div className="flex items-center gap-4">
                                            <div className="rounded-xl bg-indigo-100 p-3 transition group-hover:bg-indigo-200">
                                                <Icon size={22} className="text-indigo-600" />
                                            </div>

                                            <div>
                                                <p className="text-sm font-semibold text-indigo-600">
                                                    {item.year}
                                                </p>

                                                <h3 className="text-lg font-bold text-slate-900">
                                                    {item.title}
                                                </h3>

                                                <p className="text-sm text-slate-500">
                                                    {item.subtitle}
                                                </p>
                                            </div>
                                        </div>

                                        <p className="mt-5 text-slate-600 leading-relaxed">
                                            {item.description}
                                        </p>

                                    </div>
                                </div>

                                {/* Modern Timeline Dot */}
                                <div className="absolute left-6 top-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2">
                                    <div className="h-6 w-6 rounded-full bg-indigo-600 ring-4 ring-white shadow-md"></div>
                                </div>

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