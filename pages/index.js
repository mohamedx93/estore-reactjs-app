import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/App.module.css'
import Title from '../components/Title'
import Product from '../components/Product';

export default function Home() {
  const context = useContext(ProductContext);
  
  return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">

              {context.products.map(product => { return <Product key={product.id} product={product} /> })}
            </div>
          </div>
        </div>
      
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">

              {context.products.map(product => { return <Product key={product.id} product={product} /> })}
            </div>
          </div>
        </div>
      </>
  )
}
