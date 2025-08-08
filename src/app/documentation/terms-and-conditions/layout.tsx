import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - Ryno",
  description: "Read Ryno's Terms and Conditions to understand the platform terms of use for our cross-border payment services and financial solutions.",
};

export default function TermsAndConditionsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
