import HipaaAuthorization from "@/components/hipaa-auth";
import React, { Suspense } from "react";

export default function HipaaConsent() {
  return (
    <Suspense fallback={<div>Loading HIPAA Authorization</div>}>
      <HipaaAuthorization />;
    </Suspense>
  );
}
