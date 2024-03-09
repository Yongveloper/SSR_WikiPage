import { getPosts } from '@/app/_lib/getPosts';
import { IPostResponse } from '@/model/Post';
import { useQuery } from '@tanstack/react-query';

export const useGetPostsQuery = (page: string) => {
  const { data, isLoading, isError } = useQuery<IPostResponse>({
    queryKey: ['posts', 'page', page],
    queryFn: () => getPosts(page),
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { data, isLoading, isError };
};
