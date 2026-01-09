import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import dropdownIcon from "../Components/Assets/dropdown_icon.png"
import Item from '../Components/Item';
import Navbar from '../Components/Navbar';


function ShopCategory(props) {

  const { allProducts } = useContext(ShopContext);

  return (
    <>     <Navbar/>
    <div id="shopcategory" className=" flex  flex-col items-center pt-[82px] bg-linear-to-b from-[#adf8ec] to-[#e1ffea22]  ">
 
      <img id="shopcategory-image" src={props.banner} className='inline-block  my-7 mx-auto w-[90%] h-[250px] max-md:my-4' alt="banner" />
      <div className='w-[70%] flex justify-between items-center my-4 mx-[170px]'>
        <p className='max-md:text-[15px] '> <span className='font-semibold mr-1'>Showing 1-12</span> out of 36 products </p>
        <div id="shopcategory-div" className='flex py-2 px-5 rounded-3xl border border-[#888] font-semiboldbold max-md:py-[4px] max-md:text-[15px] '> Sort by <img src={dropdownIcon} className='h-[10px] w-[12px] font-bold  mt-[8px] ml-1' alt="" /> </div>
      </div>
      <div id="newCollection-item" className=' grid grid-cols-4 mt-7 gap-6 max-lg:gap-2 max-md:grid-cols-2 max-md:gap-8 max-sm:gap-3'>
        {allProducts.map((item, i) => {
          if (props.category == item.category) {
            return <div>
              <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            </div>
          } else null;
        })}
      </div>
      <div id="more-btn" className='flex items-center justify-center my-[100px] mx-auto w-[233px] h-[70px] bg-[#d3d0d0] rounded-4xl text-[#504949] text-[18px] cursor-pointer font-semibold max-md:my-[50px] max-md:h-[40px] max-md:w-[150px] max-md:text-[17px] '>Explore more</div>
    </div>
    </>
  )
}

export default ShopCategory
