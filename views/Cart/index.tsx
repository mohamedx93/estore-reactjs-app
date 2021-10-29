import React, { ReactElement, useContext, useEffect } from 'react'
import Title from '@components/ui/Title';
import { CartColumns, CartList, CartTotals, EmptyCart } from '@components/cart';
import { IProductContext, IProduct } from '@constants/Interfaces';
import { ProductContext, LayoutContext } from 'context';



export default function Cart(): ReactElement {
    const context: IProductContext = useContext(ProductContext)
    const { cart }: { cart: IProduct[] } = context;
    const { setIsAuthView } = useContext(LayoutContext);
    useEffect(() => {
        setIsAuthView(false);
    }, [setIsAuthView])
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
