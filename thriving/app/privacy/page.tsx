import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function PrivacyPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-display p-6 lg:p-12">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-[#111418] dark:text-white mb-6">Privacy Policy</h1>
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>Last updated: December 31, 2025</p>
                    <p>Thriving Lives Foundation depends on the trust of its users. This policy outlines how we handle your data.</p>

                    <h3>1. Information We Collect</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

                    <h3>2. How We Use Information</h3>
                    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                    <h3>3. Data Sharing</h3>
                    <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h3>4. Your Rights</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                </div>
            </div>
        </div>
    );
}
