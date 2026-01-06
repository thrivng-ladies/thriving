'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import { useTheme } from 'next-themes';
import Link from 'next/link';
import { useAuth } from '@/components/auth-provider';

export default function TopBar() {
    const { theme, setTheme } = useTheme();
    const { user, logout } = useAuth();

    return (
        <>
            {/* Mobile Top Bar */}
            <div className="lg:hidden flex justify-between items-center p-5 bg-admin-surface-light dark:bg-admin-surface-dark/80 backdrop-blur-md sticky top-0 z-30 border-b border-slate-100 dark:border-slate-800">
                <div className="flex items-center space-x-2">
                    <Icon icon="material-symbols:volunteer-activism" className="text-admin-primary text-2xl" />
                    <span className="font-admin-display font-semibold text-lg text-admin-text-light dark:text-admin-text-dark">Thriving Lives</span>
                </div>
                <button className="text-admin-text-light dark:text-admin-text-dark p-1">
                    <Icon icon="material-symbols:menu" width="24" height="24" />
                </button>
            </div>

            {/* Desktop Top Bar */}
            <header className="hidden lg:flex items-center justify-between px-8 py-5 bg-white/80 dark:bg-admin-surface-dark/80 backdrop-blur-md sticky top-0 z-20 border-b border-slate-100 dark:border-slate-800 mb-8">
                <div className="flex-1 max-w-lg">
                    <div className="relative">
                        <Icon icon="material-symbols:search" className="absolute left-3 top-1/2 -translate-y-1/2 text-admin-text-muted-light text-xl" />
                        <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border-none focus:ring-2 focus:ring-admin-primary/50 text-sm text-admin-text-light dark:text-admin-text-dark placeholder-admin-text-muted-light"
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button
                        className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-admin-text-muted-light transition-colors"
                        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    >
                        <Icon icon="material-symbols:dark-mode" className="text-xl" />
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-admin-text-muted-light transition-colors relative">
                        <Icon icon="material-symbols:notifications" className="text-xl" />
                        <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-admin-surface-dark"></span>
                    </button>
                    <button className="p-2 rounded-full hover:bg-slate-50 dark:hover:bg-slate-800 text-admin-text-muted-light transition-colors">
                        <Icon icon="material-symbols:settings" className="text-xl" />
                    </button>
                    <div className="h-8 w-px bg-slate-200 dark:bg-slate-700 mx-2"></div>

                    {/* User Profile Dropdown */}
                    <div className="relative group/profile">
                        <div className="flex items-center gap-3 cursor-pointer hover:opacity-80">
                            <div className="text-right hidden xl:block">
                                <p className="text-sm font-medium text-admin-text-light dark:text-admin-text-dark">{user?.name || 'User'}</p>
                                <p className="text-xs text-admin-text-muted-light">{user?.role || 'Guest'}</p>
                            </div>
                            <img
                                src={user?.avatar || "https://ui-avatars.com/api/?name=User&background=random"}
                                alt="Profile"
                                className="w-9 h-9 rounded-full border border-slate-200 dark:border-slate-700 object-cover"
                            />
                        </div>

                        {/* Dropdown Menu */}
                        <div className="absolute right-0 top-full mt-2 w-48 bg-white dark:bg-admin-surface-dark rounded-xl shadow-lg border border-slate-100 dark:border-slate-800 opacity-0 invisible group-hover/profile:opacity-100 group-hover/profile:visible transition-all duration-200 z-50 transform origin-top-right">
                            <div className="p-2">
                                <Link href="#" className="flex items-center gap-3 px-3 py-2 text-sm text-admin-text-light dark:text-admin-text-dark hover:bg-slate-50 dark:hover:bg-slate-800 rounded-lg">
                                    <Icon icon="material-symbols:person" className="text-lg" />
                                    Profile
                                </Link>
                                <button
                                    onClick={logout}
                                    className="w-full flex items-center gap-3 px-3 py-2 text-sm text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 rounded-lg cursor-pointer transition-colors"
                                >
                                    <Icon icon="material-symbols:logout" className="text-lg" />
                                    Log Out
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            {/* Page Title Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 px-1">
                <div>
                    <h1 className="text-3xl font-admin-display font-semibold text-admin-text-light dark:text-admin-text-dark tracking-tight">Dashboard</h1>
                    <p className="text-admin-text-muted-light dark:text-admin-text-muted-dark mt-2 text-sm font-light">Welcome back, {user?.name?.split(' ')[0] || 'User'}. Here's your daily overview.</p>
                </div>
                <div className="flex items-center gap-3">
                    <button className="hidden md:flex items-center justify-center px-4 h-10 rounded-full bg-admin-text-light dark:bg-white text-white dark:text-slate-900 font-medium text-sm hover:opacity-90 transition-all shadow-admin-minimal cursor-pointer">
                        <Icon icon="material-symbols:add" className="text-[18px] mr-2" />
                        New Entry
                    </button>
                </div>
            </div>
        </>
    );
}
