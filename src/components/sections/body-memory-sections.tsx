"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Utensils, Cloud, Brain, Pill, Shield, Droplet } from "lucide-react";

export default function BodyMemorySection() {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const categories = [
    {
      id: "nutrition",
      icon: Utensils,
      title: "Nutrition Analysis",
      description:
        "Understand how your diet affects your body's cellular memory and long-term health outcomes.",
    },
    {
      id: "environment",
      icon: Cloud,
      title: "Environmental Impact",
      description:
        "Discover how environmental factors influence your body's biological responses and adaptations.",
    },
    {
      id: "stress",
      icon: Brain,
      title: "Stress Effects",
      description:
        "Learn how stress patterns create lasting imprints on your nervous system and overall health.",
    },
    {
      id: "medication",
      icon: Pill,
      title: "Medication Efficacy",
      description:
        "Explore how your body remembers and responds to various medications and treatments.",
    },
    {
      id: "immune",
      icon: Shield,
      title: "Immune System Battles",
      description:
        "Visualize how your immune system records and remembers pathogens it has encountered.",
    },
    {
      id: "toxin",
      icon: Droplet,
      title: "Toxin Exposure",
      description:
        "Track how environmental toxins accumulate and affect your body's systems over time.",
    },
  ];

  return (
    <section className="relative py-16 px-4 overflow-hidden">
      <div className="max-w-6xl mx-auto relative">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12 relative"
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70 dark:from-primary dark:to-primary/70">
            Unlocking Your Body&apos;s Memory
          </h2>

        
        </motion.div>

        <div className="relative">
          {/* Neural network background effect */}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  duration: 0.5,
                  type: "spring",
                  damping: 12,
                }}
              >
                <motion.div
                  className="relative group"
                  onMouseEnter={() => setActiveCategory(category.id)}
                  onMouseLeave={() => setActiveCategory(null)}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <div
                    className={`
                    relative z-10 p-4 rounded-xl border border-slate-200/60 dark:border-slate-700/60
                    ${
                      activeCategory === category.id
                        ? "bg-gradient-to-br from-white to-slate-50/90 dark:from-slate-800 dark:to-slate-900/90"
                        : "bg-white/80 dark:bg-slate-800/80"
                    }
                    backdrop-blur-sm transition-all duration-300 hover:shadow-lg
                  `}
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className={`
                          flex items-center justify-center w-16 h-16 rounded-full
                          ${
                            activeCategory === category.id
                              ? "bg-primary/20 text-primary"
                              : "bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300"
                          }
                          transition-colors duration-300
                        `}
                        animate={{
                          rotate:
                            activeCategory === category.id
                              ? [0, -10, 10, -5, 5, 0]
                              : 0,
                          scale:
                            activeCategory === category.id ? [1, 1.1, 1] : 1,
                        }}
                        transition={{
                          duration: 0.6,
                          ease: "easeInOut",
                        }}
                      >
                        <category.icon size={22} />
                      </motion.div>

                      <div>
                        <h3 className="font-medium text-slate-900 dark:text-white">
                          {category.title}
                        </h3>

                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: activeCategory === category.id ? "auto" : 0,
                            opacity: activeCategory === category.id ? 1 : 0,
                          }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="text-sm text-slate-600 dark:text-slate-300 mt-1">
                            {category.description}
                          </p>
                        </motion.div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{
                        width: activeCategory === category.id ? "100%" : "0%",
                      }}
                      transition={{ duration: 0.3 }}
                      className="h-0.5 bg-gradient-to-r from-primary/70 to-primary/30 mt-3"
                    />
                  </div>

                  {/* Glow effect on hover */}
                  <motion.div
                    className="absolute -inset-1 rounded-xl bg-gradient-to-r from-primary/20 to-primary/5 blur-lg -z-10"
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: activeCategory === category.id ? 1 : 0,
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
