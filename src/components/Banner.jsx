"use client"
import React, { useState } from 'react';
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
  Play,
  ScrollText, // Icon for 9.5k+ stat
  GraduationCap // Icon for 6.7k+ stat
} from 'lucide-react';

// --- Global CSS (Active Link Gradient Highlight + Swing + Fade-In Animations) ---
// const RawGlobalCSS = `
// /* --- Active Link Styles --- */
// .active-link {
//     color: #0d9488;
//     font-weight: 700;
//     position: relative;
//     z-index: 10; 
// }

// .active-link::after {
//     content: '';
//     position: absolute;
//     height: 3px;
//     left: 0;
//     right: 0;
//     bottom: -0.75rem;
//     background-image: linear-gradient(to right, #2dd4bf, #0d9488); 
//     border-radius: 9999px; 
//     transition: all 300ms ease-in-out;
//     z-index: -1; 
// }

// /* --- Swing Animation for Floating Card --- */
// @keyframes swing {
//     0% { transform: rotate(-3deg); }
//     50% { transform: rotate(3deg); }
//     100% { transform: rotate(-3deg); }
// }

// .swing-card {
//     animation: swing 6s ease-in-out infinite; 
//     transform: rotate(-3deg); 
// }

// /* --- Fade In From Left Keyframes --- */
// @keyframes fadeInLeft {
//     from {
//         opacity: 0;
//         transform: translate3d(-50px, 0, 0);
//     }
//     to {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }
// }

// /* Class for Fade In From Left */
// .fade-in-left {
//     animation-name: fadeInLeft;
//     animation-fill-mode: both;
//     animation-duration: 1s; /* Default duration */
// }

// /* --- Fade In From Bottom Keyframes --- */
// @keyframes fadeInUp {
//     from {
//         opacity: 0;
//         transform: translate3d(0, 30px, 0);
//     }
//     to {
//         opacity: 1;
//         transform: translate3d(0, 0, 0);
//     }
// }

// /* Class for Fade In From Bottom */
// .fade-in-bottom {
//     animation-name: fadeInUp;
//     animation-fill-mode: both;
//     animation-duration: 0.8s; /* Default duration */
// }
// `;

// --- Navigation Links Data ---
const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/shop", label: "Shop" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];


// --- Banner Component (New Section from the image) ---
const Banner = () => {
    // Custom clip path for the top-right image to match the curvature/corner cut
    const clipPathTopRight = 'polygon(0% 0%, 100% 10%, 100% 100%, 0% 100%)'; 

    return (
        <div className="py-20 lg:py-28 bg-gray-50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-12">
                    
                    {/* Left Side: Image Collage and Support Box */}
                    <div className="lg:w-1/2 w-full relative h-[450px] sm:h-[500px] lg:h-[600px] fade-in-left" style={{ animationDelay: '2s' }}>
                        
                        {/* Image 1 (Front, Video Player Look) */}
                        <div className="absolute top-0 left-0 w-3/5 h-3/5 sm:w-1/2 sm:h-1/2 rounded-3xl shadow-2xl overflow-hidden z-10">
                            <img 
                                src="/assets/about-img-1.jpg" 
                                alt="Student smiling with tablet" 
                                className="w-full h-full object-cover"
                            />
                            {/* Video Play Icon Overlay */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <button onClick={()=>document.getElementById('my_modal_3').showModal()} className="p-4 bg-white/70 backdrop-blur-sm rounded-full shadow-lg text-teal-500 transform hover:scale-110 hover:bg-blue-300 hover:text-white cursor-pointer transition-transform duration-300">
                                    <Play size={28} fill='currentColor' />
                                </button>
                                <dialog id="my_modal_3" className="modal">
                                  <div className="modal-box">
                                    <form method="dialog">
                                      {/* if there is a button in form, it will close the modal */}
                                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                  <iframe width="460" height="315" src="https://www.youtube.com/embed/JYY63tWfkSA?si=EhqhASOdrsdb0kMJ" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                                  </div>
                                </dialog>
                                                           
                            </div>
                        </div>

                        {/* Image 2 (Back, Group Study) */}
                        <div className="absolute bottom-0 right-0 w-3/4 h-3/4 sm:w-3/5 sm:h-3/5 rounded-3xl shadow-2xl overflow-hidden" 
                             style={{ 
                                // Custom rounded bottom-left to match the visual style
                                borderBottomLeftRadius: '3rem', 
                                borderBottomRightRadius: '3rem',
                                // clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 90%)' 
                             }}
                        >
                            <img 
                                src="/assets/about-img-2.jpg" 
                                alt="Group of students collaborating" 
                                className="w-full h-full object-cover"
                            />
                        </div>
                        
                        {/* Online Support Callout (Teal Box) */}
                        <div className="absolute bottom-10 left-0 lg:left-[-1%] p-6 bg-teal-500 text-white rounded-t-xl shadow-xl w-56 sm:w-64 z-20 hover:shadow-teal-500/50 transition duration-300 transform hover:translate-y-[-5px]">
                            <p className="text-md font-semibold flex items-center space-x-2">
                                <Phone size={20} className='text-white' />
                                <span>ONLINE SUPPORT</span>
                            </p>
                            <p className="text-2xl font-extrabold mt-1">+258 152 3659</p>
                        </div>
                    </div>
                    
                    {/* Right Side: Content and Stats */}
                    <div className="lg:w-1/2 w-full mt-12 lg:mt-0">
                        
                        {/* Badge */}
                        <div className="flex items-center space-x-2 text-sm text-teal-600 font-semibold mb-4 fade-in-bottom" style={{ animationDelay: '2s' }}>
                             <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className='text-orange-500'><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"/><polyline points="13 2 13 9 20 9"/><path d="M16 13l-4 4-4-4"/></svg>
                             <span>Get More About Us</span>
                        </div>

                        {/* Title - Fade In From Left */}
                        <h2 className="text-4xl lg:text-4xl font-extrabold text-gray-900 leading-snug mb-6 fade-in-bottom" style={{ animationDelay: '2s' }}>
                            Over 10 Years in Distant learning for <span className="text-teal-600">Skill Development</span>
                        </h2>

                        {/* Description - Fade In From Bottom */}
                        <p className="text-gray-600 mb-8 max-w-lg fade-in-bottom" style={{ animationDelay: '2s' }}>
                            Compellingly procrastinate equity invested markets with efficient process improvements. actualize mission-critical partnerships with integrated portals. Authoritatively optimize low-risk high-yield metrics and plug-and-play potentialities.
                        </p>

                        {/* Stats Container - Fade In From Bottom */}
                        <div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 sm:space-x-8 mb-10 ">
                            
                            {/* Stat Card 1 */}
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg flex-1 border-b-4 border-teal-500 fade-in-bottom" style={{ animationDelay: '1s' }}>
                                <div className="p-3 rounded-full bg-teal-100 text-teal-600">
                                    <ScrollText size={32} />
                                </div>
                                <div>
                                    <span className="text-3xl font-extrabold text-gray-900 block">9.5k+</span>
                                    <span className="text-sm text-gray-500 block">Total active students taking gifted courses</span>
                                </div>
                            </div>
                            
                            {/* Stat Card 2 */}
                            <div className="flex items-start space-x-4 p-4 bg-white rounded-xl shadow-lg flex-1 border-b-4 border-teal-500 fade-in-bottom" style={{ animationDelay: '1.2s' }}>
                                <div className="p-3 rounded-full bg-teal-100 text-teal-600">
                                    <GraduationCap size={32} />
                                </div>
                                <div>
                                    <span className="text-3xl font-extrabold text-gray-900 block">6.7k+</span>
                                    <span className="text-sm text-gray-500 block">Total active students taking gifted courses</span>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button - Fade In From Bottom */}
                        <button 
                            className="bg-teal-500 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-lg hover:bg-teal-600 transition duration-300 transform active:scale-95 fade-in-bottom cursor-pointer"
                            style={{ animationDelay: '1.4s' }}
                        >
                            Start Free Trial
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
}
 export default Banner
// --- Main Application Component (equivalent to your 'page' export) ---
