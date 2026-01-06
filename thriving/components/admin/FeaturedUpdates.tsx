'use client';

import React from 'react';
import { Icon } from '@iconify/react';
import Link from 'next/link';

const updates = [
    {
        title: '10,000 Girls Reached',
        date: 'Oct 25, 2023',
        tag: 'Achievement',
        tagColor: 'bg-admin-primary',
        description: 'Our "Education for All" initiative has successfully enrolled over 10,000 girls across 5 rural districts.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7XJ7MdfNredd00VyVnKj4anoZD3vH0ARgzBtrPzl0Zq2RnmxG4RjX-I1XzPZOq_BPtLmDbZokxVHTgqgZc78ItiYQQIa7PRCNQUkWSjithdvfu-mtkiuOih8veXS8h-DpOEwCZkYV8_aHXrTEH_cO_OXqkdszzfQWxlb1UVFP2PWKFx9spDeENSXgM2YejBLhxs6uBZdavDlHn87IFw-HL9RE9OyyNlSGYOGtPcLFfAClWKKP1Z8-DimL963-rLapYyEMwvsiaoQ',
        action: 'Watch Video Report',
        icon: 'play-circle',
        hoverBorder: 'group-hover:border-admin-primary',
        hoverBg: 'group-hover:bg-admin-primary/20',
    },
    {
        title: 'New Global Grant Secured',
        date: 'Oct 20, 2023',
        tag: 'Partnership',
        tagColor: 'bg-cyan-500',
        description: 'Thriving Lives Foundation has been awarded a $50k grant from Global Giving Partners to expand operations.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDlY7R3SAwoMzkmKWbsmpBMA3xypwvr1QyaZhnTNA88kQ4RwRRYsG6wZkp3joiOYe8Ox8PP7eZEEBR-P7d9OF6bi8yJZMyHnJ-HuS2lhTo0pNFcV0dTfUPMMqzE-hPXHaq56_AKfGEMavOD7sVPpD_ZWHBhzxgDbzP7jXdgIEXrJ6n3fnwCZSGc_tLK_LUS9-M5uxzmfd9J-ses-rKMQEuGa5gVxCJbtz1MiE9MZMbYC37yu_gfKOutvMR5Umq7aMcF-jdrfSbGun8',
        action: 'Read Press Release',
        icon: 'article',
        hoverBorder: 'group-hover:border-cyan-400',
        hoverBg: 'group-hover:bg-cyan-500/20',
    },
    {
        title: 'Distribution in Jinja',
        date: 'Yesterday',
        tag: 'Field Activity',
        tagColor: 'bg-amber-500',
        description: 'Team Alpha completed the distribution of 500 sanitary kits to 3 partner schools in the region.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAAzvgP9XT8JblBRa2w2YOIUQibrLJNK1v1M-eaHIvw_8aUp2QGrLWUkSJak4TYKpEp558uITxOgMcl4MIUbrqxYALt8mty4ERAkOysamitTcDyC0iYnCXh2XgZCFF1RMQr9c_ikkZfJG5js6m3YC35qH9MrcFbigMTj51YLffSCNFwGXPHgpgGJi6YSEvLe_7N62otB0NiEN0F0i3MFy2uHghyHZAYMW3IVoSVoGhKeVs_EddIwwYiUs4KW2S2Yk9EnCFnxnHF1zA',
        action: 'View Gallery',
        icon: 'photo-library',
        hoverBorder: 'group-hover:border-amber-400',
        hoverBg: 'group-hover:bg-amber-500/20',
    },
    {
        title: 'Annual Fundraising Gala',
        date: 'Nov 12, 2023',
        tag: 'Event',
        tagColor: 'bg-purple-500',
        description: 'Join us for an evening of celebration and support at the City Hall. Reserve your seats now.',
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCoJQXivSJVMeSqhRmVGQDtf9E74g9Mok3I-YA3YXMRp7Vqvoa84OPzBUdKNQaOKw478iyJAyeGYgekghNmXhfwMWJT5iZhjdyveujM5lNZcBg7isDrFq2HduL3V3n_Y_PbrxG_Z2E7ww4zs498Ou5HuNn9iUBU8xxrtciDUpnc8MUT8RBdZ9NPzWY5sQ3jbgSgJZm4qFHcTOjvsDX7peGOognMlhLcFSqQVTl5qB2emQ1b1TRWtlEVxzWOlP-N0qTHDjSynmu9kSE',
        action: 'RSVP Now',
        icon: 'calendar-today',
        hoverBorder: 'group-hover:border-purple-400',
        hoverBg: 'group-hover:bg-purple-500/20',
    },
];

export default function FeaturedUpdates() {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
        const interval = setInterval(() => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
                // If we've reached the end, scroll back to start, otherwise scroll one item width (approx 324px or 524px with gap)
                // For smoother looping, we could just increment.
                // Simple auto-scroll:
                if (scrollLeft + clientWidth >= scrollWidth - 10) {
                    scrollContainerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollContainerRef.current.scrollBy({ left: 320, behavior: 'smooth' });
                }
            }
        }, 5000); // Auto-scroll every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -320 : 320;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <div className="mb-14">
            <div className="flex justify-between items-end mb-6 px-1">
                <div>
                    <h2 className="text-xl font-admin-display font-semibold text-admin-text-light dark:text-admin-text-dark tracking-tight">Featured Updates</h2>
                    <p className="text-sm text-admin-text-muted-light dark:text-admin-text-muted-dark font-light mt-1 hidden sm:block">Highlights from the field and recent achievements.</p>
                </div>
                <div className="flex space-x-2">
                    <button
                        onClick={() => scroll('left')}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-admin-surface-dark border border-slate-200 dark:border-slate-700 hover:border-admin-primary text-admin-text-muted-light transition-colors shadow-sm cursor-pointer"
                    >
                        <Icon icon="material-symbols:arrow-back" className="text-sm" />
                    </button>
                    <button
                        onClick={() => scroll('right')}
                        className="w-9 h-9 flex items-center justify-center rounded-full bg-white dark:bg-admin-surface-dark border border-slate-200 dark:border-slate-700 hover:border-admin-primary text-admin-text-muted-light transition-colors shadow-sm cursor-pointer"
                    >
                        <Icon icon="material-symbols:arrow-forward" className="text-sm" />
                    </button>
                </div>
            </div>
            <div
                ref={scrollContainerRef}
                className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory gap-6 pb-6"
            >
                {updates.map((update, index) => (
                    <div key={index} className="snap-center shrink-0 w-[300px] md:w-[500px] h-[300px] relative rounded-3xl overflow-hidden shadow-md group border border-slate-100 dark:border-slate-800/50">
                        <img alt={update.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={update.image} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                        <div className="absolute bottom-0 left-0 p-8 w-full">
                            <div className="flex items-center gap-3 mb-3">
                                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-white ${update.tagColor} rounded-full backdrop-blur-md bg-opacity-90 shadow-admin-glow`}>{update.tag}</span>
                                <span className="text-xs text-slate-300 font-medium">{update.date}</span>
                            </div>
                            <h3 className="text-2xl font-admin-display font-bold text-white leading-tight mb-2 group-hover:text-admin-primary-light transition-colors">{update.title}</h3>
                            <p className="text-sm text-slate-200 line-clamp-2 font-light mb-5 opacity-90 max-w-sm">
                                {update.description}
                            </p>
                            <Link href="#" className={`inline-flex items-center px-4 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 rounded-full text-white text-xs font-semibold tracking-wide transition-all ${update.hoverBorder} ${update.hoverBg}`}>
                                <Icon icon={`material-symbols:${update.icon}`} className="text-base mr-2" /> {update.action}
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
