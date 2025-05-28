
import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import Cart from './Pages/Cart'
import LoginSignup from './Pages/LoginSignup'


function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/men' element={<ShopCategory category="men" />} />
        <Route path='/women' element={<ShopCategory category="women" />} />
        <Route path='/kid' element={<ShopCategory category="kid" />} />
        <Route path='/product' element={<Product />} />
        <Route path='/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/loginSignup' element={<LoginSignup />} />
      </Routes>
    </>
  )
}

export default App
