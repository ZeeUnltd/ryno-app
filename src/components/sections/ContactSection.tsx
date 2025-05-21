"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { Icons } from "../../app/constants/icons";
import ContactForm from "./ContactForm";

function ContactSections() {
  return (
    <>
      <section
        id="contact-section"
        className="py-12 font-manrope bg-no-repeat bg-contain relative"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #F3F6FF 100%)",
        }}
      >
        {/* Decorative background images */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 w-full h-full"
          style={{
            zIndex: 0,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 0,
              bottom: 0,
              width: "40vw",
              height: "40vw",
              backgroundImage: "url('/icons/contact-bg-main.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "left bottom",
              transform: "scaleY(-1)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              right: 0,
              bottom: 0,
              width: "40vw",
              height: "40vw",
              backgroundImage: "url('/icons/contact-bg-main.svg')",
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "right bottom",
              pointerEvents: "none",
            }}
          />
        </div>
        <div className="container mx-auto max-w-6xl px-4 pb-20 ">
          <motion.h2
            className="text-3xl md:text-5xl text-center font-medium text-gray-900 my-16 lowercase"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Get in touch with us
          </motion.h2>
          <div className="flex flex-wrap justify-center items-center self-stretch gap-12 ">
            {/* Sidebar */}
            <div className="hidden md:block p-12 my-auto bg-primary rounded-[12px] min-w-60 w-[464px] max-md:px-5 max-md:max-w-full bg-[url('/icons/contact-bg-solid.svg')] bg-no-repeat bg-bottom">
              <div className="w-full">
                <div className="w-full">
                  <div className="text-4xl font-semibold leading-none text-white">
                    Let's connect
                  </div>
                  <div className="mt-4 text-lg leading-7 text-indigo-100">
                    We're here to support your business with fast, compliant
                    cross-border payments.
                  </div>
                </div>
                <div className="mt-8 w-full">
                  <div className="flex gap-4 items-start w-full">
                    <div className="pt-0.5">
                      <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                        <Icons.envelope className="object-contain w-6 aspect-square text-primary" />
                      </div>
                    </div>
                    <div className="flex flex-col flex-1 shrink basis-0 min-w-60">
                      <div className="w-full">
                        <div className="text-xs text-white">Chat with us</div>
                      </div>
                      <div className="flex items-start self-start mt-5 text-base font-medium text-white underline whitespace-nowrap">
                        <div className="gap-2 self-stretch text-white underline decoration-auto decoration-solid underline-offset-auto text-xl font-semibold">
                          info@rynopay.io
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex lg:gap-4 items-center w-full mt-[406px] max-md:mt-10">
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                  <a
                    href="https://www.facebook.com/ryno-pay/"
                    target="_blank"
                    className="text-primary px-2 py-1 rounded-md text-xs font-medium hover:opacity-20 transition text-center"
                  >
                    <Icons.facebook className="text-primary" />
                  </a>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                  <a
                    href="https://www.x.com/ryno-pay/"
                    target="_blank"
                    className="text-primary px-2 py-1 rounded-md text-xs font-medium hover:opacity-20 transition text-center"
                  >
                    <Icons.twitter />
                  </a>
                </div>
                <div className="w-16 h-16 bg-white rounded-full flex justify-center items-center">
                  <a
                    href="https://www.linkedin.com/company/ryno-pay/"
                    target="_blank"
                    className="text-primary px-2 py-1 rounded-md text-xs font-medium hover:opacity-20 transition text-center"
                  >
                    <Icons.linkedIn />
                  </a>
                </div>
                <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
              </div>
            </div>
            {/* Form */}
            <div className="flex flex-1 shrink gap-10 items-center self-stretch basis-24  min-w-60 max-md:max-w-full border rounded-lg p-10 bg-white">
              <div className="flex flex-1 shrink justify-center self-stretch my-auto w-full basis-0  min-w-60 max-md:max-w-full">
                <div className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default ContactSections;
