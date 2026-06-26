"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Car, Mail, Phone, User, Settings, AlertCircle, CheckCircle2, Ticket, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function BookingSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    vehicle: "",
    service: "engine-diagnostics",
    date: "",
    notes: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingConfirmed, setBookingConfirmed] = useState(false);
  const [ticketDetails, setTicketDetails] = useState<any>(null);

  const servicesList = [
    { value: "engine-diagnostics", label: "Advanced Engine Diagnostics" },
    { value: "mechanical-repairs", label: "Mechanical & Suspension Repair" },
    { value: "electrical-faults", label: "Electrical & Wiring Diagnostics" },
    { value: "brakes-abs", label: "Brake System & ABS Coding" },
    { value: "air-con", label: "Air Conditioning Service" },
    { value: "ecu-tune", label: "ECU Tuning & Key Coding" },
  ];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
    }
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.vehicle.trim()) newErrors.vehicle = "Vehicle make & model is required";
    if (!formData.date) newErrors.date = "Preferred date is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API booking submission
    setTimeout(() => {
      setIsSubmitting(false);
      setBookingConfirmed(true);
      setTicketDetails({
        id: `SR-${Math.floor(100000 + Math.random() * 900000)}`,
        name: formData.name,
        vehicle: formData.vehicle,
        service: servicesList.find((s) => s.value === formData.service)?.label || formData.service,
        date: formData.date,
      });
    }, 1500);
  };

  return (
    <section id="booking" className="bg-background py-24 relative overflow-hidden">
      {/* Decorative gradients */}
      <div className="absolute top-0 right-1/4 w-[40%] h-[30%] bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[40%] h-[30%] bg-secondary/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text / Info Panel */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            <span className="text-xs font-bold text-secondary uppercase tracking-widest">
              Schedule Diagnostic
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-heading dark:text-white tracking-tight leading-tight">
              Request Your Diagnostics Slot Online
            </h2>
            <p className="text-base text-body-text leading-relaxed">
              Book your vehicle scan today. Enter your car specifications and describe any dashboard warning lights or performance symptoms you are experiencing.
            </p>

            {/* Quick stats on appointments */}
            <div className="space-y-4 pt-4 border-t border-border">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                  <Clock className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-heading dark:text-white">Same-Day Callback</h4>
                  <p className="text-xs text-body-text">We review details and call you back in 2 hours to lock in the exact hour slot.</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded bg-secondary/10 flex items-center justify-center text-secondary flex-shrink-0">
                  <CheckCircle2 className="w-4.5 h-4.5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-heading dark:text-white">Pre-Scan Integrity Test</h4>
                  <p className="text-xs text-body-text">We run basic checks first to rule out simple blown fuses before billing a diagnostics scan.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Card Panel */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!bookingConfirmed ? (
                <motion.div
                  key="booking-form"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                >
                  <Card className="border-border shadow-xl bg-background">
                    <CardHeader className="p-6 md:p-8">
                      <CardTitle className="text-xl font-bold text-heading dark:text-white">Diagnostic Request Form</CardTitle>
                      <CardDescription className="text-body-text">Fields marked * are required for code validation.</CardDescription>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 pt-0">
                      <form onSubmit={handleSubmit} className="space-y-5">
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Name Input */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-heading flex items-center gap-1">
                              <User className="w-3.5 h-3.5 text-secondary" />
                              Your Name *
                            </label>
                            <Input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleInputChange}
                              placeholder="John Doe"
                              className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.name && (
                              <p className="text-xs text-destructive flex items-center gap-1 font-semibold">
                                <AlertCircle className="w-3 h-3" /> {errors.name}
                              </p>
                            )}
                          </div>

                          {/* Vehicle Info */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-heading flex items-center gap-1">
                              <Car className="w-3.5 h-3.5 text-secondary" />
                              Vehicle Model *
                            </label>
                            <Input
                              type="text"
                              name="vehicle"
                              value={formData.vehicle}
                              onChange={handleInputChange}
                              placeholder="e.g. 2018 BMW 320d"
                              className={errors.vehicle ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.vehicle && (
                              <p className="text-xs text-destructive flex items-center gap-1 font-semibold">
                                <AlertCircle className="w-3 h-3" /> {errors.vehicle}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Phone Input */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-heading flex items-center gap-1">
                              <Phone className="w-3.5 h-3.5 text-secondary" />
                              Phone Number *
                            </label>
                            <Input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleInputChange}
                              placeholder="e.g. 07123 456789"
                              className={errors.phone ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.phone && (
                              <p className="text-xs text-destructive flex items-center gap-1 font-semibold">
                                <AlertCircle className="w-3 h-3" /> {errors.phone}
                              </p>
                            )}
                          </div>

                          {/* Email Input */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-heading flex items-center gap-1">
                              <Mail className="w-3.5 h-3.5 text-secondary" />
                              Email Address *
                            </label>
                            <Input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleInputChange}
                              placeholder="john@example.com"
                              className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.email && (
                              <p className="text-xs text-destructive flex items-center gap-1 font-semibold">
                                <AlertCircle className="w-3 h-3" /> {errors.email}
                              </p>
                            )}
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {/* Service Required Dropdown */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-heading flex items-center gap-1">
                              <Settings className="w-3.5 h-3.5 text-secondary" />
                              Service Needed
                            </label>
                            <select
                              name="service"
                              value={formData.service}
                              onChange={handleInputChange}
                              className="flex h-10 w-full rounded-md border border-input bg-background dark:bg-[#0B0F19] px-3 py-2 text-sm text-heading dark:text-white ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            >
                              {servicesList.map((service) => (
                                <option key={service.value} value={service.value} className="bg-background dark:bg-[#0F172A] text-heading dark:text-white">
                                  {service.label}
                                </option>
                              ))}
                            </select>
                          </div>

                          {/* Date Input */}
                          <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-heading flex items-center gap-1">
                              <Calendar className="w-3.5 h-3.5 text-secondary" />
                              Preferred Date *
                            </label>
                            <Input
                              type="date"
                              name="date"
                              value={formData.date}
                              onChange={handleInputChange}
                              className={errors.date ? "border-destructive focus-visible:ring-destructive" : ""}
                            />
                            {errors.date && (
                              <p className="text-xs text-destructive flex items-center gap-1 font-semibold">
                                <AlertCircle className="w-3 h-3" /> {errors.date}
                              </p>
                            )}
                          </div>
                        </div>

                        {/* Symptoms Notes Textarea */}
                        <div className="space-y-1.5">
                          <label className="text-xs font-semibold text-heading">
                            Symptoms & Dashboard Warning Lights (Optional)
                          </label>
                          <textarea
                            name="notes"
                            value={formData.notes}
                            onChange={handleInputChange}
                            placeholder="e.g. ABS warning light on. Squeaking noise under heavy acceleration, error code P0299 on standard OBD tool..."
                            className="flex min-h-[100px] w-full rounded-md border border-input bg-background dark:bg-[#0B0F19] px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 text-heading dark:text-white focus:border-primary"
                          />
                        </div>

                        {/* Submit Button */}
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-primary hover:bg-primary/95 text-white font-semibold py-6 text-base shadow-lg shadow-primary/10 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                              </svg>
                              Scheduling Scan...
                            </>
                          ) : (
                            "Submit Request"
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </motion.div>
              ) : (
                <motion.div
                  key="booking-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Card className="border-emerald-200 dark:border-emerald-950 bg-background shadow-xl shadow-emerald-500/5 relative overflow-hidden">
                    {/* Top banner accent */}
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-emerald-500" />
                    
                    <CardHeader className="text-center p-8 pb-4">
                      <div className="w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center mx-auto mb-4 animate-bounce">
                        <CheckCircle2 className="w-10 h-10" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-heading dark:text-white">Request Received!</CardTitle>
                      <CardDescription className="text-emerald-700/80 font-medium">Your preliminary slot has been reserved.</CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-8 pt-0 space-y-6">
                      <p className="text-sm text-body-text text-center leading-relaxed">
                        Thank you, <strong>{ticketDetails?.name}</strong>. Our Master Diagnostics technician is reviewing your vehicle data (<strong>{ticketDetails?.vehicle}</strong>) and symptoms. We will call you within 2 working hours to confirm your appointment time.
                      </p>

                      {/* Receipt Display */}
                      <div className="bg-section border border-border rounded-xl p-5 space-y-3 relative">
                        <div className="absolute -top-3 left-4 bg-background border border-border px-2 py-0.5 rounded text-[10px] uppercase font-bold text-slate-500 tracking-wider flex items-center gap-1">
                          <Ticket className="w-3.5 h-3.5 text-secondary" /> Request Receipt
                        </div>
                        
                        <div className="flex justify-between items-center text-xs py-1.5 border-b border-border/50 mt-1">
                          <span className="text-slate-500 font-medium">Ticket ID</span>
                          <span className="font-mono font-bold text-heading">{ticketDetails?.id}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs py-1.5 border-b border-border/50">
                          <span className="text-slate-500 font-medium">Vehicle</span>
                          <span className="font-semibold text-heading dark:text-white">{ticketDetails?.vehicle}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs py-1.5 border-b border-border/50">
                          <span className="text-slate-500 font-medium">Service</span>
                          <span className="font-semibold text-heading dark:text-white">{ticketDetails?.service}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs py-1.5">
                          <span className="text-slate-500 font-medium">Preferred Date</span>
                          <span className="font-semibold text-heading">
                            {new Date(ticketDetails?.date).toLocaleDateString("en-GB", {
                              weekday: "short",
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            })}
                          </span>
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <Button
                          onClick={() => {
                            setBookingConfirmed(false);
                            setFormData({
                              name: "",
                              phone: "",
                              email: "",
                              vehicle: "",
                              service: "engine-diagnostics",
                              date: "",
                              notes: "",
                            });
                          }}
                          variant="outline"
                          className="border-border text-heading dark:text-white hover:bg-section"
                        >
                          Book Another Vehicle
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </section>
  );
}
