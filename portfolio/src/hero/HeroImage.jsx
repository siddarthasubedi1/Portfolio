import { motion } from "framer-motion";
import profile from "../constants/profile";

const HeroImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center"
        >
            {/* Glow Background */}
            <div className="absolute h-80 w-80 rounded-full bg-indigo-500/10 blur-3xl" />

            {/* Image Card */}
            <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl transition hover:-translate-y-2 hover:shadow-[0_35px_90px_rgba(79,70,229,0.2)]">
                <div className="overflow-hidden rounded-2xl">
                    <img
                        src={profile.image}
                        alt={profile.name}
                        className="h-[420px] w-full object-cover object-top"
                    />
                </div>
            </div>
        </motion.div>
    );
};

export default HeroImage;