import { motion } from "framer-motion";

import {
    GraduationCap,
    BriefcaseBusiness,
    MapPin,
    Code2,
    Rocket,
    Laptop,
} from "lucide-react";

const cards = [
    {
        icon: <GraduationCap size={28} className="text-violet-600" />,
        title: "Education",
        description:
            "BSc (Hons) Computer System Engineering at ISMT College, Pokhara.",
    },
    {
        icon: <Code2 size={28} className="text-blue-600" />,
        title: "Full Stack Development",
        description:
            "Building scalable applications using Django REST Framework, React and PostgreSQL.",
    },
    {
        icon: <Rocket size={28} className="text-green-600" />,
        title: "Open To Work",
        description:
            "Actively seeking Full Stack Developer internship opportunities.",
    },
    {
        icon: <MapPin size={28} className="text-rose-500" />,
        title: "Location",
        description: "Pokhara, Nepal.",
    },
];

const strengths = [
    "REST API Development",
    "Responsive Web Design",
    "Authentication & Authorization",
    "Database Design",
    "Frontend Development",
    "Backend Development",
    "Problem Solving",
    "Clean & Maintainable Code",
];

const About = () => {
    return (
        <section
            id="about"
            className="overflow-hidden bg-gradient-to-b from-white to-blue-50 py-28"
        >
            <div className="mx-auto max-w-7xl px-6">
                {/* TITLE */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 40,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.7,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="text-center"
                >
                    <p className="text-sm font-bold uppercase tracking-[6px] text-violet-600">
                        ABOUT ME
                    </p>

                    <h2 className="mt-5 text-4xl font-extrabold text-slate-900 md:text-6xl">
                        Building Modern Full Stack Applications
                    </h2>

                    <p className="mx-auto mt-8 max-w-4xl text-lg leading-9 text-slate-600">
                        I'm Siddartha Raj Subedi, an aspiring Full Stack Developer
                        specializing in Django REST Framework and React. I enjoy building
                        secure, scalable and responsive web applications while continuously
                        learning modern software engineering practices and improving my
                        development skills.
                    </p>
                </motion.div>

                {/* MAIN CONTENT */}

                <div className="mt-20 grid gap-10 lg:grid-cols-2">
                    {/* LEFT SIDE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        <div className="rounded-[40px] bg-white p-10 shadow-xl">
                            <div className="flex items-center gap-4">
                                <Laptop
                                    size={35}
                                    className="rounded-2xl bg-blue-50 p-1 text-violet-600"
                                />

                                <h3 className="text-3xl font-bold text-slate-900">
                                    My Goal
                                </h3>
                            </div>

                            <p className="mt-8 text-lg leading-9 text-slate-600">
                                My goal is to become a highly skilled Full Stack Developer by
                                building impactful and user-friendly applications that solve
                                real-world problems. I am passionate about both frontend and
                                backend development and enjoy working with modern technologies
                                to create seamless user experiences.
                            </p>

                            <p className="mt-8 text-lg leading-9 text-slate-600">
                                I am currently looking for internship opportunities where I can
                                contribute my skills, collaborate with experienced developers
                                and continue growing as a software engineer.
                            </p>

                            {/* CURRENTLY LOOKING FOR */}

                            <div className="mt-10 rounded-3xl border border-violet-100 bg-violet-50 p-6">
                                <div className="flex items-center gap-3">
                                    <BriefcaseBusiness
                                        size={28}
                                        className="text-violet-600"
                                    />

                                    <h3 className="text-xl font-bold text-slate-900">
                                        Currently Looking For
                                    </h3>
                                </div>

                                <ul className="mt-6 space-y-4 text-slate-700">
                                    <li>• Full Stack Developer Internships</li>

                                    <li>• Junior Web Development Opportunities</li>

                                    <li>• Collaborative Development Projects</li>

                                    <li>• Learning and Growth Opportunities</li>
                                </ul>
                            </div>
                        </div>
                    </motion.div>

                    {/* RIGHT SIDE */}

                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 50,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="grid gap-6"
                    >
                        {cards.map((card) => (
                            <div
                                key={card.title}
                                className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
                            >
                                <div className="flex items-center gap-4">
                                    {card.icon}

                                    <h3 className="text-2xl font-bold text-slate-900">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="mt-5 leading-8 text-slate-600">
                                    {card.description}
                                </p>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* STRENGTHS */}

                <motion.div
                    initial={{
                        opacity: 0,
                        y: 50,
                    }}
                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 0.8,
                    }}
                    viewport={{
                        once: true,
                    }}
                    className="mt-24"
                >
                    <h2 className="text-center text-4xl font-extrabold text-slate-900">
                        What I Bring To The Table
                    </h2>

                    <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {strengths.map((strength) => (
                            <div
                                key={strength}
                                className="rounded-3xl bg-white p-6 text-center shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
                            >
                                <h3 className="font-semibold text-slate-700">
                                    {strength}
                                </h3>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default About;