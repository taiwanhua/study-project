import { API_URL } from "config";
import { useState, useCallback } from "react";
import useSWR from "swr";

async function fetcher(key: unknown, params: string): Promise<any> {
  //   let fetcherParamsParsed = params as any;
  //   try {
  //     fetcherParamsParsed = JSON.parse(params);
  //   } catch (error) {
  //     console.log(error);
  //   }
  const oneTableList = await fetch(`${API_URL}/oneTable/getList`);

  return oneTableList;
}

// const initialParams = JSON.stringify({});

export function useRoles() {
  //   const [params, setParams] = useState<string>(initialParams);

  //   const { data } = useSWR([fetcher, params], fetcher);
  const { data } = useSWR([fetcher], fetcher);

  //   const queryOneTableList = useCallback(
  //     ({ keyword, limit, start }: any) => {
  //       setParams(JSON.stringify({ keyword, limit, start }));
  //     },
  //     [],
  //   );

  return { data };
}
