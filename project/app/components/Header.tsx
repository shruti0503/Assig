'use client'
import React, { useState } from 'react'
import { Montserrat } from "next/font/google";
import { CrossIcon } from 'lucide-react';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  display: 'swap',
});

const headerOptions = ["ABOUT ME", "PORTFOLIO", "SERVICES", "TESTIMONIALS"]

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={`w-full text-sm  sticky top-0 z-50  flex ${montserrat.className} bg-[#000000]`}>
      <nav className=" w-full flex lg:px-10  px-2    items-center justify-between  py-3">
   
        <div className="font-bold text-2xl tracking-wider text-white">
           ERICAJONES
        </div>
      
        <ul className="hidden md:flex gap-8 list-none m-0 p-0">
          {headerOptions.map(option => (
            <li
              key={option}
              className="cursor-pointer font-medium text-white hover:text-yellow-400 transition"
            >
              {option}
            </li>
          ))}
        </ul>
       
        <button
          className="md:hidden text-white text-3xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          &#9776;
        </button>
    
        <button className="hidden md:block border border-yellow-400 text-yellow-400 px-5 py-2
        rounded-2xl transition ml-6">
          GET IN TOUCH
        </button>
      </nav>
 
      {menuOpen && (
  <div
    className="md:hidden fixed left-0  w-full px-4 pb-4 z-50"
    style={{
      background:
        "linear-gradient(180deg, rgb(0, 0, 0) 60%, rgb(156, 53, 109) 73.85%, rgb(249, 120, 76) 80%, rgb(252, 214, 139) 90%, rgb(255, 250, 239) 100%)",
    }}
  >
    <ul className="flex flex-col h-full justify-between gap-4 mt-3 list-none m-0 p-0">
     
      {headerOptions.map((option,index) => (
        <li
          key={option}
          className="cursor-pointer p-3 font-medium text-lg text-white hover:text-yellow-400 transition"
        >
          <div className='flex justify-between'>
          
            {option}
            {
              index===0 && <CrossIcon  className='text-white cursor-pointer' onClick={()=>setMenuOpen(false)} />
            }
          </div>
          
        </li>
      ))}
      <button className="w-full mt-4 border text-sm bg-white px-5 py-2 rounded-4xl text-black hover:text-black transition">
        GET IN TOUCH
      </button>
    </ul>
  </div>
)}
    </header>
  )
}

export default Header