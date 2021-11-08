import React from 'react'
import { IProduct } from 'constants/Interfaces';
import HomeView from '@views/Home'
import { GetServerSideProps } from 'next';
import * as api from 'api';
import Auth from '@views/Auth';
import { useContext, useEffect } from 'react';
import { LayoutContext } from 'context';
import Progress from '@components/ui/Progress';

export async function getServerSideProps(context: GetServerSideProps) {
    const res = await api.fetchProducts();
    const { data }:any = res.data;

    if (!data) {
        return {
            notFound: true,
        }
    }

    return {
        props: { data } // will be passed to the page component as props
    }
}


export default function Home({ data }: { data: IProduct[] }): React.ReactElement {
    const { loading, setLoading } = useContext(LayoutContext);
    useEffect(() => {
        setLoading(true);
    }, []);
    //{loading ? <Progress /> : <Auth />}
    return (
        <>
            {loading ? <Progress /> : <HomeView fetchedProducts={data} />}
        </>

    )
}