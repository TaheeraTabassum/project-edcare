import React from 'react';
import { Calendar, Tag, ArrowRight } from 'lucide-react';

// Sample data for the blog posts, mirroring the structure in the image
const BLOG_POSTS = [
    {
        title: "The Impact of Technology Modern Classrooms Education",
        date: "August 15, 2025",
        category: "Marketing",
        imageUrl: "https://placehold.co/400x250/f0f9ff/0e7490?text=Tech+in+Class",
        imageAlt: "Students working together on a laptop in a modern classroom.",
    },
    {
        title: "Building Resilience and Empathy in the Classroom",
        date: "August 15, 2025",
        category: "Marketing",
        imageUrl: "https://placehold.co/400x250/f0f9ff/0e7490?text=Empathy+Training",
        imageAlt: "Students reading books and collaborating in a brightly lit library.",
    },
    {
        title: "The Importance of Integrating Arts into Science and Technology",
        date: "August 15, 2025",
        category: "Marketing",
        imageUrl: "https://placehold.co/400x250/f0f9ff/0e7490?text=STEAM+Education",
        imageAlt: "Teacher assisting two young students with a creative science project.",
    },
    {
        title: "How Innovative Pedagogies Are Transforming Education",
        date: "August 15, 2025",
        category: "Marketing",
        imageUrl: "https://placehold.co/400x250/f0f9ff/0e7490?text=Innovative+Learning",
        imageAlt: "Student smiling while holding books in front of a full bookshelf.",
    },
    {
        title: "Online Education Is Empowering Adult Learners",
        date: "August 15, 2025",
        category: "Marketing",
        imageUrl: "https://placehold.co/400x250/f0f9ff/0e7490?text=Adult+Education",
        imageAlt: "Group of adult students collaborating on a project around a laptop.",
    },
    {
        title: "The Critical Role of Education in a Changing Workforce",
        date: "August 15, 2025",
        category: "Marketing",
        imageUrl: "https://placehold.co/400x250/f0f9ff/0e7490?text=Workforce+Skills",
        imageAlt: "Four male students in professional attire working together with laptops.",
    },
];

// Component for a single Blog Card
const BlogCard = ({ post }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-500 overflow-hidden border border-gray-100 transform hover:-translate-y-1">
            
            {/* Image Section */}
            <div className="h-34  overflow-hidden">
                <img 
                    src={post.imageUrl} 
                    alt={post.imageAlt} 
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
            </div>

            {/* Content Section */}
            <div className="p-5 sm:p-6 space-y-4">
                
                {/* Meta Data (Date and Category) */}
                <div className="flex flex-wrap gap-x-4 gap-y-2 text-sm text-gray-500">
                    <span className="flex items-center space-x-1.5">
                        <Calendar size={14} className="text-teal-500" />
                        <span>{post.date}</span>
                    </span>
                    <span className="flex items-center space-x-1.5">
                        <Tag size={14} className="text-teal-500" />
                        <span>{post.category}</span>
                    </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 hover:text-teal-600 transition duration-300 leading-snug">
                    <a href="#" className="line-clamp-2">
                        {post.title}
                    </a>
                </h3>

                {/* Read More Button/Link */}
                <a 
                    href="#" 
                    className="inline-flex items-center text-gray-600 font-medium group transition duration-300 border-b-2 border-transparent hover:border-teal-500"
                >
                    Read More 
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </a>
            </div>
        </div>
    );
};

// Main BlogCards Component
export default function BlogCards() {
    return (
        <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header (Optional) */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Latest News and Insights
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-3xl mx-auto">
                        Stay updated with our latest articles, research, and educational trends.
                    </p>
                </div>

                {/* Responsive Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
                    {BLOG_POSTS.map((post, index) => (
                        <BlogCard key={index} post={post} />
                    ))}
                </div>
            </div>
        </div>
    );
}