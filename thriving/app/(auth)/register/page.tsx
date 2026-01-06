'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Eye, EyeOff, ArrowLeft, Check, Apple } from 'lucide-react';

export default function RegisterPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleNext = () => {
        if (formData.fullName && formData.email) {
            setStep(2);
        } else {
            const form = document.getElementById('register-form') as HTMLFormElement;
            form.reportValidity();
        }
    };

    const handleBack = () => {
        setStep(1);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }
        console.log('Form submitted:', formData);
        // Add registration logic here
    };

    return (
        <div className="relative flex h-screen w-full flex-row-reverse overflow-hidden group/design-root bg-background-light dark:bg-background-dark font-display">
            {/* Right Side: Inspiring Visual */}
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
                    className="absolute top-8 right-8 z-20 flex items-center gap-2 text-white/90 hover:text-white transition-all bg-black/20 hover:bg-black/30 backdrop-blur-md px-5 py-2.5 rounded-full text-sm font-medium border border-white/10 hover:border-white/20"
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
                    <h2 className="text-5xl font-bold leading-tight mb-4 tracking-tight drop-shadow-md">Empowering the next generation of leaders.</h2>
                    <p className="text-xl opacity-90 font-light leading-relaxed drop-shadow-sm">Join Thriving Lives Foundation and help us eliminate barriers to education and economic mobility.</p>
                </div>
            </div>

            {/* Left Side: Registration Form */}
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
                        <div className="flex flex-col gap-2">
                            <p className="text-[#111418] dark:text-white text-3xl font-black leading-tight tracking-[-0.02em]">Create your Account</p>
                            <p className="text-[#617589] dark:text-gray-400 text-base font-normal leading-normal">
                                {step === 1 ? "Start your journey with us today." : "Secure your account."}
                            </p>
                        </div>

                        {/* Numbered Step Tracker */}
                        <div className="flex items-center gap-3 mt-6">
                            <div className={`flex items-center justify-center size-8 rounded-full text-sm font-bold transition-all duration-300 ${step >= 1 ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/20' : 'bg-gray-100 text-gray-500'}`}>
                                1
                            </div>
                            <div className={`h-1 flex-1 rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-primary' : 'bg-gray-100 dark:bg-gray-800'}`}></div>
                            <div className={`flex items-center justify-center size-8 rounded-full text-sm font-bold transition-all duration-300 ${step >= 2 ? 'bg-primary text-white shadow-lg shadow-primary/30 ring-2 ring-primary/20' : 'bg-gray-100 dark:bg-gray-800 text-gray-400'}`}>
                                2
                            </div>
                        </div>
                    </div>

                    <form id="register-form" onSubmit={handleSubmit} className="flex flex-col gap-5">

                        {step === 1 && (
                            <>
                                {/* Social Logins */}
                                <div className="grid grid-cols-2 gap-4 animate-in fade-in slide-in-from-right-4 duration-300">
                                    <button type="button" className="flex items-center justify-center gap-2.5 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-300 transition-all duration-200 group">
                                        <svg className="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.766 12.2764C23.766 11.4607 23.6999 10.6406 23.5588 9.83807H12.24V14.4591H18.7217C18.4528 15.9494 17.5885 17.2678 16.323 18.1056V21.1039H20.19C22.4608 19.0139 23.766 15.9274 23.766 12.2764Z" fill="#4285F4" />
                                            <path d="M12.2401 24.0008C15.4766 24.0008 18.2059 22.9382 20.1945 21.1039L16.3275 18.1055C15.2517 18.8375 13.8627 19.252 12.2445 19.252C9.11388 19.252 6.45946 17.1399 5.50705 14.3003H1.5166V17.3912C3.55371 21.4434 7.7029 24.0008 12.2401 24.0008Z" fill="#34A853" />
                                            <path d="M5.50253 14.3003C5.00236 12.8099 5.00236 11.1961 5.50253 9.70575V6.61481H1.51649C-0.18551 10.0056 -0.18551 14.0004 1.51649 17.3912L5.50253 14.3003Z" fill="#FBBC05" />
                                            <path d="M12.2401 4.74966C13.9509 4.7232 15.6044 5.36697 16.8434 6.54867L20.2695 3.12262C18.1001 1.0855 15.2208 -0.034466 12.2401 0.000808666C7.7029 0.000808666 3.55371 2.55822 1.5166 6.61481L5.50264 9.70575C6.45064 6.86173 9.10947 4.74966 12.2401 4.74966Z" fill="#EA4335" />
                                        </svg>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">Google</span>
                                    </button>
                                    <button type="button" className="flex items-center justify-center gap-2.5 h-12 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-750 hover:border-gray-300 transition-all duration-200 group">
                                        <svg className="size-5 text-black dark:text-white" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2ZM15.5 17L14.5 15.5H9.5L8.5 17H6.5L11 10H13L17.5 17H15.5Z" fillOpacity="0" />
                                            <path d="M15.05 13.95C15.05 12.18 16.51 11.23 16.58 11.19C15.71 9.94 14.39 9.8 13.92 9.78C12.78 9.67 11.66 10.45 11.08 10.45C10.49 10.45 9.58 9.79 8.63 9.8C7.4 9.82 5.76 10.74 5.12 12.96C3.83 17.43 6.77 21.68 8.02 21.63C8.63 21.6 9.19 21.23 9.96 21.23C10.72 21.23 11.2 21.63 11.83 21.62C13.12 21.6 13.92 20.45 14.54 19.54C15.26 18.48 15.56 17.45 15.58 17.39C15.57 17.38 13.29 16.51 13.29 13.78C13.29 11.43 15.05 10.37 15.05 10.37C15.05 10.37 13.56 8.35 12.08 9.1L12.07 9.11C11.58 9.38 10.96 9.38 10.48 9.11L10.47 9.1C8.28 7.9 6.2 9.98 6.2 9.98C6.2 9.98 3 13.18 3 13.18C3 13.18 6.2 16.38 6.2 16.38C6.2 16.38 8.28 18.46 10.47 17.26C10.96 16.99 11.58 16.99 12.07 17.26C14.26 18.46 16.34 16.38 16.34 16.38C16.34 16.38 19.54 13.18 19.54 13.18C19.54 13.18 16.34 9.98 16.34 9.98C16.34 9.98 14.26 7.9 12.07 9.1C11.69 9.31 11.24 9.39 10.82 9.32C11.66 8.32 12.16 6.94 12.02 5.58C10.85 5.63 9.66 6.36 8.81 7.35C8.04 8.23 7.42 9.53 7.57 10.83C7.57 10.83 7.58 10.83 7.58 10.83C8.84 10.83 10.36 9.87 11.22 8.79C12.08 7.7 12.56 6.07 12.02 5.58Z" fill="currentColor" />
                                        </svg>
                                        <span className="text-sm font-medium text-[#111418] dark:text-white group-hover:text-black dark:group-hover:text-white transition-colors">Apple</span>
                                    </button>
                                </div>

                                <div className="relative flex items-center gap-3 py-2 animate-in fade-in slide-in-from-right-4 duration-300 delay-50">
                                    <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
                                    <span className="text-[#64748b] dark:text-gray-500 text-xs font-medium uppercase tracking-wider">Or continue with email</span>
                                    <div className="h-px flex-1 bg-gray-200 dark:bg-gray-700"></div>
                                </div>

                                {/* Full Name Field */}
                                <div className="flex w-full flex-wrap items-end animate-in fade-in slide-in-from-right-4 duration-300 delay-75">
                                    <label className="flex flex-col min-w-40 flex-1 group">
                                        <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">Full Name</p>
                                        <input
                                            name="fullName"
                                            value={formData.fullName}
                                            onChange={handleChange}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-4 focus:ring-primary/10 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary/80 h-12 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-all duration-200"
                                            placeholder="Enter your full name"
                                            type="text"
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Email Field */}
                                <div className="flex w-full flex-wrap items-end animate-in fade-in slide-in-from-right-4 duration-300 delay-100">
                                    <label className="flex flex-col min-w-40 flex-1 group">
                                        <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">Email Address</p>
                                        <input
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-4 focus:ring-primary/10 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary/80 h-12 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-all duration-200"
                                            placeholder="name@example.com"
                                            type="email"
                                            required
                                        />
                                    </label>
                                </div>

                                <div className="pt-2 animate-in fade-in slide-in-from-right-4 duration-300 delay-150">
                                    <button
                                        type="button"
                                        onClick={handleNext}
                                        className="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                                    >
                                        Next
                                    </button>
                                </div>
                            </>
                        )}

                        {step === 2 && (
                            <>
                                {/* Password Field */}
                                <div className="flex w-full flex-wrap items-end animate-in fade-in slide-in-from-right-4 duration-300">
                                    <label className="flex flex-col min-w-40 flex-1 group">
                                        <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">Password</p>
                                        <div className="relative">
                                            <input
                                                name="password"
                                                value={formData.password}
                                                onChange={handleChange}
                                                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-4 focus:ring-primary/10 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary/80 h-12 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-all duration-200 pr-12"
                                                placeholder="••••••••"
                                                type={showPassword ? "text" : "password"}
                                                required
                                                minLength={8}
                                            />
                                            <button
                                                type="button"
                                                onClick={() => setShowPassword(!showPassword)}
                                                className="absolute right-0 top-0 h-full px-4 flex items-center justify-center text-[#617589] hover:text-primary transition-colors"
                                            >
                                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                                            </button>
                                        </div>
                                    </label>
                                </div>

                                {/* Confirm Password Field */}
                                <div className="flex w-full flex-wrap items-end animate-in fade-in slide-in-from-right-4 duration-300 delay-75">
                                    <label className="flex flex-col min-w-40 flex-1 group">
                                        <p className="text-[#111418] dark:text-white text-sm font-medium leading-normal pb-2 group-focus-within:text-primary transition-colors">Confirm Password</p>
                                        <input
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#111418] dark:text-white focus:outline-0 focus:ring-4 focus:ring-primary/10 border border-[#dbe0e6] dark:border-gray-700 bg-white dark:bg-gray-800 focus:border-primary/80 h-12 placeholder:text-[#617589] p-[15px] text-base font-normal leading-normal transition-all duration-200"
                                            placeholder="••••••••"
                                            type="password"
                                            required
                                        />
                                    </label>
                                </div>

                                {/* Submit Button */}
                                <div className="pt-2 flex gap-3 animate-in fade-in slide-in-from-right-4 duration-300 delay-100">
                                    <button
                                        type="button"
                                        onClick={handleBack}
                                        className="flex-1 cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-gray-100 dark:bg-gray-800 text-[#111418] dark:text-white text-base font-bold leading-normal hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="submit"
                                        className="flex-[2] cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-4 bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] hover:bg-blue-600 active:bg-blue-700 transition-all duration-200 shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                                    >
                                        Create Account
                                    </button>
                                </div>
                            </>
                        )}

                        {/* Login Link */}
                        <div className="flex justify-center items-center gap-2 py-2">
                            <p className="text-[#617589] dark:text-gray-400 text-sm font-normal">Already have an account?</p>
                            <Link href="/login" className="text-primary text-sm font-medium hover:text-blue-600 transition-colors">
                                Log in
                            </Link>
                        </div>
                    </form>

                    {/* Footer Terms */}
                    <p className="mt-6 text-center text-xs text-[#617589]/60 dark:text-gray-500">
                        By registering, you agree to our <Link href="/terms" className="underline hover:text-primary">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-primary">Privacy Policy</Link>.
                    </p>
                </div>
            </div>
        </div>
    );
}
