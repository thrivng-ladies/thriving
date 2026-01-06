'use client';

import React from 'react';
import { Icon } from '@iconify/react';

export default function RecentActivity() {
    return (
        <div className="bg-white dark:bg-admin-surface-dark rounded-2xl shadow-admin-minimal border border-slate-100 dark:border-slate-800 p-8">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-lg font-semibold text-admin-text-light dark:text-admin-text-dark font-admin-display">Recent Activity</h2>
                <button className="text-admin-text-muted-light hover:text-admin-text-light cursor-pointer">
                    <Icon icon="material-symbols:more-horiz" className="text-lg" />
                </button>
            </div>
            <div className="relative pl-2 space-y-8">
                <div className="absolute left-[19px] top-2 bottom-4 w-px bg-slate-100 dark:bg-slate-800"></div>

                <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 z-10 w-9 h-9 rounded-full bg-admin-surface-light dark:bg-admin-surface-dark border-2 border-admin-primary flex items-center justify-center">
                        <div className="w-2 h-2 bg-admin-primary rounded-full"></div>
                    </div>
                    <div className="pt-1.5">
                        <h4 className="text-sm font-medium text-admin-text-light dark:text-admin-text-dark">St. Mary's Primary Visit</h4>
                        <p className="text-xs text-admin-text-muted-light dark:text-admin-text-muted-dark mt-0.5">Distributed 120 pads to students.</p>
                        <span className="text-[10px] text-admin-text-muted-light mt-1 block">2h ago</span>
                    </div>
                </div>

                <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 z-10 w-9 h-9 rounded-full bg-admin-surface-light dark:bg-admin-surface-dark border-2 border-green-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="pt-1.5">
                        <h4 className="text-sm font-medium text-admin-text-light dark:text-admin-text-dark">Inventory Restock</h4>
                        <p className="text-xs text-admin-text-muted-light dark:text-admin-text-muted-dark mt-0.5">Added 500 units of Reusable Pads.</p>
                        <span className="text-[10px] text-admin-text-muted-light mt-1 block">Yesterday</span>
                    </div>
                </div>

                <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 z-10 w-9 h-9 rounded-full bg-admin-surface-light dark:bg-admin-surface-dark border-2 border-cyan-500 flex items-center justify-center">
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                    </div>
                    <div className="pt-1.5">
                        <h4 className="text-sm font-medium text-admin-text-light dark:text-admin-text-dark">New Beneficiary Registration</h4>
                        <p className="text-xs text-admin-text-muted-light dark:text-admin-text-muted-dark mt-0.5">Registered 15 new girls in Wakiso.</p>
                        <span className="text-[10px] text-admin-text-muted-light mt-1 block">Oct 24</span>
                    </div>
                </div>

            </div>
        </div>
    );
}
