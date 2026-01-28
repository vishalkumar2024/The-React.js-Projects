
import './App.css'
import Navbar from './Components/Navbar'
import { Routes, Route } from "react-router-dom"
import Shop from './Pages/Shop'
import ShopCategory from './Pages/ShopCategory'
import Product from './Pages/Product'
import AboutPage from "./Pages/AboutPage"
import Cart from './Pages/Cart'
import Footer from './Components/Footer'
import menBanner from "./Components/Assets/Banner-mens.png"
import womenBanner from "./Components/Assets/Banner-women.png"
import kidBanner from "./Components/Assets/banner-kids.png"
import Login from './Pages/LoginPage'
import Signup from './Pages/SignupPage'
import ContactPage from './Pages/ContactPage'
import AllProductsPage from './Pages/AllProductsPage'


function App() {

  return (
    <div className=' overflow-hidden'>
     {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path='/about' element={<AboutPage/>} />
        <Route path='/contact' element={<ContactPage/>} />
        <Route path='/allproducts' element={<AllProductsPage/>} />
        <Route path='/men' element={<ShopCategory category="men" banner={menBanner} />} />
        <Route path='/women' element={<ShopCategory category="women" banner={womenBanner} />} />
        <Route path='/kid' element={<ShopCategory category="kid" banner={kidBanner} />} />
        <Route path='/product' element={<Product />}  >
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
