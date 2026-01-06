'use client';

import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

export default function FundsChart() {
    const chartRef = useRef<HTMLCanvasElement>(null);
    const chartInstance = useRef<Chart | null>(null);

    useEffect(() => {
        if (!chartRef.current) return;

        if (chartInstance.current) {
            chartInstance.current.destroy();
        }

        const ctx = chartRef.current.getContext('2d');
        if (!ctx) return;

        // Check for dark mode to adjust grid colors - simplified check
        const isDark = document.documentElement.classList.contains('dark');
        const gridColor = isDark ? '#1e293b' : '#F1F5F9';

        chartInstance.current = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                datasets: [{
                    label: 'Donations',
                    data: [4200, 3800, 5100, 4800, 6200, 7500],
                    backgroundColor: '#3b82f6',
                    borderRadius: 4,
                    barThickness: 24,
                },
                {
                    label: 'Funds Used',
                    data: [600, 900, 750, 1100, 1400, 1100, 950, 1050, 1300, 1450, 1250, 1600],
                    backgroundColor: '#e2e8f0',
                    borderRadius: 4,
                    barThickness: 24,
                    hidden: true,
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        align: 'start',
                        labels: {
                            usePointStyle: true,
                            boxWidth: 8,
                            padding: 20,
                            font: {
                                family: "'Inter', sans-serif",
                                size: 12
                            },
                            color: '#64748b'
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1e293b',
                        padding: 12,
                        titleFont: {
                            size: 13,
                            family: "'Inter', sans-serif"
                        },
                        bodyFont: {
                            size: 12,
                            family: "'Inter', sans-serif"
                        },
                        cornerRadius: 8,
                        displayColors: false,
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: '#f1f5f9',
                            drawBorder: false,
                        },
                        ticks: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11
                            },
                            color: '#94a3b8',
                            padding: 10
                        },
                        border: {
                            display: false
                        }
                    },
                    x: {
                        grid: {
                            display: false
                        },
                        ticks: {
                            font: {
                                family: "'Inter', sans-serif",
                                size: 11
                            },
                            color: '#94a3b8',
                            padding: 10
                        },
                        border: {
                            display: false
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index',
                },
            } as any
        });

        return () => {
            if (chartInstance.current) {
                chartInstance.current.destroy();
            }
        };
    }, []);

    return (
        <div className="lg:col-span-2 bg-white dark:bg-admin-surface-dark p-8 rounded-2xl shadow-admin-minimal border border-slate-100 dark:border-slate-800">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
                <h2 className="text-lg font-semibold text-admin-text-light dark:text-admin-text-dark font-admin-display">Funds Overview</h2>
                <div className="flex bg-slate-50 dark:bg-slate-800 p-1 rounded-lg">
                    <button className="px-3 py-1 text-xs font-medium rounded text-admin-text-light dark:text-admin-text-dark bg-white dark:bg-slate-700 shadow-sm">6 Months</button>
                    <button className="px-3 py-1 text-xs font-medium rounded text-admin-text-muted-light hover:text-admin-text-light transition-colors">Year</button>
                </div>
            </div>
            <div className="relative h-72 w-full">
                <canvas ref={chartRef}></canvas>
            </div>
        </div>
    );
}
