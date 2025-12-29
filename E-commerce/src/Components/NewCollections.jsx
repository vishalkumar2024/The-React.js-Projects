import React from 'react'
import newCollections from "../Components/Assets/new_collections"
import Item from '../Components/Item'
function NewCollections() {
    return (
        <div className='flex flex-col items-center  gap-2 mb-16 '>
            <div className='text-center  flex items-center flex-col'>
            <h1 className='uppercase text-[#171717] text-[50px] font-bold'>new collections</h1>
            <hr className=' w-[200px] h-[6px] mt-3    rounded bg-[#252525]  ' />
             </div>
            <div className='grid grid-cols-4 mt-7 gap-5'>
                {newCollections.map((item, i) => {
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                })}
            </div>
        </div>
    )
}

export default NewCollections
