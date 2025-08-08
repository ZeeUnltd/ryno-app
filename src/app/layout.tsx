import type { Metadata } from "next";
import "./globals.css";
import { Fraunces } from "@next/font/google";

export const metadata: Metadata = {
  title: "ryno borderless Financial for Emerging Markets",
  description:
    "Simplifying cross-border transactions and fuelling business growth with innovative financial solutions.",
};

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} bg-white dark:bg-gray-900 transition-colors duration-300`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
