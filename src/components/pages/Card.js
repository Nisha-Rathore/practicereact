import React from "react";
import { FaStar } from "react-icons/fa";

export const Card = ({ item }) => {
  // Arrow function to get image URL
  const getImage = () => {
    // Example: use item.image if available, otherwise fallback
    return item.image;
  };

  return (
    <>
    <div class="relative flex w-full max-w-xs flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
        <button
          type="button"
        class="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl"
          style={{ border: "none", background: "none", padding: 0 }}
          aria-label={item.title}
      >
        <img
            class="object-cover transition-transform duration-300 hover:scale-110 w-full h-full"
            src={getImage()}
            alt="sneaker"
        />
        <span class="absolute top-0 left-0 m-2 rounded-full bg-black px-2 text-center text-sm font-medium text-white">
          39% OFF
        </span>
        </button>
      <div class="mt-4 px-5 pb-5">
          <button
            type="button"
            class="text-xl tracking-tight text-slate-900"
            style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
            aria-label={item.title}
          >
            <h5>{item.title}</h5>
          </button>
        <div class="mt-2 mb-5 flex items-center justify-between">
          <p>
            <span class="text-3xl font-bold text-slate-900">{item.price}</span>
            <span class="text-sm text-slate-900 line-through">{item.mrp}</span>
          </p>
          <div class="flex items-center">
            {item.rating >= 0 &&
              Array.from({ length: Math.floor(item.rating) }).map(
                (_, index) => <FaStar key={index} className="text-yellow-500" />
              )}
            <span class="mr-2 ml-3 rounded bg-yellow-200 px-2.5 py-0.5 text-xs font-semibold">
              {item.rating.toFixed(1)}
            </span>
          </div>
        </div>
          <button
            type="button"
          class="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300"
            aria-label="Add to cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="mr-2 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to cart
          </button>
        </div>
      </div>
    </>
  );
};
