import React, { ReactElement, useContext, useEffect } from 'react'
import styles from '@styles/Home.module.scss'
import Title from '@components/ui/Title'
import Product from '@components/Product';
import { ProductContext, LayoutContext } from 'context';
import { IProduct } from '@constants/Interfaces';

interface Props {
    fetchedProducts: IProduct[];
}

export default function Home({fetchedProducts}: Props): ReactElement {
    const { products, setProducts } = useContext(ProductContext);
    const { setIsAuthView } = useContext(LayoutContext);
    
    useEffect(() => {
        setProducts(fetchedProducts);
        setIsAuthView(false);
    }, [setProducts, setIsAuthView]);


    return (
        <div className={`py-5 ${styles.home}`} >
            <div className="container">
                <Title name="our" title="products" />
                <div className="row">
                    {products.map((product: IProduct) => { return <Product key={product._id} product={product} /> })}
                </div>
            </div>
        </div>
    )
}
