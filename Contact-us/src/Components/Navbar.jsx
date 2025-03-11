import React from 'react'

export default function Navbar() {
    return (
        <div className='h-20 flex justify-between items-center container pt-3'>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRk2FWjNKZSqGDvWPEPBsHzZa6Cvme2s4Wr_Q&s" className="w-25 h-25 ml-14" alt="Logo Image" />

                <ul className='flex gap-10 text-[1.1em] mr-12 font-semibold'>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
        </div>
    )
}
