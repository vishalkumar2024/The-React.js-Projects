
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import Shop from './Pages/Shop'
function App() {

  return (
    <>
       <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
      </Routes>
    </>
  )
}

export default App
