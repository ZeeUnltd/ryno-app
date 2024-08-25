"use client"; // Ensure this component runs on the client side

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import Accordion from "@/components/Accordion";
import { IoReorderThreeSharp } from "react-icons/io5";
import Link from "next/link";

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
    <div>
      <header className="w-full border bg-white border-b-[#b6b7b8] py-5  sticky top-0 h-[10vh] z-50">
        <nav className="flex justify-between items-center w-[85%] mx-auto">
          <ul className="flex space-x-4 items-center">
            <div>
              <Image
                src={"/logo/ryno-logo-new.svg"}
                alt="zatum logo"
                height={"68"}
                width={"92"}
              />
            </div>

            {menuItems.map((item) => (
              <li
                key={item.href}
                className="hidden md:flex md:items-center md:justify-between mt-2"
              >
                <a
                  href={item.href}
                  onClick={(e) => handleSmoothScroll(e, item?.href)}
                  className={`${
                    activeSection === item?.href
                      ? "border-b-2 border-blue-500 shadow-lg"
                      : ""
                  } pb-1 font-aeonik_regular`}
                >
                  {item?.label}
                </a>
              </li>
            ))}

            {/* Mobile Menu */}
            {menuOpen && (
              <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 absolute top-14 bg-white right-0">
                  <ul className="text-center">
                    {menuItems.map((item) => (
                      <li
                        key={item.label}
                        className="text-[#0F0000DE] text-base md:text-2xl	"
                      >
                        <a
                          href={item.href}
                          onClick={(e) => handleSmoothScroll(e, item?.href)}
                          className={`${
                            activeSection === item?.href
                              ? "border-b-1 border-blue-500 shadow-lg"
                              : ""
                          } md:pb-1 font-aeonik_regular`}
                        >
                          {item?.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <div className="font-aeonik flex flex-col gap-2 font-semibold ">
                    <button
                      type="button"
                      className="py-3 px-4 border mr-4 border-[#BDB6F6] bg-[#DEDBFB] drop-shadow-md rounded-[10px] text-sm text-[#0040C2]"
                    >
                      Join Waitlist
                    </button>
                    <button
                      type="button"
                      className="py-3 px-4 border mr-4 border-[##0040C2] bg-[#0040C2] drop-shadow-md rounded-[10px] text-sm text-[#FFFFFF]"
                    >
                      Get Started
                    </button>
                  </div>
                </div>
              </div>
            )}
          </ul>
          <div className="flex justify-end items-end md:hidden">
            <button
              onClick={toggleMenu}
              className="bg-[#fff] focus:outline-none focus:text-[#fff]"
            >
              <IoReorderThreeSharp color="#0D0D12" />
            </button>
          </div>
          <div className="font-aeonik font-semibold hidden md:flex md:items-center md:justify-between">
            <button
              type="button"
              className="py-3 px-4 border mr-4 border-[#BDB6F6] bg-[#DEDBFB] drop-shadow-md rounded-[10px] text-sm text-[#0040C2]"
            >
              Join Waitlist
            </button>
            <button
              type="button"
              className="py-3 px-4 border mr-4 border-[##0040C2] bg-[#0040C2] drop-shadow-md rounded-[10px] text-sm text-[#FFFFFF]"
            >
              Get Started
            </button>
          </div>
        </nav>
      </header>
      <div className="mx-auto border bg-white border-x-[#b6b7b8] w-[85%] z-0">
        <section id="home" className="md:min-h-screen pt-16 mb-24">
          <h2 className="flex justify-between items-center w-72 rounded-lg border-[#DFE1E6] border mx-auto px-[0.65rem] py-1">
            <span className="aeonik_medium">✨ Announcing Our Public Beta</span>{" "}
            <span>
              <IoIosArrowForward color="#0D0D12" />{" "}
            </span>
          </h2>
          <h1 className="mx-auto text-2xl md:text-7xl font-inter text-[#0D0D12] w-2/3 text-center mt-7">
            borderless finance for emerging markets{" "}
          </h1>
          <p className="mx-auto text-sm text-center font-aeonik_regular text-[#666D80] w-[90%] md:w-[38%]  my-4">
            Simplifying cross-border transactions with innovative solutions to
            accelerate economic growth for emerging market enterprises.
          </p>
          <div className="mx-auto font-light  flex flex-col md:flex-row gap-3 justify-center p-2 md:p-0 w-full  my-7">
            <button
              type="button"
              className="p-4 font-aeonik font-semibold border mr-4 border-[##0040C2] bg-[#0040C2] drop-shadow-md rounded-[14px] text-sm text-[#FFFFFF]"
            >
              Discover Ryno{" "}
            </button>
            <button
              type="button"
              className="p-4 border mr-4 border-[#BDB6F6] bg-[#DEDBFB] drop-shadow-md rounded-[14px] text-sm text-[#0040C2]"
            >
              Join Waitlist{" "}
            </button>
          </div>
          <div className="mt-10 ">
            <Image
              src={"/images/Illustration-1.svg"}
              alt="ryno-illustration"
              height={"1200"}
              width={"800"}
              className="w-[96%] mx-auto" // Make the image span the full width of its container
            />
          </div>
        </section>

        <section id="about-us" className="md:min-h-screen">
          <h2 className="gap-4 w-48 mx-auto flex justify-center  items-center  rounded-lg border-[#DFE1E6] border px-[0.65rem] py-1">
            {" "}
            <Image
              src={"/logo/codepen.svg"}
              alt="zatum logo"
              height={"14"}
              width={"14"}
            />
            <span className="text-[#808897]">Solutions</span>
          </h2>
          <h1 className="mx-auto text-2xl md:text-[52px] font-inter text-[#0D0D12] w-2/3 text-center mt-4">
            Simplify Cross-Border Transactions{" "}
          </h1>{" "}
          <p className="mx-auto text-sm text-center font-aeonik_regular text-[#666D80] w-[90%] md:w-[38%]  my-4">
            ryno is designed to eliminate the complexities of cross-border
            payments, foreign exchange and treasury services, offering emerging
            market enterprises the efficiency and transparency they need to run
            operations and grow.
          </p>
          <div className="mt-14 flex flex-col md:flex-row md:justify-between gap-4">
            <Image
              src={"/images/cross-border-1.svg"}
              alt="ryno-illustration"
              height={"200"}
              width={"400"}
              className="w-[90%] sm:w-[80%] md:w-[46%] mx-auto" // Adjust sizes and layout
            />
            <Image
              src={"/images/cross-border-2.svg"}
              alt="ryno-illustration"
              height={"200"}
              width={"400"}
              className="w-[90%] sm:w-[80%] md:w-[46%] mx-auto mt-4" // Add margin-top for spacing
            />
          </div>
          <div className="mt-4">
            <Image
              src={"/images/cross-border-3.svg"}
              alt="ryno-illustration"
              height={"200"}
              width={"400"}
              className="w-[90%] sm:w-[80%] md:w-[96%] mx-auto mt-4" // Add margin-top for spacing
            />
          </div>
        </section>
        <section className="md:min-h-screen mx-auto mt-24 w-[98%] border-[#b6b7b8] border-y">
          <h2 className="gap-4 w-60  mt-24 mx-auto flex justify-center  items-center  rounded-lg border-[#DFE1E6] border px-[0.65rem] py-1">
            {" "}
            <Image
              src={"/logo/flash-icon.svg"}
              alt="zatum logo"
              height={"14"}
              width={"14"}
            />
            <span className="text-[#808897]">Fueling Business Growth</span>
          </h2>{" "}
          <h1 className="mx-auto text-2xl md:text-6xl font-inter text-[#0D0D12] md:w-[45%] text-center mt-4">
            Empower Your Business with Ryno{" "}
          </h1>{" "}
          <p className="mx-auto text-sm text-center font-aeonik_regular text-[#666D80] w-[90%] md:w-[38%]  my-4">
            Our innovative financial solutions empower African businesses to
            break down barriers and achieve their full potential.
          </p>{" "}
          {/* <div className="my-24">
            <Image
              src={"/images/Container.svg"}
              alt="ryno-illustration"
              height={"1200"}
              width={"800"}
              className="w-[96%] mx-auto" // Make the image span the full width of its container
            />
          </div> */}
          <div className="flex flex-col md:flex-row gap-2 mx-auto justify-between">
            <div className="w-full md:w-[30%]">
              <div className="rounded-xl border border-[#DFE1E6] bg-[#fff] p-6 w-full">
                <Image
                  src={"/icons/cross-border-payment-icon.svg"}
                  alt="ryno-illustration"
                  height={"40"}
                  width={"40"}
                  // Make the image span the full width of its container
                />

                <p className="font-aeonik_medium my-2">Cross-Border Payments</p>
                <p className=" font-thin text-[#666D80]">
                  Seamlessly transact across borders without the usual
                  complexities
                </p>
              </div>
              <div className="rounded-xl border border-[#DFE1E6] bg-[#fff] p-6 w-full mt-4">
                <Image
                  src={"/icons/cross-border-payment-icon.svg"}
                  alt="ryno-illustration"
                  height={"40"}
                  width={"40"}
                  // Make the image span the full width of its container
                />

                <p className="font-aeonik_medium my-2">FX Liquidity</p>
                <p className=" font-thin text-[#666D80]">
                  Tap into deep liquidity pools to support your operations.
                </p>
              </div>
            </div>
            <div>
              <Image
                src={"/images/Mockup.svg"}
                alt="ryno-illustration"
                height={"120"}
                width={"120"}
                className="w-[100%] mx-auto" // Make the image span the full width of its container
              />
            </div>
            <div className="md:w-[30%]">
              <div className="rounded-xl border border-[#DFE1E6] bg-[#fff] p-6 w-full">
                <Image
                  src={"/icons/cross-border-payment-icon.svg"}
                  alt="ryno-illustration"
                  height={"40"}
                  width={"40"}
                  // Make the image span the full width of its container
                />

                <p className="font-aeonik_medium my-2">
                  Scalable and Cost-Efficient Solutions
                </p>
                <p className=" font-thin text-[#666D80]">
                  From small businesses to large enterprises, our solutions
                  scale with you.
                </p>
              </div>{" "}
              <div className="rounded-xl border border-[#DFE1E6] bg-[#fff] p-6 w-full mt-4">
                <Image
                  src={"/icons/cross-border-payment-icon.svg"}
                  alt="ryno-illustration"
                  height={"40"}
                  width={"40"}
                  // Make the image span the full width of its container
                />

                <p className="font-aeonik_medium my-2">Lightening Fast</p>
                <p className=" font-thin">
                  Operationally faster transactions and settlement times
                  completed at the speed of innovation to support your business
                  without delay.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="contact-us"
          className="md:min-h-screen mx-auto mt-24 w-[98%]"
        >
          <h2 className="gap-4 w-60  mt-24 mx-auto flex justify-center  items-center  rounded-lg border-[#DFE1E6] border px-[0.65rem] py-1">
            {" "}
            <Image
              src={"/logo/flash-icon.svg"}
              alt="zatum logo"
              height={"14"}
              width={"14"}
            />
            <span className="text-[#808897]">About Us</span>
          </h2>{" "}
          <h1 className="mx-auto text-2xl md:text-6xl font-inter text-[#0D0D12] md:w-[45%] text-center mt-4">
            borderless finance at the speed of innovation
          </h1>{" "}
          <p className="mx-auto text-lg text-center font-aeonik_regular text-[#666D80] w-[90%] md:w-[90%]  my-4">
            ryno is a global technology company innovating frictionless and
            cost-efficient cross border financial solutions for enterprises in
            emerging markets. with fast developing emerging markets economies
            demanding better and more inclusive financial solutions, ryno was
            founded by a team with over 30 years of global experience across
            financial services, payments and technology, that is passionate
            about providing equitable and innovative access to global financial
            markets.
          </p>{" "}
          {/* <div className="my-24">
            <Image
              src={"/images/Container.svg"}
              alt="ryno-illustration"
              height={"1200"}
              width={"800"}
              className="w-[96%] mx-auto" // Make the image span the full width of its container
            />
          </div> */}
          <div className="flex flex-col md:flex-row gap-2 mx-auto justify-between mt-24">
            <div className="flex-1 rounded-xl border border-[#DFE1E6] bg-[#fff] p-6">
              <p className="font-thin text-[#666D80] text-center py-16">
                What drives our passion to innovate is financial inclusion and
                the economic participation of emerging markets in the global
                economy.
              </p>
            </div>
            <div className="flex-1 rounded-xl border border-[#DFE1E6] bg-[#fff] p-6 mt-4 md:mt-0">
              <p className="font-thin text-[#666D80] text-center h-60 py-16">
                ryno’s innovative platform delivers near real-time, cost and
                operationally efficient solutions with deep liquidity,
                flexibility, and transparency.
              </p>
            </div>
          </div>
        </section>
        <section className=" mx-auto mt-24 w-[98%] border-[#b6b7b8] border-b">
          <div className="my-24">
            <Image
              src={"/logo/Content.svg"}
              alt="ryno-illustration"
              height={"1200"}
              width={"800"}
              className="w-[96%] mx-auto" // Make the image span the full width of its container
            />
          </div>
        </section>

        {/* <section className="min-h-screen mx-auto mt-24 w-[98%] border-[#b6b7b8] border-y">
          <h2 className="gap-4 w-36  mt-24 mx-auto flex justify-center  items-center  rounded-lg border-[#DFE1E6] border px-[0.65rem] py-1">
            {" "}
            <Image
              src={"/logo/user.svg"}
              alt="zatum logo"
              height={"14"}
              width={"14"}
            />
            <span className="text-[#808897]">Customers</span>
          </h2>{" "}
          <h1 className="mx-auto text-[52px] font-inter text-[#0D0D12] w-[55%] text-center mt-4">
            Building Trust Across Africa{" "}
          </h1>{" "}
          <p className="mx-auto text-sm text-center font-aeonik_regular text-[#666D80] w-[38%]  my-4">
            Leading enterprises across various sectors trust Ryno to handle
            their most critical financial operations. Here's why
          </p>{" "}
          <div className="my-24">
            <Image
              src={"/images/Container.svg"}
              alt="ryno-illustration"
              height={"1200"}
              width={"800"}
              className="w-[96%] mx-auto" // Make the image span the full width of its container
            />
          </div>
        </section> */}
        <section className="w-[98%] mx-auto p-4 border-[#b6b7b8] border-b">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="md:w-[40%]">
              <h2 className="gap-4 w-28  mt-12 flex justify-center  items-center  rounded-lg border-[#DFE1E6] border px-[0.65rem] py-1">
                {" "}
                <Image
                  src={"/logo/codepen.svg"}
                  alt="zatum logo"
                  height={"14"}
                  width={"14"}
                />
                <span className="text-[#808897]">FAQs</span>
              </h2>{" "}
              <h1 className="text-2xl md:text-6xl font-inter text-[#0D0D12] mt-4">
                Frequently Asked Questions
              </h1>{" "}
            </div>
            <div>
              <Accordion />
            </div>
          </div>

          <div className="relative bg-[#0040C2] text-[#fff] rounded-lg p-8 text-center overflow-hidden shadow-custom">
            {/* Radial Gradient Background */}
            <div className="absolute inset-0 h-96" />
            {/* Content */}
            <div className="relative z-10">
              <h2 className=" text-5xl font-inter font-semibold mb-4">
                Let’s Work Together
              </h2>
              <p className="mb-8 md:w-[45%] font-aeonik_regular mx-auto">
                Join the growing number of African enterprises that trust Ryno
                for their financial needs. Get in touch to learn more about how
                we can help your business thrive.
              </p>
              <div className="flex flex-col md:flex-row  gap-3 justify-center">
                <button className="bg-white text-[#0D0D12] font-aeonik_regular p-4 rounded-xl shadow-lg hover:bg-gray-200 transition">
                  Get Started
                </button>
                <button className="bg-[rgba(255, 255, 255, 0.35)] border border-[#fff] text-[#FFFFFF] font-semibold p-4 rounded-xl hover:bg-white hover:text-blue-600 transition">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
          <div className="mt-7 flex-col flex md:flex-row items-center  justify-between">
            <div className="flex md:flex-row items-stretch gap-6">
              <Image
                src={"/logo/ryno-logo-new.svg"}
                alt="zatum logo"
                height={"68"}
                width={"92"}
              />
              <Image
                src={"/logo/supported_by.jpeg"}
                alt="zatum logo"
                height={"68"}
                width={"150"}
              />
            </div>
            <div>
              <p className="text-[#666D80]  text-sm">
                <Link
                  className="mx-3 inline-block border-b border-[#666D80]"
                  href="mailto:info@rynopay.io"
                >
                  info@rynopay.io
                </Link>
                <Link
                  href="mailto:support@rynopay.io "
                  className="border-b border-[#666D80]"
                >
                  support@rynopay.io
                </Link>{" "}
              </p>
            </div>
            <div>
              <Image
                src={"/icons/x-icon.svg"}
                alt="zatum logo"
                height={"42"}
                width={"42"}
                className="mt-1"
              />
            </div>
          </div>
        </section>
        <section className="p-4">
          <p className="text-[#666D80] text-sm">
            © ryno 2024. All Rights Reserved
          </p>
        </section>
        {/* <section id="contact-us" className="min-h-screen">
          <h2>Contact Us</h2>
          <p>Your contact us content goes here.</p>
        </section> */}
      </div>
    </div>
  );
}
