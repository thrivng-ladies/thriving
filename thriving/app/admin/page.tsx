import React from 'react';
import AdminLayout from '@/components/admin/AdminLayout';
import TopBar from '@/components/admin/TopBar';
import DashboardStats from '@/components/admin/DashboardStats';
import FeaturedUpdates from '@/components/admin/FeaturedUpdates';
import FundsChart from '@/components/admin/FundsChart';
import DemographicsChart from '@/components/admin/DemographicsChart';
import ProjectImpact from '@/components/admin/ProjectImpact';
import RecentActivity from '@/components/admin/RecentActivity';

export default function AdminPage() {
    return (
        <AdminLayout>
            <TopBar />

            <div className="p-6 lg:p-12">
                <DashboardStats />

                <FeaturedUpdates />

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-14">
                    <FundsChart />
                    <DemographicsChart />
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-8">
                    <ProjectImpact />
                    <RecentActivity />
                </div>

                <footer className="mt-16 text-center pb-8 border-t border-slate-100 dark:border-slate-800/50 pt-8">
                    <p className="text-xs text-admin-text-muted-light dark:text-admin-text-muted-dark">© 2023 Thriving Lives Foundation. Empowering Communities.</p>
                </footer>
            </div>
        </AdminLayout>
    );
}
