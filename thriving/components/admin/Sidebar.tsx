'use client';

import React from 'react';
import Link from 'next/link';
import { Icon } from '@iconify/react';

export default function Sidebar() {
    return (
        <aside className="hidden lg:flex flex-col w-72 bg-admin-surface-light dark:bg-admin-surface-dark border-r border-slate-100 dark:border-slate-800 h-full flex-shrink-0 z-10 transition-colors duration-300">
            <div className="flex items-center justify-start px-8 h-24">
                <div className="flex items-center space-x-3">
                    <Icon icon="material-symbols:volunteer-activism" className="text-blue-600 text-3xl" />
                    <span className="font-admin-display font-bold text-xl text-admin-text-light dark:text-white tracking-tight">Thriving Lives</span>
                </div>
            </div>
            <nav className="flex-1 overflow-y-auto py-8 px-6 space-y-8">
                <div>
                    <p className="px-4 text-xs font-semibold text-admin-text-muted-light dark:text-admin-text-muted-dark uppercase tracking-wider mb-4">Main</p>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#" className="flex items-center px-4 py-2.5 text-blue-600 bg-blue-50 dark:bg-blue-900/10 rounded-xl transition-all">
                                <Icon icon="material-symbols:dashboard" className="mr-3 text-[20px]" />
                                <span className="font-medium text-sm">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center px-4 py-2.5 text-admin-text-muted-light dark:text-admin-text-muted-dark hover:text-admin-text-light dark:hover:text-admin-text-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all group">
                                <Icon icon="material-symbols:groups" className="mr-3 text-[20px] group-hover:text-admin-primary transition-colors" />
                                <span className="font-medium text-sm">Beneficiaries</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center px-4 py-2.5 text-admin-text-muted-light dark:text-admin-text-muted-dark hover:text-admin-text-light dark:hover:text-admin-text-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all group">
                                <Icon icon="material-symbols:folder-open" className="mr-3 text-[20px] group-hover:text-admin-primary transition-colors" />
                                <span className="font-medium text-sm">Projects</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center px-4 py-2.5 text-admin-text-muted-light dark:text-admin-text-muted-dark hover:text-admin-text-light dark:hover:text-admin-text-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all group">
                                <Icon icon="material-symbols:monetization-on" className="mr-3 text-[20px] group-hover:text-green-500 transition-colors" />
                                <span className="font-medium text-sm">Donations</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <p className="px-4 text-xs font-semibold text-admin-text-muted-light dark:text-admin-text-muted-dark uppercase tracking-wider mb-4">Operations</p>
                    <ul className="space-y-1">
                        <li>
                            <Link href="#" className="flex items-center px-4 py-2.5 text-admin-text-muted-light dark:text-admin-text-muted-dark hover:text-admin-text-light dark:hover:text-admin-text-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all group">
                                <Icon icon="material-symbols:inventory-2" className="mr-3 text-[20px] group-hover:text-orange-500 transition-colors" />
                                <span className="font-medium text-sm">Inventory</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center px-4 py-2.5 text-admin-text-muted-light dark:text-admin-text-muted-dark hover:text-admin-text-light dark:hover:text-admin-text-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all group">
                                <Icon icon="material-symbols:location-on" className="mr-3 text-[20px] group-hover:text-red-500 transition-colors" />
                                <span className="font-medium text-sm">Field Visits</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="flex items-center px-4 py-2.5 text-admin-text-muted-light dark:text-admin-text-muted-dark hover:text-admin-text-light dark:hover:text-admin-text-dark hover:bg-slate-50 dark:hover:bg-slate-800/50 rounded-xl transition-all group">
                                <Icon icon="material-symbols:bar-chart" className="mr-3 text-[20px] group-hover:text-purple-500 transition-colors" />
                                <span className="font-medium text-sm">Reports</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="p-6 border-t border-slate-100 dark:border-slate-800/50">
                <div className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity">
                    <img alt="Admin Avatar" className="w-10 h-10 rounded-full border border-slate-200 dark:border-slate-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7Ox2giaUlZKqUnuKo7WMG-Kc9VDiqoSu5Bc9xVnTMyDak2Z5yNxj4dNRT_n8Az-iugjwRwZxNo2nFC73_JnnxYHAWnEgVI0nJqwhANU7pk6dA83IvPmmpX4Ou4uZl1_N7u04P0xOuQ5VLOWrDnn8tcDkIzSxlb7g3bBSh7vNF5hLYK8viDFTvOJF3AUUksOeMVB5v6_rglZIsMzXmOJJITTl9k3Bu9eCBbG-GzjLeglfjyffeRDrEqjZp0BQ-CWvQUco-PO9tqsk" />
                    <div className="flex flex-col">
                        <span className="font-medium text-sm text-admin-text-light dark:text-admin-text-dark">Sarah Jenkins</span>
                        <span className="text-xs text-admin-text-muted-light">Admin</span>
                    </div>
                </div>
            </div>
        </aside>
    );
}
