"use client";
import React, { useState } from "react";
import DocumentationLayout from "../../../components/DocumentationLayout";

export default function TermsAndConditionsPage() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <DocumentationLayout activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}
