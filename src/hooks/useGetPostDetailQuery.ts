import { getPost } from '@/app/wiki/[id]/_lib/getPost';
import { IPost } from '@/model/Post';
import { useQuery } from '@tanstack/react-query';

export const useGetPostDetailQuery = (id: string) => {
  const { data, isLoading, isError } = useQuery<IPost>({
    queryKey: ['post', 'detail', id],
    queryFn: () => getPost(id as string),
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { data, isLoading, isError };
};
