"use client";

import TelehealthConsentForm from "@/components/telehelath-auth";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const allowedCode = "123abc"; // Replace with your actual code

export default function TelehealthConsentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code || code !== allowedCode) {
      router.replace("/");
    }
  }, [searchParams, router]);
  return <TelehealthConsentForm />;
}
