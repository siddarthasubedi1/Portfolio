import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollTop = () => {
    const [show, setShow] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShow(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    const scrollTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <button
            onClick={scrollTop}
            className={`fixed bottom-8 right-8 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-violet-600 text-white shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-violet-700 ${show
                ? "translate-y-0 opacity-100"
                : "pointer-events-none translate-y-10 opacity-0"
                }`}
            aria-label="Scroll to top"
        >
            <ChevronUp size={24} />
        </button>
    );
};

export default ScrollTop;