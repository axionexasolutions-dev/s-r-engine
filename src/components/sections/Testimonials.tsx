"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ShieldCheck, ChevronLeft, ChevronRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const reviews = [
    // Slide 1 (Group 0)
    {
      name: "David H. from Walthamstow",
      vehicle: "BMW 5 Series (520d - 2017)",
      service: "ECU Diagnostics & Repair",
      rating: 5,
      content: "The main dealer quoted me £1,800 to replace the complete wiring loom due to a drivetrain error. S&R diagnosed it down to a single corroded pin. Fixed it for a fraction of the cost!",
    },
    {
      name: "Sarah M. from Leyton",
      vehicle: "Audi A3 (1.4 TFSI - 2019)",
      service: "ABS Module Programming",
      rating: 5,
      content: "My dashboard had warning lights like a Christmas tree. S&R bypassed gateway security, reprogrammed the ABS module, and everything was sorted in under two hours.",
    },
    {
      name: "Mark T. (Fleet Manager)",
      vehicle: "Ford Transit Custom (2020)",
      service: "DPF Smoke Leak & Clean",
      rating: 5,
      content: "Excellent service. Found a tiny split in the intercooler hose causing DPF blocks, replaced it, and did a static regen. Video proof sent before beginning. Highly recommend!",
    },
    // Slide 2 (Group 1)
    {
      name: "James L. from Woodford",
      vehicle: "Mercedes E350d (2018)",
      service: "AdBlue System Fault",
      rating: 5,
      content: "Excellent diagnostic work. They resolved a countdown timer fault on my AdBlue warning. Very knowledgeable crew and fast turnaround. Saved me massive dealer fees.",
    },
    {
      name: "Elena R. from Chingford",
      vehicle: "VW Golf (1.6 TDI - 2016)",
      service: "Injector Adaptation",
      rating: 5,
      content: "Car was running extremely rough after injector replacement elsewhere. S&R recoded the injector classification values to the ECU. Now runs as smooth as silk.",
    },
    {
      name: "Aaron K. from Barking",
      vehicle: "Land Rover Discovery (2015)",
      service: "Suspension Valve Sweep",
      rating: 5,
      content: "Suspension fault warning on dash. S&R did a telemetry scan, traced it to a sticking valve block rather than a blown compressor. Highly honest garage.",
    },
    // Slide 3 (Group 2)
    {
      name: "Priya N. from Ilford",
      vehicle: "Toyota Yaris Hybrid (2021)",
      service: "HV Battery Diagnostics",
      rating: 5,
      content: "Needed high-voltage safety check on hybrid powertrain. The master tech explained the diagnostic codes and cell health indicators clearly. Incredibly professional.",
    },
    {
      name: "Thomas W. from Romford",
      vehicle: "Tesla Model 3 (2021)",
      service: "HV High-Voltage Sweep",
      rating: 5,
      content: "Hard to find garages equipped for high voltage. Checked cell balance and insulation resistance values. Exceptional depth of telemetry reports.",
    },
    {
      name: "Chloe B. from Stratford",
      vehicle: "Nissan Qashqai (2018)",
      service: "EPB Module Diagnostics",
      rating: 5,
      content: "Electronic parking brake kept locking. They found a signal breakdown in the harness route. Repaired the wire section quickly. Honest, transparent, and fair prices.",
    },
  ];

  // Group reviews into 3 slides of 3 items each
  const slideGroups = [
    reviews.slice(0, 3),
    reviews.slice(3, 6),
    reviews.slice(6, 9),
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  
  // Touch swipe detection state
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const minSwipeDistance = 50;

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slideGroups.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slideGroups.length - 1 ? 0 : prev + 1));
  };

  // Touch handlers for swiping
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      handleNext();
    } else if (isRightSwipe) {
      handlePrev();
    }
  };

  return (
    <section id="testimonials" className="bg-section py-12 md:py-20 relative overflow-hidden select-none">
      {/* Background radial highlights */}
      <div className="absolute top-1/4 right-0 w-[30%] h-[30%] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[30%] h-[30%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-2 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-xs font-bold text-secondary uppercase tracking-widest"
          >
            Verified Reviews
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-3xl sm:text-4xl font-extrabold text-heading dark:text-white tracking-tight"
          >
            What Our Clients Say
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-body-text"
          >
            Real feedback from local motorists who brought their complex diagnostic challenges to our workshop.
          </motion.p>
        </div>

        {/* Carousel Slider Window */}
        <div className="relative px-2 sm:px-12">
          
          {/* Controls - Left Arrow */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-heading dark:text-white shadow-sm hover:shadow-md hover:bg-muted transition-all duration-200 cursor-pointer hidden sm:flex z-35"
            aria-label="Previous review group"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Controls - Right Arrow */}
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center text-heading dark:text-white shadow-sm hover:shadow-md hover:bg-muted transition-all duration-200 cursor-pointer hidden sm:flex z-35"
            aria-label="Next review group"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Testimonial Cards Track */}
          <div 
            className="overflow-hidden cursor-grab active:cursor-grabbing touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <motion.div
              className="flex"
              animate={{ x: `-${activeIndex * 100}%` }}
              transition={{ type: "spring", stiffness: 150, damping: 22 }}
            >
              {slideGroups.map((group, groupIdx) => (
                <div key={groupIdx} className="w-full flex-shrink-0 px-2 sm:px-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.map((review, idx) => (
                      <div
                        key={idx}
                        className={`transition-all duration-300 ${
                          idx === 1 ? "hidden md:block" : 
                          idx === 2 ? "hidden lg:block" : ""
                        }`}
                      >
                        <Card className="h-full border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
                          {/* Visual Quote Icon Accent */}
                          <div className="absolute top-3 right-3 text-slate-100 dark:text-slate-800/25 group-hover:text-primary/5 transition-colors duration-300 pointer-events-none">
                            <Quote className="w-8 h-8 rotate-180" />
                          </div>

                          <CardContent className="p-4 sm:p-5 flex flex-col justify-between h-full flex-grow space-y-4">
                            
                            {/* Rating & Content */}
                            <div className="space-y-3">
                              {/* Star Row */}
                              <div className="flex items-center gap-0.5">
                                {Array.from({ length: review.rating }).map((_, i) => (
                                  <Star key={i} className="w-3.5 h-3.5 fill-secondary text-secondary" />
                                ))}
                              </div>
                              
                              {/* Review text */}
                              <p className="text-xs sm:text-sm text-body-text leading-relaxed italic">
                                &ldquo;{review.content}&rdquo;
                              </p>
                            </div>

                            {/* Customer Information footer */}
                            <div className="pt-3 border-t border-border space-y-1.5">
                              <div>
                                <h4 className="text-xs sm:text-sm font-bold text-heading dark:text-white">{review.name}</h4>
                                <p className="text-[10px] sm:text-xs font-semibold text-primary">{review.vehicle}</p>
                              </div>
                              
                              <div className="flex items-center gap-1 text-[9px] uppercase font-bold text-slate-500 tracking-wider">
                                <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                                {review.service}
                              </div>
                            </div>

                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {slideGroups.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-6 bg-primary" : "w-2 bg-border hover:bg-slate-400 dark:hover:bg-slate-600"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

        {/* Small trust banner below */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex flex-wrap justify-center items-center gap-6 text-xs text-body-text font-semibold bg-background border border-border rounded-full px-6 py-3 max-w-2xl mx-auto shadow-sm"
        >
          <span className="flex items-center gap-1.5">
            <Star className="w-3.5 h-3.5 fill-secondary text-secondary" /> 4.9/5 Average Google Rating
          </span>
          <span className="h-3 w-px bg-border hidden sm:block" />
          <span>Over 250+ Verified Independent Client Reviews</span>
        </motion.div>

      </div>
    </section>
  );
}
