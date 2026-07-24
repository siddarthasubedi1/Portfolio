import { useState } from "react";

import { Menu, X } from "lucide-react";

import ThemeToggle from "../ui/ThemeToggle";

function MobileNavbar() {
    const [open, setOpen] = useState(false);

    return (
        <div className="md:hidden">
            <button
                onClick={() => setOpen(!open)}
                className="cursor-pointer"
            >
                {open ? <X /> : <Menu />}
            </button>

            {open && (
                <div
                    className="
          absolute
          top-20
          left-0
          w-full
          border-b
          bg-white
          dark:bg-black
          dark:border-gray-800
          "
                >
                    <div
                        className="
            flex
            flex-col
            gap-5
            p-6
            "
                    >
                        <a href="#about">About</a>

                        <a href="#skills">Skills</a>

                        <a href="#projects">Projects</a>

                        <a href="#contact">Contact</a>

                        <ThemeToggle />
                    </div>
                </div>
            )}
        </div>
    );
}

export default MobileNavbar;