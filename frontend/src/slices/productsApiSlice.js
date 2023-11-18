import { PRODUCTS_URL } from "../constants";
import { apiSlice } from "./apiSlice";

//set endpoints to the products
export const productsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) =>({
        getProducts: builder.query({
            query :()=>({
                url: PRODUCTS_URL,
            }),
            keepUnusedDataFor:5
        }),
        getProductDetails: builder.query({
            query:(productId)=>({
                url: `${PRODUCTS_URL}/${productId}`,
            })
        })
    }),
});

export const {useGetProductsQuery, useGetProductDetailsQuery} = productsApiSlice;