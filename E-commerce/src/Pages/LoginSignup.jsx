import React from 'react'

function LoginSignup() {
  return (
    <div className='w-[100%]   border-b  bg-[#f5d6f7] pt-[100px] pb-32'>
      <div className='w-[550px] h-fit rounded  bg-white m-auto py-5 px-15'>
        <h1 className='my-4 mx-0 text-3xl font-semibold capitalize'>Sign up</h1>
        <div className='flex flex-col gap-7  '>
          <input type="text"  placeholder='Your name' className='w-[100%] h-[52px] pl-5 outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[18px]' />
          <input type="email" placeholder='Your Email' className='w-[100%] h-[52px] pl-5 outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[18px]' />
          <input type="password" placeholder='Your password'className='w-[100%] h-[52px] pl-5 outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[18px]' />
        </div>
        <button className='w-[100%] h-[60px] text-white bg-[#ff4141] mt-7 border-none text-[24px] font-semibold cursor-pointer'>Continue</button>
        <p className='mt-5 text-[#5c5c5c] text-[18px] font-semibold'>Alreay have an account? <span className='text-[#ff4141] font-semiboldbold underline '>Login here</span></p>
        <div className='flex items-center mt-6 gap-5 text-[#5c5c5c] text-4'>
          <input type="checkbox" name='' id='' />
          <p>By continuing, i agree to the terms of use and privacy policy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup
