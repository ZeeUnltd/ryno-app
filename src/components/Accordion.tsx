import { useState } from "react";

const AccordionItem = ({
  title,
  content,
}: {
  title: string;
  content: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border border-[#DFE1E6] p-5 my-3 rounded-lg">
      <button
        className="flex justify-between items-center w-full p-4 text-left text-gray-700 font-medium focus:outline-none"
        onClick={toggleAccordion}
      >
        <span className="text-[#0D0D12] font-aeonik_regular">{title}</span>
        <span className="text-[#0D0D12] font-aeonik_regular text-xl">
          {isOpen ? "-" : "+"}
        </span>
      </button>
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ${
          isOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <div className="p-4 text-[#666D80] font-thin">{content}</div>
      </div>
    </div>
  );
};

const Accordion = () => {
  const items = [
    {
      title: "What is ryno?",
      content:
        "ryno is a global technology company innovating frictionless and cost-efficient cross border financial solutions for enterprises in emerging markets.",
    },
    {
      title: "What products do you offer?",
      content:
        "ryno offers best-in-class cross border foreign exchange, payments, settlement and treasury services",
    },
    {
      title: "How does it work?",
      content:
        "ryno’s delivers value using innovative cutting-edge technology and global financial partners to provide efficient financial services",
    },
  ];

  return (
    <div className="max-w-lg mx-auto my-8">
      {items.map((item, index) => (
        <AccordionItem key={index} title={item.title} content={item.content} />
      ))}
    </div>
  );
};

export default Accordion;
