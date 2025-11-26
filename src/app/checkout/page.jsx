"use client";
import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";

export default function CheckoutPage() {
  const cart = useSelector((state) => state.cart.items);
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
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-6">Checkout</h1>

      <div className="space-y-4 mb-6">
        {cart.map((item) => (
          <div
            key={item.course_id}
            className="flex justify-between items-center p-4 border rounded-lg"
          >
            <span>{item.title} x {item.quantity}</span>
            <span>${item.totalPrice.toFixed(2)}</span>
          </div>
        ))}
      </div>

      <div className="flex justify-between text-lg font-semibold mb-6">
        <span>Total:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>

      <button className="w-full cursor-pointer bg-teal-500 text-white py-3 rounded-lg hover:bg-teal-600 transition">
        Complete Payment
      </button>
    </div>
  );
}
