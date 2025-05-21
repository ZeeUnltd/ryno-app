import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

interface FeaturesSectionrops {
  // Add props here
}

const FeaturesSection: React.FC<FeaturesSectionrops> = () => {
  return (
    <>
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 lowercase"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Features That Set Us Apart
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Everything you need to manage global payments efficiently and
              securely
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Low Transaction Fees",
                description:
                  "Save up to 70% on transaction fees compared to traditional banks and payment providers.",
                icon: "💰",
              },
              {
                title: "Real-Time Tracking",
                description:
                  "Track all your transactions in real-time with detailed status updates and notifications.",
                icon: "📊",
              },
              {
                title: "Multi-Currency Support",
                description:
                  "Send and receive payments in over 50 currencies with competitive exchange rates.",
                icon: "🌐",
              },
              {
                title: "Secure Payments",
                description:
                  "Enterprise-grade security with end-to-end encryption and fraud detection systems.",
                icon: "🔒",
              },
              {
                title: "API Integration",
                description:
                  "Easily integrate our payment solutions into your existing systems with our robust API.",
                icon: "⚙️",
              },
              {
                title: "24/7 Support",
                description:
                  "Get help whenever you need it with our dedicated customer support team.",
                icon: "🛎️",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );

};
export default FeaturesSection;
