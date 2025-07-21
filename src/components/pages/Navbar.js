import React from 'react'
import Myntralogo from "../../images/Myntralogo.png"
export default function Navbar() {
  return (
   <header class="text-slate-700 container relative mx-auto flex flex-col overflow-hidden px-4 lg:flex-row lg:items-center">
  <a href="#" class="flex items-center whitespace-nowrap text-2xl font-black">
    <span class="mr-1">
      <img src={Myntralogo} />
    </span>
  </a>
  <input type="checkbox" class="peer hidden" id="navbar-open" />
  <label class="absolute top-5 right-5 cursor-pointer lg:hidden" for="navbar-open">
    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 6h16M4 12h16M4 18h16"></path>
    </svg>
  </label>
  <nav aria-label="Header Navigation" class="peer-checked:pt-8 peer-checked:max-h-60 flex max-h-0 w-full flex-col items-center overflow-hidden transition-all lg:ml-24 lg:max-h-full lg:flex-row">
    <ul class="flex w-full flex-col items-center space-y-2 lg:flex-row lg:justify-center lg:space-y-0">
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="#">MEN</a></li>
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="#">WOMEN</a></li>
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="#">KIDS</a></li>
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="#">HOME</a></li>
       <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="#">BEAUTY</a></li>
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="#">GENZ</a></li>
      <li class="lg:mr-12"><a class="rounded text-gray-700 transition focus:outline-none focus:ring-1 focus:ring-blue-700 focus:ring-offset-2 font-bold" href="#">STUDIO</a></li>
    </ul>
   
    <hr class="mt-4 w-full lg:hidden" />
   <div class="border focus-within:border focus-within:ring focus-within:ring-offset-2 my-6 flex h-10 items-center justify-start border-b-2  leading-4 ring-blue-600 w-full lg:w-98">
    <button type="button" class="peer-focus:mr-2 z-20 cursor-pointer text-blue-600 outline-none duration-150 hover:scale-125">
    <svg class="h-6 w-6 stroke-2" viewBox="0 0 32 32" fill="none">
      <circle cx="15" cy="14" r="8" stroke="currentColor" fill="transparent"></circle>
      <line x1="21.1514" y1="19.7929" x2="26.707" y2="25.3484" stroke="currentColor" fill="transparent"></line>
    </svg>
  </button>
  <input placeholder="Search for products and brands" value="" class="peer ml-2 flex-grow bg-transparent text-gray-500 outline-none" />
</div>

  </nav>
</header>

  )
}
