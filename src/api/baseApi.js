import { createApi } from "@reduxjs/toolkit/query/react";
import axios from "axios";
import { HOST_URL } from "../config"

// axios instance
const apiClient = axios.create({
    baseURL: HOST_URL,
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
    reducerPath: "api", // ⚡️ задаётся только здесь
    baseQuery: axiosBaseQuery({ baseUrl: "/api" }),
    endpoints: () => ({}), // пусто, только для инициализации
});