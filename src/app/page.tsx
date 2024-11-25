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
        <nav className="container mx-auto flex items-center py-6 px-4">
          <div className="flex items-center space-x-4">
            <Image
              src="/icons/logo_new_light.svg"
              width={260}
              height={160}
              alt="Logo"
              className="h-8"
            />
          </div>
          <div className="flex justify-between w-full items-center">
            <ul className="hidden md:flex text-base font-normal space-x-6 text-white">
              <li>
                <a href="#home" className="hover:text-blue-400">
                  Home
                </a>
              </li>
              {/* <li>
                <a href="#solutions" className="hover:text-blue-400">
                  Solutions
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-blue-400">
                  About
                </a>
              </li> */}
            </ul>
            <div className="space-x-4 flex items-center hidden sm:flex">
              <div className="flex space-x-4">
                {/* Sign In Button */}
                <div className="relative group w-fit">
                  <button className="text-white border pt-2 pb-2.5 px-4 border-[#FFFFFF] rounded-md hover:text-blue-400 w-full">
                    Sign In
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>

                {/* Create Account Button */}
                <div className="relative group w-fit">
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
        <div className="z-10 max-w-4xl text-white container py-6 pl-16">
          {/* Animated Text Section */}
          <div className="relative md:h-52 overflow-hidden flex items-end justify-center">
            {/* First Text */}
            <h1 className="absolute  font-fraunces w-full text-4xl md:text-6xl font-light leading-tight text-white animate-text-slide-1">
              Enable <span className="text-[#0040C2]">Equitable Access</span> to
              Global Financial Markets
            </h1>

            {/* Second Text */}
            <h1 className="absolute font-fraunces w-full text-4xl md:text-6xl font-light leading-tight text-white animate-text-slide-2">
              Borderless <span className="text-[#0040C2]">Transfer</span>
            </h1>

            {/* Third Text */}
            <h1 className="absolute font-fraunces w-full text-4xl md:text-6xl font-light leading-tight text-white animate-text-slide-3">
              Empower <span className="text-[#0040C2]">Enterprises</span> with
              Seamless Trans-Border Payments
            </h1>
          </div>

          {/* Supporting Text */}
          <p className=" text-base font-normal font-inter leading-relaxed">
            Providing equitable access to global financial markets with
            cutting-edge technology that removes complexities and delivers
            seamless, deep liquidity solutions.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <button className="bg-transparent border border-white px-6 py-3 rounded-lg hover:bg-blue-600">
              Contact us
            </button>
            <div className="relative group">
              <button className="flex items-center bg-[#0040C2] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition duration-300 w-full">
                <span className="mr-2">Create an account</span>
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
        <div className="container mx-auto px-4">
          {/* Text Block */}
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-light text-[#c2bcf6] font-fraunces">
              <span className="text-blue-600 font-medium">Our</span> solutions
              simplify your cross-border payment needs, help you to manage your
              treasury, while providing access to deep FX liquidity
            </h2>
          </div>

          {/* Chart Card */}
          <Image
            src="/images/dashboard-new.svg"
            width={1280}
            height={645}
            alt="Logo"
            className=""
          />
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
