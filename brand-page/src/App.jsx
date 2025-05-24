import React from 'react'
import "./App.css"
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState(false);

  function changeTheme() {
    if (theme) {
      setTheme(false)

    } else {
      setTheme(true)
    }
  };
   
  return (
    <>
      <Navbar  theme={theme}/>
      <div className={`flex max-xl:flex-col ${theme ? 'bg-gray-900 text-white' : ' text-black'}`}>
        <Hero changeTheme={changeTheme} />
      </div>
    </>
  )
}
