import React from 'react'

export default function SharedBanner() {
  return (
    <div className='relative'>
        <img className='w-full' src="/assets/page-header-bg.png" alt="" />
       
           
            <div className='flex absolute top-6 lg:top-30'>
            <img className='w-20 lg:w-64' src="/assets/page-header-shape-1.png" alt="" />
            <div>
                 <p className=' text-lg lg:text-4xl font-semibold'>Product-page</p>
                 <p className='font-semibold lg:text-md text-sm'>Home / <span className='text-[#39B8AD]'>Product Page</span></p>
       
            </div>
            
        </div>
    </div>
  )
}
