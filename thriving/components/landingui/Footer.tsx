import React from "react";

export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-background-dark border-t border-border-light dark:border-gray-800 pt-16 pb-8">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
                    <div className="flex items-center gap-3">
                        <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
                            <span className="material-symbols-outlined text-sm">
                                volunteer_activism
                            </span>
                        </div>
                        <span className="text-xl font-bold text-text-main dark:text-white">
                            Thriving Lives
                        </span>
                    </div>
                    <div className="flex gap-8">
                        <a
                            className="text-text-secondary hover:text-primary dark:text-gray-400 transition-colors"
                            href="#"
                        >
                            About
                        </a>
                        <a
                            className="text-text-secondary hover:text-primary dark:text-gray-400 transition-colors"
                            href="#"
                        >
                            Programs
                        </a>
                        <a
                            className="text-text-secondary hover:text-primary dark:text-gray-400 transition-colors"
                            href="#"
                        >
                            Contact
                        </a>
                        <a
                            className="text-text-secondary hover:text-primary dark:text-gray-400 transition-colors"
                            href="#"
                        >
                            Donate
                        </a>
                    </div>
                    <div className="flex gap-4">
                        <a
                            className="text-gray-400 hover:text-primary transition-colors"
                            href="#"
                        >
                            <span className="sr-only">Twitter</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                            </svg>
                        </a>
                        <a
                            className="text-gray-400 hover:text-primary transition-colors"
                            href="#"
                        >
                            <span className="sr-only">LinkedIn</span>
                            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path>
                            </svg>
                        </a>
                    </div>
                </div>
                <div className="border-t border-border-light dark:border-gray-800 pt-8 text-center text-xs text-text-secondary dark:text-gray-500">
                    <p>© 2024 Thriving Lives Foundation Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
