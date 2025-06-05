import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';


function Product() {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId))

  return (
    <div className="pt-[82px]">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
    </div>
  )
}

export default Product; 
