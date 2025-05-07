"use client"; // Ensure this component runs on the client side

import { useState, useEffect } from "react";
import Image from "next/image";
import FeatureSection from "@/components/Feature";
import FinancialSolutionsSection from "@/components/FinancialSolution";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuItems = [
    { label: "Home", href: "home" },
    { label: "Solutions", href: "about-us" },
    { label: "About", href: "contact-us" },
    // Add more menu items as needed
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const home = document.getElementById("home");
      const aboutUs = document.getElementById("about-us");
      const contactUs = document.getElementById("contact-us");

      if (home && aboutUs && contactUs) {
        const homeTop = home.getBoundingClientRect().top;
        const aboutUsTop = aboutUs.getBoundingClientRect().top;
        const contactUsTop = contactUs.getBoundingClientRect().top;

        if (
          homeTop <= window.innerHeight + 20 / 2 &&
          aboutUsTop > window.innerHeight / 2
        ) {
          setActiveSection("home");
        } else if (
          aboutUsTop <= window.innerHeight / 2 &&
          contactUsTop > window.innerHeight / 2
        ) {
          setActiveSection("about-us");
        } else if (contactUsTop <= window.innerHeight / 2) {
          setActiveSection("contact-us");
        } else {
          setActiveSection("");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    e.preventDefault();
    setActiveSection(sectionId);
    const section = document.getElementById(sectionId);
    const headerHeight = 84; // Adjust this value to match your header height
    if (section) {
      window.scrollTo({
        top: section.offsetTop - headerHeight,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative bg-transparent">
      <header className="sticky top-0 z-20">
        <nav className="text-bold">
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <button
                  onClick={(event: any) => toggleMenu()}
                  type="button"
                  className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                  aria-controls="mobile-menu"
                  aria-expanded="false"
                >
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {/*
                  Icon when menu is closed.
                  Menu open: "hidden", Menu closed: "block"
                */}
                  {/* <img
                    id="navButton"
                    src="./assets/img/logo-app.png"
                    title="top"
                    alt="top"
                    className="h-16 hidden md:block"
                  /> */}
                  <Image
                    onClick={(event: any) => toggleMenu()}
                    src="/icons/logo_new_light.svg"
                    alt="Ryno Logo"
                    width={180}
                    height={32}
                    className="mx-auto mb-6"
                  />
                  <svg
                    className="block h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    style={{ display: "block" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                  {/*
                  Icon when menu is open.
      
                  Menu open: "block", Menu closed: "hidden"
                */}
                  <svg
                    onClick={(event: any) => toggleMenu()}
                    className="hidden h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    style={{ display: "none" }}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              {/* Desktop Nav Menu */}
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-between">
                <div
                  id="mobileMenu"
                  className="flex flex-shrink-0 items-center"
                  content="@blackvnicorn|azegaf@gmail.com|+2348030470290
        "
                >
                  {/* <img
                    className="h-8 w-auto"
                    src="./assets/img/logo-app.png"
                    alt="Your Company"
                  /> */}
                   <Image
                    onClick={(event: any) => toggleMenu()}
                    src="/icons/logo_new_light.svg"
                    alt="Ryno Logo"
                    width={180}
                    height={32}
                    className="mx-auto h-8 w-auto"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div
                    id="navItems"
                    className="flex space-x-4 underline-offset-8 underline italic uppercase text-bold text-9xl menu-links text-gray-300"
                  >
                    {/* <a
              href="#"
              class="text-white rounded-md px-3 py-2 text-sm font-bold"
              aria-current="page"
              >Dashboard</a
            > */}
                    <a
                      href="#history"
                      className="font-nav hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
                    >
                      01. History
                    </a>
                    <a
                      href="#climb"
                      className="font-nav hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
                    >
                      02. Team
                    </a>
                    {/* <a
              href="#"
              class="text-gray-300 font-nav hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-bold"
              >New</a
            > */}
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Mobile Dropdown Menu, show/hide based on menu state. */}
          <div
            id="mobileDropdown"
            className="hidden md:hidden bg-white fade"
            style={{ display: "none" }}
          >
            <div className="space-y-1 px-2 pb-3 pt-2">
              {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
              <a
                href="#history"
                className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium"
                aria-current="page"
              >
                History
              </a>
              <a
                href="#climb"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
              >
                Team
              </a>
              {/* <a
        href="#"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >Projects</a
      >
      <a
        href="#"
        class="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium"
        >Calendar</a
      > */}
            </div>
          </div>
        </nav>
      </header>

      {/*           backgroundImage: "url('/images/ryno_background.jpeg')",
       */}
      <section
        id="hero"
        className="relative h-screen flex items-end pb-10 justify-start pt-28 pr-10 md:pr-0"
      >
        {/* Background Layer with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: "url('/images/ryno_background.jpeg')",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#0240AE7E] via-[#0240AE7E] to-[#0040C299] opacity-80"></div>
        </div>

        {/* Content Layer */}
        <div className="z-10 max-w-4xl mb-28 text-white container py-6 pl-16">
          {/* Animated Text Section */}
          <div className="relative md:h-64 overflow-hidden flex items-end justify-center">
            {/* First Text */}
            <h1 className="absolute  font-fraunces w-full text-4xl md:text-6xl font-extralight leading-tight text-white animate-text-slide-1">
              Enable <span className="text-[#0040C2]">Equitable Access</span> to
              Global Financial Markets
            </h1>

            {/* Second Text */}
            <h1 className="absolute font-fraunces w-full text-4xl md:text-6xl font-extralight leading-tight text-white animate-text-slide-2">
              Borderless <span className="text-[#0040C2]">Finance</span>
            </h1>

            {/* Third Text */}
            <h1 className="absolute font-fraunces w-full capitalize text-4xl md:text-6xl font-extralight leading-tight text-white animate-text-slide-3">
              Empower <span className="text-[#0040C2]">Emerging</span> Market
              Enterprises with seamless Cross Border Payment Services
            </h1>
          </div>

          {/* Supporting Text */}
          <p className=" text-base font-normal font-inter leading-relaxed">
            Providing emerging markets enterprises equitable access to global
            financial markets with cutting edge technology.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Contact Us
            </button>
            <div className="relative group">
              <button className="flex items-center bg-[#0040C2] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                <span className="mr-2">Create Account</span>
                <Image
                  src="/icons/navigation-icon.svg"
                  height={14}
                  width={14}
                  alt="navigate-icon"
                  className="inline-block"
                />
              </button>
              <span className="absolute top-full left-0 mt-2 px-6 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                Beta Coming Soon
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-white h-screen mt-4">
        <div className="container mx-auto">
          {/* Text Block */}
          <div className="text-center max-w-2xl mt-5 mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-extralight font-fraunces relative overflow-hidden">
              <span className="text-blue-600 font-extralight ">Our</span>
              <span className="ml-1 text-[#c2bcf6] font-extralight animate-fade transition-colors[animation-delay:1s]">
                solutions provide seamless and compliant cross border
                transactions, treasury management, and access to deep FX
                liquidity
              </span>
            </h2>
          </div>

          {/* Chart Card */}
          <div className="flex justify-center">
            <Image
              src="/images/dashboard-new.svg"
              width={1280}
              height={645}
              alt="Logo"
              className="mx-auto"
            />
          </div>
        </div>
      </section>
      <section>
        <FeatureSection />
      </section>

      <section className="mt-10">
        <FinancialSolutionsSection />
      </section>

      <Footer />
    </div>
  );
}
