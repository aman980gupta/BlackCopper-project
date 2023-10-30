import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name:"auth",
    initialState:{user:null,token:null},
    reducers:{
        setCredentials:(state,action)=>{
            const {user,accessToken} = action.payload;
            state.user= user;
            state.token=accessToken
            console.log(state,user)
        },
        logout:(state,action)=>{
            state.token=null;
            state.user=null
        },
    },
});
export const {setCredentials,logout} = authSlice.actions;
export default authSlice.reducer;