import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "RynoPay Web Application",
  description:
    "Simplifying cross-border transactions and fuelling business growth with innovative financial solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#fff]">
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
