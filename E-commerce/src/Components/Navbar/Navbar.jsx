import React from 'react'
import Logo from "../Assets/logo.png"
import CartIcon from "../Assets/cart_icon.png"
import { Link } from 'react-router-dom'


function Navbar() {
    return (
        <div className='flex justify-around bg-white fixed w-full p-2 z-50 shadow-black shadow'>
            <div className='flex items-center gap-2'>
                <img src={Logo} alt="" />
                <p className='text-[#171717] text-[35px] font-semibold'><Link to="/">SHOPPER</Link> </p>
            </div>
            <ul className='flex items-center gap-12 text-gray-500 text-[20px] outlin-none font-semibold'>
                <li className='cursor-pointer'><Link to="/">Shop</Link> </li>
                <li className='cursor-pointer'><Link to="/men">Men</Link> </li>
                <li className='cursor-pointer'><Link to="/women">Women</Link></li>
                <li className='cursor-pointer'><Link to="/kid">Kid</Link></li>
            </ul>
            <div className='flex items-center gap-10'>
                <Link to="/loginSignup"> <button className='bg-green-500 px-4 py-2 rounded cursor-pointer text-amber-50 active:bg-green-700'>Login</button>
                </Link>
                <Link to="/cart">  <img src={CartIcon} alt="" /></Link>
                <div className='w-5 h-5 flex items-center justify-center -mt-9 -ml-13 rounded-full text-[16px] bg-red-500 text-white'>0</div>
            </div>
        </div>
    )
}

export default Navbar
