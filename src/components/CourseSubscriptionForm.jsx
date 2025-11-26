"use client"
import React, { useState } from 'react';
import { Zap, BookOpen, Mail } from 'lucide-react';

export default function CourseSubscriptionForm() {
    const [courseName, setCourseName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Subscription Attempt:", { courseName, email });
        // Replace with actual API call
        alert(`Subscribed for course interest: ${courseName} with email: ${email}`);
        setCourseName('');
        setEmail('');
    };

    return (
        <section className="bg-[#171717] py-12 sm:py-20 relative overflow-hidden">
            {/* Background decoration shapes (matching the dark design) */}
            <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute w-40 h-40 bg-teal-600 rounded-full transform translate-x-1/2 -translate-y-1/2 top-1/4 right-0"></div>
                <div className="absolute w-20 h-20 bg-gray-700 rounded-lg transform -rotate-45 top-3/4 right-1/4"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Two-Column Grid: Image on Left, Form on Right */}
                <div className="grid grid-cols-1 lg:grid-cols-2 bg-[#171717] rounded-3xl overflow-hidden shadow-2xl">
                    
                    {/* Left Column: Image with Rounded Corners */}
                    <div className="h-64 sm:h-96 lg:h-auto">
                        <img 
                            // Placeholder image URL
                            src="/assets/request-img-1.png"
                            alt="Two students collaborating on a laptop in a library." 
                            className="w-full h-full object-cover lg:rounded-3xl"
                            // Note: We use a larger placeholder image to ensure quality, but it's clipped by the container
                        />
                    </div>

                    {/* Right Column: Content and Form */}
                    <div className="p-8 sm:p-12 md:p-16 lg:py-20 flex flex-col justify-center">
                        
                        {/* Header Block */}
                        <span className="inline-flex items-center text-sm font-semibold text-gray-100 bg-gray-800 py-1 px-4 rounded-full mb-4">
                            <Zap size={14} className="mr-2 text-teal-400" />
                            Subscribe Newsletter
                        </span>
                        
                        <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                            Find Your Best Course With Us
                        </h2>
                        
                        <p className="text-base text-gray-400 mb-10">
                            Quality technologies via fully tested methods of empowerment. Proactively disseminate web enabled best practices after cross functional expertise.
                        </p>

                        {/* Subscription Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                
                                {/* Course Name Input */}
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Course Name"
                                        value={courseName}
                                        onChange={(e) => setCourseName(e.target.value)}
                                        className="w-full py-3 px-5 bg-gray-800/80 text-white rounded-lg border border-gray-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder-gray-500 transition duration-200"
                                        aria-label="Course Name"
                                        required
                                    />
                                    <BookOpen size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                                </div>

                                {/* Email Address Input */}
                                <div className="relative">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full py-3 px-5 bg-gray-800/80 text-white rounded-lg border border-gray-700 focus:border-teal-500 focus:ring-1 focus:ring-teal-500 placeholder-gray-500 transition duration-200"
                                        aria-label="Email Address"
                                        required
                                    />
                                    <Mail size={18} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 pointer-events-none" />
                                </div>
                            </div>
                            
                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full sm:w-auto bg-teal-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 transform active:scale-95"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}