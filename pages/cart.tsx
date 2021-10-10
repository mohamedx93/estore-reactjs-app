import React, { useContext } from 'react'
import Title from '../components/Title';
import CartColumns from '../components/Cart/CartColumns';
import EmptyCart from '../components/Cart/EmptyCart';
import { ProductContext, ProductContextInterface, ProductInterface } from '../context'
import CartList from '../components/Cart/CartList';
import CartTotals from '../components/Cart/CartTotals';


export default function Cart(): React.ReactElement {
    const context:ProductContextInterface = useContext(ProductContext)
    const { cart }: {cart:ProductInterface[]} = context;
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
