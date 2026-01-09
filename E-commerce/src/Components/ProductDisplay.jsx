import React, { useContext } from 'react'
import starIcon from "../Components/Assets/star_icon.png"
import starDullIcon from "../Components/Assets/star_dull_icon.png"
import { ShopContext } from '../Context/ShopContext'


function productDisplay(props) {

    const { product } = props
    const {addToCart} = useContext(ShopContext)
    
    return (
        <div id="productDetails" className='flex   my-2 ml-[110px] mb-[100px] max-lg:ml-[50px] max-md:ml-[10px] '>
            {/* left part */}
            <div id="productDetails-left" className='flex   gap-4 w-[50%]  max-lg:gap-2 max-md:flex-col-reverse max-md:gap-1  '>
                <div id='productDetails-left-small' className='flex flex-col  gap-4 max-lg:gap-3 max-md:flex-row max-md:gap-1'>
                    <img src={product.image} className='h-[150px] w-[230px] max-lg:h-[135px] max-md:h-[90px] max-md:w-[32%] ' alt="" />
                    <img src={product.image} className='h-[150px] w-[230px] max-lg:h-[135px] max-md:h-[90px] max-md:w-[32%] ' alt="" />
                    <img src={product.image} className='h-[150px] w-[230px] max-lg:h-[135px] max-md:h-[90px] max-md:w-[32%] ' alt="" />
                </div>
                <div id='productDetails-left-big' >
                    <img  src={product.image} className='w-[750px] h-[480px] max-lg:w-[580px] max-lg:h-[430px]   max-md:h-[350px] max-sm:h-[320px] ' alt="main-Image" />
                </div>
            </div>

            {/* Right part*/}
            <div id="productDetails-right" className='flex w-[50%]  flex-col my-0 mx-[50px] max-lg:mx-[20px] max-md:ml-[10px] '>
                <h1 className='text-[#3d3d3d] text-[30px] font-semibold max-lg:text-[25px] max-md:text-[19px] '>{product.name}</h1>
                <div className='flex items-center gap-[5px] mt-3 text-[#1c1c1c] text-[1rem] max-md:mt-2 max-md:text-[14px] '>
                    <img src={starIcon} alt="" className='size-[20px] max-md:size-[16px] ' />
                    <img src={starIcon} alt=""  className='size-[20px] max-md:size-[16px] '/>
                    <img src={starIcon} alt="" className='size-[20px] max-md:size-[16px] ' />
                    <img src={starIcon} alt="" className='size-[20px] max-md:size-[16px] ' />
                    <img src={starDullIcon} alt=""  className='size-[20px] max-md:size-[16px] '/>
                    <p>(122)</p>
                </div>
                <div className='flex my-5 mx-0 gap-7 text-6 font-semibold max-lg:my-3 max-md:text-[15px] '>
                    <div className='text-[#818181] line-through'>${product.old_price}</div>
                    <div className='text-[#2ac802]'>${product.new_price}</div>
                </div>
                <div >
                    <h1 className=' text-[#656565] text-5 font-semibold max-md:text-[15px] '>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur accusamus dolor porro facilis impedit a beatae id ducimus alias aliquam.
                    </h1>
                    <div className='flex flex-col  gap-5 my-4 mx-0 max-lg:gap-1.5'>
                        <h1>Select Size</h1>
                        <div className='flex gap-2 max-sm:gap-1'>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer max-md:py-[3px]  max-md:px-[17px] max-sm:px-[14px] max-sm:py-[4px]  '>S</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer max-md:py-[3px]  max-md:px-[17px]  max-sm:px-[14px] max-sm:py-[4px] '>M</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer max-md:py-[3px]  max-md:px-[17px] max-sm:px-[14px] max-sm:py-[4px]  '>L</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer max-md:py-[3px]  max-md:px-[17px]  max-sm:px-[14px] max-sm:py-[4px] '>XL</div>
                            <div className='bg-[#eeecec] border border-[#ebebeb] py-[5px] px-[24px] rounded-[3px]  cursor-pointer max-md:py-[3px]  max-md:px-[17px] max-sm:px-[14px] max-sm:py-[4px]  '>XXL</div>
                        </div>
                    </div>
                </div>
                <button onClick={()=>{addToCart(product.id)}} className='py-3 px-8 w-[200px] rounded text-[1rem] font-semibold bg-[#ff4141] text-white mb-[10px] border-none outline-none cursor-pointer max-lg:py-2.5 max-lg:px-6 max-lg:mb-[6px] max-md:py-2 max-md:px-4 '>ADD TO CART</button>

                <p className='mt-3 max-lg:mt-2.5'><span className='font-semibold'>Category: </span>{product.category}, T-shirt, Crop-Top</p>
                <p className='mt-3 max-lg:mt-2.5'><span className='font-semibold'>Tags: </span>Modern, Latest</p>
            </div>
        </div>
    )
}

export default productDisplay
