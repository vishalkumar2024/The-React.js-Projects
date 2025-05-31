import React from 'react'
import dataProduct from "../Assets/data"
import Item from '../Items/Item'

function Popular() {
    return (
        <div className='flex flex-col items-center gap-2 mt-1.5 h-[90vh]'>
            <h1 className='uppercase text-[#171717] text-[50px] font-bold'>popular in women</h1>
            <hr className='w-[200px] h-[6px] rounded bg-[#252525]  '/>
            <div className='flex mt-[50px] gap-8'>
                {dataProduct.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default Popular;
