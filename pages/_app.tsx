import React from 'react';
import { AppProps } from 'next/app';
import  Head from 'next/head';
import Layout from '@components/commons/Layout'
import { ProductProvider, LayoutProvider } from 'context';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';


function MyApp({ Component, pageProps }:AppProps) {

  
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Ecommerce ReactJS App</title>

      </Head>
      <LayoutProvider>
      <ProductProvider>
        <Layout >
          <Component {...pageProps} />
        </Layout>
      </ProductProvider>
      </LayoutProvider>
    </>
  )
}

export default MyApp
