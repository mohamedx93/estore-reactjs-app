import React, { useContext } from 'react'
import { IProductContext, IProduct } from '@constants/Interfaces'
import {ProductContext} from 'context'
import CartView from 'views/Cart';


export default function Cart(): React.ReactElement {
    const context:IProductContext = useContext(ProductContext)
    const { cart }: {cart:IProduct[]} = context;
    return (
        <CartView cat={cart}/>
    )
}
