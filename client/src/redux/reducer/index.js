const initialState = {
    allProducts: [],
    showProducts:[],
    productDetail: []
}

export const rootReducer= (state=initialState, action) => {
    switch (action.type) {
        case "ALL_PRODUCTS":
            return {
                ...state,
                allProducts: action.payload,
                showProducts: action.payload,


            }

            case "ONE_PRODUCT": 
            return {
                ...state,
                productDetail: action.payload

            }
     
    
        default: return {...state}
    }
}