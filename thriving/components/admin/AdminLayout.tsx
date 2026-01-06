'use client';

import React from 'react';
import Sidebar from './Sidebar';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex h-screen overflow-hidden bg-white dark:bg-admin-background-dark font-admin-sans">
            <Sidebar />
            <main className="flex-1 overflow-x-hidden overflow-y-auto w-full transition-colors duration-300">
                {/* The padding will be handled by the children or wrapper inside page.tsx */}
                {children}
            </main>
        </div>
    );
}
