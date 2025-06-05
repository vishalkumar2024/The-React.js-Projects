
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'
import Footer from './Components/Footer/Footer'
import menBanner from "./Components/Assets/banner_mens.png"
import womenBanner from "./Components/Assets/banner_women.png"
import kidBanner from "./Components/Assets/banner_kids.png"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category="men" banner={menBanner} />} />
        <Route path='/women' element={<ShopCategory category="women" banner={womenBanner} />} />
        <Route path='/kid' element={<ShopCategory category="kid" banner={kidBanner} />} />
        <Route path='/product' element={<Product />}  >
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/loginSignup' element={<LoginSignup />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
