"use client";
import * as React from "react";
import GetStartedButton from "../GetStartedButton";

function ContactSections() {
  return (
    <>
      <section id="contact-section" className="py-12 font-manrope">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="flex flex-wrap justify-center items-center self-stretch bg-white">
            <div className="hidden md:block self-stretch p-12 my-auto bg-primary min-h-[868px] min-w-60 w-[464px] max-md:px-5 max-md:max-w-full">
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
                      <img
                        src="https://cdn.builder.io/api/v1/image/assets/fd11ae7b58f04e2e9d8dfb818a583ca6/4dc7b9ac056236644e54b36e895eb878ea3563c8?placeholderIfAbsent=true"
                        className="object-contain w-6 aspect-square"
                      />
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
              <div className="flex gap-8 items-center w-full mt-[506px] max-md:mt-10">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/fd11ae7b58f04e2e9d8dfb818a583ca6/5d489b2d588c2d3a74db021b9e92c7b41c5bc5ff?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/fd11ae7b58f04e2e9d8dfb818a583ca6/9889b083ffe2ab6c59c5728b5785bee2c6d695aa?placeholderIfAbsent=true"
                  className="object-contain shrink-0 self-stretch my-auto w-6 aspect-square"
                />
                <div className="flex shrink-0 self-stretch my-auto w-6 h-6" />
              </div>
            </div>
            <div className="flex flex-1 shrink gap-10 items-center self-stretch my-auto basis-24 min-h-[868px] min-w-60 max-md:max-w-full">
              <div className="flex flex-1 shrink justify-center self-stretch pl-12 my-auto w-full basis-0 min-h-[868px] min-w-60 max-md:max-w-full">
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
                                <div className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60">
                                  Your name
                                </div>
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
                                <div className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60">
                                  Your name
                                </div>
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
                                <div className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60">
                                  you@company.com
                                </div>
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
                                <div className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60">
                                  Your company name
                                </div>
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
                              <div className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
                                +1 (555) 000-0000
                              </div>
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
                                <div className="flex self-stretch my-auto w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5" />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                1-10
                              </div>
                            </div>
                            <div className="flex gap-3 items-center mt-4 w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <div className="flex self-stretch my-auto w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5" />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                11-50
                              </div>
                            </div>
                            <div className="flex gap-3 items-center mt-4 w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <div className="flex self-stretch my-auto w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5" />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                51-200
                              </div>
                            </div>
                          </div>
                          <div className="w-[98px]">
                            <div className="flex gap-3 items-center w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <div className="flex self-stretch my-auto w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5" />
                              </div>
                              <div className="self-stretch my-auto text-base font-medium text-slate-700">
                                201-500
                              </div>
                            </div>
                            <div className="flex gap-3 items-center mt-4 w-full">
                              <div className="flex justify-center items-center self-stretch my-auto w-5">
                                <div className="flex self-stretch my-auto w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5" />
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
                            <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 whitespace-nowrap bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] max-md:max-w-full">
                              <div className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 max-md:max-w-full">
                                0
                              </div>
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
                            <div className="overflow-hidden flex-1 shrink gap-2 px-3.5 py-2.5 mt-1.5 text-base leading-6 text-gray-500 bg-white rounded-lg border border-solid shadow-sm basis-0 border-[color:var(--Gray-300,#D0D5DD)] size-full max-md:max-w-full">
                              Tell us a little about the goal or your
                              question...
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-full">
                      <GetStartedButton buttonClass="w-full" />
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
