import { useContext } from "react";
import { FilterContext } from "../contexts/FilterContexts";

export function useFilter(){
    return useContext(FilterContext)
}