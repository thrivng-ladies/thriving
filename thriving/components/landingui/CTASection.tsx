import React from "react";

export default function CTASection() {
    return (
        <section className="relative py-32 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-primary">
                <div
                    className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage:
                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA7ERaDqzzHVAiC3XuD6voiFDx3qgjRM2ISE3PRRHubhWC5060fSBTzulNLdlKQuC_F5cPsrV-A5TBQS9f6NADPy7Eg4lpCnGtHahe7oHRD9m23DuHgromXPTOYVx67iAX1tE-eLcJEanEwy1QiOJs4R9tTmn8zYdY9D2dJJNDFZO77ugSUYUJ1hB3VjS6Ecd6z-x7NH0pNNfT4tif_42j5CKyF9RNS-XaR_vOQgFuZKVBcsiN1J46_Li0wFyF1TC5g6fVY7NDDwsk')",
                    }}
                ></div>
                <div className="absolute top-0 right-0 w-[50vw] h-full bg-gradient-to-l from-blue-400/20 to-transparent skew-x-12"></div>
            </div>
            <div className="container relative z-10 mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-md">
                    Be the catalyst for change.
                </h2>
                <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-12 font-light">
                    Join a global movement dedicated to unlocking human potential. Your
                    partnership builds schools, trains leaders, and transforms lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <button className="h-16 px-10 rounded-full bg-white text-primary text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300">
                        Donate Now
                    </button>
                    <button className="h-16 px-10 rounded-full bg-transparent border-2 border-white text-white text-lg font-bold hover:bg-white/10 transition-all duration-300">
                        Become a Partner
                    </button>
                </div>
            </div>
        </section>
    );
}
