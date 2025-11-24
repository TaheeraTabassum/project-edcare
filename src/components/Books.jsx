
import { Star, User } from 'lucide-react';

// Data for the book/product cards, mirroring the structure in the image
const BOOKS_DATA = [
    { title: "The Creator Mindset", author: "Andrew Collins", originalPrice: 170.00, salePrice: 147.00, reviews: 15, rating: 4.5, image: "/assets/shop-1.png", primaryColor: "bg-red-700" },
    { title: "The Phoenix Encounter", author: "James Parker", originalPrice: 330.00, salePrice: 277.00, reviews: 15, rating: 4.5, image: "/assets/shop-2.png", primaryColor: "bg-black" },
    { title: "The Untapped Force...", author: "Ethan Thompson", originalPrice: 250.00, salePrice: 157.00, reviews: 15, rating: 4.5, image: "/assets/shop-3.png", primaryColor: "bg-red-800" },
    { title: "Own Your Authority", author: "William Bennett", originalPrice: 80.00, salePrice: 57.00, reviews: 15, rating: 4.5, image: "/assets/shop-4.png", primaryColor: "bg-blue-600" },
    { title: "The Phoenix Encounter", author: "James Parker", originalPrice: 330.00, salePrice: 277.00, reviews: 15, rating: 4.5, image: "/assets/shop-5.png", primaryColor: "bg-red-600" },
    { title: "The Untapped Force...", author: "Ethan Thompson", originalPrice: 250.00, salePrice: 157.00, reviews: 15, rating: 4.5, image: "/assets/shop-6.png", primaryColor: "bg-blue-800" },
    { title: "Own Your Authority", author: "William Bennett", originalPrice: 80.00, salePrice: 57.00, reviews: 15, rating: 4.5, image: "/assets/shop-7.png", primaryColor: "bg-teal-600" },
    { title: "The Creator Mindset", author: "Andrew Collins", originalPrice: 170.00, salePrice: 147.00, reviews: 15, rating: 4.5, image: "/assets/shop-8.png", primaryColor: "bg-gray-800" },
];

// Helper component for star rating
const RatingStars = ({ rating }) => {
    // Generate 5 stars, coloring them based on the rating value
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    const stars = Array(5).fill(0).map((_, index) => {
        let color = 'text-yellow-400'; // Full star
        if (index >= fullStars) {
            color = 'text-gray-300'; // Empty star
        }
        
        // Note: Lucide does not have a half-star icon by default, so we'll just use full/empty for simplicity.
        // For a more complex rating, you might use a custom SVG.
        return <Star key={index} size={14} fill={color === 'text-yellow-400' ? 'currentColor' : 'none'} className={color} />;
    });

    return <div className="flex items-center space-x-1">{stars}</div>;
};

// Component for a single Book Card
const BookCard = ({ book }) => {
    return (
        <div className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100 flex flex-col items-center text-center">
            
            {/* Author Badge (Top Left) */}
            <div className='absolute top-4 left-4 text-sm font-medium bg-white px-2 py-0.5 rounded-md shadow-md text-gray-700'>
                {book.author.split(' ')[0]} {book.author.split(' ')[1].charAt(0)}.
            </div>

            {/* Book Image Container */}
            <div className="w-48 h-64 overflow-hidden rounded-lg shadow-2xl mt-8 mb-4">
                <img 
                    src={book.image} 
                    alt={`Cover of ${book.title}`} 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                    style={{ border: `4px solid ${book.primaryColor.replace('bg-', '#')}` }} // Simulating the colored border/spine
                />
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mt-2 mb-1 leading-snug">
                {book.title}
            </h3>
            
            {/* Rating and Reviews */}
            <div className="flex items-center justify-center mb-3 space-x-2">
                <RatingStars rating={book.rating} />
                <span className="text-sm text-gray-500">
                    ({book.reviews} Reviews)
                </span>
            </div>

            {/* Price */}
            <div className="text-lg font-semibold flex items-baseline space-x-2">
                <span className="text-gray-400 line-through">${book.originalPrice.toFixed(2)}</span>
                <span className="text-teal-500 font-extrabold">${book.salePrice.toFixed(2)}</span>
            </div>
            
            {/* Author (Hidden on card, but useful for accessibility/hover) */}
            <p className="text-xs text-gray-400 mt-1 hidden">{book.author}</p>
        </div>
    );
};

// Main Books Component (Replaces the original stub)
export default function Books() {
    return (
        <div className="bg-gray-50 py-12 sm:py-16 md:py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Section Header (Optional, but good practice) */}
                <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                        Our Bestselling Digital Books
                    </h2>
                    <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
                        Expand your knowledge with professionally written, skill-focused ebooks from industry leaders.
                    </p>
                </div>

                {/* Responsive Grid Container */}
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8">
                    {BOOKS_DATA.map((book, index) => (
                        <div key={index} className='relative'>
                            <BookCard book={book} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}