import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom';
import Breadcrumbs from '../Components/Breadcrumbs/Breadcrumbs';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';


function Product() {
  const { allProducts } = useContext(ShopContext);
  const { productId } = useParams();
  const product = allProducts.find((e) => e.id === Number(productId))

  return (
    <div className="pt-[82px]">
      <Breadcrumbs product={product} />
      <ProductDisplay product={product} />
      <Description />
      <RelatedProducts product={product} />

    </div>
  )
}

export default Product; 
