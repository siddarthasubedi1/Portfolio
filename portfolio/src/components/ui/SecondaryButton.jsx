import { motion } from "framer-motion";

const SecondaryButton = ({
    children,
    href,
    icon,
    className = "",
}) => {
    const baseStyle =
        "group inline-flex items-center justify-between gap-6 rounded-full border border-slate-300 bg-white px-10 py-4 text-base font-semibold text-slate-700 shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500 hover:text-indigo-600 hover:shadow-xl";

    const content = (
        <>
            <span>{children}</span>
            {icon && (
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition-all duration-300 group-hover:bg-indigo-600 group-hover:text-white">
                    {icon}
                </span>
            )}
        </>
    );

    return (
        <a href={href} className={`${baseStyle} ${className}`}>
            {content}
        </a>
    );
};

export default SecondaryButton;