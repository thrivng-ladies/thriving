import React from "react";

export default function ImpactStats() {
    return (
        <div className="relative z-20 -mt-24 sm:-mt-32 pb-24 px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="container mx-auto pointer-events-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-primary">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-primary">
                                <span className="material-symbols-outlined text-3xl">school</span>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400 py-1 px-2 rounded-lg">
                                +24% YoY
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-4xl font-extrabold text-text-main dark:text-white">
                                5,000+
                            </h3>
                            <p className="text-text-secondary dark:text-gray-400 font-medium">
                                Girls Educated
                            </p>
                        </div>
                        <div className="mt-6 w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div className="bg-primary h-2 rounded-full" style={{ width: "85%" }}></div>
                        </div>
                    </div>
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-accent">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-amber-50 dark:bg-amber-900/30 rounded-xl text-accent">
                                <span className="material-symbols-outlined text-3xl">diversity_3</span>
                            </div>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-4xl font-extrabold text-text-main dark:text-white">
                                10
                            </h3>
                            <p className="text-text-secondary dark:text-gray-400 font-medium">
                                Communities Served
                            </p>
                        </div>
                        <div className="mt-6 flex -space-x-2">
                            <span className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800"></span>
                            <span className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white dark:border-gray-800"></span>
                            <span className="h-8 w-8 rounded-full bg-gray-400 border-2 border-white dark:border-gray-800"></span>
                            <span className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-gray-500 font-bold">
                                +7
                            </span>
                        </div>
                    </div>
                    <div className="group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 border-t-4 border-pink-500">
                        <div className="flex justify-between items-start mb-4">
                            <div className="p-3 bg-pink-50 dark:bg-pink-900/30 rounded-xl text-pink-500">
                                <span className="material-symbols-outlined text-3xl">volunteer_activism</span>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-wider text-pink-600 bg-pink-100 dark:bg-pink-900/30 dark:text-pink-400 py-1 px-2 rounded-lg">
                                Goal 20k
                            </span>
                        </div>
                        <div className="space-y-1">
                            <h3 className="text-4xl font-extrabold text-text-main dark:text-white">
                                15,000+
                            </h3>
                            <p className="text-text-secondary dark:text-gray-400 font-medium">
                                Lives Impacted
                            </p>
                        </div>
                        <div className="mt-6 w-full bg-gray-100 dark:bg-gray-700 rounded-full h-2 overflow-hidden">
                            <div className="bg-pink-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
