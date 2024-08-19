'use client'
import { useProducts } from '@/hooks/useProdutcs'
import React from 'react'
import ProductCard from './ProductCard';

interface ProductsListProps{

}

const ProductsList = (props : ProductsListProps) => {
 
    const {data} = useProducts();
    console.log(data)
   return (
    <>
        <div>
            {data?.map(product => 
            <ProductCard
            key={product.id}
            title={product.name}
            image={product.image_url}
            price={product.price_in_cents}
            />)}
        </div>
    </>
)
}

export default ProductsList;