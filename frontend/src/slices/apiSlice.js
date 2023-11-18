import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {BASE_URL} from "../constants";

//fetchbasequery helps makes request to our given api endpoint
const baseQuery = fetchBaseQuery({baseUrl: BASE_URL});
//base Query is a function that can be used to make requests

export const apiSlice= createApi({
    //parameter that defines how the api requests are made
    baseQuery,
    //types of data that we will be fetched by our api
    tagTypes:['Product','Order','User'],
    //defines api endpoints
    endpoints:(builder)=>({}),
})
