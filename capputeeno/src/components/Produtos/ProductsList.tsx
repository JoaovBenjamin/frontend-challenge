'use client'
import { useProducts } from '@/hooks/useProdutcs'
import React from 'react'

interface ProductsListProps{

}

const ProductsList = (props : ProductsListProps) => {
 
    const {data} = useProducts();
    console.log(data)
   return (
    <>

    </>
)
}

export default ProductsList;