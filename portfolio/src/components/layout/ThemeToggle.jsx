import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="rounded-full border border-slate-300 bg-white p-3 shadow-lg transition hover:scale-110 dark:border-slate-700 dark:bg-slate-900"
            aria-label="Toggle theme"
        >
            {theme === "dark" ? (
                <Sun size={20} />
            ) : (
                <Moon size={20} />
            )}
        </button>
    );
};

export default ThemeToggle;