"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import DocumentationLayout from "../../components/DocumentationLayout";

export default function DocumentationPage() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("terms");

  // Redirect to terms and conditions by default
  useEffect(() => {
    router.push("/documentation/terms-and-conditions");
  }, [router]);

  return (
    <DocumentationLayout activeTab={activeTab} setActiveTab={setActiveTab} />
  );
}
