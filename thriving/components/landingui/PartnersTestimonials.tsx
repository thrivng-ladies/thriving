import { Icon } from "@iconify/react";
import React from "react";

export default function PartnersTestimonials() {
    return (
        <section className="py-24 bg-background-off dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
                    <div className="max-w-2xl">
                        <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl mb-4">
                            Voices of Partnership
                        </h2>
                        <p className="text-lg text-text-secondary dark:text-gray-400">
                            See why leading organizations choose to build the future with us.
                        </p>
                    </div>
                    <div className="flex gap-2">
                        <button className="h-12 w-12 rounded-full border border-border-light dark:border-gray-700 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-text-secondary dark:text-gray-300">
                            <span className="material-symbols-outlined">
                                <Icon icon="mdi:chevron-left" width={24} height={24} />
                            </span>
                        </button>
                        <button className="h-12 w-12 rounded-full bg-primary text-white flex items-center justify-center shadow-lg hover:bg-primary-dark transition-colors">
                            <span className="material-symbols-outlined">
                                <Icon icon="mdi:chevron-right" width={24} height={24} />
                            </span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-7 relative group rounded-3xl overflow-hidden min-h-[500px] shadow-2xl">
                        <img
                            alt="Partner discussion"
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-75"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Es22kjBiW0-lJxMHwSkwcU2pZLDNuRttea11osmu_GJuCJA4EtXoHhHuywvgtlXOkiGdYhj2whB9zzv8x6-3eYNDnpcwW2eKy0kUDiWSjFo3rvsSqRnKO5uQ_n2ESVfsXYplOghLk9iVj9_zynDt7ClcSjjjLJqJW1_XjBM46MSc34qLCKAeCVW2ZsTNXDO98M_GvTcildKOz0Hu1dQO3EJjYy4vzGR24GbwWajUt1CWegcM0dmepy7CV6OhcWZi-BrGQXKvnDo"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute top-8 left-8">
                            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase tracking-wider">
                                <span className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></span>
                                Partner Spotlight
                            </div>
                        </div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <button className="group/btn relative flex items-center justify-center h-20 w-20 bg-white/20 backdrop-blur-md border border-white/40 rounded-full transition-all hover:scale-110">
                                <span className="material-symbols-outlined text-4xl text-white ml-1">
                                    <Icon icon="mdi:play" width={24} height={24} />
                                </span>
                                <div className="absolute inset-0 rounded-full border border-white/40 animate-[ping_2s_ease-in-out_infinite]"></div>
                            </button>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <blockquote className="text-2xl font-medium text-white leading-relaxed mb-6">
                                "Thriving Lives doesn't just fund projects; they build
                                sustainable ecosystems. The ROI in human capital is unlike
                                anything we've seen."
                            </blockquote>
                            <div className="flex items-center gap-4">
                                <img
                                    alt="Partner avatar"
                                    className="h-12 w-12 rounded-full border-2 border-white/30 object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5rdzLDRb1CRlXHl52H0nRA5m6yvq1Y2HdRjb-ybiaH1hvHVIMMg28RoNddgcOix5RAONcOJOHOhEWr0EQ3mkw86EUB2HOZBAVvzFjKQeSYIi5fRafGDfHpWX4FPdb-Y65lut2_ZkNrTagBbvPefT6BurmkwvzF6AA9yyJ9ihE-kIBx78O6GFbg3f8tzz1PV6pbAzjAnbshmFlx7AvdK6-34mWsQjLbW2eGYdvmsCBJRDmrhajzvZXAX_jWhrbsp9YHQmRai5lQBI"
                                />
                                <div>
                                    <div className="text-white font-bold">Elena Rodriguez</div>
                                    <div className="text-gray-300 text-sm">
                                        Director of CSR, TechGlobal Inc.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-5 flex flex-col gap-6 min-h-[500px]">
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-border-light dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
                            <div className="flex text-yellow-500 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <span key={i} className="text-xl">
                                        <Icon icon="mdi:star" width={24} height={24} />
                                    </span>
                                ))}
                            </div>
                            <p className="text-text-main dark:text-gray-200 font-medium text-lg mb-6">
                                "The transparency and data-driven approach gave our board the
                                confidence to commit to a 5-year partnership."
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    alt="Partner avatar"
                                    className="h-10 w-10 rounded-full bg-gray-200 object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDhnS6KPaw5gnKO0iY-kB57tHjt2vlb3sLqMy1Sh4eFndRKcwJC0bKWCBcM1hy_ESPkrimyxxcA1EU1EXYxHZel8z1pO3pslje8os3KoqAZmV3XQsZmVobwUQ-ls6He3Nc1ldQiarJx9VnVsjgAsihbXk21Q7aAPFN-6n-Pk_QtebPxuuX4vTWq0-9qlsfijamZMWNgeIj5yEu6YQxMLpCRDmnd5iJRdgd9wyfzCgGFiBtL_PhOvqWWbV8DjS6u1iQ5fLrgM0aEc"
                                />
                                <div>
                                    <div className="text-sm font-bold text-text-main dark:text-white">
                                        James Chen
                                    </div>
                                    <div className="text-xs text-text-secondary dark:text-gray-500">
                                        VP, Future Edu Foundation
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-sm border border-border-light dark:border-gray-700 hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-2 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-primary">
                                    <span className="text-yellow-500 text-2xl">
                                        <Icon icon="mdi:format-quote-open" width={24} height={24} />
                                    </span>
                                </div>
                            </div>
                            <p className="text-text-main dark:text-gray-200 font-medium text-lg mb-6">
                                "We've seen real, measurable change in the communities we
                                support together. A truly transformative alliance."
                            </p>
                            <div className="flex items-center gap-3">
                                <img
                                    alt="Partner avatar"
                                    className="h-10 w-10 rounded-full bg-gray-200 object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCD_v5okTYn51FiWZPsKkwL2wIlIkza3B7aUAxgv_d_uqsEVI1QaGx60Dk17WuTTQZCn_Ribq6Z2Sk6YkYr_j1ECE19RUsgTYvgaSxSDvmS-CLH2f2mn8G5Kpl2Egfdn2nmEKizbxI_qiX-CuTqBZ7hvSOVg4tiUreTfuyGxJQBODU7-OXuDF8fsgpBCNrlAEOTV4_1RfyBteHCx1NNi2Fp4tukEGt2G28B1Lx-c5Xl3Ko-5liAjqj4Bp-lHkLg2eZzgUbOtXagog"
                                />
                                <div>
                                    <div className="text-sm font-bold text-text-main dark:text-white">
                                        Sarah O'Connor
                                    </div>
                                    <div className="text-xs text-text-secondary dark:text-gray-500">
                                        Head of Impact, Civic Trust
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 pt-8 border-t border-border-light dark:border-gray-800">
                    <p className="text-center text-sm font-semibold text-text-secondary dark:text-gray-500 uppercase tracking-widest mb-8">
                        Proudly supported by
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        <div className="text-2xl font-black text-gray-400 dark:text-gray-600 font-serif">
                            VANGUARD
                        </div>
                        <div className="text-2xl font-bold text-gray-400 dark:text-gray-600 tracking-tighter italic">
                            HorizonLabs
                        </div>
                        <div className="text-2xl font-bold text-gray-400 dark:text-gray-600 flex items-center gap-1">
                            <span className="material-symbols-outlined">circle</span>CircleGroup
                        </div>
                        <div className="text-2xl font-bold text-gray-400 dark:text-gray-600 font-mono">
                            NEXT_STEP
                        </div>
                        <div className="text-2xl font-serif font-bold text-gray-400 dark:text-gray-600 italic">
                            Foundation.io
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
