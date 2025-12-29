"use client";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function ImpactStats() {
    const [girlsEducated, setGirlsEducated] = useState(5000);
    const [communitiesServed, setCommunitiesServed] = useState(10);
    const [livesImpacted, setLivesImpacted] = useState(15000);

    const stats = [
        {
            title: "Girls Educated",
            value: `${girlsEducated}+`,
            icon: "material-symbols:school",
            color: "primary",
            badgeColor: "green",
            badgeText: "+24% YoY",
            progress: "85%",
            progressColor: "bg-primary"
        },
        {
            title: "Communities Served",
            value: `${communitiesServed}`,
            icon: "material-symbols:diversity-3",
            color: "accent",
            badgeColor: null, // Special case for avatars
            badgeText: null,
            progress: null // Special case for avatars
        },
        {
            title: "Lives Impacted",
            value: `${livesImpacted}+`,
            icon: "material-symbols:volunteer-activism",
            color: "pink-500",
            badgeColor: "pink",
            badgeText: "Goal 20k",
            progress: "75%",
            progressColor: "bg-pink-500"
        },
    ];

    return (
        <div className="relative z-20 mt-4 sm:-mt-8 pb-24 px-4 sm:px-6 lg:px-8 pointer-events-none">
            <div className="container mx-auto pointer-events-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className={`group bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-2xl shadow-black/5 hover:-translate-y-2 transition-transform duration-300 border-t-4 ${stat.color === 'primary' ? 'border-primary' : stat.color === 'accent' ? 'border-accent' : 'border-pink-500'}`}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.color === 'primary' ? 'bg-blue-50 dark:bg-blue-900/30 text-primary' : stat.color === 'accent' ? 'bg-amber-50 dark:bg-amber-900/30 text-accent' : 'bg-pink-50 dark:bg-pink-900/30 text-pink-500'}`}>
                                    <span className="text-3xl">
                                        <Icon icon={stat.icon} width={34} height={34} />
                                    </span>
                                </div>
                                {stat.badgeText && (
                                    <span className={`text-xs font-bold uppercase tracking-wider py-1 px-2 rounded-lg ${stat.badgeColor === 'green' ? 'text-green-600 bg-green-100 dark:bg-green-900/30 dark:text-green-400' : 'text-pink-600 bg-pink-100 dark:bg-pink-900/30 dark:text-pink-400'}`}>
                                        {stat.badgeText}
                                    </span>
                                )}
                            </div>
                            <div className="space-y-1">
                                <h3 className="text-4xl font-extrabold text-foreground">
                                    {stat.value}
                                </h3>
                                <p className="text-muted-foreground font-medium">
                                    {stat.title}
                                </p>
                            </div>

                            {/* Conditional Rendering for Footer Content */}
                            {stat.progress ? (
                                <div className="mt-6 w-full bg-muted rounded-full h-2 overflow-hidden">
                                    <div className={`${stat.progressColor} h-2 rounded-full`} style={{ width: stat.progress }}></div>
                                </div>
                            ) : (
                                <div className="mt-6 flex -space-x-2">
                                    <span className="h-8 w-8 rounded-full bg-gray-200 border-2 border-white dark:border-gray-800"></span>
                                    <span className="h-8 w-8 rounded-full bg-gray-300 border-2 border-white dark:border-gray-800"></span>
                                    <span className="h-8 w-8 rounded-full bg-gray-400 border-2 border-white dark:border-gray-800"></span>
                                    <span className="h-8 w-8 rounded-full bg-gray-100 border-2 border-white dark:border-gray-800 flex items-center justify-center text-xs text-gray-500 font-bold">
                                        +7
                                    </span>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
