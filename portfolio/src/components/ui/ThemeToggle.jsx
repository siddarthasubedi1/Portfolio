import { useTheme } from "../../context/ThemeContext";

function ThemeToggle() {
    const { theme, toggleTheme } =
        useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="
      cursor-pointer
      px-4
      py-2
      rounded-xl
      border
      dark:border-gray-700
      "
        >
            {theme === "dark"
                ? "Light"
                : "Dark"}
        </button>
    );
}

export default ThemeToggle;