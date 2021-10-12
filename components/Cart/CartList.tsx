import React from 'react'
import { IProductContext, IProduct } from '../../context';
import CartItem from './CartItem'
export default function CartList({value}:{value:IProductContext}) {
    const { cart } = value;
    return (
        <div className='container-fluid'>
            {cart.map((item:IProduct) => {
                return (<CartItem key={item.id} item={item} value={value}></CartItem>)
                
            })}
        </div>
    )
}
