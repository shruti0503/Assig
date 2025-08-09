import Image from 'next/image';
import React from 'react'

const logos = [

  <svg key="logo1" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" fill="none" />
    <path d="M20 33L28 41L44 25" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
  </svg>,

  <svg key="logo2" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <polygon points="32,8 56,56 8,56" stroke="white" strokeWidth="4" fill="none" />
  </svg>,

  <svg key="logo3" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="32" r="30" stroke="white" strokeWidth="4" fill="none" />
    <path d="M20 48L32 16L44 48H38L32 35L26 48H20Z" fill="white" />
  </svg>,

  <svg key="logo4" width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 4L39 24H60L42 38L48 58L32 44L16 58L22 38L4 24H25L32 4Z" stroke="white" strokeWidth="4" fill="none" />
  </svg>,
];

const LogoDisplay = () => {
  return (
    <div className='mb-10' style={{ display: 'flex', width:"100%",  justifyContent:"space-around", gap: '20px', padding: '20px' }}>
      {logos.map((LogoSVG) => (
        <div key={LogoSVG.key} style={{ width: 64, height: 64 }}>
          {LogoSVG}
        </div>
      ))}
    </div>
  );
};



const Gradient = () => {
  return (
    <div
      className="w-full flex flex-col items-center z-10"
      style={{
        paddingTop: "400px",
        background:
          "linear-gradient(348deg, rgb(255, 250, 239) 53.53%, rgb(252, 214, 139) 58.59%, rgb(249, 120, 76) 66.72%, rgb(156, 53, 109) 73.85%, rgb(0, 0, 0) 80.83%)",
      }}
    >
      <div className="w-full flex justify-center py-8">
        <LogoDisplay />
      </div>
      <div className="flex flex-col md:flex-row w-full max-w-6xl mt-8 md:mt-32">
        <div className="flex-1 flex justify-center items-center">
          <Image
            alt="image"
            className="rounded-full mb-10 shadow-xl"
            style={{
              boxShadow: `
                -10px 15px 40px #FEFAEE,
                -20px 25px 50px #FCD68B,
                -30px 35px 60px #F9784C,
                -40px 45px 70px #9C356D
              `,
            }}
            src="/image.png"
            width={350}
            height={350}
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-start px-6 py-8">
          <p className="text-orange-400 font-extrabold">ABOUT</p>
          <p className="text-3xl md:text-5xl font-bold text-black">
            Crafting UNIQUE BRAND EXPERIENCES SINCE 2014
          </p>
          <p className="font-light text-black text-md mt-4">
            With a Visual Arts degree, my journey began in graphic design, crafting logos and marketing materials. Video editing followed, where meticulous attention to detail set my work apart, and I ventured into 3D modeling for immersive experiences.
          </p>
          <button className='border-1 p-2 rounded-3xl mt-3  px-3 cursor-pointer'>Schedule a call</button>
        </div>
      </div>
    </div>
  );
};
export default Gradient