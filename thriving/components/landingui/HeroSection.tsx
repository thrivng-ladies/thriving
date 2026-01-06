"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function HeroSection() {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <section className="relative h-[90vh] min-h-[700px] w-full overflow-hidden flex items-center">
            <div className="absolute inset-0 z-0">
                <img
                    alt="Diverse students studying outdoors"
                    className="h-full w-full object-cover scale-105 animate-[pulse_10s_ease-in-out_infinite] transition-transform duration-[20s]"
                    data-alt="Group of diverse young students studying outdoors"
                    src="/image.png"
                    style={{ animation: "none", transform: "scale(1.05)" }}
                />
                <div className="absolute inset-0 bg-hero-gradient"></div>
                <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
            </div>
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8 pt-20">
                <div className="max-w-3xl space-y-8">
                    <div className="inline-flex items-center rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-white shadow-lg">
                        <span className="flex h-2 w-2 rounded-full bg-accent mr-2 animate-pulse"></span>
                        Impact Report 2024 Released
                    </div>
                    <h1 className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.1] text-shadow">
                        Eliminating Barriers.<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-white">
                            Empowering Futures.
                        </span>
                    </h1>
                    <p className="max-w-xl text-lg text-gray-200 md:text-xl leading-relaxed font-light">
                        We bridge the gap between potential and opportunity, equipping girls
                        and youth with the tools for economic independence and lifelong
                        success.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4">
                        <button className="h-14 px-8 rounded-full bg-primary text-white text-base font-bold shadow-xl shadow-primary/30 hover:bg-primary-dark hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                            Make a Donation
                            <span className="material-symbols-outlined text-sm">
                                <Icon icon="mdi:donation-outline" width={24} height={24} />
                            </span>
                        </button>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="h-14 px-8 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white text-base font-bold hover:bg-white/20 hover:-translate-y-1 transition-all flex items-center justify-center gap-2"
                        >
                            Watch Our Story
                            <span className="material-symbols-outlined text-sm animate-[pulse_1.5s_ease-in-out_infinite]">
                                <Icon icon="mdi:play-circle-outline" width={24} height={24} />
                            </span>
                        </button>
                    </div>
                    <div className="flex items-center gap-4 pt-8">
                        <div className="flex -space-x-4">
                            <img
                                alt="Supporter avatar"
                                className="h-12 w-12 rounded-full border-2 border-background-dark object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5rdzLDRb1CRlXHl52H0nRA5m6yvq1Y2HdRjb-ybiaH1hvHVIMMg28RoNddgcOix5RAONcOJOHOhEWr0EQ3mkw86EUB2HOZBAVvzFjKQeSYIi5fRafGDfHpWX4FPdb-Y65lut2_ZkNrTagBbvPefT6BurmkwvzF6AA9yyJ9ihE-kIBx78O6GFbg3f8tzz1PV6pbAzjAnbshmFlx7AvdK6-34mWsQjLbW2eGYdvmsCBJRDmrhajzvZXAX_jWhrbsp9YHQmRai5lQBI"
                            />
                            <img
                                alt="Supporter avatar"
                                className="h-12 w-12 rounded-full border-2 border-background-dark object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDhnS6KPaw5gnKO0iY-kB57tHjt2vlb3sLqMy1Sh4eFndRKcwJC0bKWCBcM1hy_ESPkrimyxxcA1EU1EXYxHZel8z1pO3pslje8os3KoqAZmV3XQsZmVobwUQ-ls6He3Nc1ldQiarJx9VnVsjgAsihbXk21Q7aAPFN-6n-Pk_QtebPxuuX4vTWq0-9qlsfijamZMWNgeIj5yEu6YQxMLpCRDmnd5iJRdgd9wyfzCgGFiBtL_PhOvqWWbV8DjS6u1iQ5fLrgM0aEc"
                            />
                            <img
                                alt="Supporter avatar"
                                className="h-12 w-12 rounded-full border-2 border-background-dark object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCD_v5okTYn51FiWZPsKkwL2wIlIkza3B7aUAxgv_d_uqsEVI1QaGx60Dk17WuTTQZCn_Ribq6Z2Sk6YkYr_j1ECE19RUsgTYvgaSxSDvmS-CLH2f2mn8G5Kpl2Egfdn2nmEKizbxI_qiX-CuTqBZ7hvSOVg4tiUreTfuyGxJQBODU7-OXuDF8fsgpBCNrlAEOTV4_1RfyBteHCx1NNi2Fp4tukEGt2G28B1Lx-c5Xl3Ko-5liAjqj4Bp-lHkLg2eZzgUbOtXagog"
                            />
                        </div>
                        <div className="flex flex-col">
                            <div className="flex text-accent text-sm">
                                <span className="material-symbols-outlined text-[18px] fill">star</span>
                                <span className="material-symbols-outlined text-[18px] fill">star</span>
                                <span className="material-symbols-outlined text-[18px] fill">star</span>
                                <span className="material-symbols-outlined text-[18px] fill">star</span>
                                <span className="material-symbols-outlined text-[18px] fill">star</span>
                            </div>
                            <p className="text-sm text-gray-300 font-medium">
                                Trusted by <span className="text-white font-bold">2,400+</span> partners worldwide
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {isVideoOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 animate-in zoom-in-95 duration-200">
                        <button
                            onClick={() => setIsVideoOpen(false)}
                            className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10 p-2 bg-black/50 hover:bg-black/70 rounded-full backdrop-blur-sm"
                            aria-label="Close video"
                        >
                            <Icon icon="mdi:close" width={24} height={24} />
                        </button>
                        <iframe
                            className="w-full h-full"
                            src="https://www.youtube.com/embed/LXb3EKWsInQ?autoplay=1"
                            title="Thriving Story"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        ></iframe>
                    </div>
                </div>
            )}
        </section>
    );
}
