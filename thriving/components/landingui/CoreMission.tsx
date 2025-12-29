import { Icon } from "@iconify/react";
import React from "react";

export default function CoreMission() {
    return (
        <section className="py-12 bg-background-light dark:bg-background-dark overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-16 items-center">
                    <div className="w-full lg:w-1/2 space-y-8">
                        <h2 className="text-sm font-bold tracking-widest text-primary uppercase mb-2">
                            Our Core Mission
                        </h2>
                        <h3 className="text-4xl font-bold tracking-tight text-text-main dark:text-white sm:text-5xl leading-tight">
                            Bridging the gap between
                            <span className="relative inline-block mx-2">
                                <span className="relative z-10">potential</span>
                                <span className="absolute bottom-1 left-0 w-full h-3 bg-yellow-200 dark:bg-yellow-900/50 -z-0 rounded-sm transform -rotate-2"></span>
                            </span>
                            and opportunity.
                        </h3>
                        <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed">
                            We don't just provide aid; we build ecosystems of support. By
                            removing financial obstacles and providing mentorship, we enable
                            young women to rewrite their own stories and lift their entire
                            communities.
                        </p>
                        <div className="space-y-4 pt-4">
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background-off dark:bg-gray-800/50 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-border-light">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                                    <span className="material-symbols-outlined">
                                        <Icon icon="mdi:book-open-variant" width={24} height={24} />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white">
                                        Educational Access
                                    </h4>
                                    <p className="text-sm text-text-secondary dark:text-gray-400">
                                        Full scholarships and material support.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 p-4 rounded-xl bg-background-off dark:bg-gray-800/50 hover:bg-white hover:shadow-md transition-all duration-300 cursor-default border border-transparent hover:border-border-light">
                                <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
                                    <span className="material-symbols-outlined">
                                        <Icon icon="mdi:lightbulb" width={24} height={24} />
                                    </span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-text-main dark:text-white">
                                        Economic Mobility
                                    </h4>
                                    <p className="text-sm text-text-secondary dark:text-gray-400">
                                        Vocational training and entrepreneurship.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-full blur-[80px]"></div>
                        <div className="relative grid grid-cols-2 gap-4">
                            <div className="space-y-4 mt-8">
                                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg relative group">
                                    <img
                                        alt="Student portrait"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAiqnoR0Cdo-3DFtNAuTEa13-DfylVKcm4Kfgvmobj6-OkhocX6VM22XkgYPNc18wV_x8IB8G6AMT235VnHmWckPFCOthiPN04HEyPSe3paGYGMdvlRHbqP74i8YWJGgPhEvY7xDcZPR5gcuSxoXyeZPsTzwnN4bAA8lOEpAZbKEuXN4vqIHRi_1ohK09KOZpIMFGmsRMmZcIMTozs2NlNe0S-dFivl7twKYyEi8cFqCPoW0UGH3V4KNDWyMIY0RzM2ikyOsc7_UEI"
                                    />
                                    <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                                        <p className="text-white font-bold text-sm">
                                            "I can dream now."
                                        </p>
                                    </div>
                                </div>
                                <div className="p-6 bg-primary rounded-2xl text-white shadow-lg flex flex-col justify-center items-center text-center">
                                    <span className="material-symbols-outlined text-4xl mb-2">
                                        trending_up
                                    </span>
                                    <span className="font-bold text-2xl">92%</span>
                                    <span className="text-xs opacity-80">Employment Rate</span>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <div className="p-6 bg-white dark:bg-gray-800 border border-border-light dark:border-gray-700 rounded-2xl shadow-lg">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="h-3 w-3 rounded-full bg-red-500"></span>
                                        <span className="text-xs font-bold uppercase text-text-secondary">
                                            Before Us
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full mb-4">
                                        <div className="bg-red-500 h-2 rounded-full w-[20%]"></div>
                                    </div>
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="h-3 w-3 rounded-full bg-green-500"></span>
                                        <span className="text-xs font-bold uppercase text-text-secondary">
                                            With Thriving Lives
                                        </span>
                                    </div>
                                    <div className="w-full bg-gray-100 dark:bg-gray-700 h-2 rounded-full">
                                        <div className="bg-green-500 h-2 rounded-full w-[85%]"></div>
                                    </div>
                                    <p className="text-xs text-text-secondary mt-4">
                                        Graduation success comparison
                                    </p>
                                </div>
                                <div className="aspect-square rounded-2xl overflow-hidden shadow-lg relative group">
                                    <img
                                        alt="Classroom view"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuBd4PzoXK5S32T0Z9lYtWnJlJl5Bxd1Ap5BdHoCnBn6YYp4_z1xgzME5FO1EpCoTDMjLxHw_JRzHyJLUTGcKWIgAUzQK2rPRmWGsQa7bzw_G2AHef-Uao3PiMZmzeCFPSUxYu6KE9Q_Lp3rrwF1NJTLQvc-ngxcUniukcKx7oGOAwVILLj3xIEjlHJyNlgiS0cv6op0XlNqBx0SgSWzcTbvBmxK27ZdoB9Bd8DZxX_1R7o7yGS0_pc7RohK2-WCEizRFigXALPROH0"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
