/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import MainLayout from "./layout/main-layout";

export function TermsPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-16 px-6 md:px-12">
        <h1 className="text-5xl dark:text-white font-extrabold mb-10">
          Terms and Conditions
        </h1>
        <div className="prose prose-blue max-w-none dark:text-gray-200 text-lg leading-relaxed space-y-8">
          <p className="text-base text-gray-500">Last updated: 2024-11-05</p>

          <h2 className="text-3xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Livemore ("we," "our," or "us"). These Terms and
            Conditions ("Terms") govern your access to and use of our website
            and services. By using our services, you agree to comply with these
            Terms.
          </p>

          <h2 className="text-3xl font-semibold">2. Use of Services</h2>
          <p>
            You must be at least 18 years old to use our services. You agree to
            use our services only for lawful purposes and in compliance with all
            applicable laws and regulations. Unauthorized use or exploitation of
            our services or content is strictly prohibited.
          </p>

          <h2 className="text-3xl font-semibold">3. Account Registration</h2>
          <p>
            To access certain features, you may be required to register an
            account. You are responsible for maintaining the confidentiality of
            your account information and for all activities that occur under
            your account. Please notify us immediately of any unauthorized
            access or security breach.
          </p>

          <h2 className="text-3xl font-semibold">4. Intellectual Property</h2>
          <p>
            All content, trademarks, and other intellectual property on our
            website are owned by Livemore or its licensors. You may not use,
            copy, reproduce, or distribute any content without our explicit
            written consent, except as permitted under these Terms.
          </p>

          <h2 className="text-3xl font-semibold">5. Limitation of Liability</h2>
          <p>
            Livemore shall not be liable for any damages resulting from your use
            of our services, including, but not limited to, direct, indirect,
            incidental, or consequential damages. We provide our services "as
            is" without warranties of any kind, to the fullest extent permitted
            by law.
          </p>

          <h2 className="text-3xl font-semibold">6. Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to our
            services at any time, without notice, if you violate these Terms or
            if we need to protect the security of our services or users.
          </p>

          <h2 className="text-3xl font-semibold">7. Changes to Terms</h2>
          <p>
            We may update these Terms periodically to reflect changes in our
            practices or legal requirements. Updates will be posted on this page
            with the "Last updated" date revised accordingly. Your continued use
            of our services after updates constitutes acceptance of the revised
            Terms.
          </p>

          <h2 className="text-3xl font-semibold">8. Governing Law</h2>
          <p>
            These Terms and your use of our services shall be governed by the
            laws of [Your Jurisdiction], without regard to its conflict of laws
            principles. Any disputes arising from these Terms shall be resolved
            in the courts of [Your Jurisdiction].
          </p>

          <h2 className="text-3xl font-semibold">9. Contact Us</h2>
          <p>For any questions about these Terms, please contact us at:</p>
          <p className="font-medium">
            Livemore
            <br />
            Email: support@livemoreai.com
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
