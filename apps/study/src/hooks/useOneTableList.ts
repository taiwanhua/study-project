import { API_URL } from "config";
import useSWR from "swr";

interface OneTableRow {
  id: number;
  name: string;
  cellphone: string;
  adress: string;
  memo: string;
}

async function fetcher(key: unknown): Promise<OneTableRow[]> {
  const oneTableList = await fetch(`${API_URL}oneTable/getList`).then((res) =>
    res.json(),
  );

  return oneTableList;
}

export function useOneTableList() {
  const { data } = useSWR([fetcher], fetcher);

  return { data };
}
