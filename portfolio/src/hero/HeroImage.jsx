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
            {/* Glow */}
            <div className="absolute h-[500px] w-[500px] rounded-full bg-indigo-500/10 blur-3xl" />

            <motion.img
                src={profile.image}
                alt={profile.name}
                className="
          relative
          z-10
          w-[480px]
          h-auto
          object-cover
          object-top
          rounded-3xl
          shadow-[0_60px_150px_rgba(79,70,229,0.3)]
        "
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 5 }}
            />
        </motion.div>
    );
};

export default HeroImage;