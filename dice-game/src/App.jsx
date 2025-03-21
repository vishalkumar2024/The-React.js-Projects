import React, { useState } from 'react'
import LandingPage from './Components/LandingPage'
import Gameplay from './Components/Gameplay';

export default function App() {
  const [display, setDisplay] = useState(false)
  function displayGame() {
    setDisplay(true);
  }
  return (
    <div>
      {display ? <Gameplay /> : <LandingPage toggle={displayGame} />}
    </div>
  )
}
