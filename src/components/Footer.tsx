import Image from "next/image";

const Footer = () => {
  return (
    <footer
      className="relative bg-black text-white pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16"
    >
      <div
        className="absolute inset-0"
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
      <div className="text-center mb-48 sm:mb-72 md:mb-96">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-fraunces text-white mb-24 sm:mb-36 md:mb-48 px-4">
          We are live in <br /> 50+ Countries
        </h2>
        <div className="relative h-48 sm:h-72 md:h-96 mx-auto max-w-4xl"></div>
      </div>

      {/* "Let's Work Together" Section */}
      <div
        className="relative bg-[#0040C2] text-white py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 rounded-xl mx-4 sm:mx-8 md:mx-auto max-w-6xl mb-12 sm:mb-16 md:mb-24 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/new-blue-footer.svg')",
          backgroundSize: "contain",
          backgroundPosition: "bottom",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-2xl md:text-3xl font-fraunces font-light text-center mb-6">
            Let's Work Together
          </h3>

          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            {/* Contact Sales Button with Tooltip */}
            <div className="relative group">
              <button className="w-full sm:w-auto bg-transparent border border-white px-6 sm:px-8 py-3 rounded-lg text-white hover:bg-white hover:text-[#1B3F81]">
                Contact Sales
              </button>
              <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                Beta Coming Soon
              </span>
            </div>

            {/* Create Account Button with Tooltip */}
            <div className="relative group">
              <button className="w-full sm:w-auto flex items-center justify-center bg-[#FFF] text-[#0040C2] px-6 py-3 rounded-lg hover:bg-blue-700 hover:text-white transition duration-300">
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
      </div>

      {/* Footer Content */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <Image
          src="/icons/logo_new_light.svg"
          alt="Ryno Logo"
          width={140}
          height={24}
          className="mx-auto mb-6 sm:w-[160px] md:w-[180px]"
        />

        <p className="text-[#999999] text-base mb-4">Products</p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-8 sm:mb-12">
          <a href="#" className="text-sm hover:underline">
            IBAN Accounts
          </a>
          <a href="#" className="text-sm hover:underline">
            Invoicing
          </a>
          <a href="#" className="text-sm hover:underline">
            Multi-Currency Payout
          </a>
          <a href="#" className="text-sm hover:underline">
            Virtual Cards
          </a>
          <a href="#" className="text-sm hover:underline">
            Corporate Treasury Management
          </a>
        </div>
      </div>

      {/* Legal Information */}
      <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400 text-start w-[90%] sm:w-[85%] md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <div className="w-full lg:w-[35%]">
          <p className="mb-6">
            Rhyno Financial (ryno) is authorized by the Financial Transactions
            and Reports Analysis Centre of Canada (FINTRAC) for processing money
            transferring and payment services under Money Services Business
            (MSB). MSB registration number: <strong>C100000021</strong>. Ryno is
            a licensed entity in the government of Alberta (Corporate Access
            Number: 2026336632).
          </p>
          <p className="mt-6 text-gray-500 text-center lg:text-left">
            © 2024 ryno • Privacy Policy • Terms of Service
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <div className="grid grid-cols-2 gap-2 sm:gap-4 justify-center bg-black py-6 w-full">
            <a
              href="https://www.linkedin.com/company/ryno-pay/"
              target="_blank"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition text-center"
            >
              LinkedIn
            </a>
            <a
              href="https://x.com/ryno_pay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-gray-300 px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-700 hover:text-white transition text-center"
            >
              X-Twitter
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;