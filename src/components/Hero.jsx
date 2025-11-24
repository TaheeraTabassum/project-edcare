"use client"
import React, { useState } from 'react';
import { FaBoltLightning } from "react-icons/fa6";
import {
  Phone,
  MapPin,
  Clock,
  User,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Search,
  Heart,
  ShoppingCart,
  LayoutGrid,
  Menu,
  X,
  Play
} from 'lucide-react';
import Link from 'next/link';

// --- Global CSS (Active Link Gradient Highlight + New Swing Animation) ---
const RawGlobalCSS = `
.active-link {
    /* text-teal-600 */
    color: #0d9488;
    /* font-bold */
    font-weight: 700;
    /* relative */
    position: relative;
    z-index: 10; 
}

/* Pseudo-element styles for the gradient underline */
.active-link::after {
    /* after:absolute */
    content: '';
    position: absolute;
    /* after:h-[3px] */
    height: 3px;
    /* after:inset-x-0 (equivalent to left-0 and right-0) */
    left: 0;
    right: 0;
    /* after:-bottom-3 */
    bottom: -0.75rem;
    /* after:bg-gradient-to-r from-teal-400 to-teal-600 */
    background-image: linear-gradient(to right, #2dd4bf, #0d9488); 
    /* after:rounded-full */
    border-radius: 9999px; 
    /* after:transition-all after:duration-300 */
    transition: all 300ms ease-in-out;
    z-index: -1; 
}

/* --- Swing Animation for Floating Card --- */
@keyframes swing {
    0% {
        transform: rotate(-3deg);
    }
    50% {
        transform: rotate(3deg);
    }
    100% {
        transform: rotate(-3deg);
    }
}

.swing-card {
    /* Apply the animation */
    animation: swing 3s ease-in-out infinite; 
    /* Start with a slight offset so it's not perfectly vertical */
    transform: rotate(-3deg); 
}
`;

// --- Navigation Links Data ---
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

// --- Header Components (omitted for brevity, copied from previous successful response) ---









// --- Hero Component (Matching the provided image) ---
const Hero = () => {
    // Placeholder avatars for the social proof section
    const avatars = [
        'https://placehold.co/40x40/fca5a5/ffffff/png?text=A',
        'https://placehold.co/40x40/67e8f9/ffffff/png?text=B',
        'https://placehold.co/40x40/a78bfa/ffffff/png?text=C',
        'https://placehold.co/40x40/f472b6/ffffff/png?text=D',
    ];

    return (
        <div className="relative overflow-hidden bg-[#EFF2F9] min-h-[80vh] flex items-center">
            {/* Background Decorations (Matching the image) */}
            
            {/* Large semi-circle/wave on the right */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] lg:w-[700px] lg:h-[700px] rounded-full bg-teal-50/70 translate-x-1/2 -translate-y-1/2 hidden lg:block"></div>
            
            {/* Teal dot pattern on the far right */}
            <div className="absolute top-1/4 right-0 w-20 h-20 hidden lg:block">
                <svg viewBox="0 0 100 100" className="w-full h-full text-teal-300 opacity-60">
                    <defs><pattern id="dots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r="1" fill="currentColor"/></pattern></defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            {/* Main Content Container */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    
                    {/* Left Content (Text and CTAs) */}
                    <div className="lg:w-1/2 w-full text-center lg:text-left fade-in-bottom">
                        
                        {/* Badge */}
                        <div className="flex items-center justify-center lg:justify-start space-x-2 text-sm text-teal-600 font-semibold mb-6">
                            <FaBoltLightning />
                             <span>Welcome to Online Education</span>
                        </div>
                        
                        {/* Headline */}
                        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-8">
                            Start learning from the world's <span className="text-teal-600">best institutions</span>
                        </h1>
                        
                        {/* CTA Buttons */}
                        <div className="flex justify-center lg:justify-start space-x-6 items-center mb-8">
                           <Link href="/contact">
                            <button className="bg-teal-500 text-white px-8 py-3 rounded-xl font-bold text-lg shadow-lg hover:bg-teal-600 transition duration-300 transform active:scale-95 cursor-pointer">
                                Get Started
                            </button></Link>
                            <button onClick={()=>document.getElementById('my_modal_3').showModal()}> <div className="flex items-center space-x-2 text-gray-600 font-medium hover:text-teal-500 transition duration-200 group">
                                <span className="p-3 bg-white border border-gray-200 rounded-full shadow-md group-hover:border-teal-500 transition duration-200">
                                    <Play size={18} className='text-teal-500' />
                                </span>
                                <span>Watch the video</span>
                            </div></button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
  <iframe width="460" height="315" src="https://www.youtube.com/embed/JYY63tWfkSA?si=EhqhASOdrsdb0kMJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div>
</dialog>
                           
                        </div>
                        
                        {/* Social Proof & Course Count */}
                        <div className="flex flex-col sm:flex-row justify-center lg:justify-start items-center space-y-4 sm:space-y-0 sm:space-x-12 mt-10">
                            {/* Avatars */}
                            <div className="flex -space-x-3">
                                {avatars.map((src, index) => (
                                    <img 
                                        key={index} 
                                        src={src} 
                                        alt={`Student ${index + 1}`} 
                                        className="w-10 h-10 rounded-full border-2 border-white shadow-md transition transform hover:scale-110 duration-200" 
                                        style={{ zIndex: avatars.length - index }}
                                    />
                                ))}
                                <span className="ml-3 self-center text-gray-700 font-semibold">10k+ Enrolment</span>
                            </div>
                            
                            {/* Course Count */}
                            <div className='flex items-center text-lg font-bold text-gray-800 pt-4 sm:pt-0'>
                                <span className='text-teal-500 mr-2'>Explore</span> 
                                <span>1350+ Courses within Subject</span>
                            </div>
                            
                             {/* Zig Zag Icon (Placeholder for the uploaded graphic) */}
                            <div className='mt-3'>
                                <svg width="40" height="40" viewBox="0 0 100 100" className='text-teal-500'>
                                    <path d="M5 95 L25 5 L45 95 L65 5 L85 95" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Right Content (Image and Floating Stat) */}
                    <div className="lg:w-1/3 w-full flex justify-center lg:justify-end lg:mr-12 relative mt-12 lg:mt-0">
                        <img 
                            src="/assets/faq-img.png" 
                            alt="Student writing notes in a library" 
                            className="w-full max-w-lg lg:max-w-none rounded-xl shadow-2xl object-cover"
                            
                        />

                        {/* Floating Stat Card - Added 'swing-card' class */}
                        <div className="absolute top-[20%] left-[-10%] sm:left-[-5%] lg:left-[-22%] p-4 bg-white rounded-xl shadow-2xl text-center w-40 sm:w-48 swing-card">
                            <span className="text-3xl font-extrabold text-teal-600 block">256+</span>
                            <span className="text-sm text-gray-600 block leading-tight">CRASH COURSES</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

// --- Main Application Component (equivalent to your 'page' export) ---
export default function App() {
  // Global state for the active page, shared by Header
  const [activePage, setActivePage] = useState('/'); 

  return (
    <div className='min-h-screen bg-white font-sans'>
      {/* 1. Inject Raw CSS for Active Link and Swing Animation */}
      <style dangerouslySetInnerHTML={{ __html: RawGlobalCSS }} />

      {/* 2. Header Component (includes all navigation logic) */}
      
      {/* 3. Hero Component (The newly designed section) */}
      <Hero />
      
      {/* 4. Placeholder for rest of the page content */}
      

    </div>
  );
}