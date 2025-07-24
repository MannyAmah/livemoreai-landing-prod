/* eslint-disable react/no-unescaped-entities */
import MainLayout from "@/components/layout/main-layout";
import React from "react";

const CookiePolicy = () => {
  return (
    <MainLayout>
      <div className="px-6 py-10 max-w-4xl mx-auto font-sans text-gray-700 dark:text-gray-300">
        <h1 className="text-3xl font-bold text-black dark:text-white mb-4">
          COOKIE POLICY
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-6">
          Last updated July 04, 2025
        </p>

        <p className="mb-6">
          This Cookie Policy explains how{" "}
          <strong>Livemore Health & Biosciences, Inc.</strong> ("Company," "we,"
          "us," and "our") uses cookies and similar technologies to recognize
          you when you visit our website at{" "}
          <a
            href="http://www.livemoreai.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 dark:text-blue-400 underline"
          >
            http://www.livemoreai.com
          </a>{" "}
          ("Website").
        </p>

        <Section title="What are cookies?">
          <p>
            Cookies are small data files placed on your device when you visit a
            website. Site owners use cookies to make websites work efficiently
            and to collect data.
          </p>
          <p className="mt-2">
            First-party cookies are set by the website owner. Third-party
            cookies are set by others for features like analytics and
            advertising.
          </p>
        </Section>

        <Section title="Why do we use cookies?">
          <p>
            We use first- and third-party cookies for essential functionality,
            analytics, user experience, and advertising. Some are strictly
            necessary, others are optional.
          </p>
        </Section>

        <Section title="How can I control cookies?">
          <p>
            You can control cookies via our Cookie Consent Manager or through
            browser settings. Essential cookies cannot be disabled.
          </p>
        </Section>

        <Section title="How can I control cookies on my browser?">
          <ul className="list-disc list-inside space-y-1">
            <li>
              <ExternalLink href="https://support.google.com/chrome/answer/95647">
                Chrome
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://support.microsoft.com/en-us/windows/delete-and-manage-cookies-168dab11-0753-043d-7c16-ede5947fc64d">
                Internet Explorer
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop">
                Firefox
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://support.apple.com/en-ie/guide/safari/sfri11471/mac">
                Safari
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://support.microsoft.com/en-us/windows/microsoft-edge-browsing-data-and-privacy-bb8174ba-9d73-dcf2-9b4a-c582b4e640dd">
                Edge
              </ExternalLink>
            </li>
            <li>
              <ExternalLink href="https://help.opera.com/en/latest/web-preferences/">
                Opera
              </ExternalLink>
            </li>
          </ul>
        </Section>

        <Section title="What about other tracking technologies?">
          <p>
            We may also use technologies like web beacons or tracking pixels to
            analyze traffic or email engagement. These may rely on cookies to
            function.
          </p>
        </Section>

        <Section title="Do you use Flash cookies or LSOs?">
          <p>
            We may use Flash Cookies (LSOs). You can manage them via the{" "}
            <ExternalLink href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager07.html">
              Website Storage Settings Panel
            </ExternalLink>{" "}
            and{" "}
            <ExternalLink href="http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager03.html">
              Global Storage Settings Panel
            </ExternalLink>
            .
          </p>
        </Section>

        <Section title="Do you serve targeted advertising?">
          <p>
            Third parties may serve targeted ads using cookies or pixels. These
            track visits to multiple websites. We or they cannot identify you
            personally unless you provide that information.
          </p>
        </Section>

        <Section title="How often will you update this Cookie Policy?">
          <p>
            This policy may be updated periodically. Please check back
            regularly. The date at the top reflects the most recent update.
          </p>
        </Section>

        <Section title="Where can I get further information?">
          <p>
            Questions? Contact us at{" "}
            <a
              href="mailto:support@livemoreai.com"
              className="text-blue-600 dark:text-blue-400 underline"
            >
              support@livemoreai.com
            </a>{" "}
            or:
          </p>
          <address className="not-italic mt-2">
            Livemore Health & Biosciences, Inc.
            <br />
            2261 Market Street, STE 86162
            <br />
            San Francisco, CA 94114
            <br />
            United States
            <br />
            Phone: (+1) 628 400 0017
          </address>
        </Section>
      </div>
    </MainLayout>
  );
};

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <section className="mb-8">
    <h2 className="text-xl font-semibold text-black dark:text-white mb-2">
      {title}
    </h2>
    <div className="space-y-3">{children}</div>
  </section>
);

const ExternalLink = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-600 dark:text-blue-400 underline"
  >
    {children}
  </a>
);

export default CookiePolicy;
