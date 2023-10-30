import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    name:"aman",
    age:29
}

export  const userSlice = createSlice({
    name:"user",
    initialState,
    reducers:{
        setUserDetails : (state,actions)=>{
            
        }
    }
});
export const {} = userSlice.actions
export default userSlice.reducer;