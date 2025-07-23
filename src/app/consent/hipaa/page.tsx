"use client";

import HipaaAuthorization from "@/components/hipaa-auth";
import { useSearchParams,useRouter } from "next/navigation";
import React, { useEffect } from "react";

const allowedCode = "123abcrrgldxikykbjtadglizz"; // Replace with your actual code

export default function HipaaConsent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code || code !== allowedCode) {
      router.replace("/");
    }
  }, [searchParams, router]);
  return <HipaaAuthorization />;
}
