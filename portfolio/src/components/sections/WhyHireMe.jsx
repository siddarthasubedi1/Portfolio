import { motion } from "framer-motion";
import {
    Code2,
    Database,
    LayoutDashboard,
    Brain,
    Users,
    Rocket,
} from "lucide-react";


const qualities = [
    {
        icon: <Code2 size={24} />,
        title: "Full Stack Development",
        description:
            "Build responsive web applications using React, Django REST Framework and PostgreSQL.",
    },
    {
        icon: <Database size={24} />,
        title: "REST API Development",
        description:
            "Develop secure and scalable REST APIs with authentication and CRUD operations.",
    },
    {
        icon: <LayoutDashboard size={24} />,
        title: "Modern UI",
        description:
            "Create responsive and user-friendly interfaces with Tailwind CSS and React.",
    },
    {
        icon: <Brain size={24} />,
        title: "Problem Solving",
        description:
            "Enjoy learning new technologies and solving real-world programming challenges.",
    },
    {
        icon: <Users size={24} />,
        title: "Team Player",
        description:
            "Comfortable collaborating, learning from feedback, and working in team environments.",
    },
    {
        icon: <Rocket size={24} />,
        title: "Career Focus",
        description:
            "Seeking internship opportunities to gain industry experience and continue growing as a developer.",
    },
];



const WhyHireMe = () => {
    return (
        <section
            id="why-hire-me"
            className="relative overflow-hidden py-32 lg:py-40"
        >
            <div className="mx-auto max-w-7xl px-6">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto mb-20 max-w-4xl text-center"
                >

                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">

                        Why Hire Me

                    </span>

                    <h2 className="mt-8 text-4xl font-black text-slate-900 md:text-6xl">

                        More Than Just
                        <span className="block bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent mb-3">
                            Writing Code
                        </span>

                    </h2>

                    <p className="mx-auto mt-3 max-w-3xl text-lg leading-8 text-slate-600 ">

                        I enjoy building complete web applications, solving real-world
                        problems, collaborating with teams, and continuously improving
                        my skills to deliver high-quality software.

                    </p>

                </motion.div>

                <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3 ">
                    {qualities.map((item, index) => (
                        <motion.div
                            key={item.title}
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
                            flex
                            h-full
                            flex-col
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

                            {/* Hover Background */}

                            <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                            <div className="relative z-10">

                                {/* Icon */}

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
                                    {item.icon}
                                </div>

                                {/* Title */}

                                <h3 className="mt-8 text-xl font-bold text-slate-900">
                                    {item.title}
                                </h3>
                                <span className="mt-4 inline-flex w-fit rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                                    Professional Skill
                                </span>

                                {/* Description */}

                                <p className="mt-5 flex-1 leading-8 text-slate-600">
                                    {item.description}
                                </p>

                            </div>

                        </motion.div>

                    ))}
                </div>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mt-24 rounded-[36px] border border-green-100 bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-16 text-center text-white shadow-xl"
                >

                    <h3 className="text-3xl font-black">

                        Ready to Build Real-World Solutions

                    </h3>

                    <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-green-100">

                        I'm actively looking for internship opportunities where I can
                        contribute to meaningful projects, collaborate with experienced
                        developers, and continue growing as a Full Stack Developer.

                    </p>

                    <a
                        href="#contact"
                        className="mt-10 inline-flex rounded-full bg-white px-8 py-4 font-semibold text-green-700 transition hover:-translate-y-1 hover:shadow-xl"
                    >
                        Let's Connect
                    </a>

                </motion.div>
            </div>
        </section>
    );
};

export default WhyHireMe;