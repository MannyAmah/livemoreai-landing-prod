import React, { Suspense } from "react";
import TelehealthConsentForm from "@/components/telehelath-auth";

export default function TelehealthConsentPage() {
  return (
    <Suspense fallback={<div>Loading consent form…</div>}>
      <TelehealthConsentForm />
    </Suspense>
  );
}
