"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, ShieldCheck, Milestone, Cpu } from "lucide-react";

export default function About() {
  const highlights = [
    {
      title: "Diagnostic Pioneers",
      desc: "Specialized in mapping engine signals and complex network troubleshooting (CAN bus, LIN bus).",
      icon: Cpu,
    },
    {
      title: "Quality Spares Only",
      desc: "We only use original equipment manufacturer (OEM) parts, protecting your factory warranty.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="about" className="bg-section py-24 relative overflow-hidden">
      {/* Decorative light gradient */}
      <div className="absolute top-0 left-1/4 w-[40%] h-[30%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column - Graphic/Highlight Board */}
          <div className="lg:col-span-6 relative">
            <div className="relative z-10 grid grid-cols-2 gap-4">
              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-background border border-border p-6 rounded-2xl shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Milestone className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-heading dark:text-white text-lg">Founded 2011</h4>
                <p className="text-xs text-body-text leading-relaxed">
                  Established with a vision to provide standard automotive repairs centered on specialized computer-level diagnostics.
                </p>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background border border-border p-6 rounded-2xl shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow duration-300 mt-6 lg:mt-8"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-heading dark:text-white text-lg">ECU Specialists</h4>
                <p className="text-xs text-body-text leading-relaxed">
                  We program modules, bypass security gateways, perform flashing, reset crash data, and do ECU cloning.
                </p>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background border border-border p-6 rounded-2xl shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 text-secondary flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-heading dark:text-white text-lg">Main-Dealer Tech</h4>
                <p className="text-xs text-body-text leading-relaxed">
                  Equipped with high-end oscilloscopes, smoke leak testers, digital gas recharge, and multi-protocol scanners.
                </p>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-background border border-border p-6 rounded-2xl shadow-sm flex flex-col space-y-4 hover:shadow-md transition-shadow duration-300 mt-6 lg:mt-8"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center">
                  <Check className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-heading dark:text-white text-lg">10k+ Vehicles</h4>
                <p className="text-xs text-body-text leading-relaxed">
                  Over a decade of scans, mechanical overhauls, custom coding, and happy local motorists in London.
                </p>
              </motion.div>
            </div>
            
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85%] h-[85%] border-2 border-dashed border-border rounded-2xl -z-10" />
          </div>

          {/* Right Column - Text Details */}
          <div className="lg:col-span-6 flex flex-col space-y-6">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-xs font-bold text-secondary uppercase tracking-widest"
            >
              About S&R Engine & Diagnostics
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-3xl sm:text-4xl font-extrabold text-heading dark:text-white tracking-tight leading-tight"
            >
              Crafting Solutions for Complex Vehicular Issues
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base text-body-text leading-relaxed"
            >
              Vehicles are no longer just mechanical systems of pistons and valves. They are high-speed computing networks on wheels. That is why S&R Engine & Diagnostics Ltd was built: to bridge the gap between traditional mechanical repairs and complex electronic system diagnostics.
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-base text-body-text leading-relaxed"
            >
              Whether it is a minor warning light on your dashboard or a deep network signal fault that blocks communication between your ECU and ABS module, we approach every task with specialized logical pathways. We solve problems, we do not guess.
            </motion.p>

            {/* Sub Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
              {highlights.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-heading dark:text-white">{item.title}</h4>
                      <p className="text-xs text-body-text leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
