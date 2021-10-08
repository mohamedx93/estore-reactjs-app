import React,{useEffect} from 'react';
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/globals.css';

import { ProductProvider } from '../context'
import  Head from 'next/head';

function MyApp({ Component, pageProps }) {

  
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
