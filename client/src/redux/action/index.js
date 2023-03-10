import axios from "axios"
const { REACT_APP_SERVER } = process.env

export const allProducts = () => {
    return async (dispatch) => {
        const res = await axios.get(`${REACT_APP_SERVER}/products`)
        const data = await res.data
        return dispatch({
            type: "ALL_PRODUCTS",
            payload: data
        })
    }
};



export const oneProducts = (id) => {
    return async (dispatch) => {
        const res = await axios.get(`${REACT_APP_SERVER}/products/${id}`);
        const data= await res.data

        return dispatch({
            type: "ONE_PRODUCT",
            payload: data
        })
    }
}