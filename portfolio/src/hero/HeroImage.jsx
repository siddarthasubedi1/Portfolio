import { motion } from "framer-motion";
import {
    Code2,
    Briefcase,
    Trophy,
    Sparkles,
    ShieldCheck,
} from "lucide-react";

import profile from "../constants/profile";

const HeroImage = () => {
    return (
        <div className="relative flex items-center justify-center py-12">

            {/* ================= Background Glow ================= */}

            <div className="absolute h-[520px] w-[520px] rounded-full bg-green-200/30 blur-[120px]" />

            <div className="absolute h-[620px] w-[620px] rounded-full border border-green-100" />

            <div className="absolute h-[720px] w-[720px] rounded-full border border-green-50" />

            {/* ================= Main Image ================= */}

            <motion.div
                initial={{ opacity: 0, scale: .9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                    duration: .8,
                }}
                className="relative z-20"
            >
                <motion.div
                    animate={{
                        y: [0, -12, 0],
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="rounded-[40px] bg-white p-4 shadow-[0_40px_80px_rgba(34,197,94,.20)]"
                >
                    <img
                        src={profile.image}
                        alt={profile.name}
                        loading="eager"
                        decoding="async"
                        className="h-[380px] w-[300px] rounded-[30px] object-cover sm:h-[520px] sm:w-[400px] lg:h-[640px] lg:w-[500px]"
                    />
                </motion.div>
            </motion.div>

            {/* ================= Card 1 ================= */}

            <motion.div
                initial={{ opacity: 0, x: -60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .3 }}
                className="absolute left-0 top-12 hidden rounded-3xl border border-green-100 bg-white p-5 shadow-xl lg:block"
            >
                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-green-100 p-3">
                        <Code2
                            className="text-green-600"
                            size={26}
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">
                            15+
                        </h3>

                        <p className="text-sm text-slate-500">
                            Technologies
                        </p>
                    </div>

                </div>
            </motion.div>

            {/* ================= Card 2 ================= */}

            <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: .5 }}
                className="absolute right-0 top-36 hidden rounded-3xl border border-green-100 bg-white p-5 shadow-xl lg:block"
            >
                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-blue-100 p-3">
                        <Briefcase
                            className="text-blue-600"
                            size={26}
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">
                            10+
                        </h3>

                        <p className="text-sm text-slate-500">
                            Projects
                        </p>
                    </div>

                </div>
            </motion.div>

            {/* ================= Card 3 ================= */}

            <motion.div
                initial={{ opacity: 0, y: 60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .7 }}
                className="absolute bottom-16 left-10 hidden rounded-3xl border border-green-100 bg-white p-5 shadow-xl lg:block"
            >
                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-orange-100 p-3">
                        <Trophy
                            className="text-orange-600"
                            size={26}
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">
                            Internship
                        </h3>

                        <p className="text-sm text-slate-500">
                            Ready
                        </p>
                    </div>

                </div>
            </motion.div>

            {/* ================= Card 4 ================= */}

            <motion.div
                initial={{ opacity: 0, y: -60 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: .9 }}
                className="absolute bottom-20 right-8 hidden rounded-3xl border border-green-100 bg-white p-5 shadow-xl lg:block"
            >
                <div className="flex items-center gap-4">

                    <div className="rounded-2xl bg-emerald-100 p-3">
                        <ShieldCheck
                            className="text-emerald-600"
                            size={26}
                        />
                    </div>

                    <div>
                        <h3 className="text-xl font-bold">
                            Clean Code
                        </h3>

                        <p className="text-sm text-slate-500">
                            Best Practices
                        </p>
                    </div>

                </div>
            </motion.div>

            {/* ================= Floating Badge ================= */}

            <motion.div
                animate={{
                    y: [0, -8, 0],
                    rotate: [0, 8, 0],
                }}
                transition={{
                    duration: 5,
                    repeat: Infinity,
                }}
                className="absolute right-12 top-10 hidden rounded-full bg-gradient-to-r from-green-500 to-emerald-600 p-5 text-white shadow-xl lg:flex"
            >
                <Sparkles size={24} />
            </motion.div>

            {/* ================= Decorative Dots ================= */}

            <div className="absolute left-16 top-28 h-5 w-5 rounded-full bg-green-400" />

            <div className="absolute right-24 bottom-24 h-4 w-4 rounded-full bg-blue-400" />

            <div className="absolute left-28 bottom-16 h-3 w-3 rounded-full bg-emerald-500" />

        </div>
    );
};

export default HeroImage;