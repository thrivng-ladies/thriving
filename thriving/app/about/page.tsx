import React from 'react';
import { Users, Target, Rocket, Award, ArrowRight, Download, Heart, Eye, Globe } from 'lucide-react';
import Link from 'next/link';
import Navbar from '../../components/landingui/Navbar';
import Footer from '../../components/landingui/Footer';

const AboutPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans text-slate-800">
      <Navbar />
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-20 pb-12 px-6 max-w-7xl mx-auto animate-fade-in">
        <div className="flex flex-col items-center text-center">
          <span className="text-emerald-700 font-semibold tracking-wider uppercase text-sm mb-4">
            Institutional Capacity
          </span>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 leading-tight max-w-4xl">
            Discover the Thrill of <br />
            <span className="text-emerald-700 font-extrabold italic">Sustainable Change</span>
          </h1>
          
          {/* Compass/Banner Image Placeholder */}
          <div className="mt-12 w-full max-w-5xl relative">
            <div className="aspect-[21/9] rounded-[40px] overflow-hidden shadow-2xl relative">
               {/* Replace with your actual image path */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent z-10" />
              <img
                src="/distribution1.jpg"
                alt="Thriving Lives Foundation"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 z-20 flex items-center px-12">
                <h2 className="text-white text-7xl font-black tracking-tighter opacity-90">ABOUT US</h2>
              </div>
            </div>
            {/* Floating Badge */}
            <div className="absolute -bottom-6 right-10 bg-emerald-700 text-white p-6 rounded-full shadow-xl">
              <Download className="w-6 h-6" />
            </div>
          </div>
        </div>
      </section>

      {/* --- MISSION & VISION SECTION --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-gradient-to-br from-emerald-50 to-green-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-emerald-500 p-3 rounded-full">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Mission</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              To empower girls and youth in underserved communities by providing comprehensive health education,
              vocational training, and economic opportunities that foster self-sufficiency and break the cycle of poverty.
            </p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-10 rounded-3xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-blue-500 p-3 rounded-full">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Our Vision</h3>
            </div>
            <p className="text-slate-600 leading-relaxed text-lg">
              A world where every girl and young person has the tools, knowledge, and opportunities to thrive,
              contributing to healthier, more prosperous communities across Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* --- STATS & INTRO SECTION --- */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <h3 className="text-3xl font-bold mb-6">Get to Know Thriving Lives</h3>
            <div className="grid grid-cols-2 gap-8">
              <div className="border-t-2 border-slate-100 pt-6">
                <p className="text-4xl font-bold text-emerald-700">Phase 1</p>
                <p className="text-slate-500 text-sm mt-2 uppercase tracking-wide">Operations Complete</p>
              </div>
              <div className="border-t-2 border-slate-100 pt-6">
                <p className="text-4xl font-bold text-emerald-700">100%</p>
                <p className="text-slate-500 text-sm mt-2 uppercase tracking-wide">Direct Impact Ratio</p>
              </div>
              <div className="border-t-2 border-slate-100 pt-6">
                <p className="text-4xl font-bold text-emerald-700">Health</p>
                <p className="text-slate-500 text-sm mt-2 uppercase tracking-wide">Primary Focus Area</p>
              </div>
              <div className="border-t-2 border-slate-100 pt-6">
                <p className="text-4xl font-bold text-emerald-700">Proven</p>
                <p className="text-slate-500 text-sm mt-2 uppercase tracking-wide">Field-Tested Model</p>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-50 p-10 rounded-3xl">
            <h4 className="text-xl font-bold mb-4">Our Core Identity</h4>
            <p className="text-slate-600 leading-relaxed text-lg mb-6">
              Thriving Lives Foundation Limited is dedicated to eliminating barriers to education and economic mobility. 
              We believe that health dignity is the foundation upon which independence is built. 
              By fostering community collaboration, we guide girls and youth on a path to self-sufficiency.
            </p>
            <button className="flex items-center gap-2 text-emerald-700 font-bold hover:gap-4 transition-all">
              Learn More About Our Track Record <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* --- STRATEGY SECTION (Cards) --- */}
      <section className="bg-emerald-900 py-20 px-6 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold mb-4">Strategic Evolution</h2>
            <p className="text-emerald-100 max-w-xl">From intermittent school visits to a Permanent Vocational Training Hub.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Fashion & Textile", desc: "Transitioning from manual pad-making to full-scale tailoring and design.", icon: <Award /> },
              { title: "Culinary Arts", desc: "Baking and catering training to spark local entrepreneurship.", icon: <Target /> },
              { title: "Beauty & Wellness", desc: "Professional hairdressing and cosmetology certifications.", icon: <Users /> }
            ].map((track, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-8 rounded-2xl border border-white/10 hover:bg-white/20 transition-colors">
                <div className="bg-emerald-500 w-12 h-12 rounded-lg flex items-center justify-center mb-6">
                  {track.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{track.title}</h3>
                <p className="text-emerald-100/80 leading-relaxed">{track.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TEAM SECTION --- */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Dedicated professionals committed to creating lasting change in communities.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Sarah Johnson", role: "Executive Director", desc: "Leading strategic initiatives with 15+ years in NGO management." },
              { name: "Michael Chen", role: "Program Manager", desc: "Overseeing vocational training programs and community outreach." },
              { name: "Grace Oduya", role: "Health Coordinator", desc: "Ensuring comprehensive health education and support services." }
            ].map((member, i) => (
              <div key={i} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="w-20 h-20 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">{member.name}</h3>
                <p className="text-emerald-600 font-medium text-center mb-4">{member.role}</p>
                <p className="text-slate-600 text-center leading-relaxed">{member.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section className="py-24 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Partner With Us?</h2>
        <p className="text-slate-500 mb-10 max-w-2xl mx-auto italic">
          &ldquo;To create a world free from poverty.&rdquo;
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/contact">
            <button className="bg-emerald-700 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-emerald-800 transition-colors">
              Contact Our Team
            </button>
          </Link>
          <button className="border-2 border-slate-200 px-8 py-4 rounded-full font-bold hover:bg-slate-50 transition-colors">
            Download Strategic Plan
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;