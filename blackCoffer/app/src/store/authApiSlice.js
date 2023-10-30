import { apiSlice } from "./apiSlice";
export const authApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        login:builder.mutation({
            query:(body)=>({
                url:"/login",
                method:"POST",
                body
            })
        }),
    })
});
export const {useLoginMutation} = authApiSlice
