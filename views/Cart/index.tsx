import '@components/cart'
import Title from '@components/ui/Title';
import React, { ReactElement } from 'react'
import { IProduct } from '../../constants/Interfaces';

interface Props {
    
}

export default function Cart({cart}: {cart:IProduct[]}): ReactElement {
    return (
        <section>
            {cart.length > 0 ?
                <React.Fragment>
                    <Title name='your' title='cart' />
                    <CartColumns />
                    <CartList value={context} />
                    <CartTotals value={context} />
                </React.Fragment>
                : <EmptyCart></EmptyCart>
            }
        </section>
    )
}
