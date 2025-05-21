import React from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import GetStartedButton from "../GetStartedButton";

interface WhyChooseRynoProps {
  // Add props here
}
const CardItem: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}> = ({ title, description, icon, className }) => {
  return (
    <>
      <motion.div
        className={`md:col-span-2 bg-white p-6 rounded-2xl h-[200px] border border-gray-200 text-left ${className}`}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileHover={{
          y: -5,
          boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="w-full text-left mb-8">{icon}</div>
        <span className="text-lg font-normal text-gray-950 mb-2">{title}</span>
        <p className="text-gray-500 font-normal">{description}</p>
      </motion.div>
    </>
  );
};

const WhyChooseRyno: React.FC<WhyChooseRynoProps> = () => {
  return (
    <>
      {/* Why choose Ryno | Trusted By Section */}
      <section className="py-16" id="why-us">
        <div className="container mx-auto max-w-6xl px-4 text-center w-full">
          <motion.h2
            className="text-3xl md:text-5xl font-medium text-gray-900 my-8 lowercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Why Choose ryno?
          </motion.h2>

          {/* <div className="w-full flex justify-center items-center">
            <div className="text-sm lg:w-8/12 text-center text-gray-500 my-8">
              Ryno bridges the gap between stablecoin technology and real-world
              business needs in emerging markets — with a secure, compliant, and
              enterprise-ready platform.
            </div>
          </div> */}
          
          <GetStartedButton />
          <div id="flexible-content-display" className="py-20 px-4">
            <div className="container mx-auto max-w-6xl">
              <div className="text-center mb-16"></div>
              <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
                {/* Row 1: 3 items */}
                <CardItem
                  title="Send Money Across Borders — Fast"
                  description="Use stablecoins to move funds globally without delays or
                    high fees."
                  icon={
                    <svg
                      width={52}
                      height={52}
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width={51}
                        height={51}
                        rx="11.5"
                        stroke="#E1E4EA"
                      />
                      <g filter="url(#filter0_d_5693_38326)">
                        <rect
                          x={6}
                          y={6}
                          width={40}
                          height={40}
                          rx={8}
                          fill="url(#paint0_linear_5693_38326)"
                          shapeRendering="crispEdges"
                        />
                        <rect
                          x="6.5"
                          y="6.5"
                          width={39}
                          height={39}
                          rx="7.5"
                          stroke="url(#paint1_linear_5693_38326)"
                          strokeLinecap="round"
                          shapeRendering="crispEdges"
                        />
                        <g clipPath="url(#clip0_5693_38326)">
                          <path
                            d="M34.332 30.1666H17.6654C17.4444 30.1666 17.2324 30.2544 17.0761 30.4107C16.9198 30.5669 16.832 30.7789 16.832 30.9999C16.832 31.2209 16.9198 31.4329 17.0761 31.5892C17.2324 31.7455 17.4444 31.8333 17.6654 31.8333H34.332C34.553 31.8333 34.765 31.7455 34.9213 31.5892C35.0776 31.4329 35.1654 31.2209 35.1654 30.9999C35.1654 30.7789 35.0776 30.5669 34.9213 30.4107C34.765 30.2544 34.553 30.1666 34.332 30.1666ZM34.332 33.4999H17.6654C17.4444 33.4999 17.2324 33.5877 17.0761 33.744C16.9198 33.9003 16.832 34.1122 16.832 34.3333C16.832 34.5543 16.9198 34.7662 17.0761 34.9225C17.2324 35.0788 17.4444 35.1666 17.6654 35.1666H34.332C34.553 35.1666 34.765 35.0788 34.9213 34.9225C35.0776 34.7662 35.1654 34.5543 35.1654 34.3333C35.1654 34.1122 35.0776 33.9003 34.9213 33.744C34.765 33.5877 34.553 33.4999 34.332 33.4999ZM20.9987 21.8333C20.8339 21.8333 20.6728 21.8821 20.5357 21.9737C20.3987 22.0653 20.2919 22.1954 20.2288 22.3477C20.1657 22.5 20.1492 22.6675 20.1814 22.8292C20.2135 22.9908 20.2929 23.1393 20.4094 23.2558C20.526 23.3724 20.6745 23.4518 20.8361 23.4839C20.9978 23.5161 21.1653 23.4996 21.3176 23.4365C21.4699 23.3734 21.6 23.2666 21.6916 23.1296C21.7832 22.9925 21.832 22.8314 21.832 22.6666C21.832 22.4456 21.7442 22.2336 21.588 22.0773C21.4317 21.921 21.2197 21.8333 20.9987 21.8333ZM32.6654 16.8333H19.332C18.669 16.8333 18.0331 17.0966 17.5643 17.5655C17.0954 18.0343 16.832 18.6702 16.832 19.3333V25.9999C16.832 26.663 17.0954 27.2988 17.5643 27.7677C18.0331 28.2365 18.669 28.4999 19.332 28.4999H32.6654C33.3284 28.4999 33.9643 28.2365 34.4331 27.7677C34.902 27.2988 35.1654 26.663 35.1654 25.9999V19.3333C35.1654 18.6702 34.902 18.0343 34.4331 17.5655C33.9643 17.0966 33.3284 16.8333 32.6654 16.8333ZM33.4987 25.9999C33.4987 26.2209 33.4109 26.4329 33.2546 26.5892C33.0983 26.7455 32.8864 26.8333 32.6654 26.8333H19.332C19.111 26.8333 18.8991 26.7455 18.7428 26.5892C18.5865 26.4329 18.4987 26.2209 18.4987 25.9999V19.3333C18.4987 19.1122 18.5865 18.9003 18.7428 18.744C18.8991 18.5877 19.111 18.4999 19.332 18.4999H32.6654C32.8864 18.4999 33.0983 18.5877 33.2546 18.744C33.4109 18.9003 33.4987 19.1122 33.4987 19.3333V25.9999ZM25.9987 20.1666C25.5042 20.1666 25.0209 20.3132 24.6098 20.5879C24.1986 20.8626 23.8782 21.2531 23.689 21.7099C23.4998 22.1667 23.4503 22.6694 23.5467 23.1543C23.6432 23.6393 23.8813 24.0847 24.2309 24.4344C24.5806 24.784 25.026 25.0221 25.511 25.1185C25.9959 25.215 26.4986 25.1655 26.9554 24.9763C27.4122 24.7871 27.8027 24.4666 28.0774 24.0555C28.3521 23.6444 28.4987 23.161 28.4987 22.6666C28.4987 22.0035 28.2353 21.3677 27.7665 20.8988C27.2976 20.43 26.6617 20.1666 25.9987 20.1666ZM25.9987 23.4999C25.8339 23.4999 25.6728 23.451 25.5357 23.3595C25.3987 23.2679 25.2919 23.1378 25.2288 22.9855C25.1657 22.8332 25.1492 22.6657 25.1814 22.504C25.2135 22.3424 25.2929 22.1939 25.4094 22.0773C25.526 21.9608 25.6745 21.8814 25.8361 21.8493C25.9978 21.8171 26.1653 21.8336 26.3176 21.8967C26.4699 21.9598 26.6 22.0666 26.6916 22.2036C26.7832 22.3407 26.832 22.5018 26.832 22.6666C26.832 22.8876 26.7442 23.0996 26.588 23.2558C26.4317 23.4121 26.2197 23.4999 25.9987 23.4999ZM30.9987 21.8333C30.8339 21.8333 30.6728 21.8821 30.5357 21.9737C30.3987 22.0653 30.2919 22.1954 30.2288 22.3477C30.1657 22.5 30.1492 22.6675 30.1814 22.8292C30.2135 22.9908 30.2929 23.1393 30.4094 23.2558C30.526 23.3724 30.6745 23.4518 30.8361 23.4839C30.9978 23.5161 31.1653 23.4996 31.3176 23.4365C31.4699 23.3734 31.6 23.2666 31.6916 23.1296C31.7832 22.9925 31.832 22.8314 31.832 22.6666C31.832 22.4456 31.7442 22.2336 31.588 22.0773C31.4317 21.921 31.2197 21.8333 30.9987 21.8333Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5693_38326"
                          x={2}
                          y={4}
                          width={48}
                          height={48}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={2} />
                          <feGaussianBlur stdDeviation={2} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.054902 0 0 0 0 0.0705882 0 0 0 0 0.105882 0 0 0 0.5 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5693_38326"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5693_38326"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_5693_38326"
                          x1={26}
                          y1={6}
                          x2={26}
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" stopOpacity={0} />
                          <stop offset={1} stopColor="#0040C2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_5693_38326"
                          x1={26}
                          y1={6}
                          x2={26}
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" />
                          <stop
                            offset={1}
                            stopColor="#0040C2"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <clipPath id="clip0_5693_38326">
                          <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(16 16)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />

                <CardItem
                  title="Built for Emerging Markets"
                  description="Modern financial tools designed for where traditional banking falls short."
                  icon={
                    <svg
                      width={53}
                      height={52}
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.832031"
                        y="0.5"
                        width={51}
                        height={51}
                        rx="11.5"
                        stroke="#E1E4EA"
                      />
                      <g filter="url(#filter0_d_5693_38333)">
                        <rect
                          x="6.33203"
                          y={6}
                          width={40}
                          height={40}
                          rx={8}
                          fill="url(#paint0_linear_5693_38333)"
                          shapeRendering="crispEdges"
                        />
                        <rect
                          x="6.83203"
                          y="6.5"
                          width={39}
                          height={39}
                          rx="7.5"
                          stroke="url(#paint1_linear_5693_38333)"
                          strokeLinecap="round"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M34.6667 22.5164C34.6707 22.4636 34.6707 22.4107 34.6667 22.358L33 18.1914C32.9349 18.0266 32.819 17.887 32.6692 17.7926C32.5194 17.6982 32.3433 17.654 32.1667 17.6664H20.5C20.3331 17.6662 20.17 17.7161 20.0318 17.8098C19.8936 17.9034 19.7868 18.0363 19.725 18.1914L18.0583 22.358C18.0543 22.4107 18.0543 22.4636 18.0583 22.5164C18.0306 22.5627 18.0109 22.6134 18 22.6664C18.0093 23.2424 18.1677 23.8062 18.4598 24.3028C18.7519 24.7993 19.1677 25.2117 19.6667 25.4997V33.4997C19.6667 33.7207 19.7545 33.9327 19.9107 34.0889C20.067 34.2452 20.279 34.333 20.5 34.333H32.1667C32.3877 34.333 32.5996 34.2452 32.7559 34.0889C32.9122 33.9327 33 33.7207 33 33.4997V25.533C33.5038 25.2422 33.9227 24.8245 34.2151 24.3216C34.5075 23.8187 34.6632 23.2481 34.6667 22.6664C34.6745 22.6167 34.6745 22.566 34.6667 22.5164ZM27.1667 32.6664H25.5V29.333H27.1667V32.6664ZM31.3333 32.6664H28.8333V28.4997C28.8333 28.2787 28.7455 28.0667 28.5893 27.9104C28.433 27.7541 28.221 27.6664 28 27.6664H24.6667C24.4457 27.6664 24.2337 27.7541 24.0774 27.9104C23.9211 28.0667 23.8333 28.2787 23.8333 28.4997V32.6664H21.3333V25.9997C21.8079 25.997 22.2764 25.893 22.7075 25.6947C23.1387 25.4964 23.5225 25.2083 23.8333 24.8497C24.1461 25.2044 24.5308 25.4884 24.9619 25.683C25.3929 25.8776 25.8604 25.9782 26.3333 25.9782C26.8063 25.9782 27.2738 25.8776 27.7048 25.683C28.1358 25.4884 28.5205 25.2044 28.8333 24.8497C29.1442 25.2083 29.528 25.4964 29.9591 25.6947C30.3903 25.893 30.8588 25.997 31.3333 25.9997V32.6664ZM31.3333 24.333C30.8913 24.333 30.4674 24.1574 30.1548 23.8449C29.8423 23.5323 29.6667 23.1084 29.6667 22.6664C29.6667 22.4453 29.5789 22.2334 29.4226 22.0771C29.2663 21.9208 29.0543 21.833 28.8333 21.833C28.6123 21.833 28.4004 21.9208 28.2441 22.0771C28.0878 22.2334 28 22.4453 28 22.6664C28 23.1084 27.8244 23.5323 27.5118 23.8449C27.1993 24.1574 26.7754 24.333 26.3333 24.333C25.8913 24.333 25.4674 24.1574 25.1548 23.8449C24.8423 23.5323 24.6667 23.1084 24.6667 22.6664C24.6667 22.4453 24.5789 22.2334 24.4226 22.0771C24.2663 21.9208 24.0543 21.833 23.8333 21.833C23.6123 21.833 23.4004 21.9208 23.2441 22.0771C23.0878 22.2334 23 22.4453 23 22.6664C23.0082 22.8852 22.9732 23.1036 22.8971 23.3089C22.8209 23.5143 22.705 23.7026 22.556 23.8632C22.4071 24.0237 22.2279 24.1534 22.0289 24.2447C21.8298 24.3361 21.6147 24.3873 21.3958 24.3955C20.9538 24.4121 20.5233 24.2524 20.199 23.9516C20.0384 23.8026 19.9088 23.6235 19.8175 23.4244C19.7261 23.2253 19.6749 23.0102 19.6667 22.7914L21.0667 19.333H31.6L33 22.7914C32.9684 23.2114 32.779 23.6038 32.4698 23.8899C32.1606 24.1759 31.7545 24.3342 31.3333 24.333Z"
                          fill="white"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5693_38333"
                          x="2.33203"
                          y={4}
                          width={48}
                          height={48}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={2} />
                          <feGaussianBlur stdDeviation={2} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.054902 0 0 0 0 0.0705882 0 0 0 0 0.105882 0 0 0 0.5 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5693_38333"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5693_38333"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_5693_38333"
                          x1="26.332"
                          y1={6}
                          x2="26.332"
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" stopOpacity={0} />
                          <stop offset={1} stopColor="#0040C2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_5693_38333"
                          x1="26.332"
                          y1={6}
                          x2="26.332"
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" />
                          <stop
                            offset={1}
                            stopColor="#0040C2"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                />

                <CardItem
                  title="Full Control, Global Access"
                  description="Manage your funds in real-time across currencies, countries, and 80+ markets."
                  icon={
                    <svg
                      width={53}
                      height={52}
                      viewBox="0 0 53 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="1.16797"
                        y="0.5"
                        width={51}
                        height={51}
                        rx="11.5"
                        stroke="#E1E4EA"
                      />
                      <g filter="url(#filter0_d_5693_38340)">
                        <rect
                          x="6.66797"
                          y={6}
                          width={40}
                          height={40}
                          rx={8}
                          fill="url(#paint0_linear_5693_38340)"
                          shapeRendering="crispEdges"
                        />
                        <rect
                          x="7.16797"
                          y="6.5"
                          width={39}
                          height={39}
                          rx="7.5"
                          stroke="url(#paint1_linear_5693_38340)"
                          strokeLinecap="round"
                          shapeRendering="crispEdges"
                        />
                        <g clipPath="url(#clip0_5693_38340)">
                          <path
                            d="M26.668 36C21.1455 36 16.668 31.5225 16.668 26C16.668 20.4775 21.1455 16 26.668 16C32.1904 16 36.668 20.4775 36.668 26C36.668 31.5225 32.1904 36 26.668 36ZM26.668 18.5C22.5261 18.5 19.168 21.8582 19.168 26C19.168 30.1418 22.5261 33.5 26.668 33.5C30.8098 33.5 34.168 30.1418 34.168 26C34.168 21.8582 30.8098 18.5 26.668 18.5ZM30.3435 30.508L30.1238 30.6362L29.489 31.0231L29.1143 31.2954C28.8359 31.4284 28.5454 31.5334 28.2451 31.6225V31.2539L28.1389 30.4055C28.1389 30.4055 28.0864 29.916 28.007 29.7879C27.9277 29.6585 27.7422 29.4778 27.5566 29.4009C27.3711 29.324 27.2393 29.324 27.133 29.1958C27.0268 29.0664 26.9475 28.8345 26.8156 28.6294C26.6826 28.4232 26.5239 28.2168 26.5239 28.1143V26.9558L26.6569 25.978L26.9475 25.7718L27.2917 25.386L27.5297 25.3091L28.35 25.4629H28.9323L29.1716 25.9524L29.727 26.3895L30.0712 26.9303L30.5204 27.0841H31.0234L31.3677 27.4967L31.5801 27.9337L31.6594 28.2425V28.7577L31.6045 29.0616C31.2688 29.6121 30.8428 30.0967 30.3435 30.508ZM28.2976 21.6274L27.7154 21.9363L27.5042 22.5283L27.16 22.8371H26.0211L25.4925 23.0434L25.4656 23.4548L25.2545 23.7892L25.2007 24.1505L25.307 24.4594L25.4388 24.7682C25.4388 24.7682 25.7574 25.1283 25.4388 25.3859C25.4388 25.3859 25.0421 25.3859 24.9627 25.2565C24.8834 25.1283 24.3011 24.7682 24.1949 24.6645C24.0899 24.5619 23.7457 24.4594 23.7457 24.4594L23.3221 24.3043L22.9254 24.2787L22.951 23.7379L22.9254 23.2753L22.7654 22.9408L22.3162 22.6051L22.2893 22.245L22.3443 22.0448C23.4161 21.0084 24.8931 20.3663 26.5239 20.3663C27.4443 20.3663 28.305 20.5873 29.0825 20.9511L29.0654 21.0866L28.2976 21.6274Z"
                            fill="white"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5693_38340"
                          x="2.66797"
                          y={4}
                          width={48}
                          height={48}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={2} />
                          <feGaussianBlur stdDeviation={2} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.054902 0 0 0 0 0.0705882 0 0 0 0 0.105882 0 0 0 0.5 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5693_38340"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5693_38340"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_5693_38340"
                          x1="26.668"
                          y1={6}
                          x2="26.668"
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" stopOpacity={0} />
                          <stop offset={1} stopColor="#0040C2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_5693_38340"
                          x1="26.668"
                          y1={6}
                          x2="26.668"
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" />
                          <stop
                            offset={1}
                            stopColor="#0040C2"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <clipPath id="clip0_5693_38340">
                          <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(16.668 16)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />

                {/* Row 2: 2 items, filling the width */}
                <CardItem
                  title="Everything in One Platform"
                  description="Handle payments, treasury, FX, and payouts — all in one place."
                  className="md:col-span-3 bg-white p-6 rounded-2xl h-[200px] border border-gray-200"
                  icon={
                    <svg
                      width={52}
                      height={52}
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width={51}
                        height={51}
                        rx="11.5"
                        stroke="#E1E4EA"
                      />
                      <g filter="url(#filter0_d_5693_38348)">
                        <rect
                          x={6}
                          y={6}
                          width={40}
                          height={40}
                          rx={8}
                          fill="url(#paint0_linear_5693_38348)"
                          shapeRendering="crispEdges"
                        />
                        <rect
                          x="6.5"
                          y="6.5"
                          width={39}
                          height={39}
                          rx="7.5"
                          stroke="url(#paint1_linear_5693_38348)"
                          strokeLinecap="round"
                          shapeRendering="crispEdges"
                        />
                        <g clipPath="url(#clip0_5693_38348)">
                          <path
                            d="M26.0013 28.5001C23.2399 28.5001 21.0013 26.2615 21.0013 23.5001V18.8705C21.0013 18.5256 21.0013 18.3531 21.0516 18.2151C21.1358 17.9836 21.3181 17.8013 21.5496 17.717C21.6877 17.6667 21.8601 17.6667 22.205 17.6667H29.7976C30.1425 17.6667 30.3149 17.6667 30.453 17.717C30.6845 17.8013 30.8668 17.9836 30.951 18.2151C31.0013 18.3531 31.0013 18.5256 31.0013 18.8705V23.5001C31.0013 26.2615 28.7627 28.5001 26.0013 28.5001ZM26.0013 28.5001V31.0001M31.0013 19.3334H33.0846C33.4729 19.3334 33.6671 19.3334 33.8202 19.3968C34.0244 19.4814 34.1866 19.6437 34.2712 19.8478C34.3346 20.001 34.3346 20.1951 34.3346 20.5834V21.0001C34.3346 21.7751 34.3346 22.1625 34.2494 22.4805C34.0183 23.3432 33.3444 24.0171 32.4817 24.2482C32.1638 24.3334 31.7763 24.3334 31.0013 24.3334M21.0013 19.3334H18.918C18.5297 19.3334 18.3355 19.3334 18.1824 19.3968C17.9782 19.4814 17.816 19.6437 17.7314 19.8478C17.668 20.001 17.668 20.1951 17.668 20.5834V21.0001C17.668 21.7751 17.668 22.1625 17.7532 22.4805C17.9843 23.3432 18.6582 24.0171 19.5209 24.2482C19.8388 24.3334 20.2263 24.3334 21.0013 24.3334M22.205 34.3334H29.7976C30.0021 34.3334 30.168 34.1676 30.168 33.963C30.168 32.3266 28.8414 31.0001 27.205 31.0001H24.7976C23.1612 31.0001 21.8346 32.3266 21.8346 33.963C21.8346 34.1676 22.0005 34.3334 22.205 34.3334Z"
                            stroke="white"
                            strokeWidth="1.67"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </g>
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5693_38348"
                          x={2}
                          y={4}
                          width={48}
                          height={48}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={2} />
                          <feGaussianBlur stdDeviation={2} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.054902 0 0 0 0 0.0705882 0 0 0 0 0.105882 0 0 0 0.5 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5693_38348"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5693_38348"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_5693_38348"
                          x1={26}
                          y1={6}
                          x2={26}
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" stopOpacity={0} />
                          <stop offset={1} stopColor="#0040C2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_5693_38348"
                          x1={26}
                          y1={6}
                          x2={26}
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" />
                          <stop
                            offset={1}
                            stopColor="#0040C2"
                            stopOpacity={0}
                          />
                        </linearGradient>
                        <clipPath id="clip0_5693_38348">
                          <rect
                            width={20}
                            height={20}
                            fill="white"
                            transform="translate(16 16)"
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  }
                />

                <CardItem
                  title="Fully Compliant"
                  description="Operate globally with full legal and regulatory certainty."
                  className="md:col-span-3 bg-white p-6 rounded-2xl h-[200px] border border-gray-200"
                  icon={
                    <svg
                      width={52}
                      height={52}
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width={51}
                        height={51}
                        rx="11.5"
                        stroke="#E1E4EA"
                      />
                      <g filter="url(#filter0_d_5693_38355)">
                        <rect
                          x={6}
                          y={6}
                          width={40}
                          height={40}
                          rx={8}
                          fill="url(#paint0_linear_5693_38355)"
                          shapeRendering="crispEdges"
                        />
                        <rect
                          x="6.5"
                          y="6.5"
                          width={39}
                          height={39}
                          rx="7.5"
                          stroke="url(#paint1_linear_5693_38355)"
                          strokeLinecap="round"
                          shapeRendering="crispEdges"
                        />
                        <path
                          d="M27.5 18.5H21.5C21.1022 18.5 20.7206 18.658 20.4393 18.9393C20.158 19.2206 20 19.6022 20 20V32C20 32.3978 20.158 32.7794 20.4393 33.0607C20.7206 33.342 21.1022 33.5 21.5 33.5H30.5C30.8978 33.5 31.2794 33.342 31.5607 33.0607C31.842 32.7794 32 32.3978 32 32V23L27.5 18.5Z"
                          stroke="white"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29 29.75H23"
                          stroke="white"
                          strokeWidth="1.67"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M29 26.75H23"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M24.5 23.75H23.75H23"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M27.5 18.5V23H32"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_5693_38355"
                          x={2}
                          y={4}
                          width={48}
                          height={48}
                          filterUnits="userSpaceOnUse"
                          colorInterpolationFilters="sRGB"
                        >
                          <feFlood
                            floodOpacity={0}
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy={2} />
                          <feGaussianBlur stdDeviation={2} />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.054902 0 0 0 0 0.0705882 0 0 0 0 0.105882 0 0 0 0.5 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_5693_38355"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_5693_38355"
                            result="shape"
                          />
                        </filter>
                        <linearGradient
                          id="paint0_linear_5693_38355"
                          x1={26}
                          y1={6}
                          x2={26}
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" stopOpacity={0} />
                          <stop offset={1} stopColor="#0040C2" />
                        </linearGradient>
                        <linearGradient
                          id="paint1_linear_5693_38355"
                          x1={26}
                          y1={6}
                          x2={26}
                          y2={46}
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#0040C2" />
                          <stop
                            offset={1}
                            stopColor="#0040C2"
                            stopOpacity={0}
                          />
                        </linearGradient>
                      </defs>
                    </svg>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyChooseRyno;
