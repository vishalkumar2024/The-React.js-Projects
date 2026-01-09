import React from 'react'
import dataProducts from "../Components/Assets/related"
import Item from '../Components/Item'


function RelatedProducts(props) {
    const { product } = props
    return (
        <div className='flex bg-green-300 flex-col items-center gap-3 pb-[50px] mt-12 mb-5 '>
            <h1 className='text-[#171717] text-[50px] font-stretch-semi-condensed max-sm:text-[32px] max-lg:text-[30px]'>Related Products</h1>
            <hr className='w-[200px] h-[6px] rounded bg-[#252525]  max-lg:w-[130px] max-md:w-[100px] max-md:h-[3px]  ' />
            <div id="relatedProduct-item" className='flex gap-7 mt-12 max-lg:gap-3 max-md:grid max-md:grid-cols-2'>
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
