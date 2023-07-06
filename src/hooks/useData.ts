import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export function useData(url: string, key: string, page: number) {
  //   console.log({ url });
  //   console.log({ key });

  async function fetchData(url: string) {
    const { data } = await axios.get(url);
    return data;
  }

  return useQuery({
    queryFn: async () => fetchData(url),
    queryKey: [key, page],
    keepPreviousData: true,
    refetchOnWindowFocus: false,
  });
}
