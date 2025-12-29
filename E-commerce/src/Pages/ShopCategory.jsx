import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdownIcon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Item';


function ShopCategory(props) {
  const { allProducts } = useContext(ShopContext);

  return (
    <div className="pt-[82px]">
      <img src={props.banner} className='block my-7 mx-auto w-[82%]' alt="" />
      <div className='flex justify-between items-center my-0 mx-[170px]'>
        <p> <span className='font-semibold'>Showing 1-12</span> out of 36 products </p>
        <div className='flex py-2 px-5 rounded-3xl border border-[#888] font-semiboldbold'> Sort by <img src={dropdownIcon} className='h-[10px] w-[12px] font-bold  mt-[8px] ml-1' alt="" /> </div>
      </div>
      <div className='my-5 mx-[170px] grid grid-cols-4 gap-[80px]'>
        {allProducts.map((item, i) => {
          if (props.category == item.category) {
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
          } else null;
        })}
      </div>
      <div className='flex items-center justify-center my-[120px] mx-auto w-[233px] h-[70px] bg-[#d3d0d0] rounded-4xl text-[#504949] text-[18px] font-semibold'>Explore more</div>
    </div>
  )
}

export default ShopCategory
