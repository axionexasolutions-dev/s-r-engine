"use client";

import React from "react";
import { motion } from "framer-motion";
import { Calendar, Wrench, ShieldCheck, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      icon: Calendar,
      title: "Book Appointment",
      description:
        "Select your diagnostic scan or service online. Pick a date and time that fits your schedule, or call our expert support team directly.",
      color: "from-blue-500/10 to-indigo-500/10 text-blue-600 dark:text-blue-400",
      borderGlow: "group-hover:border-blue-500/30",
    },
    {
      step: "02",
      icon: Wrench,
      title: "Bring Your Vehicle",
      description:
        "Drop your vehicle off at our center. Our IMI certified master technicians will perform root-cause diagnostics using official OEM software.",
      color: "from-pink-500/10 to-rose-500/10 text-secondary dark:text-pink-400",
      borderGlow: "group-hover:border-secondary/30",
    },
    {
      step: "03",
      icon: ShieldCheck,
      title: "Drive Away Safely",
      description:
        "Receive clear video proof reports. Once authorized, we repair your car with genuine OEM parts, fully covered by our 12-month guarantee.",
      color: "from-emerald-500/10 to-teal-500/10 text-emerald-600 dark:text-emerald-400",
      borderGlow: "group-hover:border-emerald-500/30",
    },
  ];

  const handleScrollToBooking = () => {
    const elem = document.getElementById("booking");
    if (elem) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elemRect = elem.getBoundingClientRect().top;
      const elemPosition = elemRect - bodyRect;
      const offsetPosition = elemPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="how-it-works" className="bg-section py-8 md:py-14 relative overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-2 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-secondary uppercase tracking-widest"
          >
            The Process
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-heading dark:text-white tracking-tight"
          >
            How It Works
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-body-text leading-relaxed"
          >
            We have streamlined our diagnostics and repair process to be completely transparent, efficient, and hassle-free from start to finish.
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-8 xl:gap-12">
          
          {/* Connector Line for Desktop */}
          <div className="absolute top-1/2 left-4 right-4 h-0.5 border-t-2 border-dashed border-border -translate-y-12 hidden lg:block z-0" />

          {steps.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="group relative bg-card border border-border rounded-2xl p-8 hover:bg-background transition-all duration-300 shadow-sm hover:shadow-md flex flex-col items-center text-center z-10"
              >
                {/* Step Counter Badge */}
                <span className="absolute top-6 right-6 text-sm font-bold text-secondary/35 tracking-wider bg-secondary/5 px-2.5 py-1 rounded-full">
                  Step {item.step}
                </span>

                {/* Icon Wrapper with Gradient Ring */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-6 relative transition-transform duration-300 group-hover:scale-110 shadow-sm`}>
                  <Icon className="w-8 h-8" />
                  {/* Subtle pulsing background glow ring on hover */}
                  <div className="absolute inset-0 rounded-2xl bg-current opacity-0 group-hover:opacity-10 transition-opacity duration-300 animate-ping pointer-events-none" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-heading dark:text-white mb-3 group-hover:text-primary transition-colors duration-200">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-body-text leading-relaxed">
                  {item.description}
                </p>

                {/* Inner border pulse highlight */}
                <div className={`absolute inset-0 rounded-2xl border border-transparent transition-colors duration-300 pointer-events-none ${item.borderGlow}`} />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action Button */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <Button
            onClick={handleScrollToBooking}
            className="bg-primary hover:bg-primary/95 text-white px-8 py-6 text-base font-bold shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 cursor-pointer inline-flex items-center gap-2 group"
          >
            <span>Book Your Slot Today</span>
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Button>
        </motion.div>

      </div>
    </section>
  );
}
