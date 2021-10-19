import React from 'react'
import { IProduct } from '@constants/Interfaces';
import CartItem from './CartItem'
export default function CartList({cart}:{cart:IProduct[]}) {
    
    return (
        <div className='container-fluid'>
            {cart.map((item:IProduct) => {
                return (<CartItem key={item._id} item={item} cart={cart}></CartItem>)
                
            })}
        </div>
    )
}
