export default function FeatureSection() {
  return (
    <section className="relative bg-white">
      <div className="container mx-auto mt-4">
        {/* Section Header */}
        <h2 className="text-3xl md:text-4xl font-light w-full md:w-[50%] font-fraunces text-gray-900 text-start mt-4 mb-12">
          Explore seamless cross-border payment solutions for your business
        </h2>

        {/* Grid for Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div
            className="relative h-[41.188rem] pt-12 px-4 rounded-xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('/images/iban-1.svg')`,
            }}
          >
            <div className="relative z-10 p-6">
              <span className="text-xs bg-[#6CFFF2] text-[#08857A] px-2 py-1 rounded-full inline-block mb-4">
                IBAN Accounts
              </span>
              <h3 className="text-2xl font-fraunces w-[65%] font-normal text-[#03625A] mb-4">
                Establish Multi-Currency Accounts
              </h3>
              <p className="font-inter text-sm font-normal md:w-[65%] text-[#525866] mb-6">
                Expand your global presence by setting up accounts in USD, EUR,
                and GBP. Gain easy access to cross-border transactions and
                minimize currency conversion fees, enhancing the efficiency of
                your business operations.
              </p>
              <div className="flex space-x-4">
                <div className="relative group">
                  <button className="bg-transparent border border-[#03625A] text-[#03625A] px-4 py-2 rounded-lg hover:bg-[#03625A] hover:text-white">
                    Contact Sales
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
                <div className="relative group">
                  <button className="bg-transparent border border-[#03625A] text-[#03625A] px-4 py-2 rounded-lg hover:bg-[#03625A] hover:text-white">
                    Learn More
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="relative h-[41.188rem] pt-12 px-8 bg-[#E7F1FD] rounded-xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('/images/iban-2.svg')`,
            }}
          >
            <div className="relative z-10 p-6">
              <span className="text-xs bg-[#8FC0F7] text-[#064083] px-2 py-1 rounded-full inline-block mb-4">
                Invoicing
              </span>
              <h3 className="text-2xl font-fraunces w-[65%] font-normal text-[#064083] mb-4">
                Efficient Invoicing Solutions
              </h3>
              <p className="font-inter text-sm font-normal md:w-[65%] text-[#525866] mb-6">
                Generate customized invoices for clients around the world. Offer
                billing in multiple currencies, automatic payment reminders, and
                streamline your invoicing process to maintain healthy cash flow.
              </p>
              <div className="flex space-x-4">
                <div className="relative group">
                  <button className="bg-transparent border border-[#064083] text-[#2D215A] px-4 py-2 rounded-lg hover:bg-[#2D215A] hover:text-white">
                    Generate Invoices
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
                <div className="relative group">
                  <button className="bg-transparent border border-[#064083] text-[#2D215A] px-4 py-2 rounded-lg hover:bg-[#2D215A] hover:text-white">
                    Learn More
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="relative h-[32.688rem] pt-16 px-8 rounded-xl bg-no-repeat bg-cover col-span-1 md:col-span-2"
            style={{
              backgroundImage: `url('/images/iban-3.svg')`,
            }}
          >
            <div className="relative z-10 p-6">
              <span className="text-xs bg-[#BFE8E0] text-[#046D62] px-2 py-1 rounded-full inline-block mb-4">
                Multi-Currency Wallet
              </span>
              <h3 className="text-2xl font-fraunces w-[65%] font-normal text-[#046D62] mb-4">
                Send & Receive Money Globally
              </h3>
              <p className="font-inter text-sm font-normal lg:w-[35%] text-[#525866] mb-6">
                Send and receive payments seamlessly across 80+ countries.
                Leverage our deep liquidity to execute swift and secure
                transfers, ensuring your business can operate without
                geographical limits.
              </p>
              <div className="flex space-x-4">
                <div className="relative group">
                  <button className="bg-transparent border border-[#03625A] text-[#03625A] px-4 py-2 rounded-lg hover:bg-[#03625A] hover:text-white">
                    Create a Wallet
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
                <div className="relative group">
                  <button className="bg-transparent border border-[#03625A] text-[#03625A] px-4 py-2 rounded-lg hover:bg-[#03625A] hover:text-white">
                    Learn More
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="relative h-[41.188rem] pt-12 px-8 rounded-xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('/images/iban-4.svg')`,
            }}
          >
            <div className="relative z-10 p-6">
              <span className="text-xs bg-[#D0D4FA] text-[#5F29B3] px-2 py-1 rounded-full inline-block mb-4">
                Virtual Cards
              </span>
              <h3 className="text-2xl font-fraunces w-[65%] font-normal text-[#5F29B3] mb-4">
                Virtual Cards for Business Management
              </h3>
              <p className="font-inter text-sm font-normal md:w-[65%] text-[#525866] mb-6">
                Issue virtual cards for your team to easily manage expenses.
                Control spending, track usage, and simplify budget
                management—all from a centralized platform tailored for your
                business.
              </p>
              <div className="flex space-x-4">
                <div className="relative group">
                  <button className="bg-transparent border border-[#5F29B3] text-[#5F29B3] px-4 py-2 rounded-lg hover:bg-[#5F29B3] hover:text-white">
                    Request a Virtual Card
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div
            className="relative h-[41.188rem] pt-12 px-8 rounded-xl bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url('/images/iban-5.svg')`,
            }}
          >
            <div className="relative z-10 p-6">
              <span className="text-xs bg-[#ECD46B] text-[#99840C] px-2 py-1 rounded-full inline-block mb-4">
                CFS
              </span>
              <h3 className="text-2xl font-fraunces w-[65%] font-normal text-[#99840C] mb-4">
                Corporate Field Strategy
              </h3>
              <p className="font-inter text-sm font-normal md:w-[65%] text-[#525866] mb-6">
                By leveraging digital assets tied to stable value, companies can
                maintain a balance between liquidity, stability, and modest
                yield generation while minimizing exposure to broader market
                volatility
              </p>
              <div className="flex space-x-4">
                <div className="relative group">
                  <button className="bg-transparent border border-[#99840C] text-[#99840C] px-4 py-2 rounded-lg hover:bg-[#99840C] hover:text-white">
                    Explore CFS
                  </button>
                  <span className="absolute top-full left-0 mt-2 px-4 py-1 bg-black text-white text-xs rounded-md opacity-0 group-hover:opacity-100 transition duration-300 w-full text-center">
                    Beta Coming Soon
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
