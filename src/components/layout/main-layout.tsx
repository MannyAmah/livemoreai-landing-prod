"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Linkedin, Menu, Twitter, X, Youtube } from "lucide-react";

const MotionLink = motion(Link);

const NavItems = [
  { label: "Home", link: "/", id: 1 },
  { label: "Solutions", link: "#solutions", id: 2 },
  { label: "How it works", link: "#howitworks", id: 3 },
  { label: "About us", link: "/about", id: 3 },
];

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    if (id === "/") {
      window.location.href = "/";
      return;
    }

    if (id === "/about") {
      window.location.href = "/about";
      return;
    }

    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex w-screen min-h-screen flex-col bg-background bg-black text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-2" href="/">
            <Image
              src="/images/logo.png"
              alt="logo"
              className="object-contain"
              width={16}
              height={16}
            />
            <h1 className="text-lg font-semibold text-white">Livemore</h1>
          </Link>
          <nav className="hidden md:flex gap-6 text-white">
            {NavItems.map((item) => (
              <MotionLink
                key={item.id}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                onClick={() => scrollToSection(item.link)}
                href={"#"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </MotionLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              className="hidden sm:inline-flex text-white"
            >
              <Link href={"https://app.livemoreai.com/"}>Sign in</Link>
            </Button>
            <Button className="hidden sm:inline-flex">
              <Link href={"https://app.livemoreai.com/"}>Get started</Link>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 text-white" />
              ) : (
                <Menu className="h-6 w-6 text-white" />
              )}
            </Button>
          </div>
        </div>
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
              <Button variant="ghost" className="justify-start text-white">
                <Link href={"https://app.livemoreai.com/"}>Sign in</Link>
              </Button>
              <Button className="justify-start">
                <Link href={"https://app.livemoreai.com/"}>Get started</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </header>
      <main className="flex-1">{children}</main>
      <footer className="bg-black text-white">
        <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[2fr,1fr,1fr,1fr]">
            <div className="space-y-4">
              <Link href="#" className="flex items-center gap-2">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  className="object-contain"
                  width={16}
                  height={16}
                />

                <span className="text-xl font-bold">Livemore</span>
              </Link>
              <p className="text-lg text-gray-400 max-w-xs">
                Personalize care for a healthier you.
              </p>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium uppercase text-sm text-gray-400">
                Company
              </h3>
              <ul className="space-y-3">
                {["About Us"].map((item) => (
                  <li key={item}>
                    <Link
                      href="/about"
                      className="text-sm hover:text-[#1A8FAE] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium uppercase text-sm text-gray-400">
                Product
              </h3>
              <ul className="space-y-3">
                {["Home", "How it works", "Solutions"].map((item) => (
                  <li key={item}>
                    <Link
                      href="#"
                      className="text-sm hover:text-[#1A8FAE] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="font-medium uppercase text-sm text-gray-400">
                Legal
              </h3>
              <ul className="space-y-3">
                {[
                  "Terms of Service",
                  "Privacy Policy",
                  "Cookies Policy",
                  "Data Processing",
                ].map((item) => (
                  <li key={item}>
                    <Link
                      href={item.includes("Service") ? "/terms" : "/privacy"}
                      className="text-sm hover:text-[#1A8FAE] transition-colors"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-400">
              © 2024 Livemore Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-gray-400 hover:text-[#1A8FAE]">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1A8FAE]">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">Linkedin</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#1A8FAE]">
                <Youtube className="h-5 w-5" />
                <span className="sr-only">YouTube</span>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
