"use client";
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrimentByAmount } from '@/app/Redux/counterslice'

export default function Count() {
  const count = useSelector((state)=>state.counter.value);
  const dispatch = useDispatch()
  return (
    <div>
      <p>count : {count}</p>
      <div className='flex gap-4'>
       <button className='border border-gray-300 p-2 rounded-md btn crusor-pointer ' onClick={()=>dispatch(increment())}>increment</button>
       <button className='border border-gray-300 p-2 rounded-md btn crusor-pointer ' onClick={()=>dispatch(decrement())}>decreament</button>
       <button className='border border-gray-300 p-2 rounded-md btn crusor-pointer ' onClick={()=>dispatch(incrimentByAmount(5))}>incremnet by 5</button>
        </div>
    </div>
  )
}
