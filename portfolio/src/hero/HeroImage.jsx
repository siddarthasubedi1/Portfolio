import { motion } from "framer-motion";
import profile from "../constants/profile";

const HeroImage = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center"
        >
            {/* Large Glow */}
            <div className="absolute h-[550px] w-[550px] rounded-full bg-indigo-200/40 blur-3xl"></div>

            {/* Main Image */}
            <motion.img
                src={profile.image}
                alt={profile.name}
                className="relative z-10 w-[520px] rounded-3xl shadow-[0_60px_150px_rgba(79,70,229,0.35)]"
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
            />

            {/* Floating Stats */}
            <div className="absolute -left-16 top-20 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-3xl font-black text-indigo-600">10+</p>
                <p className="text-2xl text-black-100">Projects</p>
            </div>

            <div className="absolute -right-16 top-40 rounded-2xl bg-white px-5 py-4 shadow-xl">
                <p className="text-3xl font-black text-green-500">2+</p>
                <p className="text-2xl text-black-100">Years Learning</p>
            </div>

            <div className="absolute left-20 -bottom-15 rounded-2xl bg-white px-5 py-4 shadow-xl mt-10">
                <p className="text-3xl font-black text-red-500">15+</p>
                <p className="text-2xl text-black-100">Technologies</p>
            </div>
        </motion.div>
    );
};

export default HeroImage;