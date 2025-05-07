"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage () {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);

  // Add this for header background transition
  const headerBgOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  // Add smooth scrolling behavior and scroll detection
  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";

    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeIn");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    // Add scroll event listener to detect when user scrolls past hero
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom =
          heroSection.offsetTop + heroSection.offsetHeight - 100;
        setHasScrolled(window.scrollY > heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
      document.querySelectorAll(".animate-on-scroll").forEach((el) => {
        observer.unobserve(el);
      });
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation - Updated with motion and dynamic background */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: hasScrolled
            ? "rgba(255, 255, 255, 1)"
            : "rgba(255, 255, 255, 0)",
          boxShadow: hasScrolled ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              onClick={() => scrollToSection("hero")}
              src="/icons/logo_new_light.svg"
              alt="Ryno Logo"
              width={180}
              height={32}
              className="mx-auto mb-6"
            />
          </div>

          {/* Desktop Navigation - Updated text color based on scroll */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <button
              onClick={() => scrollToSection("features")}
              className={`${
                hasScrolled ? "text-gray-700" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={`${
                hasScrolled ? "text-gray-700" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className={`${
                hasScrolled ? "text-gray-700" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className={`${
                hasScrolled ? "text-gray-700" : "text-white"
              } hover:text-blue-600 transition-colors`}
            >
              Pricing
            </button>
            <Link
              href="/login"
              className={`px-6 py-2 ${
                hasScrolled
                  ? "bg-gray-100 text-gray-800"
                  : "bg-blue-950 bg-opacity-20 text-white"
              } rounded-lg hover:bg-gray-200 transition-colors`}
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button - Updated color based on scroll */}
          <button
            className={`md:hidden ${
              hasScrolled ? "text-gray-700" : "text-white"
            }`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className="text-gray-700 hover:text-blue-600 transition-colors py-2"
              >
                Pricing
              </button>
              <Link
                href="/login"
                className="py-2 text-gray-800 hover:text-blue-600 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="py-2 px-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </motion.nav>

      {/* Hero Section - Update text color to be visible on blue background */}
      <motion.section
        id="hero"
        className="min-h-[100vh] px-4 bg-cover bg-center flex items-center"
        style={{
          opacity,
          scale,
          backgroundImage: "url('/images/landing-backdrop.png')",
        }}
      >
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Seamless Cross-Border Payments for Your Business
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-gray-200 mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                Ryno helps businesses send and receive payments globally with
                lower fees, faster processing, and better exchange rates.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="/signup"
                  className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-center font-medium"
                >
                  Get Started for Free
                </Link>
                <button
                  onClick={() => scrollToSection("how-it-works")}
                  className="px-8 py-3 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-center font-medium"
                >
                  See How It Works
                </button>
              </motion.div>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <Image
                  src="/hero-image.png"
                  alt="Ryno Platform Dashboard"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 text-white p-4 rounded-lg shadow-lg">
                  <p className="font-bold">Save up to 70%</p>
                  <p className="text-sm">on international transfers</p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4">
          <p className="text-center text-gray-500 mb-8">
            Trusted by businesses worldwide
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {[
              "company1.svg",
              "company2.svg",
              "company3.svg",
              "company4.svg",
              "company5.svg",
            ].map((logo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Image
                  src={`/logos/${logo}`}
                  alt="Company logo"
                  width={120}
                  height={40}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Features That Set Us Apart
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need to manage global payments efficiently and
              securely
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Low Transaction Fees",
                description:
                  "Save up to 70% on transaction fees compared to traditional banks and payment providers.",
                icon: "💰",
              },
              {
                title: "Real-Time Tracking",
                description:
                  "Track all your transactions in real-time with detailed status updates and notifications.",
                icon: "📊",
              },
              {
                title: "Multi-Currency Support",
                description:
                  "Send and receive payments in over 50 currencies with competitive exchange rates.",
                icon: "🌐",
              },
              {
                title: "Secure Payments",
                description:
                  "Enterprise-grade security with end-to-end encryption and fraud detection systems.",
                icon: "🔒",
              },
              {
                title: "API Integration",
                description:
                  "Easily integrate our payment solutions into your existing systems with our robust API.",
                icon: "⚙️",
              },
              {
                title: "24/7 Support",
                description:
                  "Get help whenever you need it with our dedicated customer support team.",
                icon: "🛎️",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    );
  }