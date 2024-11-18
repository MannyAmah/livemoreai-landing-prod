/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import MainLayout from "./layout/main-layout";

export default function PrivacyPage() {
  return (
    <MainLayout>
      <div className="container mx-auto py-16 px-6 md:px-12">
        <h1 className="text-5xl dark:text-white font-extrabold mb-10">
          Privacy Policy
        </h1>
        <div className="prose prose-blue max-w-none dark:text-gray-200 text-lg leading-relaxed space-y-8">
          <p className="text-base text-gray-500">Last updated: 2024-11-05</p>

          <h2 className="text-3xl font-semibold">1. Introduction</h2>
          <p>
            Welcome to Livemore ("we," "our," or "us"). Your privacy is of
            utmost importance to us. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your personal and health
            information when you use our website and services.
          </p>

          <h2 className="text-3xl font-semibold">2. Information We Collect</h2>
          <p>
            We may collect various types of personal information, including
            health-related data you voluntarily provide to us, such as your
            name, contact details, and medical history. We also automatically
            collect technical information about your device, IP address, and
            browsing activity to improve your experience and ensure service
            functionality.
          </p>

          <h2 className="text-3xl font-semibold">
            3. How We Use Your Information
          </h2>
          <p>
            We use your data primarily to deliver services and support,
            communicate updates about our services, and comply with legal and
            regulatory obligations. Your information also helps us to
            personalize your experience and send you information relevant to
            your health interests.
          </p>

          <h2 className="text-3xl font-semibold">
            4. Sharing Your Information
          </h2>
          <p>
            We do not sell your personal information. However, we may share it
            with third-party providers who support our services, such as
            professionals, data storage providers, or analytics companies,
            strictly as needed and under confidentiality agreements. We may also
            disclose information as required by law or to protect our rights and
            the safety of others.
          </p>

          <h2 className="text-3xl font-semibold">5. Data Security</h2>
          <p>
            To safeguard your information, we implement appropriate security
            measures, including data encryption and access restrictions. These
            measures protect against unauthorized access, misuse, and data loss
            in compliance with industry standards.
          </p>

          <h2 className="text-3xl font-semibold">6. Your Rights</h2>
          <p>
            Depending on your location, you may have rights over your personal
            data, such as accessing, correcting, or deleting your information.
            For any requests related to your data rights, please contact us at
            the details provided below.
          </p>

          <h2 className="text-3xl font-semibold">
            7. Changes to This Privacy Policy
          </h2>
          <p>
            We may update this Privacy Policy periodically to reflect changes in
            legal requirements or our practices. Any updates will be published
            on this page with the "Last updated" date revised accordingly.
          </p>

          <h2 className="text-3xl font-semibold">8. Contact Us</h2>
          <p>
            For questions or concerns about this Privacy Policy or your data,
            please contact us at:
          </p>
          <p className="font-medium">
            Livemore
            <br />
            Email: privacy@livemoreai.com
          </p>
        </div>
      </div>
    </MainLayout>
  );
}
