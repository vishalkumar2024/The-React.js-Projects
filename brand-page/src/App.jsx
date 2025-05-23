import React from 'react'
import "./App.css"
import Navbar from "./Components/Navbar";
import Hero from './Components/Hero';
import { useState } from 'react';

export default function App() {
  const [theme, setTheme] = useState("dark");

  function changeTheme() {
    setTheme("dark")
  };

  return (
    <>
      <Navbar />
      <div  className={`flex max-xl:flex-col bg-${theme=="light"?"white":"black"}`} id='maindiv'>
        <Hero />
      </div>
    </>
  )
}
