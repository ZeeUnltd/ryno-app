"use client";
import * as React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Icons } from "../../app/constants/icons";
function ContactSections() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    companySize: "",
    paymentVolume: 0,
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData((prev) => ({
      ...prev,
      companySize: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };
  return (
    <>
      <section id="contact-section" className="py-12 font-manrope">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center items-center self-stretch bg-white">
            <div className="hidden md:block p-12 my-auto bg-primary min-h-[868px] min-w-60 w-[464px] max-md:px-5 max-md:max-w-full">
              <div className="w-full">
                <div className="w-full">
                  <div className="text-2xl font-semibold leading-none text-white">
                    Let's connect
                  </div>
                  <div className="mt-4 text-lg leading-7 text-indigo-100">
                    We're here to support your business with fast, compliant
                    cross-border payments.
                  </div>
                </div>
                <div className="mt-8 w-full">
                  <div className="flex gap-4 items-start w-full">
                    <div className="pt-0.5 w-6">
                      <Icons.envelope className="object-contain w-6 aspect-square text-white mt-1" />
                      {/* <img
                        src="https://cdn.builder.io/api/v1/image/assets/fd11ae7b58f04e2e9d8dfb818a583ca6/4dc7b9ac056236644e54b36e895eb878ea3563c8?placeholderIfAbsent=true"
                        className="object-contain w-6 aspect-square"
                      /> */}
                    </div>
                    <div className="flex flex-col flex-1 shrink basis-0 min-w-60">
                      <div className="w-full">
                        <div className="text-xl font-medium text-white">
                          Chat with us
                        </div>
                        <div className="mt-2 text-base text-indigo-100">
                          our friendly team is ready to help:
                        </div>
                      </div>
                      <div className="flex items-start self-start mt-5 text-base font-medium text-white underline whitespace-nowrap">
                        <div className="gap-2 self-stretch text-white underline decoration-auto decoration-solid underline-offset-auto">
                          hello@ryno.com
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="md:flex lg:gap-8 items-center w-full mt-[406px] max-md:mt-10">
                <a
                  href="https://www.facebook.com/ryno-pay/"
                  target="_blank"
                  className="bg-primary text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-700 hover:text-white transition text-center"
                >
                  <Icons.facebook />
                </a>
                <a
                  href="https://www.x.com/ryno-pay/"
                  target="_blank"
                  className="bg-primary text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-700 hover:text-white transition text-center"
                >
                  <Icons.twitter />
                </a>
                <a
                  href="https://www.linkedin.com/company/ryno-pay/"
                  target="_blank"
                  className="bg-primary text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-700 hover:text-white transition text-center"
                >
                  <Icons.linkedIn />
                </a>

                <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-1 shrink gap-10 items-center self-stretch my-auto basis-24 min-h-[868px] min-w-60 max-md:max-w-full">
              <div className="flex flex-1 shrink justify-center self-stretch md:pl-12 my-auto w-full basis-0 min-h-[868px] min-w-60 max-md:max-w-full">
                <div className="flex-1 shrink w-full basis-0 min-w-60 max-md:max-w-full">
                  <div className="w-full max-md:max-w-full">
                    <div className="text-xl font-bold leading-snug text-gray-500 max-md:max-w-full">
                      Tell us about your business
                    </div>
                    <div className="mt-2 text-lg leading-loose text-zinc-600 max-md:max-w-full">
                      we'll be in touch shortly.
                    </div>
                  </div>
                  <div className="mt-3.5 w-full max-md:max-w-full">
                    <div className="w-full max-md:max-w-full">
                      <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
                        <div className="flex-1 shrink basis-0 min-w-60">
                          <div className="w-full">
                            <div className="w-full">
                              <div className="text-sm font-medium leading-none text-slate-700">
                                First Name
                              </div>
                              <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)]">
                                <input
                                  type="text"
                                  name="firstName"
                                  value={formData.firstName}
                                  onChange={handleInputChange}
                                  placeholder="Your name"
                                  className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shrink basis-0 min-w-60">
                          <div className="w-full">
                            <div className="w-full">
                              <div className="text-sm font-medium leading-none text-slate-700">
                                Last Name
                              </div>
                              <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)]">
                                <input
                                  type="text"
                                  name="firstName"
                                  value={formData.lastName}
                                  onChange={handleInputChange}
                                  placeholder="Last name"
                                  className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-6 items-start mt-6 w-full max-md:max-w-full">
                        <div className="flex-1 shrink basis-0 min-w-60">
                          <div className="w-full">
                            <div className="w-full">
                              <div className="text-sm font-medium leading-none text-slate-700">
                                Work Email
                              </div>
                              <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)]">
                                <input
                                  type="email"
                                  name="email"
                                  value={formData.email}
                                  onChange={handleInputChange}
                                  placeholder="company@email.com"
                                  className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 shrink basis-0 min-w-60">
                          <div className="w-full">
                            <div className="w-full">
                              <div className="text-sm font-medium leading-none text-slate-700">
                                Company Name
                              </div>
                              <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)]">
                                <input
                                  type="text"
                                  name="companyName"
                                  value={formData.companyName}
                                  onChange={handleInputChange}
                                  placeholder="Company name"
                                  className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 w-full max-md:max-w-full">
                        <div className="w-full max-md:max-w-full">
                          <div className="w-full max-md:max-w-full">
                            <div className="text-sm font-medium leading-none text-slate-700">
                              Phone number (optional)
                            </div>
                            <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] max-md:max-w-full">
                              <input
                                type="tel"
                                name="phoneNumber"
                                value={formData.phoneNumber}
                                onChange={handleInputChange}
                                placeholder="+1 234 567 890"
                                className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 w-full max-md:max-w-full">
                        <div className="text-sm font-medium leading-none text-slate-700">
                          Company Size
                        </div>
                        <div className="flex flex-wrap gap-10 items-start mt-4 w-full max-md:max-w-full">
                          <div className="w-[87px]">
                            <div className="flex gap-3 items-center w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <input
                                  type="radio"
                                  name="companySize"
                                  value="1-10"
                                  className="w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5"
                                />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                1-10
                              </div>
                            </div>
                            <div className="flex gap-3 items-center mt-4 w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <input
                                  type="radio"
                                  name="companySize"
                                  value="11-50"
                                  className="w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5"
                                />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                11-50
                              </div>
                            </div>
                            <div className="flex gap-3 items-center mt-4 w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <input
                                  type="radio"
                                  name="companySize"
                                  value="51-200"
                                  className="w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5"
                                />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                51-200
                              </div>
                            </div>
                          </div>
                          <div className="w-[98px]">
                            <div className="flex gap-3 items-center w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <input
                                  type="radio"
                                  name="companySize"
                                  value="201-500"
                                  className="w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5"
                                />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                201-500
                              </div>
                            </div>
                            <div className="flex gap-3 items-center mt-4 w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <input
                                  type="radio"
                                  name="companySize"
                                  value="500+"
                                  className="w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5"
                                />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                500+
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 w-full max-md:max-w-full">
                        <div className="w-full max-md:max-w-full">
                          <div className="w-full max-md:max-w-full">
                            <div className="text-sm font-medium leading-none text-slate-700">
                              Expected monthly payment volume (in USD or
                              equivalent)
                            </div>
                            <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] max-md:max-w-full">
                              <input
                                type="tel"
                                name="paymentVolume"
                                value={formData.paymentVolume}
                                onChange={handleInputChange}
                                placeholder="5,000,000"
                                className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 w-full min-h-[154px] max-md:max-w-full">
                        <div className="flex-1 w-full max-md:max-w-full">
                          <div className="flex-1 w-full max-md:max-w-full">
                            <div className="text-sm font-medium leading-none text-slate-700">
                              Share your goals or questions
                            </div>
                            <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] max-md:max-w-full">
                              <textarea
                                name="paymentVolume"
                                value={formData.message}
                                onChange={handleInputChange}
                                placeholder="Tell us a little about the goal or your question..."
                                className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-center items-center w-full">
                      <div className="w-full whitespace-nowrap">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="w-full"
                        >
                          <Link
                            href="/login"
                            className={`flex flex-row justify-center items-center px-3 py-2.5 gap-1 m-auto  h-[44px] bg-primary border border-[#0040C2] text-white shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl w-full`}
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
                  </div>
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
