import React from 'react'
import breadcrumArrowIcon from "../Components/Assets/breadcrum_arrow.png"


function Breadcrumbs(props) {
  const { product } = props;

  return (
    <div className='flex items-center text-[#5e5e5e] gap-4 text-4 font-semibold mt-[30px] mb-5 ml-[150px] capitalize max-lg:text-[15px] max-lg:ml-[50px] max-md:ml-[20px]  max-md:text-[13px]  max-md:gap-2 '>
      <span className='cursor-pointer hover:text-blue-500 '>HOME</span> <img src={breadcrumArrowIcon} alt="" className='max-md:h-[10px] ' /> <span  className='cursor-pointer hover:text-blue-500 '>SHOP</span> <img src={breadcrumArrowIcon} alt="" className='max-md:h-[10px] ' /><span  className='cursor-pointer hover:text-blue-500 '> {product.category} </span><img src={breadcrumArrowIcon} alt="" className='max-md:h-[10px] ' /><span  className='cursor-pointer hover:text-blue-500 '> {product.name} </span>
    </div>
  )
}

export default Breadcrumbs
