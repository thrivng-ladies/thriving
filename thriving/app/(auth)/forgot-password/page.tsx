'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Mail } from 'lucide-react';

export default function ForgotPasswordPage() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Reset link sent to:', email);
        setIsSubmitted(true);
        // Add reset password logic here
    };

    return (
        <div className="relative flex h-screen w-full flex-row overflow-hidden group/design-root bg-background-light dark:bg-background-dark font-display">
            {/* Left Side: Visual */}
            <div className="hidden lg:flex lg:w-1/2 relative bg-gray-100 dark:bg-gray-800 h-full">
                <div className="absolute inset-0 w-full h-full">
                    <Image
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDONHoLAGgg5Q79GXzV6LuYNKwnbs9FAh_A5DyvhihJ7xCrvS_VCeOsDcMG5oYyRkFijhfBYQJINsganXCORGWVauaQnBVYlPP0XIhDcLwqSW1VJ4lJo4dNay2P0qydYHJ0zoJZ9ArGas4izyaan-nDC7oabP88SXeIVM_KTWzHGbNvtgPLyp1zNuGzNY7KGsmYNzpTP5Xq9_G9WAf063Hvg8AAKJrqWvcMVXFdAcMPkpwP05QOj09ivWp3aFjpOAo3tH2pODmP97I"
                        alt="Diverse group of young professional women collaborating and smiling in a modern office"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Brand Overlay */}
                <div className="absolute inset-0 bg-primary/40 mix-blend-multiply"></div>
                {/* Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                {/* Back to Website Link */}
                <Link
                    href="/"
                    className="absolute top-8 left-8 z-20 flex items-center gap-2 text-white/90 hover:text-white transition-all bg-black/20 hover:bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 hover:border-white/20"
                >
                    <ArrowLeft size={16} />
                    Back to Website
                </Link>

                <div className="absolute bottom-0 left-0 p-16 text-white z-10 max-w-2xl">
                    <div className="mb-6 size-12 text-white/90">
                        <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                            <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                        </svg>
                    </div>
                    <h2 className="text-5xl font-bold leading-tight mb-4 tracking-tight drop-shadow-md">Support when you need it.</h2>
                    <p className="text-xl opacity-90 font-light leading-relaxed drop-shadow-sm">We're here to help you get back on track.</p>
                </div>
            </div>

            {/* Right Side: Form */}
            <div className="flex flex-1 flex-col h-full bg-white dark:bg-background-dark overflow-y-auto">
                {/* Mobile Header / Logo */}
                <div className="lg:hidden flex items-center justify-between p-6 pb-0">
                    <div className="flex items-center gap-3 text-[#111418] dark:text-white">
                        <div className="size-8 text-primary">
                            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                                <path d="M42.4379 44C42.4379 44 36.0744 33.9038 41.1692 24C46.8624 12.9336 42.2078 4 42.2078 4L7.01134 4C7.01134 4 11.6577 12.932 5.96912 23.9969C0.876273 33.9029 7.27094 44 7.27094 44L42.4379 44Z" fill="currentColor"></path>
                            </svg>
                        </div>
                        <h2 className="text-lg font-bold leading-tight">Thriving Lives</h2>
                    </div>
                </div>

                {/* Main Content Container */}
                <div className="flex flex-col justify-center flex-1 w-full max-w-[580px] mx-auto px-6 py-8 lg:px-12">

                    <div className="mb-8">
                        <div className={`size-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 transition-all duration-300 ${isSubmitted ? 'bg-green-100 text-green-600' : ''}`}>
                            {isSubmitted ? (
                                <svg className="size-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            ) : (
                                <Mail size={24} />
                            )}
                        </div>

                        <div className="flex flex-col gap-2">
                            <p className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.02em]">
                                {isSubmitted ? "Check your email" : "Forgot Password?"}
                            </p>
                            <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                                {isSubmitted
                                    ? `We've sent a password reset link to ${email}.`
                                    : "No worries, we'll send you reset instructions."
                                }
                            </p>
                        </div>
                    </div>

                    {!isSubmitted ? (
                        <form onSubmit={handleSubmit} className="flex flex-col gap-5 animate-in fade-in slide-in-from-right-4 duration-300">
                            {/* Email Field */}
                            <div className="flex w-full flex-wrap items-end">
                                <label className="flex flex-col min-w-40 flex-1 group">
                                    <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">Email Address</p>
                                    <input
                                        name="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-4 focus:ring-primary/10 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary/80 h-12 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-all duration-200"
                                        placeholder="name@example.com"
                                        type="email"
                                        required
                                    />
                                </label>
                            </div>

                            <div className="pt-2">
                                <button
                                    type="submit"
                                    className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                                >
                                    Send Reset Link
                                </button>
                            </div>
                        </form>
                    ) : (
                        <div className="pt-2 animate-in fade-in slide-in-from-right-4 duration-300">
                            <button
                                onClick={() => setIsSubmitted(false)}
                                className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white text-base font-bold leading-normal hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                            >
                                Try another email
                            </button>
                        </div>
                    )}

                    <div className="flex justify-center items-center gap-2 py-4">
                        <Link href="/login" className="flex items-center gap-2 text-sm font-medium text-[#617589] hover:text-[#111418] dark:text-gray-400 dark:hover:text-white transition-colors">
                            <ArrowLeft size={16} />
                            Back to log in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
