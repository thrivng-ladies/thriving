import React from "react";
import HeroSection from "@/components/landingui/HeroSection";
import ImpactStats from "@/components/landingui/ImpactStats";
import CoreMission from "@/components/landingui/CoreMission";
import PillarsOfImpact from "@/components/landingui/PillarsOfImpact";
import VocationalHub from "@/components/landingui/VocationalHub";
import PartnersTestimonials from "@/components/landingui/PartnersTestimonials";
import FAQ from "@/components/landingui/FAQ";
import Newsletter from "@/components/landingui/Newsletter";
import CTASection from "@/components/landingui/CTASection";

export default function Home() {
    return (
        <div className="min-h-screen relative">
            <HeroSection />
            <ImpactStats />
            <CoreMission />
            <PillarsOfImpact />
            <VocationalHub />
            <PartnersTestimonials />
            <FAQ />
            <Newsletter />
            <CTASection />
        </div>
    );
}