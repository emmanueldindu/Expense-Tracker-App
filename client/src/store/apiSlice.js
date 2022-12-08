import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseURI = 'http://localhost:8080';

export const apiSlice = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseURI
    }),
    endpoints: builder => ({
        getCategories: builder.query({
            query: () => '/api/categories',
            providesTags:['expenses']
        }),
        getLabels: builder.query({
            query: () => '/api/labels',
           providesTags:['transactions'] 
        }),

        addTransaction: builder.mutation({
            query:(initialTransaction) => ({
                url:'/api/transaction',
                    method: "POST",
                        body:initialTransaction
                    

            }),
            invalidatesTags:['transactions']
        }),
//delete record
        deleteTransaction: builder.mutation({
            query: recordld => ({
                url: '/api/transaction',
                method: "DELETE",
                body:recordld
            }),
            invalidatesTags:['transactions']

        })
    })
})

export default apiSlice
