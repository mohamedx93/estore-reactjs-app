import React, { ReactElement } from 'react'
import { IProductContext, IProduct } from '@constants/Interfaces';
import CartItem from './CartItem'

interface Props{
    context: IProductContext,
}

export default function CartList({context}:Props):ReactElement {
    const { cart } = context;
    return (
        <div className='container-fluid'>
            {cart.map((item:IProduct) => {
                return (<CartItem key={item._id} item={item} context={context}></CartItem>)
                
            })}
        </div>
    )
}
