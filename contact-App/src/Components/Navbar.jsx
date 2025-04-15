import React from 'react'

function Navbar() {
  return (
    <div className=' h-[70px]  mx-7 my-3 rounded-lg bg-amber-100 '>
      <div className='w-full h-full flex items-center  justify-center'>
        <img className='h-[50px] w-[60px] bg-transparent mr-2' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoFwtBOnRhY_EvmqJupnC_rBd8AemYJ7vjcQ&s" alt="" />
        <h1 className='text-3xl capitalize font-semibold'>firebase contact app</h1>
      </div>
    </div>
  )
}

export default Navbar;
