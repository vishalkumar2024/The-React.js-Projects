import React from 'react'
import newCollections from "../Components/Assets/new_collections"
import Item from '../Components/Item'
function NewCollections() {
    return (
        <div id="newCollections" className='flex flex-col items-center gap-2 pb-16 '>
            <div className='text-center  flex items-center flex-col'>
                <h1 id="small-screen" className='uppercase text-[#171717] text-[50px] font-bold max-lg:text-[38px] '>new collections</h1>
                <hr className='w-[200px] h-[6px] rounded bg-[#252525] max-lg:w-[140px] max-md:w-[110px] max-md:h-[4px] ' />
            </div>
            <div id="newCollection-item" className='grid grid-cols-4 mt-7 gap-5 max-lg:gap-1 max-md:grid-cols-2 max-sm:gap-3'>
                {newCollections.map((item, i) => {
                    return <div className=''>
                        <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    </div>
                })}
            </div>
        </div>
    )
}

export default NewCollections
