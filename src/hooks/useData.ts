import React from 'react';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// interface Data {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

export function useData(url: string, key: string, page: number) {
  console.log({ url });
  console.log({ key });

  // Prefetch the next page!
  //   React.useEffect(() => {
  //     if (!isPreviousData && data?.hasMore) {
  //       queryClient.prefetchQuery({
  //         queryKey: ['projects', page + 1],
  //         queryFn: () => fetchProjects(page + 1),
  //       })
  //     }
  //   }, [data, isPreviousData, page, queryClient])

  async function fetchData(url: string) {
    const { data } = await axios.get(url);
    return data;
  }

  return useQuery({
    queryFn: async () => fetchData(url),
    queryKey: [key, page],
    keepPreviousData: true,
  });
}
