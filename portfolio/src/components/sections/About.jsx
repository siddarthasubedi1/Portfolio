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
} from "lucide-react";

const cards = [
    {
        icon: GraduationCap,
        title: "Education",
        description:
            "Currently pursuing BSc (Hons) Computer System Engineering at ISMT College, with a focus on software engineering, system design, and modern web technologies.",
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
        label: "Projects Completed",
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
        <section
            id="about"
            className="relative overflow-hidden py-32 lg:py-40"
        >
            {/* Background Glow */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute left-0 top-24 h-72 w-72 rounded-full bg-emerald-200/20 blur-3xl"></div>
                <div className="absolute right-0 bottom-24 h-72 w-72 rounded-full bg-sky-200/20 blur-3xl"></div>
            </div>

            <div className="container-custom relative z-10">

                {/* ================= Section Header ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="mx-auto max-w-5xl text-center"
                >

                    <span className="inline-flex items-center rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
                        About Me
                    </span>

                    <h2 className="mt-8 text-4xl font-black leading-tight text-slate-900 md:text-6xl">
                        Building Digital Products
                        <span className="mt-3 block bg-gradient-to-r from-green-600 via-emerald-500 to-teal-500 bg-clip-text text-transparent">
                            That Solve Real Problems
                        </span>
                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
                        I'm a Computer System Engineering student passionate about Full Stack
                        Development. I enjoy designing modern user experiences, building secure
                        backend systems, and creating scalable applications that deliver real
                        business value.
                    </p>

                </motion.div>

                {/* Mission Card */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-24"
                >
                    <div
                        className="
                    group
                    relative
                    overflow-hidden
                    rounded-[40px]
                    border
                    border-green-100
                    bg-white/90
                    p-8
                    shadow-lg
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:shadow-[0_30px_80px_rgba(34,197,94,.15)]
                    md:p-14
                    "
                    >

                        <div className="grid items-center gap-20 lg:grid-cols-[1.2fr_.8fr]">

                            {/* Left */}
                            <div>
                                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-[0_20px_40px_rgba(34,197,94,.35)]">
                                    <Laptop size={36} />
                                </div>

                                <h3 className="mt-10 text-3xl font-bold text-slate-900">
                                    My Development Journey
                                </h3>

                                <p className="mt-8 max-w-xl text-lg leading-9 text-slate-600">
                                    My objective is to become a skilled Full Stack Developer capable of building
                                    high-quality web applications from frontend to backend. I continuously improve
                                    my technical skills by working on real-world projects, learning modern
                                    frameworks, and following industry best practices.

                                </p>

                                <div
                                    className="
                                mt-10
                                inline-flex
                                items-center
                                rounded-full
                                border
                                border-green-200
                                bg-green-50
                                px-6
                                py-3
                                font-semibold
                                text-green-700
                                ">
                                    🚀 Available for Full Stack Developer Internship
                                </div>
                            </div>

                            {/* Right - Stats */}
                            <div className="grid gap-6 sm:grid-cols-3">
                                {stats.map((item) => {
                                    const Icon = item.icon;

                                    return (
                                        <motion.div
                                            key={item.label}
                                            whileHover={{
                                                y: -8,
                                                scale: 1.03,
                                            }}
                                            transition={{
                                                duration: 0.3,
                                            }}
                                            className="
                                            group
                                            relative
                                            overflow-hidden
                                            rounded-[30px]
                                            border
                                            border-green-100
                                            bg-white
                                            p-8
                                            text-center
                                            shadow-md
                                            transition-all
                                            duration-300
                                            hover:border-green-300
                                            hover:shadow-[0_20px_60px_rgba(34,197,94,.18)]
                                        "
                                        >

                                            {/* Background Glow */}

                                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                                            <div className="relative z-10">

                                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white shadow-lg">

                                                    <Icon size={26} />

                                                </div>

                                                <h3 className="mt-6 text-4xl font-black text-slate-900">
                                                    {item.number}
                                                </h3>

                                                <p className="mt-3 text-sm font-semibold uppercase tracking-wider text-slate-500">
                                                    {item.label}
                                                </p>

                                            </div>

                                        </motion.div>
                                    );
                                })}
                            </div>

                        </div>
                    </div>
                </motion.div>

                {/* ================= Information Cards ================= */}

                <div className="mt-32 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

                    {cards.map((card, index) => {

                        const Icon = card.icon;

                        return (

                            <motion.div
                                key={card.title}
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

                                {/* Background */}

                                <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                                {/* Icon */}

                                <div className="relative z-10">

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

                                    <h3 className="mt-8 text-xl font-bold text-slate-900">
                                        {card.title}
                                    </h3>

                                    <p className="mt-5 leading-8 text-slate-600">
                                        {card.description}
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
                    className="mt-24 text-center"
                >

                    <h3 className="text-3xl font-black text-slate-900">

                        Let's Build Something Amazing Together

                    </h3>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">

                        I'm always excited to work on meaningful projects,
                        learn from experienced developers, and contribute
                        to building high-quality digital products.

                    </p>

                    <div className="mt-10 flex flex-wrap justify-center gap-5">

                        <a
                            href="#projects"
                            className="
                rounded-full
                bg-gradient-to-r
                from-green-600
                to-emerald-600
                px-8
                py-4
                font-semibold
                text-white
                transition
                hover:-translate-y-1
                hover:shadow-xl
            "
                        >
                            View My Projects
                        </a>

                        <a
                            href="#contact"
                            className="
                rounded-full
                border
                border-slate-300
                px-8
                py-4
                font-semibold
                text-slate-700
                transition
                hover:border-green-500
                hover:text-green-600
            "
                        >
                            Contact Me
                        </a>

                    </div>

                </motion.div>

            </div>
        </section>
    );
}