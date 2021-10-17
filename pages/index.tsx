import React, { useContext, useEffect } from 'react'
import styles from '../styles/Home.module.scss'
import Title from '../components/Title'
import Product from '../components/Product';
import { ProductContext } from 'context';
import { IProductContext, IProduct } from 'constants/Interfaces';
import { GetServerSideProps, GetStaticPropsContext } from 'next';
import * as api from 'api';

export async function getServerSideProps(context:GetServerSideProps) {
    const res = await api.fetchProducts();
    const { data } = res.data;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props:{data} // will be passed to the page component as props
    }
}


export default function Home({data}: {data: IProduct[]}): React.ReactElement {
    const { products, setProducts } = useContext(ProductContext);
    useEffect(() => {
        setProducts(data);
    }, []);
    

    return (
        <>
            <div className={`py-5 ${styles.home}`} >
                <div className="container">
                    <Title name="our" title="products" />
                    <div className="row">
                        {products.map((product: IProduct) => { return <Product key={product._id} product={product} /> })}
                    </div>
                </div>
            </div>
        </>
    )
}