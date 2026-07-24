// src/components/ui/SectionHeading.jsx

import { motion } from "framer-motion";

function SectionHeading({ title, subtitle }) {
    return (
        <motion.div
            initial={{
                opacity: 0,
                y: 20,
            }}
            whileInView={{
                opacity: 1,
                y: 0,
            }}
            viewport={{
                once: true,
            }}
            transition={{
                duration: 0.5,
            }}
            className="mb-16 text-center"
        >
            <h2
                className="
        text-4xl
        md:text-5xl
        font-bold
        "
            >
                {title}
            </h2>

            <p
                className="
        mt-5
        text-gray-600
        dark:text-gray-400
        "
            >
                {subtitle}
            </p>
        </motion.div>
    );
}

export default SectionHeading;