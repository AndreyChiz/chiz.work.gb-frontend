import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { API_URL } from "./config"

// axios instance
const apiClient = axios.create({
    baseURL: API_URL,
    headers: { "Content-Type": "application/json" },
    withCredentials: true,
    timeout: 10000,
});

// кастомный baseQuery
const axiosBaseQuery =
    ({ baseUrl } = { baseUrl: "" }) =>
        async ({ url, method, data, params, headers }) => {
            try {
                const result = await apiClient({
                    url: baseUrl + url,
                    method,
                    data,
                    params,
                    headers,
                });
                return { data: result };
            } catch (axiosError) {
                const err = axiosError;
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                        headers: err.response?.headers,
                    },
                };
            }
        };

export const api = createApi({
    reducerPath: "api",
    baseQuery: axiosBaseQuery({ baseUrl: "" }),
    endpoints: (builder) => ({
        getMe: builder.query({
            query: (id = 1) => ({
                url: "/me",
                method: "GET",
                params: { id },
            }),
            transformResponse: (response) => {
                return {
                    body: response.data,
                    headers: response.headers,
                    status: response.status,
                };
            },
        }),

        // 🔥 новый endpoint
        register: builder.mutation({
            query: ({ login, password, email, phone }) => ({
                url: "/register",
                method: "POST",
                data: { login, password, email, phone },
            }),
            transformResponse: (response) => {
                return {
                    body: response.data,
                    headers: response.headers,
                    status: response.status,
                };
            },
        }),
    }),
});


export const { useGetMeQuery, useRegisterMutation } = api;
