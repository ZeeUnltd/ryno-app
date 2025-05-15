"use client";
import React from "react";
import WhyChooseRyno from "@/components/sections/WhyChooseRyno";
import Hero from "@/components/sections/Hero";
import AppNav from "@/components/sections/NavSection";
import SolutionsSection from "@/components/sections/SolutionsSections";
import ToolsSection from "@/components/sections/ToolsSections";
import InfrastructureSection from "@/components/sections/InfrastructureSection";
import Footer from "@/components/NewFooter";
import ContactSection from "@/components/sections/ContactSection";
export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white snap-y snap-mandatory overflow-y-scroll">
      {/* Navigation - Updated with motion and dynamic background */}
      <div className="snap-start">
        <AppNav />
      </div>

      {/* Hero Section - Update text color to be visible on blue background */}
      <div className="snap-start">
        <Hero />
      </div>

      {/* Why Choose Ryno */}
      <div className="snap-start">
        <WhyChooseRyno />
      </div>

      {/* Features Section */}
      {/* <FeaturesSection /> */}

      {/* Solutions Section */}
      <div className="snap-start">
        <SolutionsSection />
      </div>

      <div className="snap-start">
        <ToolsSection />
      </div>

      <div className="snap-start">
        <InfrastructureSection />
      </div>

      <div className="snap-start">
        <ContactSection />
      </div>
      <div className="snap-start">
        <Footer />
      </div>
    </main>  );
}
