import React from "react";

export default function FAQ() {
    return (
        <section className="py-24 bg-white dark:bg-gray-900 border-t border-border-light dark:border-gray-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-text-main dark:text-white sm:text-4xl mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-text-secondary dark:text-gray-400">
                        Find answers to common questions about our mission and how you can
                        get involved.
                    </p>
                </div>
                <div className="max-w-3xl mx-auto space-y-4">
                    <details className="group bg-background-off dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border-light dark:border-gray-700 open:border-primary/50 dark:open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-bold text-text-main dark:text-white pr-8">
                                How does the Thriving Lives Foundation allocate donations?
                            </h3>
                            <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                            <p className="leading-relaxed">
                                We pride ourselves on transparency. 85% of all donations go
                                directly to our educational and vocational programs, including
                                scholarships, materials, and training workshops. The remaining
                                15% covers administrative costs and fundraising efforts to
                                ensure our foundation's sustainability.
                            </p>
                        </div>
                    </details>
                    <details className="group bg-background-off dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border-light dark:border-gray-700 open:border-primary/50 dark:open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-bold text-text-main dark:text-white pr-8">
                                Can I volunteer or intern with the foundation?
                            </h3>
                            <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                            <p className="leading-relaxed">
                                Yes! We welcome passionate individuals who want to contribute
                                their time and skills. We offer remote and on-site volunteer
                                opportunities, as well as seasonal internships for students.
                                Please visit our 'Get Involved' page to view current openings
                                and submit an application.
                            </p>
                        </div>
                    </details>
                    <details className="group bg-background-off dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border-light dark:border-gray-700 open:border-primary/50 dark:open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-bold text-text-main dark:text-white pr-8">
                                What specific programs do you offer for young women?
                            </h3>
                            <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                            <p className="leading-relaxed">
                                Our core programs focus on two pillars: Educational Access and
                                Economic Mobility. This includes full tuition scholarships for
                                secondary and higher education, digital literacy bootcamps, and
                                mentorship programs that pair young women with industry
                                professionals in STEM and business sectors.
                            </p>
                        </div>
                    </details>
                    <details className="group bg-background-off dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border-light dark:border-gray-700 open:border-primary/50 dark:open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-bold text-text-main dark:text-white pr-8">
                                How can my company partner with Thriving Lives?
                            </h3>
                            <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                            <p className="leading-relaxed">
                                We offer several partnership tiers for organizations, ranging
                                from sponsoring specific cohorts of students to funding
                                infrastructure projects like our new Vocational Hub. Partners
                                receive detailed impact reports and opportunities for employee
                                engagement. Contact our partnerships team to discuss a tailored
                                collaboration.
                            </p>
                        </div>
                    </details>
                    <details className="group bg-background-off dark:bg-gray-800/50 rounded-2xl overflow-hidden border border-border-light dark:border-gray-700 open:border-primary/50 dark:open:border-primary/50 transition-colors duration-300">
                        <summary className="flex items-center justify-between p-6 cursor-pointer select-none">
                            <h3 className="text-lg font-bold text-text-main dark:text-white pr-8">
                                Is my donation tax-deductible?
                            </h3>
                            <span className="material-symbols-outlined text-text-secondary dark:text-gray-400 transition-transform duration-300 group-open:rotate-180 group-open:text-primary">
                                expand_more
                            </span>
                        </summary>
                        <div className="px-6 pb-6 text-text-secondary dark:text-gray-300">
                            <p className="leading-relaxed">
                                Thriving Lives Foundation Limited is a registered non-profit
                                organization. Donations are tax-deductible to the extent allowed
                                by law in your jurisdiction. We will provide an official tax
                                receipt for all contributions over $20 via email immediately
                                after your donation is processed.
                            </p>
                        </div>
                    </details>
                </div>
            </div>
        </section>
    );
}
