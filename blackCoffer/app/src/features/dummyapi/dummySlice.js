import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import getProducts from "./dummyApi"

const initialState = { products: [] ,status:"idle"};
export const getProductAsync = createAsyncThunk("product/getProducts",async product =>{
    const {data} = await getProducts();
    return data
})

const dummySlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) =>{
    builder
    .addCase(getProductAsync.pending,(state,action)=>{
        state.status = "loading";
        
    })
    .addCase(getProductAsync.fulfilled,(state,action)=>{
        state.status = "idle";
        state.products = action.payload;
    })
  },
})

// export const { } = dummySlice.actions
export default dummySlice.reducer