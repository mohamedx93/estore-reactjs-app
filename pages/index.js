import React,{ useContext } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/App.module.css'
import Title from '../components/Title'
import Product from '../components/Product';
import { ProductContext } from '../context';
import styled from 'styled-components';

export default function Home() {
  const contxt = useContext(ProductContext);
  
  return (
      <>
        <div className="py-5">
          <div className="container">
            <Title name="our" title="products" />
            <div className="row">
            {contxt.products.map(product => { return <Product key={product.id} product={product} /> })}
            </div>
          </div>
        </div>
      
        <div className="py-5">
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
