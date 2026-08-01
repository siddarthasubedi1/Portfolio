import { motion } from "framer-motion";
import {
    Code2,
    Database,
    Globe,
    ShieldCheck,
} from "lucide-react";

import profile from "../constants/profile";
import heroData from "../constants/heroData";

const floatingIcons = [
    {
        icon: Code2,
        className: "-left-6 top-8",
        bg: "bg-indigo-600",
    },
    {
        icon: Database,
        className: "-right-6 top-24",
        bg: "bg-sky-600",
    },
    {
        icon: Globe,
        className: "left-8 -bottom-5",
        bg: "bg-emerald-600",
    },
    {
        icon: ShieldCheck,
        className: "right-10 bottom-2",
        bg: "bg-purple-600",
    },
];

const HeroImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex items-center justify-center"
        >
            {/* Background Glow */}

            <div className="absolute h-[420px] w-[420px] rounded-full bg-indigo-500/20 blur-3xl" />

            {/* Animated Rings */}

            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    repeat: Infinity,
                    duration: 35,
                    ease: "linear",
                }}
                className="absolute h-[370px] w-[370px] rounded-full border border-indigo-200"
            />

            <motion.div
                animate={{ rotate: -360 }}
                transition={{
                    repeat: Infinity,
                    duration: 25,
                    ease: "linear",
                }}
                className="absolute h-[430px] w-[430px] rounded-full border border-sky-200"
            />

            {/* Profile Card */}

            <div className="relative z-10 overflow-hidden rounded-[40px] border border-slate-200 bg-white p-5 shadow-2xl">
                <img
                    src={profile.image}
                    alt={profile.name}
                    className="h-[450px] w-[340px] rounded-[30px] object-cover"
                />
            </div>

            {/* Floating Icons */}

            {floatingIcons.map((item, index) => {
                const Icon = item.icon;

                return (
                    <motion.div
                        key={index}
                        animate={{
                            y: [0, -12, 0],
                        }}
                        transition={{
                            repeat: Infinity,
                            duration: 3 + index,
                        }}
                        className={`absolute ${item.className}`}
                    >
                        <div
                            className={`rounded-2xl p-4 text-white shadow-xl ${item.bg}`}
                        >
                            <Icon size={26} />
                        </div>
                    </motion.div>
                );
            })}

            {/* Experience Badge */}

            <motion.div
                animate={{
                    y: [0, -10, 0],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 4,
                }}
                className="absolute -bottom-6 right-6 rounded-3xl bg-white px-8 py-5 shadow-xl"
            >
                <p className="text-3xl font-black text-indigo-600">
                    10+
                </p>

                <p className="text-sm text-slate-500">
                    Projects Built
                </p>
            </motion.div>
        </motion.div>
    );
};

export default HeroImage;