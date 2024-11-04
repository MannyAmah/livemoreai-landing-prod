"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HeartPulse,
  Microscope,
  Brain,
  Stethoscope,
  Pill,
  Shield,
  ChevronRight,

  Menu,
  X,
} from "lucide-react";

const MotionLink = motion(Link);

// function ThemeToggle() {
//   const { theme, setTheme } = useTheme();

//   return (
//     <Button
//       variant="ghost"
//       size="icon"
//       onClick={() => setTheme(theme === "light" ? "dark" : "light")}
//     >
//       <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:text-white dark:-rotate-90 dark:scale-0" />
//       <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
//       <span className="sr-only">Toggle theme</span>
//     </Button>
//   );
// }

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex w-screen min-h-screen flex-col bg-background bg-black text-foreground">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="flex h-16 items-center justify-between container mx-auto px-4 sm:px-6 lg:px-8">
          <Link className="flex items-center gap-2" href="/">
            <img src="/images/logo.png" alt="logo" className="object-contain" width="20px" />
            <h1 className="text-xl font-bold text-white">Livemore</h1>
          </Link>
          <nav className="hidden md:flex gap-6 text-white">
            {[
              { label: "Home", link: "#home", id: 1 },
              { label: "Solutions", link: "#solutions", id: 2 },
              { label: "How it works", link: "#how-it-works", id: 3 },
            ].map((item) => (
              <MotionLink
                key={item.id}
                className="text-sm font-medium text-muted-foreground hover:text-primary"
                href={item.link}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.label}
              </MotionLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            {/* <ThemeToggle /> */}
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
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
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
              {["Home", "Solutions", "How it works"].map((item) => (
                <Link
                  key={item}
                  className="text-sm font-medium text-muted-foreground hover:text-primary"
                  href="#"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </Link>
              ))}
              <Button variant="ghost" className="justify-start">
                <Link href={"https://app.livemoreai.com/"}>Sign in</Link>
              </Button>
              <Button className="justify-start">
                <Link href={"https://app.livemoreai.com/"}>Sign in</Link>
              </Button>
            </nav>
          </motion.div>
        )}
      </header>
      <main className="flex-1">
        <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source
              src="https://firebasestorage.googleapis.com/v0/b/imageupload-e4f08.appspot.com/o/videos%2Fbackground-video.mp4?alt=media&token=79f3ec72-f92c-4825-9cbd-557fc536b583"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
          <div className="absolute inset-0 bg-black/50" />
          <div className="container relative z-10 py-12 md:py-24 mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Badge className="w-fit bg-primary/10 text-primary hover:bg-primary/20">
                  Healthcare Innovation
                </Badge>
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  The Future of <span className="text-primary">Healthcare</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Our commitment to pioneering innovations is revolutionizing
                  the landscape of wellness
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Get started
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-white"
                  >
                    Learn more
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24 bg-muted">
          <div
            id="#solutions"
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <motion.div
              className="text-center space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl text-white font-bold tracking-tight sm:text-3xl md:text-4xl">
                Our main focus
              </h2>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
                Leveraging innovative technologies to advance healthcare by
                emphasizing disease prevention, early detection, accurate
                diagnosis, personalized treatment, and cost reduction.
              </p>
            </motion.div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Microscope,
                  title: "Disease Prevention",
                  description:
                    "Focuses on using cutting-edge AI to empower individuals to take control of their health.",
                },
                {
                  icon: Brain,
                  title: "Disease Prediction",
                  description:
                    "Harnesses the power of AI to predict your risk of developing various diseases.",
                },
                {
                  icon: HeartPulse,
                  title: "Early Detection",
                  description:
                    "Utilizes cutting-edge AI to identify potential health issues in their earliest stages.",
                },
                {
                  icon: Stethoscope,
                  title: "Accurate Diagnosis",
                  description:
                    "Leverages AI to revolutionize the diagnostic process through comprehensive analysis.",
                },
                {
                  icon: Pill,
                  title: "Personalized Treatment",
                  description:
                    "Creates a personalized treatment plan designed specifically for your needs.",
                },
                {
                  icon: Shield,
                  title: "Cost Guardian",
                  description:
                    "Helps you take control of your healthcare expenses through AI-powered insights.",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <feature.icon className="h-12 w-12 text-primary mb-4" />
                      <h3 className="text-xl font-semibold mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600 flex-grow">
                        {feature.description}
                      </p>
                      <Link
                        href="#"
                        className="text-primary hover:underline inline-flex items-center mt-4"
                      >
                        Learn more
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="#how-it-works" className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="bg-card rounded-2xl overflow-hidden shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-white">
                    Our mission is to revolutionize personalized healthcare
                    through data-driven insights
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    By harnessing the power of advanced analytics, we aim to
                    transform the healthcare landscape, providing tailored
                    solutions that enhance outcomes, prevent diseases, and
                    empower individuals to take control of their health and
                    well-being.
                  </p>
                  <Button className="w-fit">Learn about our approach</Button>
                </div>
                <div className="relative h-96 lg:h-auto">
                  <Image
                    src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop"
                    alt="Healthcare Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-primary rounded-2xl p-8 sm:p-12 text-primary-foreground">
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Subscribe to our newsletter
                  </h2>
                  <p className="text-primary-foreground/80">
                    Stay updated with the latest healthcare innovations and
                    insights.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    placeholder="Enter your email"
                    type="email"
                    className="bg-primary-foreground text-primary flex-grow"
                  />
                  <Button variant="secondary" className="whitespace-nowrap">
                    Subscribe
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-muted py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <Link href="#" className="flex items-center gap-2">
                <span className="text-xl font-bold text-white">Livemore</span>
              </Link>
              <p className="text-sm text-gray-600">
                Revolutionizing healthcare through innovation and technology.
              </p>
            </div>
            {[
              // {
              //   title: "Product",
              //   items: ["Features", "Solutions", "Pricing", "Updates"],
              // },
              {
                title: "Company",
                items: ["About us", "Contact"],
              },
              {
                title: "Legal",
                items: ["Terms", "Privacy"],
              },
            ].map((column) => (
              <div key={column.title} className="space-y-4">
                <h3 className="font-semibold text-white">{column.title}</h3>
                <ul className="space-y-2">
                  {column.items.map((item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-sm text-gray-600 hover:text-primary"
                      >
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
