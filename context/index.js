import React, { useEffect, useState } from 'react'
import { storeProducts, detailProduct } from './data'
export const ProductContext = React.createContext()
//Provider

//Consumer



function ProductProvider(props) {
    const [products, setProducts] = useState([]);
    const [detailedProduct, setDetailedProduct] = useState({ ...detailProduct });
    const [cart, setCart] = useState([]
    ); //useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [modalProduct, setModalProduct] = useState({ ...detailProduct })
    const [cartSubTotal, setCartSubTotal] = useState(0);
    const [cartTax, setCartTax] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    
    useEffect(() => {
        const cloneProducts = () => {
            let tempProducts = [];
            storeProducts.forEach(item => {
                tempProducts = [...tempProducts, { ...item }]
            });
            return tempProducts;
        }
        let tempProducts = cloneProducts();
        setProducts(tempProducts);
    }, [])
    useEffect(() => {
        addTotals();
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

    const increment = id => {

        const tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        selectedProduct.count++;
        selectedProduct.total += selectedProduct.price;
        setCart(tempCart);
    }

    const decrement = id => {
        const tempCart = [...cart];
        const selectedProduct = tempCart.find(item => item.id === id);
        selectedProduct.count--;
        if (selectedProduct.count === 0) removeItem(id);
        else {
            selectedProduct.total -= selectedProduct.price;
            setCart(tempCart);
        }
    }

    const removeItem = id => {
        const tempProducts = [...products];
        let tempCart = [...cart];
        tempCart = tempCart.filter(item => item.id !== id);
        const removedProduct = tempProducts[tempProducts.indexOf(getItem(id))];
        removedProduct.count = 0;
        removedProduct.inCart = false;
        removedProduct.total = 0;
        setCart(tempCart);
        setProducts(tempProducts);

    }

    const clearCart = () => {
        setCart([]);
        setProducts(cloneProducts());
    }

    const addTotals = () => {
        let subTotal = 0;
        cart.map(item => { return (subTotal += item.total); });
        const tax = parseFloat((subTotal * 0.1).toFixed(2))
        const total = subTotal + tax;
        setCartSubTotal(subTotal);
        setCartTax(tax);
        setCartTotal(total);
    }

    return (
        <ProductContext.Provider value={{
            products, detailedProduct, handleDetail, cart, addToCart, modalOpen, modalProduct, openModal, closeModal, cartSubTotal, cartTax, cartTotal, increment, decrement, removeItem, clearCart
        }}>
            {props.children}
        </ProductContext.Provider>
    )
}

// const ProductConsumer = ProductContext.Consumer;
export { ProductProvider }
