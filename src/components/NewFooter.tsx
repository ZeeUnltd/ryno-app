import Image from "next/image";

const Footer = () => {
  return (
    <footer className="relative bg-black text-white pt-16 sm:pt-24 md:pt-32 pb-8 sm:pb-12 md:pb-16">
     

      {/* Footer Content */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 px-4">
        <Image
          src="/icons/logo_new_light.svg"
          alt="Ryno Logo"
          width={140}
          height={24}
          className="mx-auto mb-6 sm:w-[160px] md:w-[180px]"
        />

        <p className="text-white text-base mb-4">
          {/* ryno empowers businesses with 24/7 global and secure cross-border and
          trade services seamlessly */}
        </p>
        {/* <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 md:space-x-8 mb-8 sm:mb-12">
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
        </div> */}
      </div>

      {/* Legal Information */}
      <div className="border-t border-gray-700 pt-8 mt-8 text-sm text-gray-400 text-start w-[90%] sm:w-[85%] md:w-[80%] mx-auto flex flex-col lg:flex-row justify-between gap-8 lg:gap-0">
        <div className="w-full lg:w-[35%]">
          <p className="mb-6">
            Rhyno Financial Inc (dba ryno) is registered the Financial Transactions
            and Reports Analysis Centre of Canada (FINTRAC) as a Money Services Business
            (MSB) for money transfer and payment processing services. MSB Registration Number: <strong>C100000021</strong>. 
            The company is incorporated by the Government of Alberta (Corporate Access Number: 2026336632)
             
            {/* Rhyno Financial (ryno) is authorized by the Financial Transactions and Reports Analysis Centre of Canada (FINTRAC) for the provision of money transferring and payment services under Money Services Business (MSB) registration number C100000021) and incorporated by the Government of Alberta (Corporate Access Number: 2026336632) */}
          </p>
          <p className="hidden lg:block mt-6 text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} ryno • Privacy Policy • Terms of
            Service{" "}
          </p>
        </div>
        <div className="flex flex-col items-center lg:items-end">
          <div className="flex flex-col items-center md:items-end">
            <div className="flex justify-center lg:justify-end">
              {/* <img
                src="/images/ISO_logo.png"
                alt="ISO Certification"
                width={69}
                height={64}
                className="mb-4"
              /> */}
            </div>
            {/* <p className="text-center md:text-right w-52 text-[#525866] text-sm">
              ryno is ISO 27001 (Information Security Management System)
              certified.
            </p> */}
          </div>
          <div className="flex flex-row gap-2 sm:gap-4 justify-center bg-black py-6 w-full mt-auto">
            <a
              href="https://www.linkedin.com/company/ryno-pay/"
              target="_blank"
              className="bg-primary text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-700 hover:text-white transition text-center"
            >
              LinkedIn
            </a>
            {/* <a
              href="https://www.instagram.com/ryno-pay/"
              target="_blank"
              className="bg-primary text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-700 hover:text-white transition text-center"
            >
              Instagram
            </a>
            <a
              href="https://x.com/ryno_pay"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-700 hover:text-white transition text-center"
            >
              X-Twitter
            </a>
            <a
              href="https://www.facebook.com/ryno-pay/"
              target="_blank"
              className="bg-primary text-gray-300 px-2 py-1 rounded-md text-xs font-medium hover:bg-gray-700 hover:text-white transition text-center"
            >
              Facebook
            </a> */}
          </div>
          <p className="lg:hidden block mt-6 text-gray-500 text-center lg:text-left">
            © {new Date().getFullYear()} ryno • Privacy Policy • Terms of
            Service{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
