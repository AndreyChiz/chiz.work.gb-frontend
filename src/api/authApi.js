// authApi.js
import { api } from "./baseApi";

export const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: () => ({
        url: "/auth/register",
        method: "POST"
      }),
    }),
    refreshAccessToken: builder.mutation({
      query: () => ({
        url: "/auth/refresh", // /api/auth/refresh
        method: "POST",
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation, useRefreshAccessTokenMutation, } = authApi;
