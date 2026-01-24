import React from 'react';
import Main from "../Components/Main"
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offers from '../Components/Offers';
import NewCollections from '../Components/NewCollections';
import NewsLetter from '../Components/NewsLetter';
import Navbar from '../Components/Navbar';
import Premium from '../Components/Premium';
import ShopCategoryViz from '../Components/ShopCategoryViz';



function Shop() {
  return (
    <div>
      <Navbar />

      <Main />
      <Hero />
      <Premium/>
      <ShopCategoryViz/>
      <Offers />
      
      <NewCollections />
      <NewsLetter />

    </div>
  )
}

export default Shop
