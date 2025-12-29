import React from 'react'
import breadcrumArrowIcon from "../Components/Assets/breadcrum_arrow.png"


function Breadcrumbs(props) {
  const { product } = props;

  return (
    <div className='flex items-center text-[#5e5e5e] gap-4 text-4 font-semibold mt-[30px] mb-5 ml-[150px] capitalize'>
      HOME <img src={breadcrumArrowIcon} alt="" /> SHOP <img src={breadcrumArrowIcon} alt="" /> {product.category} <img src={breadcrumArrowIcon} alt="" /> {product.name}
    </div>
  )
}

export default Breadcrumbs
