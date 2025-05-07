import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface SolutionsSectionrops {
  // Add props here
}

const SolutionsSection: React.FC<SolutionsSectionrops> = () => {
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
              Solutions
            </motion.h2>
            <motion.p
              className="text-sm text-gray-500 max-w-2xl mx-auto my-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Explore our solutions to streamline cross-border payments, manage
              currencies, and optimize your treasury—all in one platform
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Cross-Border Payments",
                description:
                  "Effortlessly send and receive payments across borders with our stablecoin solutions.",
                icon: "/icons/solutions/cross-border-payments.svg",
              },
              {
                title: "Currency Management",
                description:
                  "Manage multiple currencies in one place, reducing the complexity of global transactions.",
                icon: "/icons/solutions/currency-management.svg",
              },
              {
                title: "Treasury Optimization",
                description:
                  "Optimize your treasury operations with real-time insights and analytics.",
                icon: "/icons/solutions/treasury-optimization.svg",
              },
            ].map((solution, index) => (
              <motion.div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Image
                  src={solution.icon}
                  alt={solution.title}
                  width={50}
                  height={50}
                  className="mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {solution.title}
                </h3>
                <p className="text-gray-600 text-center">
                  {solution.description}
                </p>
                
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default SolutionsSection;
