import { motion, useScroll, useSpring } from "framer-motion";

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 120,
        damping: 25,
        restDelta: 0.001,
    });

    return (
        <motion.div
            style={{ scaleX }}
            className="fixed left-0 top-0 z-[9999] h-1 w-full origin-left bg-gradient-to-r from-indigo-600 via-sky-500 to-cyan-400"
        />
    );
};

export default ScrollProgress;