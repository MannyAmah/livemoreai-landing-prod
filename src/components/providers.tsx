"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import MainLayout from "./layout/main-layout";

export default function ProvidersPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <MainLayout>
      <div className="flex flex-col min-h-screen bg-white text-[#1d1d1f]">
        <main className="flex-1 pt-0">
          {/* Hero Section */}
          <section className="py-32 md:py-40 relative overflow-hidden">
            <div
              className="absolute inset-0 bg-gradient-to-b from-[#f5f5f7] to-white -z-10"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            />
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainerVariants}
                className="max-w-4xl mx-auto text-center"
              >
                <motion.div
                  variants={fadeInUpVariants}
                  className="text-sm font-medium mb-4 text-[#115490]"
                >
                  For Healthcare
                </motion.div>
                <motion.h1
                  variants={fadeInUpVariants}
                  className="text-4xl md:text-6xl lg:text-7xl font-semibold max-w-4xl mx-auto leading-tight tracking-tight"
                >
                  Precision medicine for a healthier tomorrow
                </motion.h1>
                <motion.p
                  variants={fadeInUpVariants}
                  className="mt-6 text-xl text-[#6e6e73] max-w-3xl mx-auto leading-relaxed"
                >
                  Empower healthcare providers with data-driven insights to
                  develop preventive treatment plans for individuals and
                  communities.
                </motion.p>
                <motion.div variants={fadeInUpVariants}>
                  <Button
                    asChild
                    className="mt-10 bg-[#115490] hover:bg-[#115490]/90 text-white rounded-full px-8 py-6 text-lg font-medium"
                  >
                    <Link href="/contact" className="flex items-center gap-2">
                      Talk with our team <ChevronRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Solutions Section */}
          <section id="solutions" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUpVariants}
                  className="text-3xl md:text-5xl font-semibold mb-6"
                >
                  Precision medicine solutions for personalized healthcare
                </motion.h2>
                <motion.p
                  variants={fadeInUpVariants}
                  className="text-xl text-[#6e6e73]"
                >
                  Our technology helps healthcare professionals deliver better
                  outcomes through data-driven insights.
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="grid md:grid-cols-3 gap-8"
              >
                <motion.div
                  variants={fadeInUpVariants}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video relative">
                    <Image
                      src="https://images.unsplash.com/photo-1576671081837-49000212a370?q=80&w=2070&auto=format&fit=crop"
                      alt="Predictive Analytics"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3">
                      Predictive Analytics
                    </h3>
                    <p className="text-[#6e6e73] mb-6 leading-relaxed">
                      Early disease detection and risk prediction using advanced
                      data analytics and machine learning algorithms.
                    </p>
                    {/* <Link
                      href="/contact"
                      className="text-[#115490] flex items-center gap-1 text-sm font-medium group"
                    >
                      Contact sales
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link> */}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video relative">
                    <Image
                      src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=1932&auto=format&fit=crop"
                      alt="Personalized Treatment"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3">
                      Personalized Treatment
                    </h3>
                    <p className="text-[#6e6e73] mb-6 leading-relaxed">
                      Tailored treatment plans based on individual genetic,
                      lifestyle, and environmental factors for optimal outcomes.
                    </p>
                    {/* <Link
                      href="/contact"
                      className="text-[#115490] flex items-center gap-1 text-sm font-medium group"
                    >
                      Contact sales
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link> */}
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="aspect-video relative">
                    <Image
                      src="https://images.unsplash.com/photo-1581093458791-9f3c3900df7b?q=80&w=2070&auto=format&fit=crop"
                      alt="Population Health"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold mb-3">
                      Population Health
                    </h3>
                    <p className="text-[#6e6e73] mb-6 leading-relaxed">
                      Community-wide health insights to address disparities and
                      improve outcomes through targeted interventions.
                    </p>
                    {/* <Link
                      href="/contact"
                      className="text-[#115490] flex items-center gap-1 text-sm font-medium group"
                    >
                      Contact sales
                      <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link> */}
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* What Healthcare Professionals Get */}
          <section className="py-24 bg-[#f5f5f7]">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUpVariants}
                  className="text-3xl md:text-5xl font-semibold mb-6"
                >
                  What healthcare professionals get
                </motion.h2>
                <motion.p
                  variants={fadeInUpVariants}
                  className="text-xl text-[#6e6e73]"
                >
                  Our platform provides powerful tools and insights to transform
                  healthcare delivery
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                <motion.div
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-md"
                >
                  <div className="w-12 h-12 bg-[#115490]/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#115490"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path>
                      <path d="M13 5v2"></path>
                      <path d="M13 17v2"></path>
                      <path d="M13 11v2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Comprehensive Analytics
                  </h3>
                  <p className="text-[#6e6e73]">
                    Access detailed patient analytics that combine genetic,
                    lifestyle, and environmental data for a complete health
                    picture.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-md"
                >
                  <div className="w-12 h-12 bg-[#115490]/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#115490"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                      <polyline points="14 2 14 8 20 8"></polyline>
                      <path d="M12 18v-6"></path>
                      <path d="M8 18v-1"></path>
                      <path d="M16 18v-3"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Treatment Recommendations
                  </h3>
                  <p className="text-[#6e6e73]">
                    AI-powered treatment suggestions based on the latest
                    research and patient-specific factors.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-md"
                >
                  <div className="w-12 h-12 bg-[#115490]/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#115490"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 7V5c0-1.1.9-2 2-2h2"></path>
                      <path d="M17 3h2c1.1 0 2 .9 2 2v2"></path>
                      <path d="M21 17v2c0 1.1-.9 2-2 2h-2"></path>
                      <path d="M7 21H5c-1.1 0-2-.9-2-2v-2"></path>
                      <rect width="7" height="5" x="7" y="7" rx="1"></rect>
                      <rect width="7" height="5" x="10" y="12" rx="1"></rect>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Risk Prediction
                  </h3>
                  <p className="text-[#6e6e73]">
                    Early identification of disease risks allowing for
                    preventive interventions before symptoms appear.
                  </p>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-md"
                >
                  <div className="w-12 h-12 bg-[#115490]/10 rounded-full flex items-center justify-center mb-6">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#115490"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                      <circle cx="9" cy="7" r="4"></circle>
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                      <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Population Insights
                  </h3>
                  <p className="text-[#6e6e73]">
                    Community-level health trends and patterns to inform public
                    health initiatives and resource allocation.
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Partners Section */}
          {/* <section className="py-20">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="text-center mb-12"
              >
                <motion.p
                  variants={fadeInUpVariants}
                  className="text-[#6e6e73]"
                >
                  Trusted by leading healthcare institutions
                </motion.p>
              </motion.div>
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="flex flex-wrap justify-center items-center gap-12 opacity-70"
              >
                {[1, 2, 3, 4, 5].map((i) => (
                  <motion.div key={i} variants={fadeInUpVariants}>
                    <Image
                      src={`/placeholder.svg?height=40&width=120`}
                      height={40}
                      width={120}
                      alt="Partner logo"
                      className="grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section> */}

          {/* Model Section */}
          <section
            id="model"
            className="py-24 md:py-32 bg-[#f8f8f8] overflow-hidden"
          >
            <div className="container mx-auto px-4 relative">
              {/* Background decorative elements */}
              <div className="absolute top-20 left-0 w-64 h-64 bg-[#115490]/5 rounded-full blur-3xl -z-10"></div>
              <div className="absolute bottom-40 right-10 w-80 h-80 bg-[#115490]/5 rounded-full blur-3xl -z-10"></div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                className="max-w-4xl mx-auto text-left md:text-center mb-20"
              >
                <motion.h2
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="text-3xl md:text-5xl font-semibold mb-6"
                >
                  The precision medicine platform behind better healthcare
                  outcomes
                </motion.h2>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: {
                      opacity: 1,
                      y: 0,
                      transition: {
                        duration: 0.6,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className="text-xl text-[#6e6e73]"
                >
                  Our unique model highlights the various domains to understand
                  the people we serve
                </motion.p>
              </motion.div>

              {/* Asymmetric layout */}
              <div className="relative max-w-7xl mx-auto">
                {/* Person(s) - Large left card */}
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="relative z-10 mb-24 md:mb-0 md:w-[45%]"
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
                        alt="Person data analysis"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
                        <h3 className="text-3xl font-semibold text-white p-8">
                          Person(s)
                        </h3>
                      </div>
                    </div>
                    <div className="p-8">
                      <p className="text-[#6e6e73] leading-relaxed">
                        We analyze demographic data from various electronic
                        health records to understand the people we serve,
                        including gender, age, and other key factors.
                      </p>
                    </div>
                  </div>
                </motion.div>

                {/* Markers - Offset right card */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.1,
                  }}
                  viewport={{ once: true }}
                  className="relative z-20 md:absolute md:top-[15%] md:right-0 md:w-[60%] mb-24 md:mb-0"
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-1/2 p-8 order-2 md:order-1">
                        <h3 className="text-2xl font-semibold mb-4 text-[#115490]">
                          Markers
                        </h3>
                        <p className="text-[#6e6e73] leading-relaxed">
                          We focus on scientific markers of health and illness,
                          including genetics, genomics, metabolomics, phenomics,
                          and other –omic platforms.
                        </p>
                      </div>
                      <div className="md:w-1/2 aspect-square md:aspect-auto relative order-1 md:order-2">
                        <Image
                          src="https://images.unsplash.com/photo-1530026186672-2cd00ffc50fe?q=80&w=2070&auto=format&fit=crop"
                          alt="Scientific markers"
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Exposome - Left offset smaller card */}
                <motion.div
                  initial={{ opacity: 0, x: -30, y: 30 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.2,
                  }}
                  viewport={{ once: true }}
                  className="relative z-30 md:absolute md:top-[55%] md:left-[10%] md:w-[40%] mb-24 md:mb-0"
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform md:rotate-2">
                    <div className="p-8">
                      <h3 className="text-2xl font-semibold mb-4 text-[#115490]">
                        Exposome
                      </h3>
                      <p className="text-[#6e6e73] leading-relaxed">
                        We analyze environmental influences, from internal
                        microbiome to external socio-economic factors, zip
                        codes, and food quality.
                      </p>
                    </div>
                    <div className="aspect-video relative">
                      <Image
                        src="https://images.unsplash.com/photo-1628595351029-c2bf17511435?q=80&w=2013&auto=format&fit=crop"
                        alt="Environmental factors"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                {/* Behavioral Health - Right bottom floating card */}
                <motion.div
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.22, 1, 0.36, 1],
                    delay: 0.3,
                  }}
                  viewport={{ once: true }}
                  className="relative z-40 md:absolute md:bottom-0 md:right-[5%] md:w-[50%]"
                >
                  <div className="bg-white rounded-3xl shadow-xl overflow-hidden transform md:-rotate-1">
                    <div className="flex flex-col md:flex-row">
                      <div className="md:w-2/5 aspect-square md:aspect-auto relative">
                        <Image
                          src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop"
                          alt="Behavioral health"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="md:w-3/5 p-8">
                        <h3 className="text-2xl font-semibold mb-4 text-[#115490]">
                          Behavioral Health
                        </h3>
                        <p className="text-[#6e6e73] leading-relaxed">
                          We focus on behavioral factors like stress, exercise,
                          self-care, addiction, anxiety, and numerous life
                          choices that affect health.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for proper layout on mobile */}
                <div className="md:h-[800px]"></div>
              </div>
            </div>
          </section>

          {/* Case Studies Section */}
          <section id="cases" className="py-24 md:py-32">
            <div className="container mx-auto px-4">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="max-w-4xl mx-auto text-center mb-16"
              >
                <motion.h2
                  variants={fadeInUpVariants}
                  className="text-3xl md:text-5xl font-semibold mb-6"
                >
                  Real-world impact of precision medicine
                </motion.h2>
                <motion.p
                  variants={fadeInUpVariants}
                  className="text-xl text-[#6e6e73]"
                >
                  See how our technology is transforming healthcare outcomes
                </motion.p>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainerVariants}
                className="grid md:grid-cols-2 gap-8"
              >
                <motion.div
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#115490]/10 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-[#115490]" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Early Disease Detection
                    </h3>
                  </div>
                  <p className="text-[#6e6e73] mb-6 leading-relaxed">
                    Healthcare providers using Livemore technology reported 40%
                    earlier detection of chronic conditions, leading to better
                    treatment outcomes and significantly improved patient
                    prognosis.
                  </p>
                  <div className="text-sm text-[#6e6e73] font-medium">
                    Case Study
                  </div>
                </motion.div>

                <motion.div
                  variants={fadeInUpVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-3xl shadow-lg"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#115490]/10 p-3 rounded-full">
                      <CheckCircle className="h-6 w-6 text-[#115490]" />
                    </div>
                    <h3 className="text-2xl font-semibold">
                      Reduced Healthcare Costs
                    </h3>
                  </div>
                  <p className="text-[#6e6e73] mb-6 leading-relaxed">
                    Implementing Livemore&apos;s precision medicine approach
                    resulted in 30% reduction in healthcare costs through
                    preventive care, personalized treatment plans, and reduced
                    hospital readmissions.
                  </p>
                  <div className="text-sm text-[#6e6e73] font-medium">
                    Research
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </section>

          {/* Problems & Solutions Section */}
          <section className="py-24 md:py-32 bg-[#f8f8f8] overflow-hidden relative">
            {/* Background decorative elements */}
            <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#115490]/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#115490]/5 rounded-full blur-3xl -z-10"></div>

            <div className="container mx-auto px-4 relative">
              <div className="max-w-5xl mx-auto">
                {/* Centered heading */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="text-center mb-16"
                >
                  <h2 className="text-3xl md:text-5xl font-semibold mb-6">
                    Transform healthcare with precision medicine
                  </h2>
                  <p className="text-[#6e6e73] text-lg max-w-3xl mx-auto">
                    Our technology enables a fundamental shift from reactive
                    treatment to proactive, personalized care
                  </p>
                </motion.div>

                {/* Main image - centered */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  viewport={{ once: true }}
                  className="relative z-10 mb-12"
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-xl h-[400px] mx-auto">
                    <Image
                      src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=2072&auto=format&fit=crop"
                      alt="Healthcare professionals with advanced technology"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent">
                      <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-center">
                        <span className="bg-white/90 text-[#115490] px-4 py-2 rounded-full text-sm font-medium inline-block">
                          Precision Medicine
                        </span>
                        <h3 className="text-white text-2xl md:text-3xl font-semibold mt-4 mx-auto max-w-2xl">
                          Data-driven insights for personalized healthcare
                        </h3>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Cards - centered grid */}
                <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
                  {/* Prevention Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.1,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-[#115490]/10 p-3 rounded-full mb-4">
                        <CheckCircle className="h-6 w-6 text-[#115490]" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3">
                        Preventing instead of treating
                      </h3>
                      <p className="text-[#6e6e73]">
                        Shift from reactive to proactive healthcare with early
                        risk identification and preventive interventions that
                        address health issues before they become serious.
                      </p>
                    </div>
                  </motion.div>

                  {/* Diagnosis Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.2,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-[#115490]/10 p-3 rounded-full mb-4">
                        <CheckCircle className="h-6 w-6 text-[#115490]" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3">
                        Accurate diagnosis
                      </h3>
                      <p className="text-[#6e6e73]">
                        Replace one-size-fits-all approaches with data-driven
                        diagnostics for precise identification of conditions
                        based on individual genetic and health profiles.
                      </p>
                    </div>
                  </motion.div>

                  {/* Treatment Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.3,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-white p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-[#115490]/10 p-3 rounded-full mb-4">
                        <CheckCircle className="h-6 w-6 text-[#115490]" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3">
                        Personalized treatment
                      </h3>
                      <p className="text-[#6e6e73]">
                        Develop tailored treatment plans based on individual
                        genetic, lifestyle, and environmental factors for
                        optimal therapeutic outcomes.
                      </p>
                    </div>
                  </motion.div>

                  {/* Cost Reduction Card */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                      delay: 0.4,
                    }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                    className="bg-[#115490] p-6 md:p-8 rounded-2xl shadow-xl text-white"
                  >
                    <div className="flex flex-col items-center text-center">
                      <div className="bg-white/20 p-3 rounded-full mb-4">
                        <CheckCircle className="h-6 w-6 text-white" />
                      </div>
                      <h3 className="font-semibold text-xl mb-3">
                        Reducing healthcare costs
                      </h3>
                      <p className="text-white/90 mb-6">
                        Lower expenses through effective prevention, targeted
                        interventions, and reduced hospital readmissions,
                        creating a more sustainable healthcare system.
                      </p>
                      <Button
                        asChild
                        className="bg-white hover:bg-white/90 text-[#115490] rounded-full"
                      >
                        <Link
                          href="/contact"
                          className="flex items-center gap-2"
                        >
                          Contact our team <ChevronRight className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </MainLayout>
  );
}
