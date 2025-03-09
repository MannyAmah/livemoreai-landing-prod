"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Menu, Twitter, X, Youtube } from "lucide-react";
import ThemeToggle from "./theme-toggle";

const MotionLink = motion(Link);

const NavItems = [
  { label: "Home", link: "/", id: 1 },
  { label: "Solutions", link: "#solutions", id: 2 },
  { label: "How it works", link: "#howitworks", id: 3 },
  { label: "About us", link: "/about", id: 4 },
];

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "/" || id === "/about") {
      window.location.href = id;
      return;
    }
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-screen min-h-screen flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              className="object-contain"
              width={24}
              height={24}
            />
            <h1 className="text-lg font-semibold">Livemore</h1>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex gap-6">
            {NavItems.map((item) => (
              <MotionLink
                key={item.id}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection(item.link)}
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </MotionLink>
            ))}
          </nav>

          {/* Buttons */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Authentication Buttons */}
            <Button variant="ghost" className="hidden sm:inline-flex">
              <Link href="https://app.livemoreai.com/login">Sign in</Link>
            </Button>
            <Button className="hidden sm:inline-flex">
              <Link href="/signup">Get started</Link>
            </Button>

            {/* Mobile Menu Toggle */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <nav className="flex flex-col gap-4 p-4 bg-background border-t">
              {NavItems.map((item) => (
                <Link
                  key={item.id}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                  href={item.link}
                  onClick={() => {
                    scrollToSection(item.link);
                    setMobileMenuOpen(false);
                  }}
                >
                  {item.label}
                </Link>
              ))}
              <Button variant="ghost" className="justify-start">
                <Link href="https://app.livemoreai.com/login">Sign in</Link>
              </Button>
              <Button className="justify-start">
                <Link href="/signup">Get started</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-background text-foreground">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr,1fr,1fr]">
            <div className="space-y-4">
              <Link href="#" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={24}
                  height={24}
                />
                <span className="text-xl font-bold">Livemore</span>
              </Link>
              <p className="text-lg text-gray-400 max-w-xs">
                Personalize care for a healthier you.
              </p>
            </div>
            <div>
              <h3 className="font-medium uppercase text-sm text-gray-400">
                Company
              </h3>
              <ul>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium uppercase text-sm text-gray-400">
                Product
              </h3>
              <ul>
                <li>
                  <Link href="#">Home</Link>
                </li>
                <li>
                  <Link href="#">How it works</Link>
                </li>
                <li>
                  <Link href="#">Solutions</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex justify-between items-center">
            <p className="text-sm text-gray-400">
              © 2024 Livemore Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#">
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
