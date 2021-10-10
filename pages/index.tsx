import React, { useContext } from 'react'
import styles from '../styles/Home.module.scss'
import Title from '../components/Title'
import Product from '../components/Product';
import { ProductContext } from '../context';

export default function Home() {
  const contxt = useContext(ProductContext);
  
  return (
      <>
      <div className={`py-5 ${styles.home}`} >
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
            {contxt.products.map(product => { return <Product key={product.id} product={product} /> })}
            </div>
          </div>
        </div>
      </>
  )
}
