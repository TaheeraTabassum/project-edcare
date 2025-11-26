
"use client"
import { useSelector } from 'react-redux';
import React, { useState } from 'react';
import { TbCategoryFilled } from "react-icons/tb";
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
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';


// --- Top Bar Component ---
const HeaderTop = () => (
  <div className="bg-gray-800 text-gray-300 py-2 hidden lg:block">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center text-sm">
        {/* Contact Info */}
        <div className="flex space-x-6">
          <div className="flex items-center space-x-2">
            <Phone size={14} className="text-teal-400" />
            <span>256 214 203 215</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={14} className="text-teal-400" />
            <span>258 Helano Street, New York</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock size={14} className="text-teal-400" />
            <span>Mon - Sat: 8:00 - 15:00</span>
          </div>
        </div>

        {/* Auth and Socials */}
        <div className="flex items-center space-x-6">
          <a href="#" className="flex items-center space-x-2 hover:text-white transition duration-200">
            <User size={14} />
            <span>Login / Register</span>
          </a>
          <div className="flex items-center space-x-3">
            <span className='mr-1'>|</span>
            <span className="font-semibold">Follow Us</span>
            <a href="#" aria-label="Facebook" className="hover:text-white transition duration-200"><Facebook size={14} /></a>
            <a href="#" aria-label="Twitter" className="hover:text-white transition duration-200"><Twitter size={14} /></a>
            <a href="#" aria-label="Instagram" className="hover:text-white transition duration-200"><Instagram size={14} /></a>
            <a href="#" aria-label="Youtube" className="hover:text-white transition duration-200"><Youtube size={14} /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// --- Main Navigation Component ---
const HeaderMain = ({ toggleMenu, itemCount }) => (
  <div className="bg-white shadow-sm">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          {/* Using a simple SVG placeholder for the EdCare logo icon */}
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2l8 4.5v9L12 22l-8-4.5v-9L12 2z" />
            <path d="M12 22l8-4.5" />
            <path d="M12 2v9l-8 4.5" />
            <path d="M12 11l8 4.5" />
            <path d="M12 11l-8 4.5" />
            <path d="M12 11V2" />
          </svg>
          <span className="text-2xl font-bold text-gray-800 tracking-tight">EdCare</span>
        </div>

        {/* Search Bar (Desktop) */}
        <div className="hidden lg:flex flex-1 max-w-xl mx-8">
          <div className="flex w-full border border-gray-200 rounded-lg overflow-hidden">
            {/* Categories Dropdown */}
            <div className="relative group">
              <button className="flex items-center p-3 text-gray-700 bg-gray-50 hover:bg-gray-100 transition duration-150">
                <LayoutGrid size={18} className="mr-2" />
                <span className='font-medium'>Categories</span>
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
              </button>
              {/* Dropdown content placeholder */}
              {/* <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-20 hidden group-hover:block">
                <div className="py-1">
                  <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Web Development</a>
                  ...
                </div>
              </div> */}
            </div>

            {/* Search Input */}
            <input
              type="text"
              placeholder="Search here..."
              className="flex-1 p-3 text-gray-700 focus:outline-none placeholder-gray-400"
              aria-label="Search courses"
            />

            {/* Search Button */}
            <button className="bg-teal-500 text-white px-5 hover:bg-teal-600 transition duration-150 flex items-center justify-center">
              <Search size={20} className="mr-1" />
              Search
            </button>
          </div>
        </div>

        {/* Icons and Trial Button */}
        <div className="flex items-center space-x-4">
          {/* Wishlist Icon */}
          <div className="relative hidden sm:block">
            <button className="p-2 border border-gray-200 rounded-full hover:bg-gray-100 transition duration-150">
              <Heart size={20} className="text-gray-600" />
            </button>
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">0</span>
          </div>

          {/* Cart Icon */}
       
          <div className="relative hidden sm:block">
              <Link href="/cart">
            <button className="p-2 cursor-pointer border border-gray-200 rounded-full hover:bg-gray-100 transition duration-150">
              <ShoppingCart size={20} className="text-gray-600" />
            </button>
            </Link>
            <span className="absolute -top-1 -right-1 bg-teal-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">{itemCount}</span>
          </div>

          {/* Start Free Trial Button */}
          <button className="hidden sm:block bg-teal-500 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-teal-600 transition duration-200">
            Start Free Trial
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-md transition duration-150"
            aria-label="Toggle navigation menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>
      {/* Search bar for mobile/tablet screens */}
      <div className="lg:hidden mt-3">
        <div className="flex w-full border border-gray-200 rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Search courses..."
            className="flex-1 p-3 text-gray-700 focus:outline-none placeholder-gray-400"
            aria-label="Search courses"
          />
          <button className="bg-teal-500 text-white px-4 hover:bg-teal-600 transition duration-150 flex items-center justify-center">
            <Search size={20} />
          </button>
        </div>
      </div>
    </div>
  </div>
);

// --- Mobile Menu Drawer ---
const MobileMenu = ({ isOpen, toggleMenu }) => (
  <div
    className={`fixed inset-0 z-40 transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:hidden`}
  >
    <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={toggleMenu} aria-hidden="true"></div>

    <div className="relative max-w-xs w-full bg-white h-full shadow-xl overflow-y-auto">
      <div className="flex justify-between items-center p-4 border-b">
        <span className="text-xl font-bold text-gray-800">Navigation</span>
        <button onClick={toggleMenu} className="text-gray-600 hover:text-gray-900" aria-label="Close menu">
          <X size={24} />
        </button>
      </div>

      <nav className="p-4 space-y-2">
        <a href="#" className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Categories</a>
        <a href="#" className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Login / Register</a>
        <a href="#" className="block p-3 text-gray-700 hover:bg-gray-50 rounded-lg font-medium">Start Free Trial</a>
        
        <div className="pt-4 border-t mt-4 space-y-3">
          <p className="font-semibold text-gray-800">Contact</p>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Phone size={16} />
            <span>256 214 203 215</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <MapPin size={16} />
            <span>258 Helano Street, New York</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Clock size={16} />
            <span>Mon - Sat: 8:00 - 15:00</span>
          </div>
        </div>

        <div className="pt-4 border-t mt-4">
            <p className="font-semibold text-gray-800 mb-2">Follow Us</p>
            <div className="flex space-x-4 text-gray-600">
                <a href="#" aria-label="Facebook" className="hover:text-teal-500 transition duration-200"><Facebook size={20} /></a>
                <a href="#" aria-label="Twitter" className="hover:text-teal-500 transition duration-200"><Twitter size={20} /></a>
                <a href="#" aria-label="Instagram" className="hover:text-teal-500 transition duration-200"><Instagram size={20} /></a>
                <a href="#" aria-label="Youtube" className="hover:text-teal-500 transition duration-200"><Youtube size={20} /></a>
            </div>
        </div>
      </nav>
    </div>
  </div>
);


   
        



// --- Main Export Component ---
export default function Header() {
  const itemCount = useSelector((state)=>state.cart.totalQuantity)
  const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

  const isActive = (path) =>
    pathname === path ? "text-teal-600 font-semibold" : "hover:text-teal-600";


  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full">
      <HeaderTop />
      <HeaderMain toggleMenu={toggleMenu} itemCount={itemCount} />
      <MobileMenu isOpen={isMenuOpen} toggleMenu={toggleMenu} />
     <div className=' max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3" flex items-center justify-center lg:justify-start gap-10 lg:gap-32 lg:px-10 my-3'>
            <div className='flex items-center gap-1 '>
                <TbCategoryFilled className='text-green-600' />
                <p className='font-bold text-lg  hidden lg:block'>Categories</p>
            </div>
            <div className='flex lg:gap-10 gap-3 text-md font-semibold cursor-pointer'>
                <Link href="/"  className={isActive("/")}>Home</Link>
                <Link href="/courses"  className={isActive("/courses")}>Courses</Link>
                <Link href="/shop"  className={isActive("/shop")}>Shop</Link>
                <Link href="/blog"  className={isActive("/blog")}>Blog</Link>
                <Link href="/contact"  className={isActive("/contact")}>Contact</Link>
               
            </div>
            </div>
     
    </header>
  );
}