import React from 'react'
import { ProductContextInterface, ProductInterface } from '../../context';
import CartItem from './CartItem'
export default function CartList({value}:{value:ProductContextInterface}) {
    const { cart } = value;
    return (
        <div className='container-fluid'>
            {cart.map((item:ProductInterface) => {
                return (<CartItem key={item.id} item={item} value={value}></CartItem>)
                
            })}
        </div>
    )
}
