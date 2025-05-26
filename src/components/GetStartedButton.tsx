import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";

interface WhyChooseRynoProps {
  // Add props here
}
const GetStartedButton: React.FC<{
  title?: string;
  description?: string;
  icon?: React.ReactNode;
  className?: string;
  buttonClass?: string
}> = ({ title, description, icon, className, buttonClass }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full">
        <div className="block whitespace-nowrap">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Link
              href="http://app.rynopay.io"
              target="_blank"
              className={`flex flex-row justify-center items-center px-3 py-6 gap-1 m-auto w-[241px] h-[56px] bg-primary border border-[#0040C2] text-white shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl ${buttonClass && buttonClass}`}
            >
              <span className="flex items-center justify-center gap-1">
                Get Started
                <svg
                  width="20"
                  height="21"
                  viewBox="0 0 20 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.25 14.25L13.75 6.75"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M6.25 6.75H13.75V14.25"
                    stroke="#ffffff"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};
export default GetStartedButton;
