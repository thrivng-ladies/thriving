import React from "react";

export default function Newsletter() {
    return (
        <section className="py-24 bg-background-off dark:bg-background-dark border-t border-border-light dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl bg-white dark:bg-gray-800 shadow-2xl shadow-black/5 border border-border-light dark:border-gray-700 p-8 md:p-16">
                    <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 bg-gradient-to-tr from-amber-50 to-amber-100 dark:from-amber-900/20 dark:to-amber-800/20 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
                        <div className="lg:w-1/2 text-center lg:text-left space-y-6">
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                <span className="material-symbols-outlined text-sm">mail</span>
                                Newsletter
                            </div>
                            <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl lg:text-5xl">
                                Stay connected with our mission.
                            </h2>
                            <p className="text-lg text-text-secondary dark:text-gray-400 leading-relaxed">
                                Join over 15,000 supporters receiving monthly updates on our
                                impact, field stories, and upcoming events. No spam, just hope.
                            </p>
                            <div className="flex items-center justify-center lg:justify-start gap-8 pt-2">
                                <div className="flex -space-x-3">
                                    <img
                                        alt=""
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5rdzLDRb1CRlXHl52H0nRA5m6yvq1Y2HdRjb-ybiaH1hvHVIMMg28RoNddgcOix5RAONcOJOHOhEWr0EQ3mkw86EUB2HOZBAVvzFjKQeSYIi5fRafGDfHpWX4FPdb-Y65lut2_ZkNrTagBbvPefT6BurmkwvzF6AA9yyJ9ihE-kIBx78O6GFbg3f8tzz1PV6pbAzjAnbshmFlx7AvdK6-34mWsQjLbW2eGYdvmsCBJRDmrhajzvZXAX_jWhrbsp9YHQmRai5lQBI"
                                    />
                                    <img
                                        alt=""
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCDhnS6KPaw5gnKO0iY-kB57tHjt2vlb3sLqMy1Sh4eFndRKcwJC0bKWCBcM1hy_ESPkrimyxxcA1EU1EXYxHZel8z1pO3pslje8os3KoqAZmV3XQsZmVobwUQ-ls6He3Nc1ldQiarJx9VnVsjgAsihbXk21Q7aAPFN-6n-Pk_QtebPxuuX4vTWq0-9qlsfijamZMWNgeIj5yEu6YQxMLpCRDmnd5iJRdgd9wyfzCgGFiBtL_PhOvqWWbV8DjS6u1iQ5fLrgM0aEc"
                                    />
                                    <img
                                        alt=""
                                        className="inline-block h-10 w-10 rounded-full ring-2 ring-white dark:ring-gray-800 object-cover"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCD_v5okTYn51FiWZPsKkwL2wIlIkza3B7aUAxgv_d_uqsEVI1QaGx60Dk17WuTTQZCn_Ribq6Z2Sk6YkYr_j1ECE19RUsgTYvgaSxSDvmS-CLH2f2mn8G5Kpl2Egfdn2nmEKizbxI_qiX-CuTqBZ7hvSOVg4tiUreTfuyGxJQBODU7-OXuDF8fsgpBCNrlAEOTV4_1RfyBteHCx1NNi2Fp4tukEGt2G28B1Lx-c5Xl3Ko-5liAjqj4Bp-lHkLg2eZzgUbOtXagog"
                                    />
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-800 text-xs font-bold text-gray-500 dark:text-gray-300">
                                        +2k
                                    </div>
                                </div>
                                <div className="text-sm font-medium text-text-secondary dark:text-gray-400">
                                    Joined this month
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 w-full">
                            <form className="flex flex-col sm:flex-row gap-4 w-full">
                                <div className="flex-grow">
                                    <label className="sr-only" htmlFor="email">
                                        Email address
                                    </label>
                                    <input
                                        className="block w-full rounded-full border-0 px-6 py-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-lg dark:bg-gray-900/50 dark:text-white dark:ring-gray-700 dark:focus:ring-primary transition-all"
                                        id="email"
                                        name="email"
                                        placeholder="Enter your email address"
                                        required
                                        type="email"
                                    />
                                </div>
                                <button
                                    className="flex-none rounded-full bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary hover:scale-105 active:scale-95 transition-all duration-200"
                                    type="submit"
                                >
                                    Subscribe
                                </button>
                            </form>
                            <p className="mt-6 text-sm text-center lg:text-left text-text-secondary dark:text-gray-500">
                                By subscribing, you agree to our{" "}
                                <a
                                    className="font-semibold text-primary hover:text-primary-dark underline decoration-primary/30 underline-offset-4"
                                    href="#"
                                >
                                    Privacy Policy
                                </a>
                                . We respect your data.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
