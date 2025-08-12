"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
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
  const router = useRouter();
  const pathname = usePathname();
  const [darkMode, setDarkMode] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [sidebarItems, setSidebarItems] = useState<SidebarItem[]>([
    {
      title: "Privacy Policy",
      isExpanded: false,
      hasChildren: false,
    },
    {
      title: "Terms & Conditions",
      isExpanded: false,
      hasChildren: false,
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
                href="/#why-us"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Why Ryno
              </Link>
              <Link
                href="/#solutions"
                className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
              >
                Solutions
              </Link>
              <Link
                href="/#contact-section"
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

            {/* <div className=" whitespace-nowrap ml-auto flex justify-end">
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
            </div> */}

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
              {sidebarItems.map((item, index) => {
                const isActive = 
                  (item.title === "Privacy Policy" && (activeTab === "privacy" || pathname === "/documentation/privacy-policy")) ||
                  (item.title === "Terms & Conditions" && (activeTab === "terms" || pathname === "/documentation/terms-and-conditions"));
                
                return (
                  <div key={index}>
                    <button
                      onClick={() => {
                        if (item.title === "Privacy Policy") {
                          router.push("/documentation/privacy-policy");
                        } else if (item.title === "Terms & Conditions") {
                          router.push("/documentation/terms-and-conditions");
                        } else if (item.hasChildren) {
                          toggleSidebarItem(index);
                        }
                      }}
                      className={`w-full flex items-center justify-between px-3 py-2 text-left rounded-lg transition-colors ${
                        isActive
                          ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border border-blue-200 dark:border-blue-800"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                      }`}
                    >
                      <span className="text-sm font-medium">{item.title}</span>
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
                );
              })}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 min-h-screen">
          <div className="p-6">
            {/* Tab Navigation */}
            <div className="flex items-center justify-end mb-6">
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
        Please read these platform terms of use ("Agreement") carefully because
        it is a binding contract between the user that accepts this Agreement
        ("User") and Rhyno Financial Inc., a Alberta, Canada company ("ryno"),
        authorised and regulated by Financial Transactions and Reports Analysis
        Centre (FINTRAC) as a Money Service Business (MSB) Registration Number
        C100000021, governing User use of the services available through the
        ryno website at{" "}
        <a className="underline text-blue-600 dark:text-blue-400" href="https://www.rynopay.io">
          https://www.rynopay.io
        </a>{" "}
        ("Site") through which they may be made available (the "Services"). By
        checking an opt-in box, clicking on "I Accept" or otherwise accepting
        this Agreement on the sign-up page, or otherwise accessing or using the
        Services, User acknowledges that they have read, understood, and agree
        to be bound by and comply with the terms of this Agreement. If User is
        using the Services on behalf of an entity, partnership, or other
        organization, then User represents that they:
      </p>

      <div className="ml-6 mb-6">
        <p className="text-gray-600 dark:text-gray-400 mb-2">
          (i) are an authorized representative of that entity with the authority
          to bind that entity to this Agreement and;
        </p>
        <p className="text-gray-600 dark:text-gray-400">
          (ii) such entity agrees to be bound by this Agreement. If User does not
          agree to the terms of this Agreement, then they are not permitted to use
          the Services.
        </p>
      </div>

      <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          ARBITRATION NOTICE:
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Except for certain kinds of disputes described in the Arbitration
          provision below, User agrees that disputes arising under this
          Agreement will be resolved by binding individual arbitration, and{" "}
          <span className="font-bold">
            BY ACCEPTING THIS AGREEMENT, User AND ryno ARE EACH WAIVING THE
            RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY CLASS ACTION OR
            REPRESENTATIVE PROCEEDING.
          </span>{" "}
          User AGREES TO GIVE UP User RIGHT TO GO TO COURT to assert or defend
          User rights under this contract (except for matters that may be
          taken to small claims court). Your rights will be determined by a
          single ARBITRATOR and NOT a judge or jury. See the Arbitration
          provision below.
        </p>
      </div>

      <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-400 p-4 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
          BANKING AND FINANCIAL SERVICES:
        </h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          ryno is not a bank and does not itself provide any banking services.
          ryno Services are, however, integrated with certain third party
          servicers, that we call Third Party Servicers. By applying to open a
          deposit account or other financial services account with a Third Party
          Servicer through the Services, User also hereby agrees to the
          following with each of the following Third Party Servicers:
        </p>
        <div className="space-y-2">
          <a
            href="https://noah.com/en/terms-of-service?terms=us"
            className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://noah.com/en/terms-of-service?terms=us
          </a>
          <a
            href="https://zenus.com/en/group/legal-documents/website-terms-of-use"
            className="block text-blue-600 dark:text-blue-400 underline hover:text-blue-800 dark:hover:text-blue-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://zenus.com/en/group/legal-documents/website-terms-of-use
          </a>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mt-4">
          The Third Party Servicer Agreements and disclosures listed above are incorporated into this Agreement and form part of this Agreement. ryno recommends that you print a copy of this Agreement and each of the above Third Party Servicer Agreements for your records. If not defined in the body of this Agreement, capitalized terms used in this Agreement are defined in the glossary at the end of this Agreement.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          1. Services
        </h2>

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

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Financial Transactions
        </h3>
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

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Remittance Transactions
        </h3>
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

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Foreign Exchange Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          As and where available indicated in disclosure in the Account, by carrying out a remittance transaction from one Third Party Servicer (e.g. a US bank) to another (e.g. a Kenyan Bank), User may be able to cause a given balance of funds to be converted from one currency to another. ryno does not itself carry out such transactions. They are, instead, carried out by Third Party Servicers. Pursuant to User Transaction instructions supplied through ryno, the Third Party Servicer holding the funds of a currency that User wishes to sell will transfer them to the User's Financial Account at another Third Party Servicer that maintains a Financial Account for the User in another currency. The currency conversion takes place in the course of the remittance transaction from one Third Party Servicer to another.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Bill Payment Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If User has a supplier they wish to pay, as and where available indicated in disclosure in the Account, User may be able to use the Services to instruct a Third Party Servicer to initiate a payment to the supplier.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Payment Processing Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          If made available to the User, ryno or one of its Affiliates may provide Payment Processing Services, meaning serving as an agent of the User to receive funds for the User from a Client of the User. Payment Processing Services are supplied under a separate agreement, the Payment Processing Terms which are posted at the Site and incorporated herein by reference.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Combined Financial Transactions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          As and where available indicated in disclosure in the Account, User may be able to supply instructions to Third Party Servicers to remit funds to another Third Party Servicer, convert the funds to another currency in the course of such remittance and also pay a supplier invoice.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Restrictions
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Each financial transaction initiated through the Services is subject to restrictions as discussed herein and other disclosure in the Account. Certain transactions are not permitted, not possible or may be delayed, reversed or cancelled without prior consent of the User at the sole discretion of Third Party Servicers and ryno.
        </p>

        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
          Errors
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User shall immediately notify ryno of any errors by ryno, a Third Party Servicer or User in the supply or use of the Services. Where practicable, ryno shall use commercially reasonable efforts to investigate errors, but makes no representation as to its ability to correct the error. User shall provide ryno with any information necessary to investigate an error in a Transaction. Some payment transactions, such as wire transfers, are irreversible, so User agrees to exercise extreme caution when initiating any financial transaction by way of instructions delivered one of its Third Party Servicers through the Services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
          2. ryno Account and User ID
        </h2>
        
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          ryno shall provide User with a unique and private Account accessible through the Service. The Account shall be a record of User Transactions and Fees. ryno shall provide User with access codes for the Account. User shall not disclose such codes or permit any third party to use them. User has exclusive responsibility for the use of User Account. ryno will invite User to enter certain preferences and specifications within the Application or the Account that will apply to the Services; User assumes exclusive responsibility for such selections even if they contain errors by User or result in losses to User. Any additional terms and conditions posted to the Site with respect to the Account or specific Services preferences selected by User are incorporated herein by reference.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Except as required to deliver the Services or as otherwise required by law, ryno shall not grant any third party access to User Account. User shall notify ryno by email to compliance@rynopay.io immediately of any loss or disclosure, whether voluntary or otherwise, of any Account password or access code to a third party.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Upon User's request, ryno will also issue User a User ID associated with the Account ("User ID"). User may share their User ID only with officers, directors, bookkeepers, accountants or other User personnel that are directly employed or engaged by User ("User Personnel") provided that User binds such third parties to undertakings of confidentiality and to also honor the terms hereof. User Personnel may only access and use the Services through the User ID and in compliance with this Agreement; User will not allow User Personnel to share the User ID with third parties. User is responsible for all activity occurring under its User ID whether by User Personnel or otherwise. ryno reserves the right to replace the User ID in its sole discretion for any reason or for no reason. Any User Personnel who accesses the Services does so subject to this Agreement.
        </p>

        <p className="text-gray-600 dark:text-gray-400 mb-6">
          User shall provide, at User's own expense, all necessary hardware, applications and internet connectivity necessary to access the Services. User acknowledges that the internet can be unpredictable in performance, unsecure and may, from time to time, impede access to the Services or performance hereunder. User agrees that ryno is not responsible for any internet outages, unsecure WIFI or other connections or any other interference with User's use of or access to the Services or security breaches arising from any User Device and User waives any and all claims against ryno in connection therewith.
        </p>
      </section>

      {/* Continue with remaining sections... */}
      
      <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          Last updated: August 12, 2025
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
          For questions about these Terms and Conditions, please contact us at{" "}
          <a 
            href="mailto:legal@rynopay.io" 
            className="text-blue-600 dark:text-blue-400 underline"
          >
            legal@rynopay.io
          </a>
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
