import React, { useContext, useRef, useState } from 'react'
import Logo from "../Components/Assets/logoshoping.png"
import './Button.css'
import CartIcon from "../Components/Assets/cart_icon.png"
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import menu from "../Components/Assets/menu.svg";
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react';


function Navbar() {

    const { getTotalItem } = useContext(ShopContext);
    const [menuBar, setMenuBar] = useState(false);

    const navRef = useRef(null);

    const timeLine = gsap.timeline();
    useGSAP(() => {

        // Navbar slide down
        gsap.from(navRef.current, {
            y: -80,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
        });

        timeLine.from("#logoImage", {
            y: -20,
            opacity: 0,
            duration: 0.7,
            delay: 0.2
        })

        timeLine.from("#id", {
            y: -20,
            opacity: 0,
            duration: 1,
            stagger: 0.2,

        })
        gsap.from("#loginIcon", {
           scale: 0,
            duration: 0.6,
            delay: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,

        })
        gsap.from("#cart", {         
            scale: 0,
            duration: 0.6,
            delay: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.2,
            
        })


    })


    return (
        <div ref={navRef} className="flex justify-around fixed bg-[#d1fff7] w-full z-50 shadow-sky-200 shadow max-md:justify-between">

            <div id="logoImage" className='w-[40%] flex justify-center items-center gap-2 '>
                <img src={Logo} alt="Logo" className='w-20 h-18 max-lg:size-12' />
                <p className='text-[#171717] text-[30px] max-lg:text-[26px] font-semibold'><Link to="/">ECart</Link> </p>
            </div>

            <div className=' w-[60%] flex gap-40  max-xl:gap-32 max-lg:gap-20 max-md:hidden'>
                <ul className='w-[50%] flex items-center gap-10 text-gray-500 text-[20px] outlin-none font-semibold max-lg:gap-6'>
                    <li id="id" className='cursor-pointer active:text-red-300   max-lg:text-[16px]  '><Link to="/">Home</Link> </li>
                    <li id="id" className='cursor-pointer active:text-red-300   max-lg:text-[16px] hover:translate-y-[10px] '><Link to="/allproducts">Products</Link></li>
                    <li id="id" className='cursor-pointer  active:text-red-300   max-lg:text-[16px] hover:translate-y-[10px] '><Link to="/about">About</Link> </li>
                    <li id="id" className='cursor-pointer active:text-red-300   max-lg:text-[16px] hover:translate-y-[10px]'><Link to="/contact">Contact</Link></li>
                </ul>
                <div className='flex items-center gap-10 max-lg:gap-6'>
                    <Link id="loginIcon" to="/login"> <button onClick={window.scrollTo(0, 0)} className=' px-4 py-2 max-lg:py-1.5 max-lg:px-3rounded cursor-pointer  active:bg-green-700'>Login</button>
                    </Link>
                    <Link id="cart" to="/cart">  <img src={CartIcon} alt="Cart Image" className='size-8 max-lg:size-8' /></Link>
                    <div id="cart" className='w-4 h-4 flex items-center justify-center -mt-6 -ml-12 rounded-full text-[14px] bg-red-500 text-white
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
                        <Link to="/allproducts" onClick={() => setMenuBar(false)}> <li className='h-10 w-[120px] py-2 px-3 hover:bg-[#d4fbf3] max-sm:w-[100%] '>Products</li></Link>
                        <Link to="/about" onClick={() => setMenuBar(false)}><li className='h-10 w-[120px] py-2 px-3 hover:bg-[#d4fbf3] max-sm:w-[100%] '>About</li></Link>
                        <Link to="/contact" onClick={() => setMenuBar(false)}><li className='h-10 w-[120px] py-2 px-3 hover:bg-[#d4fbf3] max-sm:w-[100%] '>Contact</li></Link>

                        <Link to="/login" onClick={() => setMenuBar(false)}><li className='bg-green-500 text-white cursor-pointer py-2 max-lg:py-1.5 max-lg:px-3rounded  active:bg-green-700 w-[120px] px-3  max-sm:w-[100%] '>Login</li></Link>
                    </ul>
                </div>

            </div>
        </div>
    )
}

export default Navbar
