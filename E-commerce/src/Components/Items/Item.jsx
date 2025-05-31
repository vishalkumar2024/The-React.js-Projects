import React from 'react'

function Item(props) {
    return (
        <div className='w-[250px] m-2 transform scale-100 hover:scale-105 transition duration-600'>
            <img src={props.image} alt="" />
            <p className='py-2 px-0 '>{props.name}</p>
            <div className='flex gap-5'>
                <div className='text-[#374151] text-[18px] font-bold '>
                    {props.new_price}
                </div>
                <div className='text-[#8c8c8c] text-[18px] font-semibold '>
                    {props.old_price}
                </div>
            </div>
        </div>
    )
}

export default Item
