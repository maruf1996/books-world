import { api } from "../../api/apiSlice";

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    singleUser: builder.query({
      query: (email) => `/user/${email}`,
    }),
    postUser: builder.mutation({
      query: ({ data }) => ({
        url: `/user`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const { useSingleUserQuery, usePostUserMutation } = userApi;
