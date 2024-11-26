export default function FinancialSolutionsSection() {
  return (
    <section
      id="financial-solutions"
      className="relative h-screen flex items-center justify-center bg-cover bg-center "
      style={{
        backgroundImage: "url('/images/borderless.svg')", // Replace with your background image
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900 via-transparent to-transparent opacity-90 z-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl text-white px-4">
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-fraunces font-extralight leading-tight mb-6">
          Borderless Financial for <br /> Emerging Markets
        </h2>

        {/* Subtitle */}

        {/* Divider */}
        <hr className="border-t border-gray-400 w-full mx-auto mb-6" />
        <h3 className="text-lg md:text-xl font-fraunces font-extralight mb-4">
          Global Financial Access
        </h3>
        {/* Paragraph */}
        <p className="text-sm md:text-lg font-inter leading-relaxed">
          Extend your enterprise reach globally with seamless access to super
          fast cross border transactions, tailored FX payments, multi-currency
          payouts, and hassle free payment collections — all uniquely designed
          for enterprises in emerging markets
        </p>
      </div>
    </section>
  );
}
