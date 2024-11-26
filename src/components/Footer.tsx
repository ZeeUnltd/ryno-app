import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-32 pb-16">
      <div className="text-center mb-96">
        <h2 className="text-4xl font-fraunces text-white">
          We are live in <br /> 50 Countries
        </h2>
        <div className="relative h-96 mx-auto max-w-4xl"></div>
      </div>
      <div
        className="absolute  top-56"
        style={{
          backgroundImage: `url('/images/global-background.svg')`,
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "90%",
          width: "100%",
        }}
      />
      {/* "We Are Live In" Section */}

      {/* <div
        className="relative bg-[#0040C2] text-white py-16 px-8 rounded-xl mx-auto max-w-6xl mb-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/new-blue-footer.svg')",
          backgroundSize: "contain", 
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10">
          <h3 className="text-3xl font-fraunces font-light text-center mb-6">
            Let’s Work Together
          </h3>
          <p className="text-center text-sm font-normal font-inter max-w-3xl mx-auto mb-2">
            Join the growing number of African enterprises that trust Ryno for
            their financial needs.
          </p>
          <p className="text-center text-sm font-normal font-inter max-w-3xl mx-auto mb-8">
            Get in touch to learn more about how we can help your business
            thrive.
          </p>
          <div className="flex justify-center space-x-6">
            <div className="relative group">
              <button className="bg-transparent border border-white px-8 py-3 rounded-lg text-white hover:bg-white hover:text-[#1B3F81]">
                Contact Sales
              </button>
              <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                Beta Coming Soon
              </span>
            </div>
            <div className="relative group">
              <button className="flex items-center bg-[#FFF] text-[#0040C2] px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
                <span className="mr-2">Create Account</span>
                <Image
                  src="/images/navigation-blue.svg"
                  height={14}
                  width={14}
                  alt="navigate-icon"
                  className="inline-block"
                />
              </button>
              <span className="absolute top-full left-0 mt-2 px-6 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                Beta Coming Soon
              </span>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-16"></div>
      {/* Footer Content */}
      <div className="text-center mb-16">
        <Image
          src="/icons/logo_new_light.svg"
          alt="Ryno Logo"
          width={180}
          height={32}
          className="mx-auto mb-6"
        />

        <p className="text-[#999999] text-base mb-4">Products</p>
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" className="text-sm hover:underline">
            IBAN Accounts
          </a>
          <a href="#" className="text-sm hover:underline">
            Invoicing
          </a>
          <a href="#" className="text-sm hover:underline">
            Multi-Currency Payout{" "}
          </a>
          <a href="#" className="text-sm hover:underline">
            Virtual Cards{" "}
          </a>{" "}
          <a href="#" className="text-sm hover:underline">
            Corporate Treasury Management{" "}
          </a>
        </div>
      </div>

      {/* Legal Information */}
      <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400 text-start w-[80%] mx-auto flex flex-col lg:flex-row justify-between">
        <div className="w-full md:w-[35%] ">
          <p className="mb-6">
            Rhyno Financial Inc. (ryno) is a global technology company
            registered in Alberta, Canada, and is authorized by the Financial
            Transactions and Reports Analysis Centre of Canada (FINTRAC) MSB No.
            C100000021
          </p>
          <p className="mt-6 text-gray-500">
            © 2024 ryno • Privacy Policy • Terms of Service
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <div>
            <Image
              src="/images/fintrac.jpeg"
              alt="fintrac"
              width={224}
              height={24}
              className="text-end"
            />
          </div>

          <div className="grid grid-cols-2 gap-2 sm:gap-4 sm:grid-cols-2 justify-center bg-black py-6">
            <a
              href="https://www.linkedin.com/company/ryno-pay/"
              target="_blank"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition"
            >
              LinkedIn
            </a>
            {/* <a
              href="#"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition"
            >
              Instagram
            </a> */}
            <a
              href="https://x.com/ryno_pay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition"
            >
              X-Twitter
            </a>

            {/* <a
              href="#"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition"
            >
              Facebook
            </a> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
