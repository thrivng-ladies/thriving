'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function DemographicsChart() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        chartInstance.current = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Girls', 'Women', 'Youth'],
                datasets: [{
                    data: [65, 25, 10],
                    backgroundColor: ['#3b82f6', '#FBBF24', '#06b6d4'],
                    borderWidth: 0,
                    hoverOffset: 5
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                cutout: '80%',
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        enabled: false
                    }
                }
            } as any
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="bg-white dark:bg-admin-surface-dark p-8 rounded-2xl shadow-admin-minimal border border-slate-100 dark:border-slate-800 flex flex-col">
            <h2 className="text-lg font-semibold text-admin-text-light dark:text-admin-text-dark font-admin-display mb-6">Demographics</h2>
            <div className="relative h-48 w-full flex justify-center mb-6">
                <canvas ref={chartRef}></canvas>
            </div>
            <div className="mt-auto space-y-3">
                <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center text-admin-text-light dark:text-admin-text-dark">
                        <span className="w-2 h-2 rounded-full bg-admin-primary mr-2"></span> Girls (10-18)
                    </span>
                    <span className="font-semibold text-admin-text-light dark:text-admin-text-dark">65%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center text-admin-text-light dark:text-admin-text-dark">
                        <span className="w-2 h-2 rounded-full bg-admin-secondary mr-2"></span> Women (19+)
                    </span>
                    <span className="font-semibold text-admin-text-light dark:text-admin-text-dark">25%</span>
                </div>
                <div className="flex justify-between items-center text-sm">
                    <span className="flex items-center text-admin-text-light dark:text-admin-text-dark">
                        <span className="w-2 h-2 rounded-full bg-cyan-500 mr-2"></span> Youth (Other)
                    </span>
                    <span className="font-semibold text-admin-text-light dark:text-admin-text-dark">10%</span>
                </div>
            </div>
        </div>
    );
}
