'use client'
import { ProductsFetchResponse } from "@/types/ProductsFetchResponde";
import axios, { AxiosPromise } from "axios";
import { useQuery } from "react-query";
import { useFilter } from "./useFilter";
import { FilterType } from "@/types/FilterTypes";
import { getByPriority, getCategoriaByType } from "@/utils/graphql-filters";
import { PriorityType } from "@/types/PriorityTypes";

const API_URL = process.env.NEXT_PUBLIC_API_URL as string

const fetcher = (query: string): AxiosPromise<ProductsFetchResponse> =>{
    return axios.post(API_URL,{query})
}

const mountQuery = (type : FilterType, priority: PriorityType) =>{
    if(type === FilterType.ALL && PriorityType.POPULARITY) return `
                query{
                    allProducts(sortField:"sales", sortOrder: "DSC"){
                        id
                        name
                        price_in_cents
                        image_url
                    }
                }
            `
   
            const sortSettings = getByPriority(priority)
            const categoryFilter = getCategoriaByType(type)
            return `
                query{
                    allProducts(sortField: "${sortSettings.field}", sortOrder:"${sortSettings.order}, ${categoryFilter ? `filter: {category: "${categoryFilter}"}` : ''}"){
                        id
                        name
                        price_in_cents
                        image_url
                    }
                }
            `
}

export function useProducts(){
    const {type, priority} = useFilter();
    const query = mountQuery(type, priority)
    const {data} = useQuery({
        queryFn : () => fetcher(query),
        queryKey: ['products', type, priority]
    })

    return{
        data:data?.data?.data?.allProducts
    }
}