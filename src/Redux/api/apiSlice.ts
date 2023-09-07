import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://books-world-server.vercel.app/",
  }),
  tagTypes: ["book"],
  endpoints: () => ({}),
});
