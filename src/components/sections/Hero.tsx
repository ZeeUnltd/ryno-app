import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroProps {
  // Add props here
}

const Hero: React.FC<HeroProps> = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.95]);
  return (
    <>
      <motion.section
        id="hero"
        className="min-h-[100vh] px-4 bg-cover bg-center flex items-center"
        style={{
          opacity,
          scale,
          backgroundImage: "url('/images/landing-backdrop.png')",
        }}
      >
        <div className="container mx-auto py-4 mt-[25vh] md:mt-[35vh]">
          <div className="flex flex-col gap-5 md:flex-row items-center">
            <div className="w-full md:w-1/2 md:mb-0 md:pr-10">
              <motion.h1
                className="text-6xl sm:text-5xl md:text-7xl lg:text-8xl font-semibold text-white self-baseline break-words"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Emerging Markets Finance Powered by Stablecoins
              </motion.h1>
            </div>
            <div className="md:w-1/2 mt-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                className="relative self-baseline"
              >
                <div className="">
                  <motion.p
                    className="text-lg md:text-xl text-gray-200 mt-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <span className="font-thin lowercase">
                      An enterprise-grade, stablecoin-powered platform for managing real business needs in emerging markets, from cross-border payments to treasury optimization, multi-currency wallets and payroll
                      <span className="">
                        —  with efficiency, affordability, security, and compliance.
                      </span>
                    </span>
                  </motion.p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
    </>
  );
};

export default Hero;
