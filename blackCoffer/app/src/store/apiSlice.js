import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { setCredentials,logout } from "./authSlice";

const baseQuery = fetchBaseQuery({
    baseUrl:"http://localhost:8080",
    
    prepareHeaders:(headers,{getState})=>{
        const {token} = getState().auth;
        console.log(token)
        if(token) headers.set("authorization",`Bearer ${token}`);
        return headers;
    }
});

const baseQueryWithReauth = async (arg,api,extraOptions)=>{
    let result = await baseQuery(arg,api,extraOptions)
    if(result?.error?.orignalStatus===403){
        console.log("sending refresh token");
        const refreshResult = await baseQuery("/refresh",api,extraOptions)
        console.log(refreshResult)
        if(refreshResult?.data){
            const {user} =api.getState().auth
            console.log(user)
            api.dispatch(setCredentials({...refreshResult.data,user}))
            result = await baseQuery(arg,api,extraOptions)
        }else{
            api.dispatch(logout())
        }
    }
};
// export const apiSlice= createApi({
//     baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080"}),
//     endpoints: (build) => ({})
//   })
export const apiSlice = createApi({
    baseQuery :baseQueryWithReauth,
    endpoints:builder=>({})
})

// getPosts: build.query({
//     // highlight-start
//     query: () => 'posts',
//     // highlight-end
//   }),
//   login: build.mutation({
//    // highlight-start
//    query: (body) => ({
//      url: `login`,
//      method: 'POST',
//      body,
//    }),
//    // highlight-end
//    invalidatesTags: [{ type: 'Post', id: 'LIST' }],
//  }),
