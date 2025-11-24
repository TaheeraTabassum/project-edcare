"use client"

import { useEffect, useState } from "react"

export default function Category() {

    const [category, setCategory] = useState([]);
    useEffect(()=>{
        fetch("/category.json")
        .then(res=>res.json())
        .then(data=>setCategory(data))
    },[])
  return (
    <div className='bg-[#EFF2F9]'>
         <div className="text-center mb-10 md:mb-16 py-12">
                   
                    <p className="mt-3 text-lg text-gray-600 max-w-md border border-gray-300 mx-auto bg-white py-1 rounded-2xl">
                       Our Course Categories
                    </p>

                     <h2 className="text-3xl sm:text-4xl font-extrabold my-3 text-gray-900">
                       Select The Industry Where You Want To Learn
                    </h2>
                    <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 lg:mx-20 my-6 px-2">
                        {
                          category?.slice(1,11).map(cat=> (
                            <div className="flex gap-2 items-center border border-gray-300 p-3 rounded-2xl bg-white">
                               <img src={cat.icon_class} alt="" />
                               <p className="font-semibold">{cat.category_name}</p>
                            </div>
                          ) )
                        }
                    </div>

                </div>
    </div>
  )
}
