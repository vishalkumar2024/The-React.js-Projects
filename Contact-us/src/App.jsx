import React from 'react'
import Navbar from './Components/Navbar'
import ContactHead from './Components/ContactHead'
import Hero from './Components/Hero'

export default function App() {
  return (
    <div>
      <Navbar />
      <div className='mx-[9%] mt-3'>
         <ContactHead/>
         <Hero/>
      </div>
    </div>
  )
}
