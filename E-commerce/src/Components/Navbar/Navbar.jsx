import React from 'react'
import Logo from "../Assets/logo.png"
import CartIcon from "../Assets/cart_icon.png"

function Navbar() {
    return (
        <div className='flex justify-around p-4 shadow-black shadow'>
            <div className='flex items-center gap-2'>
                <img src={Logo} alt="" />
                <p className='text-[#171717] text-[35px] font-semibold'>SHOPPER</p>
            </div>
            <ul className='flex items-center gap-12 text-gray-500 text-[20px] font-semibold'>
                <li className='cursor-pointer'>Shop</li>
                <li className='cursor-pointer'>Men</li>
                <li className='cursor-pointer'>Women</li>
                <li className='cursor-pointer'>Kid</li>
            </ul>
            <div className='flex items-center gap-10'>
                <button className='bg-green-500 px-4 py-2 rounded cursor-pointer text-amber-50 active:bg-green-700'>Login</button>
                <img src={CartIcon} alt="" />
                <div className='w-5 h-5 flex items-center justify-center -mt-9 -ml-13 rounded-full text-[16px] bg-red-500 text-white'>0</div>
            </div>
        </div>
    )
}

export default Navbar
