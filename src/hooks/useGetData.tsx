/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import { useQuery, useQueryClient } from "react-query";

const QUERY_KEY = "getCall";

export const useGet = () => {
  const cache = useQueryClient();
  return useQuery(
    [QUERY_KEY],
    async () => {
      const { data } = await axios.get(
        "www.jsonplaceholder.typicode.com/users"
      );
      return data;
    },
    {
      onError: (error) => {
        console.error("Error fetching account schema:", error);
      },
      onSuccess: (data) => {
        cache.invalidateQueries("getCall");
      },
      staleTime: Infinity,
    }
  );
};
// const cache = useQueryClient();
// cache.invalidateQueries(QUERY_KEY);
