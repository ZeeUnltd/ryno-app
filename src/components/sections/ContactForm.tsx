"use client";
import * as React from "react";
import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";

function ContactForm() {
const formik = useFormik({
    initialValues: {
        firstName: "",
        lastName: "",
        email: "",
        companyName: "",
        phoneNumber: "",
        companySize: "",
        paymentVolume: "",
        message: "",
    },
    validationSchema: Yup.object({
        firstName: Yup.string().required("First name is required"),
        lastName: Yup.string().required("Last name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
        companyName: Yup.string().required("Company name is required"),
        phoneNumber: Yup.string().matches(/^\+?\d*$/, "Phone number must contain only digits"),
        companySize: Yup.string().required("Company size is required"),
        paymentVolume: Yup.string().required("Payment volume is required"),
        message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
        try {
            await fetch("https://formsubmit.co/prod@rynopay.io", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
                body: JSON.stringify(values),
            });
            resetForm();
        } catch (error) {
            console.error("Form submission error:", error);
        } finally {
            setSubmitting(false);
        }
    },
});

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-md:max-w-full">
      <div className="w-full max-md:max-w-full">
        {/* ...all form fields, error messages, and button (copy from original)... */}
        {/* First Name & Last Name */}
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
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Your name"
                    className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                  />
                </div>
                {formik.touched.firstName && formik.errors.firstName && (
                  <div className="text-xs text-red-500 mt-1">{formik.errors.firstName}</div>
                )}
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
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Last name"
                    className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                  />
                </div>
                {formik.touched.lastName && formik.errors.lastName && (
                  <div className="text-xs text-red-500 mt-1">{formik.errors.lastName}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Email & Company Name */}
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
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="company@email.com"
                    className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                  />
                </div>
                {formik.touched.email && formik.errors.email && (
                  <div className="text-xs text-red-500 mt-1">{formik.errors.email}</div>
                )}
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
                    value={formik.values.companyName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Company name"
                    className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                  />
                </div>
                {formik.touched.companyName && formik.errors.companyName && (
                  <div className="text-xs text-red-500 mt-1">{formik.errors.companyName}</div>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* Phone Number */}
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
                  value={formik.values.phoneNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="+1 234 567 890"
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                />
              </div>
              {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                <div className="text-xs text-red-500 mt-1">{formik.errors.phoneNumber}</div>
              )}
            </div>
          </div>
        </div>
        {/* Company Size */}
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="text-sm font-medium leading-none text-slate-700 my-4">
            Company Size
          </div>
          <div className="w-full flex gap-3 flex-col md:flex-row">
            {["1-10", "11-50", "51-200", "201-500", "500+"].map((size) => (
              <div className="flex gap-1 items-center w-full" key={size}>
                <div className="flex justify-center items-center self-stretch my-auto w-5">
                  <input
                    type="radio"
                    name="companySize"
                    value={size}
                    checked={formik.values.companySize === size}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="w-5 h-5 bg-white rounded-xl border border-solid border-[color:var(--Gray-300,#D0D5DD)] min-h-5"
                  />
                </div>
                <label
                  htmlFor="companySize"
                  className="self-stretch my-auto text-base font-medium text-slate-700"
                >
                  {size}
                </label>
              </div>
            ))}
          </div>
          {formik.touched.companySize && formik.errors.companySize && (
            <div className="text-xs text-red-500 mt-1">{formik.errors.companySize}</div>
          )}
        </div>
        {/* Payment Volume */}
        <div className="mt-6 w-full max-md:max-w-full">
          <div className="w-full max-md:max-w-full">
            <div className="w-full max-md:max-w-full">
              <div className="text-sm font-medium leading-none text-slate-700">
                Expected monthly payment volume (in USD or equivalent)
              </div>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] max-md:max-w-full">
                <input
                  type="tel"
                  name="paymentVolume"
                  value={formik.values.paymentVolume}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="5,000,000"
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                />
              </div>
              {formik.touched.paymentVolume && formik.errors.paymentVolume && (
                <div className="text-xs text-red-500 mt-1">{formik.errors.paymentVolume}</div>
              )}
            </div>
          </div>
        </div>
        {/* Message */}
        <div className="mt-6 w-full min-h-[154px] max-md:max-w-full">
          <div className="flex-1 w-full max-md:max-w-full">
            <div className="flex-1 w-full max-md:max-w-full">
              <div className="text-sm font-medium leading-none text-slate-700">
                Share your goals or questions
              </div>
              <div className="flex overflow-hidden gap-2 items-center px-3.5 py-2.5 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)] max-md:max-w-full">
                <textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Tell us a little about the goal or your question..."
                  className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                />
              </div>
              {formik.touched.message && formik.errors.message && (
                <div className="text-xs text-red-500 mt-1">{formik.errors.message}</div>
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Submit Button */}
      <div className="flex justify-center items-center w-full mt-6">
        <div className="w-full whitespace-nowrap">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full"
          >
            <button
              type="submit"
              disabled={formik.isSubmitting || !formik.isValid || !formik.dirty}
              className={`flex flex-row justify-center items-center px-3 py-2.5 gap-1 m-auto h-[56px] bg-primary border border-[#0040C2] text-white shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl w-full disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400`}
            >
              {formik.isSubmitting ? (
                <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
              ) : (
                <span className="flex items-center justify-center gap-1">
                  Send Message
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
              )}
            </button>
          </motion.div>
        </div>
      </div>
    </form>
  );
}

export default ContactForm;