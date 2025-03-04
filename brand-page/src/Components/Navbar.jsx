import React from 'react'

export default function Navbar() {
  return (
    <>
      <div className=" h-18 flex 2xl:h-28 items-center justify-around mt-3">
        <div>
          <img src="https://images.seeklogo.com/logo-png/9/1/nike-logo-png_seeklogo-99478.png" className="h-20 w-25 2xl:h-30 2xl:w-35 " alt="Logo mage" />
        </div>
        <div className=''>
          <ul className='flex h-20 gap-4 max-sm:hidden items-center text-[18px] font-semibold 2xl:text-[30px]'>
            <li>Menu</li>
            <li>Location</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <button className='bg-red-700 text-white 2xl:text-amber-300 rounded py-2 px-4 2xl:py-4 2xl:px-6 2xl:text-22xl'>Login</button>
      </div>
    </>
  )
}
