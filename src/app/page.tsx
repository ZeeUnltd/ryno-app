"use client"; // Ensure this component runs on the client side

import { useState } from "react";
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

  // const toggleMenu = () => {
  //   setMenuOpen(!menuOpen);
  // };
  // useEffect(() => {
  //   const handleScroll = () => {
  //     const home = document.getElementById("home");
  //     const aboutUs = document.getElementById("about-us");
  //     const contactUs = document.getElementById("contact-us");

  //     if (home && aboutUs && contactUs) {
  //       const homeTop = home.getBoundingClientRect().top;
  //       const aboutUsTop = aboutUs.getBoundingClientRect().top;
  //       const contactUsTop = contactUs.getBoundingClientRect().top;

  //       if (
  //         homeTop <= window.innerHeight + 20 / 2 &&
  //         aboutUsTop > window.innerHeight / 2
  //       ) {
  //         setActiveSection("home");
  //       } else if (
  //         aboutUsTop <= window.innerHeight / 2 &&
  //         contactUsTop > window.innerHeight / 2
  //       ) {
  //         setActiveSection("about-us");
  //       } else if (contactUsTop <= window.innerHeight / 2) {
  //         setActiveSection("contact-us");
  //       } else {
  //         setActiveSection("");
  //       }
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, [activeSection]);

  // const handleSmoothScroll = (
  //   e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
  //   sectionId: string
  // ) => {
  //   e.preventDefault();
  //   setActiveSection(sectionId);
  //   const section = document.getElementById(sectionId);
  //   const headerHeight = 84; // Adjust this value to match your header height
  //   if (section) {
  //     window.scrollTo({
  //       top: section.offsetTop - headerHeight,
  //       behavior: "smooth",
  //     });
  //   }
  // };

  return (
    <div className="relative">
      <header className="w-full bg-transparent absolute top-0 font-inter z-50">
        <nav className="container mx-auto flex items-center justify-between py-4 px-6">
          {/* Logo Section */}
          <div className="flex items-center space-x-4">
            <Image
              src="/icons/logo_new_light.svg"
              width={260}
              height={160}
              alt="Logo"
            />

            <ul className="hidden md:flex text-base font-normal space-x-6 text-white">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
            </ul>
          </div>

          {/* Navigation Links */}

          {/* Buttons Section */}
          <div className="flex space-x-4 items-center">
            {/* Sign In Button */}
            <div className="relative group w-fit">
              <button className="text-white border py-1.5 px-4 border-[#FFFFFF] rounded-md hover:text-blue-400">
                <a href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}/login`}>
                  Sign In
                </a>
              </button>
              <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                Beta Coming Soon
              </span>
            </div>

            {/* Create Account Button */}
            <div className="relative group w-fit">
              <button className="flex items-center bg-[#0040C2] text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
                <span className="mr-2">
                  <a
                    href={`${process.env.NEXT_PUBLIC_APP_BASE_URL}/signup`}
                  >
                    Create Account
                  </a>
                </span>
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
