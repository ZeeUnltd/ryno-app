import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Ryno",
  description: "Read Ryno's Privacy Policy to understand how we collect, use, and protect your personal information when using our cross-border payment services.",
};

export default function PrivacyPolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
