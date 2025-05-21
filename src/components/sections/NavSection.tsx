import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface NavProps {
  // Add props here
}

const AppNav: React.FC<NavProps> = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const { scrollYProgress } = useScroll();
  const [hasScrolled, setHasScrolled] = React.useState(false);

  // Smooth scroll function
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 60,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  // Add smooth scrolling behavior and scroll detection
  React.useEffect(() => {
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
    <>
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 transition-colors duration-300"
        style={{
          backgroundColor: hasScrolled
            ? "rgba(255, 255, 255)"
            : "rgba(255, 255, 255, 0)",
          boxShadow: hasScrolled ? "0 1px 3px rgba(0, 0, 0, 0.1)" : "none",
        }}
      >
        <div
          className="container mx-auto px-4 py-2 flex justify-between items-center h-24"
        >
          <div className="flex items-center md:w-9/12">
            {hasScrolled ? (
              <Image
                onClick={() => scrollToSection("hero")}
                src="/logo/ryno-logo-new.svg"
                alt="Ryno Logo"
                height={40}
                width={200}
                className="w-auto"
              />
            ) : (
              <Image
                onClick={() => scrollToSection("hero")}
                src="/icons/white_logo.svg"
                alt="Ryno Logo"
                width={180}
                height={40}
                className="w-auto"
              />
            )}

            <div className="hidden md:flex items-center space-x-6 ml-16">
              <button
                onClick={() => scrollToSection("why-us")}
                className={`${
                  hasScrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("solutions")}
                className={`${
                  hasScrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                Solutions
              </button>
              <button
                onClick={() => scrollToSection("contact-section")}
                className={`${
                  hasScrolled ? "text-gray-700" : "text-white"
                } hover:text-blue-600 transition-colors`}
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="md:block md:w-2/12 whitespace-nowrap ml-auto flex justify-end">
            <Link
              href="/login"
              className="flex ml-auto w-[130px] items-center px-3 py-2 gap-1 h-[40px] bg-white border border-primary shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl"
            >
              <span className="flex items-center justify-center gap-1 text-primary">
                Get Started
                <svg
                  width="18"
                  height="19"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 14.25L13.75 6.75"
                    stroke="#0040C2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.25 6.75H13.75V14.25"
                    stroke="#0040C2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
    </>
  );
};

export default AppNav;