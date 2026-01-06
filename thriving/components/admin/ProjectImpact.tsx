'use client';

import React from 'react';
import Link from 'next/link';

export default function ProjectImpact() {
    return (
        <div className="bg-white dark:bg-admin-surface-dark rounded-2xl shadow-admin-minimal border border-slate-100 dark:border-slate-800 p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-admin-text-light dark:text-admin-text-dark font-admin-display">Project Impact</h2>
                <Link href="#" className="text-xs font-medium text-admin-primary hover:underline">View Details</Link>
            </div>
            <div className="space-y-8">
                <div>
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <h4 className="text-sm font-medium text-admin-text-light dark:text-admin-text-dark">Sanitary Pad Distribution</h4>
                            <p className="text-xs text-admin-text-muted-light mt-0.5">Kampala District</p>
                        </div>
                        <span className="text-sm font-bold text-admin-primary">85%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-admin-primary h-1.5 rounded-full" style={{ width: '85%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <h4 className="text-sm font-medium text-admin-text-light dark:text-admin-text-dark">School Fees Support</h4>
                            <p className="text-xs text-admin-text-muted-light mt-0.5">Jinja Region</p>
                        </div>
                        <span className="text-sm font-bold text-admin-secondary">40%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-admin-secondary h-1.5 rounded-full" style={{ width: '40%' }}></div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-end mb-2">
                        <div>
                            <h4 className="text-sm font-medium text-admin-text-light dark:text-admin-text-dark">Vocational Training</h4>
                            <p className="text-xs text-admin-text-muted-light mt-0.5">Planning Phase</p>
                        </div>
                        <span className="text-sm font-bold text-blue-500">15%</span>
                    </div>
                    <div className="w-full bg-slate-100 dark:bg-slate-700/50 rounded-full h-1.5 overflow-hidden">
                        <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: '15%' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
