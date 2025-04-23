"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Sparkles } from "lucide-react";
import MainLayout from "./layout/main-layout";
import { useRef } from "react";
import HealthCardsSection from "./sections/health-card-sections";
import BodyMemorySection from "./sections/body-memory-sections";

export default function Component() {
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
              // src="https://v.ftcdn.net/02/15/49/17/700_F_215491786_Y9bkFxksLCtkMdMbWhDYOg1VGBGau9tI_ST.mp4"
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
                {/* <Badge className="w-fit  bg-primary/10 text-[#006FB7] hover:bg-primary/20">
                  Healthcare Innovation
                </Badge> */}
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl text-white">
                  Personalize care for a{" "}
                  <span className="text-[#006FB7]">Healthier you.</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-300 leading-relaxed dark:text-gray-100">
                  Prevent diseases by actively monitoring your health data and
                  taking action for healthier you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
                  <Button
                    size="lg"
                    className="md:flex-1 bg-primary hover:bg-primary/90 text-primary-foreground dark:bg-primary dark:hover:bg-primary/90 dark:text-primary-foreground transition-all duration-300 rounded-xl"
                  >
                    <Sparkles className="mr-2 h-5 w-5" />
                    <a href="https://app.livemoreai.com/register">Live Better Now</a>
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="md:flex-1 border-gray-300 text-gray-800 hover:bg-gray-100 hover:text-gray-900 dark:border-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white transition-all duration-300 rounded-xl"
                  >
                    <a href="/about">Learn more</a>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        <section id="#solutions">
          <HealthCardsSection />
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
                Personalized health insights for a healthier and longer life.
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
        <BodyMemorySection />
        {/* <section className="pb-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="mt-16 bg-muted rounded-lg px-8 py-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">
                Unlocking Your Body&apos;s Memory
              </h3>
              
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
                    <span className="font-medium">{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section> */}

        <section className="py-24 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="dark:bg-muted dark:text-white bg-card rounded-2xl overflow-hidden shadow-lg bg-gray-200 text-black"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12 flex flex-col justify-center">
                  <h2 className="text-2xl sm:text-3xl font-bold mb-6">
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
                    alt="Livemore"
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
