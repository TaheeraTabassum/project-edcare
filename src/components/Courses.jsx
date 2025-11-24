"use client";

import { useEffect, useState } from "react";
import { FaBoltLightning } from "react-icons/fa6";

export default function Courses() {
  const [category, setCategory] = useState([]);
   const [courses, setCourses] = useState([]);
   const [ids, setIds] = useState();
  useEffect(() => {
    fetch("/category.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
 
  useEffect(() => {
    fetch("/courses.json")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  const handleId=(id)=>{
        setIds(id)
  }
  const filterCourse = ids?courses.filter(c=>c.category_id==ids):courses
  
  return (
    <div className="bg-[#EFF2F9] py-12">
      <div className="text-center mb-10 md:mb-16  ">
        <div className="flex items-center gap-2 mt-3 text-lg text-gray-600 max-w-80 border border-gray-300 mx-auto bg-white py-1 rounded-2xl justify-center">
          <FaBoltLightning className="text-green-300" />
          <p className="">Top Class Courses</p>
        </div>

        <h2 className="text-3xl sm:text-4xl font-extrabold my-3 text-gray-900">
          Explore Featured Courses
        </h2>
      </div>
      <div className="grid lg:grid-cols-5 grid-cols-3 gap-2 px-3">
        {category?.slice(0,10).map((cat) => (
          <div onClick={()=>handleId(cat.id)}  className=" border border-gray-300 p-3 rounded-2xl bg-white  cursor-pointer text-center">
            
            <p className="font-semibold  text-sm">{cat.category_name}</p>
          </div>
        ))}
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 lg:px-12 py-6 px-2 gap-6">
  {
   filterCourse?.slice(0,9).map(course => (
      <div key={course.course_id} className="shadow-md bg-white rounded-xl overflow-hidden border border-gray-300">
        
        {/* Thumbnail */}
        <img
          src={course?.image}
          alt={course.title}
          className="w-full h-48 object-cover"
        />

        <div className="p-4">
          
          {/* Badge */}
          <span className="inline-block bg-green-100 text-green-600 px-3 py-1 text-sm rounded-full font-semibold">
            {course.tags[0]}
          </span>

          {/* Title */}
          <h3 className="mt-3 font-bold text-lg hover:text-blue-600 cursor-pointer">
            {course.title}
          </h3>

          {/* Meta info */}
          <div className="flex justify-between text-sm text-gray-500 mt-2">
            <span>📚 Lesson {course.lessons}</span>
            <span>👨‍🎓 Students {course.reviews_count}</span>
            <span>👀 View: 12K</span>
          </div>

          {/* Instructor */}
          <div className="flex items-center gap-3 mt-3">
            <img
              src="/assets/instructor.png"
              alt="instructor"
              className="h-10 w-10 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-sm">{course.instructor}</p>
              <p className="text-xs text-gray-500">Instructor</p>
            </div>
            {/* Rating */}
            <div className="ml-auto flex items-center text-yellow-500 text-sm font-semibold">
              ★ {course.rating}
            </div>
          </div>
        </div>

        {/* Price & Button */}
        <div className="px-4 pb-4 flex items-center justify-between border-t border-gray-300 pt-3">
          <p className="font-bold text-xl">${course.price.toFixed(2)}</p>
          <button className="px-4 py-2 rounded-lg border text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white transition cursor-pointer">
            View Details
          </button>
        </div>

      </div>
    ))
  }
</div>

    </div>
  );
}
