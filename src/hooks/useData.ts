import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

// interface Data {
//   userId: number;
//   id: number;
//   title: string;
//   body: string;
// }

export function useData(url: string, key: string) {
  console.log({ url });
  console.log({ key });
  return useQuery({
    queryFn: async () => {
      const { data } = await axios.get(url);
      console.log({ data });

      return data;
    },
    queryKey: [key],
  });
}
