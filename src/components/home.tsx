"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  HeartPulse,
  Microscope,
  Brain,
  Stethoscope,
  Pill,
  Shield,
  Utensils,
  Cloud,
  Droplet,
  ArrowRight,
} from "lucide-react";
import MainLayout from "./layout/main-layout";
import { useRef } from "react";

export default function Component() {
  const solutionsRef = useRef(null);
  const howItWorksRef = useRef(null);

  return (
    <MainLayout>
      <>
        <section
          id="#home"
          className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden"
        >
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
                  Personalize care for a healthier you.
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
                  Prevent diseases from invading your body by actively
                  monitoring your health data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    <Link href={"https://app.livemoreai.com/"}>
                      Live Better Now
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto text-white"
                  >
                    <Link href={"/about"}>Learn more</Link>
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section
          id="#solutions"
          className="py-12 md:py-24 bg-muted"
          ref={solutionsRef}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-2xl text-white font-bold tracking-tight sm:text-3xl md:text-4xl">
                Stay healthy, avoid hospital and save cost
              </h2>
              <p className="max-w-2xl mx-auto text-lg sm:text-xl text-gray-500">
                Stay one step ahead of illness, catch your health warning signs
                before they turn into big health issues with sleepless nights
                and mounting medical bills.
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
                      {/* <Link
                        href="#"
                        className="text-primary hover:underline inline-flex items-center mt-4"
                      >
                        Learn more
                        <ChevronRight className="h-4 w-4 ml-1" />
                      </Link> */}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section id="#howitworks" className="py-24" ref={howItWorksRef}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center space-y-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl dark:text-white font-bold tracking-tight sm:text-4xl">
                How it Works
              </h2>
              <p className="max-w-2xl mx-auto text-xl text-muted-foreground">
                Personalized insights for better health
              </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-16">
              {[
                {
                  step: "STEP 1",
                  title: "Comprehensive Data Collection",
                  description:
                    "We gather data about your genetics, blood markers, microbiome, medical history, lifestyle, and more. This helps us understand your baseline health.",
                  image:
                    "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?q=80&w=1964&auto=format&fit=crop",
                },
                {
                  step: "STEP 2",
                  title: "Personalized Analysis",
                  description:
                    "Our AI, together with our health professionals, analyzes your data to identify potential health risks, track key biomarkers, and offer recommendations based on your unique profile.",
                  image:
                    "https://images.unsplash.com/photo-1531956656798-56686eeef3d4?q=80&w=2054&auto=format&fit=crop",
                },
                {
                  step: "STEP 3",
                  title: "Take Action & Track Progress",
                  description:
                    "Use your personalized plan, track your progress, and adjust as needed with the support of our team and re-testing.",
                  image:
                    "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
                },
              ].map((step, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col items-center text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div
                    className="relative w-full mb-4 rounded-lg overflow-hidden"
                    style={{ height: "500px" }}
                  >
                    <Image
                      src={step.image}
                      alt={step.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <Badge className="mb-2">{step.step}</Badge>
                  <h3 className="text-xl dark:text-white font-semibold mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mt-16 bg-muted rounded-lg px-8 py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl text-white font-semibold mb-4">
                Unlocking Your Body&apos;s Memory
              </h3>
              <p className="text-muted-foreground mb-6">
                Your genetic system stores information on everything that
                happens to your body, from the food you eat to the environmental
                factors that affect you. Our goal is to unlock this memory and
                understand what transpires in your body&apos;s &quot;hood&quot;.
              </p>
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {[
                  { title: "Nutrition Analysis", icon: Utensils },
                  { title: "Environmental Impact", icon: Cloud },
                  { title: "Stress Effects", icon: Brain },
                  { title: "Medication Efficacy", icon: Pill },
                  { title: "Immune System Battles", icon: Shield },
                  { title: "Toxin Exposure", icon: Droplet },
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="bg-primary/10 p-2 rounded-full">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <span className="font-medium text-white">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-24 md:py-24">
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
                    Health Insights and Personalized treatment from your health
                    Data
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    We use AI to analyze your health data and provide you with
                    personalized health insights and treatments and improve your
                    health and wellness.
                  </p>
                  <Button className="w-fit">Learn about our approach</Button>
                </div>
                <div className="relative" style={{ height: "50vh" }}>
                  <Image
                    src="https://images.unsplash.com/photo-1579047917338-a6a69144fe63?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Healthcare Innovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="dark:bg-muted dark:text-white bg-primary rounded-2xl p-8 sm:p-12 text-primary-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid gap-8 lg:grid-cols-2 items-center">
                <div className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold">
                    Take control of your health today
                  </h2>
                  <p className="text-primary-foreground/80 dark:text-gray-300">
                    Be among the first to experience a new era of personalized
                    healthcare. Start your journey with us and discover how
                    tailored solutions can make a lasting impact on your
                    well-being.
                  </p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4 justify-end">
                  <Button
                    variant="secondary"
                    className="whitespace-nowrap"
                    size="lg"
                  >
                    Learn More
                  </Button>
                  <Button
                    variant="default"
                    className="whitespace-nowrap group"
                    size="lg"
                  >
                    Feel Better, Live Better
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </>
    </MainLayout>
  );
}
