import React from 'react'
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';

export default function App() {
  return (
    <>
      <Navbar />
      <div className="h-screen flex  max-xl:flex-col ">
     <Hero/>
      </div>
    </>
  )
}
