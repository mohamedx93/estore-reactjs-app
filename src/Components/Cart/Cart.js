import React, { useContext } from 'react'
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import { ProductContext } from '../../Context';
import CartList from './CartList';
import CartTotals from './CartTotals';


export default function Cart() {
    const context = useContext(ProductContext)
    const { cart } = context;
    return (
        <section>
            {cart.length > 0 ?
                <React.Fragment>
                    <Title name='your' title='cart' />
                    <CartColumns />
                    <CartList value={context} />
                    <CartTotals value={context}/>
                </React.Fragment>
                : <EmptyCart></EmptyCart>
            }
        </section>
    )
}
