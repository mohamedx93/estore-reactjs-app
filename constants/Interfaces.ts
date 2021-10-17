import { Dispatch, SetStateAction } from "react";


export interface IProduct {
    _id?: number;
    title?: string;
    img?: string;
    price?: number;
    company?: string;
    info?: string;
    inCart?: boolean;
    count?: number;
    total?: number
}



export interface IProductContext {
    products: IProduct[];
    setProducts: Dispatch<SetStateAction<IProduct>>;
    detailedProduct: IProduct | undefined;
    handleDetail: (id: number) => void;
    cart: IProduct[];
    addToCart: (id: number) => void;
    modalOpen: boolean;
    modalProduct: IProduct | undefined;
    openModal: (id: number) => void;
    closeModal: () => void;
    cartSubTotal: number;
    cartTax: number;
    cartTotal: number;
    increment: (id: number) => void;
    decrement: (id: number) => void;
    removeItem: (id: number) => void;
    clearCart: () => void
}


export interface IProductModel {
    title: string,
    img: string,
    price: number,
    company: string,
    info?: string,
    inCart?: boolean,
    count?: number,
}
