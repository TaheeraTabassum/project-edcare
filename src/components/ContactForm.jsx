"use client"
import React, { useState } from 'react';
import { User, Mail, MessageSquare, MapPin, Clock, Phone, ChevronDown, Edit3 } from 'lucide-react';

// Data for Office Information block
const OFFICE_INFO = {
    phone: "(+65) - 48596 - 5789",
    email: "hello@edcare.com",
    address: "2690 Hilton Street Victoria Road, New York, Canada",
    hours: [
        { day: "Monday - Friday", time: "09:00 - 20:00" },
        { day: "Sunday & Saturday", time: "10:30 - 22:00" },
    ],
    description: "Completely recapitalize 24/7 communities via standards compliant metrics whereas.",
};

const ContactForm = () => {
    // State for form inputs (optional, for basic control)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: 'General Inquiry',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        // In a real application, you would send this data to a backend service.
        alert('Thank you for your message! (Check console for data)');
        // Optionally reset form
        setFormData({ name: '', email: '', subject: 'General Inquiry', message: '' });
    };

    // Card component for office detail items
    const InfoCard = ({ icon: Icon, title, children }) => (
        <div className="flex items-start space-x-4 p-4 border-b border-gray-100 last:border-b-0">
            <div className="flex-shrink-0 p-3 rounded-full bg-teal-50 text-teal-600">
                <Icon size={20} />
            </div>
            <div>
                <h4 className="text-base font-semibold text-gray-800">{title}</h4>
                <div className="text-sm text-gray-600 mt-0.5">{children}</div>
            </div>
        </div>
    );

    // Input field wrapper component
    const InputField = ({ icon: Icon, placeholder, name, type = 'text', value, onChange }) => (
        <div className="relative w-full">
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="w-full p-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300 placeholder-gray-500"
                required
            />
            {Icon && (
                <Icon size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
            )}
        </div>
    );

    return (
        <section className="bg-gray-50 py-12 sm:py-16 md:py-20 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main Grid Container: Switches from 1 column (mobile) to 2 columns (md+) */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12 bg-white p-6 sm:p-10 md:p-12 rounded-2xl shadow-xl border border-gray-100">
                    
                    {/* 1. Contact Form Section (Left Column: Takes 2/3 width on large screens) */}
                    <div className="lg:col-span-2">
                        <div className="mb-8">
                            <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Leave A Reply</h2>
                            <p className="text-gray-600">Fill The Form and Message us of your amazing question</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Name and Email in a responsive row */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <InputField 
                                    icon={User} 
                                    placeholder="Your Name" 
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                                <InputField 
                                    icon={Mail} 
                                    placeholder="Your Email" 
                                    name="email"
                                    type="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>

                            {/* Subject Dropdown */}
                            <div className="relative">
                                <select
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="w-full appearance-none p-4 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300 text-gray-800 bg-white"
                                >
                                    <option value="General Inquiry">Select Subject</option>
                                    <option value="Support">Technical Support</option>
                                    <option value="Billing">Billing Inquiry</option>
                                    <option value="Partnership">Partnership Opportunities</option>
                                </select>
                                <ChevronDown size={20} className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" />
                            </div>

                            {/* Message Textarea */}
                            <div className="relative">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    rows="6"
                                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition duration-300 resize-none placeholder-gray-500"
                                    required
                                ></textarea>
                                {/* Pen icon as seen in the image */}
                                <Edit3 size={18} className="absolute right-4 bottom-4 text-gray-400 opacity-70" />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-teal-500 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-teal-600 transition duration-300 transform hover:scale-[1.005]"
                            >
                                Submit Message
                            </button>
                        </form>
                    </div>

                    {/* 2. Office Information Section (Right Column: Takes 1/3 width on large screens) */}
                    <div className="lg:col-span-1 bg-gray-50 p-6 sm:p-8 rounded-xl border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Office Information</h3>
                        <p className="text-sm text-gray-600 mb-6">{OFFICE_INFO.description}</p>
                        
                        <div className="space-y-4">
                            {/* Phone & Email */}
                            <InfoCard icon={Phone} title="Phone Number & Email">
                                <p className='font-medium'>{OFFICE_INFO.phone}</p>
                                <p>{OFFICE_INFO.email}</p>
                            </InfoCard>

                            {/* Office Address */}
                            <InfoCard icon={MapPin} title="Our Office Address">
                                <p>{OFFICE_INFO.address}</p>
                            </InfoCard>

                            {/* Official Work Time */}
                            <InfoCard icon={Clock} title="Official Work Time">
                                {OFFICE_INFO.hours.map((item, index) => (
                                    <p key={index} className="flex justify-between items-center pr-4">
                                        <span>{item.day}:</span>
                                        <span className='font-medium'>{item.time}</span>
                                    </p>
                                ))}
                            </InfoCard>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
