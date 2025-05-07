"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import WhyChooseRyno from "@/components/sections/WhyChooseRyno";
import Hero from "@/components/sections/Hero";
import AppNav from "@/components/sections/NavSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import SolutionsSection from "@/components/sections/SolutionsSections";

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Updated with motion and dynamic background */}
      <AppNav />

      {/* Hero Section - Update text color to be visible on blue background */}
      <Hero />

      {/* Why Choose Ryno */}
      <WhyChooseRyno />

      {/* Features Section */}
      <FeaturesSection />

      {/* Solutions Section */}
      <SolutionsSection />
    </main>
  );
}
