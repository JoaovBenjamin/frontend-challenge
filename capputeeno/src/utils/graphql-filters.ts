import { FilterType } from "@/types/FilterTypes";
import { PriorityType } from "@/types/PriorityTypes";

export function getCategoriaByType(type : FilterType){
    if(type === FilterType.MUG) return "mugs"
    if(type === FilterType.SHIRT) return "t-shirts"
    return ""
}

export function getByPriority(priority: PriorityType){
    if(priority === PriorityType.NEWS) return {field: "created_at", order: "ASC"}
    if(priority === PriorityType.BIGGETS_PRICE) return {field: "price_in_cents", order: "DSC"}
    if(priority === PriorityType.MINOR_PRICE)  return {field: "price_in_cents", order: "ASC"}
    return {field: "sales", order: "DSC"}
    
}