import React from 'react';
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';

import { ProductProvider } from '../context'
import  Head from 'next/head';
import { AppProps } from 'next/app';


function MyApp({ Component, pageProps }:AppProps) {

  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecommerce ReactJS App</title>

      </Head>
      <ProductProvider>
        <Layout pageProps={pageProps} >
          <Component {...pageProps} />
        </Layout>
      </ProductProvider>
    </>
  )
}

export default MyApp
