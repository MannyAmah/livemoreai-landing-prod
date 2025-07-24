"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { useSearchParams, useRouter } from "next/navigation";
import React, { useEffect } from "react";

const HipaaAuthorization = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const allowedCode = "123abcrrgldxikykbjtadglizz"; // Replace with your actual code

  useEffect(() => {
    const code = searchParams.get("code");
    if (!code || code !== allowedCode) {
      router.replace("/");
    }
  }, [searchParams, router]);

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold">HIPAA Authorization</h1>
      <ScrollArea className="pr-4">
        <p>
          Adept Labs, Inc. d/b/a Junction (“Junction”) provides API solutions
          for at-home health care. Junction contracts with enterprise customers
          to grant access to Junction’s services to the customers’ patients like
          you. As part of its service, Junction works with health care providers
          and lab testing facilities to facilitate sharing your protected health
          information as governed by the Health Insurance Portability and
          Accountability Act of 1996 (“HIPAA”), 42 U.S.C. § 1320d and 45 C.F.R.
          § 160–164.
        </p>

        <p>
          This HIPAA Authorization is to authorize the disclosure of your
          information from Junction to the following enterprise customer:{" "}
          <strong>LiveMore</strong>. By signing below, you agree as follows:
        </p>

        <ol className="list-decimal list-inside space-y-2">
          <li>
            Pursuant to HIPAA, I authorize and direct Junction to give,
            disclose, and release, without restriction, my medical records, lab
            order, and/or lab testing results to LiveMore.
          </li>
          <li>
            The purpose of the uses and disclosures is for care coordination.
          </li>
          <li>
            I understand that, with certain exceptions, I have the right to
            revoke this Authorization at any time. If I want to revoke this
            Authorization, I must do so in writing. I may revoke this
            Authorization by sending an email to{" "}
            <a
              href="mailto:support@tryJunction.io"
              className="text-blue-600 underline"
            >
              support@tryJunction.io
            </a>{" "}
            stating my desire to revoke my HIPAA Authorization. I understand
            that it may take Junction a few business days to process my
            revocation.
          </li>
          <li>
            I understand that I may refuse to sign this Authorization, but that
            will prevent me from participating in Junction’s services. I also
            understand that my health care provider cannot deny or refuse to
            provide treatment, payment, enrollment in a health plan, or
            eligibility of benefits if I refuse to sign this Authorization.
          </li>
          <li>
            I understand that, once information is disclosed pursuant to this
            Authorization, it is possible that it will no longer be protected by
            applicable federal medical privacy law and could be re-disclosed by
            the person or agency that receives it.
          </li>
          <li>
            The authority above shall supersede any prior agreement that I may
            have made with my health care providers to restrict access to or
            disclosure of my individually identifiable health information. The
            authority given has no expiration date and shall expire only in the
            event that the enterprise contract between Junction and Junction
            Customer terminates or I revoke the authority in writing as
            specified above.
          </li>
        </ol>
      </ScrollArea>
    </div>
  );
};

export default HipaaAuthorization;
