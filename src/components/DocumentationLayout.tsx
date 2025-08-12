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
import TermsAndConditionsContent from "./TermsAndConditionsContent";
import PrivacyPolicyContent from "./PrivacyPolicyContent";

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
      title: "Terms & Conditions",
      isExpanded: false,
      hasChildren: false,
    },
    {
      title: "Privacy Policy",
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
                  (item.title === "Terms & Conditions" && (activeTab === "terms" || pathname === "/documentation/terms-and-conditions")) ||
                  (item.title === "Privacy Policy" && (activeTab === "privacy" || pathname === "/documentation/privacy-policy"));
                
                return (
                  <div key={index}>
                    <button
                      onClick={() => {
                        if (item.title === "Terms & Conditions") {
                          router.push("/documentation/terms-and-conditions");
                        } else if (item.title === "Privacy Policy") {
                          router.push("/documentation/privacy-policy");
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

export default DocumentationLayout;
