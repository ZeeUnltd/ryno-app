import type { Metadata } from "next";
import "./globals.css";
import { Fraunces } from "@next/font/google";

export const metadata: Metadata = {
  title: "RynoPay Web Application",
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
    <html lang="en">
      <body className={fraunces.variable}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
