import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import removeIcon from "../Components/Assets/cart_cross_icon.png"
function CartItem() {
    const { allProducts, cartItems,getTotalAmount, removeFromCart } = useContext(ShopContext)

    return (
        <div className='w-[86%] mx-auto  pt-[100px] pb-32 max-lg:pt-[70px] max-md:w-[90%] '>
            <div className='flex mt-20 pb-5 max-md:text-[15px] '>
                <div className='flex  gap-44 w-[40%]  justify-start max-md:gap-24 max-sm:gap-18 max-sm:text-[14px]'>
                    <p>Product</p>
                    <p >Title</p>
                </div>
                <div className='flex  w-[60%]  justify-evenly  max-md:px-3 max-sm:text-[14px] '>
                    <p>Price</p>
                    <p>Quantity</p>
                    <p>Total</p>
                    <p>Remove</p>
                </div>
            </div>

            <hr className='h-[4px] border-2 rounded-2xl text-[#a09797] ' />

            <div className='mt-4'>
                {allProducts.map((item) => {
                    if (cartItems[item.id] > 0) {
                        return (
                            <div>
                                <div className='flex mt-5 ml-2 mb-7'>

                                    <div className='flex gap-36 text-[14px] w-[40%]  justify-start items-center max-lg:gap-30 max-md:gap-18 max-sm:gap-14'>
                                        <img src={item.image} alt="" className='size-[90px] max-md:size-[70px] max-sm:size-[60px] ' />
                                        <p className='max-lg:text-[14px] max-sm:text-[12px] '>{item.name}</p>
                                    </div>

                                    <div className='flex w-[60%] items-center justify-evenly max-md:text-[14px] max-sm:text-[13px] '>
                                        <p className=' px-4 '>$ {item.new_price}</p>

                                        <button className='py-3 px-5 border border-gray-300 cursor-pointer rounded-[6px]max-md:py-[4px] max-md:px-[12px] max-sm:p-[8px] '>{cartItems[item.id]}</button>

                                        <p className='max-md'>${item.new_price * cartItems[item.id]}</p>

                                        <img src={removeIcon} className='w-[15px] cursor-pointer my-0 mx-[40px] max-md:mx-[24px] ' onClick={() => { removeFromCart(item.id) }} alt="" />
                                    </div>


                                </div><hr className='h-[2px] border-2 rounded-2xl text-[#cbc6c6] ' />
                            </div>
                        )
                    }

                    return null;

                })}
                <div className='flex my-100px mx-0 py-14 pl-2 max-md:flex-col '>

                    {/* Left Part */}
                    <div className='flex flex-col w-[50%] mr-[100px]  gap-[20px] max-md:w-[100%] max-md:px-[80px] max-md:mb-14 '>
                        <h1 className='text-3xl text-black font-bold uppercase '>Cart Totals</h1>
                        <div >
                            <div className='flex justify-between py-4 px-0'>
                                <p>SubTotal</p>
                                <p>${getTotalAmount()}</p>
                            </div>

                            <hr className='h-[4px] border-2 rounded-2xl text-[#a09797] ' />

                            <div className='flex justify-between py-4 px-0'>
                                <p>Shipping Fee</p>
                                <p>Free</p>
                            </div>

                            <hr className='h-[4px] border-2 rounded-2xl text-[#a09797] ' />

                            <div className='flex justify-between py-4 px-0 text-[18px] font-semibold'>
                                <h3>Total</h3>
                                <h3>${getTotalAmount()}</h3>
                            </div>
                        </div>
                        <button className='w-[260px] h-[60px] outline-none border-none rounded  bg-[#ff5a5a] text-white text-[16px] font-bold cursor-pointer max-md:w-[200px] max-md:h-[50px] '>Proceed to checkout</button>

                    </div>

                  {/* Right Part */}
                    <div className='mt-2 max-md:pl-[80px] '>
                        <p className='text-[#555] max-md:text-[22px] '>If you have  a promo code, Enter it here</p>
                        <div className='w-[400px] h-[58px]  mt-4  flex max-lg:w-[280px]  max-md:w-[330px] '>
                            <input className='w-[340px] h-[50px] bg-zinc-300 pl-3 border-0 outline-none text-[16px] max-lg:h-[45px] max-md:w-[350px] ' type="text" placeholder='Enter you promo code' />
                            <input className='w-[170px] h-[50px] rounded-br-[4px] rounded-tr-[4px] bg-black text-[16px] text-white cursor-pointer max-lg:h-[45px]' type="submit" value="submit" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default CartItem
