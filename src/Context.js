import React, { useEffect, useState } from 'react'
import { storeProducts, detailProduct } from './data'
export const ProductContext = React.createContext()
//Provider

//Consumer



function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [detailedProduct, setDetailedProduct] = useState({ ...detailProduct });
    const [cart, setCart] = useState([]);
    const [modalOpen, setModalOpen] = useState(true);
    const [modalProduct, setModalProduct] = useState({ ...detailProduct })

    useEffect(() => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            tempProducts = [...tempProducts, { ...item }]
        });
        setProducts(tempProducts);
    }, [])
    useEffect(() => {
        console.log(cart)
    }, [cart])

    const getItem = (id) => {
        return products.find(item => item.id === id);
    }
    const handleDetail = (id) => {
        const product = getItem(id);

        setDetailedProduct({ ...product })
    }
    const addToCart = (id) => {
        let tempProducts = [...products];
        const index = tempProducts.indexOf(getItem(id));
        const product = tempProducts[index];
        console.log(product.inCart);
        product.inCart = true;
        product.count = 1;
        const price = product.price;
        product.total = price;
        setProducts(tempProducts);
        setCart([...cart, product]);
        handleDetail(product.id);
    }

    const openModal = id => {
        const product = getItem(id);
        setModalProduct(product);
        setModalOpen(true);
    }

    const closeModal = () => {
        setModalOpen(false);
    }

    return (
        <ProductContext.Provider value={{
            products, detailedProduct, handleDetail, cart, addToCart, modalOpen, modalProduct, openModal, closeModal
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

const ProductConsumer = ProductContext.Consumer;
export { ProductProvider, ProductConsumer }
