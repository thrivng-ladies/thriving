import { Icon } from "@iconify/react";
import React from "react";

export default function PillarsOfImpact() {
    return (
        <section className="py-24 bg-background-off dark:bg-gray-900/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-5xl mb-4">
                        Our Pillars of Impact
                    </h2>
                    <p className="text-lg text-text-secondary dark:text-gray-400">
                        Designed to create sustainable, long-term change.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[320px]">
                    <div className="md:col-span-2 md:row-span-2 group relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-2xl transition-all duration-500">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
                        <img
                            alt="Students in classroom"
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8Es22kjBiW0-lJxMHwSkwcU2pZLDNuRttea11osmu_GJuCJA4EtXoHhHuywvgtlXOkiGdYhj2whB9zzv8x6-3eYNDnpcwW2eKy0kUDiWSjFo3rvsSqRnKO5uQ_n2ESVfsXYplOghLk9iVj9_zynDt7ClcSjjjLJqJW1_XjBM46MSc34qLCKAeCVW2ZsTNXDO98M_GvTcildKOz0Hu1dQO3EJjYy4vzGR24GbwWajUt1CWegcM0dmepy7CV6OhcWZi-BrGQXKvnDo"
                        />
                        <div className="relative z-20 flex flex-col h-full justify-end p-8">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold mb-4 border border-white/20">
                                    <span className="material-symbols-outlined text-sm">school</span>
                                    Core Program
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Educational Outreach
                                </h3>
                                <p className="text-gray-200 mb-6 max-w-md opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 h-0 group-hover:h-auto overflow-hidden">
                                    Providing scholarships and learning materials to ensure no
                                    child is left behind.
                                </p>
                                <button className="flex items-center gap-2 text-white font-bold group-hover:gap-4 transition-all">
                                    Learn More
                                    <span className="material-symbols-outlined">arrow_forward</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="md:col-span-2 relative overflow-hidden rounded-3xl bg-[#0f172a] shadow-sm hover:shadow-xl transition-all duration-500 group">
                        <div className="absolute right-0 top-0 h-full w-2/3 opacity-40 mix-blend-overlay">
                            <img
                                alt="Woman laptop"
                                className="h-full w-full object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtZv3qPGDpA9YYJkBMmvhzCzoe93Vb0i2V6IQ-agDl5VHUz0EGFd1BVTFySceBroIIxXzWnjtcBBsVizj0REEUIYigIyFcEu3_EE0qiXtiTGqb-AnV4Rn9hmrJ-QCEUU4Vnc1AcukiJEtxwpSO-hc2BskqswCm8aQf0wWQuK0QExvmi-HhxQeW-YukDei0xXGZ0Dj7oqNYDL8zf30FMTDaWx9o044Izsu2ANgHE5-zkEZeO97Izo40hG5Hww3m2LZNZnUmnruAppA"
                            />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0f172a] via-[#0f172a]/80 to-transparent"></div>
                        <div className="relative z-10 p-8 h-full flex flex-col justify-center">
                            <div className="h-12 w-12 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-4">
                                <span className="material-symbols-outlined">
                                    <Icon icon="mdi:code-not-equal-variant" width={44} height={44} />
                                </span>
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">
                                Digital Skills Transfer
                            </h3>
                            <p className="text-gray-400 text-sm max-w-xs mb-4">
                                Workshops in coding, digital literacy, and modern vocational
                                skills.
                            </p>
                            <a
                                className="text-blue-400 text-sm font-bold flex items-center gap-1 hover:gap-2 transition-all"
                                href="#"
                            >
                                Explore Workshops
                                <span className="material-symbols-outlined text-sm">arrow_forward</span>
                            </a>
                        </div>
                    </div>
                    <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-primary shadow-sm hover:shadow-xl transition-all duration-500 p-8 flex flex-col justify-between text-white">
                        <span className="material-symbols-outlined text-5xl opacity-20">
                            <Icon icon="mdi:format-quote-close" width={54} height={54} />
                        </span>
                        <p className="font-medium text-lg leading-snug">
                            "The foundation gave me the confidence to become an engineer."
                        </p>
                        <div className="flex items-center gap-3 mt-4">
                            <div className="h-8 w-8 rounded-full bg-white/20 overflow-hidden">
                                <img
                                    className="h-full w-full object-cover"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiqnoR0Cdo-3DFtNAuTEa13-DfylVKcm4Kfgvmobj6-OkhocX6VM22XkgYPNc18wV_x8IB8G6AMT235VnHmWckPFCOthiPN04HEyPSe3paGYGMdvlRHbqP74i8YWJGgPhEvY7xDcZPR5gcuSxoXyeZPsTzwnN4bAA8lOEpAZbKEuXN4vqIHRi_1ohK09KOZpIMFGmsRMmZcIMTozs2NlNe0S-dFivl7twKYyEi8cFqCPoW0UGH3V4KNDWyMIY0RzM2ikyOsc7_UEI"
                                />
                            </div>
                            <span className="text-sm font-bold opacity-80">Amina K.</span>
                        </div>
                    </div>
                    <div className="md:col-span-1 relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-sm hover:shadow-xl transition-all duration-500 group border border-border-light dark:border-gray-700">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                        <img
                            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu9OMYAwx7lKTkAMh_XBgFX0y8Ylawehup-5ZOHpNAAVtDCWutgJe9ouPKlWkEq8YhKRtr_tQsjrn19-kECdhbgegaHFA6x7LweGf8rOWgshSoQUnKcVjwWA-xrybTYzNaRDLfWdHB4c3ERs8QBBK2WzPFFeWATaiAiXWO7dUzQX8TnNZEqYx9CRr-gU0dKAvgHyKVKZctV2rEbNV23B4fNrJzCpv4yLrcL7zgNOzxd_2DlvPVbjanRjpmrcsNc5LGnjCiYoHS8xM"
                        />
                        <div className="absolute bottom-0 left-0 p-6 z-20">
                            <div className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-lg transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <h4 className="font-bold text-text-main dark:text-white flex items-center gap-2">
                                    <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
                                    Future Project
                                </h4>
                                <p className="text-xs text-text-secondary dark:text-gray-400 mt-1">
                                    The Innovation Hub
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
