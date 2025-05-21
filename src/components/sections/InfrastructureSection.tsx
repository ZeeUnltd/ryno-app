import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import GetStartedButton from "../GetStartedButton";
interface InfrastructureSectionProps {
  // Add props here
}

const CardItem: React.FC<{
  title: string;
  description: string;
  icon: string;
  className?: string;
  different?: boolean;
}> = ({ title, description, icon, className, different = false }) => {
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
          className={`w-full text-left relative  ${different ? "" : "my-8"}`}
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

const InfrastructureSection: React.FC<InfrastructureSectionProps> = () => {
  return (
    <>
      <section id="infrastructure" className="py-12">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-8 flex justify-center">
            <motion.h2
              className="text-3xl md:text-4xl font-normal text-gray-900 mb-4 lg:w-6/12 text-center lowercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Backed by Proven Infrastructure, Trusted by Builders
            </motion.h2>
            {/* <motion.p
              className="text-sm text-gray-500 max-w-2xl mx-auto my-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Power your operations with Ryno's tools designed for seamless
              conversion, global payouts, and real-time financial management.
            </motion.p> */}
          </div>

                  <motion.div 
                    className="my-10 bg-[url('/images/global-background-logos.png')] bg-contain bg-no-repeat bg-center h-[500px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                  ></motion.div>

          <GetStartedButton />
        </div>
      </section>
    </>
  );
};
export default InfrastructureSection;
