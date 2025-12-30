import React from 'react'
import { Link } from 'react-router-dom'

function Item(props) {
    return (
        <div className='w-[230px] m-2  rounded-2xl transform  hover:scale-105 transition duration-500  max-xl:w-[220px] max-lg:w-[165px] max-md:w-[300px] max-sm:hover:scale-100 '>
            <Link to={`/product/${props.id}`}>   <img src={props.image} className='max-sm:h-[300px] max-sm:ml-5' onClick={window.scrollTo(0,0)} alt="" /> </Link>
            <p className='py-2 px-0 text-emerald-800'>{props.name}</p>
            <div className='flex gap-5'>
                <div className='text-[#374151] text-[18px] font-bold '>
                    ${props.new_price}
                </div>
                <div className='text-[#8c8c8c] text-[18px] font-semibold line-through'>
                    ${props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
