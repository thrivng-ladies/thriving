import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function TermsPage() {
    return (
        <div className="min-h-screen bg-background-light dark:bg-background-dark font-display p-6 lg:p-12">
            <div className="max-w-4xl mx-auto">
                <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary-dark mb-8">
                    <ArrowLeft size={20} />
                    Back to Home
                </Link>
                <h1 className="text-4xl font-bold text-[#111418] dark:text-white mb-6">Terms of Service</h1>
                <div className="prose dark:prose-invert max-w-none text-gray-600 dark:text-gray-300">
                    <p>Last updated: December 31, 2025</p>
                    <p>Welcome to Thriving Lives Foundation. Please read these terms carefully before using our services.</p>

                    <h3>1. Introduction</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                    <h3>2. User Accounts</h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                    <h3>3. Privacy Policy</h3>
                    <p>Please refer to our <Link href="/privacy" className="text-primary underline">Privacy Policy</Link> for information on how we collect, use, and disclose information from our users.</p>

                    <h3>4. Limitation of Liability</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
                </div>
            </div>
        </div>
    );
}
