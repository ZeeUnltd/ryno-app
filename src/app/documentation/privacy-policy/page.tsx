"use client";
import React, { useState } from "react";
import DocumentationLayout from "../../../components/DocumentationLayout";

export default function PrivacyPolicyPage() {
  const [activeTab, setActiveTab] = useState("privacy");

  return (
    <DocumentationLayout activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}
