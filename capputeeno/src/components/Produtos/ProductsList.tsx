'use client'
import { useProducts } from '@/hooks/useProdutcs'
import React from 'react'
import ProductCard from './ProductCard';
import styled from 'styled-components';

interface ProductsListProps{

}

const ProductConatiner = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill,256px);
    gap:32px;
    width: 100%;

    margin-top:32px;
`

const ProductsList = (props : ProductsListProps) => {
 
    const {data} = useProducts();
    console.log(data)
   return (
    <>
        <ProductConatiner>
            {data?.map(product => 
            <ProductCard
            key={product.id}
            title={product.name}
            image={product.image_url}
            price={product.price_in_cents}
            />)}
        </ProductConatiner>
    </>
)
}

export default ProductsList;