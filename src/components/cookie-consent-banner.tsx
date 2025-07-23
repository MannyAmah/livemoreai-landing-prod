"use client";

import { useCallback, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Cookie, Settings, X } from "lucide-react";

export default function CookieConsentBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const handleAcceptAll = () => {
    // Handle accept all cookies logic here
    console.log("Accepted all cookies");
    localStorage.setItem("cookiePolicyAccepted", "true");
    setIsVisible(false);
  };

  const handleAcceptNecessary = () => {
    // Handle accept only necessary cookies logic here
    console.log("Accepted necessary cookies only");
    localStorage.setItem("cookiePolicyAccepted", "necessary");
    setIsVisible(false);
  };

  const handleCustomize = () => {
    setShowDetails(!showDetails);
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  const handleCheckCookiePolicy = useCallback(() => {
    const cookiePolicyAccepted = localStorage.getItem("cookiePolicyAccepted");
    if (!cookiePolicyAccepted) {
      setIsVisible(true);
      return;
    }

    setIsVisible(false);
  }, []);

  // Check cookie policy on component mount
  useEffect(() => {
    handleCheckCookiePolicy();
  }, [handleCheckCookiePolicy]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-gradient-to-t from-black/20 to-transparent dark:from-black/40 dark:to-transparent pointer-events-none">
      <Card className="w-full bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border border-gray-200 dark:border-gray-700 shadow-2xl pointer-events-auto">
        <div className="p-6">
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="w-10 h-10 bg-[#115490]/10 dark:bg-[#115490]/20 rounded-full flex items-center justify-center">
                <Cookie className="w-5 h-5 text-[#115490] dark:text-[#4a9eff]" />
              </div>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
                    We value your privacy
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    We use cookies to enhance your browsing experience, serve
                    personalized ads or content, and analyze our traffic. By
                    clicking "Accept All", you consent to our use of cookies.
                  </p>
                </div>

                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleClose}
                  className="flex-shrink-0 h-8 w-8 p-0 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-500 dark:text-gray-400"
                >
                  <X className="w-4 h-4" />
                  <span className="sr-only">Close</span>
                </Button>
              </div>

              {showDetails && (
                <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          Necessary Cookies
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Required for basic site functionality
                        </p>
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400 bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded">
                        Always Active
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          Analytics Cookies
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Help us understand how visitors interact with our
                          website
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-9 h-5 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#115490]/30 dark:peer-focus:ring-[#4a9eff]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#115490] dark:peer-checked:bg-[#4a9eff]"></div>
                      </label>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-gray-100">
                          Marketing Cookies
                        </h4>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Used to deliver personalized advertisements
                        </p>
                      </div>
                      <label className="relative inline-flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          className="sr-only peer"
                          defaultChecked
                        />
                        <div className="w-9 h-5 bg-gray-200 dark:bg-gray-600 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#115490]/30 dark:peer-focus:ring-[#4a9eff]/30 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 dark:after:border-gray-600 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#115490] dark:peer-checked:bg-[#4a9eff]"></div>
                      </label>
                    </div>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap items-center gap-3 mt-4">
                <Button
                  onClick={handleAcceptAll}
                  className="bg-[#115490] hover:bg-[#0d4373] dark:bg-[#4a9eff] dark:hover:bg-[#3b8bef] text-white"
                >
                  Accept All
                </Button>

                <Button
                  variant="outline"
                  onClick={handleAcceptNecessary}
                  className="border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent text-gray-900 dark:text-gray-100"
                >
                  Necessary Only
                </Button>

                <Button
                  variant="ghost"
                  onClick={handleCustomize}
                  className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  {showDetails ? "Hide Details" : "Customize"}
                </Button>

                <a
                  href="/privacy"
                  className="text-sm text-[#115490] dark:text-[#4a9eff] hover:text-[#0d4373] dark:hover:text-[#3b8bef] underline underline-offset-4"
                >
                  Privacy Policy
                </a>
                 <a
                  href="/cookie"
                  className="text-sm text-[#115490] dark:text-[#4a9eff] hover:text-[#0d4373] dark:hover:text-[#3b8bef] underline underline-offset-4"
                >
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}
