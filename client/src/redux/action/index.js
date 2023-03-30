import axios from "axios"
const { SERVER } = process.env

export const allProducts = () => {
    return async (dispatch) => {
        const res = await axios.get(`https://my-shop-production.up.railway.app/products`)
        const data = await res.data
        return dispatch({
            type: "ALL_PRODUCTS",
            payload: data
        })
    }
};



export const oneProducts = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`https://my-shop-production.up.railway.app/products/${id}`);
        const data= await res.data

        return dispatch({
            type: "ONE_PRODUCT",
            payload: data
        })
    }
}