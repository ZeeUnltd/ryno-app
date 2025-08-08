"use client";
import React, { useState } from "react";
import DocumentationLayout from "../../components/DocumentationLayout";

export default function DocumentationPage() {
  const [activeTab, setActiveTab] = useState("terms");

  return (
    <DocumentationLayout activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}
