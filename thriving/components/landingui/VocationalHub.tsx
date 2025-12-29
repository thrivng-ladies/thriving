import { Icon } from "@iconify/react";
import React from "react";

export default function VocationalHub() {
    return (
        <section className="relative py-24 bg-background-dark text-white overflow-hidden">
            <div className="absolute inset-0 opacity-20">
                <img
                    className="w-full h-full object-cover grayscale mix-blend-luminosity"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCu9OMYAwx7lKTkAMh_XBgFX0y8Ylawehup-5ZOHpNAAVtDCWutgJe9ouPKlWkEq8YhKRtr_tQsjrn19-kECdhbgegaHFA6x7LweGf8rOWgshSoQUnKcVjwWA-xrybTYzNaRDLfWdHB4c3ERs8QBBK2WzPFFeWATaiAiXWO7dUzQX8TnNZEqYx9CRr-gU0dKAvgHyKVKZctV2rEbNV23B4fNrJzCpv4yLrcL7zgNOzxd_2DlvPVbjanRjpmrcsNc5LGnjCiYoHS8xM"
                />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-background-dark via-background-dark/95 to-background-dark/80"></div>
            <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute -inset-4 bg-gradient-to-r from-primary to-purple-600 rounded-2xl opacity-30 blur-lg group-hover:opacity-50 transition-opacity duration-500"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 aspect-video">
                            <img
                                alt="Workspace collaboration"
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDulKdHtDyG-tXXuLPKntkGJXvo2yOV48FqicsoxSLyBv7-UjE_gW97TuDQGUfUnM3vhhpM2xvB5cfBSfJqBy3ybf2WKwdx7Ix-YkOiQkHvdPCwji7UFeMrPG_UF_p-xNoh3Nfb2uzg6hEN8pni9mVy5XI7963Ssrwl77hAIi1cpytAvxcLU9gdN-UBWWmQVJCKj49RKU57XA9ekziLVtZhBi7-14oq_N1eawUaYqWqXjE7qIE-1pMQmTsn8UR6G0rIaxEFaEX9UQ8"
                            />
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                                <button className="h-20 w-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 group-hover:scale-110 transition-transform shadow-2xl">
                                    <span className="material-symbols-outlined text-4xl text-white">
                                        <Icon icon="mdi:play-outline" width={44} height={44} />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="inline-flex items-center gap-2 text-primary font-bold tracking-wider uppercase text-sm">
                            <span className="material-symbols-outlined">rocket_launch</span>
                            Coming 2025
                        </div>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            The Vocational Hub
                        </h2>
                        <p className="text-xl text-gray-400 font-light leading-relaxed">
                            A state-of-the-art facility designed to incubate the next
                            generation of female leaders in tech and business.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-gray-800 text-primary">
                                    <span className="material-symbols-outlined">
                                        <Icon icon="mdi:computer" width={24} height={24} />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Advanced Labs</h4>
                                    <p className="text-sm text-gray-400 mt-1">
                                        Equipped with modern hardware for coding and design.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="mt-1 p-2 rounded-lg bg-gray-800 text-primary">
                                    <span className="material-symbols-outlined">
                                        <Icon icon="mdi:account-group" width={24} height={24} />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-white">Co-Working Space</h4>
                                    <p className="text-sm text-gray-400 mt-1">
                                        Collaborative environments for startups and freelancers.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="pt-8 border-t border-gray-800">
                            <a
                                className="inline-flex items-center text-white font-bold hover:text-primary transition-colors gap-2 group"
                                href="#"
                            >
                                Download the Prospectus
                                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                                    <Icon icon="mdi:arrow-right-thick" width={24} height={24} />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
