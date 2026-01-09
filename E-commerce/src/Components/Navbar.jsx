import React, { useContext, useState } from 'react'
import Logo from "../Components/Assets/logo.png"
import CartIcon from "../Components/Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import menu from "../Components/Assets/menu.svg";

function Navbar(props) {

    const { getTotalItem } = useContext(ShopContext);
    const [menuBar, setMenuBar] = useState(false);

    return (
        <div className={`flex justify-around fixed bg-[#d1fff7] w-full p-2 z-50 shadow-sky-200 shadow max-md:justify-between`}>
            <div className='w-[40%]  flex justify-center items-center gap-2 '>
                <img src={Logo} alt="Logo" className='max-lg:size-12' />
                <p className='text-[#171717] text-[35px] max-lg:text-[26px] font-semibold'><Link to="/">SHOPPER</Link> </p>
            </div>
            <div className=' w-[60%] flex gap-40  max-xl:gap-32 max-lg:gap-20 max-md:hidden'>
                <ul className='w-[50%] flex items-center gap-10 text-gray-500 text-[20px] outlin-none font-semibold max-lg:gap-6'>
                    <li className='cursor-pointer active:text-red-300 max-lg:text-[16px]  '><Link to="/">Shop</Link> </li>
                    <li className='cursor-pointer  active:text-red-300 max-lg:text-[16px] '><Link to="/men">Men</Link> </li>
                    <li className='cursor-pointer active:text-red-300 max-lg:text-[16px] '><Link to="/women">Women</Link></li>
                    <li className='cursor-pointer active:text-red-300 max-lg:text-[16px] '><Link to="/kid">Kid</Link></li>
                </ul>
                <div className='flex items-center gap-10 max-lg:gap-6'>
                    <Link to="/login"> <button onClick={window.scrollTo(0, 0)} className='bg-green-500 px-4 py-2 max-lg:py-1.5 max-lg:px-3rounded cursor-pointer text-amber-50 active:bg-green-700'>Login</button>
                    </Link>
                    <Link to="/cart">  <img src={CartIcon} alt="Cart Image" className='max-lg:size-8' /></Link>
                    <div className='w-5 h-5 flex items-center justify-center -mt-9 -ml-13 rounded-full text-[16px] bg-red-500 text-white
                        max-lg:-mt-6 max-lg:w-[16px] max-lg:h-[16px] max-lg:text-[11px] max-lg:-ml-8 '>{getTotalItem()}</div>
                </div>
            </div>

            {/* Two divs for mobile menu */}
            <div className=' py-2'>
                <div id="nav-icons" className='hidden  max-md:flex gap-8 items-center mx-4 w-[100px] cursor-pointer '>
                    <img src={menu} alt="mobile Menu" onClick={!menuBar ? () => setMenuBar(true) : () => setMenuBar(false)} />

                    <Link to="/cart">  <img src={CartIcon} alt="Cart Image" className='max-lg:size-8' /></Link>
                    <div id="red-box" className='w-[15px] h-[15px] flex items-center justify-center -mt-6 -ml-10 rounded-full text-[10px] bg-red-500 text-white'>{getTotalItem()}</div>
                </div>

                {/* Div for small screens */}
                <div id="mobileMenu" className={`${menuBar ? "fixed" : "hidden"} bg-[#74f5dfe7] p-2.5 mt-4.5  md:hidden max-sm:w-[120px] `}>
                    <ul>
                        <Link to="/men" onClick={()=>setMenuBar(false)}> <li className='h-10 w-[120px] py-2 px-3 hover:bg-[#d4fbf3] max-sm:w-[100%] '>Men</li></Link>
                        <Link to="/women" onClick={()=>setMenuBar(false)}><li className='h-10 w-[120px] py-2 px-3 hover:bg-[#d4fbf3] max-sm:w-[100%] '>Women</li></Link>
                        <Link to="/kid" onClick={()=>setMenuBar(false)}><li className='h-10 w-[120px] py-2 px-3 hover:bg-[#d4fbf3] max-sm:w-[100%] '>Kids</li></Link>

                        <Link to="/login" onClick={()=>setMenuBar(false)}><li className='bg-green-500 text-white cursor-pointer py-2 max-lg:py-1.5 max-lg:px-3rounded  active:bg-green-700 w-[120px] px-3  max-sm:w-[100%] '>Login</li></Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
