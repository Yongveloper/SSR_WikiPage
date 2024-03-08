import { getTitles } from '@/app/wiki/[id]/_lib/getTitles';
import { IPost } from '@/model/Post';
import { useQuery } from '@tanstack/react-query';

export const useGetTitlesQuery = () => {
  const { data, isLoading, isError } = useQuery<
    Omit<IPost, 'createdAt' | 'content'>[]
  >({
    queryKey: ['posts', 'titles'],
    queryFn: getTitles,
    staleTime: 60 * 1000,
    gcTime: 300 * 1000,
  });

  return { data, isLoading, isError };
};
