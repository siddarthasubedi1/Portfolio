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
                    className="
  fixed bottom-8 right-8
  flex h-14 w-14 items-center justify-center
  rounded-full
  bg-gradient-to-r from-indigo-600 to-purple-600
  text-white
  shadow-[0_15px_40px_rgba(79,70,229,0.35)]
  backdrop-blur-md
  transition-all duration-300 ease-out
  hover:-translate-y-2
  hover:shadow-[0_25px_60px_rgba(79,70,229,0.45)]
  active:scale-95
"
                    aria-label="Scroll to top"
                >
                    <ChevronUp size={22} />
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollTop;