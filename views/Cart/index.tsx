import React, { ReactElement } from 'react'
import '@components/cart'
import Title from '@components/ui/Title';
import { IProductContext, IProduct } from '@constants/Interfaces';

interface Props{
    context:IProductContext,
}


export default function Cart({ context }: Props): ReactElement {
    const { cart }: {cart:IProduct[]}  = context;
    return (
        <section>
            {cart.length > 0 ?
                <React.Fragment>
                    <Title name='your' title='cart' />
                    <CartColumns />
                    <CartList context={context} />
                    <CartTotals context={context} />
                </React.Fragment>
                : <EmptyCart></EmptyCart>
            }
        </section>
    )
}
