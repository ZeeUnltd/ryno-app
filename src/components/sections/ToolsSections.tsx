import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import GetStartedButton from "../GetStartedButton";
interface ToolsSectionrops {
  // Add props here
}

const CardItem: React.FC<{
  title: string;
  description: string;
  icon: string;
  className?: string;
  different?: boolean;
}> = ({ title, description, icon, className, different=false }) => {
  return (
    <>
      <motion.div
        className={`p-6 text-primary border rounded-3xl border-primary text-left overflow-hidden h-[264px] pt ${className}`}
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
        <div
          className={`w-full text-left relative  ${
            different ? "" : "my-8"}`}
        >
          <Image
            src={icon}
            alt="Icon"
            width={307}
            height={203}
            className={`h-full ${
              different ? "absolute -bottom-8  -right-16 scale-150" : "w-auto"
            }`}
          />
        </div>
        <div className="">
          <p className="text-lg font-normal mb-2">{title}</p>
          <p className="font-normal">{description}</p>
        </div>
      </motion.div>
    </>
  );
};

const ToolsSection: React.FC<ToolsSectionrops> = () => {
  return (
    <>
      <section id="solutions" className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-normal text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Tools
            </motion.h2>
            <motion.p
              className="text-sm text-gray-500 max-w-2xl mx-auto my-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Power your operations with Ryno's tools designed for seamless
              conversion, global payouts, and real-time financial management.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
            {[
              {
                title: "On/Off-Ramps Infrastructure",
                description:
                  "Convert fiat and digital currencies seamlessly with our secure infrastructure.",
                icon: "/icons/ToolsPage-1.svg",
                className: "flex flex-row bg-[#F6F9FF] flex-row-reverse pt-36",
                different: true
              },
              {
                title: "Global Payout Engine",
                description:
                  "Effortlessly pay globally with Ryno's scalable payout engine",
                icon: "/icons/ToolsPage-2.svg",
                className: "bg-primary text-white flex flex-row-reverse pt-36",
                different: true
              },
              {
                title: "Embedded Wallet Account",
                description:
                  "Access and manage your multi-currency wallets in a few clicks",
                icon: "/icons/ToolsIcon-1.svg",
                className: "bg-primary text-white",
              },
              {
                title: "Treasury & Liquidity Management Dashbord",
                description:
                  "Get real-time insights into your treasury and liquidity flows.",
                icon: "/icons/ToolsIcon-2.svg",
                className: "bg-[#F6F9FF]",
              },
            ].map((solution, index) => (
              <CardItem
                key={index}
                title={solution.title}
                description={solution.description}
                icon={solution.icon}
                className={solution.className}
                different={solution.different}
              />
            ))}
          </div>

          <GetStartedButton />
        </div>
      </section>
    </>
  );
};export default ToolsSection;
