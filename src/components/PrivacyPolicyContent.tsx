import React from "react";

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

export default PrivacyPolicyContent;
