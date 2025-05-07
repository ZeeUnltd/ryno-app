"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

export default function LandingPage() {
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
        <div
          className="container mx-auto px-4 py-4 flex justify-between items-center h-32
        "
        >
          <div className="flex items-center w-9/12">
            {hasScrolled ? (
              <Image
                onClick={() => scrollToSection("hero")}
                src="/logo/rynopay_logo.svg"
                alt="Ryno Logo"
                height={47}
                width={`${200}`}
                className="w-auto"
              />
            ) : (
              <Image
                onClick={() => scrollToSection("hero")}
                src="/icons/logo_new_light.svg"
                alt="Ryno Logo"
                width={200}
                height={47}
                className="w-auto"
              />
            )}

            {/* Menu buttons moved here, next to the logo */}
            <div className="hidden md:flex items-center space-x-6 ml-6">
              <button
                onClick={() => scrollToSection("features")}
                className={`${
                  hasScrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className={`${
                  hasScrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("testimonials")}
                className={`${
                  hasScrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                Tools
              </button>
              <button
                onClick={() => scrollToSection("pricing")}
                className={`${
                  hasScrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                Pricing
              </button>
            </div>
          </div>

          {/* Login button moved to its own div */}
          <div className="hidden md:block w-2/12 whitespace-nowrap">
            <Link
              href="/login"
              className="flex flex-row justify-center items-center px-3 py-2.5 gap-1 m-auto w-[141px] h-[44px] bg-white border border-[#0040C2] shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl"
            >
              <span className="flex items-center justify-center gap-1 text-primary">
                Get Started
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 14.25L13.75 6.75"
                    stroke="#0040C2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M6.25 6.75H13.75V14.25"
                    stroke="#0040C2"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </div>
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
        <div className="container mx-auto px-4 py-4 mt-16 lg:mt-[50vh]">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-10">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Cross-Border Payments Powered by Stablecoins
              </motion.h1>
            </div>
            <div className="md:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative"
              >
                <div className="">
                  <motion.p
                    className="text-lg md:text-xl text-gray-200 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="font-thin">
                      Ryno is a global fintech company that gives businesses in
                      emerging markets a fast, compliant way to move and manage
                      money across borders{" "}
                      <span className="">
                        — using stablecoins for cost-effective payments and
                        liquidity at scale.
                      </span>
                    </span>
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Trusted By Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto max-w-6xl px-4 text-center w-full">
        <motion.h2
              className="text-3xl md:text-4xl font-normal text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Why Choose ryno?
            </motion.h2>
          {/* <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
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
          </div> */}
          <div className="w-full flex justify-center items-center">
            <div className="text-sm lg:w-6/12 text-center text-gray-500 my-8">
              Ryno bridges the gap between stablecoin technology and real-world
              business needs in emerging markets — with a secure, compliant, and
              enterprise-ready platform.
            </div>
          </div>
          <div className="flex justify-center items-center w-full">
            <div className="block w-2/12 whitespace-nowrap">
              <Link
                href="/login"
                className="flex flex-row justify-center items-center px-3 py-2.5 gap-1 m-auto w-[241px] h-[44px] bg-primary border border-[#0040C2] text-white shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl"
              >
                <span className="flex items-center justify-center gap-1">
                  Get Started
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.25 14.25L13.75 6.75"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.25 6.75H13.75V14.25"
                      stroke="#ffffff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
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

      <section>
        
      </section>
    </main>
  );
}
