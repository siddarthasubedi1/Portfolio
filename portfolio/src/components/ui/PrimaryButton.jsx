import { motion } from "framer-motion";

const PrimaryButton = ({
    children,
    href,
    onClick,
    icon,
    className = "",
}) => {
    const baseStyle =
        "group inline-flex items-center justify-between gap-6 rounded-full bg-gradient-to-r from-indigo-600 to-blue-600 px-10 py-4 text-base font-semibold text-white shadow-[0_15px_40px_rgba(79,70,229,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(79,70,229,0.45)]";

    const content = (
        <>
            <span>{children}</span>
            {icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-indigo-600 shadow-sm transition-transform duration-300 group-hover:translate-x-1">
                    {icon}
                </span>
            )}
        </>
    );

    if (href) {
        return (
            <a href={href} className={`${baseStyle} ${className}`}>
                {content}
            </a>
        );
    }

    return (
        <motion.button
            whileTap={{ scale: 0.96 }}
            onClick={onClick}
            className={`${baseStyle} ${className}`}
        >
            {content}
        </motion.button>
    );
};

export default PrimaryButton;