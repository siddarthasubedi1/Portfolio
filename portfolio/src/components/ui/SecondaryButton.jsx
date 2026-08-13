const SecondaryButton = ({
    children,
    href,
    icon,
    className = "",
    download,
    target,
    rel,
}) => {
    const baseStyle = `
        group
        inline-flex
        items-center
        justify-center
        gap-3
        rounded-xl
        border
        border-slate-200
        bg-white
        px-5
        py-3
        text-sm
        font-bold
        text-slate-700
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-0.5
        hover:border-green-300
        hover:bg-green-50
        hover:text-green-700
        hover:shadow-[0_10px_24px_rgba(22,163,74,0.10)]
    `;

    return (
        <a
            href={href}
            download={download}
            target={target}
            rel={rel}
            className={`${baseStyle} ${className}`}
        >
            {icon && (
                <span
                    className="
                        flex
                        items-center
                        justify-center
                        transition-transform
                        duration-300
                        group-hover:scale-110
                    "
                >
                    {icon}
                </span>
            )}

            <span>{children}</span>
        </a>
    );
};

export default SecondaryButton;