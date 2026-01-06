'use client';

import React from 'react';
import { Icon } from '@iconify/react';

const stats = [
    {
        title: 'Total Beneficiaries',
        value: '1,248',
        change: '+12%',
        changeColor: 'text-green-600 bg-green-50 dark:bg-green-900/20',
        icon: 'material-symbols:groups',
        iconColor: 'bg-slate-50 dark:bg-slate-800/50 group-hover:bg-admin-primary-light dark:group-hover:bg-admin-primary/10 group-hover:text-admin-primary',
    },
    {
        title: 'Active Projects',
        value: '8',
        icon: 'material-symbols:assignment',
        iconColor: 'bg-slate-50 dark:bg-slate-800/50 group-hover:bg-admin-primary-light dark:group-hover:bg-admin-primary/10 group-hover:text-admin-primary',
    },
    {
        title: 'Donations (YTD)',
        value: '$45,200',
        change: '+5%',
        changeColor: 'text-green-600 bg-green-50 dark:bg-green-900/20',
        icon: 'material-symbols:savings',
        iconColor: 'bg-slate-50 dark:bg-slate-800/50 group-hover:bg-green-50 dark:group-hover:bg-green-500/10 group-hover:text-green-500',
    },
    {
        title: 'Hygiene Kits',
        value: '340',
        change: 'Low Stock',
        changeColor: 'text-orange-600 bg-orange-50 dark:bg-orange-900/20',
        icon: 'material-symbols:medical-services',
        iconColor: 'bg-slate-50 dark:bg-slate-800/50 group-hover:bg-orange-50 dark:group-hover:bg-orange-500/10 group-hover:text-orange-500',
    },
];

export default function DashboardStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
            {stats.map((stat, index) => (
                <div key={index} className="bg-admin-surface-light dark:bg-admin-surface-dark p-6 rounded-2xl shadow-admin-minimal border border-slate-100 dark:border-slate-800/60 flex flex-col justify-between h-40 group hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                    <div className="flex justify-between items-start">
                        <div className={`p-2 rounded-lg transition-colors text-admin-text-muted-light dark:text-admin-text-muted-dark ${stat.iconColor}`}>
                            <Icon icon={stat.icon} className="text-2xl transition-colors" />
                        </div>
                        {stat.change && (
                            <span className={`inline-flex items-center text-xs font-medium px-2 py-1 rounded-full ${stat.changeColor}`}>
                                {stat.change}
                            </span>
                        )}
                    </div>
                    <div>
                        <h3 className="text-3xl font-admin-display font-bold text-admin-text-light dark:text-admin-text-dark tracking-tight">{stat.value}</h3>
                        <p className="text-sm text-admin-text-muted-light mt-1">{stat.title}</p>
                    </div>
                </div>
            ))}
        </div>
    );
}
