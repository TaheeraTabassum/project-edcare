"use client"
import React, { useState, useEffect, useRef } from 'react';
import {
  Phone,
  Clock,
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  ArrowRight,
  ScrollText, // Re-included as a standard Lucide icon
} from 'lucide-react';

// --- Global CSS (Required for fade-in animation) ---


// --- Custom Hook for Intersection Observer (Scroll Triggering) ---
// This hook detects when the component scrolls into view to trigger the animation.
const useInView = (options = { threshold: 0.05 }) => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      // Only set true once. Once it's visible, the animation runs.
      if (entry.isIntersecting) {
        setInView(true);
        // Clean up the observer immediately after it intersects for performance
        if (ref.current) {
            observer.unobserve(ref.current);
        }
      }
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options.threshold]); 

  return [ref, inView];
};

// --- Helper function for dynamic class names ---
const clsx = (...args) => args.filter(Boolean).join(' ');


// --- Footer Component ---
const NewsletterAndFooter = () => {
    // Scroll detection for the entire footer section
    const [footerRef, footerInView] = useInView({ threshold: 0.05 }); 

    // Helper for staggered fade-in
    const getFadeInClass = (delay) => 
        clsx(
            // Initial hidden state if not in view
            !footerInView && 'opacity-0 translate-y-4', 
            // Animation class when in view, with delay applied
            footerInView && 'fade-in-bottom'
        );

    // Common footer links data
    const companyInfoLinks = ["About Us", "Resource Center", "Careers", "Instructor", "Become A Teacher"];
    const usefulLinks = ["All Courses", "Digital Marketing", "Design & Branding", "Storytelling & Voice Over", "News & Blogs"];
    
    return (
        <footer ref={footerRef} className="bg-[#183434] text-gray-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                
                {/* 1. Newsletter Subscription Block (Fade In - Staggered 0.1s) */}
                <div 
                    className={clsx("bg-gray-800/60 p-6 md:p-10 rounded-xl mb-16 shadow-xl flex flex-col md:flex-row items-center justify-between", getFadeInClass('0.1s'))} 
                    style={{ animationDelay: '0.1s' }}
                >
                    <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-4 md:mb-0">
                        Subscribe Our Newsletter For <br className='hidden md:block'/> Latest Updates
                    </h3>
                    <div className="flex w-full md:w-auto mt-4 md:mt-0">
                        <div className="relative flex-1">
                            {/* The input needs padding on the left for the Mail icon */}
                            <input
                                type="email"
                                placeholder="Enter Your E-mail"
                                className="w-full pl-12 pr-4 py-3 rounded-l-lg bg-gray-700/50 text-white border border-gray-600 focus:outline-none focus:border-teal-400"
                                aria-label="Enter your email"
                            />
                            <Mail size={18} className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                        </div>
                        <button 
                            className="bg-teal-500 text-white px-6 py-3 rounded-r-lg font-bold hover:bg-teal-600 transition duration-300 transform active:scale-95 whitespace-nowrap"
                        >
                            Subscribe Now
                        </button>
                    </div>
                </div>

                {/* 2. Footer Content Grid (Responsive 4 Columns) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 border-b border-gray-700 pb-12">

                    {/* Column 1: GET IN TOUCH! (Fade In - Staggered 0.3s) */}
                    <div 
                        className={clsx("space-y-4", getFadeInClass('0.3s'))} 
                        style={{ animationDelay: '0.3s' }}
                    >
                        <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Get In Touch!</h4>
                        <p className="text-sm text-gray-400">
                            Fusce varius, dolor tempor interdum tristique bibendum.
                        </p>
                        <div className="space-y-2 pt-3">
                            <p className="text-lg font-bold text-white flex items-center space-x-2">
                                <Phone size={20} className="text-teal-400"/>
                                <span>(702) 123-1478</span>
                            </p>
                            <p className="text-md text-gray-300 flex items-center space-x-2">
                                <Mail size={20} className="text-teal-400"/>
                                <span>info@company.com</span>
                            </p>
                        </div>
                        <div className="flex space-x-4 pt-2">
                            <a href="#" aria-label="Facebook" className="hover:text-teal-400 transition duration-200"><Facebook size={20} /></a>
                            <a href="#" aria-label="Twitter" className="hover:text-teal-400 transition duration-200"><Twitter size={20} /></a>
                            <a href="#" aria-label="Instagram" className="hover:text-teal-400 transition duration-200"><Instagram size={20} /></a>
                            <a href="#" aria-label="Youtube" className="hover:text-teal-400 transition duration-200"><Youtube size={20} /></a>
                        </div>
                    </div>

                    {/* Column 2: COMPANY INFO (Fade In - Staggered 0.5s) */}
                    <div 
                        className={clsx("space-y-4", getFadeInClass('0.5s'))} 
                        style={{ animationDelay: '0.5s' }}
                    >
                        <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Company Info</h4>
                        <ul className="space-y-3">
                            {companyInfoLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="flex items-center text-gray-400 hover:text-teal-400 transition duration-200 group">
                                        <ArrowRight size={16} className="mr-2 text-teal-400 group-hover:translate-x-1 transition-transform duration-200"/>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                    {/* Column 3: USEFUL LINKS (Fade In - Staggered 0.7s) */}
                    <div 
                        className={clsx("space-y-4", getFadeInClass('0.7s'))} 
                        style={{ animationDelay: '0.7s' }}
                    >
                        <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Useful Links</h4>
                        <ul className="space-y-3">
                            {usefulLinks.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="flex items-center text-gray-400 hover:text-teal-400 transition duration-200 group">
                                        <ArrowRight size={16} className="mr-2 text-teal-400 group-hover:translate-x-1 transition-transform duration-200"/>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: RECENT POST (Fade In - Staggered 0.9s) */}
                    <div 
                        className={clsx("space-y-6", getFadeInClass('0.9s'))} 
                        style={{ animationDelay: '0.9s' }}
                    >
                        <h4 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">Recent Post</h4>
                        
                        {/* Post 1 */}
                        <div className="flex space-x-4 items-start">
                            {/* Placeholder for the image */}
                            <img 
                                src="https://placehold.co/60x60/333333/ffffff/png?text=Blog" 
                                alt="Blog thumbnail" 
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div>
                                <a href="#" className="text-white hover:text-teal-400 font-semibold leading-tight block transition duration-200">
                                    Where Dreams Find A Home
                                </a>
                                <p className="text-xs text-gray-400 mt-1 flex items-center space-x-1">
                                    <Clock size={12} className="text-teal-400"/>
                                    <span>20 April, 2025</span>
                                </p>
                            </div>
                        </div>

                        {/* Post 2 */}
                        <div className="flex space-x-4 items-start">
                            {/* Placeholder for the image */}
                            <img 
                                src="https://placehold.co/60x60/333333/ffffff/png?text=Study" 
                                alt="Blog thumbnail" 
                                className="w-16 h-16 rounded-lg object-cover flex-shrink-0"
                            />
                            <div>
                                <a href="#" className="text-white hover:text-teal-400 font-semibold leading-tight block transition duration-200">
                                    Top 5 Skills To Learn in 2025
                                </a>
                                <p className="text-xs text-gray-400 mt-1 flex items-center space-x-1">
                                    <Clock size={12} className="text-teal-400"/>
                                    <span>15 April, 2025</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
                
                {/* 3. Copyright Bar */}
                <div className="pt-8 text-center text-sm text-gray-500">
                    <p>
                        Copyright &copy; {new Date().getFullYear()} EdCare. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};


// --- Main Application Component (Wrapper to make it runnable) ---
// This wrapper is needed to render the CSS and the component.
export default function Footer() {
  return (
    <div>
      <NewsletterAndFooter />
    </div>
  );
}