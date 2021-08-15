import React from 'react'
import {storeProducts, detailProduct} from './data'

export const ProductContext = React.createContext()
//Provider

//Consumer

function ProductProvider(props) {
    const state={
        products: storeProducts,
        detailProduct: detailProduct
    }
    const handleDetail = ()=>{
        console.log("Hello from Detail")
    }
    const addToCart = ()=>{
        console.log("Add to Cart")
    }
    return (
        <ProductContext.Provider value={{
            ...state, handleDetail:handleDetail, addToCart:addToCart
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;
export {ProductProvider, ProductConsumer}
