"use client"
import React from 'react';
import { BookOpen, DollarSign, Calendar } from 'lucide-react';

// Data for the feature cards
const FEATURES = [
    {
        title: "Book Free Consultation",
        icon: BookOpen,
        description: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
        bgColor: "bg-teal-500",
        ringColor: "border-teal-400",
        image: "/assets/promo-img-1.png"
    },
    {
        title: "Make Easy Payment",
        icon: DollarSign,
        description: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
        bgColor: "bg-green-500",
        ringColor: "border-green-400",
     image: "/assets/promo-img-2.png"
    },
    {
        title: "Schedule First Lesson",
        icon: Calendar,
        description: "Standards in leadership skills synergize optimal expertise rather than innovative leadership skills.",
        bgColor: "bg-blue-500",
        ringColor: "border-blue-400",
        image: "/assets/promo-img-3.png"
    },
];

// Single Feature Card Component
const FeatureCard = ({ feature }) => {
    const Icon = feature.icon;
    return (
        <div className="flex flex-col items-center text-center p-4">
            
            {/* Icon & Image Wrapper */}
            <div className={`relative w-40 h-40 rounded-full mb-6 border-4 ${feature.ringColor} p-1`}>
                {/* Placeholder Image (Circle) */}
                <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover rounded-full"
                    // Add a slight transform on hover for visual interest
                    style={{ transform: 'scale(1.05)' }}
                />
                
                {/* Icon Overlay */}
                <div className={`absolute -top-2 -right-2 p-3 rounded-full shadow-2xl ${feature.bgColor} text-white border-4 border-[#171717]`}>
                    <Icon size={24} />
                </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-3 mt-4">{feature.title}</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
                {feature.description}
            </p>
        </div>
    );
};

export default function WhyChooseUsSection() {
    return (
        <section className="bg-[#171717] py-8 sm:py-10 md:py-16 my-10 relative overflow-hidden">
            {/* Background shapes (matching the dark design) */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute w-20 h-20 bg-teal-600 rounded-lg transform -translate-x-1/2 -translate-y-1/2 rotate-45 top-1/4 left-1/4"></div>
                <div className="absolute w-4 h-4 bg-green-500 rounded-full top-1/2 right-1/4"></div>
                <div className="absolute w-8 h-8 bg-blue-500 rounded-full transform translate-x-1/2 bottom-1/4 right-0"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                
                {/* Header Block */}
                <div className="text-center mb-10">
                    <span className="inline-flex items-center text-sm font-semibold text-gray-100 bg-gray-800 py-1 px-4 rounded-full mb-4">
                        <Calendar size={14} className="mr-2 text-teal-400" />
                        Why Choose Us
                    </span>
                    <h2 className="text-3xl sm:text-3xl font-extrabold text-white leading-tight">
                        Explore Yourself All Over The World
                    </h2>
                </div>

                {/* Responsive Grid for Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {FEATURES.map((feature, index) => (
                        <FeatureCard key={index} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
}