import React from 'react'
import breadcrumArrowIcon from "../Components/Assets/breadcrum_arrow.png"
import { Link } from 'react-router-dom';


function Breadcrumbs(props) {
  const { product } = props;
  // {`/product/${props.id}`}
  return (
    <div className='flex items-center text-[#5e5e5e] gap-4 text-4 font-semibold mt-[30px] mb-5 ml-[150px] capitalize max-lg:text-[15px] max-lg:ml-[50px] max-md:ml-[20px]  max-md:text-[13px]  max-md:gap-2 '>
      <Link to="/" className='cursor-pointer hover:text-blue-500 '>HOME</Link> 

      <img src={breadcrumArrowIcon} alt="" className='max-md:h-[10px] ' />
      
       <Link to='/allproducts' className='cursor-pointer hover:text-blue-500 '>SHOP</Link>
       
        <img src={breadcrumArrowIcon} alt="" className='max-md:h-[10px] '/>

        <Link to={`/${product.category}`}  className='cursor-pointer hover:text-blue-500 '> {product.category} </Link>
        
        <img src={breadcrumArrowIcon} alt="" className='max-md:h-[10px]'/>
        <span  className=' text-[#01cbd2] '> {product.name} </span>
    </div>
  )
}

export default Breadcrumbs
