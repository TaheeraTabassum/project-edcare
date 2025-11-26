"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "@/app/Redux/cartSlice";
import Link from "next/link";

export default function CartPage() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart.items);
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);
  const totalPrice = useSelector((state) => state.cart.totalPrice);

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h1 className="text-2xl font-bold mb-4">Your cart is empty</h1>
        <Link href="/courses" className="text-teal-500 underline">
          Browse Courses
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div
              key={item.course_id}
              className="flex items-center justify-between p-4 border rounded-lg"
            >
              <div className="flex items-center gap-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-lg"
                />
                <div>
                  <h2 className="font-semibold text-lg">{item.title}</h2>
                  <p className="text-gray-600">Instructor: {item.instructor}</p>
                  <p className="text-gray-600">Quantity: {item.quantity}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-semibold">${item.totalPrice.toFixed(2)}</p>
                <button
                  onClick={() => dispatch(removeFromCart(item.course_id))}
                  className="mt-2 text-red-500 hover:underline text-sm"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Cart Summary */}
        <div className="p-6 border rounded-lg shadow-md bg-white h-fit">
          <h2 className="text-xl font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Total Items:</span>
            <span>{totalQuantity}</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Total Price:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>
          <Link href="/checkout">
          <button className="w-full bg-teal-500 text-white py-2 rounded-lg cursor-pointer hover:bg-teal-600 transition">
            Proceed to Checkout
          </button></Link>
        </div>
      </div>
    </div>
  );
}
