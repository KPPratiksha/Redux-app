import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios, { formToJSON } from "axios";

export const STATUSES = {
    SUCCESS : "sucess",
    ERROR : "error",
    LOADING : "loading"
}

const productSlice = createSlice({
    name:"product",
    initialState:{
        data:[],
        status: STATUSES.SUCCESS
    },
    extraReducers:(builder) => {
        builder.addCase(fetchProducts.pending, (state) => {
            state.status = STATUSES.pending
        }).addCase(fetchProducts.fulfilled, (state, action) => {
            state.status = STATUSES.SUCCESS
            state.data = action.payload
        }).addCase(fetchProducts.rejected, (state)=> {
            state.status = STATUSES.ERROR
        })
    }
    /* reducers:{
        setProducts(state, action)
        {
            state.data = action.payload;
        },
        setStatus(state, action)
        {
            state.status = action.payload;
        }
    } */
})

export const {setProducts, setStatus} = productSlice.actions

export default productSlice.reducer;

export const fetchProducts = createAsyncThunk('products', async() => {
    const res = await axios.get("https://fakestoreapi.com/products");
    return res.data;
})

/* export function fetchProducts(){
    return async function(){
        dispatch(setStatus(STATUSES.LOADING));
        try{
            const res = axios.get("https://fakestoreapi.com/products");
            dispatch(setProducts(res.data));
            dispatch(setStatus(STATUSES.SUCCESS))
        }
        catch{
            dispatch(setStatus(STATUSES.ERROR));
        }
    }
} */