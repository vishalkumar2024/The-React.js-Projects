import React from 'react'

function Item(props) {
    return (
        <div className='w-[230px] m-2 rounded-2xl transform  hover:scale-105 transition duration-600'>
            <img src={props.image} alt="" />
            <p className='py-2 px-0 text-emerald-900'>{props.name}</p>
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
