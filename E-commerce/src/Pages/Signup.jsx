
import { Link } from 'react-router-dom'

function Signup() {
    return (
        <div>
            <div id="login" className='w-[100%]   border-b bg-linear-to-b from-[#94f5e5] to-[#e1ffea22]  pt-[120px] pb-32'>
                <div id="login-inner" className='w-[550px] h-fit rounded  bg-white/70 m-auto py-5 px-15 max-sm:w-[450px]'>
                    <h1 className='my-4 mx-0 text-3xl font-semibold capitalize'>Sign up</h1>
                    <form action="/signup" method="post" className='flex flex-col gap-7  '>
                        <input
                            type="text"
                            name="name"
                            placeholder='Your name'
                            id="name"
                            className='w-[100%] rounded-[4px] h-[52px] pl-5 outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[18px]'
                            required
                        />

                        <input
                            type="email"
                            name='email'
                            placeholder='Your Email'
                            id="email"
                            className='w-[100%] rounded-[4px] h-[52px] pl-5 outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[18px]'
                            required
                        />

                        <input
                            type="password"
                            name='password'
                            placeholder='Your password'
                            id="password"
                            className='w-[100%] rounded-[4px] h-[52px] pl-5 outline-none border border-[#c9c9c9] text-[#5c5c5c] text-[18px]'
                            required
                        />
                        <input
                            type='submit'
                            value="Signup"
                            id="submit"
                            className='w-[100%] rounded-[8px] h-[60px] text-white bg-[#ff4141] mt-1 border-none text-[24px] font-semibold cursor-pointer'
                            
                        />
                    </form>

                    <p id="para1" className='mt-4 text-[#5c5c5c] text-[18px] font-semibold'>Alreay have an account? <Link to="/login" className='text-amber-600 font-semiboldbold underline '>Login here</Link></p>
                    <div className='flex items-center mt-6 gap-5 text-[#5c5c5c] text-4'>
                        <input type="checkbox" className='cursor-pointer' name='' id='' />
                        <p id="para2">By continuing, i agree to the terms of use and privacy policy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup
