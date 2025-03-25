"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Brain,
  Heart,
  Stethoscope,
  Pill,
  Microscope,
} from "lucide-react";

export default function HealthCardsSection() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      icon: Microscope,
      title: "Disease Prevention",
      description:
        "Paying attention to small changes in your body can help prevent serious health issues. Catching health problems early helps you proactively avoid full-blown illness, helping you stay healthy.",
    },
    {
      id: 2,
      icon: Brain,
      title: "Disease Prediction",
      description:
        "A healthy lifestyle, regular check-ups, and the right precautions can help stop illnesses before they happen. Prevention is always easier and cheaper than treatment.",
    },
    {
      id: 3,
      icon: Heart,
      title: "Early Detection",
      description:
        "We use predictive analysis and AI to identify potential health issues in their earliest stages and identify your health risks early, allowing you to make better choices and avoid serious health issues.",
    },
    {
      id: 4,
      icon: Stethoscope,
      title: "Accurate Diagnosis",
      description:
        "A correct diagnosis is the first step toward the right treatment. The sooner and more accurately a condition is identified, the better the chances of successful treatment.",
    },
    {
      id: 5,
      icon: Pill,
      title: "Personalized Health Recommendations",
      description:
        "Everyone's health needs are different. A personalized health recommendations plan ensures you get the right health care and lifestyle care.",
    },
    {
      id: 6,
      icon: Shield,
      title: "Save Healthcare Cost",
      description:
        "Managing medical bills can be challenging, but smart planning helps avoid unnecessary spending. Making informed health choices keeps your expenses in check.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      {/* Background texture */}

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 relative"
        >
          <div className=" backdrop-blur-sm py-10 px-6 rounded-3xl">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/70">
              Stay healthy, avoid hospital visits, and save money.
            </h2>
            <p className="max-w-3xl mx-auto text-slate-600 dark:text-slate-300">
              Taking care of your health today helps avoid unnecessary hospital
              trips and costly medical bills. Simple lifestyle choices can keep
              you feeling your best while saving you money.
            </p>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {cards.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500"></div>

              <div className="relative h-full bg-white dark:bg-slate-800/90 rounded-xl overflow-hidden border border-slate-200 dark:border-slate-700 shadow-sm transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px]">
                {/* Card texture */}

                <div className="p-6 h-full flex flex-col relative z-10">
                  <div className="mb-4 flex items-center">
                    <div
                      className={`p-3 rounded-lg bg-primary/10 text-primary ${
                        hoveredCard === card.id ? "scale-110" : "scale-100"
                      } transition-transform duration-300`}
                    >
                      <card.icon size={24} />
                    </div>
                    <h3 className="text-xl font-semibold ml-3 text-slate-800 dark:text-slate-100">
                      {card.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-300 flex-grow">
                    {card.description}
                  </p>

                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: hoveredCard === card.id ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                    className="h-1 bg-gradient-to-r from-primary to-primary/50 mt-4"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
