import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { projects } from "../../constants/projectData";

const FeaturedProject = () => {
    const featuredProject = projects[0];
    const sectionRef = useRef(null);

    if (!featuredProject) return null;

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"],
    });

    // ✅ Reduced parallax intensity (better performance)
    const imageY = useTransform(scrollYProgress, [0, 1], [20, -20]);
    const contentY = useTransform(scrollYProgress, [0, 1], [10, -10]);

    return (
        <section
            ref={sectionRef}
            id="featured-project"
            className="relative overflow-hidden py-32 lg:py-40 mb-20 "
        >
            <div className="container-custom relative z-1 ">

                {/* ================= Header ================= */}

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: .6 }}
                    className="mx-auto max-w-4xl text-center"
                >

                    <span className="inline-flex rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold text-green-700">
                        Featured Project
                    </span>

                    <h2 className="mt-8 text-4xl font-black text-slate-900 md:text-6xl">

                        {featuredProject.title}

                    </h2>

                    <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600 ">

                        {featuredProject.description}

                    </p>

                </motion.div>

                {/* Layout */}
                <div className="mt-24 grid items-center gap-20 lg:grid-cols-[1.1fr_.9fr]">
                    {/* ✅ Optimized Image */}
                    <motion.div style={{ y: imageY }} className="relative">

                        <div
                            className="
        group
        relative
        overflow-hidden
        rounded-[36px]
        border
        border-green-100
        bg-white
        p-4
        shadow-[0_25px_70px_rgba(34,197,94,.10)]
    "
                        >

                            <img
                                src={featuredProject.image}
                                alt={featuredProject.title}
                                loading="lazy"
                                decoding="async"
                                className="
        aspect-[16/10]
        w-full
        rounded-[24px]
        object-cover
        transition-all
        duration-700
        group-hover:scale-105
    "
                            />

                        </div>
                    </motion.div>

                    {/* ✅ Content */}
                    <motion.div
                        style={{ y: contentY }}
                        className="
        rounded-[36px]
        border
        border-green-100
        bg-white
        p-10
        shadow-[0_25px_70px_rgba(34,197,94,.08)]
    "
                    >
                        {featuredProject.problem && (
                            <div className="rounded-3xl border border-red-100 bg-red-50 p-7">
                                <h3 className="text-sm font-bold uppercase tracking-[4px] text-indigo-600">
                                    Problem
                                </h3>
                                <p className="mt-4 text-slate-600 leading-relaxed">
                                    {featuredProject.problem}
                                </p>
                            </div>
                        )}

                        {featuredProject.solution && (
                            <div className="mt-8 rounded-3xl border border-green-100 bg-green-50 p-7">
                                <h3 className="text-sm font-bold uppercase tracking-[4px] text-green-700">
                                    Solution
                                </h3>
                                <p className="mt-4 leading-8 text-slate-600">
                                    {featuredProject.solution}
                                </p>
                            </div>
                        )}

                        {/* Buttons */}
                        <div className="mt-12 flex flex-wrap gap-5">

                            {featuredProject.tech && (
                                <div className="mt-10">

                                    <h3 className="text-lg font-bold text-slate-900">
                                        Technologies Used
                                    </h3>

                                    <div className="mt-5 flex flex-wrap gap-3">

                                        {featuredProject.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="
                        rounded-full
                        border
                        border-green-200
                        bg-green-50
                        px-4
                        py-2
                        text-sm
                        font-semibold
                        text-green-700
                    "
                                            >
                                                {tech}
                                            </span>
                                        ))}

                                    </div>

                                </div>
                            )}

                            {featuredProject.github && (
                                <a
                                    href={featuredProject.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="
                                    inline-flex
                                    items-center
                                    gap-3
                                    rounded-full
                                    border
                                    border-green-200
                                    bg-white
                                    px-8
                                    py-4
                                    font-semibold
                                    text-slate-700
                                    transition-all
                                    duration-300
                                    hover:border-green-500
                                    hover:text-green-600
                                    hover:shadow-lg
                                    "
                                >
                                    <FaGithub size={16} />
                                    GitHub
                                </a>
                            )}

                            <Link
                                to={`/project/${featuredProject.slug}`}
                                className="
                                inline-flex
                                items-center
                                gap-3
                                rounded-full
                                border
                                border-green-200
                                bg-white
                                px-8
                                py-4
                                font-semibold
                                text-slate-700
                                transition-all
                                duration-300
                                hover:border-green-500
                                hover:text-green-600
                                hover:shadow-lg
                                "
                            >
                                View Details
                                <ArrowRight size={16} />
                            </Link>

                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
};

export default FeaturedProject;