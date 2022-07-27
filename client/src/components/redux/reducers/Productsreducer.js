const products = []


export const getproductsreducer =(state={products},action) =>{
    switch(action.type){
        case "SUCCESS_GET_PRODUCTS":
            return {products : action.playload}
        case "FAIL_GET_PRODUCTS":
            return {products : action.playload}
        default : return state
    }
}