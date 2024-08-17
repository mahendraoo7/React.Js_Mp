import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE, PRODUCT_ADD_SHOP } from "../Constant";


export const product_add = () => {
    return{
        type:PRODUCT_ADD
    }
}
export const product_update = () => {
    return{
        type:PRODUCT_UPDATE
    }
}
export const product_delete = () => {
    return{
        type:PRODUCT_DELETE
    }
}
export const product_add_shop = () => {
    return{
        type:PRODUCT_ADD_SHOP
    }
}