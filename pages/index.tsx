import React from 'react'
import { IProduct } from 'constants/Interfaces';
import HomeView from '@views/Home'
import { GetServerSideProps } from 'next';
import * as api from 'api';
import Auth from '@views/Auth';
import { useContext } from 'react';
import { AuthContext } from 'context';
import Progress from '@components/ui/Progress';

export async function getServerSideProps(context: GetServerSideProps) {
    const res = await api.fetchProducts();
    const { data } = res.data;

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
    const { loading } = useContext(AuthContext);
    return (
        // <HomeView fetchedProducts={data} />
        <>
            {loading ? <Progress /> : <Auth />}
        </>

    )
}