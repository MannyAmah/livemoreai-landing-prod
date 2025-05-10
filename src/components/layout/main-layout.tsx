"use client";

import type React from "react";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Linkedin,
  Menu,
  Twitter,
  X,
  Youtube,
  ChevronRight,
} from "lucide-react";

const MotionLink = motion(Link);

const NavItems = [
  { label: "Home", link: "/", id: 1 },
  { label: "Providers", link: "/providers", id: 3 },
  // { label: "Research", link: "/blog", id: 2 },
  { label: "About us", link: "/about", id: 4 },
];

interface IMainLayout {
  children: React.ReactNode;
}

export default function MainLayout({ children }: IMainLayout) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    window.location.href = id;

    // if (id === "/" || id === "/providers") {
    //   window.location.href = id;
    //   return;
    // }
    // const element = document.getElementById(id);
    // if (element) {
    //   element.scrollIntoView({ behavior: "smooth" });
    // }
  };

  return (
    <div className="flex w-full min-h-screen flex-col bg-background text-foreground font-sans">
      {/* Futuristic Header */}
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-primary/10"
            : "bg-background/50 backdrop-blur-md"
        }`}
      >
        <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8 relative">
          {/* Logo with glow effect */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Image
                src="/images/logo.png"
                alt="logo"
                width={12}
                height={12}
                className="relative z-10"
              />
            </div>
            <span className="text-xl font-semibold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Livemore
            </span>
          </Link>

          {/* Desktop Navigation with hover effects */}
          <nav className="hidden md:flex items-center gap-8">
            {NavItems.map((item) => (
              <MotionLink
                key={item.id}
                className="text-sm font-medium text-muted-foreground hover:text-primary relative group"
                onClick={() => scrollToSection(item.link)}
                href="#"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
              >
                {item.label}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-300"
                  layoutId={`underline-${item.id}`}
                />
              </MotionLink>
            ))}
          </nav>

          {/* Action buttons with glow effects */}
          <div className="flex items-center gap-4">
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}>
              <Button
                variant="outline"
                size="sm"
                className="hidden sm:inline-flex border-primary/20 hover:border-primary/50 hover:bg-primary/5 transition-all duration-300"
              >
                Sign in
              </Button>
            </Link>
            <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/register`}>
              <Button
                size="sm"
                className="hidden sm:inline-flex bg-gradient-to-r from-primary to-primary/80 hover:from-primary hover:to-primary shadow-md hover:shadow-primary/20 transition-all duration-300"
              >
                Get started
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden relative group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="absolute inset-0 bg-primary/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
              {mobileMenuOpen ? (
                <X className="h-6 w-6 relative z-10" />
              ) : (
                <Menu className="h-6 w-6 relative z-10" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Nav with animated transitions */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              className="md:hidden bg-background/95 backdrop-blur-lg border-t border-primary/10"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <nav className="flex flex-col px-4 py-6 gap-4">
                {NavItems.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.link}
                      className="text-base font-medium hover:text-primary flex items-center group"
                      onClick={() => {
                        scrollToSection(item.link);
                        setMobileMenuOpen(false);
                      }}
                    >
                      <span className="w-1 h-1 bg-primary rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: NavItems.length * 0.1 }}
                >
                  <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/login`}>
                    <Button
                      variant="ghost"
                      className="w-full justify-start mt-2 hover:bg-primary/5"
                    >
                      Sign in
                    </Button>
                  </Link>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: (NavItems.length + 1) * 0.1 }}
                >
                  <Link href={`${process.env.NEXT_PUBLIC_APP_URL}/register`}>
                    <Button className="w-full justify-start bg-gradient-to-r from-primary to-primary/80">
                      Get started
                      <ChevronRight className="h-4 w-4 ml-1" />
                    </Button>
                  </Link>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main Content */}
      <main className="flex-1">{children}</main>

      {/* Futuristic Footer */}
      <footer className="bg-background relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-primary/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-4">
            <div className="space-y-6">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-full blur-md scale-125 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Image
                    src="/images/logo.png"
                    alt="logo"
                    width={15}
                    height={15}
                    className="relative z-10"
                  />
                </div>
                <span className="text-xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                  Livemore
                </span>
              </Link>
              <p className="text-sm leading-relaxed max-w-sm text-muted-foreground/80">
                Prevent diseases by actively monitoring your health data and
                taking action for healthier you.
              </p>

              <div className="pt-4">
                <div className="flex gap-5">
                  {[
                    { icon: <Twitter className="h-5 w-5" />, href: "#" },
                    { icon: <Linkedin className="h-5 w-5" />, href: "#" },
                    { icon: <Youtube className="h-5 w-5" />, href: "#" },
                  ].map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="relative group"
                    >
                      <div className="absolute inset-0 bg-primary/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
                      <div className="relative z-10 text-muted-foreground group-hover:text-primary transition-colors duration-300">
                        {social.icon}
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {[
              {
                title: "Company",
                links: [{ label: "About Us", href: "/about" }],
              },
              {
                title: "Product",
                links: [
                  { label: "Home", href: "/" },
                  { label: "How it Works", href: "#" },
                  { label: "Solutions", href: "#solutions" },
                ],
              },
              {
                title: "Connect",
                links: [
                  { label: "Contact", href: "/contact" },
                  { label: "Support", href: "/contact" },
                ],
              },
            ].map((section, index) => (
              <div key={index} className="space-y-5">
                <h4 className="text-sm font-semibold mb-3 text-foreground/90 relative inline-block">
                  {section.title}
                  <div className="absolute -bottom-1 left-0 w-1/2 h-[2px] bg-gradient-to-r from-primary/50 to-transparent"></div>
                </h4>
                <ul className="space-y-3 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors duration-300 group flex items-center"
                      >
                        <span className="w-0 group-hover:w-2 h-[1px] bg-primary mr-0 group-hover:mr-2 transition-all duration-300"></span>
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-16 pt-6 text-xs text-muted-foreground/70 text-center relative">
            <div className="absolute top-0 left-1/4 right-1/4 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
            © 2024 Livemore Inc. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
