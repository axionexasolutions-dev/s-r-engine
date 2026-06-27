"use client";

import React from "react";
import Navbar from "@/components/sections/Navbar";
import Footer from "@/components/sections/Footer";
import { Scale, CreditCard, ShieldAlert, Award, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function TermsAndConditions() {
  const sections = [
    {
      icon: Scale,
      title: "1. Diagnostic & Service Authorization",
      content:
        "By booking with S&R Engine & Diagnostics Ltd, you authorize our IMI certified technicians to perform diagnostic sweeps, connect official factory tooling to your vehicle's OBD port, access ECUs, and conduct necessary road tests to duplicate and analyze vehicle faults.",
    },
    {
      icon: CreditCard,
      title: "2. Quotes, Pricing & Payment",
      content:
        "Diagnostic sweeps are charged at the agreed rate. We provide video proof reports detailing faults and compile a cost quote before any repair work starts. Work will only proceed upon your explicit approval. All balances must be settled in full prior to vehicle release.",
    },
    {
      icon: ShieldAlert,
      title: "3. No-Trace, No-Fee Terms",
      content:
        "Our diagnostic guarantee states that if our master technicians are unable to track down or identify the root cause of a specific electrical, ECU, or mechanical error code, we will waive our diagnostic fee. This does not apply if a diagnostic scan reveals pre-existing physical tampering.",
    },
    {
      icon: Award,
      title: "4. Repair Warranty & Parts Guarantee",
      content:
        "All repairs are covered by our standard 12-month or 12,000-mile parts and labor guarantee (whichever comes first). We only use OEM or high-grade equivalent components. Pre-owned or client-supplied parts are strictly excluded from our labor warranty.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-section dark:bg-slate-950 py-16 md:py-24 transition-colors duration-300">
        <div className="max-w-6xl pt-10 mx-auto px-4 sm:px-6">
          
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-bold text-secondary hover:text-primary uppercase tracking-wider mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Home</span>
          </Link>

          {/* Page Title Header */}
          <div className="space-y-4 border-b border-border pb-8 mb-12">
            <h1 className="text-4xl font-extrabold text-heading dark:text-white tracking-tight">
              Terms & Conditions
            </h1>
            <p className="text-sm text-body-text">
              Last Updated: June 27, 2026 • S&R Engine & Diagnostics Ltd
            </p>
            <p className="text-base text-body-text leading-relaxed">
              Welcome to S&R Engine & Diagnostics. These terms govern the vehicle diagnostics, programming, coding, and mechanical repair services provided at our center. By booking an appointment with us, you agree to these terms.
            </p>
          </div>

          {/* Main Content Sections */}
          <div className="space-y-10">
            {sections.map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-lg sm:text-xl font-bold text-heading dark:text-white">
                      {sec.title}
                    </h2>
                  </div>
                  <p className="text-sm sm:text-base text-body-text leading-relaxed pl-0 sm:pl-13">
                    {sec.content}
                  </p>
                </div>
              );
            })}

            {/* Additional details */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 space-y-6 shadow-sm">
              <h2 className="text-lg sm:text-xl font-bold text-heading dark:text-white border-b border-border pb-3">
                Workshop & Collection Rules
              </h2>
              
              <div className="space-y-4 text-sm text-body-text leading-relaxed">
                <p>
                  <strong>Vehicle Storage & Late Collection:</strong> Vehicles must be collected within 48 hours of notification that repairs are completed. S&R reserves the right to charge a vehicle storage fee of £25 per day if the vehicle is not collected within this window, unless previous arrangements are agreed upon.
                </p>
                <p>
                  <strong>Liability Limitations:</strong> Working on complex electrical networks and ECUs carries inherent risks, especially if wiring is already damaged. S&R Diagnostics is not liable for failures of pre-existing fragile electronic components that break under normal electrical load tests.
                </p>
                <p>
                  <strong>Governing Law:</strong> These terms and conditions are governed by and construed in accordance with the laws of the United Kingdom. Any disputes will be subject to the exclusive jurisdiction of local courts.
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}
