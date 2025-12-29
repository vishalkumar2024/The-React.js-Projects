import React from 'react'
import dataProducts from "../Components/Assets/related"
import Item from '../Components/Item'


function RelatedProducts(props) {
    const { product } = props
    return (
        <div className='flex flex-col items-center gap-3 h-[90vh] mt-12 mb-5'>
            <h1 className='text-[#171717] text-[50px] font-stretch-semi-condensed'>Related Products</h1>
            <hr className='w-[200px] h-[6px] rounded bg-[#252525]' />
            <div className='flex gap-7 mt-12'>
                {dataProducts.map((item, i) => {
                    if (product.category === item.category) {
                        return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
                    }
                })}
            </div>
        </div>
    )
}

export default RelatedProducts
