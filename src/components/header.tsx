import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { ChevronRight, Menu, X } from "lucide-react";

const MotionLink = motion(Link);

const NavItems = [
  { label: "Home", link: "/", id: 1 },
  { label: "Providers", link: "/providers", id: 3 },
  // { label: "Research", link: "/blog", id: 2 },
  { label: "About us", link: "/about", id: 4 },
];

export default function Header() {
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
          <Link href={`${process.env.NEXT_PUBLIC_APP_URL}`}>
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
                <Link href={`${process.env.NEXT_PUBLIC_APP_URL}`}>
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
  );
}
