import { FilterType } from "@/types/FilterTypes";

export function getCategoriaByType(type : FilterType){
    if(type === FilterType.MUG) return "mugs"
    if(type === FilterType.SHIRT) return "t-shirts"
    return ""
}