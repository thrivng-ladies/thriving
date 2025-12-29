"use client";

import * as React from "react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { Menu, X, Heart, PlayCircle, Moon, Sun } from "lucide-react";

export default function Navbar() {
    const { theme, setTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="fixed top-0 z-50 w-full transition-all duration-300 bg-background-dark/80 backdrop-blur-md border-b border-white/10">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
                <div className="flex items-center gap-3">
                    <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/20">
                        <Image src="/logo.png" alt="logo" width={24} height={24} />
                    </div>
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        Thriving Lives
                    </h1>
                </div>
                <div className="hidden md:flex flex-1 justify-center gap-10">
                    <a
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        href="#"
                    >
                        Our Mission
                    </a>
                    <a
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        href="#"
                    >
                        Programs
                    </a>
                    <a
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        href="#"
                    >
                        Impact Stories
                    </a>
                    <a
                        className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
                        href="#"
                    >
                        The Hub
                    </a>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                        className="flex items-center justify-center p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
                    >
                        <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </button>
                    <button className="hidden sm:flex h-10 items-center justify-center rounded-full bg-white px-6 text-sm font-bold text-primary shadow-lg hover:bg-gray-100 transition-all hover:scale-105 active:scale-95">
                        Partner with Us
                    </button>
                    <button
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors relative h-10 w-10 flex items-center justify-center"
                        onClick={toggleMenu}
                    >
                        <Menu className={`h-6 w-6 transition-all duration-300 absolute ${isMenuOpen ? 'rotate-90 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100'}`} />
                        <X className={`h-6 w-6 transition-all duration-300 absolute ${isMenuOpen ? 'rotate-0 scale-100 opacity-100' : '-rotate-90 scale-0 opacity-0'}`} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`md:hidden fixed inset-0 z-40 bg-background-dark/95 backdrop-blur-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
                style={{ top: "80px" }} // Height of Navbar
            >
                <div className="flex flex-col items-center justify-center h-[calc(100vh-80px)] space-y-8 p-8">
                    <a
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        href="#"
                        onClick={toggleMenu}
                    >
                        Our Mission
                    </a>
                    <a
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        href="#"
                        onClick={toggleMenu}
                    >
                        Programs
                    </a>
                    <a
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        href="#"
                        onClick={toggleMenu}
                    >
                        Impact Stories
                    </a>
                    <a
                        className="text-2xl font-medium text-white hover:text-primary transition-colors"
                        href="#"
                        onClick={toggleMenu}
                    >
                        The Hub
                    </a>
                    <button className="h-12 w-full max-w-xs items-center justify-center rounded-xl bg-white text-lg font-bold text-primary shadow-lg hover:bg-gray-100 transition-all active:scale-95">
                        Partner with Us
                    </button>
                </div>
            </div>
        </nav>
    );
}
