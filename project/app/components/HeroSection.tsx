import React from 'react'

const HeroSection = () => {
  return (
    <div className="h-[60vh] mt-2 pt-24 px-4 sm:px-8 md:px-12 w-full gap-2 flex flex-col items-start justify-center ">
      <p className="text-xs sm:text-sm font-extrabold text-white">👋🏻 HEY, I AM ERICA</p>
      <p className="text-5xl sm:text-6xl md:text-7xl flex w-full lg:text-[5rem] bg-gradient-to-r from-yellow-400 via-pink-500  to-purple-600 bg-clip-text text-transparent  leading-tight  pe-[500px]">
        A YOUNG CREATIVE DESIGNER BASED IN SAN DIEGO
      </p>
      <div className='text-white flex gap-3'>
       <button className='border-1 p-2 rounded-3xl mt-3  px-4 cursor-pointer'>My Work</button>
       <button className='border-1 p-2 rounded-3xl mt-3  px-4 text-black bg-white cursor-pointer'>Let &apos; Talk</button>
      </div>
    </div>
  )
}

export default HeroSection