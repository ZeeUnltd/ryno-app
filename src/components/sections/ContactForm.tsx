"use client";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import SuccessPage from "./SuccessPage";

function ContactForm() {
  const [isSuccess, setIsSuccess] = React.useState(false);
  const [isFailure, setIsFailure] = React.useState(false);

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
      // _captcha: false,
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
        .min(2, "First name must be at least 2 characters")
        .max(25, "First name must be at most 25 characters")
        .required("First name is required"),
      lastName: Yup.string()
        .min(2, "Last name must be at least 2 characters")
        .max(25, "Last name must be at most 25 characters")
        .required("Last name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      companyName: Yup.string()
        .max(60, "Company name must be at most 60 characters")
        .required("Company name is required"),
      phoneNumber: Yup.string().matches(
        /^\+?\d*$/,
        "Phone number must contain only digits"
      ),
      companySize: Yup.string().required("Company size is required"),
      paymentVolume: Yup.string().required("Payment volume is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: async (values, { resetForm, setSubmitting }) => {
      try {
        const response = await fetch(
          "https://api-notification.rynopay.io/contact/submit",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(values),
          }
        );
        if (response.ok) {
          setIsSuccess(true);
          setIsFailure(false);
          resetForm();
        } else {
          setIsSuccess(false);
          setIsFailure(true);
        }
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="w-full max-md:max-w-full">
      {isSuccess ? (
        <AnimatePresence>
          <SuccessPage key="success" handleReset={() => setIsSuccess(false)} />
        </AnimatePresence>
      ) : isFailure ? (
        <motion.div className="w-full max-md:max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-md:max-w-full"
          >
            <div className="flex flex-col items-center justify-center p-8 w-full bg-red-50 rounded-2xl border border-red-200 max-md:max-w-full">
              {/* Error Icon */}
              <div className="flex items-center justify-center w-16 h-16 mb-4 bg-red-100 rounded-full">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 9V13M12 17H12.01M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="#DC2626"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* Error Message */}
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold text-red-800 mb-2">
                  Message Failed to Send
                </h3>
                <p className="text-red-600 text-sm max-w-md">
                  We're sorry, but there was an issue sending your message.
                  Please check your connection and try again.
                </p>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 w-full max-w-sm">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsFailure(false);
                    // Optionally reset form or keep values for retry
                  }}
                  className="flex-1 px-4 py-3 bg-primary text-white font-medium rounded-lg border border-primary hover:bg-primary/90 transition-colors duration-200"
                >
                  Try Again
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => {
                    setIsFailure(false);
                    formik.resetForm();
                  }}
                  className="flex-1 px-4 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                >
                  Start Over
                </motion.button>
              </div>

              {/* Additional Help */}
              <div className="mt-4 text-center">
                <p className="text-xs text-gray-500">
                  Still having trouble? Contact us directly at{" "}
                  <a
                    href="mailto:support@rynopay.io"
                    className="text-primary hover:underline"
                  >
                    support@rynopay.io
                  </a>
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : (
        <>
          <div className="w-full max-md:max-w-full">
            {/* First Name & Last Name */}
            <div className="flex flex-wrap gap-6 items-start w-full max-md:max-w-full">
              <div className="flex-1 shrink basis-0 min-w-60">
                <div className="w-full">
                  <div className="w-full">
                    <div className="text-sm font-medium leading-none text-slate-700">
                      First Name
                      <span className="text-red-500 ml-1">*</span>
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
                      <div className="text-xs text-red-500 mt-1">
                        {formik.errors.firstName}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 shrink basis-0 min-w-60">
                <div className="w-full">
                  <div className="w-full">
                    <div className="text-sm font-medium leading-none text-slate-700">
                      Last Name
                      <span className="text-red-500 ml-1">*</span>
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
                      <div className="text-xs text-red-500 mt-1">
                        {formik.errors.lastName}
                      </div>
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
                      <span className="text-red-500 ml-1">*</span>
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
                      <div className="text-xs text-red-500 mt-1">
                        {formik.errors.email}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex-1 shrink basis-0 min-w-60">
                <div className="w-full">
                  <div className="w-full">
                    <div className="text-sm font-medium leading-none text-slate-700">
                      Company Name
                      <span className="text-red-500 ml-1">*</span>
                    </div>
                    <div className="flex overflow-hidden gap-2 items-center px-4 py-3 mt-1.5 w-full text-base text-gray-500 bg-white rounded-lg border border-solid shadow-sm border-[color:var(--Gray-300,#D0D5DD)]">
                      <input
                        type="text"
                        name="companyName"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        placeholder="Company name"
                        maxLength={60}
                        className="flex-1 shrink gap-2 self-stretch my-auto w-full basis-0 min-w-60 bg-transparent outline-none"
                      />
                    </div>
                    {formik.touched.companyName &&
                      formik.errors.companyName && (
                        <div className="text-xs text-red-500 mt-1">
                          {formik.errors.companyName}
                        </div>
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
                    Phone number{" "}
                    <span className="text-gray-400 text-xs">(optional)</span>
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
                    <div className="text-xs text-red-500 mt-1">
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </div>
              </div>
            </div>
            {/* Company Size */}
            <div className="mt-6 w-full max-md:max-w-full">
              <div className="text-sm font-medium leading-none text-slate-700 my-4">
                Company Size
                <span className="text-red-500 ml-1">*</span>
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
                <div className="text-xs text-red-500 mt-1">
                  {formik.errors.companySize}
                </div>
              )}
            </div>
            {/* Payment Volume */}
            <div className="mt-6 w-full max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <div className="w-full max-md:max-w-full">
                  <div className="text-sm font-medium leading-none text-slate-700">
                    Expected monthly payment volume (in USD or equivalent)
                    <span className="text-red-500 ml-1">*</span>
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
                  {formik.touched.paymentVolume &&
                    formik.errors.paymentVolume && (
                      <div className="text-xs text-red-500 mt-1">
                        {formik.errors.paymentVolume}
                      </div>
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
                    <span className="text-red-500 ml-1">*</span>
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
                    <div className="text-xs text-red-500 mt-1">
                      {formik.errors.message}
                    </div>
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
                  disabled={
                    formik.isSubmitting || !formik.isValid || !formik.dirty
                  }
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
        </>
      )}
    </form>
  );
}

export default ContactForm;
