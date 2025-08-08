"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icons } from "@/app/constants/icons";
import {
  Search,
  ChevronDown,
  ChevronRight,
  Menu,
  Moon,
  Sun,
} from "lucide-react";

interface DocumentationLayoutProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

interface SidebarItem {
  title: string;
  isExpanded?: boolean;
  children?: string[];
  hasChildren?: boolean;
}

const DocumentationLayout: React.FC<DocumentationLayoutProps> = ({
  activeTab,
  setActiveTab,
}) => {
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([
    {
      title: "Lorem Ipsum",
      isExpanded: true,
      hasChildren: true,
      children: [
        "Lorem",
        "Enim",
        "Lorem ipsum dolor",
        "Lorem ipsum dolor",
        "Lorem",
      ],
    },
    {
      title: "Lorem Ipsum",
      isExpanded: true,
      hasChildren: true,
      children: ["Lorem ipsum dolor", "Lorem ipsum dolor", "Lorem"],
    },
    {
      title: "Lorem",
      isExpanded: false,
      hasChildren: true,
    },
    {
      title: "Lorem ipsum dolor",
      isExpanded: false,
      hasChildren: true,
    },
    {
      title: "Lorem",
      isExpanded: false,
      hasChildren: false,
    },
    {
      title: "Lorem Ipsum",
      isExpanded: false,
      hasChildren: true,
    },
  ]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
  };

  const toggleSidebarItem = (index: number) => {
    setSidebarItems(
      sidebarItems.map((item, i) =>
        i === index ? { ...item, isExpanded: !item.isExpanded } : item
      )
    );
  };

  return (
    <div
      className={`min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300`}
    >
      {/* Header */}
      <header className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 sticky top-0 z-40">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center space-x-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/logo/ryno-logo-new.svg"
                alt="Ryno Logo"
                width={120}
                height={32}
                className="dark:hidden"
              />
              <Image
                src="/icons/white_logo.svg"
                alt="Ryno Logo"
                width={120}
                height={32}
                className="hidden dark:block"
              />
            </Link>

            <nav className="hidden md:flex items-center space-x-6">
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Why Ryno
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Solutions
              </Link>
              <Link
                href="#"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Contact Us
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <div className=" whitespace-nowrap ml-auto flex justify-end">
              <Link
                href="http://app.rynopay.io"
                target="_blank"
                className="flex ml-auto items-center px-3 py-2 gap-1 h-[40px] bg-white border-green-600 border shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl text-green-600"
              >
                <span className="flex items-center justify-center gap-1 ">
                  <Icons.whatsappIcon size={20} />
                </span>
                <span>Start on WhatsApp</span>
              </Link>
            </div>

            <div className="md:block md:w-2/12 whitespace-nowrap ml-auto flex justify-end">
              <Link
                href="http://app.rynopay.io"
                target="_blank"
                className="flex ml-auto w-[130px] items-center px-3 py-2 gap-1 h-[40px] bg-primary border  shadow-[0px_1px_2px_rgba(14,18,27,0.03)] rounded-xl"
              >
                <span className="flex items-center justify-center gap-1 text-white">
                  Get Started
                  <Icons.ArrowUpRight size={20} />
                </span>
              </Link>
            </div>

            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              <Menu size={20} className="text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0 fixed md:static inset-y-0 left-0 z-30 w-72 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out`}
        >
          <div className="p-6">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-6">
              Documentation
            </h2>

            <div className="space-y-1">
              {sidebarItems.map((item, index) => (
                <div key={index}>
                  <button
                    onClick={() => item.hasChildren && toggleSidebarItem(index)}
                    className="w-full flex items-center justify-between px-3 py-2 text-left text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
                  >
                    <span className="text-sm">{item.title}</span>
                    {item.hasChildren &&
                      (item.isExpanded ? (
                        <ChevronDown size={16} />
                      ) : (
                        <ChevronRight size={16} />
                      ))}
                  </button>

                  {item.isExpanded && item.children && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.children.map((child, childIndex) => (
                        <button
                          key={childIndex}
                          className="w-full text-left px-3 py-1.5 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                        >
                          {child}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-6">
                <button
                  onClick={() => setActiveTab("terms")}
                  className={`pb-2 text-sm font-medium border-b-2 ${
                    activeTab === "terms"
                      ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                      : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  T&C
                </button>
                <button
                  onClick={() => setActiveTab("privacy")}
                  className={`pb-2 text-sm font-medium border-b-2 ${
                    activeTab === "privacy"
                      ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400"
                      : "text-gray-500 dark:text-gray-400 border-transparent hover:text-gray-700 dark:hover:text-gray-300"
                  }`}
                >
                  Privacy Policy
                </button>
              </div>

              <div className="relative">
                <Search
                  size={16}
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                />
                <input
                  type="text"
                  placeholder="Search..."
                  className="pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400"
                />
              </div>
            </div>

            {/* Content */}
            <div className="max-w-4xl">
              {activeTab === "terms" && <TermsAndConditionsContent />}
              {activeTab === "privacy" && <PrivacyPolicyContent />}
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

const TermsAndConditionsContent: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Terms and Conditions
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Please read these platform terms of use (“Agreement”) carefully because
        it is a binding contract between the user that accepts this Agreement
        (“User”) and Rhyno Financial Inc., a Alberta, Canada company (“ryno”),
        authorised and regulated by Financial Transactions and Reports Analysis
        Centre (FINTRAC) as a Money Service Business (MSB) Registration Number
        C100000021, governing User use of the services available through the
        ryno website at{" "}
        <a className="underline" href="http://rynopay.io">
          rynopay.io
        </a>{" "}
        (“Site”) through which they may be made available (the “Services”). By
        checking an opt-in box, clicking on “I Accept” or otherwise accepting
        this Agreement on the sign-up page, or otherwise accessing or using the
        Services, User acknowledges that they have read, understood, and agree
        to be bound by and comply with the terms of this Agreement. If User is
        using the Services on behalf of an entity, partnership, or other
        organization, then User represents that they:
      </p>

      <p className="text-gray-600 dark:text-gray-400 mb-8 ml-10">
        (i) are an authorized representative of that entity with the authority
        to bind that entity to this Agreement and;
      </p>
      <p className="text-gray-600 dark:text-gray-400 mb-8 ml-10">
        (ii) such entity agrees to be bound by this Agreement. If User does not
        agree to the terms of this Agreement, then they are not permitted to use
        the Services.
      </p>

      <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
        ARBITRATION NOTICE:
      </h4>

      <div className="space-y-6">
        <div>
          <p className="text-gray-600 dark:text-gray-400">
            Except for certain kinds of disputes described in the Arbitration
            provision below, User agrees that disputes arising under this
            Agreement will be resolved by binding individual arbitration, and{" "}
            <span className="font-semibold">
              BY ACCEPTING THIS AGREEMENT, User AND ryno ARE EACH WAIVING THE
              RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR
              REPRESENTATIVE PROCEEDING.
            </span>
            User AGREES TO GIVE UP User RIGHT TO GO TO COURT to assert or defend
            User rights under this contract (except for matters that may be
            taken to small claims court). Your rights will be determined by a
            single ARBITRATOR and NOT a judge or jury. See the Arbitration
            provision below.
          </p>
        </div>

        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          BANKING AND FINANCIAL SERVICES:
        </h4>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno is not a bank and does not itself provide any banking services.
          ryno Services are, however, integrated with certain third party
          servicers, that we call Third Party Servicers. By applying to open a
          deposit account or other financial services account with a Third Party
          Servicer through the Services, User also hereby agrees to the
          following with each of the following Third Party Servicers:
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          <a
            href="https://noah.com/en/terms-of-service?terms=us"
            className="underline link mb-3 block"
          >
            Noah Terms of Service
          </a>
          <a
            href="https://zenus.com/en/group/legal-documents/website-terms-of-use"
            className="underline link"
          >
            Zenus Terms of Service
          </a>
        </p>

        <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Services.
        </h4>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          The Services consist of cloud-based (i) financial information storage
          and reporting; and (ii) the service of communicating information to,
          from and among Third Party Servicers, as per User instructions. User
          may make certain selections of Services that they wish to procure
          through the Application or the Account. ryno will provide the Services
          to User for the term of this Agreement, subject to the payment of
          applicable Fees and compliance with the terms of this Agreement. As
          part of the Services, ryno hereby grants to User a non-exclusive,
          non-transferable, non-assignable right to use the Services, as per the
          terms of this Agreement. User acknowledges that the Services are
          cloud-based and hosted services and no copies of the Services or ryno
          platform will be delivered to User. The Services shall be used by User
          solely for User own purposes and ryno does not convey any right, title
          or interest in the Services or ryno platform to User. User right to
          use the Services shall terminate upon any termination of this
          Agreement or any suspension or termination of the supply of the
          Services to User.
        </p>

        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Financial Transactions
        </h5>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno shall not perform any financial transactions for User. User may,
          however, use the Services to communicate User instructions to a Third
          Party Servicer of User which Third Party Servicer may perform a
          financial transaction on behalf of User pursuant to the Third Party
          Servicer Agreement. For example, if User opens a bank account with a
          Third Party Servicer that is a bank, then a data Transaction through
          the Services may result in a financial transaction within the User
          account with the Third Party Servicer pursuant to the applicable Third
          Party Servicer Agreement. ryno is not liable for any such financial
          transaction or the results thereof.
        </p>

        <h5 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          Remittance Transactions
        </h5>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          As and where available indicated in disclosure in the Account, certain
          Third Party Servicers may offer remittance or money transfer services,
          to include cross-border payment solutions utilizing stablecoins under
          their respective terms. Where such services are available, the
          Services will enable User to deliver instructions to the Third Party
          Servicer to initiate a remittance transaction. Such transactions will
          result in funds in User's Financial Account being applied to the
          remittance transaction as per User instructions to the Third Party
          Servicer delivered by way of ryno.
        </p>
      </div>
    </div>
  );
};

const PrivacyPolicyContent: React.FC = () => {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
        Privacy Policy
      </h1>

      <p className="text-gray-600 dark:text-gray-400 mb-8">
        At Ryno, we are committed to protecting your privacy and ensuring the
        security of your personal information. This Privacy Policy explains how
        we collect, use, and safeguard your data when you use our cross-border
        payment services.
      </p>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        Information We Collect
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        We collect information necessary to provide our services, including:
      </p>

      <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-400 mb-8">
        <li>Business registration and verification documents</li>
        <li>Transaction details and payment information</li>
        <li>Communication records and support interactions</li>
        <li>Technical data for service improvement and security</li>
      </ul>

      <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
        How We Use Your Information
      </h2>

      <p className="text-gray-600 dark:text-gray-400 mb-6">
        Your information is used to provide our services, ensure compliance with
        regulations, and improve our platform's security and functionality.
      </p>

      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: 04/08/2025
        </p>
      </div>
    </div>
  );
};

export default DocumentationLayout;
