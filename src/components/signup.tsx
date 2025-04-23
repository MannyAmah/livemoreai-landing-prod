"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { User, Stethoscope, ArrowRight } from "lucide-react";
import MainLayout from "./layout/main-layout";

export default function SignupPage() {
  const router = useRouter();
  const [showHealthcareForm, setShowHealthcareForm] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    organization: "",
    message: "",
  });
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  // Ensure theme component doesn't cause hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const handleUserClick = () => {
    router.push("https://app.livemoreai.com");
  };

  const handleHealthcareClick = () => {
    setShowHealthcareForm(true);
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "http://dashboard.livemoreai.com/api/healthcare-request-access/",
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
        throw new Error(errorData.detail || "An unexpected error occurred.");
      }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (_) {
      setErrorMessage("An unexpected error occurred.");
      setLoading(false);
      return;
    }

    setShowHealthcareForm(false);
    setShowThankYouModal(true);
    setFormData({
      name: "",
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

  if (!mounted) return null;

  return (
    <MainLayout>
      <main className="min-h-screen bg-gradient-to-b from-sky-50 to-white dark:from-gray-900 dark:to-gray-950 transition-colors duration-300">
        <div className="container mx-auto px-4 py-16 max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Choose Your Path
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Select the option that best describes you to get personalized
              healthcare services
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Individual User Card */}
            <div
              onClick={handleUserClick}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Person using health app on smartphone"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <User className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Individual User
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Register as an individual to access personalized healthcare
                  services and manage your health journey.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>

            {/* Healthcare Provider Card */}
            <div
              onClick={handleHealthcareClick}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border border-gray-100 dark:border-gray-700"
            >
              <div className="h-48 relative">
                <Image
                  src="https://images.unsplash.com/photo-1511174511562-5f7f18b874f8?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Healthcare professionals in a meeting"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <div className="p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <Stethoscope className="w-8 h-8 text-blue-600 dark:text-blue-300" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  Healthcare Provider
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Register as a healthcare provider to offer your medical
                  expertise and connect with patients.
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-medium">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </div>
              </div>
            </div>
          </div>

          {/* Healthcare Provider Contact Form Dialog */}
          <Dialog
            open={showHealthcareForm}
            onOpenChange={setShowHealthcareForm}
          >
            <DialogContent className="sm:max-w-[500px] dark:bg-gray-800 dark:text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold dark:text-white">
                  Healthcare Provider Contact
                </DialogTitle>
                <DialogDescription className="dark:text-gray-300">
                  Fill out the form below and our team will get in touch with
                  you shortly.
                </DialogDescription>
              </DialogHeader>
              <form onSubmit={handleFormSubmit} className="space-y-4 mt-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="dark:text-gray-200">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Dr. Jane Smith"
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="dark:text-gray-200">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="doctor@hospital.com"
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="dark:text-gray-200">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 123-4567"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="organization" className="dark:text-gray-200">
                    Organization/Practice
                  </Label>
                  <Input
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    required
                    onChange={handleInputChange}
                    placeholder="City Medical Center"
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message" className="dark:text-gray-200">
                    Additional Information
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your practice and how we can help..."
                    rows={4}
                    required
                    className="dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:placeholder-gray-400"
                  />
                </div>
                <div className="flex justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setShowHealthcareForm(false)}
                    className="dark:border-gray-600 dark:text-gray-200"
                    disabled={loading}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" disabled={loading}>
                    Submit
                  </Button>
                </div>
              </form>
              {errorMessage && (
                <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
              )}
            </DialogContent>
          </Dialog>
          {/* Thank You Modal */}
          <Dialog open={showThankYouModal} onOpenChange={setShowThankYouModal}>
            <DialogContent className="sm:max-w-[500px] dark:bg-gray-800 dark:text-white">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold dark:text-white">
                  Thank You!
                </DialogTitle>
                <DialogDescription className="dark:text-gray-300">
                  We&apos;ve received your submission and will contact you
                  shortly.
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
              <div className="text-center text-gray-700 dark:text-gray-300 mb-4">
                A member of our team will review your information and reach out
                to discuss how we can work together.
              </div>
              <div className="flex justify-center pt-2">
                <Button onClick={() => setShowThankYouModal(false)}>
                  Close
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </main>
    </MainLayout>
  );
}
