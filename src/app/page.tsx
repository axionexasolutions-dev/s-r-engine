import React from "react";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import HowItWorks from "@/components/sections/HowItWorks";
import Gallery from "@/components/sections/Gallery";
import About from "@/components/sections/About";
import BookingSection from "@/components/sections/BookingSection";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <WhyChooseUs />
        <HowItWorks />
        <Gallery />
        {/* <About /> */}
        {/* <BookingSection /> */}
        {/* <Testimonials /> */}
      </main>
      <Footer />
    </>
  );
}
