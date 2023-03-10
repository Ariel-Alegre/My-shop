import axios from "axios"


export const allProducts = () => {
    return async (dispatch) => {
        const res = await axios.get('http://localhost:1998/products')
        const data = await res.data
        return dispatch({
            type: "ALL_PRODUCTS",
            payload: data
        })
    }
};



export const oneProducts = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`http://localhost:1998/products/${id}`);
        const data= await res.data

        return dispatch({
            type: "ONE_PRODUCT",
            payload: data
        })
    }
}