'use client'
import Image from "next/image";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import { Montserrat } from "next/font/google";
import Gradient from "./components/Gradient";
import LoadingScreen from "./components/LoadingScreen";

export default function Home() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
   
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
     {loading && <LoadingScreen />}
       {
        !loading && 
        <div className="bg-black">
          <Header />
          <HeroSection />
          <Gradient />
        </div>
       }
    </>
      
    
  );
}
