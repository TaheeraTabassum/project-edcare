"use client"
import { useDispatch } from "react-redux";
import { addToCart } from "@/app/Redux/cartSlice";
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import SharedBanner from '../../../../shared/SharedBanner';
import { FaStar } from "react-icons/fa";
import { FaUser, FaLanguage } from "react-icons/fa";
import { MdOutlineCategory, MdPlayLesson } from "react-icons/md";
import { BiTimeFive } from "react-icons/bi";
import { RiGraduationCapLine } from "react-icons/ri";

export default function page() {
  const dispatch = useDispatch();
    const {id} = useParams();
     const [courses, setCourses] = useState([]);
      useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const findID = courses.find(c=>c.category_id==id)
   if (!findID) {
    return (
      <div className="text-center text-xl font-semibold py-20">
        Loading Course Details...
      </div>
    );
  }


  return (
    <div>
        <SharedBanner></SharedBanner>
        <div>
           
 <div className="max-w-7xl mx-auto px-4 py-12 grid lg:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="lg:col-span-2">
          <img
            src={findID.image}
            alt={findID.title}
            className="rounded-xl w-full h-[350px] object-cover"
          />

          {/* Tags */}
          <div className="flex gap-2 mt-4">
            {findID.tags.map((tag, i) => (
              <span
                key={i}
                className="bg-green-100 text-green-600 px-3 py-1 text-sm rounded-full font-semibold"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h1 className="text-2xl font-bold mt-4">
            {findID.title} Course For Limited Time
          </h1>

          {/* Info */}
          <div className="flex flex-wrap gap-6 mt-3 text-gray-600 text-sm items-center">
            <p className="flex items-center gap-2"><FaUser /> Instructor: <span className="font-semibold">{findID.instructor}</span></p>
            <p className="flex items-center gap-2"><MdOutlineCategory /> {findID.category_name}</p>
            <p className="flex items-center gap-2"><BiTimeFive /> {findID.last_updated}</p>
            <p className="flex items-center text-yellow-500 gap-2"><FaStar /> {findID.rating} ({findID.reviews_count})</p>
          </div>

          {/* Tabs */}
          <div className="mt-6 border-b flex gap-6 text-sm font-semibold">
            <button className="py-3 border-b-2 border-green-600 text-green-600">Overview</button>
            <button className="py-3 text-gray-500">Curriculum</button>
            <button className="py-3 text-gray-500">Instructor</button>
            <button className="py-3 text-gray-500">Reviews</button>
          </div>

          {/* Description */}
          <div className="mt-6 text-gray-700 leading-7">
            <h2 className="text-xl font-bold mb-3">Description</h2>
            <p className="mb-5">{findID?.description}</p>

            <h2 className="text-xl font-bold mb-3 ">What Will You Learn?</h2>
            <p >{findID?.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus nemo, minima commodi magnam aspernatur ab fuga assumenda expedita nihil sed quibusdam deleniti obcaecati ipsam. Quibusdam possimus dicta doloribus qui nostrum.</p>
           
           
          </div>
        </div>

        {/* Right Sidebar */}
        <div>
          <div className="shadow-md bg-white rounded-xl p-6 border">
            <p className="text-3xl font-bold mb-3">${findID.price.toFixed(2)}</p>
            <button  onClick={() => dispatch(addToCart(findID))} className=" btn cursor-pointer bg-green-600 w-full text-white font-semibold py-2 rounded-lg mb-2">
              ADD TO CART
            </button>
            <button className="border  btn cursor-pointer  w-full text-green-600 font-semibold py-2 rounded-lg">
              BUY NOW
            </button>
          </div>

          {/* Course Info */}
          <div className="shadow-md bg-white rounded-xl mt-6 p-6 border">
            <h3 className="text-lg font-bold mb-4">Course Information</h3>
            
            <ul className="space-y-3 text-sm text-gray-700">
              <li className="flex justify-between"><span>Lessons:</span> <span className="font-semibold">{findID.lessons}</span></li>
              <li className="flex justify-between"><span>Duration:</span> <span className="font-semibold">{findID.duration}</span></li>
              <li className="flex justify-between"><span>Course level:</span> <span className="font-semibold">{findID.level}</span></li>
              <li className="flex justify-between"><span>Language:</span> <span className="font-semibold">{findID.language}</span></li>
              <li className="flex justify-between"><span>Quizzes:</span> <span className="font-semibold">{findID.quizzes}</span></li>
            </ul>

            <button className="mt-5 w-full border text-blue-600 px-4 py-2 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition">
              Share This Course
            </button>
          </div>

        </div>
      </div>

        </div>
    
    </div>
  )
}
