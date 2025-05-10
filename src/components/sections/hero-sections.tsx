"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  return (
    <>
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source
          src="/videos/background-video.mp4"
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
                <a href={`${process.env.NEXT_PUBLIC_APP_URL}/register`}>
                  Live Better Now
                </a>
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
    </>
  );
}
