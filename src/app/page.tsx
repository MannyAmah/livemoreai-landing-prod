import CookieConsentBanner from "@/components/cookie-consent-banner";
import LandingPage from "@/components/home";

export default function Home() {
  return (
    <>
      <CookieConsentBanner />
      <LandingPage />
    </>
  );
}
