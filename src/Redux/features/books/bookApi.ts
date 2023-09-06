import { api } from "../../api/apiSlice";

const booksApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/books",
    }),
    singleBook: builder.query({
      query: (id) => `/book/${id}`,
    }),
    postBook: builder.mutation({
      query: ({ data }) => ({
        url: `/book`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["book"],
    }),
  }),
});

export const { useGetBooksQuery, useSingleBookQuery, usePostBookMutation } =
  booksApi;
