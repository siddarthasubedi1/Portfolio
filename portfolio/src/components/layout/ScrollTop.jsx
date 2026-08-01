import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";

const ScrollTop = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setVisible(window.scrollY > 400);
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {visible && (
                <motion.button
                    initial={{
                        opacity: 0,
                        scale: 0.5,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    exit={{
                        opacity: 0,
                        scale: 0.5,
                        y: 30,
                    }}
                    transition={{
                        duration: 0.3,
                    }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-indigo-600 text-white shadow-xl transition hover:scale-110 hover:bg-indigo-700"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={26} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollTop;