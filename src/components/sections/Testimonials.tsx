"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Quote, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function Testimonials() {
  const reviews = [
    {
      name: "David H. from Walthamstow",
      vehicle: "BMW 5 Series (520d - 2017)",
      service: "ECU Diagnostics & Repair",
      rating: 5,
      content: "The main dealer quoted me £1,800 to replace the complete wiring loom due to a drivetrain error code. S&R diagnosed it down to a single corroded pin in a connector. Fixed it for a fraction of the cost. Highly professional!",
    },
    {
      name: "Sarah M. from Leyton",
      vehicle: "Audi A3 (1.4 TFSI - 2019)",
      service: "ABS Module Programming",
      rating: 5,
      content: "My dashboard had warning lights like a Christmas tree. Another local garage could not get their diagnostics scanner to communicate. S&R logged in, bypassed the gateway security, reprogrammed the ABS module, and everything is perfect.",
    },
    {
      name: "Mark T. (Fleet Manager)",
      vehicle: "Ford Transit Custom (2020)",
      service: "DPF Smoke Leak & Clean",
      rating: 5,
      content: "Excellent service. They did a smoke leak test, found a tiny split in the intercooler hose that was causing DPF blockages, replaced it, and did a static regen. Sent me video proof of the smoke test. Recommended!",
    },
  ];

  return (
    <section id="testimonials" className="bg-section py-24 relative overflow-hidden">
      {/* Background shape */}
      <div className="absolute top-1/4 right-0 w-[20%] h-[30%] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
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

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Card className="h-full border border-border bg-background shadow-sm hover:shadow-md transition-all duration-300 relative group flex flex-col justify-between overflow-hidden">
                {/* Visual Quote Icon Accent */}
                <div className="absolute top-4 right-4 text-slate-100 dark:text-slate-800/40 group-hover:text-primary/5 transition-colors duration-300 pointer-events-none">
                  <Quote className="w-12 h-12 rotate-180" />
                </div>

                <CardContent className="p-6 flex flex-col justify-between h-full flex-grow space-y-6">
                  
                  {/* Rating & Content */}
                  <div className="space-y-4">
                    {/* Star Row */}
                    <div className="flex items-center gap-1">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                      ))}
                    </div>
                    
                    {/* Review text */}
                    <p className="text-sm text-body-text leading-relaxed italic">
                      &ldquo;{review.content}&rdquo;
                    </p>
                  </div>

                  {/* Customer Information footer inside card */}
                  <div className="pt-4 border-t border-border space-y-2">
                    <div>
                      <h4 className="text-sm font-bold text-heading dark:text-white">{review.name}</h4>
                      <p className="text-xs font-semibold text-primary">{review.vehicle}</p>
                    </div>
                    
                    <div className="flex items-center gap-1 text-[10px] uppercase font-bold text-slate-500 tracking-wider">
                      <ShieldCheck className="w-3.5 h-3.5 text-secondary" />
                      {review.service}
                    </div>
                  </div>

                </CardContent>
              </Card>
            </motion.div>
          ))}
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
