import { useEffect, useState } from "react";

const ScrollProgress = () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;

            const height =
                document.documentElement.scrollHeight -
                document.documentElement.clientHeight;

            const percentage =
                height > 0 ? (scrollTop / height) * 100 : 0;

            setProgress(percentage);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll);

        return () =>
            window.removeEventListener(
                "scroll",
                handleScroll
            );
    }, []);

    return (
        <div className="fixed left-0 top-0 z-[999] h-1 w-full bg-transparent">
            <div
                className="h-full bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 transition-all duration-150"
                style={{
                    width: `${progress}%`,
                }}
            />
        </div>
    );
};

export default ScrollProgress;