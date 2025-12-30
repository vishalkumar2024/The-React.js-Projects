import React from 'react'

function NewsLetter() {
    return (
        <div id="newslater" className='w-[80%] py-20 bg-linear-to-b from-[#b2f5ea] to-[#e1ffea22] flex justify-center items-center flex-col gap-7 m-auto px-[140px] mb-[150px] max-md:w-[90%] max-md:px-[100px] max-sm:px-[60px] max:sm:py-[10px]  '>

            <h1 className='text-[#454545] capitalize text-[50px] font-semibold max-lg:text-[35px] max-md:text-[30px] max-sm:text-[25px] '>Get exclusive offers on your email</h1>
            <p className='text-[#454545] text-[20px] font-mono max-lg:text-[19px] max-md:text-[17px] max-sm:text-[16px]'>Subscribe to our newsletter and stay updated</p>
            <form
                action="/newslater"
                method="post"
                id=""
                className='flex items-center justify-between w-[730px] h-[70px] text-white rounded-4xl border border-[#b9b2b2] max-lg:w-[580px] max-lg:h-[50px] max-md:w-[450px] max-sm:w-[370px] max-sm:h-[40px] '>
                <input
                    type="text"
                    placeholder='Enter your email'
                    className='w-[500px] ml-7 border-none outline-none text-[#616161] text-5'
                />
                <input
                    type="submit"
                    value="Subscribe"
                    className='w-[210px] h-[70px] rounded-4xl bg-black text-white text-[25px] cursor-pointer max-lg:w-[200px] max-lg:h-[50px] max-lg:text-[20px] max-sm:h-[40px] max-sm:text-[14px] max-sm:w-[250px] '
                />
            </form>
        </div>
    )
}

export default NewsLetter
