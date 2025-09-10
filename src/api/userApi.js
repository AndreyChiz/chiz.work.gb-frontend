import { api } from "./baseApi";


export const userApi = api.injectEndpoints({

    endpoints: (builder) => ({
        getMe: builder.query({
            query: () => ({
                url: "/user/me",
                method: "GET",
            }),
        }),

        // 🔥 новый endpoint
        // register: builder.mutation({
        //     query: ({ login, password, email, phone }) => ({
        //         url: "/register",
        //         method: "POST",
        //         data: { login, password, email, phone },
        //     }),
        //     transformResponse: (response) => { // получить заголовки только так
        //         return {
        //             body: response.data,
        //             headers: response.headers,
        //             status: response.status,
        //         };
        //     },
        // }),
    }),
    overrideExisting: false,
});


export const { useGetMeQuery, useLazyGetMeQuery } = api;


// endpoints: (builder) => ({
//     getMe: builder.query({
//         query: (id = 1) => ({
//             url: "/user/me",
//             method: "GET",
//             params: { id },
//         }),
//         transformResponse: (response) => {
//             return {
//                 body: response.data,
//                 headers: response.headers,
//                 status: response.status,
//             };
//         },
//     }),

//     // 🔥 новый endpoint
//     register: builder.mutation({
//         query: ({ login, password, email, phone }) => ({
//             url: "/register",
//             method: "POST",
//             data: { login, password, email, phone },
//         }),
//         transformResponse: (response) => {
//             return {
//                 body: response.data,
//                 headers: response.headers,
//                 status: response.status,
//             };
//         },
//     }),
// }),
// });


// export const { useGetMeQuery, useRegisterMutation } = api;
