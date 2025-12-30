import React, { createContext, useState } from 'react'
import allProducts from "../Components/Assets/all_product"

export const ShopContext = createContext(null);

const getdefaultCart = () => {
    let cart = {};

    for (let i = 0; i < allProducts.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;
}


const ShopContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(getdefaultCart())

    const addToCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))

    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
    const getTotalAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = allProducts.find((product) => product.id === Number(item))
                totalAmount += itemInfo.new_price * cartItems[item]
            }
        }
        return totalAmount
    }
    const getTotalItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem
    }

    const contextValue = { allProducts, cartItems, getTotalItem,  addToCart, removeFromCart, getTotalAmount };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;
