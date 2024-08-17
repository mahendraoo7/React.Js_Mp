import { PRODUCT_ADD, PRODUCT_UPDATE, PRODUCT_DELETE, PRODUCT_ADD_SHOP } from "./Constant";

const ProductReducer = (state , action) => {
    switch(action.type){
                
        case PRODUCT_ADD: return{
            
        }
        case PRODUCT_UPDATE: return{
            
        }
        case PRODUCT_DELETE: return{
            
        }
        case PRODUCT_ADD_SHOP: return{

        }
        default:return state
    }
}    


export default ProductReducer