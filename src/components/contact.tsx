"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from "./layout/main-layout";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

export default function ContactPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    // Smooth scroll to top on page load
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  const staggerContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/healthcare-request-access/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setLoading(false);
        setErrorMessage(errorData.detail || "An unexpected error occurred.");
        return;
      }

      setErrorMessage("");
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setErrorMessage("An unexpected error occurred.");
      setLoading(false);
      return;
    }

    setShowThankYouModal(true);
    setFormData({
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      organization: "",
      message: "",
    });
    setLoading(false);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen bg-white text-[#1d1d1f]">
        <main className="flex-1 container mx-auto px-4 py-32">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainerVariants}
            className="max-w-2xl mx-auto"
          >
            <motion.div
              variants={fadeInUpVariants}
              className="text-center mb-12"
            >
              <h1 className="text-4xl md:text-5xl font-semibold mb-4">
                Get in touch
              </h1>
              <p className="text-[#6e6e73] text-lg leading-relaxed">
                Want to learn how our precision medicine technology is shaping
                the future of healthcare?
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUpVariants}
              className="bg-white p-8 md:p-10 rounded-3xl shadow-lg border border-[#f0f0f0]"
            >
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label
                      htmlFor="first-name"
                      className="text-[#6e6e73] font-medium"
                    >
                      First name
                    </Label>
                    <Input
                      id="first-name"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleInputChange}
                      placeholder="Enter your first name"
                      required
                      className="rounded-xl border-[#e5e5e7] focus:border-[#115490] focus:ring-[#115490]/20 h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label
                      htmlFor="last-name"
                      className="text-[#6e6e73] font-medium"
                    >
                      Last name
                    </Label>
                    <Input
                      id="last-name"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleInputChange}
                      placeholder="Enter your last name"
                      required
                      className="rounded-xl border-[#e5e5e7] focus:border-[#115490] focus:ring-[#115490]/20 h-12"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#6e6e73] font-medium">
                    Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border-[#e5e5e7] focus:border-[#115490] focus:ring-[#115490]/20 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#6e6e73] font-medium">
                    Phone
                  </Label>
                  <Input
                    id="phone"
                    type="text"
                    name="phone"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="rounded-xl border-[#e5e5e7] focus:border-[#115490] focus:ring-[#115490]/20 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="organization"
                    className="text-[#6e6e73] font-medium"
                  >
                    Organization
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    placeholder="Enter your organization"
                    value={formData.organization}
                    onChange={handleInputChange}
                    className="rounded-xl border-[#e5e5e7] focus:border-[#115490] focus:ring-[#115490]/20 h-12"
                  />
                </div>

                <div className="space-y-2">
                  <Label
                    htmlFor="message"
                    className="text-[#6e6e73] font-medium"
                  >
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="How can we help you?"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="rounded-xl border-[#e5e5e7] focus:border-[#115490] focus:ring-[#115490]/20"
                  />
                </div>

                {errorMessage && (
                  <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
                )}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#115490] hover:bg-[#115490]/90 text-white rounded-full py-6 text-lg font-medium"
                >
                  <span className="flex items-center gap-2">
                    Submit <ChevronRight className="h-4 w-4" />
                  </span>
                </Button>

                <p className="text-xs text-[#6e6e73] text-center mt-4">
                  By submitting this form, you agree to our{" "}
                  <Link
                    href="/privacy"
                    className="text-[#115490] hover:underline"
                  >
                    Privacy Policy
                  </Link>{" "}
                  and
                  <Link
                    href="/terms"
                    className="text-[#115490] hover:underline"
                  >
                    {" "}
                    Terms of Service
                  </Link>
                  .
                </p>
              </form>
            </motion.div>
          </motion.div>
        </main>
      </div>

      <Dialog open={showThankYouModal} onOpenChange={setShowThankYouModal}>
        <DialogContent className="sm:max-w-[500px] dark:bg-gray-800 dark:text-white">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold dark:text-white">
              Thank You!
            </DialogTitle>
            <DialogDescription className="dark:text-gray-300">
              We&apos;ve received your request and will contact you shortly.
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-center py-6">
            <div className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-green-600 dark:text-green-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
          <div className="flex justify-center pt-2">
            <Button
              onClick={() => {
                setShowThankYouModal(false);
                router.push("/");
              }}
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </MainLayout>
  );
}
