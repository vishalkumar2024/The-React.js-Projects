import React, { useContext } from 'react'
import starIcon from "../Components/Assets/star_icon.png"
import starDullIcon from "../Components/Assets/star_dull_icon.png"
import { ShopContext } from '../Context/ShopContext'


function productDisplay(props) {

    const { product } = props
    const {addToCart} = useContext(ShopContext)
    
    return (
        <div className='flex my-2 ml-[150px] mb-[100px]'>
            {/* left part */}
            <div className='flex gap-4  '>
                <div className='flex flex-col gap-4'>
                    <img src={product.image} className='h-[150px] w-[230px]' alt="" />
                    <img src={product.image} className='h-[150px] w-[230px]' alt="" />
                    <img src={product.image} className='h-[150px] w-[230px]' alt="" />
                </div>
                <div>
                    <img src={product.image} className='w-[750px] h-[480px]' alt="" />
                </div>
            </div>

            {/* Right part*/}
            <div className='flex  flex-col my-0 mx-[50px]'>
                <h1 className='text-[#3d3d3d] text-[30px] font-semibold'>{product.name}</h1>
                <div className='flex items-center gap-[5px] mt-3 text-[#1c1c1c] text-[1rem]'>
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starIcon} alt="" />
                    <img src={starDullIcon} alt="" />
                    <p>(122)</p>
                </div>
                <div className='flex my-5 mx-0 gap-7 text-6 font-semibold'>
                    <div className='text-[#818181] line-through'>${product.old_price}</div>
                    <div className='text-[#2ac802]'>${product.new_price}</div>
                </div>
                <div >
                    <h1 className=' text-[#656565] text-5 font-semibold'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur accusamus dolor porro facilis impedit a beatae id ducimus alias aliquam.
                    </h1>
                    <div className='flex flex-col gap-5 my-4 mx-0'>
                        <h1>Select Size</h1>
                        <div className='flex gap-2'>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer'>S</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer'>M</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer'>L</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer'>XL</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer'>XXL</div>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className='py-3 px-8 w-[200px] rounded text-[1rem] font-semibold bg-[#ff4141] text-white mb-[10px] border-none outline-none cursor-pointer'>ADD TO CART</button>

                <p className='mt-3'><span className='font-semibold'>Category: </span>{product.category}, T-shirt, Crop-Top</p>
                <p className='mt-3'><span className='font-semibold'>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default productDisplay
