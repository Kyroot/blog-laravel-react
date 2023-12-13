import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const postsAPI = createApi({
    reducerPath: "allPostsAPI",
    baseQuery: fetchBaseQuery({ baseUrl: "http://127.0.0.1:8000/api" }),
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: (home) => `${home}`
        }),
        getSinglePost: builder.query({
            query: (slug) => `post/${slug}`
        }),
        logout: builder.mutation({
            query: () => ({
                url:'logout',
                method:'POST',
                headers: {Authorization:`Bearer: ${sessionStorage.getItem('api_token')}`}
            })
        }),
        
    })
})

export const { useGetPostsQuery, useGetSinglePostQuery, useLogoutMutation } = postsAPI;