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
        <div className="container mx-auto px-4 py-4 mt-[65vh]">
          <div className="flex flex-col gap-5 md:flex-row items-center">
            <div className="md:w-1/2 md:mb-0 md:pr-10 ">
              <motion.h1
                className="text-5xl lg:text-7xl font-semibold text-white self-baseline"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                Cross-Border Payments Powered by Stablecoins
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
    </>
  );
};

export default Hero;
