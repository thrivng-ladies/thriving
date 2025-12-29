"use client";
import { Icon } from "@iconify/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function Newsletter() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsOpen(true);
        }, 1000); // Show after 1 second
        return () => clearTimeout(timer);
    }, []);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="relative w-full max-w-5xl bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-500 flex flex-col md:flex-row max-h-[90vh]">
                <button
                    onClick={() => setIsOpen(false)}
                    className="absolute top-4 right-4 p-2 bg-white/10 backdrop-blur-sm rounded-full text-gray-500 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-100 transition-colors z-20"
                >
                    <Icon icon="mdi:close" width={24} height={24} />
                </button>

                {/* Left Column: Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto overflow-hidden">
                    <Image src="/image.png"
                        width={500}
                        height={500}
                        alt="Community impact"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                        <blockquote className="text-white font-medium text-lg leading-relaxed italic">
                            "Together, we are building a future where every woman thrives."
                        </blockquote>
                    </div>
                </div>

                {/* Right Column: Content */}
                <div className="w-full md:w-3/5 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative">
                    <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
                        <Icon icon="mdi:email-outline" width={200} height={200} />
                    </div>

                    <div className="space-y-6 relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-600 dark:bg-blue-900/30 dark:text-blue-300 text-xs font-bold uppercase tracking-wider w-fit">
                            <span className="material-symbols-outlined text-sm">
                                <Icon icon="mdi:email-fast-outline" width={16} height={16} />
                            </span>
                            Monthly Updates
                        </div>

                        <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl">
                            Join the Movement
                        </h2>

                        <p className="text-text-secondary dark:text-gray-400 leading-relaxed">
                            Subscribe to receive inspiring stories of impact, invitations to exclusive events, and transparent reports on how your support changes lives.
                        </p>

                        <form className="flex flex-col gap-4 pt-2">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <input
                                    className="flex-grow rounded-xl border-gray-200 bg-gray-50 px-5 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 placeholder:text-gray-400 focus:bg-white focus:ring-2 focus:ring-inset focus:ring-primary sm:text-base dark:bg-gray-900/50 dark:text-white dark:ring-gray-700 dark:focus:ring-primary transition-all outline-none"
                                    id="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                    type="email"
                                />
                                <button
                                    className="flex-none rounded-xl bg-primary px-6 py-3 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary-dark hover:shadow-xl hover:shadow-primary/30 active:scale-95 transition-all duration-200 whitespace-nowrap"
                                    type="submit"
                                >
                                    Subscribe Now
                                </button>
                            </div>
                            <p className="text-xs text-text-secondary dark:text-gray-500">
                                No spam, ever. Unsubscribe at any time.
                            </p>
                        </form>

                        <div className="pt-6 border-t border-gray-100 dark:border-gray-800 flex items-center gap-4">
                            <div className="flex -space-x-3">
                                <img
                                    className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5rdzLDRb1CRlXHl52H0nRA5m6yvq1Y2HdRjb-ybiaH1hvHVIMMg28RoNddgcOix5RAONcOJOHOhEWr0EQ3mkw86EUB2HOZBAVvzFjKQeSYIi5fRafGDfHpWX4FPdb-Y65lut2_ZkNrTagBbvPefT6BurmkwvzF6AA9yyJ9ihE-kIBx78O6GFbg3f8tzz1PV6pbAzjAnbshmFlx7AvdK6-34mWsQjLbW2eGYdvmsCBJRDmrhajzvZXAX_jWhrbsp9YHQmRai5lQBI"
                                    alt=""
                                />
                                <img
                                    className="h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDhnS6KPaw5gnKO0iY-kB57tHjt2vlb3sLqMy1Sh4eFndRKcwJC0bKWCBcM1hy_ESPkrimyxxcA1EU1EXYxHZel8z1pO3pslje8os3KoqAZmV3XQsZmVobwUQ-ls6He3Nc1ldQiarJx9VnVsjgAsihbXk21Q7aAPFN-6n-Pk_QtebPxuuX4vTWq0-9qlsfijamZMWNgeIj5yEu6YQxMLpCRDmnd5iJRdgd9wyfzCgGFiBtL_PhOvqWWbV8DjS6u1iQ5fLrgM0aEc"
                                    alt=""
                                />
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-800 text-xs font-bold text-gray-500 dark:text-gray-300">
                                    +15k
                                </div>
                            </div>
                            <div className="text-sm">
                                <span className="block font-bold text-text-main dark:text-white">Community Strong</span>
                                <span className="text-text-secondary dark:text-gray-400">Join 15,000+ others</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
