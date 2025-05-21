import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import GetStartedButton from "../GetStartedButton";
interface SolutionsSectionrops {
  // Add props here
}

const CardItem: React.FC<{
  title: string;
  description: string;
  icon: string;
  className?: string;
}> = ({ title, description, icon, className }) => {
  return (
    <>
      <motion.div
        className={`bg-white border border-gray-200 text-left ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
          scale: 1.02,
          transition: { duration: 0.2, ease: "easeInOut" },
        }}
      >
        <div className="w-full text-left mb-8">
          <Image
            src={icon}
            alt="Icon"
            width={50}
            height={50}
            className="w-auto h-full"
          />
        </div>
        <div className="p-6">
          <p className="text-lg font-normal text-gray-950 mb-2">{title}</p>
          <p className="text-gray-500 font-normal">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

const SolutionsSection: React.FC<SolutionsSectionrops> = () => {
  return (
    <>
      <section id="solutions" className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-5xl text-center font-medium text-gray-900 my-16 lowercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Solutions
            </motion.h2>
            {/* <motion.p
              className="text-sm text-gray-500 max-w-2xl mx-auto my-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore our solutions to streamline cross-border payments, manage
              currencies, and optimize your treasury—all in one platform
            </motion.p> */}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 mb-12">
            {[
              {
                title: "Fiat & Stablecoin On/Off-Ramps",
                description:
                  "Seamlessly convert between fiat (NGN, USD, EUR) and digital currencies (e.g USDC, USDT) with secure, compliant on/off-ramps.",
                icon: "/icons/card-1.svg",
              },
              {
                title: "Cross-Border Payments & Global Payouts",
                description:
                  "Send funds instantly across borders and pay globally in stablecoins or local currencies.",
                icon: "/icons/card-2.svg",
              },
              {
                title: "Multi-Currency Wallet & Virtual Accounts",
                description:
                  "Manage multiple currencies and local collections with embedded wallets and virtual accounts (vIBANs), all from a single dashboard.",
                icon: "/icons/card-3.svg",
              },
              {
                title: "Treasury Optimization and Liquidity Management",
                description:
                  "Managae treasury operations and optimize liquidity with low risk embedded stablecoin yield.",
                icon: "/icons/card-4.svg",
              },
            ].map((solution, index) => (
              <CardItem
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
              />
            ))}
          </div>

          <GetStartedButton />
        </div>
      </section>
    </>
  );
};
export default SolutionsSection;
