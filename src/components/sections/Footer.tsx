"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, ArrowUpRight } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    const elem = document.getElementById(targetId);
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
    <footer id="contact" className="bg-[#0F172A] text-slate-400 pt-20 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Col 1: Logo & Info */}
          <div className="lg:col-span-4 flex flex-col space-y-6">
            <Link href="#hero" className="flex items-center gap-2 group self-start">
              <div className="relative w-12 h-10 rounded-lg overflow-hidden border border-slate-700 shadow-md group-hover:scale-105 transition-transform duration-300 flex items-center justify-center bg-white cursor-pointer">
                <Image
                  src="/assets/logo/logo.jpeg"
                  alt="S&R Engine & Diagnostics Logo"
                  fill
                  className="object-contain p-0.5"
                />
              </div>
              <div>
                <span className="text-lg md:text-xl font-bold text-white tracking-tight flex items-center">
                  S&R Engine
                  <span className="text-secondary ml-1 font-extrabold">&</span>
                </span>
                <span className="text-[10px] uppercase tracking-widest text-slate-400 block -mt-1 font-semibold">
                  Diagnostics Ltd
                </span>
              </div>
            </Link>
            
            <p className="text-sm text-slate-400 leading-relaxed">
              Specialist diagnostics center and mechanical repair garage. We carry out coding, reprogramming, wiring, and mechanical overhauls for all major car brands.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { name: "About", id: "about" },
                { name: "Service", id: "services" },
                { name: "Contact", id: "contact" },
                { name: "Book Diagnostic", id: "booking" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollTo(e, link.id)}
                    className="hover:text-secondary hover:underline transition-colors flex items-center gap-1 cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Operating Hours */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Opening Hours</h4>
            <ul className="space-y-2.5 text-sm">
              <li className="flex justify-between items-center py-1 border-b border-slate-800/40">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-secondary" /> Mon - Fri</span>
                <span className="font-semibold text-white">8:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between items-center py-1 border-b border-slate-800/40">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-secondary" /> Saturday</span>
                <span className="font-semibold text-white">8:00 AM - 4:00 PM</span>
              </li>
              <li className="flex justify-between items-center py-1">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-slate-600" /> Sunday</span>
                <span className="text-slate-500 font-semibold">Closed</span>
              </li>
              <li className="bg-slate-900 rounded-lg p-2.5 mt-2 border border-slate-800 flex flex-col justify-center">
                <span className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">Contact Number</span>
                <a href="tel:+447454055461" className="text-xs font-bold text-secondary flex items-center gap-1 hover:text-white mt-0.5">
                  <Phone className="w-3.5 h-3.5" /> +44 7454 055461
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Location */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">Find Our Garage</h4>
            
            <div className="space-y-2.5 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-slate-300 leading-relaxed">
                  Wolverhampton Road<br />
                  Heath Town<br />
                  Wolverhampton<br />
                  WV10 0QQ
                </span>
              </div>
              <div className="flex items-center gap-2 pt-1.5">
                <Mail className="w-4 h-4 text-secondary flex-shrink-0" />
                <a href="mailto:sammechanics@hotmail.com" className="hover:text-white text-slate-300">
                  sammechanics@hotmail.com
                </a>
              </div>
            </div>

            
          </div>

        </div>

        {/* Lower footer copyright */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {currentYear} S&R Engine & Diagnostics Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="#" className="hover:text-white transition-colors">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
